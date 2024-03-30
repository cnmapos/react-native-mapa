import axios from 'axios';
import { ForecastWheatherObject, RealWeatherObject, WeatherData, WeatherParams, WeatherReuqest } from '../../types';
import { ResResult } from '../../types/amap/base';
import { RequestBase } from './base';

export class AMapWeatherRequest extends RequestBase implements WeatherReuqest {
    async weather(params: WeatherParams): Promise<ResResult<WeatherData>> {
        try {
            console.log(params);
            const { data } = await axios.get(`${this.serverHost}/weather/weatherInfo`, { params });
            const { status, ...others } = data;
            return {
                status: Number(status),
                ...others,
            } as ResResult<WeatherData>;
        } catch (err: any) {
            return {
                status: 0,
                info: err.toString(),
            } as ResResult<WeatherData>;
        }
    }
}
