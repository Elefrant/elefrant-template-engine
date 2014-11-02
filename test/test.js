'use strict';

var component = require('../component'),
		should = require('should');

describe('template engine', function () {

	it('exports an object', function () {
		should.exist(component);
	});

	it('check register', function () {
		should(component.register()).be.ok;
	});
});