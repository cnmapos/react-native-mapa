
# RasterLayerStyleProps

## Properties

### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.

***

### rasterOpacity?

> **`optional`** **rasterOpacity**: `Value`\<`number`, [`"zoom"`]\>

The opacity at which the image will be drawn.

***

### rasterOpacityTransition?

> **`optional`** **rasterOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s rasterOpacity property.

***

### rasterHueRotate?

> **`optional`** **rasterHueRotate**: `Value`\<`number`, [`"zoom"`]\>

Rotates hues around the color wheel.

***

### rasterHueRotateTransition?

> **`optional`** **rasterHueRotateTransition**: `Transition`

The transition affecting any changes to this layer’s rasterHueRotate property.

***

### rasterBrightnessMin?

> **`optional`** **rasterBrightnessMin**: `Value`\<`number`, [`"zoom"`]\>

Increase or reduce the brightness of the image. The value is the minimum brightness.

***

### rasterBrightnessMinTransition?

> **`optional`** **rasterBrightnessMinTransition**: `Transition`

The transition affecting any changes to this layer’s rasterBrightnessMin property.

***

### rasterBrightnessMax?

> **`optional`** **rasterBrightnessMax**: `Value`\<`number`, [`"zoom"`]\>

Increase or reduce the brightness of the image. The value is the maximum brightness.

***

### rasterBrightnessMaxTransition?

> **`optional`** **rasterBrightnessMaxTransition**: `Transition`

The transition affecting any changes to this layer’s rasterBrightnessMax property.

***

### rasterSaturation?

> **`optional`** **rasterSaturation**: `Value`\<`number`, [`"zoom"`]\>

Increase or reduce the saturation of the image.

***

### rasterSaturationTransition?

> **`optional`** **rasterSaturationTransition**: `Transition`

The transition affecting any changes to this layer’s rasterSaturation property.

***

### rasterContrast?

> **`optional`** **rasterContrast**: `Value`\<`number`, [`"zoom"`]\>

Increase or reduce the contrast of the image.
s
***

### rasterContrastTransition?

> **`optional`** **rasterContrastTransition**: `Transition`

The transition affecting any changes to this layer’s rasterContrast property.

***

### rasterResampling?

> **`optional`** **rasterResampling**: `Value`\<`Enum`\<`RasterResamplingEnum`, `RasterResamplingEnumValues`\>, [`"zoom"`]\>

The resampling/interpolation method to use for overscaling, also known as texture magnification filter

***

### rasterFadeDuration?

> **`optional`** **rasterFadeDuration**: `Value`\<`number`, [`"zoom"`]\>

Fade duration when a new tile is added.

***

### rasterColor?

> **`optional`** **rasterColor**: `Value`\<`string`, [`"raster-value"`]\>

Defines a color map by which to colorize a raster layer, parameterized by the `["rasterValue"]` expression and evaluated at 256 uniformly spaced steps over the range specified by `rasterColorRange`.


***

### rasterColorMix?

> **`optional`** **rasterColorMix**: `Value`\<`number`[], [`"zoom"`]\>

When `rasterColor` is active, specifies the combination of source RGB channels used to compute the raster value. Computed using the equation `mix.r * src.r + mix.g * src.g + mix.b * src.b + mix.a`. The first three components specify the mix of source red, green, and blue channels, respectively. The fourth component serves as a constant offset and is *not* multipled by source alpha. Source alpha is instead carried through and applied as opacity to the colorized result. Default value corresponds to RGB luminosity.

#### Requires

rasterColor

***

### rasterColorMixTransition?

> **`optional`** **rasterColorMixTransition**: `Transition`

The transition affecting any changes to this layer’s rasterColorMix property.

***

### rasterColorRange?

> **`optional`** **rasterColorRange**: `Value`\<`number`[], [`"zoom"`]\>

When `rasterColor` is active, specifies the range over which `rasterColor` is tabulated. Units correspond to the computed raster value via `rasterColorMix`.

#### Requires

rasterColor

***

### rasterColorRangeTransition?

> **`optional`** **rasterColorRangeTransition**: `Transition`

The transition affecting any changes to this layer’s rasterColorRange property.
