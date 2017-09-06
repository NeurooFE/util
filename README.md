# 常用方法

## Object

### getObjectDeep

获取对象深层属性的值，支持 `parse` 对象。

#### 参数：

| 参数         | 类型     | 描述                                 | 必填   |
| ---------- | ------ | ---------------------------------- | ---- |
| obj        | Object | 源对象（可以为 `parse` 对象）                | 是    |
| key        | String | 属性名，多层属性写成 `key1.key2.key3...` 的形式 | 是    |
| defaultVal | *      | 最终值为 `undfined` 时，返回的默认值           | 否    |

#### 例子

```javascript
const obj = {
    key1: {
        nest: 'value'
    }
}

getObjectDeep(obj, 'key1.nest')  // return 'value'
```

