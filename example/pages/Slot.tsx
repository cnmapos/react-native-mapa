import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView, Text} from 'react-native';

const {ParentComponent, SlotComp, SlotTypeEnum} = Mapa;

function SlotView({navigation}: any): React.JSX.Element {
    const {...a} = Mapa;
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <ParentComponent>
                    <SlotComp
                        slot={SlotTypeEnum.leftBottom}
                        key="xxx-Camera"
                        insertSite={'start'}>
                        <Mapa.Camera />
                    </SlotComp>

                    <SlotComp
                        slot={SlotTypeEnum.rightBottom}
                        key="xxx-zoom-in-out"
                        insertSite={'start'}>
                        <Mapa.ZoomInOut />
                    </SlotComp>
                    <SlotComp
                        slot={SlotTypeEnum.leftBottom}
                        key="xxx-location"
                        insertSite={'start'}>
                        <Mapa.Location
                            style={'right-bottom'}
                            locateWhenInit={true}
                            visible={true}
                        />
                    </SlotComp>

                    <SlotComp
                        slot={SlotTypeEnum.bottomCenter}
                        key="xxx-poi"
                        insertSite={'end'}>
                        <Mapa.POIFinder
                            placeholder={'请输入地址'}
                            akey={'64bdebe6239a3a398443b2af4ba6085e'}
                        />
                    </SlotComp>
                </ParentComponent>
                <Mapa.Camera />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default SlotView;
