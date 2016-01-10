let _ManualDigest;

function linkFn($scope, $element, $attrs) {
  $scope.$parent.$$childHead = null;
  const keys = $attrs.manualDigest.split(',');
  _ManualDigest.subscribe($scope, keys);
  setTimeout($scope.$digest.bind($scope));
}

export /* @ngInject */ function manualDigest(ManualDigest) {
  _ManualDigest = ManualDigest;
  return {
    restrict: 'A',
    scope: true,
    link: linkFn
  };
}
