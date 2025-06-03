import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases";
import Usuarios from "./usuarios";

class Mesas extends Model {}

Mesas.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descripcion_reserva: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    reservada: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    ocupada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    mozo_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Usuarios,
            key: "id",
        },
    },
}, {
    sequelize,
    modelName: "Mesas",
    tableName: "mesas",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
});

Mesas.belongsTo(Usuarios, { foreignKey: "mozo_id", as: "mozo" });
Usuarios.hasMany(Mesas, { foreignKey: "mozo_id", as: "mesas" });

export default Mesas;