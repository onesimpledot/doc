import {
  Component,
  Debug,
  EventDispatcher,
} from '@ribajs/core';

import template from './bs4-toggle-button.component.html';

type State = 'undefined' | 'overlay-left' | 'overlay-right' | 'side-left' | 'side-right' | 'hidden';

interface IScope {
  targetId?: string;
  toggle: Bs4ToggleButtonComponent['toggle'];
  state: State;
  isClosed: boolean;
}

export class Bs4ToggleButtonComponent extends Component {

  public static tagName: string = 'bs4-toggle-button';

  protected autobind = true;

  static get observedAttributes() {
    return ['target-id'];
  }

  protected debug = Debug('component:' + Bs4ToggleButtonComponent.tagName);

  protected eventDispatcher = new EventDispatcher('bs4-toggle-button');

  protected scope: IScope = {
    targetId: undefined,
    toggle: this.toggle,
    state: 'undefined',
    isClosed: false,
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.debug('constructor', this);
    this.init(Bs4ToggleButtonComponent.observedAttributes);
    this.eventDispatcher.on('toggled', (state: State) => {
      this.scope.state = state;
      this.scope.isClosed = state === 'hidden';
    });
  }

  public toggle() {
    this.debug('toggle');
    this.eventDispatcher.trigger('toggle', this.scope.targetId);
  }

  protected async init(observedAttributes: string[]) {
    return super.init(observedAttributes)
    .then((view) => {
      return view;
    });
  }

  protected async beforeBind() {
    this.debug('beforeBind');
  }

  protected async afterBind() {
    this.debug('afterBind', this.scope);
  }

  protected requiredAttributes() {
    return ['targetId'];
  }

  protected attributeChangedCallback(attributeName: string, oldValue: any, newValue: any, namespace: string | null) {
    super.attributeChangedCallback(attributeName, oldValue, newValue, namespace);
  }

  // deconstructor
  protected disconnectedCallback() {
    super.disconnectedCallback();
  }

  protected template() {
    // Only set the component template if there no childs already
    if (this.el.hasChildNodes()) {
      this.debug('Do not use template, because element has child nodes');
      return null;
    } else {
      this.debug('Use template', template);
      return template;
    }
  }
}
