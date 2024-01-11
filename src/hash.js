import linkedList from "./linkedList";

class HashMap {

    // hash constructor
    constructor() {
            this.bucketSize = 16;
            this.loadFactor = 0.75;
            this.size = 0;
            this.bucket = Array(16).fill(null).map(() => []);
    };
    
    //  takes a value and produces a hash code with it.
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.bucketSize;
    }

    // adds a key-value pair to a hash table, handling collisions and triggering a resize if needed.
    set(key, value) {
        const index = this.hash(key);
        const bucketIndex = this.bucket[index];

        for (let i = 0; i < bucketIndex.length; i++){
            const subBucket = bucketIndex[i];

            if(subBucket.contains(key)){
                subBucket.append(value);
                return;
            };
            
        };

        if(bucketIndex !== key) {
            const subBucket = linkedList.createLinkedList();
            bucketIndex.push(subBucket);
            subBucket.prepend(key);
            subBucket.append(value);

            this.size++;

            if(this.size / this.bucketSize > this.loadFactor){
                this.resize();
            }
        }
    }

    // double bucket size, rehashing existing key-value pairs, and updating the internal state accordingly.
    resize() {
        const oldBucket = this.bucket;
        this.bucketSize *= 2;
        const newBucket = Array(this.bucketSize).fill(null).map(() => []);
        this.size = 0;
    
        for (let x = 0; x < oldBucket.length; x++) {
            if (oldBucket[x].length > 0) {
                const newLocation = this.hash(oldBucket[x][0].head.value);
                const stringRepresentation = oldBucket[x][0].toString();
                const reconstructedLinkedList = linkedList.toNode(stringRepresentation);
                newBucket[newLocation].push(reconstructedLinkedList);
            }
        }
    
        this.bucket = newBucket;
    }

    // get method for the hash table, retrieving the string representation of a value associated with a given key if it exists; otherwise, it returns false.
    get(key) {
        const index = this.hash(key);
        const bucketData = this.bucket;
        
        if(bucketData[index] && bucketData[index].length > 0) {
            if(bucketData[index][0] && bucketData[index][0].head.value === key){
                return bucketData[index][0].toString();
            }
        }

         return false;
    }
    
    // checking if a given key exists in the table and returning true if found, otherwise returning false.
    has(key) {
        const index = this.hash(key);
        const bucketData = this.bucket;
        
        if(bucketData[index] && bucketData[index].length > 0) {
            if(bucketData[index][0] && bucketData[index][0].head.value === key){
                return true;
            }
        }

         return false;
    }

    // remove defined key from the hash table
    remove(key) {
        const index = this.hash(key);
        const bucketData = this.bucket;
    
        if (bucketData[index] && bucketData[index].length > 0) {    
            if (bucketData[index][0].head && bucketData[index][0].head.value === key) {
                bucketData[index].shift();
                this.size--;
                return `Key "${key}" removed successfully.`;
            }
        }
    
        return `The key "${key}" doesn't exist in the hash map.`;
    }

    // return the amount of key that exist in the hash table
    length() {
        let count = 0;
        const bucketData = this.bucket;

        for (let i = 0; i < bucketData.length; i++){
            if(bucketData[i].length > 0){
                count++;
            }
        }

        return count;
    }

    // removes all the entries in the hash map
    clear() {
        let index = 0;
        const bucketData = this.bucket;
        while (bucketData.length > index){
            if(bucketData[index][0]) {
                const key = bucketData[index][0].head.value;
                this.remove(key);
                this.bucketSize--;
            }
            index++;
        }
    }

    // returns an array containing all the keys inside the hash map.
    keys() {
        let index = 0;
        const keys = [];
        const bucketData = this.bucket;
        while (bucketData.length > index){
            if(bucketData[index][0]) {
                const key = bucketData[index][0].head.value;
                keys.push(key);
            }
            index++;
        }
        return keys;
    }

    // returns an array containing all the values.
    values() {
        const keys = this.keys();
        const values = [];
    
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const index = this.hash(key);
    
            if (this.bucket[index] && this.bucket[index].length > 0) {
                let current = this.bucket[index][0].head;
    
                while (current) {
                    if (current.value !== key) {
                        values.push(current.value);
                    }
                    current = current.nextNode;
                }
            }
        }
    
        return values;
    }

    // returns an array containing each key-value pair as [key, value] arrays
    entries() {
        const result = [];

        for (let i = 0; i < this.bucket.length; i++) {
            const bucketIndex = this.bucket[i];

            if (bucketIndex && bucketIndex.length > 0) {
                let current = bucketIndex[0].head;

                while (current) {
                    const key = bucketIndex[0].head.value;
                    const value = current.nextNode ? current.nextNode.value : null;

                    if (value !== null) {
                        result.push([key, value]);
                    }

                    current = current.nextNode;
                }
            }
        }

        return result;
    }    
}

const myHashMap = new HashMap();

