import express from "express";
import {obtenerTodosLosSuperheroesController, crearNuevoSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIDController, eliminarSuperheroePorNombreController} from "../controllers/superheroesController.mjs"



const routes= express.Router();

routes.get('/heroes', obtenerTodosLosSuperheroesController);
routes.post('/nuevoheroe', crearNuevoSuperheroeController);
routes.put('/actulizarheroe/:nombre', actualizarSuperheroeController);
routes.delete('/eliminarporid/:id', eliminarSuperheroePorIDController);
routes.delete('/eliminarpornombre/:nombre', eliminarSuperheroePorNombreController);

export default routes;