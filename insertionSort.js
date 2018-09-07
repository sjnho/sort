/**
 * 插入排序
 * 原理：从第二个元素开始不断的找的一个合适位置插进去，使得左侧的元素小于自身
 */
function insertionSort(arr) {
  const length = arr.length
  for (let i = 1; i < length; i++) {
    let element = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > element) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = element;
  }
  return arr
}
console.log(insertionSort([3, 8, 9, 6, 2, 7, 1]))