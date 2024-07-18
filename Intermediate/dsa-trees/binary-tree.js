/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root) return 0;
    function minDepthMiniFunc(node){
      if (node.left === null && node.right === null) return 1; //both the left and right nodes are null
      if (node.left === null) return minDepthMiniFunc(node.right) + 1; //if left node is null, return the right node + 1
      if (node.right === null) return minDepthMiniFunc(node.left) + 1; //if right node is null, return the left node + 1
      return (
        Math.min(minDepthMiniFunc(node.left), minDepthMiniFunc(node.right)) + 1 //return the results
      );
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root) return 0;
    function maxDepthMiniFunc(node){
      if (node.left === null && node.right === null) return 1; //both the left and right nodes are null
      if (node.left === null) return maxDepthMiniFunc(node.right) + 1; //if left node is null, return the right node + 1
      if (node.right === null) return maxDepthMiniFunc(node.left) + 1; //if right node is null, return the left node + 1
      return (
        Math.max(maxDepthMiniFunc(node.left), maxDepthMiniFunc(node.right)) + 1 //return the results
      );
    }

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;

    function maxDepthMiniFunc(node){
      if (node === null) return 0;
      const leftTot = maxDepthMiniFunc(node.left);
      const rightTot = maxDepthMiniFunc(node.right);
      result = Math.max(result + node.val + leftTot + rightTot);
      return Math.max(0, leftTot + node.val, rightTot + node.val);
    }
    maxDepthMiniFunc(this.root);
    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root) return null;
      // Running the BFG on the experiment
      let queue = [this.root];
      let closest = null;
  
      while (queue.length) {
        let currentNode = queue.shift();
        let currentVal = currentNode.val;
        let higherGreaterThanLower = currentVal > lowerBound;
        let reassignClose = currentVal < closest || closest === null;
  
        if (higherGreaterThanLower && reassignClose) {
          closest = currentVal;
        }
  
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
  
      return closest;
  
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) return false; //setting the condition
    function currentToParent(
      nodeToFind,
      currentNode,
      level = 0,
      data = { level: 0, parent: null }
    ) {
      if (data.parent) return data;
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      }
      if (currentNode.left) {
        currentToParent(nodeToFind, currentNode.left, level + 1, data);
      }
      if (currentNode.right) {
        currentToParent(nodeToFind, currentNode.right, level + 1, data);
      }
      return data;
    }

    let node1Info = currentToParent(node1, this.root);
    let node2Info = currentToParent(node2, this.root);

    let similar =
      node1Info && node2Info && node1Info.level === node2Info.level;
    let differentPairs =
      node1Info && node2Info && node1Info.parent !== node2Info.parent;
    return similar && differentPairs;

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {
    const strings = [];
    function serializeTraverse(node){
      if (node) {
        strings.push(node.val);
        serializeTraverse(node.left);
        serializeTraverse(node.right);
      } else {
        values.push("#");
      }

    }
    serializeTraverse(tree.root);
    return strings.join(" ");

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    if (!stringTree) return null;
    const emptyNodes = stringTree.split(",");

    function createNewTree() {
      // building a tree starting from the beginning of the array
      if (emptyNodes.length) {
        const currentVal = emptyNodes.shift();

        if (currentVal === "#") return null;

        // remember to convert values back into numbers
        let currentNode = new BinaryTreeNode(+currentVal);
        currentNode.left = createNewTree();
        currentNode.right = createNewTree();

        return currentNode;
      }
    }

    const root = createNewTree();
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode = this.root) {
    if (!currentNode) return null; // case 1: empty node
    if (currentNode === node1 || currentNode === node2) return currentNode; // case 2: one is a target node
    const left = this.lowestCommonAncestor(node1, node2, currentNode.left); //search the left subtree recursively
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right); //search the right subtree recursively
    // if neither left nor right is null, currentNode is the ancestor
    if (left !== null && right !== null) return currentNode;
    // if either is left or right is null, currentNode is the ancestor
    if (left !== null || right !== null) return left || right;
    if (left === null && right === null) return null; //if both are equaling to null

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
