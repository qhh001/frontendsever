

## 获取闹钟列表

服务: paradise

路径: /alarms/list

请求:

```json
{
  "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
  "device_uuid": "543eccac-c36c-58a8-82ec-c6eebc97b089",
  "type": "alarm"
}
```

`type`字段可以填写`alarm`或者`reminder`, 分别查询闹钟和提醒.

返回

```json
{
  "waiting": [
    {
      "uuid": "f7c21ae8-a34b-43bc-8f5d-eca81b9d8edb",
      "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
      "device_uuid": "543eccac-c36c-58a8-82ec-c6eebc97b089",
      "type": "reminder",
      "repeat": true,
      "status": "waiting",
      "trigger_time": 1521792720000,
      "content": {
        "text": "吃饭"
      },
      "is_handled": false,
      "is_disabled": false,
      "is_deleted": false,
      "payload": {
        "repeat": true,
        "rules": {
          "every_day": true
        },
        "time": {
          "hour": 8,
          "minute": 12
        }
      },
      "created_at": 1521786201000
    },
    {
      "uuid": "100a145e-e726-4759-8af7-a4ce1aae1dd2",
      "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
      "device_uuid": "543eccac-c36c-58a8-82ec-c6eebc97b089",
      "type": "reminder",
      "repeat": false,
      "status": "waiting",
      "trigger_time": 1527063120000,
      "content": {
        "text": "吃饭"
      },
      "is_handled": false,
      "is_disabled": false,
      "is_deleted": false,
      "payload": {
        "date": {
          "day": 23,
          "month": 5,
          "year": 2018
        },
        "repeat": false,
        "time": {
          "hour": 8,
          "minute": 12
        }
      },
      "created_at": 1521786545000
    }
  ],
  "expired": [
    {
      "uuid": "3b6af21e-a11a-4459-8636-d04fd3d8debb",
      "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
      "device_uuid": "543eccac-c36c-58a8-82ec-c6eebc97b089",
      "type": "reminder",
      "repeat": false,
      "status": "expired",
      "trigger_time": 1495527120000,
      "content": {
        "text": "吃饭"
      },
      "is_handled": false,
      "is_disabled": false,
      "is_deleted": false,
      "payload": {
        "date": {
          "day": 23,
          "month": 5,
          "year": 2017
        },
        "repeat": false,
        "time": {
          "hour": 8,
          "minute": 12
        }
      },
      "created_at": 1521786628000
    }
  ]
}
```

上面返回中, `waiting`和`expired`字段的值为数组, 数组中的元素为标准的alarm结构, 下面对alarm结构进行说明.

- `type`字段的值为`alarm`或者`reminder`分别代表闹钟和提醒. <span style="color:red">在现在的产品设计中, 只有提醒.</span>
- `status`字段的值为`waiting`, `expired`或者`finished`, 分别表示闹钟正在等待触发, 闹钟已经过期, 闹钟已经结束.
- `is_disabled`的值为`true`或`false`. 表示该闹钟是否被禁用.
- `repeat`字段为`true`或`false`, 表示该闹钟是周期性的或者一次性的.
- `content`标识该闹钟的内容. 在现在的产品设计中, 闹钟是没有内容的, `content`为空, 而提醒是由内容的, `content`中的`text`字段表示了文字内容.
- `payload`:
    - `payload`是一个字典, 其中的`repeat`字段和外面的`repeat`字段保持一致. `time`字段内包含小时/分钟/秒, 现在产品设计中不包含秒, 可以传个0.
    - 对于一次性的闹钟, `payload`中存在`date`字段, 表明设定的日期.
    - 对于周期性的闹钟, `payload`中存在`rules`字段, 其可能的值见下面说明.

### 关于`rules`字段的值的说明

### 每天:

```
{
  "every_day": true
 }
```
在现在的产品设计中, 只有这一种情况.
