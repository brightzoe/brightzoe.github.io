---
sidebar_position: 3
---
# 数组问题

## Map使用

[1. 两数之和 - 力扣（LeetCode）](https://leetcode.cn/problems/two-sum)⭐

- 暴力解：双循环。

  >两层循环一般意味着O(n^2)的时间复杂度。考虑使用空间换时间优化成一层循环。


- 几乎所有求和的问题，都能转变为求差的问题。使用Map和一遍循环实现。

```ts
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target - num), i];
    } else {
      map.set(num, i);
    }
  }
}
```

## 双指针

[88. 合并两个有序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/merge-sorted-array/description/)⭐⭐

1. 将两个指针分别指向两个数组中最后一个有效元素，分别从最后的总长度（m+n）从后向前填充，指针同时向前移动。（因为从后向前填充时，nums1中间有空位。如果从前向后填充则需要额外空间）
2. 两个数组长度可能不相等，若nums1先结束，将剩余的nums2放入nums1前面。若nums2先结束则已经达到目的，直接结束。

```ts
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i: number = m - 1;
  let j: number = n - 1;
  let k: number = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  while (j >= 0) {
    nums1[j] = nums2[j];
    j--;
  }
}
```

[15. 三数之和 - 力扣（LeetCode）](https://leetcode.cn/problems/3sum) ⭐⭐⭐
1. 固定一个数i，另外两个使用双指针。在i+1到length-1的范围内逐渐逼近缩小范围。即**对撞指针**。
2. 需要注意去重的问题。三个值需要分别处理去重。

:::tip
遇到有序数组。很有可能需要双指针。对撞指针可以有效的缩小问题范围。
:::
```ts
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // 重复元素跳过
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] == 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        // 跳过左侧重复元素
        while (nums[j] == nums[j - 1]) {
          j++;
        }
        // 跳过右侧重复元素
        while (nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        // 跳过右侧重复元素
        while (nums[k] == nums[k + 1]) {
          k--;
        }
      } else {
        j++;
        // 跳过左侧重复元素
        while (nums[j] == nums[j - 1]) {
          j++;
        }
      }
    }
  }
  return res;
}
```
