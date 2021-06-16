function findFirstDuplicate(arr) {
  const seen = new Set();

  for(let i=0; i < arr.length; i++){
    if(seen.has(arr[i])) return arr[i]
    seen.add(arr[i]);
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 1, 3, 4,8, 20, 32, 2, 1]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/* 
I need to look at all the elements of the array
(for loop?)
I need something to hold each of elements after they've been looked at
(Set or Map?)
  set is an object that lets you store unique values
I need to compare each value of the array to the already seen elements
(.includes()?)
  Set has a method .has to check if a value is in a Set, and faster than .includes()
*/

// And a written explanation of your solution
/*
1. construct a new, empty Set called 'seen'
2. use a for loop that runs the length of the passed in array
3. on each iteration of the loop, check if the element at the current position exists in 'seen' using .has method. If so, return that element.
4. otherwise, add that element to 'seen' to be checked against on the next iteration
5. if the loop completes and 'seen' never 'has' any of the elements, return -1
*/