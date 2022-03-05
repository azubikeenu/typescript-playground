import express from 'express';
import cookieSession from 'cookie-session';
import './controller/Login';
import './controller/Home';
import { AppRouter } from './AppRouter';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['mykey'],
  })
);

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
