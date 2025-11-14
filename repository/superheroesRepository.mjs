import SuperHero from '../models/superheroe.mjs';
import IRepository from './IRepository.mjs';

class SuperheroRepository extends IRepository{
    async obtenerSuperheroes(){
        return await SuperHero.find({});
    }

    async crearSuperheroe(data){
        const hero = new SuperHero(data);
        await hero.save();
        return hero;
    }

    async actualizarSuperheroe(nombre, atributo, valor){
        const result = await SuperHero.updateOne(
            {nombreSuperheroe: nombre},
            {$set: {[atributo]: valor}});

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