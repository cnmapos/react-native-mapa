# HeatmapLayerStyleProps

## Properties

### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.

#### Source

[src/types/styles.ts:1183](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1183)

***

### heatmapRadius?

> **`optional`** **heatmapRadius**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Radius of influence of one heatmap point in pixels. Increasing the value makes the heatmap smoother, but less detailed. `queryRenderedFeatures` on heatmap layers will return points within this radius.

#### Source

[src/types/styles.ts:1187](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1187)

***

### heatmapRadiusTransition?

> **`optional`** **heatmapRadiusTransition**: `Transition`

The transition affecting any changes to this layer’s heatmapRadius property.

#### Source

[src/types/styles.ts:1192](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1192)

***

### heatmapWeight?

> **`optional`** **heatmapWeight**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

A measure of how much an individual point contributes to the heatmap. A value of 10 would be equivalent to having 10 points of weight 1 in the same spot. Especially useful when combined with clustering.

#### Source

[src/types/styles.ts:1196](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1196)

***

### heatmapIntensity?

> **`optional`** **heatmapIntensity**: `Value`\<`number`, [`"zoom"`]\>

Similar to `heatmapWeight` but controls the intensity of the heatmap globally. Primarily used for adjusting the heatmap based on zoom level.

#### Source

[src/types/styles.ts:1200](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1200)

***

### heatmapIntensityTransition?

> **`optional`** **heatmapIntensityTransition**: `Transition`

The transition affecting any changes to this layer’s heatmapIntensity property.

#### Source

[src/types/styles.ts:1205](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1205)

***

### heatmapColor?

> **`optional`** **heatmapColor**: `Value`\<`string`, [`"heatmap-density"`]\>

Defines the color of each pixel based on its density value in a heatmap. Should be an expression that uses `["heatmapDensity"]` as input.

#### Source

[src/types/styles.ts:1209](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1209)

***

### heatmapOpacity?

> **`optional`** **heatmapOpacity**: `Value`\<`number`, [`"zoom"`]\>

The global opacity at which the heatmap layer will be drawn.

#### Source

[src/types/styles.ts:1213](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1213)

***

### heatmapOpacityTransition?

> **`optional`** **heatmapOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s heatmapOpacity property.

#### Source

[src/types/styles.ts:1218](https://github.com/cnmapos/react-native-mapsdk/blob/d24e9ec/src/types/styles.ts#L1218)
