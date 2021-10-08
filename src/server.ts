import dotenv from 'dotenv';
import { app } from './app';
dotenv.config();

const port = process.env.PORT_SERVER || 3333;

app.listen(port, () => console.log(`Listening on port ${port}!`));
