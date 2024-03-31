import { Position, ParamsBase, ResResult, Page, City, District, Address, PartialPick } from './base';

export type KeyParams = ParamsBase &
    Page & {
        /**
         * 搜索关键字
         */
        keywords: string;
        /**
         * 查询POI类型
         * POI类型列表：https://lbs.amap.com/api/webservice/download
         */
        types: string[];
        /**
         * 查询城市
         * 可选值：城市中文、citycode、adcode
         * 如：北京/010/110000
         * 填入此参数后，会尽量优先返回此城市数据，但是不一定仅局限此城市结果，若仅需要某个城市数据请调用citylimit参数。
         * 如在深圳市搜天安门，返回北京天安门结果。
         */
        city?: string;
        /**
         * 仅返回指定城市数据
         * @defaultValue false
         */
        citylimit?: boolean;
        /**
         * 是否按照层级展示子POI数据
         * 可选值：children=1
         * 当为0的时候，子POI都会显示。
         * 当为1的时候，子POI会归类到父POI之中。
         * 在extensions=all 或者为空时生效
         */
        children?: number;
        /**
         * 返回结果控制
         * 此项默认返回基本地址信息；取值为all返回地址信息、附近POI、道路以及道路交叉口信息。
         */
        extensions?: string;
    };

/**
 * 周边搜索参数
 */
export type NearParams = ParamsBase &
    PartialPick<Page, 'offset' | 'page'> & {
        /**
         * 查询中心坐标
         */
        location: Position;
        /**
         * 搜索关键字
         */
        keywords: string;
        /**
         * 查询半径
         * 取值范围:0-50000。规则：大于50000按默认值，单位：米
         */
        radius?: number;
        /**
         * 查询POI类型
         * 当keywords和types均为空的时候，默认指定types为050000（餐饮服务）、070000（生活服务）、120000（商务住宅）
         * 详细查看POI分类编码: https://lbs.amap.com/api/webservice/download
         */
        types?: string[];
        /**
         * 查询城市
         * 可选值：城市中文、中文全拼、citycode、adcode
         * 如：北京/beijing/010/110000
         * 当用户指定的经纬度和city出现冲突，若范围内有用户指定city的数据，则返回相关数据，否则返回为空。
         * 如：经纬度指定石家庄，而city却指定天津，若搜索范围内有天津的数据则返回相关数据，否则返回为空。
         */
        city?: string;
        /**
         * 规定返回结果的排序规则。
         * 按距离排序：distance；综合排序：weight
         *
         * @defaultValue distance
         */
        sortrule?: string;
        /**
         * 返回结果控制
         * 此项默认返回基本地址信息；取值为all返回地址信息、附近POI、道路以及道路交叉口信息。
         */
        extensions?: string;
    };

/**
 * 多边形范围POI查询参数
 */
export type PolygonParams = ParamsBase &
    Page &
    Pick<KeyParams, 'keywords' | 'types' | 'extensions'> & {
        /**
         * 经纬度坐标对
         * 经纬度小数点后不得超过6位。
         * 多边形为矩形时，可传入左上右下两顶点坐标对
         */
        polygon: Position[];
    };

/**
 * 按ID查询POI参数
 */
export type IDParams = ParamsBase & {
    /**
     * AOI唯一标识
     * 最多可以传入1个id，传入目标区域的poiid即可
     */
    id: string;
};

/**
 * POI属性
 */
