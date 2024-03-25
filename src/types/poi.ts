export const searchMaxRadius = 50000;
type Position = [number, number];

type SearchParamsBase = {
    /**
     * 查询key
     */
    key: string;
    /**
     * 返回数据格式，支持JSON、XML，默认JSON
     */
    output?: string;
    sig?: string;
};

export type SearchNearParams = SearchParamsBase & {
    /**
     * 搜索关键字
     */
    keywords: string;
    /**
     * 查询中心坐标
     */
    location?: string;
    /**
     * 查询半径
     * 取值范围:0-50000。规则：大于50000按默认值，单位：米
     */
    radius?: number;
    /**
     * 查询POI类型
     */
    types?: string;
    city?: string;
    /**
     * 每页记录条数
     */
    offset?: number;
    /**
     * 当前页
     */
    page?: number;
};

export type SearchTipParams = SearchParamsBase & {
    /**
     * 查询关键词
     */
    keywords: string;
    /**
     * 坐标
     * 在此location附近优先返回搜索关键词信息
     */
    location: [number, number];
    /**
     * POI分类
     * 服务可支持传入多个分类，多个类型剑用“|”分隔
     * 可选值：POI分类名称、分类代码
     * 此处强烈建议使用分类代码，否则可能会得到不符合预期的结果
     */
    type?: string;
    /**
     * 搜索城市
     * 可选值：citycode、adcode，不支持县级市。
     */
    city?: string;
    /**
     * 仅返回指定城市数据
     */
    citylimit?: boolean;
};

/**
 * 地址编码请求参数
 */
export type SearchAddrGeoParams = SearchParamsBase & {
    /**
     * 结构化地址信息，如北京市朝阳区阜通东大街6号
     */
    address: string;
    /**
     * 城市
     */
    city?: string;
};

export type SearchAddRegeoParams = SearchParamsBase & {
    location: Position;
    /**
     * 返回附近POI类型
     * 多个使用"|"分割
     */
    poitype?: string;
    /**
     * 搜索半径，默认1000米
     */
    radius?: number;
    /**
     * 当roadlevel=0时，显示所有道路
     * 当roadlevel=1时，过滤非主干道路，仅输出主干道路数据
     */
    roadlevel?: number;
};

export type DistrictParams = SearchParamsBase & {
    /**
     * 查询关键字
     * 只支持单个关键词语搜索关键词支持：行政区名称、citycode、adcode
     * 如果为空，默认返回中国区域
     */
    keywords?: string;
    /**
     * 设置显示下级行政区级数
     * 可选值：0、1、2、3等数字，并以此类推
     * 0：不返回下级行政区；
     * 1：返回下一级行政区；
     * 2：返回下两级行政区；
     * 3：返回下三级行政区
     *
     * @defaulValue 1
     */
    subdistrict: number;

    /**
     * 此项控制行政区信息中返回行政区边界坐标点； 可选值：base、all;
     * base:不返回行政区边界坐标点；
     * all:只返回当前查询district的边界值，不返回子节点的边界值；
     */
    extensions?: 'base' | 'all';
};

export type IPParams = SearchParamsBase & {
    /**
     * 需要搜索的IP地址
     */
    ip: string;
};

export type WeatherParams = SearchParamsBase & {
    /**
     * 城市编码
     * 输入城市的adcode
     */
    city: string;
    /**
     * 气象类型
     * 可选值：base/all
     * base:返回实况天气
     * all:返回预报天气
     */
    extensions: string;
};

export type ResResult<T> = {
    code: number;
    data?: T;
    message?: any;
};

export type POIObject = {
    distance?: number;
    pcode: string;
    /**
     * POI类型
     * @example
     * 汽车服务;充电站;充电站
     */
    type: string;
    photos: { title: string[]; url: string }[];
    typecode: string;
    citycode: string;
    adname: string;
    /**
     * @example
     * '万城万充汽车充电站(环球创意广场)'
     */
    alias: string;
    tel: string;
    /**
     * 地址
     * @example
     * 阜荣街10号首开广场地下二层停车场
     */
    address: string;
    adcode: string;
    pname: string;
    cityname: string;
    /**
     * POI名称
     * @example
     * 万城万充汽车充电站(环球创意广场充电站)
     */
    name: string;
    /**
     * 坐标
     */
    location: Position;
};

export type TipObject = Pick<POIObject, 'name' | 'adcode' | 'address' | 'location'> & {
    district: string;
    id: string;
};

