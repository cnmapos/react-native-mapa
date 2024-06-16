# HeatmapLayerStyleProps

## Properties

### visibility?

> **`optional`** **visibility**: `Value`\<`Enum`\<`VisibilityEnum`, `VisibilityEnumValues`\>, []\>

Whether this layer is displayed.


***

### heatmapRadius?

> **`optional`** **heatmapRadius**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

Radius of influence of one heatmap point in pixels. Increasing the value makes the heatmap smoother, but less detailed. `queryRenderedFeatures` on heatmap layers will return points within this radius.

***

### heatmapRadiusTransition?

> **`optional`** **heatmapRadiusTransition**: `Transition`

The transition affecting any changes to this layer’s heatmapRadius property.

***

### heatmapWeight?

> **`optional`** **heatmapWeight**: `Value`\<`number`, [`"zoom"`, `"feature"`, `"feature-state"`, `"measure-light"`]\>

A measure of how much an individual point contributes to the heatmap. A value of 10 would be equivalent to having 10 points of weight 1 in the same spot. Especially useful when combined with clustering.

***

### heatmapIntensity?

> **`optional`** **heatmapIntensity**: `Value`\<`number`, [`"zoom"`]\>

Similar to `heatmapWeight` but controls the intensity of the heatmap globally. Primarily used for adjusting the heatmap based on zoom level.

***

### heatmapIntensityTransition?

> **`optional`** **heatmapIntensityTransition**: `Transition`

The transition affecting any changes to this layer’s heatmapIntensity property.

***

### heatmapColor?

> **`optional`** **heatmapColor**: `Value`\<`string`, [`"heatmap-density"`]\>

Defines the color of each pixel based on its density value in a heatmap. Should be an expression that uses `["heatmapDensity"]` as input.

***

### heatmapOpacity?

> **`optional`** **heatmapOpacity**: `Value`\<`number`, [`"zoom"`]\>

The global opacity at which the heatmap layer will be drawn.

***

### heatmapOpacityTransition?

> **`optional`** **heatmapOpacityTransition**: `Transition`

The transition affecting any changes to this layer’s heatmapOpacity property.
