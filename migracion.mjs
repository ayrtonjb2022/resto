import fs from 'fs' // filesystem
import { Sequelize } from 'sequelize';
import sequelize from './config/databases.js'
const archvios = fs.readdirSync("./migraciones")

archvios.forEach(async (ar) => {
    if (ar.endsWith('.sql')) {
        const content = fs.readFileSync(`./migraciones/${ar}`).toString();
        console.log(content.toString());
         await sequelize.query(content)
        
    }
});
