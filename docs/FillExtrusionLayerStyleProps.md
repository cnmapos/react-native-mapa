# FillExtrusionLayerStyleProps

## Properties

### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.


### fillExtrusionOpacity?

> **`optional`** **fillExtrusionOpacity**: `Value`\<`number`, [`"zoom"`]\>

The opacity of the entire fill extrusion layer. This is rendered on a perLayer, not perFeature, basis, and dataDriven styling is not available.


### fillExtrusionOpacityTransition?

> **`optional`** **fillExtrusionOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionOpacity property.


### fillExtrusionColor?

> **`optional`** **fillExtrusionColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The base color of the extruded fill. The extrusion's surfaces will be shaded differently based on this color in combination with the root `light` settings. If this color is specified as `rgba` with an alpha component, the alpha component will be ignored; use `fillExtrusionOpacity` to set layer opacity.

#### Disabled By

fillExtrusionPattern


### fillExtrusionColorTransition?

> **`optional`** **fillExtrusionColorTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionColor property.


### fillExtrusionTranslate?

> **`optional`** **fillExtrusionTranslate**: `Value`\<`Translation`, [`"zoom"`]\>

The geometry's offset. Values are [x, y] where negatives indicate left and up (on the flat plane), respectively.


### fillExtrusionTranslateTransition?

> **`optional`** **fillExtrusionTranslateTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionTranslate property.


### fillExtrusionTranslateAnchor?

> **`optional`** **fillExtrusionTranslateAnchor**: `Value`\<`Enum`\<`FillExtrusionTranslateAnchorEnum`, `FillExtrusionTranslateAnchorEnumValues`\>, [`"zoom"`]\>

Controls the frame of reference for `fillExtrusionTranslate`.

#### Requires

fillExtrusionTranslate


### fillExtrusionPattern?

> **`optional`** **fillExtrusionPattern**: `Value`\<`ResolvedImageType`, [`"zoom"`, `"feature"`]\>

Name of image in sprite to use for drawing images on extruded fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.

### fillExtrusionHeight?

> **`optional`** **fillExtrusionHeight**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`]\>

The height with which to extrude this layer.

### fillExtrusionHeightTransition?

> **`optional`** **fillExtrusionHeightTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionHeight property.


### fillExtrusionBase?

> **`optional`** **fillExtrusionBase**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`]\>

The height with which to extrude the base of this layer. Must be less than or equal to `fillExtrusionHeight`.

#### Requires

fillExtrusionHeight


### fillExtrusionBaseTransition?

> **`optional`** **fillExtrusionBaseTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionBase property.


### fillExtrusionVerticalGradient?

> **`optional`** **fillExtrusionVerticalGradient**: `Value`\<`boolean`, [`"zoom"`]\>

Whether to apply a vertical gradient to the sides of a fillExtrusion layer. If true, sides will be shaded slightly darker farther down.


### fillExtrusionRoundedRoof?

> **`optional`** **fillExtrusionRoundedRoof**: `Value`\<`boolean`, [`"zoom"`]\>

Indicates whether top edges should be rounded when fillExtrusionEdgeRadius has a value greater than 0. If false, rounded edges are only applied to the sides. Default is true.

#### Requires

fillExtrusionEdgeRadius

### fillExtrusionAmbientOcclusionWallRadius?

> **`optional`** **fillExtrusionAmbientOcclusionWallRadius**: `Value`\<`number`, [`"zoom"`]\>

Shades area near ground and concave angles between walls where the radius defines only vertical impact. Default value 3.0 corresponds to height of one floor and brings the most plausible results for buildings.

#### Requires

lights, fillExtrusionEdgeRadius

#### Disabled By

fillExtrusionFloodLightIntensity

### fillExtrusionAmbientOcclusionWallRadiusTransition?

> **`optional`** **fillExtrusionAmbientOcclusionWallRadiusTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionAmbientOcclusionWallRadius property.


### fillExtrusionAmbientOcclusionGroundRadius?

> **`optional`** **fillExtrusionAmbientOcclusionGroundRadius**: `Value`\<`number`, [`"zoom"`]\>

The extent of the ambient occlusion effect on the ground beneath the extruded buildings in meters.

#### Requires

lights

#### Disabled By

fillExtrusionFloodLightIntensity

### fillExtrusionAmbientOcclusionGroundRadiusTransition?

