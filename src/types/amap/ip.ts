import { City, District, ParamsBase, Position, Province, ResResult } from './base';

/**
 * IP定位参数
 */
export type IPParams = ParamsBase & {
    /**
     * 需要搜索的IP地址
     */
    ip: string;
};

/**
 * IP定位信息
 */
export type IPObject = Pick<Province, 'province'> &
    Pick<City, 'city'> &
    Pick<District, 'adcode'> & {
        /**
         * 所在城市矩形区域范围
         */
        rectangle: [Position, Position];
    };

/**
 * IP定位信息接口
 */
export interface IPRequest {
    locateIP(params: IPParams): Promise<ResResult<IPObject>>;
}
