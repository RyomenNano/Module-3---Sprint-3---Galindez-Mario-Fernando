import express from "express";

const app=express();
const PORT=3000;

app.use(express.json());

connectDB();

app.get("/",);

app.use((req, res)=>{
    res.status(404).send({mensaje: "Ruta no encontrada"});
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})