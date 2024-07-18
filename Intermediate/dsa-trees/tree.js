/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root)
      return 0;
    let sum = this.root.val;

    function traverseSum(node){
      for (let child of node.children){ //go through all the nodes
        sum += child.val; //accumulate the sum of values
      if (child.children.length > 0){ //see if it is > 0 to determine if there are any children
        traverseSum(child); //recurse with the root
      }
      }
    }

    traverseSum(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root){
      return 0;
    }
    let count = this.root.val % 2 === 0 ? 1 : 0; 

    function traverseEven(node){
      for (let child of node.children) {
        if (child.val % 2 === 0) count++; //only counting the even number of child in the node
        if (child.children.length > 0) { // if there are any children
          traverseEven(child); //recurse with the child as a root
        }
      }
      traverseEven(this.root);
      return count;
    }
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root){
      return 0;
    }
    let count = this.root.val > lowerBound ? 1 : 0; 

    function traverseEven(node){
      for (let child of node.children) {
        if (child.val > lowerBound) count++; //only counting the even number is greater than the lowerBound
        if (child.children.length > 0) { // if there are any children
          traverseEven(child); //recurse with the child as a root
        }
      }
      traverseEven(this.root);
      return count;
    }

  }
}

module.exports = { Tree, TreeNode };
