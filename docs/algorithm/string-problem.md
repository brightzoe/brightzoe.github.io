---
sidebar_position: 4
---

# 字符串问题

## 字符串反转

没有直接反转的方法，转换成数组反转再反转回来。

```ts
const str = 'brightzoe';
const reverse = str.split('').reverse().join('');
```

[125. 验证回文串 - 力扣（LeetCode）](https://leetcode.cn/problems/valid-palindrome/) ⭐⭐✨

- 正则匹配
- 双指针

```ts
function isPalindrome(s: string): boolean {
  // 都转换为小写
  const lowerCase = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  // 双指针
  while (i < j) {
    // i是其他字符
    if (!check(lowerCase[i])) {
      i++;
    }
    // j是其他字符
    else if (!check(lowerCase[j])) {
      j--;
    }
    // 正常字符
    else {
      if (lowerCase[i] !== lowerCase[j]) {
        return false;
      } else {
        i++;
        j--;
      }
    }
  }
  return true;
  // 判断是数字或小写字母
  function check(str: string) {
    const code = str.charCodeAt(0);
    if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) {
      return true;
    }
    return false;
  }
}
```

[680. 验证回文串 II- 力扣（LeetCode）](https://leetcode.cn/problems/valid-palindrome-ii/) ⭐⭐⭐

- 双指针并利用回文字符串的对称性使用对撞指针缩小范围。

```ts
function validPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else if (checkPalindrome(s, i + 1, j)) {
      return true;
    } else if (checkPalindrome(s, i, j - 1)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}

function checkPalindrome(s: string, i: number, j: number): boolean {
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
```

## 正则匹配

[211. 添加与搜索单词 - 数据结构设计 - 力扣（LeetCode）](https://leetcode.cn/problems/design-add-and-search-words-data-structure/)⭐⭐⭐

- 确定好用什么结构匹配。Set也可以，Map也可以，但可以根据字符串长度分类进Map，效率会更高。
- 正则匹配。要注意筛选字符串长度是否匹配，容易出错。
-

```ts
class WordDictionary {
  private words;
  constructor() {
    this.words = new Map<number, string[]>();
  }

  addWord(word: string): void {
    if (this.words.has(word.length)) {
      this.words.get(word.length)?.push(word);
    } else {
      this.words.set(word.length, [word]);
    }
  }

  search(word: string): boolean {
    // 长度先筛选一遍
    if (!this.words.has(word.length)) {
      return false;
    }
    if (!word.includes('.')) {
      return this.words.get(word.length)!.includes(word);
    } else {
      // 正则中的.可以匹配任意字符
      const reg = new RegExp(word);
      return this.words.get(word.length)!.some((w) => reg.test(w));
    }
  }
}
```

[8. 字符串转换整数 (atoi) - 力扣（LeetCode）](https://leetcode.cn/problems/string-to-integer-atoi)⭐⭐⭐

- 正则匹配+捕获组
```ts
function myAtoi(s: string): number {
    const max = Math.pow(2, 31) - 1
    const min = -max - 1
    // 空格+符号+数字+任意字符 捕获
    const reg = /^\s*([+-]?[0-9]*).*/
    const match = s.match(reg)
    // 捕获组从1开始
    if (match[1]) {
        const number = Number(match[1])
        // 只有符号
        if (isNaN(number)) {
            return 0
        }
        // 边界判断
        if (number < min) {
            return min
        }
         if (number > max) {
            return max
        }
        return number

    } else {
        return 0

    }

};
```
