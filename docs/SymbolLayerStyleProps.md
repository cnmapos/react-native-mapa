# SymbolLayerStyleProps

## Properties

### symbolPlacement?

> **`optional`** **symbolPlacement**: `Value`\<`Enum`\<`SymbolPlacementEnum`, `SymbolPlacementEnumValues`\>, [`"zoom"`]\>

Label placement relative to its geometry.



### symbolSpacing?

> **`optional`** **symbolSpacing**: `Value`\<`number`, [`"zoom"`]\>

Distance between two symbol anchors.



### symbolAvoidEdges?

> **`optional`** **symbolAvoidEdges**: `Value`\<`boolean`, [`"zoom"`]\>

If true, the symbols will not cross tile edges to avoid mutual collisions. Recommended in layers that don't have enough padding in the vector tile to prevent collisions, or if it is a point symbol layer placed after a line symbol layer. When using a client that supports global collision detection, like Mapbox GL JS version 0.42.0 or greater, enabling this property is not needed to prevent clipped labels at tile boundaries.



### symbolSortKey?

> **`optional`** **symbolSortKey**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Sorts features in ascending order based on this value. Features with lower sort keys are drawn and placed first. When `iconAllowOverlap` or `textAllowOverlap` is `false`, features with a lower sort key will have priority during placement. When `iconAllowOverlap` or `textAllowOverlap` is set to `true`, features with a higher sort key will overlap over features with a lower sort key.



### symbolZOrder?

> **`optional`** **symbolZOrder**: `Value`\<`Enum`\<`SymbolZOrderEnum`, `SymbolZOrderEnumValues`\>, [`"zoom"`]\>

Determines whether overlapping symbols in the same layer are rendered in the order that they appear in the data source or by their yPosition relative to the viewport. To control the order and prioritization of symbols otherwise, use `symbolSortKey`.



### iconAllowOverlap?

> **`optional`** **iconAllowOverlap**: `Value`\<`boolean`, [`"zoom"`]\>

If true, the icon will be visible even if it collides with other previously drawn symbols.

#### Requires

iconImage



### iconIgnorePlacement?

> **`optional`** **iconIgnorePlacement**: `Value`\<`boolean`, [`"zoom"`]\>

If true, other symbols can be visible even if they collide with the icon.

#### Requires

iconImage



### iconOptional?

> **`optional`** **iconOptional**: `Value`\<`boolean`, [`"zoom"`]\>

If true, text will display without their corresponding icons when the icon collides with other symbols and the text does not.

#### Requires

iconImage, textField



### iconRotationAlignment?

> **`optional`** **iconRotationAlignment**: `Value`\<`Enum`\<`IconRotationAlignmentEnum`, `IconRotationAlignmentEnumValues`\>, [`"zoom"`]\>

In combination with `symbolPlacement`, determines the rotation behavior of icons.

#### Requires

iconImage



### iconSize?

> **`optional`** **iconSize**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by `iconSize`. 1 is the original size; 3 triples the size of the image.

#### Requires

iconImage



### iconTextFit?

> **`optional`** **iconTextFit**: `Value`\<`Enum`\<`IconTextFitEnum`, `IconTextFitEnumValues`\>, [`"zoom"`, `"feature"`]\>

Scales the icon to fit around the associated text.

#### Requires

iconImage, textField



### iconTextFitPadding?

> **`optional`** **iconTextFitPadding**: `Value`\<`number`[], [`"zoom"`, `"feature"`]\>

Size of the additional area added to dimensions determined by `iconTextFit`, in clockwise order: top, right, bottom, left.

#### Requires

iconImage, textField



### iconImage?

> **`optional`** **iconImage**: `Value`\<`ResolvedImageType`, [`"zoom"`, `"feature"`]\>

Name of image in sprite to use for drawing an image background.



### iconRotate?

> **`optional`** **iconRotate**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Rotates the icon clockwise.

#### Requires

iconImage



### iconPadding?

> **`optional`** **iconPadding**: `Value`\<`number`, [`"zoom"`]\>

Size of the additional area around the icon bounding box used for detecting symbol collisions.

#### Requires

iconImage



### iconKeepUpright?

> **`optional`** **iconKeepUpright**: `Value`\<`boolean`, [`"zoom"`]\>

