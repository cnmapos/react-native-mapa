import { Address, City, Country, District, ParamsBase, PartialPick, Position, Province, ResResult } from './base';

/**
 * 地址编码请求参数
 */
export type GeoParams = ParamsBase & Pick<Address, 'address'> & PartialPick<City, 'city'>;
/**
 * 逆地理编码请求参数
 */
export type RegeoParams = ParamsBase & {
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
    /**
     * 返回结果控制
     * extensions 参数默认取值是 base，也就是返回基本地址信息；
     * extensions 参数取值为 all 时会返回基本地址信息、附近 POI 内容、道路信息以及道路交叉口信息。
     *
     * @defaultValue base
     */
    extensions?: string;
    /**
     * 是否优化POI返回顺序
     * 以下内容需要 extensions 参数为 all 时才生效。
     * omeorcorp 参数的设置可以影响召回 POI 内容的排序策略，目前提供三个可选参数：
     * 0：不对召回的排序策略进行干扰。
     * 1：综合大数据分析将居家相关的 POI 内容优先返回，即优化返回结果中 pois 字段的poi顺序。
     * 2：综合大数据分析将公司相关的 POI 内容优先返回，即优化返回结果中 pois 字段的poi顺序。
     *
     * @defaultValue 0
     */
    homeorcorp?: number;
};

/**
 * 地址编码信息
 */
export type AddressGeoObject = {
    /*
     * 街道
     */
    street: string;
    /**
     * 门牌号
     */
    number: string;
    location: Position;
    /**
     * 匹配级别
     * 页面最底部列表:https://lbs.amap.com/api/webservice/guide/api/georegeo
     */
    level: string;
} & Pick<Country, 'country'> &
    Pick<Province, 'province'> &
    City &
    District;

export type AddressRegeoObject = {
    addressComponent: Country &
        Province &
        City &
        District & {
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
                distance: number;
            };
            /**
             * 所属商圈
             */
            businessAreas: {
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
        businessarea: string;
    }[];
};
/**
 * 地理编码/逆地理编码接口
 */
export interface GeoCodeRequest {
    /**
     * 地理位置编码
     * @param { SearchAddrGeoParams } params
     */
    ecodeAddress(params: GeoParams): Promise<
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
    decodeAddress(params: RegeoParams): Promise<ResResult<{ regeocode: AddressRegeoObject }>>;
}
