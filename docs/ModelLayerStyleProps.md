
#  ModelLayerStyleProps


## Properties

### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.

### modelId?

> **`optional`** **modelId**: `Value`\<`string`, [`"zoom"`, `"feature"`]\>

Model to render.

### modelOpacity?

> **`optional`** **modelOpacity**: `Value`\<`number`, [`"zoom"`]\>

The opacity of the model layer.



### modelOpacityTransition?

> **`optional`** **modelOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s modelOpacity property.

### modelRotation?

> **`optional`** **modelRotation**: `Value`\<`number`[], [`"feature"`, `"feature-state"`, `"zoom"`]\>

The rotation of the model in euler angles [lon, lat, z].

### modelRotationTransition?

> **`optional`** **modelRotationTransition**: `Transition`

The transition affecting any changes to this layer’s modelRotation property.

### modelScale?

> **`optional`** **modelScale**: `Value`\<`number`[], [`"feature"`, `"feature-state"`, `"zoom"`]\>

The scale of the model. Expressions that are zoomDependent are not supported if using GeoJSON or vector tile as the model layer source.

### modelScaleTransition?

> **`optional`** **modelScaleTransition**: `Transition`

The transition affecting any changes to this layer’s modelScale property.

### modelTranslation?

> **`optional`** **modelTranslation**: `Value`\<`number`[], [`"feature"`, `"feature-state"`, `"zoom"`]\>

The translation of the model in meters in form of [longitudal, latitudal, altitude] offsets.

### modelTranslationTransition?

> **`optional`** **modelTranslationTransition**: `Transition`

The transition affecting any changes to this layer’s modelTranslation property.

### modelColor?

> **`optional`** **modelColor**: `Value`\<`string`, [`"feature"`, `"feature-state"`, `"measure-light"`, `"zoom"`]\>

The tint color of the model layer. modelColorMixIntensity (defaults to 0) defines tint(mix) intensity  this means that, this color is not used unless modelColorMixIntensity gets value greater than 0. Expressions that depend on measureLight are not supported when using GeoJSON or vector tile as the model layer source.

### modelColorTransition?

> **`optional`** **modelColorTransition**: `Transition`

The transition affecting any changes to this layer’s modelColor property.

### modelColorMixIntensity?

> **`optional`** **modelColorMixIntensity**: `Value`\<`number`, [`"feature"`, `"feature-state"`, `"measure-light"`]\>

Intensity of modelColor (on a scale from 0 to 1) in color mix with original 3D model's colors. Higher number will present a higher modelColor contribution in mix. Expressions that depend on measureLight are not supported when using GeoJSON or vector tile as the model layer source.

### modelColorMixIntensityTransition?

> **`optional`** **modelColorMixIntensityTransition**: `Transition`

The transition affecting any changes to this layer’s modelColorMixIntensity property.



### modelType?

> **`optional`** **modelType**: `Enum`\<`ModelTypeEnum`, `ModelTypeEnumValues`\>

Defines rendering behavior of model in respect to other 3D scene objects.



### modelCastShadows?

> **`optional`** **modelCastShadows**: `Value`\<`boolean`, []\>

Enable/Disable shadow casting for this layer



### modelReceiveShadows?

> **`optional`** **modelReceiveShadows**: `Value`\<`boolean`, []\>

Enable/Disable shadow receiving for this layer



### modelAmbientOcclusionIntensity?

> **`optional`** **modelAmbientOcclusionIntensity**: `Value`\<`number`, [`"zoom"`]\>

Intensity of the ambient occlusion if present in the 3D model.



### modelAmbientOcclusionIntensityTransition?

> **`optional`** **modelAmbientOcclusionIntensityTransition**: `Transition`

The transition affecting any changes to this layer’s modelAmbientOcclusionIntensity property.



### modelEmissiveStrength?

> **`optional`** **modelEmissiveStrength**: `Value`\<`number`, [`"feature"`, `"feature-state"`, `"measure-light"`]\>

Strength of the emission. There is no emission for value 0. For value 1.0, only emissive component (no shading) is displayed and values above 1.0 produce light contribution to surrounding area, for some of the parts (e.g. doors). Expressions that depend on measureLight are not supported when using GeoJSON or vector tile as the model layer source.



### modelEmissiveStrengthTransition?

> **`optional`** **modelEmissiveStrengthTransition**: `Transition`

The transition affecting any changes to this layer’s modelEmissiveStrength property.



### modelRoughness?

> **`optional`** **modelRoughness**: `Value`\<`number`, [`"feature"`, `"feature-state"`]\>

Material roughness. Material is fully smooth for value 0, and fully rough for value 1. Affects only layers using batchedModel source.



### modelRoughnessTransition?

> **`optional`** **modelRoughnessTransition**: `Transition`

The transition affecting any changes to this layer’s modelRoughness property.



### modelHeightBasedEmissiveStrengthMultiplier?

> **`optional`** **modelHeightBasedEmissiveStrengthMultiplier**: `Value`\<`number`[], [`"feature"`, `"feature-state"`, `"measure-light"`]\>

Emissive strength multiplier along model height (gradient begin, gradient end, value at begin, value at end, gradient curve power (logarithmic scale, curve power = pow(10, val)).



### modelHeightBasedEmissiveStrengthMultiplierTransition?

> **`optional`** **modelHeightBasedEmissiveStrengthMultiplierTransition**: `Transition`

The transition affecting any changes to this layer’s modelHeightBasedEmissiveStrengthMultiplier property.



### modelCutoffFadeRange?

> **`optional`** **modelCutoffFadeRange**: `Value`\<`number`, []\>

This parameter defines the range for the fadeOut effect before an automatic content cutoff on pitched map views. The automatic cutoff range is calculated according to the minimum required zoom level of the source and layer. The fade range is expressed in relation to the height of the map view. A value of 1.0 indicates that the content is faded to the same extent as the map's height in pixels, while a value close to zero represents a sharp cutoff. When the value is set to 0.0, the cutoff is completely disabled. Note: The property has no effect on the map if terrain is enabled.
