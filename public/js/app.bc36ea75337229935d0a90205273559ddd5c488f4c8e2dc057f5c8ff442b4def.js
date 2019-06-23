webpackJsonp([0],{

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

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL2FwcC5zY3NzP2Q5NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzPzIwODIiXSwibmFtZXMiOlsid2luIiwid2luZG93IiwiZG9jIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJib2R5IiwiY29udGFpbnMiLCJzciIsIlNjcm9sbFJldmVhbCIsInJldmVhbCIsImR1cmF0aW9uIiwiZGlzdGFuY2UiLCJlYXNpbmciLCJvcmlnaW4iLCJpbnRlcnZhbCIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFDLGFBQVk7QUFDWCxNQUFNQSxNQUFNQyxNQUFaO0FBQ0EsTUFBTUMsTUFBTUMsU0FBU0MsZUFBckI7O0FBRUFGLE1BQUlHLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixPQUFyQjtBQUNBSixNQUFJRyxTQUFKLENBQWNFLEdBQWQsQ0FBa0IsSUFBbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFJSixTQUFTSyxJQUFULENBQWNILFNBQWQsQ0FBd0JJLFFBQXhCLENBQWlDLGdCQUFqQyxDQUFKLEVBQXdEO0FBQ3REO0FBQ0EsUUFBTUMsS0FBS1QsT0FBT1MsRUFBUCxHQUFZQyxjQUF2Qjs7QUFFQUQsT0FBR0UsTUFBSCxDQUFVLGdEQUFWLEVBQTREO0FBQzFEQyxnQkFBVSxJQURnRDtBQUUxREMsZ0JBQVUsTUFGZ0Q7QUFHMURDLGNBQVEsb0NBSGtEO0FBSTFEQyxjQUFRLEtBSmtEO0FBSzFEQyxnQkFBVTtBQUxnRCxLQUE1RDs7QUFRQVAsT0FBR0UsTUFBSCxDQUFVLFlBQVYsRUFBd0I7QUFDdEJNLGFBQU8sSUFEZTtBQUV0QkwsZ0JBQVUsSUFGWTtBQUd0QkMsZ0JBQVUsTUFIWTtBQUl0QkMsY0FBUSxvQ0FKYztBQUt0QkMsY0FBUSxRQUxjO0FBTXRCQyxnQkFBVTtBQU5ZLEtBQXhCOztBQVNBUCxPQUFHRSxNQUFILENBQVUsMkNBQVYsRUFBdUQ7QUFDckRNLGFBQU8sR0FEOEM7QUFFckRMLGdCQUFVLEdBRjJDO0FBR3JEQyxnQkFBVSxNQUgyQztBQUlyREMsY0FBUSxvQ0FKNkM7QUFLckRDLGNBQVEsT0FMNkM7QUFNckRDLGdCQUFVO0FBTjJDLEtBQXZEO0FBUUQ7QUFDRixDQWxEQSxHQUFELEM7Ozs7Ozs7QUNBQSx5Qzs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICBjb25zdCB3aW4gPSB3aW5kb3dcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gIFxuICBkb2MuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKVxuICBkb2MuY2xhc3NMaXN0LmFkZCgnanMnKVxuICBcbiAgLy8gRml4IGhlcm8gYmFja2dyb3VuZCBoZWlnaHQgb24gZGVza3RvcFxuICAvLyBjb25zdCBoZXJvRGVza3RvcEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyLWxhcmdlLWJnIHNwYW4nKVxuICBcbiAgLy8gZml4SGVyb0JnSGVpZ2h0KClcbiAgLy8gd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmaXhIZXJvQmdIZWlnaHQpXG4gIC8vIHdpbi5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhIZXJvQmdIZWlnaHQpXG4gIFxuICAvLyBmdW5jdGlvbiBmaXhIZXJvQmdIZWlnaHQgKCkge1xuICAvLyAgIGNvbnN0IGJvZHlIZWlnaHQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRIZWlnaHRcbiAgLy8gICBoZXJvRGVza3RvcEJnLnN0eWxlLmhlaWdodCA9IGAke2JvZHlIZWlnaHR9cHhgXG4gIC8vIH1cbiAgXG4gIC8vIFJldmVhbCBhbmltYXRpb25zXG4gIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnaGFzLWFuaW1hdGlvbnMnKSkge1xuICAgIC8qIGdsb2JhbCBTY3JvbGxSZXZlYWwgKi9cbiAgICBjb25zdCBzciA9IHdpbmRvdy5zciA9IFNjcm9sbFJldmVhbCgpXG4gICAgXG4gICAgc3IucmV2ZWFsKCcuaGVyby10aXRsZSwgLmhlcm8tcGFyYWdyYXBoLCAubmV3c2xldHRlci1mb3JtJywge1xuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBkaXN0YW5jZTogJzQwcHgnLFxuICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuNSwgLTAuMDEsIDAsIDEuMDA1KScsXG4gICAgICBvcmlnaW46ICd0b3AnLFxuICAgICAgaW50ZXJ2YWw6IDE1MFxuICAgIH0pXG4gICAgXG4gICAgc3IucmV2ZWFsKCcuaGVyby1iYWxsJywge1xuICAgICAgZGVsYXk6IDEwMDAsXG4gICAgICBkdXJhdGlvbjogMTQwMCxcbiAgICAgIGRpc3RhbmNlOiAnNDBweCcsXG4gICAgICBlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC41LCAtMC4wMSwgMCwgMS4wMDUpJyxcbiAgICAgIG9yaWdpbjogJ2JvdHRvbScsXG4gICAgICBpbnRlcnZhbDogMjAwXG4gICAgfSlcbiAgICBcbiAgICBzci5yZXZlYWwoJy5oZXJvLWlsbHVzdHJhdGlvbi1icm93c2VyLCAuaGVyby1zcXVhcmVzJywge1xuICAgICAgZGVsYXk6IDQwMCxcbiAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICBkaXN0YW5jZTogJzQwcHgnLFxuICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuNSwgLTAuMDEsIDAsIDEuMDA1KScsXG4gICAgICBvcmlnaW46ICdyaWdodCcsXG4gICAgICBpbnRlcnZhbDogMTUwXG4gICAgfSlcbiAgfVxufSgpKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zYXNzL3RhaWx3aW5kLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9