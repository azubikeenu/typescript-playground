import { User } from './model/User';
import { UserForm } from './views/userForm';

const userForm = new UserForm(
  document.getElementById('root'),
  User.build({ id: 3, name: 'Richard', age: 30 })
);

userForm.render();
