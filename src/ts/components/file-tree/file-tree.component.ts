import {
  Component,
} from '@ribajs/core';

import template from './file-tree.component.html';

// interface IScope {}

export class FileTreeComponent extends Component {

  public static tagName: string = 'rv-file-tree';

  protected autobind = false;

  static get observedAttributes() {
    return [];
  }

  protected scope = {}; // : IScope = {};

  constructor(element?: HTMLElement) {
    super(element);
    this.init(FileTreeComponent.observedAttributes);
  }

  protected template() {
    // Only set the component template if there no childs already
    if (this.el.hasChildNodes()) {
      return null;
    } else {
      return template;
    }
  }
}
