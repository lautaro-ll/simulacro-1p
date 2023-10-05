export class Actor {
    id: string;
    nombre: string;
    apellido: string;
    sexo: string;
    pais: string;

    constructor(nombre: string, apellido: string, sexo: string, pais: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.pais = pais;
        this.id = "";
    }
}
