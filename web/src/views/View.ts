import { Model } from '../model/Model';

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  regions: { [key: string]: Element } = {};

  eventMap(): { [key: string]: () => void } {
    return {};
  }

  regionMap(): { [key: string]: string } {
    return {};
  }

  abstract template(): string;

  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });
  };

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
  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';
    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.mapRegions(template.content);
    this.bindEvents(template.content);
    this.onRender();
    this.parent.append(template.content);
  }

  // this basically gets the html elements as values in the regions objects
  mapRegions(template: DocumentFragment): void {
    const regionsMap = this.regionMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = template.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }
}
