import { Position } from '..';
import { District, ParamsBase, ResResult } from './base';

export type EventParams = Pick<District, 'adcode'> & {
    /**
     * 请求服务权限标识
     * 用户在高德开放平台官网申请Web服务API类型KEY
     */
    clientKey: string;
    /**
     * 时间戳
     * 秒时间，例如1621243952 单位秒
     */
    timestamp: number;
    /**
     * 鉴权动态密钥
     */
    digest: string;
    /**
     * 事件类型
     */
    eventType: string[];
    /**
     * 只获取高速
     * 仅获取高速类事件。1-是   0-否
     */
    isExpressway: number;
};

export type EventObject = {
    location: Position;
    /**
     * 事件标题
     */
    brief: string;
    /**
     * 事件预计结束时间
     */
    endTime: string;
    /**
     * 事件描述
     */
    eventDesc: string;
    /**
     * 事件id
     */
    eventID: string;
    /**
     * 事件类型码
     */
    eventType: string;
    /**
     * 是否高速
     * 1-是
     * 0-否
     */
    expressway: number;
    /**
     * 线路坐标
     */
    lines: Position[];
    /**
     * 发布方名称
     */
    nickName: string;
    /**
     * 是否权威发布,0-官方,1-权威,2-UGC
     */
    offcial: number;
    /**
     * 事件图片链接
     */
    picture: string;
    /**
     * 道路名称
     */
    roadName: string;
    /**
     * 数据源编号
     */
    source: string;
    /**
     * 事件开始时间
     */
    startTime: string;
    /**
     * 事件最后更新时间
     */
    updateTime: string;
};

export type EventData = {
    data: EventObject[];
};

/**
 * 地图实时事件查询，如需申请请通过工单进行商务咨询
 */
export interface EventRequest {
    search(params: EventParams): Promise<ResResult<EventData>>;
}
