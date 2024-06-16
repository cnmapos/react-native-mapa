
# LineLayerStyleProps


## Properties

### lineCap?

> **`optional`** **lineCap**: `Value`\<`Enum`\<`LineCapEnum`, `LineCapEnumValues`\>, [`"zoom"`, `"feature"`]\>

The display of line endings.

### lineJoin?

> **`optional`** **lineJoin**: `Value`\<`Enum`\<`LineJoinEnum`, `LineJoinEnumValues`\>, [`"zoom"`, `"feature"`]\>

The display of lines when joining.

### lineMiterLimit?

> **`optional`** **lineMiterLimit**: `Value`\<`number`, [`"zoom"`]\>

Used to automatically convert miter joins to bevel joins for sharp angles.

### lineRoundLimit?

> **`optional`** **lineRoundLimit**: `Value`\<`number`, [`"zoom"`]\>

Used to automatically convert round joins to miter joins for shallow angles.

### lineSortKey?

> **`optional`** **lineSortKey**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.

### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.

### lineOpacity?

> **`optional`** **lineOpacity**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The opacity at which the line will be drawn.

### lineOpacityTransition?

> **`optional`** **lineOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s lineOpacity property.

### lineColor?

> **`optional`** **lineColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The color with which the line will be drawn.

#### Disabled By

linePattern

### lineColorTransition?

> **`optional`** **lineColorTransition**: `Transition`

The transition affecting any changes to this layer’s lineColor property.

### lineTranslate?

> **`optional`** **lineTranslate**: `Value`\<`Translation`, [`"zoom"`]\>

The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.

### lineTranslateTransition?

> **`optional`** **lineTranslateTransition**: `Transition`

The transition affecting any changes to this layer’s lineTranslate property.


### lineTranslateAnchor?

> **`optional`** **lineTranslateAnchor**: `Value`\<`Enum`\<`LineTranslateAnchorEnum`, `LineTranslateAnchorEnumValues`\>, [`"zoom"`]\>

Controls the frame of reference for `lineTranslate`.

#### Requires

lineTranslate



### lineWidth?

> **`optional`** **lineWidth**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Stroke thickness.



### lineWidthTransition?

> **`optional`** **lineWidthTransition**: `Transition`

The transition affecting any changes to this layer’s lineWidth property.



### lineGapWidth?

> **`optional`** **lineGapWidth**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Draws a line casing outside of a line's actual path. Value indicates the width of the inner gap.



### lineGapWidthTransition?

> **`optional`** **lineGapWidthTransition**: `Transition`

The transition affecting any changes to this layer’s lineGapWidth property.



### lineOffset?

> **`optional`** **lineOffset**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The line's offset. For linear features, a positive value offsets the line to the right, relative to the direction of the line, and a negative value to the left. For polygon features, a positive value results in an inset, and a negative value results in an outset.



### lineOffsetTransition?

> **`optional`** **lineOffsetTransition**: `Transition`

The transition affecting any changes to this layer’s lineOffset property.



### lineBlur?

> **`optional`** **lineBlur**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Blur applied to the line, in pixels.



### lineBlurTransition?

> **`optional`** **lineBlurTransition**: `Transition`

The transition affecting any changes to this layer’s lineBlur property.



### lineDasharray?

> **`optional`** **lineDasharray**: `Value`\<`number`[], [`"zoom"`, `"feature"`]\>

Specifies the lengths of the alternating dashes and gaps that form the dash pattern. The lengths are later scaled by the line width. To convert a dash length to pixels, multiply the length by the current line width. Note that GeoJSON sources with `lineMetrics: true` specified won't render dashed lines to the expected scale. Also note that zoomDependent expressions will be evaluated only at integer zoom levels.

#### Disabled By

linePattern



### linePattern?

> **`optional`** **linePattern**: `Value`\<`ResolvedImageType`, [`"zoom"`, `"feature"`]\>

Name of image in sprite to use for drawing image lines. For seamless patterns, image width must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.



### lineGradient?

> **`optional`** **lineGradient**: `Value`\<`string`, [`"line-progress"`]\>

A gradient used to color a line feature at various distances along its length. Defined using a `step` or `interpolate` expression which outputs a color for each corresponding `lineProgress` input value. `lineProgress` is a percentage of the line feature's total length as measured on the webmercator projected coordinate plane (a `number` between `0` and `1`). Can only be used with GeoJSON sources that specify `"lineMetrics": true`.

#### Disabled By

linePattern



### lineTrimOffset?

> **`optional`** **lineTrimOffset**: `number`[]

The line part between [trimStart, trimEnd] will be marked as transparent to make a route vanishing effect. The line trimOff offset is based on the whole line range [0.0, 1.0].



### lineEmissiveStrength?

> **`optional`** **lineEmissiveStrength**: `Value`\<`number`, [`"zoom"`, `"measure-light"`]\>

Controls the intensity of light emitted on the source features.

#### Requires

lights



### lineEmissiveStrengthTransition?

> **`optional`** **lineEmissiveStrengthTransition**: `Transition`

The transition affecting any changes to this layer’s lineEmissiveStrength property.
