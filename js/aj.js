$(function() {
  $("#info1").typed({
    strings: ["私の名前は アドリエル・ジャスティン <br/><br/> 年齢：19歳 <br/><br/>ニックネーム : AJ", "My name is<br/> Adriel Justin. <br/>Age: 19. <br/><br/> Nickname: AJ"],
    typeSpeed: 100
  });
});
$(function() {
  $("#info2").typed({
    strings: ["学生の DLS-CSB <br/><br/> 勉強  BS-Information Systems. ", "Student of DLS-CSB. <br/> Taking up the course <br/><br/> BS-Information Systems. "],
    typeSpeed: 100
  });
});

$(function() {
  $("#goals").typed({
    strings: ["My goals in life is to survive and become rich.",
      "Really? is that Really your goal?", "No.",
      "My goal in life is to invent anything that would help change the world."
    ],
    typeSpeed: 75
  });
});


$(function() {
  $("#Portfoliohead").typed({
    strings: ["ポートフォリオ","Portfolio"],
    typeSpeed: 200
  });
});

$(function() {
  $("#headeraj").typed({
    strings: ["アドリエル・ジャスティン・ティチョン", "Adriel Justin Ticzon"],
    typeSpeed: 50
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).position().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
