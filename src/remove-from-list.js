const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * 
 */
// class ListNode {
//    constructor(x) {
//        this.value = x;
//        this.next = null;
//     }
//   }





function removeKFromList(l, k) {
  
  let arr = l;
  let previous = null;
  while (arr !== null) {
    if (arr.value === k) {
      if (previous === null) {
        l = arr.next;
      } else {
        previous.next = arr.next;
      }
    } else {
      previous = arr;
    }
    arr = arr.next;
  }
  return l;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== k) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;
}

// console.log(removeKFromList([1, 4, 6, 7, 8, 4, 6, 4 ], 4))

module.exports = {
  removeKFromList
};
