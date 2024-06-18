# React Native Map SDK for iOS and Android

react-native-mapa是一款开源的React Native地图组件，支持iOS和Android。

## 成为react-native-mapa的核心开发者
react-native-mapa面向开源，我们欢迎任何感兴趣的开发者加入社区, 进入[留言区](https://github.com/cnmapos/react-native-mapa/issues/3)。

---

<table>
<tr>
    <td colspan="2">
        <img src="https://github.com/cnmapos/react-native-mapa/blob/main/src/assets/demo/d3.png"/>
    </td>
    <td colspan="2">
        <img src="https://github.com/cnmapos/react-native-mapa/blob/main/src/assets/demo/poi.png" />
    </td>
    <td colspan="2">
        <img src="https://github.com/cnmapos/react-native-mapa/blob/main/src/assets/demo/draw.png" />
    </td>
</tr>
<tr>
</tr>

</table>

---

## Prerequisite
react-native-mapa底层依赖mapbox，因此需要提供`Mapbox Access Token`。

## Dependencies

- [node](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [React Native](https://facebook.github.io/react-native/) (0.70+)

## Installation

查看安装文档[Installation](https://github.com/cnmapos/react-native-mapa/blob/main/INSTALL.md)

## Run Project

#### IOS
```
# YARN
yarn run ios

# NPM
npm run ios
```
#### Android
```
# YARN
yarn run android

# NPM
npm run android

```
## Example
```
import Mapa from 'react-native-mapa';
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

function Mapview({}: any): React.JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <Mapa.MapView projection={'mercator'} style={'MapboxVector'}>
                <Mapa.Camera />
                <Mapa.Compass />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default Mapview;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});

```

## DOCUMENTTATION
#### Components
- [Mapview](https://github.com/cnmapos/react-native-mapa/blob/main/docs/MapView.md)
- [Camera](https://github.com/cnmapos/react-native-mapa/blob/main/docs/Camera.md)
- [Background](https://github.com/cnmapos/react-native-mapa/blob/main/docs/Background.md)
- [Location](https://github.com/cnmapos/react-native-mapa/blob/main/docs//LineLayer.md)
- [ZoomInOut](https://github.com/cnmapos/react-native-mapa/blob/main/docs/ZoomInOut.md)
- [Compass](https://github.com/cnmapos/react-native-mapa/blob/main/docs/Compass.md)
- [Scalebar](https://github.com/cnmapos/react-native-mapa/blob/main/docs/Scalebar.md)
- [POIFinder](https://github.com/cnmapos/react-native-mapa/blob/main/docs/POIFinder.md)
- [Weather](https://github.com/cnmapos/react-native-mapa/blob/main/docs//Weather.md)
- [Images](https://github.com/cnmapos/react-native-mapa/blob/main/docs/image/Images.md)
- [Image](https://github.com/cnmapos/react-native-mapa/blob/main/docs/image/Image.md)
- [Marker](https://github.com/cnmapos/react-native-mapa/blob/main/docs/Marker.md)

#### Sources
- [VectorSource](https://github.com/cnmapos/react-native-mapa/blob/main/docs/VectorSource.md)
- [RasterSource](https://github.com/cnmapos/react-native-mapa/blob/main/docs/RasterSource.md)
- [GeoJSONSource](https://github.com/cnmapos/react-native-mapa/blob/main/docs/GeoJSONSource.md)
- [ImageSource](https://github.com/cnmapos/react-native-mapa/blob/main/docs/image/ImageSource.md)

#### Layers
- [LineLayer](https://github.com/cnmapos/react-native-mapa/blob/main/docs/LineLayer.md)
- [FillLayer](https://github.com/cnmapos/react-native-mapa/blob/main/docs/FillLayer.md)
- [SymbolLayer](https://github.com/cnmapos/react-native-mapa/blob/main/docs/SymbolLayer.md)
- [RasterLayer](https://github.com/cnmapos/react-native-mapa/blob/main/docs/RasterLayer.md)
- [CircleLayer](https://github.com/cnmapos/react-native-mapa/blob/main/docs/CircleLayer.md)
- [FillExtrusionLayer](https://github.com/cnmapos/react-native-mapa/blob/main/docs/FillExtrusionLayer.md)
- [ModelLayer](https://github.com/cnmapos/react-native-mapa/blob/main/docs/ModelLayer.md)

#### Draw
- [PolylinePainter](https://github.com/cnmapos/react-native-mapa/blob/main/docs/painter/PolylinePainter.md)
- [PolygonPainter](https://github.com/cnmapos/react-native-mapa/blob/main/docs/painter/PolygonPainter.md)
- [CirclePainter](https://github.com/cnmapos/react-native-mapa/blob/main/docs/painter/CirclePainter.md)
- [RectanglePainter](https://github.com/cnmapos/react-native-mapa/blob/main/docs/painter/RectanglePainter.md)