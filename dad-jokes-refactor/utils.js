// Named export
export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if(item === not) {
    // recursion: if the item is not what we are looking for, then run the function again
    return randomItemFromArray(arr, not); 
  }

  return item;
}