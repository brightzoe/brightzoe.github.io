# 排序算法

- 基础排序算法：
  - 冒泡排序
  - 插入排序
  - 选择排序
- 进阶排序算法
  - 归并排序
  - 快速排序

## 冒泡排序

冒泡排序的过程，就是从第一个元素开始，重复比较相邻的两个项，若第一项比第二项更大，则交换两者的位置；反之不动。
每一轮操作，都会将这一轮中最大的元素放置到数组的末尾。假如数组的长度是 n，那么当我们重复完 n 轮的时候，整个数组就有序了。

```ts 标准冒泡排序 时间复杂度 O(n^2)
function bubbleSort(arr: number[]) {
  // 控制从头到尾有多少轮
  for (let i = 0; i < arr.length; i++) {
    // 完成每一轮遍历过程中的大小比较和交换
    // 每完成一次循环，后面i个元素就已经是有序的了，所以范围缩小
    for (let j = 0; j + 1 < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

```ts 最优冒泡排序，先一轮排序判断数组是否有序
function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // 加一个标志位，假设进入这次循环中，数组已经是有序的了
    let flag = true;
    for (let j = 0; j + 1 < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // 发生过交换，数组不是有序的
        flag = false;
      }
    }
    if (flag) return arr;
  }
  return arr;
}
```

## 快排

```ts
function quickSort(arr: number[], startIndex = 0, endIndex = arr.length - 1) {
  if (startIndex >= endIndex) {
    // 如果开始索引大于等于结束索引，说明子数组长度为0或1，无需排序
    return arr;
  }

  const pivotIndex = partition(arr, startIndex, endIndex); // 获取经过分区后基准值的索引

  quickSort(arr, startIndex, pivotIndex - 1); // 递归排序基准值左边的子数组
  quickSort(arr, pivotIndex + 1, endIndex); // 递归排序基准值右边的子数组
  return arr;
}

function partition(
  arr: number[],
  startIndex: number,
  endIndex: number,
): number {
  const pivot = arr[startIndex]; // 基准值
  let mark = startIndex; // mark用来记录遍历过程中小于基准值的区域边界

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      mark++; // 找到小于基准值的元素，mark扩大区域边界
      [arr[mark], arr[i]] = [arr[i], arr[mark]]; // 交换元素，将小于基准值的元素移至左边
    }
  }

  // 将基准值交换到中间位置
  [arr[startIndex], arr[mark]] = [arr[mark], arr[startIndex]];
  return mark; // 返回基准值的最终索引
}
```
