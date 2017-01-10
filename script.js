(function() {
  'use strict';

  var projectHeights = {
    'twitter-sa': '1500px'
  }

  $('.project').on('click', e => {
    let targetId = e.target.parentElement.id;
    let $targetProject = $('#detail-' + targetId.slice(8));

    if ($targetProject[0].style.height != 0 && $targetProject[0].style.height != '0px') {
      $targetProject[0].style.height = '0px';
    } else {
      $targetProject[0].style.height = 'auto';
    }
  });
})();
