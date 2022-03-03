import express from 'express';
import { router as loginRouter } from './routes/login.routes';
import cookieSession from 'cookie-session';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['mykey'],
  })
);
app.use(loginRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
