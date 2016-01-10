function linkFn($scope, $element, $attrs) {
  $scope.$watch(() => {
    console.count(`digest ${$attrs.countDigests}`);
  });
}

export function countDigests() {
  return {
    restrict: 'A',
    scope: false,
    link: linkFn
  };
}
