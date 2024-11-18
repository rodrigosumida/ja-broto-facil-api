require('dotenv').config();

const os = require('os');

const express = require('express');
const app = express();
const port = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    app.emit('pronto');
})
.catch(e => console.log(e));

const cors = require("cors");
app.use(cors());

const relatorioRoutes = require('./src/routes/relatorio.routes.js');
const plantaRoutes = require('./src/routes/planta.routes.js');

app.use('/api/relatorio', relatorioRoutes);
app.use('/api/planta', plantaRoutes);

app.on('pronto', () => {
    app.listen(port, '0.0.0.0', () => {
        console.log(`Servidor executando na porta ${port}`);
        
        const networkInterfaces = os.networkInterfaces();
        
        Object.keys(networkInterfaces).forEach(interfaceName => {
            networkInterfaces[interfaceName].forEach(interface => {
                if (interface.family === 'IPv4' && !interface.internal) {
                    console.log(`* Running on http://${interface.address}:${port}`);
                }
            });
        });
        
        console.log(`* Running on http://127.0.0.1:${port}`);
    });
});
