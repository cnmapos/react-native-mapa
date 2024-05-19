import Wrapper from '../components/Wrapper';
import Mapa from 'react-native-mapa';
import React, {useState, useEffect} from 'react';
/**
  @category Component
 */
const HeatmapLayer = () => {
    const [radio, setRadio] = useState(30);

    useEffect(() => {
        let t = setInterval(() => {
            setRadio(radio === 30 ? 40 : 30);
        }, 1000);
        return () => {
            clearInterval(t);
        };
    }, [radio]);

    return (
        <Wrapper>
            <Mapa.Camera zoom={0} />
            <Mapa.ZoomInOut />
            <Mapa.GeoJSONSource
                id="earthquakes"
                url="https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson">
                <Mapa.HeatmapLayer
                    id="earthquakes"
                    sourceId="earthquakes"
                    style={{
                        // visibility: 'none',
                        heatmapRadius: radio,
                        heatmapRadiusTransition: {duration: 1000, delay: 100},
                        // heatmapOpacity: 1,
                        heatmapColor: [
                            'interpolate',
                            ['linear'],
                            ['heatmap-density'],
                            0,
                            'rgba(33,102,172,0)',
                            0.2,
                            'rgb(103,169,207)',
                            0.4,
                            'rgb(209,229,240)',
                            0.6,
                            'rgb(253,219,199)',
                            0.8,
                            'rgb(239,138,98)',
                            1,
                            'rgb(178,24,43)',
                        ],
                    }}
                />
            </Mapa.GeoJSONSource>
        </Wrapper>
    );
};

export default HeatmapLayer;
