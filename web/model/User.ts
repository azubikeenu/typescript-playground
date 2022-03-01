import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { UserProps } from './UserProps';

const rootUrl = 'http://localhost:3000/users';

export class User {
  eventing: Eventing = new Eventing();

  sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  get set() {
    return this.attributes.set;
  }
}
