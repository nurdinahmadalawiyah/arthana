import * as SecureStore from 'expo-secure-store';
import { log } from '@core/logger/logger';

export const secureStorage = {
    async setItem(key: string, value: string): Promise<void> {
        try {
            await SecureStore.setItemAsync(key, value);
        } catch (error) {
            log.error(`SecureStore setItem error [${key}]:`, error);
        }
    },

    async getItem(key: string): Promise<string | null> {
        try {
            return await SecureStore.getItemAsync(key);
        } catch (error) {
            log.error(`SecureStore getItem error [${key}]:`, error);
            return null;
        }
    },

    async removeItem(key: string): Promise<void> {
        try {
            await SecureStore.deleteItemAsync(key);
        } catch (error) {
            log.error(`SecureStore removeItem error [${key}]:`, error);
        }
    },
}