If true, the icon may be flipped to prevent it from being rendered upsideDown.

#### Requires

iconImage



### iconOffset?

> **`optional`** **iconOffset**: `Value`\<`number`[], [`"zoom"`, `"feature"`]\>

Offset distance of icon from its anchor. Positive values indicate right and down, while negative values indicate left and up. Each component is multiplied by the value of `iconSize` to obtain the final offset in pixels. When combined with `iconRotate` the offset will be as if the rotated direction was up.

#### Requires

iconImage



### iconAnchor?

> **`optional`** **iconAnchor**: `Value`\<`Enum`\<`IconAnchorEnum`, `IconAnchorEnumValues`\>, [`"zoom"`, `"feature"`]\>

Part of the icon placed closest to the anchor.

#### Requires

iconImage



### iconPitchAlignment?

> **`optional`** **iconPitchAlignment**: `Value`\<`Enum`\<`IconPitchAlignmentEnum`, `IconPitchAlignmentEnumValues`\>, [`"zoom"`]\>

Orientation of icon when map is pitched.

#### Requires

iconImage



### textPitchAlignment?

> **`optional`** **textPitchAlignment**: `Value`\<`Enum`\<`TextPitchAlignmentEnum`, `TextPitchAlignmentEnumValues`\>, [`"zoom"`]\>

Orientation of text when map is pitched.

#### Requires

textField



### textRotationAlignment?

> **`optional`** **textRotationAlignment**: `Value`\<`Enum`\<`TextRotationAlignmentEnum`, `TextRotationAlignmentEnumValues`\>, [`"zoom"`]\>

In combination with `symbolPlacement`, determines the rotation behavior of the individual glyphs forming the text.

#### Requires

textField



### textField?

> **`optional`** **textField**: `Value`\<`string`, [`"zoom"`, `"feature"`]\>

Value to use for a text label. If a plain `string` is provided, it will be treated as a `formatted` with default/inherited formatting options. SDF images are not supported in formatted text and will be ignored.



### textFont?

> **`optional`** **textFont**: `Value`\<`string`[], [`"zoom"`, `"feature"`]\>

Font stack to use for displaying text.

#### Requires

textField



### textSize?

> **`optional`** **textSize**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Font size.

#### Requires

textField



### textMaxWidth?

> **`optional`** **textMaxWidth**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

The maximum line width for text wrapping.

#### Requires

textField



### textLineHeight?

> **`optional`** **textLineHeight**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Text leading value for multiLine text.

#### Requires

textField



### textLetterSpacing?

> **`optional`** **textLetterSpacing**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Text tracking amount.

#### Requires

textField



### textJustify?

> **`optional`** **textJustify**: `Value`\<`Enum`\<`TextJustifyEnum`, `TextJustifyEnumValues`\>, [`"zoom"`, `"feature"`]\>

Text justification options.

#### Requires

textField



### textRadialOffset?

> **`optional`** **textRadialOffset**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Radial offset of text, in the direction of the symbol's anchor. Useful in combination with `textVariableAnchor`, which defaults to using the twoDimensional `textOffset` if present.

#### Requires

textField



### textVariableAnchor?

> **`optional`** **textVariableAnchor**: `Value`\<`Enum`\<`TextVariableAnchorEnum`, `TextVariableAnchorEnumValues`\>[], [`"zoom"`]\>

To increase the chance of placing highPriority labels on the map, you can provide an array of `textAnchor` locations: the renderer will attempt to place the label at each location, in order, before moving onto the next label. Use `textJustify: auto` to choose justification based on anchor position. To apply an offset, use the `textRadialOffset` or the twoDimensional `textOffset`.

#### Requires

textField



### textAnchor?

> **`optional`** **textAnchor**: `Value`\<`Enum`\<`TextAnchorEnum`, `TextAnchorEnumValues`\>, [`"zoom"`, `"feature"`]\>

Part of the text placed closest to the anchor.

#### Requires

textField

#### Disabled By

textVariableAnchor



### textMaxAngle?

> **`optional`** **textMaxAngle**: `Value`\<`number`, [`"zoom"`]\>

Maximum angle change between adjacent characters.

#### Requires

textField



### textWritingMode?

