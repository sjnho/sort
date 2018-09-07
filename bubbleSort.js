/**
 * 冒泡排序
 * 从小到大
 * 原理就是循环的每一步通过swap将最大值放到最右边，
 * 每次循环数-1
 * @version 1.0.0
 */

function bubbleSort(arr) {
  const length = arr.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1-i; j++){
      if(arr[j] > arr[j+1]){
        swap(arr,j,j+1)
      }
    }
  }
  return arr
}
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

console.log(bubbleSort([3,8,9,6,2,7,1]))