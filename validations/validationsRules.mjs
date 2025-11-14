import { body, param } from 'express-validator';

export const CrearheroesValidationRules = ()=>[
    body('nombreSuperheroe')
    .exists()
    .notEmpty().withMessage("Nombre no válido, asegurese llenar el campo mínimo 3 caracteres")
    .trim()
    .isLength({min: 3, max: 60}),

    body('nombreReal')
    .exists()
    .notEmpty()
    .trim()
    .isLength({min: 3}, {max:60}),

    body('edad')
    .trim()
    .isInt({min: 0}),

    body('poderes')
    .exists()
    .notEmpty()
    .trim()
    .isArray({min: 1})
    .custom(poderes=>{
        if(!poderes.every(poder => isNaN(poder))){
            throw new Error('Todos los elementos deben ser strings');
        }
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


