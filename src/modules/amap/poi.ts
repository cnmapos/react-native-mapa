import axios from 'axios';
import { IDParams, KeyParams, NearParams, POIData, POIRequest, PolygonParams } from '../../types';
import { ResResult } from '../../types/amap/base';
import { RequestBase } from './base';

export class AmapPOIRequest extends RequestBase implements POIRequest {
    searchByKey(params: KeyParams): Promise<ResResult<POIData>> {
        throw new Error('Method not implemented.');
    }
    async searchByDistance(params: NearParams): Promise<ResResult<POIData>> {
        try {
            const requestParams = { ...params, location: params.location.join(','), types: params.types?.join('|') };
            const { data } = await axios.get(`${this.serverHost}/place/around`, { params: requestParams });
            const { status, suggestion, pois, ...others } = data;

            return {
                ...others,
                status: Number(status),
                suggestion,
                pois: pois.map((poi: any) => ({
                    ...poi,
                    location: poi.location.split(',').map((c: string) => Number(c)),
                    distance: Number(poi.distance),
                    entrLocation: poi.entr_location?.split(',').map((c: string) => Number(c)),
                    exitLocation: poi.exit_location?.split(',').map((c: string) => Number(c)),
                })),
            } as ResResult<POIData>;
        } catch (err: any) {
            return {
                status: 0,
                info: err.toString(),
            } as ResResult<POIData>;
        }
    }
    searchByPolygon(params: PolygonParams): Promise<ResResult<POIData>> {
        throw new Error('Method not implemented.');
    }
    searchByID(params: IDParams): Promise<ResResult<POIData>> {
        throw new Error('Method not implemented.');
    }
}
