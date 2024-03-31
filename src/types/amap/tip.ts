import { Address, District, ParamsBase, Position, ResResult } from './base';

export type SearchTipParams = ParamsBase & {
    /**
     * 查询关键词
     */
    keywords: string;
    /**
     * 坐标
     * 在此location附近优先返回搜索关键词信息
     */
    location: Position;
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
     * 如：010/110000
     * adcode信息可参考城市编码表获取。
     * 填入此参数后，会尽量优先返回此城市数据，但是不一定仅局限此城市结果，若仅需要某个城市数据请调用citylimit参数。
     * 如：在深圳市搜天安门，返回北京天安门结果。
     */
    city?: string;
    /**
     * 仅返回指定城市数据
     */
    citylimit?: boolean;
    /**
     * 返回的数据类型
     * 可选值：all-返回所有数据类型、poi-返回POI数据类型、bus-返回公交站点数据类型、busline-返回公交线路数据类型
     *
     * @defaultValue all
     */
    datatype?: string[];
};

export type TipObject = Pick<District, 'adcode'> &
    Pick<Address, 'address'> & {
        name: string;
        location: Position;
        district: string;
        id: string;
        /**
         * POI类型
         */
        typecode: string;
    };

export interface TipRequest {
    seachTip(params: SearchTipParams): Promise<
        ResResult<{
            count: number;
            tips: TipObject[];
        }>
    >;
}
