import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases.mjs";
import { Base } from "./Base.mjs";
/**
 * @example
 * 
 * const rol = new Menu("none")
 */
export class Menu extends Base{
    static tabla = "menues";
    static columns = [
        "id","menu", "descripcion", "precio", "descuento","estado","creado_el", "actualizado_el"
    ];

    constructor(menu,descripcion,precio){
        super();

        this.menu = menu;
        this.descripcion = descripcion;
        this.precio = precio;
    }

}

