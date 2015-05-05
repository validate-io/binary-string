'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// BINARY STRING //

/**
* FUNCTION: isBinaryString( value )
*	Validates if a value is a binary string.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if an input value is a binary string
*/
function isBinaryString( str ) {
	var len,
		ch,
		i;
	if ( !isString( str ) ) {
		return false;
	}
	len = str.length;
	if ( !len ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		ch = str[ i ];
		if ( ch !== '1' && ch !== '0' ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isBinaryString()


// EXPORTS //

module.exports = isBinaryString;
