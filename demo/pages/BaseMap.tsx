import Mapa, { Slot } from '../../src/';
import { SafeAreaView } from 'react-native';
import ParentComponent from '../../src/components/slots/ParentComponent';
import SlotComp from '../../src/components/slots/SlotComp';
import { SlotTypeEnum } from '../../src/components/slots/type';

function PreView({ navigation }: any): React.JSX.Element {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Mapa.MapView>
                <ParentComponent>
                    <SlotComp slot={SlotTypeEnum.leftBottom} key="xxx-Camera" insertSite={'start'}>
                        <Mapa.Camera />
                    </SlotComp>
                </ParentComponent>
                {/* <Slot slot="rightTop" backgroundColor={'transparent'}>
                    <Mapa.Camera />
                </Slot>
                <Slot slot="rightBottom" width={0.2} height={0.35} backgroundColor={'transparent'}>
                    <Mapa.ZoomInOut />
                    <Mapa.Location style={'right-bottom'} locateWhenInit={true} visible={true} />
                </Slot>
                <Mapa.POIFinder placeholder={'请输入地址'} akey={'64bdebe6239a3a398443b2af4ba6085e'} /> */}
            </Mapa.MapView>
        </SafeAreaView>
        // <Mapa.MapView>
        //     <Slot slot="rightTop" backgroundColor={'transparent'}>
        //         <Mapa.Camera />
        //     </Slot>
        //     <Slot slot="rightBottom" width={0.2} height={0.35} backgroundColor={'transparent'}>
        //         <Mapa.ZoomInOut />
        //         <Mapa.Location style={'right-bottom'} locateWhenInit={true} visible={true} />
        //     </Slot>
        //     <Mapa.POIFinder placeholder={'请输入地址'} akey={'64bdebe6239a3a398443b2af4ba6085e'} />
        // </Mapa.MapView>
    );
}

export default PreView;
