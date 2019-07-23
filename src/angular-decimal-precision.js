/**
 * Angularjs Wrapper for Decimal.js
 * Author: Jason P <jmpanugaling@gmail.com> 2019
 *
 */
(function() {
  "use strict";

  /* @ngInject */
  function PrecisionFactory() {
    return new Decimal();
  }

  angular
    .module("jmp.decimal-precision", [])
    .factory("DecimalPrecisionFactory", [PrecisionFactory]);
})();
