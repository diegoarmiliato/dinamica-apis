import path from 'path';
import fs from 'fs';
import express from 'express';
import https from 'https';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import '@controllers/UsersController';
import routes from './routes';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT_SERVER || 3333;

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SECRET],
  secure: false,
  httpOnly: true,
  maxAge: 5 * 1000 * 60 //24 hours
}));

const whiteList = process.env.CORS;

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  const reqOrigin = req.get('origin');
  if (whiteList.indexOf(reqOrigin) !== -1) {
    corsOptions = { origin: reqOrigin,  credentials: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false,  credentials: true }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.use(routes);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const error: unknown = new Error('Page not Found');
  error['status'] = 404;
  next(error);
});

app.use((error: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
  error['status'] = error['status'] || 500;
  res.status(error['status']);
  res.json({ error: error['message'] });
});

const privateKey  = fs.readFileSync(path.resolve(__dirname,'..','cert','key.pem'), 'utf8');
const certificate = fs.readFileSync(path.resolve(__dirname,'..','cert','certificate.pem'), 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => console.log(`Listening on port ${port}!`));
