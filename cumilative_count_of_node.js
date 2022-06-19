const array = [
    {
      categoryId: 7,
      parentId: null,
      count: 3
    },
    {
      categoryId: 2,
      parentId: 7,
      count: 2
    },
    {
      categoryId: 3,
      parentId: 2,
      count: 1
    },
    {
      categoryId: 4,
      parentId: 3,
      count: 5
    },
    {
      categoryId: 8,
      parentId: 3,
      count: 4
    }
]

const convertArrayToTree = (arr) => {
    // we dont need sorting here as may be 'upper' node can have greater is then 'lower', we need just root node
    const rootNode = arr.find((elem) => elem.parentId === null);
    const queque = [rootNode]
    let tree = {...rootNode}

    while (queque.length) {
        let currentNode = queque.shift()
        currentNode.children  = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].parentId === currentNode.categoryId) {
                currentNode.children.push(arr[i])
                queque.push(arr[i]);
            }
        }

        if (!currentNode.parentId) {
            tree = {...tree, ...currentNode}
        }
    }
    return tree;
  }

  const findNode = (tree, nodeId) => {
    if (tree.categoryId === nodeId) return tree;
    let node = null;
    const queue = [...tree.children];
    while (queue.length) {
        const current = queue.shift();
        if (current.categoryId === nodeId) {
            node = current;
            break;
        } else {
            current.children.forEach((child) => queue.push(child));
        }
    }
    return node;
}

const getCumulativeCount = (node) => {
    if (!node) return null;
    const queue = [node];
    let sum = 0;
    while (queue.length) {
        const current = queue.shift();
        sum += current.count;
        current.children.forEach(child => queue.push(child));
    }
    return sum;
}


const tree = convertArrayToTree(array);

// const startNode = findNode(tree, 2);
// const count = getCumulativeCount(startNode); // 12

// const startNode = findNode(tree, 7);
// const count = getCumulativeCount(startNode); // 15

// const startNode = findNode(tree, 8);
// const count = getCumulativeCount(startNode); // 4

// children not iterable

// const startNode = findNode(tree, 3);
// const count = getCumulativeCount(startNode); // 10

// const startNode = findNode(tree, 4);
// const count = getCumulativeCount(startNode); // 5


console.log(tree);
console.log(count);