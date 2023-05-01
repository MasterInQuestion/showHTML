	".js" files in this repository are unrolled versions of the bookmarklet.
	".lite" postfixed are versions optimized for modern mainstream browsers. (legacy polyfills removed)

[ ".lite"
	|*| !showHTML (Click)
	|*| javascript: (function () { var x0 = document.createElement( "textarea" ); x0.style = "position: fixed; z-index: 2147483647; left: 0; top: 0; width: 100%; height: " + ( document.documentElement.clientHeight * 0.25 ) + "px; opacity: 0.8; color: black; background-color: white"; x0.onfocus = function () { this.style.opacity = 1; }; x0.onblur = function () { this.parentNode.removeChild( this ); document.body.removeChild( x1 ); }; var x1 = document.createElement( "div" ); x1.style.height = x0.style.height; var insert = function () { document.body.insertBefore( x1, document.body.firstChild ); document.body.insertBefore( x0, x1 ); }; try { var f0 = function ( event ) { removeEventListener( "mousedown", f0 ); removeEventListener( "touchstart", f0 ); x0.innerText = event.target.outerHTML; insert(); }; addEventListener( "mousedown", f0 ); addEventListener( "touchstart", f0 ); } catch ( e ) { x0.innerText = e; insert(); }; })(); ]

	[
	|*| !showHTML (Click)
	|*| javascript: (function () { var x0 = document.createElement( "textarea" ); x0.style.cssText = "position: fixed; z-index: 2147483647; left: 0; top: 0; width: 100%; height: " + ( document.documentElement.clientHeight * 0.25 ) + "px; opacity: 0.8; color: black; background-color: white"; x0.onfocus = function () { this.style.opacity = 1; }; x0.onblur = function () { this.parentNode.removeChild( this ); document.body.removeChild( x1 ); }; var x1 = document.createElement( "div" ); x1.style.height = x0.style.height; ( document.body ) || ( document.body = document.getElementsByTagName( "body" )[0] ); var insert = function () { document.body.insertBefore( x1, document.body.firstChild ); document.body.insertBefore( x0, x1 ); }; try { var f0; if ( typeof addEventListener === "function" ) { f0 = function ( event ) { removeEventListener( "mousedown", f0, false ); removeEventListener( "touchstart", f0, false ); x0.innerText = event.target.outerHTML; insert(); }; addEventListener( "mousedown", f0, false ); addEventListener( "touchstart", f0, false ); } else { f0 = function () { document.documentElement.detachEvent( "onmousedown", f0 ); x0.innerText = event.srcElement.outerHTML; insert(); }; document.documentElement.attachEvent( "onmousedown", f0 ); }; } catch ( e ) { x0.innerText = e; insert(); }; })();
	|*| Note: This should theoretically work with IE6. Though which has an URI length limit of ~ 502 Bytes. ]

	[
	|*| !showHTML (Focus)
	|*| javascript: (function () { var x0 = document.createElement( "textarea" ); try { x0.innerText = document.activeElement.outerHTML; } catch ( e ) { x0.innerText = e; }; x0.style.cssText = "position: fixed; z-index: 2147483647; left: 0; top: 0; width: 100%; height: " + ( document.documentElement.clientHeight * 0.25 ) + "px; opacity: 0.8; color: black; background-color: white"; x0.onfocus = function () { this.style.opacity = 1; }; x0.onblur = function () { this.parentNode.removeChild( this ); document.body.removeChild( x1 ); }; var x1 = document.createElement( "div" ); x1.style.height = x0.style.height; ( document.body ) || ( document.body = document.getElementsByTagName( "body" )[0] ); document.body.insertBefore( x1, document.body.firstChild ); document.body.insertBefore( x0, x1 ); })();
	|*| Note:
[[
	"document.activeElement" won't give the expected result for most cases.
	Using `document.querySelector( ":focus" )` wouldn't help either.
	See also: https://stackoverflow.com/q/497094
]] ]


	The bookmarklet has much functional overlap with 【F12】 Developer tools' element picker. (and in general inferior)
	It's primarily intended for mobile browsers: which typically lack the DevTools, meanwhile probably also have broken handling for "mouseover" alike: rendering elements that relied on such much inaccessible.
	The bookmarklet should somewhat workaround this issue.