> **`optional`** **fillExtrusionAmbientOcclusionGroundRadiusTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionAmbientOcclusionGroundRadius property.


### fillExtrusionAmbientOcclusionGroundAttenuation?

> **`optional`** **fillExtrusionAmbientOcclusionGroundAttenuation**: `Value`\<`number`, [`"zoom"`]\>

Provides a control to futher fineTune the look of the ambient occlusion on the ground beneath the extruded buildings. Lower values give the effect a more solid look while higher values make it smoother.

#### Requires

lights

#### Disabled By

fillExtrusionFloodLightIntensity


### fillExtrusionAmbientOcclusionGroundAttenuationTransition?

> **`optional`** **fillExtrusionAmbientOcclusionGroundAttenuationTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionAmbientOcclusionGroundAttenuation property.

### fillExtrusionFloodLightColor?

> **`optional`** **fillExtrusionFloodLightColor**: `Value`\<`string`, [`"zoom"`, `"measure-light"`]\>

The color of the flood light effect on the walls of the extruded buildings.

#### Requires

lights

#### Disabled By

fillExtrusionAmbientOcclusionIntensity

### fillExtrusionFloodLightColorTransition?

> **`optional`** **fillExtrusionFloodLightColorTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionFloodLightColor property.

### fillExtrusionFloodLightIntensity?

> **`optional`** **fillExtrusionFloodLightIntensity**: `Value`\<`number`, [`"zoom"`, `"measure-light"`]\>

The intensity of the flood light color.

#### Requires

lights

#### Disabled By

fillExtrusionAmbientOcclusionIntensity

### fillExtrusionFloodLightIntensityTransition?

> **`optional`** **fillExtrusionFloodLightIntensityTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionFloodLightIntensity property.


### fillExtrusionFloodLightWallRadius?

> **`optional`** **fillExtrusionFloodLightWallRadius**: `Value`\<`number`, [`"feature"`, `"feature-state"`]\>

The extent of the flood light effect on the walls of the extruded buildings in meters.

#### Requires

lights

#### Disabled By

fillExtrusionAmbientOcclusionIntensity

### fillExtrusionFloodLightWallRadiusTransition?

> **`optional`** **fillExtrusionFloodLightWallRadiusTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionFloodLightWallRadius property.


### fillExtrusionFloodLightGroundRadius?

> **`optional`** **fillExtrusionFloodLightGroundRadius**: `Value`\<`number`, [`"feature"`, `"feature-state"`]\>

The extent of the flood light effect on the ground beneath the extruded buildings in meters.

#### Requires

lights

#### Disabled By

fillExtrusionAmbientOcclusionIntensity

### fillExtrusionFloodLightGroundRadiusTransition?

> **`optional`** **fillExtrusionFloodLightGroundRadiusTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionFloodLightGroundRadius property.

### fillExtrusionFloodLightGroundAttenuation?

> **`optional`** **fillExtrusionFloodLightGroundAttenuation**: `Value`\<`number`, [`"zoom"`]\>

Provides a control to futher fineTune the look of the flood light on the ground beneath the extruded buildings. Lower values give the effect a more solid look while higher values make it smoother.

#### Requires

lights

#### Disabled By

fillExtrusionAmbientOcclusionIntensity

### fillExtrusionFloodLightGroundAttenuationTransition?

> **`optional`** **fillExtrusionFloodLightGroundAttenuationTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionFloodLightGroundAttenuation property.

### fillExtrusionVerticalScale?

> **`optional`** **fillExtrusionVerticalScale**: `Value`\<`number`, [`"zoom"`]\>

A global multiplier that can be used to scale base, height, AO, and flood light of the fill extrusions.

### fillExtrusionVerticalScaleTransition?

> **`optional`** **fillExtrusionVerticalScaleTransition**: `Transition`

The transition affecting any changes to this layer’s fillExtrusionVerticalScale property.

### fillExtrusionCutoffFadeRange?

> **`optional`** **fillExtrusionCutoffFadeRange**: `Value`\<`number`, []\>

This parameter defines the range for the fadeOut effect before an automatic content cutoff on pitched map views. The automatic cutoff range is calculated according to the minimum required zoom level of the source and layer. The fade range is expressed in relation to the height of the map view. A value of 1.0 indicates that the content is faded to the same extent as the map's height in pixels, while a value close to zero represents a sharp cutoff. When the value is set to 0.0, the cutoff is completely disabled. Note: The property has no effect on the map if terrain is enabled.
