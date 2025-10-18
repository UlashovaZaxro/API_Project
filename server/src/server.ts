import http from 'http';
import app from './app.ts';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4001;


const server = http.createServer(app);


server.listen(PORT, ()=> {
    console.log(`Server is roaming on port ${PORT}`);
    
})