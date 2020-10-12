/* 
题目：

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素。

实例： 

输入: [4,5,1,6,2,7,3,8] 和 k = 4
输出: 5
*/
/*
  解法：
    1. 全局排序，取第K个数
    2. 局部排序，冒泡
    3. 构造前 k 个最大元素小顶堆，取堆顶
    4. 继续优化，中位数的中位数（BFPRT）算法
*/ 
// 解法3：构造前 k 个最大元素小顶堆，取堆顶 

const arr = [4,5,1,6,2,7,3,8]
const k = 4

let findKthLargest = function(nums, k) {
  // 从 nums 中取出前 k 个数，构建一个小顶堆
  let heap = [,], i = 0
  while(i < k) {
    heap.push(nums[i++]) 
  }
  buildHeap(heap, k)
  
  // 从 k 位开始遍历数组
  for(let i = k; i < nums.length; i++) {
      if(heap[1] < nums[i]) {
        // 替换并堆化
        heap[1] = nums[i]
        heapify(heap, k, 1)
      }
  }
  
  // 返回堆顶元素
  return heap[1]
}

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (arr, k) => {
  if(k === 1) return
  // 从最后一个非叶子节点开始，自上而下式堆化
  for(let i = Math.floor(k/2); i >= 1; i--) {
    heapify(arr, k, i)
  }
}

// 堆化
let heapify = (arr, k, i) => {
  // 自上而下式堆化
  while(true) {
      let minIndex = i
      if(2*i <= k && arr[2*i] < arr[i]) {
        minIndex = 2*i
      }
      if(2*i+1 <= k && arr[2*i+1] < arr[minIndex]) {
        minIndex = 2*i+1
      }
      if(minIndex !== i) {
        swap(arr, i, minIndex)
        i = minIndex
      } else {
        break
      }
  }
}

// 交换
let swap = (arr, i , j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


const resut = findKthLargest(arr, k)

console.log(resut)