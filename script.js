(function() {
  'use strict';

  $('.project').on('click', e => {
    let parentId = e.target.parentElement.id;
    let $target = $('#' + parentId);

    $('#displayed-project').remove();
    $target.append('<embed id="displayed-project" src="./project-views/' + parentId + '.html">');
  });


})();
