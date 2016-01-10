import angular      from 'angular';
import manualDigest from './manualDigest.directive';
import countDigest  from './countDigest.directive';
import ManualDigest from './manualDigest.service';


angular.module('manualDigest', [])
.directive('manualDigest', manualDigest)
.directive('countDigest', countDigest)
.service('ManualDigest', ManualDigest);