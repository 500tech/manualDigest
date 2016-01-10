export class ManualDigest {

  // @ngInject
  constructor() {
    this.events = {};
  }

  getListeners(eventName) {
    this.events[eventName] = this.events[eventName] || [];
    return this.events[eventName];
  }

  notify(eventName) {
    this.getListeners(eventName).forEach((listener) => listener());
  }

  subscribe($scope, eventNames) {
    eventNames.forEach((eventName) => this._subscribeSingleEvent($scope, eventName));
  }

  _subscribeSingleEvent($scope, eventName) {
    let listeners = this.getListeners(eventName);
    let index = listeners.length;
    listeners.push(() => $scope.$digest());
    $scope.$on('$destroy', () => listeners.splice(index, 1));
  }
}
