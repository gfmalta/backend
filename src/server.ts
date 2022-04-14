import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router';

const databaseConnect  = () =>{
    try{
        mongoose.connect('mongodb+srv://root:admin@todolist.4ts1a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        });
        console.log('MongoDB Conectado!')
    } catch (error) {
        console.log('Falha ao conectar')
        console.log(error);

    }
}

databaseConnect();

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})