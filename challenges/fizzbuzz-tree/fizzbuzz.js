'use strict ';

module.exports = function FizzBuzzTree(tree){
  // console.log('dddddddddddd',tree,tree.root.val);
  let result = [];
  let _walk = (node) => {
    if(node.val % 3 === 0 && node.val % 5 === 0){
      node.val = 'fizzBuzz';
      result.push(node.val);
      // console.log('mmmmmmmmmm1',node.val)
    }else if(node.val % 3 === 0){
      node.val = 'fizz';
      result.push(node.val);
      // console.log('mmmmmmmmmm2',node.val)

    }else if(node.val % 5 === 0){
      node.val = 'buzz';
      result.push(node.val);
      // console.log('mmmmmmmmmm3',node.val)

    }else{
      node.value = `${node.val}`;
      result.push(node.value);
      // console.log('mmmmmmmmmm4',node.val)

    }

    if(node.left)_walk(node.left);
    if(node.right)_walk(node.right);
  };

  _walk(tree.root);
  // console.log('ggggggggggggg',result);


  return result ;
};


