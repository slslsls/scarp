(function() {
  'use strict';

  var whoa = document.getElementById('whoa');

  whoa.onclick = e => {
    console.log(e.target.id);
  }


})();
