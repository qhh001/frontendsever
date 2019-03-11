

## 获取设备列表

服务: paradise

路径: /devices/list

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46"
}
```

返回

```
{
  "devices": [
    {
      "device_uuid": "51c9afad-5cbe-5795-8fbb-e31a880a5d89",
      "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
      "name": "机器人",
      "avatar_url": "",
      "created_at": 1519807245000,
      "type": "own"
    },
    {
      "device_uuid": "51c9afad-5cbe-5795-8fbb-e31a880a5d89",
      "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
      "name": "机器人",
      "avatar_url": "",
      "created_at": 0,
      "type": "circle"
    }
  ]
}
```

## 获取当前选中设备

服务: paradise

路径: /devices/selected

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46"
}
```

返回

```
{
  "device": {
    "device_uuid": "51c9afad-5cbe-5795-8fbb-e31a880a5d89",
    "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
    "name": "机器人",
    "avatar_url": ""
  }
}
```


## 选中一个设备

服务: paradise

路径: /devices/select

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "device_uuid": "543eccac-c36c-58a8-82ec-c6eebc97b089",
  "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff"
}
```

返回

```
{
  "device": {
    "device_uuid": "543eccac-c36c-58a8-82ec-c6eebc97b089",
    "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
    "name": "机器人",
    "avatar_url": ""
  }
}
```

## 绑定设备

服务: paradise

路径: /devices/bind

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "code": "6173"
}
```

返回

```
{
  "circle": {
    "uuid": "c622f849-639b-4db4-b77e-04c1ed8ea4a1",
    "name": "我的家庭圈",
    "avatar": "",
    "admins": [
      {
        "uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
        "name": "宇航",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/NvkKiaat69n6gcxV4yd2CvUZBzDEIrGw55avAvicHf5gfHW1lPLtPXLDZJmFMRp9Qs8SPP46LjTXxvOpzbLZic5mFUEWSWF28AQ/132"
      }
    ],
    "users": [
      {
        "uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
        "name": "宇航",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/NvkKiaat69n6gcxV4yd2CvUZBzDEIrGw55avAvicHf5gfHW1lPLtPXLDZJmFMRp9Qs8SPP46LjTXxvOpzbLZic5mFUEWSWF28AQ/132"
      }
    ],
    "devices": [
      {
        "uuid": "69144443-9c75-5177-84ed-802aca8a7f8d",
        "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
        "name": "机器人",
        "avatar": ""
      }
    ]
  }
}
```

## 解除绑定设备

服务: paradise

路径: /devices/unbind

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "device_uuid": "51c9afad-5cbe-5795-8fbb-e31a880a5d89",
  "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff"
}
```

返回

```
{
  "ok": true
}
```

## 获取当前家庭圈

服务: paradise

路径: /circles/current

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46"
}
```

返回

```
{
  "circle": {
    "uuid": "97a67e76-b50c-487f-9145-2c772bb73f9c",
    "name": "我的家庭圈",
    "avatar": "",
    "admins": [
      {
        "uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
        "name": "宇航",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/NvkKiaat69n6gcxV4yd2CvUZBzDEIrGw55avAvicHf5gfHW1lPLtPXLDZJmFMRp9Qs8SPP46LjTXxvOpzbLZic5mFUEWSWF28AQ/132"
      }
    ],
    "users": [
      {
        "uuid": "47992767-c0b5-49e8-b3ec-ae070c9dbf83",
        "name": "Jiy",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/NvkKiaat69n5XibsNCIDMWT0iaZ70ZWHo9talwMSOxa5pzuKbzCP2rg5MXpDDJgdwIYkrTBmVolAwc3oJTqMqkaiacYxD3pW8t15/132"
      },
      {
        "uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
        "name": "宇航",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/NvkKiaat69n6gcxV4yd2CvUZBzDEIrGw55avAvicHf5gfHW1lPLtPXLDZJmFMRp9Qs8SPP46LjTXxvOpzbLZic5mFUEWSWF28AQ/132"
      }
    ],
    "devices": [
      {
        "uuid": "51c9afad-5cbe-5795-8fbb-e31a880a5d89",
        "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
        "name": "机器人",
        "avatar": ""
      }
    ]
  },
  "is_member": true
}
```

