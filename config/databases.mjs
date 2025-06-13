import Sequelize from 'sequelize';

const sequelize = new Sequelize('restaurante', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, 
});

export default sequelize;