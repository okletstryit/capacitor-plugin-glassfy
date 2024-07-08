'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

exports.GLASSFY_ELEGIBILITY = void 0;
(function (GLASSFY_ELEGIBILITY) {
    GLASSFY_ELEGIBILITY[GLASSFY_ELEGIBILITY["ELEGIBLE"] = 1] = "ELEGIBLE";
    GLASSFY_ELEGIBILITY[GLASSFY_ELEGIBILITY["NON_ELEGIBLE"] = -1] = "NON_ELEGIBLE";
    GLASSFY_ELEGIBILITY[GLASSFY_ELEGIBILITY["UNKNOWN"] = 0] = "UNKNOWN";
})(exports.GLASSFY_ELEGIBILITY || (exports.GLASSFY_ELEGIBILITY = {}));
exports.GLASSFY_EVENT_TYPE = void 0;
(function (GLASSFY_EVENT_TYPE) {
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["InitialBuy"] = 5001] = "InitialBuy";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["Restarted"] = 5002] = "Restarted";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["Renewed"] = 5003] = "Renewed";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["Expired"] = 5004] = "Expired";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["DidChangeRenewalStatus"] = 5005] = "DidChangeRenewalStatus";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["IsInBillingRetryPeriod"] = 5006] = "IsInBillingRetryPeriod";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["ProductChange"] = 5007] = "ProductChange";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["InAppPurchase"] = 5008] = "InAppPurchase";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["Refund"] = 5009] = "Refund";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["Paused"] = 5010] = "Paused";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["Resumed"] = 5011] = "Resumed";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["ConnectLicense"] = 5012] = "ConnectLicense";
    GLASSFY_EVENT_TYPE[GLASSFY_EVENT_TYPE["DisconnectLicense"] = 5013] = "DisconnectLicense";
})(exports.GLASSFY_EVENT_TYPE || (exports.GLASSFY_EVENT_TYPE = {}));
exports.GLASSFY_STORE = void 0;
(function (GLASSFY_STORE) {
    GLASSFY_STORE[GLASSFY_STORE["AppStore"] = 1] = "AppStore";
    GLASSFY_STORE[GLASSFY_STORE["PlayStore"] = 2] = "PlayStore";
    GLASSFY_STORE[GLASSFY_STORE["Paddle"] = 3] = "Paddle";
    GLASSFY_STORE[GLASSFY_STORE["Stripe"] = 4] = "Stripe";
    GLASSFY_STORE[GLASSFY_STORE["Glassfy"] = 5] = "Glassfy";
})(exports.GLASSFY_STORE || (exports.GLASSFY_STORE = {}));
exports.GLASSFY_LOGLEVEL = void 0;
(function (GLASSFY_LOGLEVEL) {
    GLASSFY_LOGLEVEL[GLASSFY_LOGLEVEL["OFF"] = 0] = "OFF";
    GLASSFY_LOGLEVEL[GLASSFY_LOGLEVEL["ERROR"] = 1] = "ERROR";
    GLASSFY_LOGLEVEL[GLASSFY_LOGLEVEL["DEBUG"] = 2] = "DEBUG";
    GLASSFY_LOGLEVEL[GLASSFY_LOGLEVEL["INFO"] = 3] = "INFO";
    GLASSFY_LOGLEVEL[GLASSFY_LOGLEVEL["ALL"] = 3] = "ALL";
})(exports.GLASSFY_LOGLEVEL || (exports.GLASSFY_LOGLEVEL = {}));
exports.GLASSFY_ATTRIBUTION = void 0;
(function (GLASSFY_ATTRIBUTION) {
    GLASSFY_ATTRIBUTION[GLASSFY_ATTRIBUTION["AdjustID"] = 1] = "AdjustID";
    GLASSFY_ATTRIBUTION[GLASSFY_ATTRIBUTION["AppsFlyerID"] = 2] = "AppsFlyerID";
    GLASSFY_ATTRIBUTION[GLASSFY_ATTRIBUTION["IP"] = 3] = "IP";
    GLASSFY_ATTRIBUTION[GLASSFY_ATTRIBUTION["IDFA"] = 4] = "IDFA";
    GLASSFY_ATTRIBUTION[GLASSFY_ATTRIBUTION["IDFV"] = 5] = "IDFV";
    GLASSFY_ATTRIBUTION[GLASSFY_ATTRIBUTION["GAID"] = 6] = "GAID";
    GLASSFY_ATTRIBUTION[GLASSFY_ATTRIBUTION["ASID"] = 7] = "ASID";
    GLASSFY_ATTRIBUTION[GLASSFY_ATTRIBUTION["AID"] = 8] = "AID";
})(exports.GLASSFY_ATTRIBUTION || (exports.GLASSFY_ATTRIBUTION = {}));
exports.GLASSFY_REPLACEMENT_MODE = void 0;
(function (GLASSFY_REPLACEMENT_MODE) {
    GLASSFY_REPLACEMENT_MODE[GLASSFY_REPLACEMENT_MODE["UNKNOWN_REPLACEMENT_MODE"] = 0] = "UNKNOWN_REPLACEMENT_MODE";
    GLASSFY_REPLACEMENT_MODE[GLASSFY_REPLACEMENT_MODE["WITH_TIME_PRORATION"] = 1] = "WITH_TIME_PRORATION";
    GLASSFY_REPLACEMENT_MODE[GLASSFY_REPLACEMENT_MODE["CHARGE_PRORATED_PRICE"] = 2] = "CHARGE_PRORATED_PRICE";
    GLASSFY_REPLACEMENT_MODE[GLASSFY_REPLACEMENT_MODE["WITHOUT_PRORATION"] = 3] = "WITHOUT_PRORATION";
    GLASSFY_REPLACEMENT_MODE[GLASSFY_REPLACEMENT_MODE["CHARGE_FULL_PRICE"] = 5] = "CHARGE_FULL_PRICE";
    GLASSFY_REPLACEMENT_MODE[GLASSFY_REPLACEMENT_MODE["DEFERRED"] = 6] = "DEFERRED";
})(exports.GLASSFY_REPLACEMENT_MODE || (exports.GLASSFY_REPLACEMENT_MODE = {}));
exports.GLASSFY_ENTITLEMENT = void 0;
(function (GLASSFY_ENTITLEMENT) {
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["NEVERBUY"] = -9] = "NEVERBUY";
    // The customer received a refund for the subscription.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["OTHERREFUND"] = -8] = "OTHERREFUND";
    // The customer received a refund due to a perceived issue with the app.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["ISSUEREFUND"] = -7] = "ISSUEREFUND";
    // The system canceled the subscription because the customer upgraded.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["UPGRADED"] = -6] = "UPGRADED";
    // The customer intentionally cancelled the subscription.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["EXPIREDVOLUNTARY"] = -5] = "EXPIREDVOLUNTARY";
    // The product is no longer available.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["PRODUCTNOTAVAILABLE"] = -4] = "PRODUCTNOTAVAILABLE";
    // The customer did not accept the price increase.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["FAILTOACCEPTINCREASE"] = -3] = "FAILTOACCEPTINCREASE";
    // The receipt is fully expired due to a billing issue.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["EXPIREDFROMBILLING"] = -2] = "EXPIREDFROMBILLING";
    // The receipt is expired but the subscription is still in a billing-retry state.
    // If grace period is enabled this state excludes subscriptions in grace period.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["INRETRY"] = -1] = "INRETRY";
    // The receipt is out of date or there is another purchase issue.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["MISSINGINFO"] = 0] = "MISSINGINFO";
    // The subscription expired but is in grace period.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["EXPIREDINGRACE"] = 1] = "EXPIREDINGRACE";
    // The subscription is an off-platform subscription.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["OFFPLATFORM"] = 2] = "OFFPLATFORM";
    // The subscription is a non-renewing subscription.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["NONRENEWING"] = 3] = "NONRENEWING";
    // The subscription is active and auto-renew is off.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["AUTORENEWOFF"] = 4] = "AUTORENEWOFF";
    // The subscription is active and auto-renew is on.
    GLASSFY_ENTITLEMENT[GLASSFY_ENTITLEMENT["AUTORENEWON"] = 5] = "AUTORENEWON";
})(exports.GLASSFY_ENTITLEMENT || (exports.GLASSFY_ENTITLEMENT = {}));

