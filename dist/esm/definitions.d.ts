export declare enum GLASSFY_ELEGIBILITY {
    ELEGIBLE = 1,
    NON_ELEGIBLE = -1,
    UNKNOWN = 0
}
export declare enum GLASSFY_EVENT_TYPE {
    InitialBuy = 5001,
    Restarted = 5002,
    Renewed = 5003,
    Expired = 5004,
    DidChangeRenewalStatus = 5005,
    IsInBillingRetryPeriod = 5006,
    ProductChange = 5007,
    InAppPurchase = 5008,
    Refund = 5009,
    Paused = 5010,
    Resumed = 5011,
    ConnectLicense = 5012,
    DisconnectLicense = 5013
}
export declare enum GLASSFY_STORE {
    AppStore = 1,
    PlayStore = 2,
    Paddle = 3,
    Stripe = 4,
    Glassfy = 5
}
export declare enum GLASSFY_LOGLEVEL {
    OFF = 0,
    ERROR = 1,
    DEBUG = 2,
    INFO = 3,
    ALL = 3
}
export declare enum GLASSFY_ATTRIBUTION {
    AdjustID = 1,
    AppsFlyerID = 2,
    IP = 3,
    IDFA = 4,
    IDFV = 5,
    GAID = 6,
    ASID = 7,
    AID = 8
}
export declare enum GLASSFY_REPLACEMENT_MODE {
    UNKNOWN_REPLACEMENT_MODE = 0,
    WITH_TIME_PRORATION = 1,
    CHARGE_PRORATED_PRICE = 2,
    WITHOUT_PRORATION = 3,
    CHARGE_FULL_PRICE = 5,
    DEFERRED = 6
}
export declare enum GLASSFY_ENTITLEMENT {
    NEVERBUY = -9,
    OTHERREFUND = -8,
    ISSUEREFUND = -7,
    UPGRADED = -6,
    EXPIREDVOLUNTARY = -5,
    PRODUCTNOTAVAILABLE = -4,
    FAILTOACCEPTINCREASE = -3,
    EXPIREDFROMBILLING = -2,
    INRETRY = -1,
    MISSINGINFO = 0,
    EXPIREDINGRACE = 1,
    OFFPLATFORM = 2,
    NONRENEWING = 3,
    AUTORENEWOFF = 4,
    AUTORENEWON = 5
}
export interface GlassfyVersion {
    readonly version: string;
}
export interface GlassfyProductDiscount {
    readonly identifier: string;
    readonly price: number;
    readonly currencyCode: string;
    readonly period: string;
    readonly numberOfPeriods: number;
    readonly type: string;
}
export interface GlassfyProduct {
    readonly title: string;
    readonly identifier: string;
    readonly description: string;
    readonly price: number;
    readonly currencyCode: string;
    readonly period: string;
    readonly introductoryPrice: GlassfyProductDiscount;
    readonly discounts: GlassfyProductDiscount[];
    readonly basePlanId: string;
}
export interface GlassfySkuBase {
    readonly skuId: string;
    readonly productId: string;
    readonly store: GLASSFY_STORE;
}
export interface GlassfySku extends GlassfySkuBase {
    readonly introductoryEligibility: GLASSFY_ELEGIBILITY;
    readonly promotionalEligibility: GLASSFY_ELEGIBILITY;
    readonly extravars: {
        [key: string]: string;
    };
    readonly product: GlassfyProduct;
    readonly basePlanId: string;
    readonly offerId: string;
    readonly discount: GlassfyProductDiscount;
}
export interface GlassfySkuPaddle extends GlassfySkuBase {
    readonly name: string;
    readonly initialPrice: number;
    readonly initialPriceCode: string;
    readonly recurringPrice: number;
    readonly recurringPriceCode: string;
    readonly extravars: {
        [key: string]: string;
    };
}
export interface GlassfyAccountableSku extends GlassfySkuBase {
    readonly isInIntroOfferPeriod: boolean;
    readonly isInTrialPeriod: boolean;
    readonly basePlanId: string;
    readonly offerId: string;
}
export interface GlassfyOffering {
    readonly offeringId: string;
    readonly skus: GlassfySku[];
}
export interface GlassfyOfferings {
    readonly all: GlassfyOffering[];
}
export interface GlassfyPurchasesHistory {
    readonly all: GlassfyPurchaseHistory[];
}
export interface GlassfyPurchaseHistory {
    readonly productId: string;
    readonly skuId: string;
    readonly type: GLASSFY_EVENT_TYPE;
    readonly store: GLASSFY_STORE;
    readonly purchaseDate: string;
    readonly expireDate: string;
    readonly transactionId: string;
    readonly subscriberId: string;
    readonly currencyCode: string;
    readonly countryCode: string;
    readonly isInIntroOfferPeriod: boolean;
    readonly promotionalOfferId: string;
    readonly offerCodeRefName: string;
    readonly licenseCode: string;
    readonly webOrderLineItemId: string;
}
export interface GlassfyPermission {
    readonly permissionId: string;
    readonly entitlement: GLASSFY_ENTITLEMENT;
    readonly isValid: boolean;
    readonly expireDate: string;
    readonly accountableSkus: GlassfyAccountableSku[];
}
export interface GlassfyPermissions {
    readonly installationId: string;
    readonly subscriberId: string;
    readonly originalApplicationVersion: string;
    readonly originalApplicationDate: string;
    readonly all: GlassfyPermission[];
}
export interface GlassfyPaddleStoreInfo {
    readonly store: GLASSFY_STORE.Paddle;
    readonly extravars: {
        [key: string]: string;
    };
    readonly userid: string;
    readonly planId: string;
    readonly subscriptionId: string;
    readonly updateURL: string;
    readonly cancelURL: string;
}
export interface GlassfyStoreInfo {
    readonly store: Exclude<GLASSFY_STORE, GLASSFY_STORE.Paddle>;
    readonly extravars: {
        [key: string]: string;
    };
}
export interface GlassfyStoresInfo {
    readonly all: (GlassfyStoreInfo | GlassfyPaddleStoreInfo)[];
}
export interface GlassfyTransaction {
    readonly productId: string;
    readonly receiptValidated: boolean;
    readonly permissions: GlassfyPermissions;
}
export interface GlassfyUserProperties {
    readonly email: string;
    readonly token: boolean;
    readonly extra: GlassfyExtraProperty;
}
export interface GlassfyAttributionItem {
    readonly type: GLASSFY_ATTRIBUTION;
    readonly value: string;
}
export declare type GlassfyExtraProperty = {
    [key: string]: string;
};
export interface GlassfyPlugin {
    sdkVersion(): Promise<GlassfyVersion>;
    /**
     *  For more details, follow instruction at https://docs.glassfy.io/get-started/configuration
     */
    initialize(options: {
        apiKey: string;
        watcherMode: boolean;
    }): Promise<void>;
    setLogLevel(options: {
        logLevel: GLASSFY_LOGLEVEL;
    }): Promise<void>;
    /**
     *  For more details, check the documentation https://docs.glassfy.io/dashboard/configure-offerings
     */
    offerings(): Promise<GlassfyOfferings>;
    /**
     * For more details, check the documentation https://docs.glassfy.io/dashboard/configure-offerings
     */
    purchaseHistory(): Promise<GlassfyPurchasesHistory>;
    /**
     * For more details, check the documentation https://docs.glassfy.io/dashboard/configure-permissions.html
     */
    permissions(): Promise<GlassfyPermissions>;
    /**
     * For more details, check the documentation https://docs.glassfy.io/dashboard/configure-products
     */
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
        extra: GlassfyExtraProperty;
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
    _openUrl(options: {
        url: string;
    }): Promise<void>;
}
