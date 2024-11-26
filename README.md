<br>

<p align="center">
<img src="https://cnmapos.github.io/rnmapa.dev/assets/logo.svg" style="width:100px;" />
</p>

<h1 align="center">React Native Mapa</h1>

<p align="center">
Easy-to-use React Native map components.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/react-native-mapa"><img src="https://img.shields.io/npm/v/react-native-mapa?color=c95f8b&amp;label=" alt="NPM version"></a></p>

<br>
<p align="center">
<a href="https://cnmapos.github.io/rnmapa.dev/">📚 Documentation</a> |
<a href="https://cnmapos.github.io/rnmapa.dev/docs/">🤹‍♂️ Definition</a> |
<a href="https://cnmapos.github.io/rnmapa.dev/docs/install.html">🧑‍💻 Installation</a> |
<a href="https://cnmapos.github.io/rnmapa.dev/docs/apis.html">🎓 API</a> 
</p>
<br>

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
react-native-mapa relies on mapbox, so you need to provide a `Mapbox Access Token`.

## Dependencies

- [node](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [React Native](https://facebook.github.io/react-native/) (0.70+)

## Installation

Please check the installation documentation [Installation](https://github.com/cnmapos/react-native-mapa/blob/main/INSTALL.md)

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

Mapa.setAccessToken(
    'pk.XXX',
);

function Mapview({}: any): React.JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <Mapa.MapView>
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