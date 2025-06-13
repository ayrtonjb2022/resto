import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases.mjs";
import { Base } from "./Base.mjs";

export class Menu extends Base{
    static tabla = "mesas";
    static columns = [
        "id","capacidad", "descripcion_reserva", "reserva", "ocupada","mozo_id"
    ];

    constructor(capacidad,descripcion_reserva,reserva,mozo_id){
        super();

        this.capacidad = capacidad;
        this.descripcion_reserva = descripcion_reserva;
        this.reserva = reserva;
        this.mozo_id = mozo_id
    }

}