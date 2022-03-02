import { Collection } from '../model/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}
  render(): void {
    this.parent.innerHTML = '';
    const template = document.createElement('template');
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      template.content.append(itemParent);
    }
    this.parent.append(template.content);
  }

  abstract renderItem(model: T, parentElement: Element): void;
}
