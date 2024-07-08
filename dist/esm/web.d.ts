import { WebPlugin } from '@capacitor/core';
import type { GlassfyPlugin, GlassfyVersion, GlassfyOfferings, GlassfySku, GlassfyPermissions, GLASSFY_ATTRIBUTION, GlassfyAttributionItem, GLASSFY_LOGLEVEL, GlassfyTransaction, GlassfySkuBase, GLASSFY_STORE, GlassfyUserProperties, GlassfyPurchasesHistory, GLASSFY_REPLACEMENT_MODE, GlassfyStoresInfo } from './definitions';
export declare class GlassfyWeb extends WebPlugin implements GlassfyPlugin {
    sdkVersion(): Promise<GlassfyVersion>;
    initialize(options: {
        apiKey: string;
        watcherMode: boolean;
    }): Promise<void>;
    setLogLevel(options: {
        logLevel: GLASSFY_LOGLEVEL;
    }): Promise<void>;
    offerings(): Promise<GlassfyOfferings>;
    purchaseHistory(): Promise<GlassfyPurchasesHistory>;
    permissions(): Promise<GlassfyPermissions>;
    skuWithId(options: {
        identifier: string;
    }): Promise<GlassfySku>;
    skuWithIdAndStore(options: {
        identifier: string;
        store: GLASSFY_STORE;
    }): Promise<GlassfySkuBase>;
    connectCustomSubscriber(options: {
        subscriberId: string;
    }): Promise<void>;
    connectPaddleLicenseKey(options: {
        licenseKey: string;
        force: boolean;
    }): Promise<void>;
    connectGlassfyUniversalCode(options: {
        universalCode: string;
        force: boolean;
    }): Promise<void>;
    setEmailUserProperty(options: {
        email: string;
    }): Promise<void>;
    setDeviceToken(options: {
        token: string;
    }): Promise<void>;
    setExtraUserProperty(options: {
        extra: {
            [key: string]: any;
        };
    }): Promise<void>;
    getUserProperty(): Promise<GlassfyUserProperties>;
    purchaseSku(options: {
        sku: GlassfySku;
        skuToUpgrade?: GlassfySku;
        replacementMode?: GLASSFY_REPLACEMENT_MODE;
    }): Promise<GlassfyTransaction>;
    restorePurchases(): Promise<GlassfyPermissions>;
    storeInfo(): Promise<GlassfyStoresInfo>;
    setAttribution(options: {
        type: GLASSFY_ATTRIBUTION;
        value: string;
    }): Promise<void>;
    setAttributions(options: {
        items: GlassfyAttributionItem[];
    }): Promise<void>;
    _paywall(options: {
        remoteConfig: string;
        awaitLoading: boolean;
    }): Promise<void>;
    _closePaywall(): Promise<void>;
    _openUrl(): Promise<void>;
}
