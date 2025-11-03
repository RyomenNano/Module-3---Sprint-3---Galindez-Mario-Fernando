import express from "express";
import {connectDB} from './config/DBConfig.mjs';
import superHeroRoutes from './routes/Rutas.mjs';

const app=express();
const PORT=3000;

connectDB();

app.use(express.json());

app.use("", superHeroRoutes);

app.use((req, res)=>{
    res.status(404).send({mensaje: "Ruta no encontrada"});
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})