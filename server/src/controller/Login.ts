import { Response, Request } from 'express';
import { Controller, Get, BodyValidator, Post } from '../decorators';

@Controller('/auth')
class Login {
  @Get('/login')
  showloginPage(req: Request, res: Response) {
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
  }

  @Post('/login')
  @BodyValidator('email', 'password')
  login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email !== 'hi@hi.com' && password !== 'userpass')
      return res.send('Invalid email or password');

    req.session = { isLoggedIn: true };

    return res.redirect('/');
  }
  @Get('/logout')
  logout(req: Request, res: Response) {
    req.session = undefined;
    return res.redirect('/');
  }
}
