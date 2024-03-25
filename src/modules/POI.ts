import axios from 'axios';
import { POIRequest, Position, ResResult, SearchNearData, SearchNearParams, SearchTipParams, TipObject } from '..';
const serverhost = 'https://restapi.amap.com/v3';

export class AMapPOI implements POIRequest {
    seachTip(params: SearchTipParams): Promise<ResResult<TipObject>> {
        throw new Error('Method not implemented.');
    }
    async searchNear(params: SearchNearParams) {
        try {
            // console.log('params', params);
            const { data } = await axios.get(`${serverhost}/place/around`, { params });
            console.log('data', data);
            const searchData: SearchNearData = {
                count: Number(data.count),
                pois: data.pois.map((p: any) => ({
                    distance: Number(p.distance),
                    pcode: p.pcode,
                    type: p.type,
                    photos: p.photos,
                    typecode: p.typecode,
                    citycode: p.citycode,
                    adname: p.adname,
                    alias: p.alias,
                    tel: p.tel,
                    address: p.address,
                    adcode: p.adcode,
                    pname: p.pname,
                    cityname: p.cityname,
                    name: p.name,
                    location: p.location.split(',').map((l: string) => Number(l)) as Position,
                })),
            };
            return { code: 0, data: searchData };
        } catch (err) {
            return { code: 500, message: err };
        }
    }
}
