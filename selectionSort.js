/**
 * 选择排序
 * 原理最直观，选出剩下的里面最小的放在当前位。
 */
function selectionSort(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    for (let j = i; j < length; j++) {
        if(arr[j] < arr[minIndex]){
          minIndex = j
        }
    }
    let temp  = arr[i];
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
console.log(selectionSort([3,8,9,6,2,7,1]))