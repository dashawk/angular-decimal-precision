/**
 * Angularjs Wrapper for Decimal.js
 * Author: Jason P <jmpanugaling@gmail.com> 2019
 * 
 */
(function (app) {
	'use strict';

	if (typeof exports === 'object') {
		module.exports = app(
			typeof angular !== 'undefined' ? angular : require('angular'),
			typeof Decimal !== 'undefined' ? Decimal : require('decimal.js')
		);
	} else if (typeof define === 'function' && define.amd) {
		define(['angular', 'decimal'], app);
	} else {
		if (typeof angular === 'undefined') {
			throw new Error('Angular.Js not found');
		}

		app(angular, Decimal);
	}
}(function (angular, Decimal) {
	'use strict';

	/* @ngInject */
	function PrecisionFactory() {
		return new Decimal();
	}
	
	return angular
		.module('jmp.decimal-precision', [])
		.factory('DecimalPrecisionFactory', [PrecisionFactory]);
}));