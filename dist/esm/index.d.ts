import type { GlassfyPlugin } from './definitions';
import { GlassfySku, GlassfyTransaction } from './definitions';
declare const Glassfy: GlassfyPlugin;
declare class GlassfyPaywall {
    private static currentListener;
    static showPaywall(options: {
        remoteConfig: string;
        awaitLoading: boolean;
        listener: PaywallListener | null;
    }): Promise<void>;
    private static removeAllListeners;
    private static setupListener;
    static close(): Promise<void>;
}
interface PaywallListener {
    onClose?(transaction: GlassfyTransaction | null, error: any | null): void;
    onLink?(url: URL): void;
    onRestore?(): void;
    onPurchase?(sku: GlassfySku): void;
}
export * from './definitions';
export { Glassfy, GlassfyPaywall, PaywallListener };
