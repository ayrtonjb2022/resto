import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases";

class Menu extends Model {}

Menu.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    plato:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    precio:{
        type:DataTypes.FLOAT(10,2),
        allowNull:false,
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:1,
        allowNull:false
    },
    descuento:{
        type:DataTypes.BOOLEAN,
        defaultValue:0,
        allowNull:false
    }
},{
    sequelize,
    createdAt:true,
    updatedAt:true
})

export default Menu;