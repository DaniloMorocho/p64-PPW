const express = require('express');
const router = express.Router();
const controller = require('./control');

const app = express();
app.use(express.json());

router.post('/ciudad', (req, res) => {
    const dato = req.body;
    controller.insertar_usuario(dato)
        .then((resultado) => {
            res.status(201).send(resultado);
        })
        .catch((error) => {
            res.status(400).send({ error: error });
        });
});

router.get('/ciudad', (req, res) => {
    const dato = req.query;
    controller.obtener_usuario(dato)
        .then((resultado) => {
            res.status(200).send(resultado);
        })
        .catch((error) => {
            res.status(400).send({ error: error });
        });
});


router.put('/ciudad', (req, res) => {
    const dato = req.body;
    controller.actualizar_usuario(dato)
        .then((resultado) => {
            res.status(200).send(resultado);
        })
        .catch((error) => {
            res.status(400).send({ error: error });
        });
});

router.delete('/ciudad', (req, res) => {
    const dato = req.body;
    controller.eliminar_usuario(dato)
        .then((resultado) => {
            res.status(200).send(resultado);
        })
        .catch((error) => {
            res.status(400).send({ error: error });
        });
});

const PORT = process.env.PORT || 3000;
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
