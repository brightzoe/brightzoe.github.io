# 使用 antd 时踩过的坑

使用 antd 时踩过的坑，以及，一点小小的经验总结。

## Tabs

### 切换 tab，数据不会更新。

使用场景：两个 tab，对 tab2 进行操作，可能会对 tab1 展示的数据有所改变，但 tab1 的数据并不会更新。

> Tabs 有默认的缓存机制。

清除缓存可以采用：

```js
<TabPane tab="tab1" key="1">
  {/*加三元表达式判断:清除Tabs组件默认的缓存机制*/}
  {activeTabKey === "1" ? <TabContent /> : null}
</TabPane>
```

## Form

### 表单元素嵌套

报错提示：`[antd: Form.Item] `children`is array of render props cannot have`name`.`

```js
//由于在 Form.Item 中插入了不止一个元素。按照一个元素的方式写就会有上述错误。
<Form.Item label="username" name="username">
  <Input />
  <span>please input username.</span>
</Form.Item>

//正确写法：label留在外面，实际的元素用Form.Item再包一层，name 加在最里面。
<Form.Item label="username">
  <Form.Item name="username">
  <Input />
  </Form.Item>
  <span>please input username.</span>
</Form.Item>
```

复杂表单绑定里面元素：https://ant.design/components/form/#components-form-demo-complex-form-control

### 在部分场景下，禁用表单所有元素

1. 给每个元素都写 disabled 属性过于繁琐。

2. 在原生的 form 禁用所有表单元素的方法：使用`<fieldset>`,不适用于 antd

> HTML `<fieldset>` 元素用于对表单中的控制元素进行分组（也包括 label 元素）。

```html
<form>
  <fieldset disabled>
    <legend>表单标题</legend>
    <...>
  </fieldset>
</form>
```

3. 这个需求还蛮普遍的，antd 暂时没提供这样的方法(https://github.com/ant-design/ant-design/issues/30270)

## Carousel

### 自定义箭头

使用 ref 与 Carousel 的方法:`ref.current.prev()`

    1. https://stackoverflow.com/questions/58475891/using-ant-designs-carousel-next-and-previous-pane-methods-in-typescript?noredirect=1

    2. https://stackoverflow.com/questions/67881626/ant-design-custom-carousel

## Reference:

- 如何 disabled 禁用所有表单 input 输入框元素-原生 https://www.zhangxinxu.com/wordpress/2019/04/disabled-all-form-elements/
- `<fieldset>`-MDN https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/fieldset
