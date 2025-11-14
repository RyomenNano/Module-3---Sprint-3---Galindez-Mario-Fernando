import express from "express";
import {obtenerTodosLosSuperheroesController, crearNuevoSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIDController, eliminarSuperheroePorNombreController} from "../controllers/superheroesController.mjs"
import {CrearheroesValidationRules, ValidacionActualizarheroe} from "../validations/validationsRules.mjs";
import {handleValidationErrors} from "../validations/errorMiddleware.mjs";


const routes= express.Router();

routes.get('/heroes', obtenerTodosLosSuperheroesController);

routes.post('/nuevoheroe', CrearheroesValidationRules(), handleValidationErrors, crearNuevoSuperheroeController);

routes.put('/actulizarheroe/:nombre/:atributo/:valor', ValidacionActualizarheroe(), handleValidationErrors, actualizarSuperheroeController);

routes.delete('/eliminarporid/:id', eliminarSuperheroePorIDController);

routes.delete('/eliminarpornombre/:nombre', eliminarSuperheroePorNombreController);

export default routes; 