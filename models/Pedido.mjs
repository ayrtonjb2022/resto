import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases.mjs";
import { Base } from "./Base.mjs";

export class Menu extends Base{
    static tabla = "pedidos";
    static columns = [
        "id","mesa_id", "mozo_id", "direccion", "estado","creado_el", "actualizado_el"
    ];

    constructor(mesa_id,mozo_id,direccion){
        super();

        this.mesa_id = mesa_id;
        this.mozo_id= mozo_id;
        this.direccion = direccion;
        
    }

}