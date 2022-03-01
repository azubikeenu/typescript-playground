import { User } from '../model/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });
  };

  eventMap = (): { [key: string]: () => void } => {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.update-name': this.onSetNameClick,
    };
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const name = this.parent.querySelector('input').value;
    this.model.set({ name });
  };

  template(): string {
    return `<h1>User Form</h1>
            <h2>User name : ${this.model.get('name')}</h2>
            <h2>User age : ${this.model.get('age')}</h2>
            <input class='user-name'/>
            <button class='update-name'>Update Name</button>
            <button class="set-age">Set random age</button>
    `;
  }

  bindEvents(documentFragment: DocumentFragment) {
    const eventMaps = this.eventMap();
    for (const eventKey in eventMaps) {
      const [event, selector] = eventKey.split(':');
      documentFragment
        .querySelectorAll(selector)
        .forEach((element: Element) => {
          element.addEventListener(event, eventMaps[eventKey]);
        });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    this.parent.append(template.content);
  }
}
