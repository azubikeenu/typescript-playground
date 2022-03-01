import { User } from '../model/User';
const user = new User({ name: 'Randy', age: 30 });

const name = user.get('name');

console.log(name);
