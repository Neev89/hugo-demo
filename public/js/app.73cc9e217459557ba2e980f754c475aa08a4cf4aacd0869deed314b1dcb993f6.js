/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/***/ (function(module, exports) {

(function () {
  var win = window;
  var doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');

  // Fix hero background height on desktop
  // const heroDesktopBg = document.querySelector('.site-header-large-bg span')

  // fixHeroBgHeight()
  // win.addEventListener('load', fixHeroBgHeight)
  // win.addEventListener('resize', fixHeroBgHeight)

  // function fixHeroBgHeight () {
  //   const bodyHeight = doc.getElementsByTagName('body')[0].clientHeight
  //   heroDesktopBg.style.height = `${bodyHeight}px`
  // }

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    var sr = window.sr = ScrollReveal();

    sr.reveal('.hero-title, .hero-paragraph, .newsletter-form', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'top',
      interval: 150
    });

    sr.reveal('.hero-ball', {
      delay: 1000,
      duration: 1400,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 200
    });

    sr.reveal('.hero-illustration-browser, .hero-squares', {
      delay: 400,
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'right',
      interval: 150
    });
  }
})();

/***/ }),

/***/ "./src/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/tailwind.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/js/app.js");
__webpack_require__("./src/sass/app.scss");
module.exports = __webpack_require__("./src/sass/tailwind.css");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTgxNjM1MzhlZDBlOThmNzYwM2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9hcHAuc2Nzcz9kOTVhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3RhaWx3aW5kLmNzcz8yMDgyIl0sIm5hbWVzIjpbIndpbiIsIndpbmRvdyIsImRvYyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYm9keSIsImNvbnRhaW5zIiwic3IiLCJTY3JvbGxSZXZlYWwiLCJyZXZlYWwiLCJkdXJhdGlvbiIsImRpc3RhbmNlIiwiZWFzaW5nIiwib3JpZ2luIiwiaW50ZXJ2YWwiLCJkZWxheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQyxhQUFZO0FBQ1gsTUFBTUEsTUFBTUMsTUFBWjtBQUNBLE1BQU1DLE1BQU1DLFNBQVNDLGVBQXJCOztBQUVBRixNQUFJRyxTQUFKLENBQWNDLE1BQWQsQ0FBcUIsT0FBckI7QUFDQUosTUFBSUcsU0FBSixDQUFjRSxHQUFkLENBQWtCLElBQWxCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSUosU0FBU0ssSUFBVCxDQUFjSCxTQUFkLENBQXdCSSxRQUF4QixDQUFpQyxnQkFBakMsQ0FBSixFQUF3RDtBQUN0RDtBQUNBLFFBQU1DLEtBQUtULE9BQU9TLEVBQVAsR0FBWUMsY0FBdkI7O0FBRUFELE9BQUdFLE1BQUgsQ0FBVSxnREFBVixFQUE0RDtBQUMxREMsZ0JBQVUsSUFEZ0Q7QUFFMURDLGdCQUFVLE1BRmdEO0FBRzFEQyxjQUFRLG9DQUhrRDtBQUkxREMsY0FBUSxLQUprRDtBQUsxREMsZ0JBQVU7QUFMZ0QsS0FBNUQ7O0FBUUFQLE9BQUdFLE1BQUgsQ0FBVSxZQUFWLEVBQXdCO0FBQ3RCTSxhQUFPLElBRGU7QUFFdEJMLGdCQUFVLElBRlk7QUFHdEJDLGdCQUFVLE1BSFk7QUFJdEJDLGNBQVEsb0NBSmM7QUFLdEJDLGNBQVEsUUFMYztBQU10QkMsZ0JBQVU7QUFOWSxLQUF4Qjs7QUFTQVAsT0FBR0UsTUFBSCxDQUFVLDJDQUFWLEVBQXVEO0FBQ3JETSxhQUFPLEdBRDhDO0FBRXJETCxnQkFBVSxHQUYyQztBQUdyREMsZ0JBQVUsTUFIMkM7QUFJckRDLGNBQVEsb0NBSjZDO0FBS3JEQyxjQUFRLE9BTDZDO0FBTXJEQyxnQkFBVTtBQU4yQyxLQUF2RDtBQVFEO0FBQ0YsQ0FsREEsR0FBRCxDOzs7Ozs7O0FDQUEseUM7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk4MTYzNTM4ZWQwZTk4Zjc2MDNjIiwiKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgd2luID0gd2luZG93XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICBcbiAgZG9jLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJylcbiAgZG9jLmNsYXNzTGlzdC5hZGQoJ2pzJylcbiAgXG4gIC8vIEZpeCBoZXJvIGJhY2tncm91bmQgaGVpZ2h0IG9uIGRlc2t0b3BcbiAgLy8gY29uc3QgaGVyb0Rlc2t0b3BCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlci1sYXJnZS1iZyBzcGFuJylcbiAgXG4gIC8vIGZpeEhlcm9CZ0hlaWdodCgpXG4gIC8vIHdpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZml4SGVyb0JnSGVpZ2h0KVxuICAvLyB3aW4uYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4SGVyb0JnSGVpZ2h0KVxuICBcbiAgLy8gZnVuY3Rpb24gZml4SGVyb0JnSGVpZ2h0ICgpIHtcbiAgLy8gICBjb25zdCBib2R5SGVpZ2h0ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50SGVpZ2h0XG4gIC8vICAgaGVyb0Rlc2t0b3BCZy5zdHlsZS5oZWlnaHQgPSBgJHtib2R5SGVpZ2h0fXB4YFxuICAvLyB9XG4gIFxuICAvLyBSZXZlYWwgYW5pbWF0aW9uc1xuICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1hbmltYXRpb25zJykpIHtcbiAgICAvKiBnbG9iYWwgU2Nyb2xsUmV2ZWFsICovXG4gICAgY29uc3Qgc3IgPSB3aW5kb3cuc3IgPSBTY3JvbGxSZXZlYWwoKVxuICAgIFxuICAgIHNyLnJldmVhbCgnLmhlcm8tdGl0bGUsIC5oZXJvLXBhcmFncmFwaCwgLm5ld3NsZXR0ZXItZm9ybScsIHtcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgZGlzdGFuY2U6ICc0MHB4JyxcbiAgICAgIGVhc2luZzogJ2N1YmljLWJlemllcigwLjUsIC0wLjAxLCAwLCAxLjAwNSknLFxuICAgICAgb3JpZ2luOiAndG9wJyxcbiAgICAgIGludGVydmFsOiAxNTBcbiAgICB9KVxuICAgIFxuICAgIHNyLnJldmVhbCgnLmhlcm8tYmFsbCcsIHtcbiAgICAgIGRlbGF5OiAxMDAwLFxuICAgICAgZHVyYXRpb246IDE0MDAsXG4gICAgICBkaXN0YW5jZTogJzQwcHgnLFxuICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuNSwgLTAuMDEsIDAsIDEuMDA1KScsXG4gICAgICBvcmlnaW46ICdib3R0b20nLFxuICAgICAgaW50ZXJ2YWw6IDIwMFxuICAgIH0pXG4gICAgXG4gICAgc3IucmV2ZWFsKCcuaGVyby1pbGx1c3RyYXRpb24tYnJvd3NlciwgLmhlcm8tc3F1YXJlcycsIHtcbiAgICAgIGRlbGF5OiA0MDAsXG4gICAgICBkdXJhdGlvbjogNjAwLFxuICAgICAgZGlzdGFuY2U6ICc0MHB4JyxcbiAgICAgIGVhc2luZzogJ2N1YmljLWJlemllcigwLjUsIC0wLjAxLCAwLCAxLjAwNSknLFxuICAgICAgb3JpZ2luOiAncmlnaHQnLFxuICAgICAgaW50ZXJ2YWw6IDE1MFxuICAgIH0pXG4gIH1cbn0oKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL3RhaWx3aW5kLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2Fzcy90YWlsd2luZC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==