import mysql from 'mysql';
import database from '../config/database.json';
import {parseConfigValue} from "../utils/helpers.js";
import {config} from 'dotenv';

config();

const connection = mysql.createConnection({
    host: parseConfigValue(database.host),
    port: parseConfigValue(database.port),
    database: parseConfigValue(database.database),
    user: parseConfigValue(database.user),
    password: parseConfigValue(database.password)
});

export default connection;
