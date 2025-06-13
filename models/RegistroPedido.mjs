import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases.mjs";
import { Base } from "./Base.mjs";

export class Menu extends Base{
    static tabla = "pregistro_pedido";
    static columns = [
        "id","pedido_id", "menu_id","creado_el", "actualizado_el"
    ];

    constructor(pedido_id,menu_id,) {
    super();
    
    this.pedido_id =pedido_id;
    this.menu_id = menu_id;
    
}


}