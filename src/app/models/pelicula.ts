export class Pelicula {
    titulo: string;
    anio: number | null;
    duracion: string;
    pais: string;
    director: string;
    protagonista: string;
    genero: string;
    cartel: string;

    constructor(titulo: string = "", anio: number | null = null, 
                duracion: string = "", pais: string = "", director: string = "", 
                protagonista: string = "", genero: string = "", cartel: string = "") 
    {
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
