import { User } from '../model/User';
import { UserProps } from '../model/UserProps';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <h1> Use Details </h1>
      <div>
      <div>User Name ${this.model.get('name')}</div>
      <div>User Age ${this.model.get('age')}</div>
      </div>
`;
  }
}
