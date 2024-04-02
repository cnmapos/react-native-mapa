import Mapa, { Slot } from '../../src/';

function PreView({ navigation }: any): React.JSX.Element {
    return (
        <Mapa.MapView>
            <Slot slot="rightTop" backgroundColor={'transparent'}>
                <Mapa.Camera />
            </Slot>
            <Slot slot="rightBottom" width={0.2} height={0.35} backgroundColor={'transparent'}>
                <Mapa.ZoomInOut />
                <Mapa.Location style={'right-bottom'} locateWhenInit={true} visible={true} />
            </Slot>
            <Mapa.POIFinder placeholder={'请输入地址'} akey={'64bdebe6239a3a398443b2af4ba6085e'} />
        </Mapa.MapView>
    );
}

export default PreView;
