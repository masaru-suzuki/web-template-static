!(function () {
  'use strict';
  var o = function (o, n) {
      if (o[n] && 'function' == typeof o[n])
        try {
          o[n]();
        } catch (o) {
          console.error(o);
        }
    },
    n = {
      Common: function () {
        console.log('common');
      },
      Home: function () {
        console.log('home fn'), console.log('home fn 2');
      },
    },
    e = function () {
      !(function (n) {
        o(n, 'Common');
        var e = document.body.dataset.app;
        void 0 !== e && o(n, e);
      })(n);
    };
  function t() {
    document.removeEventListener('DOMContentLoaded', t), window.removeEventListener('load', t), e();
  }
  'loading' !== document.readyState ? window.setTimeout(e) : (document.addEventListener('DOMContentLoaded', t), window.addEventListener('load', t));
})();
