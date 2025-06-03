import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Pedido from './pedido.js'; // Importa el modelo Pedido

class Cobro extends Model {}

Cobro.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        metodo: {
            type: DataTypes.STRING(60),
            allowNull: true,
            defaultValue: null,
        },
        monto: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        creado_el: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'Cobro',
        tableName: 'cobros',
        timestamps: false,
    }
);

Cobro.belongsTo(Pedido, { foreignKey: 'pedido_id' });

export default Cobro;