export type POIObject = Pick<Address, 'address'> &
    Pick<District, 'adcode'> & {
        /**
         * POI唯一标识
         */
        id: string;
        /**
         * 父POI的ID
         * 当前POI如果有父POI，则返回父POI的ID。可能为空
         */
        parent: string;
        distance?: number;
        /**
         * POI所在省份编码
         * extensions=all时返回
         */
        pcode: string;
        /**
         * POI类型
         * @example
         * 汽车服务;充电站;充电站
         */
        type: string;
        photos: { title: string[]; url: string }[];
        /**
         * 兴趣点类型编码
         */
        typecode: string;
        /**
         * 城市编码
         * extensions=all时返回
         */
        citycode: string;
        /**
         * 区域名称
         * 区县级别的返回，例如朝阳区
         */
        adname: string;
        /**
         * @example
         * '万城万充汽车充电站(环球创意广场)'
         */
        alias: string;
        tel: string;
        /**
         * POI所在省份名称
         * 若是直辖市的时候，此处直接显示市名，例如北京市
         */
        pname: string;
        /**
         * 城市名
         * 若是直辖市的时候，此处直接显示市名，例如北京市
         */
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
        /**
         * 行业类型
         */
        biz_type: string[];
        /**
         * 邮编
         * extensions=all时返回
         */
        postcode: string;

        /**
         * POI的网址
         * extensions=all时返回
         */
        website: string;
        /**
         * extensions=all时返回
         */
        email: string;
        /**
         * POI的入口经纬度
         * extensions=all时返回，也可用作于POI的到达点；
         */
        entrLocation: Position;
        /**
         * POI的出口经纬度
         * 目前不会返回内容；
         */
        exitLocation: Position;
        /**
         * POI导航id
         * extensions=all时返回
         */
        naviPoiid: string;
        /**
         * 地理格ID
         * extensions=all时返回
         */
        gridcode: string;
        /**
         * 停车场类型
         * 仅在停车场类型POI的时候显示该字段
         * 展示停车场类型，包括：地下、地面、路边
         * extensions=all的时候显示
         */
        parkingType: string;
        /**
         * 该POI的特色内容
         *  主要出现在美食类POI中，代表特色菜
         * 例如“烤鱼,麻辣香锅,老干妈回锅肉”
         * extensions=all时返回
         */
        tag: string;
        /**
         * 是否有室内地图标志
         * 1，表示有室内相关数据
         * 0，代表没有室内相关数据
         * extensions=all时返回
         */
        indoorMap: number;
        /**
         * 室内地图相关数据
         * 当indoor_map=0时，字段为空
         * extensions=all时返回
         */
        indoorData: {
            /**
             * 当前POI的父级POI
             * 如果当前POI为建筑物类POI，则cpid为自身POI ID；如果当前POI为商铺类POI，则cpid为其所在建筑物的POI ID
             */
            cpid: string;
            /**
             * 楼层索引
             * 般会用数字表示，例如8
             */
            floor: number;
            /**
             * 所在楼层
             * 一般会带有字母，例如F8
             */
            truefloor: string;
            /**
             * 所属商圈
             *  extensions=all时返回
             */
            businessArea: string;
            /**
             * 深度信息
             *  extensions=all时返回
             */
            bizExt: {
                /**
                 * 评分
                 * 仅存在于餐饮、酒店、景点、影院类POI之下
                 */
                rating: number;
                /**
                 * 人均消费
                 * 仅存在于餐饮、酒店、景点、影院类POI之下
                 */
                cost: number;
            }[];
        }[];
    };

/**
 * 周边POI信息
 */
export interface POIData {
    count: number;
    suggestion: {
        keywords: string[];
        cities: (Pick<City, 'citycode'> &
            Pick<District, 'adcode'> & {
                /**
                 * 名称
                 */
                name: string;
                /**
                 * 该城市包含此关键字的个数
                 */
                num: number;
            })[];
    };
    pois: POIObject[];
}

/**
 * POI搜索接口
 */
export interface POIRequest {
    /**
     * 关键词搜索
     * @param {KeyParams}  params
     */
    searchByKey(params: KeyParams): Promise<ResResult<POIData>>;
    /**
     * 周边搜索
     * @param {NearParams} params
     */
    searchByDistance(params: NearParams): Promise<ResResult<POIData>>;
    /**
     * 多边形搜索
     * @param {PolygonParams} params
     */
    searchByPolygon(params: PolygonParams): Promise<ResResult<POIData>>;
    searchByID(params: IDParams): Promise<ResResult<POIData>>;
}

export type AOIParams = ParamsBase & {
    /**
     * AOI唯一标识
     * 最多可以传入1个id，传入目标区域的poiid即可
     */
    id: string;
};

export type AOIObject = Pick<Address, 'address'> &
    Pick<City, 'citycode'> &
    Pick<District, 'adcode'> & {
        /**
         * aoi名称，同poi
         */
        name: string;
        id: string;
        location: Position;
        polyline: Position[][];
        /**
         * aoi所属分类
         */
        type: string;
        /**
         * aoi分类编码
         */
        typecode: string;
        /**
         * aoi所属省份
         */
        pname: string;
        /**
         * aoi所属省份编码
         */
        pcode: string;
        /**
         * aoi所属城市
         */
        cityname: string;
        /**
         * aoi所属区域
         */
        adname: string;
    };

export type AOIData = {
    aois: AOIObject[];
};

/**
 * AOI搜索接口
 * AOI是指具有面状、区域状特点的POI，包括但不限于工业园区、学校校区、商圈、住宅小区、景区、火车站、机场等类型的POI。
 */
export interface AOIRequest {
    search(params: AOIParams): Promise<ResResult<AOIData>>;
}
