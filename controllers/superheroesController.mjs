import {obtenerTodosLosSuperheroes, crearNuevoSuperheroe, actualizarSuperheroe, eliminarSuperheroePorID, eliminarSuperheroePorNombre} from '../services/superheroesService.mjs';
import {renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseVista.mjs';


export async function obtenerTodosLosSuperheroesController(req, res){
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados= renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }

    catch(error){
        res.status(500).send({mensaje: 'Error al obtener los superhéroes', error: error.message})
    } 
} 

export async function crearNuevoSuperheroeController(req, res){
    const data = req.body;
    console.log('BODY recibido:', req.body);
    try {
        const superheroe= await crearNuevoSuperheroe(data);
        if(superheroe){
            const nuevoHeroe = renderizarSuperheroe(superheroe);
            res.status(200).json(nuevoHeroe);
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al crear superheroe', error: error.message})
    }
}

export async function actualizarSuperheroeController(req, res){
    const {nombre, atributo, valor}= req.params;
    try {
        const heroeActualizado =  await actualizarSuperheroe(nombre, atributo, valor);
        if (heroeActualizado){
            const nuevoHeroe = renderizarSuperheroe(heroeActualizado);
            res.status(200).json(nuevoHeroe);
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al actualizar superheroe', error: error.message})
    }
}

export async function eliminarSuperheroePorIDController(req, res){
        try {
            const {id}= req.params;
            const heroeEliminado = await eliminarSuperheroePorID(id);

            if (heroeEliminado){
                const Heroe = renderizarSuperheroe(heroeEliminado);
                res.status(200).json(Heroe);
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al eliminar superheroe', error: error.message})
    }
}

export async function eliminarSuperheroePorNombreController(req, res){
        try {
            const {nombre}= req.params;
            const heroeEliminado = await eliminarSuperheroePorNombre(nombre);
            if (heroeEliminado){
                const Heroe = renderizarSuperheroe(heroeEliminado);
                res.status(200).json(Heroe);
        }
        
    } catch (error) {
        res.status(500).send({mensaje: 'Error al eliminar superheroe', error: error.message});
    }
}
