type Options = {
    key: string;
    serverHost?: string;
};
const serverhost = 'https://restapi.amap.com/v3';

export class RequestBase {
    protected key: string;
    protected serverHost: string;

    constructor(options: Options) {
        if (!options.key) {
            throw new Error("options.key can't be undefined or null");
        }
        this.serverHost = options.serverHost || serverhost;
        this.key = options.key;
    }
}
