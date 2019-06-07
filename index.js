var cardContainer = $('.card-container');
var submit = $('.submit-btn');
var drink = $(".drink");
var entree = $(".entree");
var side = $(".side");
var sauce = $(".sauce");
)

submit.on("click", orderFood);

function orderFood() {
  var name = $('.name').val();

  cardContainer.append(`
    <div class = "order"> You ordered ${drink} ${.entree}, ${.side}, and ${.sauce}. Thank you! </div>
  `);

  $('.name').val("");

}
