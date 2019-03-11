Sentence Pattern 相关接口：
------------


### 1.  create 接口

#### 接口功能

> 创建新的句式

#### URL: 

> /sentence_patterns/create

#### 支持格式

> JSON

#### HTTP请求方式

> POST

#### 请求参数

|参数    |  必选  |  类型 | 说明  |
|:----- |:-------|:-----|----- |
|name |ture |string| 句式的名称 |
|service_uuid |true |string |  该句式所属服务的uuid|
|user_intent_uuid |true |string |  该句式所属用户意图的uuid|
|note | true |string |  对于这个句式的描述，方便理解 |
|definition | true |string |  句式的定义，可以为空字符串 |
|priority | true |int |  句式的优先级，取值范围1-5 |
|parts | false |  object |  句式的parts |
|parts.name | true |  string |  part的名字 |
|parts.phrases | true |  object |  part由哪些短语组成 |
|parts.phrases.note | true |  object |  短语的描述 |
|parts.phrases.template | true |  object |  模板的具体定义 |
|parts.phrases.variables | true |  object |  额外参数 |


#### 返回
 
|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|error |false |string| 错误信息，若有该字段则表示有错误 |
|sentence_pattern |true |object | 新创建的 句型 的详细 情况|
|sentence_pattern.uuid |true |string | 新创建的 句型 的 uuid|

> 剩余省略字段，内容全部与发送中内容相同

#### 接口示例 

发送请求：

```json
{
  "name": "[表达听音乐的动作][一个可以被听的实体]",
  "service_uuid": "fc661c05-6d76-405b-ab10-d94b6f727da2",
  "user_intent_uuid": "24432080-3e6a-446d-ae63-caa8ad4805a8",
  "note": "该句式可分为两部分，例如：[我想听][七里香];[我想听][周杰伦]",
  "definition": "{{part.play_or_listen_action}}{{part.entity_can_be_listened}}",
  "priority": 5,
  "parts": [
    {
      "name": "play_or_listen_action",
      "phrases": [
        {
          "note": "i_want_listen",
          "template": "{{i_want}}{{listen}}",
          "variables": {}
        },
        {
          "note": "play_for_me",
          "template": "给我{{play}}",
          "variables": {}
        }
      ]
    },
    {
      "name": "entity_can_be_listened",
      "phrases": [
        {
          "note": "歌手",
          "template": "{{sys.singer}}",
          "variables": {}
        },
        {
          "note": "歌",
          "template": "{{sys.music:song}}",
          "variables": {}
        }
      ]
    }
  ]
}
```

返回数据：
```json
{
  "error": "this is a error msg",
  "sentence_pattern": {
    "uuid": "48fa4670-3508-401b-9a28-8a93986cbee5"
    ...
  }
}
```

### 2. get 接口

#### 接口功能

> 依据 sentence pattern 的uuid获取其详细信息

#### URL

> /sentence_pattern/get

#### 支持格式

> JSON

#### HTTP 请求方式

> POST

#### 请求参数 

|参数    |  必选  |  类型 | 说明  |
|:----- |:-------|:-----|----- |
| uuid  | true   | string | sentence_pattern的uuid

### 3. update 接口

#### 接口功能

> 依据 sentence pattern 的uuid 进行更新

#### URL

> /sentence_pattern/update

#### 支持格式

> JSON

#### HTTP 请求方式

> POST

#### 请求参数 

|参数    |  必选  |  类型 | 说明  |
|:----- |:-------|:-----|----- |
| uuid  | true   | string | sentence_pattern的uuid

> 其余参数 同 create

 

### 4. find 接口

#### 接口功能

> 查询 某个服务 某个用户意图 的句式

#### URL

> /sentence_pattern/find

#### 支持格式

> JSON

#### HTTP 请求方式

> POST

#### 请求参数 

|参数    |  必选  |  类型 | 说明  |
|:----- |:-------|:-----|----- |
| service_uuid  | true   | string | 服务的uuid 
| user_intent_uuid  | false   | string | 用户意图的uuid
| offset  | true   | int | 偏移量
| limit  | true   | int | 返回数据的最大数目

### 5. delete 接口

### 接口功能

> 根据句式的`uuid`删除对应句式

### URL

> /sentence_pattern/delete

#### 支持格式

> JSON

#### HTTP 请求方式

> POST

#### 请求参数

|参数    |  必选  |  类型 | 说明  |
|:----- |:-------|:-----|----- |
| uuid  | true   | string | 要删除句式的uuid

#### 返回

|参数    |  必选  |  类型 | 说明  |
|:----- |:-------|:-----|----- |
| error  | false   | string | 错误描述, **若error字段不存在**, 说明删除成功
