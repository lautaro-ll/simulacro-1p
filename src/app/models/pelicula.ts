export class Pelicula {
    id: string;
    titulo: string;
    anio: number | null;
    duracion: string;
    pais: string;
    director: string;
    protagonista: string;
    genero: string;
    cartel: string;

    constructor(id: string = "", titulo: string = "", anio: number | null = null, 
                duracion: string = "", pais: string = "", director: string = "", 
                protagonista: string = "", genero: string = "", cartel: string = "") 
    {
        this.id = id;
        this.titulo = titulo;
        this.anio = anio;
        this.duracion = duracion;
        this.pais = pais;
        this.director = director;
        this.protagonista = protagonista;
        this.genero = genero;
        this.cartel = cartel;
    }
}
