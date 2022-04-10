# leetcode-test

#### 介绍

leetcode 测试

#### 软件架构

软件架构说明

包含的内容如下

https://leetcode-cn.com/problems/reverse-linked-list/

https://leetcode-cn.com/problems/html-entity-parser/

https://leetcode-cn.com/problems/two-sum/

https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/

https://leetcode-cn.com/problems/climbing-stairs/

https://leetcode-cn.com/problems/fibonacci-number/

https://leetcode-cn.com/problems/merge-sorted-array/

https://leetcode-cn.com/problems/powx-n/

https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/

https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array

https://leetcode-cn.com/problems/move-zeroes/

https://leetcode-cn.com/problems/unique-morse-code-words/

#### 安装教程

1. 安装`deno`

https://deno.land/#installation

2. 安装 `udd`

https://deno.land/x/udd#installation

#### 使用说明

1. 测试

```
deno task test
```

2.升级依赖

```
deno task udd
```

3.格式化

```
deno task fmt
```

4.lint

```
deno task lint
```

5.导入模块

不指定版本号

```ts
import {} from "https://gitee.com/masx200/leetcode-test/raw/master/mod.ts";
```

```ts
import {} from "https://github.com/masx200/leetcode-test/raw/master/mod.ts";
```

```ts
import {} from "https://cdn.jsdelivr.net/gh/masx200/leetcode-test/mod.ts";
```

指定版本号

```ts
import {} from "https://gitee.com/masx200/leetcode-test/raw/4.0.1/mod.ts";
```

```ts
import {} from "https://github.com/masx200/leetcode-test/raw/4.0.1/mod.ts";
```

```ts
import {} from "https://cdn.jsdelivr.net/gh/masx200/leetcode-test@4.0.1/mod.ts";
```

6.使用举例

```ts
import {
    ArrayToListNode,
    climbing_stairs,
    fei_bo_na_qi_shu_lie_lcof,
    fibonacci_Number,
    find_all_numbers_disappeared_in_an_array,
    html_Entity_Parser,
    ListNode,
    ListNodeToArray,
    merge_Sorted_Array,
    move_zeros,
    pow_x_n,
    que_shi_de_shu_zi_lcof,
    reverse_Linked_List,
    two_Sum,
    unique_morse_code_words,
} from "./mod.ts";
```

#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request
