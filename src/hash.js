import linkedList from "./linkedList";

class HashMap {

    constructor() {
            this.bucketSize = 16;
            this.loadFactor = 0.75;
            this.size = 0;
            this.bucket = Array(16).fill(null).map(() => []);
    };
    
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.bucketSize;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucketIndex = this.bucket[index];

        // Iterate through the existing subBuckets
        for (let i = 0; i < bucketIndex.length; i++){
            const subBucket = bucketIndex[i];

            if(subBucket.contains(key)){
                // Check if key already contains in the subBucket, update its value otherwise
                subBucket.append(value);
                return;
            };
            
        };

        // Check if the bucket is empty if so append the key and value to their respective nodes
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
    
}


const myHashMap = new HashMap();

myHashMap.set("RC", "Ricardo Carvalho");
myHashMap.set("RC", "Ricardo Cszx")
myHashMap.set("RC", "Ricardo Csdadsa")
myHashMap.set("FC", "Ficardo Csdadsa")
myHashMap.set("FC", "Fiordsa Csdadsa")
console.log(myHashMap.bucket);
myHashMap.resize();
console.log(myHashMap.bucket);
console.log(myHashMap.has("FC"));
console.log(myHashMap.get("FC"));
console.log(myHashMap.remove("FC"));
console.log(myHashMap.bucket);
console.log(myHashMap.length());
