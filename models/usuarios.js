import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/databases';
import Roles from './roles.js';

class Usuarios extends Model {}

Usuarios.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre_completo: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    tel: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    rol_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Roles,
            key: 'id'
        }
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'Usuarios',
    tableName: 'usuarios',
    timestamps: false
});

Usuarios.belongsTo(Roles, { foreignKey: 'rol_id', as: 'rol' });

export default Usuarios;
