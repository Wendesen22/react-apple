import $ from 'jquery'

$(document).on("click", ".footer-links-wrapper h3", function () {
    if ($(window).width() <= 768) {
      $(this).next("ul").slideToggle();
      $(this).toggleClass("expanded");
      console.log("screen width less than 768");
    } else console.log("greater than 768");
  });
  $(window).on("resize", () => {
    window.location.reload(false);
  });

//   .footer-links-wrapper h3.expanded:after {
//     font-family: "FontAwesome";
//     content: "\0058";
//     padding-left: 10px;
//     position: absolute;
//     right: 25px;
//   }