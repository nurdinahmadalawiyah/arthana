import * as SQLite from 'expo-sqlite';
import { log } from '@core/logger/logger';

let dbInstance: SQLite.SQLiteDatabase | null = null;

export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (dbInstance) {
    return dbInstance;
  }

  try {
    dbInstance = await SQLite.openDatabaseAsync('arthana.db');

    // Mengaktifkan WAL mode & Foreign Keys sebagai konfigurasi standar SQLite
    await dbInstance.execAsync(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;
    `);

    log.info('SQLite database (arthana.db) successfully initialized with WAL mode and Foreign Keys enabled.');
    return dbInstance;
  } catch (error) {
    log.error('Failed to initialize SQLite database:', error);
    throw error;
  }
};