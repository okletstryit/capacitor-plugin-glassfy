import { WebPlugin } from '@capacitor/core';
export class GlassfyWeb extends WebPlugin {
    async sdkVersion() {
        throw this.unimplemented('Not supported on web.');
    }
    async initialize(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async setLogLevel(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async offerings() {
        throw this.unimplemented('Not supported on web.');
    }
    async purchaseHistory() {
        throw this.unimplemented('Not supported on web.');
    }
    async permissions() {
        throw this.unimplemented('Not supported on web.');
    }
    async skuWithId(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async skuWithIdAndStore(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    connectCustomSubscriber(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    connectPaddleLicenseKey(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    connectGlassfyUniversalCode(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    setEmailUserProperty(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async setDeviceToken(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async setExtraUserProperty(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async getUserProperty() {
        throw this.unimplemented('Not supported on web.');
    }
    async purchaseSku(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async restorePurchases() {
        throw this.unimplemented('Not supported on web.');
    }
    async storeInfo() {
        throw this.unimplemented('Not supported on web.');
    }
    async setAttribution(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async setAttributions(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async _paywall(options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    }
    async _closePaywall() {
        throw this.unimplemented('Not supported on web.');
    }
    async _openUrl() {
        throw this.unimplemented('Not supported on web.');
    }
}
//# sourceMappingURL=web.js.map