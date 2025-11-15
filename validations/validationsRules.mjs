import mongoose from "mongoose";
import { body, param } from 'express-validator';

export const CrearheroesValidationRules = ()=>[
    body('nombreSuperheroe')
    .exists()
    .notEmpty().withMessage("Introduzca un nombre de superheroe")
    .trim()
    .isLength({min: 3, max: 60}).withMessage("El nombre de superheroe debe estar entre 3-60 carácteres"),

    body('nombreReal')
    .exists()
    .notEmpty().withMessage("Introduzca el nombre real del superheroe")
    .trim()
    .isLength({min: 3}, {max:60}).withMessage("El nombre real debe estar entre 3-60 carácteres"),

    body('edad')
    .trim()
    .isInt({min: 0}).withMessage("La edad del heroe debe ser mayor a 1"),

    body('poderes')
    .exists()
    .notEmpty()
    .isArray({min: 1})
    .custom(poderes=>{
        if(!poderes.every(poder => typeof poder === 'string')){
            throw new Error('Cada poder debe ser un string');
        };
        return true;
    })
]

export const ValidacionActualizarheroe = ()=>[
    param('nombre')
    .exists()
    .notEmpty()
    .trim()
    .isLength({min: 3, max:60}),

    param('atributo')
    .exists()
    .notEmpty()
    .trim(),

    param('valor')
    .exists()
    .notEmpty()
    .trim()
]

export const ValidacionEliminarPorId = ()=>[
    
]

export const ValidacionEliminarPorNombre = ()=>[
    param('nombre')
    .exists()
    .notEmpty()
    .trim()
    .isLength({min: 3, max:60})]
