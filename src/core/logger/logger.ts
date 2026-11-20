import { logger, consoleTransport } from 'react-native-logs';

export const log = logger.createLogger({
    severity: __DEV__ ? 'debug' : 'error',
    transport: consoleTransport,
    transportOptions: {
        colors: { info: 'blueBright', warn: 'yellowBright', error: 'redBright' },
    },
});
