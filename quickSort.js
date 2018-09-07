/**
 * 快速排序
 * 从小到大
 * 远离就是选出一个pivot使得在pivot的左边都比它小，右边都比它大，
 * 不断递归这一过程
 * @version 1.0.0
 */

function quick(arr, left, right) {
  if (left < right) {
    let partIndex = partition(arr, left, right)
    quick(arr, left, partIndex - 1)
    quick(arr, partIndex + 1, right)
  }
  return arr
}
/**
 * pivot左边都是比它小的，右边都是比它大的
 * 将right作为pivot
 */
function partition(arr, left, right) {
  let partIndex = left, pivotValue = arr[right]
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partIndex)
      partIndex++
    }
  }
  swap(arr, right, partIndex)
  return partIndex
}
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function quickSort(arr) {
  return quick(arr, 0, arr.length - 1)
}
console.log(quickSort([3,8,9,6,2,7,1]))