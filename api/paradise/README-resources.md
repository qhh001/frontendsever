

## 获取一个标签信息

服务: paradise

路径: /resources/tags/get

请求:

```
{
  "uuid": "ccf99c94-3090-48ad-a240-89371c1973e2"
}
```

返回

```
{
  "tag": {
    "uuid": "ccf99c94-3090-48ad-a240-89371c1973e2",
    "name": "童话故事",
    "image_url": ""
  }
}
```

## 获取一个标签下的专辑

服务: paradise

路径: /resources/albums/find_by_tag_uuid

请求:

```
{
  "tag_uuid": "ccf99c94-3090-48ad-a240-89371c1973e2",
  "offset": 0,  # 可不填, 默认0
  "limit": 30   # 可不填, 默认30
}
```

返回

```
{
  "albums": [
    {
      "uuid": "3dbbe4a6-5d89-450e-aed4-1efcec7a6c5d",
      "name": "中国名家经典童话",
      "image_url": "http://protected-hd-01.oss-cn-hangzhou.aliyuncs.com/gaea/icons/albums/resource_image_ee94bc0e-ee09-4345-be53-e950b23a9a9a.jpg",
      "art_count": 108,
      "description": "中国名家经典童话",
      "favorite": false
    },
    {
      "uuid": "80115328-6d4a-494c-b0fa-02825fccfade",
      "name": "世界童话大师绘本故事",
      "image_url": "http://protected-hd-01.oss-cn-hangzhou.aliyuncs.com/gaea/icons/albums/resource_image_ca6d7af1-0bf3-43ea-a691-962285cfc7c0.jpg",
      "art_count": 76,
      "description": "世界童话大师绘本故事",
      "favorite": false
    },
    {
      "uuid": "cc94449f-4fc4-465f-afed-328f3f81690b",
      "name": "中国老故事",
      "image_url": "http://protected-hd-01.oss-cn-hangzhou.aliyuncs.com/gaea/icons/albums/resource_image_29485c25-1b86-44bd-89b8-afb94274c5ee.jpg",
      "art_count": 28,
      "description": "中国老故事",
      "favorite": false
    }
  ]
}
```

## 获取一个专辑信息

服务: paradise

路径: /resources/albums/get

请求:

```
{
  "uuid": "72ef6e17-31e3-4bfb-8dff-523e2695446e"
}
```

返回

```
{
  "album": {
    "uuid": "72ef6e17-31e3-4bfb-8dff-523e2695446e",
    "name": "凯叔黑猫警长",
    "image_url": "http://protected-hd-01.oss-cn-hangzhou.aliyuncs.com/gaea/icons/albums/resource_image_2f282267-d730-4ff7-b4d5-74206926385b.jpg",
    "art_count": 13,
    "description": "凯叔黑猫警长",
    "favorite": false
  }
}
```

## 获取一个专辑下的作品

服务: paradise

路径: /resources/arts/find_by_album_uuid

请求:

```
{
  "album_uuid": "72ef6e17-31e3-4bfb-8dff-523e2695446e"
}
```

返回

```
{
  "arts": [
    {
      "uuid": "062f3ea6-1333-439b-a700-1c6209a9610e",
      "name": "凯叔讲黑猫警长第12集 会吃猫的娘舅(上)",
      "type": "",
      "audio_url": "",
      "duration": 753,
      "favorite": false
    },
    {
      "uuid": "07a44b4c-5a58-4672-be7c-d97d0f55b329",
      "name": "凯叔讲黑猫警长第4集 空中擒敌(中)",
      "type": "",
      "audio_url": "",
      "duration": 620,
      "favorite": false
    },
    {
      "uuid": "18f782ae-506c-4062-8661-bdadd762bd30",
      "name": "凯叔讲黑猫警长第6集 吃红土的小偷(上)",
      "type": "",
      "audio_url": "",
      "duration": 629,
      "favorite": false
    },
    {
      "uuid": "1f0a221e-969d-49a3-99f6-feb35acbfca5",
      "name": "凯叔讲黑猫警长第2集 痛歼搬仓鼠(下)",
      "type": "",
      "audio_url": "",
      "duration": 982,
      "favorite": false
    },
    {
      "uuid": "302f2fde-136d-41c7-923d-b3c1d755f41f",
      "name": "凯叔讲黑猫警长第14集 会吃猫的娘舅(下)",
      "type": "",
      "audio_url": "",
      "duration": 1127,
      "favorite": false
    },
    {
      "uuid": "4d7e81f5-5aa1-44f0-90f7-6cdba0afa3d8",
      "name": "凯叔讲黑猫警长第11集 吃丈夫的螳螂(下)",
      "type": "",
      "audio_url": "",
      "duration": 851,
      "favorite": false
    },
    {
      "uuid": "778a01ef-8962-4ff0-8559-80808d5f3392",
      "name": "凯叔讲黑猫警长第10集 吃丈夫的螳螂(中)",
      "type": "",
      "audio_url": "",
      "duration": 653,
      "favorite": false
    },
    {
      "uuid": "7f384f1d-a823-4d09-b69f-cfabc1b71912",
      "name": "凯叔讲黑猫警长第7集 吃红土的小偷(中)",
      "type": "",
      "audio_url": "",
      "duration": 607,
      "favorite": false
    },
    {
      "uuid": "7f7f0b23-2c70-4247-ae8f-4a58309c82dd",
      "name": "凯叔讲黑猫警长第1集 痛歼搬仓鼠(上)",
      "type": "",
      "audio_url": "",
      "duration": 796,
      "favorite": false
    },
    {
      "uuid": "acdcf8cc-0f0c-4c24-ba7f-5b25edbc7f34",
      "name": "凯叔讲黑猫警长第3集 空中擒敌(上)",
      "type": "",
      "audio_url": "",
      "duration": 572,
      "favorite": false
    },
    {
      "uuid": "d07d92d2-794b-4d9c-aed2-370f8b3c58e7",
      "name": "凯叔讲黑猫警长第13集 会吃猫的娘舅(中)",
      "type": "",
      "audio_url": "",
      "duration": 763,
      "favorite": false
    },
    {
      "uuid": "f1a6f931-a4e7-46f1-b334-4c99fa00ad80",
      "name": "凯叔讲黑猫警长第5集 空中擒敌(下)",
      "type": "",
      "audio_url": "",
      "duration": 723,
      "favorite": false
    },
    {
      "uuid": "feaf9d92-40c8-405f-bf0a-e47095f0ab16",
      "name": "凯叔讲黑猫警长第9集 吃丈夫的螳螂(上)",
      "type": "",
      "audio_url": "",
      "duration": 724,
      "favorite": false
    }
  ]
}
```
