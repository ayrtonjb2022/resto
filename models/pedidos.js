import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases";
import Usuarios from "./usuarios";
import Mesas from "./mesasa";

class Pedidos extends Model{}

Pedidos.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    mesa_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:true,
        defaultValue:null,
        references:{
            model:Mesas,
            key:id
        }
    },
    mozo_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:true,
        defaultValue:null,
        references:{
            model:Usuarios,
            key: id
        }
    },
    estado:{
        type:DataTypes.STRING(10),
        defaultValue:'en curso',
    },
    
},{
    
  sequelize,
  modelName: 'Pedidos',
  tableName: 'pedidos',
  timestamps: true
})

Usuarios.hasMany(Pedidos, { foreignKey: 'mozo_id' }); 
Pedidos.belongsTo(Usuarios, { foreignKey: 'mozo_id' });

Mesas.hasMany(Pedidos, { foreignKey: 'mesa_id' }); 
Pedidos.belongsTo(Mesas, { foreignKey: 'mesa_id' });
