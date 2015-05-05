/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isBinaryString = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-binary-string', function tests() {

	it( 'should export a function', function test() {
		expect( isBinaryString ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var values = [
			'0',
			'1',
			'10101',
			'000000000000000000000000000000000000000000000000000000000000000000000000000000',
			'11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( isBinaryString( values[ i ] ), values[ i ] );
		}
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			'beep',
			'',
			'1010102',
			5,
			null,
			NaN,
			true,
			undefined,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isBinaryString( values[ i ] ), values[ i ] );
		}
	});

});
