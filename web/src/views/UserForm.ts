import { User } from '../model/User';
import { UserProps } from '../model/UserProps';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventMap = (): { [key: string]: () => void } => {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.update-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  };

  onSaveClick = (): void => {
    this.model.save();
  };
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
            <input class='user-name' placeholder ='${this.model.get('name')}'/>
            <button class='update-name'>Update Name</button>
            <button class="set-age">Set random age</button>
            <button class="save-model">Save user</button>
    `;
  }
}
