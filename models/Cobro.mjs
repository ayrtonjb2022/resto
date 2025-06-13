import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases.mjs";
import { Base } from "./Base.mjs";

export class Menu extends Base{
    static tabla = "cobros";
    static columns = [
        "id","pedido_id", "metodo","monto", "creado_el"
    ];

    constructor(pedido_id,metodo,monto,) {
    super();
    
    this.pedido_id =pedido_id;
    this.metodo = metodo;
    this.monto = monto
    
}


}