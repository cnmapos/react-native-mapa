import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapContext } from '../modules/MapContext';

/**
 * Scalebar props
 *
 * @category Props
 */
export type ScalebarProps = {};

/**
  @category Component
 */
const Scalebar = (props: ScalebarProps) => {
    const { map, pixLayoutInfo } = useContext(MapContext);

    console.log(map, 'map===');

    // 获取地图的可见区域边界框
    const getVisibleBounds = async () => {
        if (map) {
            const visibleBounds = await map.getVisibleBounds();
            return visibleBounds;
        }

        console.log(map, 'map===');
        return null;
    };

    useEffect(() => {
        console.log();
    });

    return <ScaleIndicator getVisibleBounds={getVisibleBounds} pixLayoutInfo={pixLayoutInfo} />;
};

type ScaleIndicatorProps = {
    getVisibleBounds: () => Promise<any>;
    pixLayoutInfo: {
        width: number;
        height: number;
    };
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 8,
        borderRadius: 4,
    },
    scaleText: {
        fontSize: 16,
    },
});

const ScaleIndicator = ({ getVisibleBounds, pixLayoutInfo }: ScaleIndicatorProps) => {
    const [scale, setScale] = useState<number | null>(null);

    useEffect(() => {
        const { width: mapWidth, height: mapHeight } = pixLayoutInfo;

        const calculateScale = async () => {
            const bounds = await getVisibleBounds();
            if (bounds && mapWidth > 0 && mapHeight > 0) {
                const { ne, sw } = bounds.geometry;

                // 计算地图宽度和高度在屏幕上的像素数量
                const mapPixelWidth = mapWidth * 0.7; // 使用地图宽度的70%来计算比例尺
                const mapPixelHeight = mapHeight * 0.7;

                // 计算地图距离
                const horizontalMapDistance = Math.abs(ne.longitude - sw.longitude);
                const verticalMapDistance = Math.abs(ne.latitude - sw.latitude);

                // 计算水平和垂直的比例尺
                const horizontalScale = horizontalMapDistance / mapPixelWidth;
                const verticalScale = verticalMapDistance / mapPixelHeight;

                // 取平均值作为比例尺
                const averageScale = (horizontalScale + verticalScale) / 2;

                setScale(averageScale);
            }
        };

        calculateScale();

        return () => {
            setScale(null); // 清除比例尺状态
        };
    }, [getVisibleBounds, pixLayoutInfo]);

    useEffect(() => {}, []);

    return (
        <View style={styles.container}>
            {scale && <Text style={styles.scaleText}>{`Scale: 1 : ${Math.round(scale)}`}</Text>}
        </View>
    );
};

export default Scalebar;