/* eslint-disable @typescript-eslint/consistent-type-imports */
const Glassfy = core.registerPlugin('Glassfy', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.GlassfyWeb()),
});
const paywallEvent = 'paywallEvent';
class GlassfyPaywall {
    static async showPaywall(options) {
        var _a;
        GlassfyPaywall.removeAllListeners();
        GlassfyPaywall.setupListener((_a = options.listener) !== null && _a !== void 0 ? _a : {});
        await Glassfy._paywall({
            remoteConfig: options.remoteConfig,
            awaitLoading: options.awaitLoading,
        });
    }
    static async removeAllListeners() {
        var _a;
        (_a = GlassfyPaywall.currentListener) === null || _a === void 0 ? void 0 : _a.remove();
    }
    static async setupListener(listener) {
        const handler = async (event) => {
            const eventName = event.event;
            const close = (transaction, error) => {
                if (listener.onClose != null) {
                    listener.onClose(transaction, error);
                }
                GlassfyPaywall.close();
            };
            switch (eventName) {
                case 'onClose':
                    close(event.transaction, event.error);
                    break;
                case 'onLink':
                    if (listener.onLink) {
                        listener.onLink(event.url);
                    }
                    else {
                        await Glassfy._openUrl({ url: event.url });
                    }
                    break;
                case 'onRestore':
                    if (listener.onRestore) {
                        listener.onRestore();
                    }
                    else {
                        try {
                            await Glassfy.restorePurchases();
                            close(null, null);
                        }
                        catch (error) {
                            close(null, error);
                        }
                    }
                    break;
                case 'onPurchase':
                    if (listener.onPurchase) {
                        listener.onPurchase(event.sku);
                    }
                    else {
                        try {
                            const transaction = await Glassfy.purchaseSku({ sku: event.sku });
                            close(transaction, null);
                        }
                        catch (error) {
                            close(null, error);
                        }
                        GlassfyPaywall.removeAllListeners();
                        GlassfyPaywall.close();
                    }
                    break;
            }
        };
        GlassfyPaywall.currentListener = Glassfy.addListener(paywallEvent, handler);
    }
    static async close() {
        Glassfy.removeAllListeners(paywallEvent);
        await Glassfy._closePaywall();
    }
}
GlassfyPaywall.currentListener = null;

class GlassfyWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GlassfyWeb: GlassfyWeb
});

exports.Glassfy = Glassfy;
exports.GlassfyPaywall = GlassfyPaywall;
//# sourceMappingURL=plugin.cjs.js.map
