import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Pedido from './pedido.js';
import Menu from './menu.js';

class RegistroPedido extends Model {}

RegistroPedido.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        pedido_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'pedidos',
                key: 'id',
            },
        },
        menu_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'menues',
                key: 'id',
            },
        },
        creado_el: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'RegistroPedido',
        tableName: 'registro_pedido',
        timestamps: false,
    }
);

// Asociaciones
RegistroPedido.belongsTo(Pedido, { foreignKey: 'pedido_id', as: 'pedido' });
RegistroPedido.belongsTo(Menu, { foreignKey: 'menu_id', as: 'menu' });

export default RegistroPedido;