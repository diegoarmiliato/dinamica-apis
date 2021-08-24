import express from 'express';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SECRET],
  secure: true,
  httpOnly: false,
  sameSite: 'none',
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

export { app };
