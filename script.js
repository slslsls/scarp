(function() {
  'use strict';

  $('#project-twitter-sa').load('./project-views/twitter-sentiment-analysis');
  $('#project-in-other-words').load('./project-views/in-other-words');
  $('#project-angular-shopping-cart').load('./project-views/angular-shopping-cart');
  $('#project-sommbuddy').load('./project-views/sommbuddy');
  $('#project-8k-crawler').load('./project-views/8k-crawler');
  $('#project-scarp').load('./project-views/scarp');

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