export type AddressObject = {
    /**
     * 省份
     */
    province: string;
    /**
     * 城市
     */
    city: string;
    /**
     * 城市编码
     */
    citycode: string;
    /**
     * 行政区
     */
    district: string;
    /**
     * 区域编码
     */
    adcode: string;
    /**
     * 国家
     */
    country?: string;
};

export type AddressGeoObject = AddressObject & {
    /*
     * 街道
     */
    street: string;
    /**
     * 门牌号
     */
    number: string;
    location: Position;
};

export type AddressRegeoObject = {
    addressComponent: AddressObject & {
        /**
         * 坐标点所在乡镇/街道（此街道为社区街道，不是道路信息）
         */
        township?: string;
        /**
         * 乡镇街道编码
         */
        towncode?: string;
        /**
         * 社区信息列表
         */
        neighborhood?: {
            /**
             * 社区名称
             */
            name: string;
            /**
             * POI类型
             */
            type: string;
        };
        /**
         * 楼信息列表
         */
        building: {
            /**
             * 建筑信息
             */
            name: string;
            /**
             * POI类型
             */
            type: string;
        };
        /**
         * 门牌号信息
         */
        streetNumber: {
            /**
             * 街道名称
             */
            street: string;
            /**
             * 门牌号
             */
            number: string;
            location: Position;
            /**
             * 坐标点所处街道方位
             */
            direction: number;
            /**
             * 门牌号到请求地点距离
             */
            distance?: number;
        };
        /**
         * 所属商圈
         */
        businessAreas: {
            /**
             * 商圈信息
             */
            businessArea: string;
            location: Position;
            /**
             * 商圈名称
             */
            name: string;
            /**
             * 商圈所属adcode
             */
            id: string;
        }[];
    };
    pois: {
        name: string;
        /**
         * poi类型
         */
        type: string;
        /**
         * 电话
         */
        tel: string;
        /**
         * 方向
         */
        direction: string;
        /**
         * 距离搜索点距离
         */
        distance: number;
        /**
         * 坐标
         */
        location: Position;
        /**
         * 地址
         */
        address: string;
        /**
         * 所属商圈
         */
        businessarea: '望京';
    }[];
};

export type DistrictObject = {
    /**
     * 行政区编码
     */
    adcode: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 边界坐标，例如120.823872,40.530257;120.822751,40.530688，坐标使用";"分割
     */
    polyline?: Position[];
    /**
     * 中心坐标
     */
    center: Position;
    /**
     * 行政区等级
     * country:国家
     * province:省份（直辖市会在province显示）
     * city:市（直辖市会在province显示）
     * district:区县
     * street:街道
     */
    level?: string;
    districts: DistrictObject[];
};

export type IPObject = {
    province: string;
    city: string;
    adcode: string;
    /**
     * 所在城市矩形区域范围
     */
    rectangle: [Position, Position];
};

export type RealWeatherObject = {
    province: string;
    city: string;
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
};

export type ForecastWheatherObject = {
    city: string;
    adcode: string;
    province: string;
    reporttime: string;
    casts: ForecastWheatherItem[];
};

export type ForecastWheatherItem = {
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

export interface SearchNearData {
    count: number;
    pois: POIObject[];
}

export interface POIRequest {
    /**
     * 周边搜索
     * @param {SearchNearParams} params
     */
    searchNear(params: SearchNearParams): Promise<ResResult<SearchNearData>>;

    seachTip(params: SearchTipParams): Promise<ResResult<TipObject>>;
}

export interface GeoCodeRequest {
    /**
     * 地理位置编码
     * @param { SearchAddrGeoParams } params
     */
    ecodeAddress(params: SearchAddrGeoParams): Promise<
        ResResult<{
            /** 返回数量 */
            count: number;
            geocodes: AddressGeoObject[];
        }>
    >;
    /**
     * 逆地址编码
     * @param {SearchAddRegeoParams} params
     */
    decodeAddress(params: SearchAddRegeoParams): Promise<ResResult<{ regeocode: AddressRegeoObject[] }>>;
}

export interface DistrictRequest {
    district(params: DistrictParams): Promise<ResResult<{ districts: DistrictObject[] }>>;
}

export interface IPRequest {
    locateIP(params: IPParams): Promise<ResResult<IPObject>>;
}

export interface WeatherReuqest {
    weather(params: WeatherParams): Promise<
        ResResult<{
            lives: RealWeatherObject[];
            forecast: ForecastWheatherObject[];
        }>
    >;
}