> **`optional`** **textWritingMode**: `Value`\<`Enum`\<`TextWritingModeEnum`, `TextWritingModeEnumValues`\>[], [`"zoom"`]\>

The property allows control over a symbol's orientation. Note that the property values act as a hint, so that a symbol whose language doesn’t support the provided orientation will be laid out in its natural orientation. Example: English point symbol will be rendered horizontally even if array value contains single 'vertical' enum value. For symbol with point placement, the order of elements in an array define priority order for the placement of an orientation variant. For symbol with line placement, the default text writing mode is either ['horizontal', 'vertical'] or ['vertical', 'horizontal'], the order doesn't affect the placement.

#### Requires

textField



### textRotate?

> **`optional`** **textRotate**: `Value`\<`number`, [`"zoom"`, `"feature"`]\>

Rotates the text clockwise.

#### Requires

textField



### textPadding?

> **`optional`** **textPadding**: `Value`\<`number`, [`"zoom"`]\>

Size of the additional area around the text bounding box used for detecting symbol collisions.

#### Requires

textField



### textKeepUpright?

> **`optional`** **textKeepUpright**: `Value`\<`boolean`, [`"zoom"`]\>

If true, the text may be flipped vertically to prevent it from being rendered upsideDown.

#### Requires

textField



### textTransform?

> **`optional`** **textTransform**: `Value`\<`Enum`\<`TextTransformEnum`, `TextTransformEnumValues`\>, [`"zoom"`, `"feature"`]\>

Specifies how to capitalize text, similar to the CSS `textTransform` property.

#### Requires

textField



### textOffset?

> **`optional`** **textOffset**: `Value`\<`number`[], [`"zoom"`, `"feature"`]\>

Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up. If used with textVariableAnchor, input values will be taken as absolute values. Offsets along the x and yAxis will be applied automatically based on the anchor position.

#### Requires

textField

#### Disabled By

textRadialOffset



### textAllowOverlap?

> **`optional`** **textAllowOverlap**: `Value`\<`boolean`, [`"zoom"`]\>

If true, the text will be visible even if it collides with other previously drawn symbols.

#### Requires

textField



### textIgnorePlacement?

> **`optional`** **textIgnorePlacement**: `Value`\<`boolean`, [`"zoom"`]\>

If true, other symbols can be visible even if they collide with the text.

#### Requires

textField



### textOptional?

> **`optional`** **textOptional**: `Value`\<`boolean`, [`"zoom"`]\>

If true, icons will display without their corresponding text when the text collides with other symbols and the icon does not.

#### Requires

textField, iconImage



### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.



### iconOpacity?

> **`optional`** **iconOpacity**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The opacity at which the icon will be drawn.

#### Requires

iconImage



### iconOpacityTransition?

> **`optional`** **iconOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s iconOpacity property.



### iconColor?

