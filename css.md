- [颜色类名](#颜色类名)
  - [主题颜色](#主题颜色)
  - [文字颜色](#文字颜色)
  - [背景颜色](#背景颜色)
  - [描边颜色](#描边颜色)
- [工具类](#工具类)
  - [布局](#布局)
  - [字体](#字体)
    - [字号.](#字号)
    - [对齐](#对齐)
    - [样式](#样式)
  - [间距](#间距)
  - [边框](#边框)
  - [其他](#其他)

# 颜色类名

## 主题颜色
| 颜色                                                                               | 类名           | 颜色值    |
| ---------------------------------------------------------------------------------- | -------------- | --------- |
| <div style="display:inline-block;width:14px;height:14px;background:#3097e5"></div> | `.main-blue`   | `#3097e5` |
| <div style="display:inline-block;width:14px;height:14px;background:#e9a33a"></div> | `.main-yellow` | `#e9a33a` |
| <div style="display:inline-block;width:14px;height:14px;background:#e93b9d"></div> | `.main-pink`   | `#e93b9d` |
| <div style="display:inline-block;width:14px;height:14px;background:#30e599"></div> | `.main-green`  | `#30e599` |

## 文字颜色

| 颜色                                                                               | 类名                | 颜色值    |
| ---------------------------------------------------------------------------------- | ------------------- | --------- |
| <div style="display:inline-block;width:14px;height:14px;background:#3097e5"></div> | `.font-blue`        | `#3097e5` |
| <div style="display:inline-block;width:14px;height:14px;background:#e9a33a"></div> | `.font-yellow`      | `#e9a33a` |
| <div style="display:inline-block;width:14px;height:14px;background:#e93b9d"></div> | `.font-pink`        | `#e93b9d` |
| <div style="display:inline-block;width:14px;height:14px;background:#30e599"></div> | `.font-green`       | `#30e599` |
| <div style="display:inline-block;width:14px;height:14px;background:#333333"></div> | `.font-black`       | `#333333` |
| <div style="display:inline-block;width:14px;height:14px;background:#b8b8b8"></div> | `.font-grey-slight` | `#b8b8b8` |
| <div style="display:inline-block;width:14px;height:14px;background:#999999"></div> | `.font-grey-light`  | `#999999` |
| <div style="display:inline-block;width:14px;height:14px;background:#666666"></div> | `.font-grey`        | `#666666` |
| <div style="display:inline-block;width:14px;height:14px;background:#fff"></div>    | `.font-white`       | `#fff`    |

## 背景颜色

| 颜色                                                                               | 类名              | 颜色值    |
| ---------------------------------------------------------------------------------- | ----------------- | --------- |
| <div style="display:inline-block;width:14px;height:14px;background:#3097e5"></div> | `.bg-blue`        | `#3097e5` |
| <div style="display:inline-block;width:14px;height:14px;background:#e9a33a"></div> | `.bg-yellow`      | `#e9a33a` |
| <div style="display:inline-block;width:14px;height:14px;background:#e93b9d"></div> | `.bg-pink`        | `#e93b9d` |
| <div style="display:inline-block;width:14px;height:14px;background:#30e599"></div> | `.bg-green`       | `#30e599` |
| <div style="display:inline-block;width:14px;height:14px;background:#f5f7fd"></div> | `.bg-blue-light`  | `#f5f7fd` |
| <div style="display:inline-block;width:14px;height:14px;background:#fff4fa"></div> | `.bg-pink-light`  | `#fff4fa` |
| <div style="display:inline-block;width:14px;height:14px;background:#d9d9d9"></div> | `.bg-grey`        | `#d9d9d9` |
| <div style="display:inline-block;width:14px;height:14px;background:#f1f1f1"></div> | `.bg-grey-light`  | `#f1f1f1` |
| <div style="display:inline-block;width:14px;height:14px;background:#f3f3f3"></div> | `.bg-grey-slight` | `#f3f3f3` |
| <div style="display:inline-block;width:14px;height:14px;background:#fff"></div>    | `.bg-white`       | `#fff`    |

## 描边颜色
| 颜色                                                                               | 类名                 | 颜色值    |
| ---------------------------------------------------------------------------------- | -------------------- | --------- |
| <div style="display:inline-block;width:14px;height:14px;background:#3097e5"></div> | `.border-blue`       | `#3097e5` |
| <div style="display:inline-block;width:14px;height:14px;background:#e9a33a"></div> | `.border-yellow`     | `#e9a33a` |
| <div style="display:inline-block;width:14px;height:14px;background:#e93b9d"></div> | `.border-pink`       | `#e93b9d` |
| <div style="display:inline-block;width:14px;height:14px;background:#30e599"></div> | `.border-green`      | `#30e599` |
| <div style="display:inline-block;width:14px;height:14px;background:#f1f1f1"></div> | `.border-grey-light` | `#f1f1f1` |

# 工具类

## 布局

> V表示作用垂直方向,H表示作用水平方向.

| 类名               | 说明                     | 样式                             |
| ------------------ | ------------------------ | -------------------------------- |
| `.flex`            | 设置弹性盒模型           | `display: flex`                  |
| `.flex-{1-12}`     | 按比例分配`felx-{1-12}`  | `flex: 1`                        |
| `.flex-wrap`       | 允许换行                 | `flex-wrap: wrap`                |
| `.flex-column `    | 元素垂直排列             | `flex-direction: column`         |
| `.align-h-left`    | 元素**左**排列           | `justify-content: flex-start`    |
| `.align-h-right`   | 元素**右**排列           | `justify-content: flex-end`      |
| `.align-h-center`  | 元素**居中**排列         | `justify-content: center`        |
| `.align-h-between` | 元素**两端**排列         | `justify-content: space-between` |
| `.align-h-around`  | 元素**周围空间分布**排列 | `justify-content: space-around`  |
| `.align-v-top`     | 元素**顶部对齐**         | `align-items: flex-start`        |
| `.align-v-bottom`  | 元素**底部对齐**         | `align-items: flex-end`          |
| `.align-v-center`  | 元素**垂直居中**         | `align-items: center`            |

## 字体

### 字号.

| 类名            | 例子      | 样式               |
| --------------- | --------- | ------------------ |
| `.font-{1-100}` | `font-12` | ` font-size: 12px` |


### 对齐

| 类名           | 说明       | 样式                  |
| -------------- | ---------- | --------------------- |
| `.font-center` | 文本居中   | ` text-align: center` |
| `.font-right`  | 文本右对齐 | ` text-align: center` |

### 样式

| 类名                  | 说明                                                   | 样式                |
| --------------------- | ------------------------------------------------------ | ------------------- |
| `.font-bold`          | 文本加粗                                               | `font-weight: bold` |
| `.text-hidden-{1-10}` | 设置文本溢出省略,列如:`text-hidden-2`,文本两行自动省略 | -                   |

## 间距

> 填充和间距格式一致

例子:`m-t-10`上间距`10px`,`m-tb-10`上下间距`10px`

- `m`: 间距
- `p`: 填充
- `t`: 上
- `b`: 下
- `l`: 左
- `r`: 右
- `tb`: 上下
- `lr`: 左右

## 边框

格式:`border-top`,为元素添加上边框.

- `top`: 上
- `bottom`: 下
- `left`: 左
- `right`: 右

## 其他

| 类名             | 说明               |
| ---------------- | ------------------ |
| `.disabledClick` | 禁止元素点击事件   |
| `.pointer`       | 元素鼠标移入变手型 |