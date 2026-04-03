// Template Name: Blessed
// Template URL: https://techpedia.co.uk/template/blessed
// Description: Blessed Wedding HTML Template
// Version: 1.0.0
(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.initializeSlick();
      Init.hamburgerMenu();
      Init.countdownInit(".countdown", "2024/08/01");
      Init.wishFormHandler();
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    preloader: function () {
      setTimeout(function () { $('#preloader').hide('slow') }, 2000);
    },
    
    initializeSlick: function (e) {

      if ($(".events-slider").length) {
        $(".events-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          fade: false,
          draggable: true,
          waitForAnimate: false,
        });
      }

      if ($(".blogs-slider").length) {
        $(".blogs-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          cssEase: 'linear',
          draggable: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    },
    hamburgerMenu: function () {
      if ($(".hamburger-menu").length) {
        $('.hamburger-menu').on('click', function() {
          $('.bar').toggleClass('animate');
          $('.mobile-navar').toggleClass('active');
          return false;
        })
        $('.has-children').on ('click', function() {
             $(this).children('ul').slideToggle('slow', 'swing');
             $('.icon-arrow').toggleClass('open');
        });
      }
    },
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              '<li><h4 class="number">%D</h4><h5 class="number-text">Days</h5></li>\
              <li><h4 class="number">%H</h4><h5 class="number-text">Hrs</h5></li>\
              <li><h4 class="number">%M</h4><h5 class="number-text">Min</h5></li>\
              <li><h4 class="number">%S</h4><h5 class="number-text">Sec</h5></li>'
            )
          );
        });
      }
    },
    wishFormHandler: function () {
      var wishForm = $("#wish-form");
      if (wishForm.length) {
        wishForm.on("submit", function (e) {
          e.preventDefault();
          
          var name = $("#wish-name").val().trim();
          var email = $("#wish-email").val().trim();
          var message = $("#wish-message").val().trim();
          var alertDiv = $("#wish-message-alert");
          
          if (!name || !message) {
            alertDiv.removeClass("success").addClass("error");
            alertDiv.html("Vui lòng điền đầy đủ tên và lời chúc!");
            alertDiv.fadeIn();
            setTimeout(function() {
              alertDiv.fadeOut();
            }, 5000);
            return false;
          }
          
          var wishData = {
            name: name,
            email: email || "Không có email",
            message: message,
            date: new Date().toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })
          };
          
          Init.displayWish(wishData);
          
          alertDiv.removeClass("error").addClass("success");
          alertDiv.html("Cảm ơn bạn đã gửi lời chúc! Chúng tôi rất trân trọng.");
          alertDiv.fadeIn();
          
          wishForm[0].reset();
          
          setTimeout(function() {
            alertDiv.fadeOut();
          }, 5000);
          
          return false;
        });
      }
    },
    displayWish: function (wishData) {
      var wishesDisplay = $("#wishes-display");
      if (wishesDisplay.length) {
        var wishCard = $('<div class="wish-card"></div>');
        wishCard.append(
          '<div class="wish-header">' +
            '<div class="wish-name">' + wishData.name + '</div>' +
            '<div class="wish-date">' + wishData.date + '</div>' +
          '</div>' +
          '<p class="wish-message">' + wishData.message + '</p>'
        );
        
        wishesDisplay.prepend(wishCard);
        wishesDisplay.fadeIn();
        
        $("html, body").animate({
          scrollTop: wishesDisplay.offset().top - 100
        }, 500);
      }
    },
  }
  Init.i();
})(window, document, jQuery);





