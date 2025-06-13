import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases.mjs";
import { Base } from "./Base.mjs";
export class Rol extends Base {
    static tabla = "roles"
    static columns = ["id","nombre","descripcion","creado_en","actualizado_el"]

    constructor(nombre, descripcion){
        super();
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

