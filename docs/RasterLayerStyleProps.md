
# RasterLayerStyleProps

## Properties

### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.

#### Source

[src/types/styles.ts:1427](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1427)

***

### rasterOpacity?

> **`optional`** **rasterOpacity**: `Value`\<`number`, [`"zoom"`]\>

The opacity at which the image will be drawn.

#### Source

[src/types/styles.ts:1431](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1431)

***

### rasterOpacityTransition?

> **`optional`** **rasterOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s rasterOpacity property.

#### Source

[src/types/styles.ts:1436](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1436)

***

### rasterHueRotate?

> **`optional`** **rasterHueRotate**: `Value`\<`number`, [`"zoom"`]\>

Rotates hues around the color wheel.

#### Source

[src/types/styles.ts:1440](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1440)

***

### rasterHueRotateTransition?

> **`optional`** **rasterHueRotateTransition**: `Transition`

The transition affecting any changes to this layer’s rasterHueRotate property.

#### Source

[src/types/styles.ts:1445](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1445)

***

### rasterBrightnessMin?

> **`optional`** **rasterBrightnessMin**: `Value`\<`number`, [`"zoom"`]\>

Increase or reduce the brightness of the image. The value is the minimum brightness.

#### Source

[src/types/styles.ts:1449](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1449)

***

### rasterBrightnessMinTransition?

> **`optional`** **rasterBrightnessMinTransition**: `Transition`

The transition affecting any changes to this layer’s rasterBrightnessMin property.

#### Source

[src/types/styles.ts:1454](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1454)

***

### rasterBrightnessMax?

> **`optional`** **rasterBrightnessMax**: `Value`\<`number`, [`"zoom"`]\>

Increase or reduce the brightness of the image. The value is the maximum brightness.

#### Source

[src/types/styles.ts:1458](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1458)

***

### rasterBrightnessMaxTransition?

> **`optional`** **rasterBrightnessMaxTransition**: `Transition`

The transition affecting any changes to this layer’s rasterBrightnessMax property.

#### Source

[src/types/styles.ts:1463](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1463)

***

### rasterSaturation?

> **`optional`** **rasterSaturation**: `Value`\<`number`, [`"zoom"`]\>

Increase or reduce the saturation of the image.

#### Source

[src/types/styles.ts:1467](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1467)

***

### rasterSaturationTransition?

> **`optional`** **rasterSaturationTransition**: `Transition`

The transition affecting any changes to this layer’s rasterSaturation property.

#### Source

[src/types/styles.ts:1472](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1472)

***

### rasterContrast?

> **`optional`** **rasterContrast**: `Value`\<`number`, [`"zoom"`]\>

Increase or reduce the contrast of the image.

#### Source

[src/types/styles.ts:1476](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1476)

***

### rasterContrastTransition?

> **`optional`** **rasterContrastTransition**: `Transition`

The transition affecting any changes to this layer’s rasterContrast property.

#### Source

[src/types/styles.ts:1481](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1481)

***

### rasterResampling?

> **`optional`** **rasterResampling**: `Value`\<`Enum`\<`RasterResamplingEnum`, `RasterResamplingEnumValues`\>, [`"zoom"`]\>

The resampling/interpolation method to use for overscaling, also known as texture magnification filter

#### Source

[src/types/styles.ts:1485](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1485)

***

### rasterFadeDuration?

> **`optional`** **rasterFadeDuration**: `Value`\<`number`, [`"zoom"`]\>

Fade duration when a new tile is added.

#### Source

[src/types/styles.ts:1489](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1489)

***

### rasterColor?

> **`optional`** **rasterColor**: `Value`\<`string`, [`"raster-value"`]\>

Defines a color map by which to colorize a raster layer, parameterized by the `["rasterValue"]` expression and evaluated at 256 uniformly spaced steps over the range specified by `rasterColorRange`.

#### Source

[src/types/styles.ts:1493](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1493)

***

### rasterColorMix?

> **`optional`** **rasterColorMix**: `Value`\<`number`[], [`"zoom"`]\>

When `rasterColor` is active, specifies the combination of source RGB channels used to compute the raster value. Computed using the equation `mix.r * src.r + mix.g * src.g + mix.b * src.b + mix.a`. The first three components specify the mix of source red, green, and blue channels, respectively. The fourth component serves as a constant offset and is *not* multipled by source alpha. Source alpha is instead carried through and applied as opacity to the colorized result. Default value corresponds to RGB luminosity.

#### Requires

rasterColor

#### Source

[src/types/styles.ts:1499](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1499)

***

### rasterColorMixTransition?

> **`optional`** **rasterColorMixTransition**: `Transition`

The transition affecting any changes to this layer’s rasterColorMix property.

#### Source

[src/types/styles.ts:1504](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1504)

***

### rasterColorRange?

> **`optional`** **rasterColorRange**: `Value`\<`number`[], [`"zoom"`]\>

When `rasterColor` is active, specifies the range over which `rasterColor` is tabulated. Units correspond to the computed raster value via `rasterColorMix`.

#### Requires

rasterColor

#### Source

[src/types/styles.ts:1510](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1510)

***

### rasterColorRangeTransition?

> **`optional`** **rasterColorRangeTransition**: `Transition`

The transition affecting any changes to this layer’s rasterColorRange property.

#### Source

[src/types/styles.ts:1515](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1515)
