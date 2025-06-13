import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databases.mjs";
import { Base } from "./Base.mjs";
import bcrypt from 'bcrypt'

export class Usuario extends Base{
    static tabla = "usuarios";
    static columns = ["id","nombre_completo", "dni", "password","tel", "rol_id", "estado"]

    constructor(nombre,dni,password,tel,rol_id){
        super();

        this.nombre = nombre;
        this.dni = dni;
        this.password = password;
        this.tel = tel
        this.rol_id = rol_id
    }

    async HashPassword() {
        if (this.password) {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        }
    }

    async ComparePassword(password) {
        if (!this.password) {
            throw new Error("No hay contraseña almacenada para comparar.");
        }
        return await bcrypt.compare(password, this.password);
    }
}