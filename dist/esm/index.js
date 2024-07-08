/* eslint-disable @typescript-eslint/consistent-type-imports */
import { registerPlugin } from '@capacitor/core';
const Glassfy = registerPlugin('Glassfy', {
    web: () => import('./web').then(m => new m.GlassfyWeb()),
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
                default:
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
export * from './definitions';
export { Glassfy, GlassfyPaywall };
//# sourceMappingURL=index.js.map