import SuperHeroRepository from "../repository/superheroesRepository.mjs";


export async function obtenerTodosLosSuperheroes(){
    return await SuperHeroRepository.obtenerSuperheroes();
}

export async function crearNuevoSuperheroe(data){
    return await SuperHeroRepository.crearSuperheroe(data);
}

export async function actualizarSuperheroe(nombre, atributo, valor){
    return await SuperHeroRepository.actualizarSuperheroe(nombre, atributo, valor);
}

export async function eliminarSuperheroePorID(id){
    return await SuperHeroRepository.borrarSuperheroePorID(id);
} 

export async function eliminarSuperheroePorNombre(nombre){
    return await SuperHeroRepository.borrarSuperheroePorNombre(nombre);
}  