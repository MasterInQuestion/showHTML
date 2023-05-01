	(function () {
// ---- BEGIN (0)
	var x0 = document.createElement( "textarea" );
	x0.style.cssText = "position: fixed; z-index: 2147483647; left: 0; top: 0; width: 100%; height: " + ( document.documentElement.clientHeight * 0.25 ) + "px; opacity: 0.8; color: black; background-color: white";
	x0.onfocus = function () { this.style.opacity = 1; };
	x0.onblur = function () { this.parentNode.removeChild( this ); document.body.removeChild( x1 ); };

	var x1 = document.createElement( "div" );
	x1.style.height = x0.style.height;

	( document.body ) || ( document.body = document.getElementsByTagName( "body" )[0] );
	var insert = function () {
	document.body.insertBefore( x1, document.body.firstChild );
	document.body.insertBefore( x0, x1 );
	};

	try {
// ---- BEGIN (1)
	var f0;
	if ( typeof addEventListener === "function" ) {
	f0 = function ( event ) {
	removeEventListener( "mousedown", f0, false );
	removeEventListener( "touchstart", f0, false );
	x0.innerText = event.target.outerHTML;
	insert();
	};
	addEventListener( "mousedown", f0, false );
	addEventListener( "touchstart", f0, false );

	} else {
	f0 = function () {
	document.documentElement.detachEvent( "onmousedown", f0 );
	x0.innerText = event.srcElement.outerHTML;
	insert();
	};
	document.documentElement.attachEvent( "onmousedown", f0 );

	};
// ---- END (1)
	} catch ( e ) {
	x0.innerText = e;
	insert();
	};
// ---- END (0)
	})();
