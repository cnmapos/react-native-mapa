export const searchMaxRadius = 50000;
export type Position = [number, number];

export type Country = {
    /**
     * 国家
     */
    country: string;
};

export type Province = {
    province: string;
};

export type City = {
    /**
     * 城市名称
     */
    city: string;
    /**
     * 城市编码
     */
    citycode: string;
};

export type District = {
    /**
     * 区域编码
     */
    adcode: string;
    /**
     * 地址所在的区
     * 例如：朝阳区
     */
    district: string;
};

export type Address = {
    /**
     * 结构化地址信息，如北京市朝阳区阜通东大街6号
     */
    address: string;
};

export type ParamsBase = {
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

export type ResBaseInfo = {
    /**
     * 1：成功；0：失败
     */
    status: 0 | 1;
    /**
     * 返回状态信息
     */
    info: string;
    /**
     * 返回状态编码
     * 状态编码列表：https://lbs.amap.com/api/webservice/guide/tools/info
     */
    infocode: string;
};

export type Page = {
    /**
     * 需要第几页数据
     * 最外层的districts最多会返回20个数据，若超过限制，请用page请求下一页数据。
     * 例如page=2；page=3。默认page=1
     */
    page: number;
    /**
     * 最外层返回数据个数
     */
    offset: number;
};

export type ResResult<T> = T & ResBaseInfo;
