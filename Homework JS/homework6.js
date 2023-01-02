const treeNodes = [
  {
    parent: "0",
    id: 1,
    children: null,
  },
  {
    parent: "0",
    id: 2,
    children: null,
  },
  {
    parent: "1",
    id: 3,
    children: null,
  },
  {
    parent: "1",
    id: 4,
    children: null,
  },
  {
    parent: "2",
    id: 5,
    children: null,
  },
  {
    parent: "4",
    id: 6,
    children: null,
  },
];
const listToTree = (treeNodes = []) => {
  let map = {},
    node,
    res = [],
    i;
  for (i = 0; i < treeNodes.length; i += 1) {
    map[treeNodes[i].id] = i;
    treeNodes[i].children = [];
  }
  for (i = 0; i < treeNodes.length; i += 1) {
    node = treeNodes[i];
    if (node.parent !== "0") {
      treeNodes[map[node.parent]].children.push(node);
    } else {
      res.push(node);
    }
  }
  return res;
};
console.log(JSON.stringify(listToTree(treeNodes), undefined, 4));
