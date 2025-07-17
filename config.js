require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split('.').map(p => p.trim())
        : ['.'],

    NUMBER: process.env.YOUR_NUMBER || '255747196463',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'Nicolaus Daniel 3😈👁️‍🗨️😈',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'off',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZOSE9GVUxnOGVjZWtTcVR4bFZjRFhlMU1pR1lodllORk4rYUNPS2wxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUm9JcXFRUEhramtkN3l5VVp0b1ZxRHc5eTVjNVliTXJZeXFsVXhjeTNpOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRGlQMVdRUkQ2aVBzWW05c2xQNHEyTGc5RTNmT1pJZkxsYU9lNkh5bFhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrNmJ6V3o4cGFBekRNMDZjZ3dxYU13S0wzZFVtK0ZzbEFncFBpekJCY0FjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIekxXZUhsbVVNZTIwZXd1V0FlNFBwOVJQV3pFdjdVYjJ1ditOZk85M2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlncWdvL2VRWi9VcldxbWlHaVU2dlhwYjVOVDBhSXBoWjc4WFFvQXB0aEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tadVZySWVSMGRFbGJzMU5GZmZUS3F4bUpCd0ZucFpPYzhJYVFrbU5FZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVZUL2RMUVFqaFlSQkRsUTI0UnZPUnZvSE1YS0VyQWg2WC9iYWtBaTVtND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh5ZGMrUUs3WWVQQzhDT2xkdDE3UXduSDlOUVpXMEI0NWlOekU1aGpZVElBWjU2Z3FMc05VZVAvM2toL1p2RE40N2RDa0h3OFBoNVJVVWpMaHovd2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IkJRcFFCN1Q2RHJrNlZudHZrV2RyTXpXdHRIWUh0UlYwTkVGWmtMTWFHVU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzQ3MTk2NDYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyQzM5Q0FCMDg0QUExM0I5OEE1MUQzRTZFNzlEQjA4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTI3NjgyNzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc0NzE5NjQ2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0RjFDNjE0MTYyRkQ4MDU3RTU1MTMzNjY5QUI4RjY4RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyNzY4MzAyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI1RDVLWkpSUSIsIm1lIjp7ImlkIjoiMjU1NzQ3MTk2NDYzOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGJ3YXkiLCJsaWQiOiIyMjk3NDI2NDkzMzE3NDc6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xXVmo2TUdFT3k5NU1NR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNYREtHYmRmemFRSnhkL3JvcXcyY3hIZzdZamxSTG9xbTlNS3llVFl0MEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRMSkZONWg2RVRBUmdvZW40QkZTbXU4SmEyVW0yVzhOSVFNVFVrS1BUdzRnRTdqT1FndjcyYncwUlR3a0JvWlR4dENyUU05VXYrOG9JYnZQbkswQUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTYndDL0tMRjVZVll4SXZsTnZzM25PdHJKbG81OTliZjZoMlJxaFVJcFZpdE9nbEwwbnJkVXl1RlBSdWxiTjRKKzJJRnRTQlpZM1g4UWNrRWZ2cGZnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc0NzE5NjQ2MzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhGd3lobTNYODJrQ2NYZjY2S3NObk1SNE8ySTVVUzZLcHZUQ3NuazJMZEMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Mjc2ODI1MCwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHK20ifQ==',
    timezone: 'Africa/Tanzania',

    USER_LID: process.env.YOUR_LID || null,

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
