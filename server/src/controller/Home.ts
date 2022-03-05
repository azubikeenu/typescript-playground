import { Response, Request, NextFunction } from 'express';
import { Controller, Get, Use } from '../decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (!req.session?.isLoggedIn) return res.redirect('/auth/login');
  console.log('Here');
  next();
}

@Controller('')
export class Home {
  @Get('/')
  @Use(requireAuth)
  showHomePage(req: Request, res: Response) {
    return res.send(`
         <div>
          <div> You are logged in</div>
          <a href='/protected'> Protected</a>
          <br/>
          <a href='/auth/logout'> Log out</a>
         </div>
      `);
  }

  @Get('/protected')
  @Use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
    <div>
    <div> Welcome to the protected route</div>
    <a href='/auth/logout'> Log out</a>
   </div>
    `);
  }
}
