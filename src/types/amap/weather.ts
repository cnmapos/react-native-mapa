import { City, ParamsBase, Province, ResResult } from './base';

/**
 * 天气查询参数
 */
export type WeatherParams = ParamsBase & {
    /**
     * 城市编码
     * 输入城市的adcode，adcode信息可参考城市编码表
     * https://lbs.amap.com/api/webservice/download
     */
    city: string;
    /**
     * 气象类型
     * 可选值：base/all
     * base:返回实况天气
     * all:返回预报天气
     *
     * @defaultValue base
     */
    extensions?: string;
};

/**
 * 实时天气信息
 */
export type RealWeatherObject = {
    /**
     * 天气现象（汉字描述）
     */
    weather: string;
    /**
     * 实时气温，单位：摄氏度
     */
    temperature: string;
    /**
     * 风向描述
     */
    winddirection: string;
    /**
     * 风力级别，单位：级
     */
    windpower: string;
    /**
     * 空气湿度
     */
    humidity: string;
    /**
     * 数据发布的时间
     */
    reporttime: string;
} & Pick<Province, 'province'> &
    Pick<City, 'city'>;
/**
 * 未来天气
 */
export type ForecastWheatherObject = {
    reporttime: string;
    casts: ForecastWheatherItem[];
} & Pick<Province, 'province'> &
    Pick<City, 'city'>;

/**
 * 未来天气详细项
 */
export type ForecastWheatherItem = {
    /**
     * 日期
     */
    date: string;
    /**
     * 星期几
     */
    week: string;
    /**
     * 白天天气现象
     */
    dayweather: string;
    /**
     * 晚上天气现象
     */
    nightweather: string;
    /**
     * 白天温度
     */
    daytemp: string;
    /**
     * 晚上温度
     */
    nighttemp: string;
    /**
     * 白天风向
     */
    daywind: string;
    /**
     * 晚上风向
     */
    nightwind: string;
    /**
     * 白天风力
     */
    daypower: string;
    /**
     * 晚上风力
     */
    nightpower: string;
};

export type WeatherData = {
    lives?: RealWeatherObject[];
    forecasts?: ForecastWheatherObject[];
};

/**
 * 天气接口
 */
export interface WeatherReuqest {
    weather(params: WeatherParams): Promise<ResResult<WeatherData>>;
}
