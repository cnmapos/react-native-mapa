# RasterLayerStyleProps


## styles

* <a href="#visibility">visibility</a><br/>
* <a href="#rasteropacity">rasterOpacity</a><br/>
* <a href="#rasterhuerotate">rasterHueRotate</a><br/>
* <a href="#rasterbrightnessmin">rasterBrightnessMin</a><br/>
* <a href="#rasterbrightnessmax">rasterBrightnessMax</a><br/>
* <a href="#rastersaturation">rasterSaturation</a><br/>
* <a href="#rastercontrast">rasterContrast</a><br/>
* <a href="#rasterresampling">rasterResampling</a><br/>
* <a href="#rasterfadeduration">rasterFadeDuration</a><br/>

___

### visibility
Name: `visibility`

Mapbox spec: [visibility](https://docs.mapbox.com/style-spec/reference/layers/#layout-raster-visibility)

#### Description
Whether this layer is displayed.

#### Type
`enum`
#### Default Value
`visible`

#### Supported Values
**visible** - The layer is shown.<br />
**none** - The layer is not shown.<br />


#### Expression

Parameters: ``

___

### rasterOpacity
Name: `rasterOpacity`

Mapbox spec: [raster-opacity](https://docs.mapbox.com/style-spec/reference/layers/#paint-raster-raster-opacity)

#### Description
The opacity at which the image will be drawn.

#### Type
`number`
#### Default Value
`1`

#### Minimum
`0`


#### Maximum
`1`

#### Expression

Parameters: `zoom`
___

### rasterOpacityTransition
Name: `rasterOpacityTransition`

#### Description

The transition affecting any changes to this layer’s rasterOpacity property.

#### Type

`{ duration, delay }`

#### Units
`milliseconds`

#### Default Value
`{duration: 300, delay: 0}`


___

### rasterHueRotate
Name: `rasterHueRotate`

Mapbox spec: [raster-hue-rotate](https://docs.mapbox.com/style-spec/reference/layers/#paint-raster-raster-hue-rotate)

#### Description
Rotates hues around the color wheel.

#### Type
`number`
#### Default Value
`0`

#### Units
`degrees`


#### Expression

Parameters: `zoom`
___

### rasterHueRotateTransition
Name: `rasterHueRotateTransition`

#### Description

The transition affecting any changes to this layer’s rasterHueRotate property.

#### Type

`{ duration, delay }`

#### Units
`milliseconds`

#### Default Value
`{duration: 300, delay: 0}`


___

### rasterBrightnessMin
Name: `rasterBrightnessMin`

Mapbox spec: [raster-brightness-min](https://docs.mapbox.com/style-spec/reference/layers/#paint-raster-raster-brightness-min)

#### Description
Increase or reduce the brightness of the image. The value is the minimum brightness.

#### Type
`number`
#### Default Value
`0`

#### Minimum
`0`


#### Maximum
`1`

#### Expression

Parameters: `zoom`
___

### rasterBrightnessMinTransition
Name: `rasterBrightnessMinTransition`

#### Description

The transition affecting any changes to this layer’s rasterBrightnessMin property.

#### Type

`{ duration, delay }`

#### Units
`milliseconds`

#### Default Value
`{duration: 300, delay: 0}`


___

### rasterBrightnessMax
Name: `rasterBrightnessMax`

Mapbox spec: [raster-brightness-max](https://docs.mapbox.com/style-spec/reference/layers/#paint-raster-raster-brightness-max)

#### Description
Increase or reduce the brightness of the image. The value is the maximum brightness.

#### Type
`number`
#### Default Value
`1`

#### Minimum
`0`


#### Maximum
`1`

#### Expression

Parameters: `zoom`
___

### rasterBrightnessMaxTransition
Name: `rasterBrightnessMaxTransition`

#### Description

The transition affecting any changes to this layer’s rasterBrightnessMax property.

#### Type

`{ duration, delay }`

#### Units
`milliseconds`

#### Default Value
`{duration: 300, delay: 0}`


___

### rasterSaturation
Name: `rasterSaturation`

Mapbox spec: [raster-saturation](https://docs.mapbox.com/style-spec/reference/layers/#paint-raster-raster-saturation)

#### Description
Increase or reduce the saturation of the image.

#### Type
`number`
#### Default Value
`0`

#### Minimum
`-1`


#### Maximum
`1`

#### Expression

Parameters: `zoom`
___

### rasterSaturationTransition
Name: `rasterSaturationTransition`

#### Description

The transition affecting any changes to this layer’s rasterSaturation property.

#### Type

`{ duration, delay }`

#### Units
`milliseconds`

#### Default Value
`{duration: 300, delay: 0}`


___

### rasterContrast
Name: `rasterContrast`

Mapbox spec: [raster-contrast](https://docs.mapbox.com/style-spec/reference/layers/#paint-raster-raster-contrast)

#### Description
Increase or reduce the contrast of the image.

#### Type
`number`
#### Default Value
`0`

#### Minimum
`-1`


#### Maximum
`1`

#### Expression

Parameters: `zoom`
___

### rasterContrastTransition
Name: `rasterContrastTransition`

#### Description

The transition affecting any changes to this layer’s rasterContrast property.

#### Type

`{ duration, delay }`

#### Units
`milliseconds`

#### Default Value
`{duration: 300, delay: 0}`


___

### rasterResampling
Name: `rasterResampling`

Mapbox spec: [raster-resampling](https://docs.mapbox.com/style-spec/reference/layers/#paint-raster-raster-resampling)

#### Description
The resampling/interpolation method to use for overscaling, also known as texture magnification filter

#### Type
`enum`
#### Default Value
`linear`

#### Supported Values
**linear** - (Bi)linear filtering interpolates pixel values using the weighted average of the four closest original source pixels creating a smooth but blurry look when overscaled<br />
**nearest** - Nearest neighbor filtering interpolates pixel values using the nearest original source pixel creating a sharp but pixelated look when overscaled<br />


#### Expression

Parameters: `zoom`

___

### rasterFadeDuration
Name: `rasterFadeDuration`

Mapbox spec: [raster-fade-duration](https://docs.mapbox.com/style-spec/reference/layers/#paint-raster-raster-fade-duration)

#### Description
Fade duration when a new tile is added.

#### Type
`number`
#### Default Value
`300`

#### Units
`milliseconds`

#### Minimum
`0`


#### Expression

Parameters: `zoom`

