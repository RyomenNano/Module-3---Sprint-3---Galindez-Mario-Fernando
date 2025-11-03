import SuperHero from '../models/superheroe.mjs';
import IRepository from './IRepository.mjs';

class SuperheroRepository extends IRepository{
    async obtenerSuperheroes(){
        return await SuperHero.find({});
    }

    async crearSuperheroe(){
        const hero= new SuperHero({
        nombreSuperheroe: 'Flash',
        nombreReal: 'Barry Allen',
        edad: 27,
        planetaOrigen: 'Tierra',
        debilidad: 'Inestabilidad temporal',
        poderes: ['Velocidad sobrehumana', 'Curación acelerada', 'Viaje en el tiempo'],
        aliados: ['Green Lantern', 'Cyborg', 'Superman'],
        enemigos: ['Reverse Flash', 'Captain Cold', 'Gorilla Grodd'],
        creador: 'Fernando'
    });
        await hero.save();
        return hero;
    }

    async actualizarSuperheroe(nombre, datos){
        const result = await SuperHero.updateOne(
            {nombreSuperheroe: nombre},
            {$set: {edad: 37}});

            return await SuperHero.findOne({nombreSuperheroe: nombre});
    }

    async borrarSuperheroePorID(id){
        const result = await SuperHero.findOneAndDelete({_id: id});
        return result;
    }

    async borrarSuperheroePorNombre(nombre){
        const result = await SuperHero.findOneAndDelete({nombreSuperheroe: nombre});
        return result;
    }
}

export default new SuperheroRepository();