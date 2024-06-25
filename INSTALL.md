
# 前置条件
- Mapbox secret token: 下载mapbox依赖
- Mapbox public tokon: 访问mapbox资源

# INSTALLATION

NPM
```
npm install @rnmapbox/maps react-native-mapa --save
```
YARN
```
yarn add @rnmapbox/maps react-native-mapa --save
```

## 环境配置

#### IOS
1. 使用命令`vi ~/.netrc`开发配置文件；
2. 添加认证内容，用于下载mapbox依赖；
```
machine api.mapbox.com
login mapbox
password sk.XXX
```
#### Android
1. 使用命令`vi ~/.gradle/gradle.properties`开发配置文件；
2. 添加认证内容，用于下载mapbox依赖；
```
APBOX_DOWNLOADS_TOKEN=sk.XXX
```

## BUILD
```
# IOS
cd ios && pod install
npm run ios

# Android
npm run android

```

## PERMISSIONS  
#### IOS
如果想使用Location组件实现定位功能，需在info.plist中添加定位权限
```
<key>MGLMapboxAccessToken</key>
<string>sk.XXX</string>
```
#### Android
如果想使用Location组件实现定位功能，需在`android/app/src/main/AndroidManifest.xml`中添加定位权限
```
<manifest ... >
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>
```