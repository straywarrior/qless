/*
 * overview.js
 * Copyright (C) 2017 StrayWarrior <i@straywarrior.com>
 */

(function($){

  'use strict'

  function updateOverviewQueues() {
    $.ajax({
      url: '/queues.json',
      method: 'GET',
      success: function(data) {
        var status_groups =
          ['running', 'waiting', 'scheduled', 'stalled', 'depends', 'recurring'];
        data.forEach(function(entry) {
          var columns = $('#queue-row-' + entry['name']).children();
          for (var i in status_groups) {
            $(columns[parseInt(i) + 1]).text(entry[status_groups[i]]);
          }
        });
      }
    });
    return;
  }

  setInterval(updateOverviewQueues, 3000);
})( jQuery );
