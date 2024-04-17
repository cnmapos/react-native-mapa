# React Native Mapa Demo
## 安装
进入example目录执行命令
```
yarn install
```
在安装ios、android依赖前准备好ios、android环境，参考[官方文档](https://reactnative.cn/docs/environment-setup)。
### IOS安装
执行`vi ~/.netrc`指令新建.netrc文件，并输入以下内容
```
machine api.mapbox.com
  login mapbox
  password sk.ey...
```
其中sk.ey...部分为mapbox密钥，申请地址https://account.mapbox.com/access-tokens/，添加密钥后保存文件。

在example目录下执行`yarn run pod`安装ios依赖，依赖安装完成后执行`yarn run ios`构建ios应用并安装、启动。
### android安装
和ios类似，也需要配置mapbox密钥信息，执行依赖指令创建文件
```
vi ~/.gradle/gradle.properties
```
添加内容
```
MAPBOX_DOWNLOADS_TOKEN=sk.ey...
```
其中sk.ey...部分为mapbox密钥，密钥申请地址为https://account.mapbox.com/access-tokens/，添加密钥后保存文件。

在example目录下执行命令`yarn run android`构建并启动android应用。

## 添加ICON字体
已引入react-native-vector-icons字体`Ionicons.ttf`、 `FontAwesome.ttf`、 `AntDesign.ttf`、 `Feather.ttf`。如需引入其他字体，需按下述方式引入。
### IOS
使用xcode打开ios/example.xcodeproj项目，将node_modules/react-native-vector-icons/Fonts目录下需要使用的字体拷贝至example.xcodeproj项目下的Fonts分组。
打开Info.list文件，在UIAppFronts下添加字体文件名。
```
<key>UIAppFonts</key>
<array>
   <string>Ionicons.ttf</string>
   <string>FontAwesome.ttf</string>
   <string>AntDesign.ttf</string>
   <string>Feather.ttf</string>
   ...
</array>
```
### Android
打开android/app/build.gradle文件，添加字体引入内容, 例如MaterialIcons.ttf、EvilIcons.ttf即为需要引入的字体文件名。
```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Specify font files
]

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```