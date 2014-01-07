(function () {

  var $root = $('.pet-shop')
    , petTemplate = $('#templates .pet').html()
  ;

  // This uses a CONSTRUCTOR FUNCTION so we can create
  // multiple presenters!
  window.PetPresenter = function (pet) {
    // Instead of grabbing a pet on the page,
    // we are going to to *render* one ourselves
    var petHtml = $.render(petTemplate, pet);

    // Here we convert the new html into real HTML elements
    $petRoot = $(petHtml);
    // And then add our new pet div to the page
    $root.append($petRoot);

    // At this point our new pet html is on the page. Now
    // we want to create new presenters and assign them to
    // different parts of our new pet html.

    // First we create a set of comments for just this pet.
    // Both presenters we are about to create will use these comments
    var petComments = new Comment();

    // Now we create our form presenter, passing it two things:
    // 1. The Comment model instance to use
    // 2. The element (root) that the new presenter is assigned to
    //
    // The CommentFormPresenter constructor receives this object as
    // a parameter called `options` (see comment-form.js)
    var commentForm = new CommentFormPresenter({
      comments: petComments,
      root: $petRoot.find('form')
    });

    // Next we create a presenter for this pet's list of comments,
    // using the same type of arguments as above.
    var commentList = new CommentListPresenter({
      comments: petComments,
      root: $petRoot.find('.comments')
    });

    var petScore = new PetScorePresenter({
      comments: petComments,
      root: $petRoot.find('.total-like-count')
    });

    // Initialize with a single comment for easier "like" testing
    petComments.create({
      author: 'Bob',
      message: "Anytime I close the bathroom door..."
    });
  };


})();
