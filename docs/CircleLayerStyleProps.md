#  CircleLayerStyleProps

## Properties

### circleSortKey?

> **`optional`** **circleSortKey**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.



### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.



### circleRadius?

> **`optional`** **circleRadius**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Circle radius.



### circleRadiusTransition?

> **`optional`** **circleRadiusTransition**: `Transition`

The transition affecting any changes to this layer’s circleRadius property.



### circleColor?

> **`optional`** **circleColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The fill color of the circle.



### circleColorTransition?

> **`optional`** **circleColorTransition**: `Transition`

The transition affecting any changes to this layer’s circleColor property.



### circleBlur?

> **`optional`** **circleBlur**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Amount to blur the circle. 1 blurs the circle such that only the centerpoint is full opacity.



### circleBlurTransition?

> **`optional`** **circleBlurTransition**: `Transition`

The transition affecting any changes to this layer’s circleBlur property.



### circleOpacity?

> **`optional`** **circleOpacity**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The opacity at which the circle will be drawn.



### circleOpacityTransition?

> **`optional`** **circleOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s circleOpacity property.



### circleTranslate?

> **`optional`** **circleTranslate**: `Value`\<`Translation`, [`"zoom"`]\>

The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.



### circleTranslateTransition?

> **`optional`** **circleTranslateTransition**: `Transition`

The transition affecting any changes to this layer’s circleTranslate property.



### circleTranslateAnchor?

> **`optional`** **circleTranslateAnchor**: `Value`\<`Enum`\<`CircleTranslateAnchorEnum`, `CircleTranslateAnchorEnumValues`\>, [`"zoom"`]\>

Controls the frame of reference for `circleTranslate`.

#### Requires

circleTranslate



### circlePitchScale?

> **`optional`** **circlePitchScale**: `Value`\<`Enum`\<`CirclePitchScaleEnum`, `CirclePitchScaleEnumValues`\>, [`"zoom"`]\>

Controls the scaling behavior of the circle when the map is pitched.



### circlePitchAlignment?

> **`optional`** **circlePitchAlignment**: `Value`\<`Enum`\<`CirclePitchAlignmentEnum`, `CirclePitchAlignmentEnumValues`\>, [`"zoom"`]\>

Orientation of circle when map is pitched.



### circleStrokeWidth?

> **`optional`** **circleStrokeWidth**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The width of the circle's stroke. Strokes are placed outside of the `circleRadius`.



### circleStrokeWidthTransition?

> **`optional`** **circleStrokeWidthTransition**: `Transition`

The transition affecting any changes to this layer’s circleStrokeWidth property.



### circleStrokeColor?

> **`optional`** **circleStrokeColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The stroke color of the circle.



### circleStrokeColorTransition?

> **`optional`** **circleStrokeColorTransition**: `Transition`

The transition affecting any changes to this layer’s circleStrokeColor property.



### circleStrokeOpacity?

> **`optional`** **circleStrokeOpacity**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The opacity of the circle's stroke.



### circleStrokeOpacityTransition?

> **`optional`** **circleStrokeOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s circleStrokeOpacity property.



### circleEmissiveStrength?

> **`optional`** **circleEmissiveStrength**: `Value`\<`number`, [`"zoom"`, `"measure-light"`]\>

Controls the intensity of light emitted on the source features.

#### Requires

lights



### circleEmissiveStrengthTransition?

> **`optional`** **circleEmissiveStrengthTransition**: `Transition`

The transition affecting any changes to this layer’s circleEmissiveStrength property.
