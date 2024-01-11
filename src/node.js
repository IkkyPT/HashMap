// Function to create new Node
function createNode(value, nextNode = null){
    return {
        value: value || null,
        nextNode,
    }
}

export default createNode;