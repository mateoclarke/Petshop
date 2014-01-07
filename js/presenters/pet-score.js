(function () {

  var petScoreTemplate = $('#templates .pet').html();

  var totalLikeCount = 0

  window.PetScorePresenter = function (options) {

    var $root = options.root;
    var score = options.score;

      // // // // // // //
     // View Listeners //
    // // // // // // //

    $root.on('click', '.like', function (e) {
      e.preventDefault();
      var id = $(this).closest('.comment').data('id');
      score.like(id);
    });

      // // // // // // //
     // Model Listeners /
    // // // // // // //

    score.on('create', function (newComment) {
      var newScoreHtml = $.render(petScoreTemplate, newComment);
      $root.append(newScoreHtml);
    });

    score.on('like', function(comment) {
      totalLikeCount += 1;
      $root.text(totalLikeCount);
    });
  };

})();
