'use strict ';

module.exports = function breadthFirst(tree){

  let temporary = [] ;
  let result = [] ;
  if(tree.root === null){ return null ;}
  // console.log('dddddddddddd',tree,tree.root.val);

  temporary.push(tree.root);

  while(temporary.length !== 0){

    for(let i = 0 ; i < temporary.length ; i++){

      let current = temporary.shift();
      result.push(current.val);
      if(current.left){temporary.push(current.left);}
      if(current.right){temporary.push(current.right);}
    }
  }

  console.log(result);

  return result ;



};
