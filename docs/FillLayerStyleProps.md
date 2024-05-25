
# FillLayerStyleProps

## Properties

### fillSortKey?

> **`optional`** **fillSortKey**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.


### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.


### fillAntialias?

> **`optional`** **fillAntialias**: `Value`\<`boolean`, [`"zoom"`]\>

Whether or not the fill should be antialiased.

### fillOpacity?

> **`optional`** **fillOpacity**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The opacity of the entire fill layer. In contrast to the `fillColor`, this value will also affect the 1px stroke around the fill, if the stroke is used.


### fillOpacityTransition?

> **`optional`** **fillOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s fillOpacity property.

### fillColor?

> **`optional`** **fillColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The color of the filled part of this layer. This color can be specified as `rgba` with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used.

#### Disabled By

fillPattern


### fillColorTransition?

> **`optional`** **fillColorTransition**: `Transition`

The transition affecting any changes to this layer’s fillColor property.

### fillOutlineColor?

> **`optional`** **fillOutlineColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The outline color of the fill. Matches the value of `fillColor` if unspecified.

#### Disabled By

fillPattern

### fillOutlineColorTransition?

> **`optional`** **fillOutlineColorTransition**: `Transition`

The transition affecting any changes to this layer’s fillOutlineColor property.

### fillTranslate?

> **`optional`** **fillTranslate**: `Value`\<`Translation`, [`"zoom"`]\>

The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.


### fillTranslateTransition?

> **`optional`** **fillTranslateTransition**: `Transition`

The transition affecting any changes to this layer’s fillTranslate property.


### fillTranslateAnchor?

> **`optional`** **fillTranslateAnchor**: `Value`\<`Enum`\<`FillTranslateAnchorEnum`, `FillTranslateAnchorEnumValues`\>, [`"zoom"`]\>

Controls the frame of reference for `fillTranslate`.

#### Requires

fillTranslate


### fillPattern?

> **`optional`** **fillPattern**: `Value`\<`ResolvedImageType`, [`"zoom"`, `"feature"`]\>

Name of image in sprite to use for drawing image fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.

### fillEmissiveStrength?

> **`optional`** **fillEmissiveStrength**: `Value`\<`number`, [`"zoom"`, `"measure-light"`]\>

Controls the intensity of light emitted on the source features.

#### Requires

lights

### fillEmissiveStrengthTransition?

> **`optional`** **fillEmissiveStrengthTransition**: `Transition`

The transition affecting any changes to this layer’s fillEmissiveStrength property.