> **`optional`** **iconColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The color of the icon. This can only be used with [SDF icons](https://docs.mapbox.com/help/troubleshooting/using-recolorable-images-in-mapbox-maps/).

#### Requires

iconImage



### iconColorTransition?

> **`optional`** **iconColorTransition**: `Transition`

The transition affecting any changes to this layer’s iconColor property.



### iconHaloColor?

> **`optional`** **iconHaloColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The color of the icon's halo. Icon halos can only be used with [SDF icons](https://docs.mapbox.com/help/troubleshooting/using-recolorable-images-in-mapbox-maps/).

#### Requires

iconImage



### iconHaloColorTransition?

> **`optional`** **iconHaloColorTransition**: `Transition`

The transition affecting any changes to this layer’s iconHaloColor property.



### iconHaloWidth?

> **`optional`** **iconHaloWidth**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Distance of halo to the icon outline.

#### Requires

iconImage



### iconHaloWidthTransition?

> **`optional`** **iconHaloWidthTransition**: `Transition`

The transition affecting any changes to this layer’s iconHaloWidth property.



### iconHaloBlur?

> **`optional`** **iconHaloBlur**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Fade out the halo towards the outside.

#### Requires

iconImage



### iconHaloBlurTransition?

> **`optional`** **iconHaloBlurTransition**: `Transition`

The transition affecting any changes to this layer’s iconHaloBlur property.



### iconTranslate?

> **`optional`** **iconTranslate**: `Value`\<`Translation`, [`"zoom"`]\>

Distance that the icon's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.

#### Requires

iconImage



### iconTranslateTransition?

> **`optional`** **iconTranslateTransition**: `Transition`

The transition affecting any changes to this layer’s iconTranslate property.



### iconTranslateAnchor?

> **`optional`** **iconTranslateAnchor**: `Value`\<`Enum`\<`IconTranslateAnchorEnum`, `IconTranslateAnchorEnumValues`\>, [`"zoom"`]\>

Controls the frame of reference for `iconTranslate`.

#### Requires

iconImage, iconTranslate



### textOpacity?

> **`optional`** **textOpacity**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The opacity at which the text will be drawn.

#### Requires

textField



### textOpacityTransition?

> **`optional`** **textOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s textOpacity property.



### textColor?

> **`optional`** **textColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The color with which the text will be drawn.

#### Requires

textField



### textColorTransition?

> **`optional`** **textColorTransition**: `Transition`

The transition affecting any changes to this layer’s textColor property.



### textHaloColor?

> **`optional`** **textHaloColor**: `Value`\<`string`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The color of the text's halo, which helps it stand out from backgrounds.

#### Requires

textField



### textHaloColorTransition?

> **`optional`** **textHaloColorTransition**: `Transition`

The transition affecting any changes to this layer’s textHaloColor property.



### textHaloWidth?

> **`optional`** **textHaloWidth**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Distance of halo to the font outline. Max text halo width is 1/4 of the fontSize.

#### Requires

textField



### textHaloWidthTransition?

> **`optional`** **textHaloWidthTransition**: `Transition`

The transition affecting any changes to this layer’s textHaloWidth property.



### textHaloBlur?

> **`optional`** **textHaloBlur**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

The halo's fadeout distance towards the outside.

#### Requires

textField



### textHaloBlurTransition?

> **`optional`** **textHaloBlurTransition**: `Transition`

The transition affecting any changes to this layer’s textHaloBlur property.



### textTranslate?

> **`optional`** **textTranslate**: `Value`\<`Translation`, [`"zoom"`]\>

Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.

#### Requires

textField



### textTranslateTransition?

> **`optional`** **textTranslateTransition**: `Transition`

The transition affecting any changes to this layer’s textTranslate property.



### textTranslateAnchor?

> **`optional`** **textTranslateAnchor**: `Value`\<`Enum`\<`TextTranslateAnchorEnum`, `TextTranslateAnchorEnumValues`\>, [`"zoom"`]\>

Controls the frame of reference for `textTranslate`.

#### Requires

textField, textTranslate



### symbolZElevate?

> **`optional`** **symbolZElevate**: `Value`\<`boolean`, [`"zoom"`]\>

Position symbol on buildings (both fill extrusions and models) roof tops. In order to have minimal impact on performance, this is supported only when `fillExtrusionHeight` is not zoomDependent and not edited after initial bucket creation. For fading in buildings when zooming in, fillExtrusionVerticalScale should be used and symbols would raise with building roofs. Symbols are sorted by elevation, except in case when `viewportY` sorting or `symbolSortKey` are applied.



### iconEmissiveStrength?

> **`optional`** **iconEmissiveStrength**: `Value`\<`number`, [`"zoom"`, `"measure-light"`]\>

Controls the intensity of light emitted on the source features.

#### Requires

lights



### iconEmissiveStrengthTransition?

> **`optional`** **iconEmissiveStrengthTransition**: `Transition`

The transition affecting any changes to this layer’s iconEmissiveStrength property.



### textEmissiveStrength?

> **`optional`** **textEmissiveStrength**: `Value`\<`number`, [`"zoom"`, `"measure-light"`]\>

Controls the intensity of light emitted on the source features.

#### Requires

lights



### textEmissiveStrengthTransition?

> **`optional`** **textEmissiveStrengthTransition**: `Transition`

The transition affecting any changes to this layer’s textEmissiveStrength property.



### iconImageCrossFade?

> **`optional`** **iconImageCrossFade**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Controls the transition progress between the image variants of iconImage. Zero means the first variant is used, one is the second, and in between they are blended together.



### iconImageCrossFadeTransition?

> **`optional`** **iconImageCrossFadeTransition**: `Transition`

The transition affecting any changes to this layer’s iconImageCrossFade property.
