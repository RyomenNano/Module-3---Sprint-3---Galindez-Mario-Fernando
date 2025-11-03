import SuperHeroRepository from "../repository/superheroesRepository.mjs";


export async function obtenerTodosLosSuperheroes(){
    return await SuperHeroRepository.obtenerSuperheroes();
}

export async function crearNuevoSuperheroe(){
    return await SuperHeroRepository.crearSuperheroe();
}

export async function actualizarSuperheroe(nombre, datos){
    return await SuperHeroRepository.actualizarSuperheroe(nombre, datos);
}

export async function eliminarSuperheroePorID(id){
    return await SuperHeroRepository.borrarSuperheroePorID(id);
} 

export async function eliminarSuperheroePorNombre(nombre){
    return await SuperHeroRepository.borrarSuperheroePorNombre(nombre);
} 