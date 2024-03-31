import { District, Page, ParamsBase, Position, ResResult } from './base';

/**
 * 行政区请求参数
 */
export type DistrictParams = ParamsBase &
    Page & {
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
        subdistrict?: number;

        /**
         * 此项控制行政区信息中返回行政区边界坐标点； 可选值：base、all;
         * base:不返回行政区边界坐标点；
         * all:只返回当前查询district的边界值，不返回子节点的边界值；
         */
        extensions?: 'base' | 'all';
        /**
         * 根据区划过滤按照指定行政区划进行过滤，填入后则只返回该省/直辖市信息
         * 需填入adcode，为了保证数据的正确，强烈建议填入此参数
         */
        filter?: string;
    };
export type Suggestion = {
    /**
     * 建议关键字列表
     */
    keywords: string[];
    /**
     *
     */
    cites: string[];
};

export type DistrictObject = Pick<District, 'adcode'> & {
    /**
     * 名称
     */
    name: string;
    /**
     * 边界坐标，例如120.823872,40.530257;120.822751,40.530688，坐标使用";"分割
     */
    polyline?: Position[][];
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

export interface DistrictRequest {
    district(params: DistrictParams): Promise<ResResult<{ suggestion: Suggestion; districts: DistrictObject[] }>>;
}