## 加入某个已绑定设备的家庭圈

服务: paradise

路径: /circles/join

请求:

```
{
  "user_uuid": "47992767-c0b5-49e8-b3ec-ae070c9dbf83",
  "device_uuid": "51c9afad-5cbe-5795-8fbb-e31a880a5d89",
  "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
  "circle_uuid": "97a67e76-b50c-487f-9145-2c772bb73f9c"
}
```

返回

```
{
  "circle": {
    "uuid": "97a67e76-b50c-487f-9145-2c772bb73f9c",
    "name": "我的家庭圈",
    "avatar": "",
    "admins": [
      {
        "uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
        "name": "宇航",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/NvkKiaat69n6gcxV4yd2CvUZBzDEIrGw55avAvicHf5gfHW1lPLtPXLDZJmFMRp9Qs8SPP46LjTXxvOpzbLZic5mFUEWSWF28AQ/132"
      }
    ],
    "users": [
      {
        "uuid": "47992767-c0b5-49e8-b3ec-ae070c9dbf83",
        "name": "Jiy",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/NvkKiaat69n5XibsNCIDMWT0iaZ70ZWHo9talwMSOxa5pzuKbzCP2rg5MXpDDJgdwIYkrTBmVolAwc3oJTqMqkaiacYxD3pW8t15/132"
      },
      {
        "uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
        "name": "宇航",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/NvkKiaat69n6gcxV4yd2CvUZBzDEIrGw55avAvicHf5gfHW1lPLtPXLDZJmFMRp9Qs8SPP46LjTXxvOpzbLZic5mFUEWSWF28AQ/132"
      }
    ],
    "devices": [
      {
        "uuid": "51c9afad-5cbe-5795-8fbb-e31a880a5d89",
        "channel_uuid": "0a71448d-440d-4782-9645-b32c814dfdff",
        "name": "机器人",
        "avatar": ""
      }
    ]
  }
}
```


## 改变音量

服务: paradise

路径: /control/change_volume

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "volume": 50
}
```

返回

```
{
  "ok": true
}
```


## 改变灯光

服务: paradise

路径: /control/change_light

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "light": 50
}
```

返回

```
{
  "ok": true
}
```


## 改变童锁

服务: paradise

路径: /control/change_child_lock

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "child_lock": true
}
```

返回

```
{
  "ok": true
}
```


## 暂停当前音乐

服务: paradise

路径: /control/media_player_pause

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46"
}
```

返回

```
{
  "ok": true
}
```


## 继续当前音乐

服务: paradise

路径: /control/media_player_resume

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46"
}
```

返回

```
{
  "ok": true
}
```


## 上一首音乐

服务: paradise

路径: /control/media_player_previous

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46"
}
```

返回

```
{
  "ok": true
}
```


## 下一首音乐

服务: paradise

路径: /control/media_player_next

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46"
}
```

返回

```
{
  "ok": true
}
```


## 播放专辑

服务: paradise

路径: /control/media_player_play_album

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "album_uuid": "xxxxx",
  "index": 3
}
```

返回

```
{
  "ok": true
}
```


## 播放歌单

服务: paradise

路径: /control/media_player_play_playlist

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "playlist_uuid": "xxxxx",
  "index": 2
}
```

返回

```
{
  "ok": true
}
```


## 改变播放模式

服务: paradise

路径: /control/media_player_change_shuffle_mode

请求:

```
{
  "user_uuid": "9fc3ec10-fe11-4768-a3ac-6ce302091c46",
  "mode": "list_loop"
}
```

返回

```
{
  "ok": true
}
```


