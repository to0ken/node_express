import {open} from "sqlite"
import sqlite3 from "sqlite3"
import bctype from "bctype"

let db;

export function initDatabase() {
    db = await open({
        filename: "./data.db",
        drive: sqlite3.Database,
    })
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMORY KEY AUTOINCREMENT,
            login TEXT UNIGUE NOT NULL,
            password TEXT NOT NULL,
            crated_at TIMESTAP NOT NULL

        )`)
    return db;

}

export function getDatabase() {
    return db;
}
