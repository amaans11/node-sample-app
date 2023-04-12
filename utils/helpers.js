import dotenv from 'dotenv';
dotenv.config();

export const parseConfigValue = value => {
    switch (true) {
        case typeof value === 'object' && !Array.isArray(value):
            return process.env[value.ENV];
        default:
            return value;
    }
}
