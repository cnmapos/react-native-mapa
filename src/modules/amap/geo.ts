import axios from 'axios';
import { AddressGeoObject, AddressRegeoObject, GeoCodeRequest, GeoParams, RegeoParams } from '../../types';
import { ResResult } from '../../types/amap/base';
import { RequestBase } from './base';

export class AMapGeoRequest extends RequestBase implements GeoCodeRequest {
    ecodeAddress(params: GeoParams): Promise<ResResult<{ count: number; geocodes: AddressGeoObject[] }>> {
        throw new Error('Method not implemented.');
    }
    async decodeAddress(params: RegeoParams): Promise<ResResult<{ regeocode: AddressRegeoObject }>> {
        try {
            const requestParams = { ...params, location: params.location.join(',') };
            const { data } = await axios.get(`${this.serverHost}/geocode/regeo`, { params: requestParams });
            const { status, ...others } = data;
            return {
                status: Number(status),
                ...others,
            } as ResResult<{ regeocode: AddressRegeoObject }>;
        } catch (err: any) {
            return {
                status: 0,
                info: err.toString(),
            } as ResResult<{ regeocode: AddressRegeoObject }>;
        }
    }
}
