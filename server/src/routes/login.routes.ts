import e, { Router, Response, Request, NextFunction, raw } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (!req.session?.isLoggedIn) return res.redirect('/login');
  next();
}

router
  .route('/login')
  .get((req: Request, res: Response) => {
    res.send(`
     <form method='POST'>
        <div>
        <label>Email</label>
        <input name ='email'/>
        </div>
        <br/>
        <div>
        <label>Password</label>
        <input type='password' name ='password'/>
        </div>
        <button>LOG IN</button>
     </form>
  `);
  })
  .post((req: RequestWithBody, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password)
      return res.send('Must provide an email or password');

    if (email !== 'hi@hi.com' && password !== 'userpass')
      return res.send('Invalid email or password');

    req.session = { isLoggedIn: true };

    return res.redirect('/');
  });

router
  .route('/')
  .get(requireAuth, (req: Request, res: Response, next: NextFunction) => {
    return res.send(`
     <div>
      <div> You are logged in</div>
      <a href='/protected'> Protected</a>
      <br/>
      <a href='/logout'> Log out</a>
     </div>
  `);
  });

router
  .route('/logout')
  .get((req: Request, res: Response, next: NextFunction) => {
    req.session = undefined;
    return res.redirect('/login');
  });

router
  .route('/protected')
  .get(requireAuth, (req: Request, res: Response, next: NextFunction) => {
    res.send(`
    <div>
    <div> Welcome to the protected route</div>
    <a href='/logout'> Log out</a>
   </div>
    `);
  });

export { router };
