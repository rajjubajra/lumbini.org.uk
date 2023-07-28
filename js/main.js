//Old browser does not support these tags hence this will solve the issue
document.createElement('article');
document.createElement('section');
document.createElement('aside');
document.createElement('hgroup');
document.createElement('nav');
document.createElement('header');
document.createElement('footer');
document.createElement('figure');
document.createElement('figcaption'); //See above note

function navigation() {
  var navigation = document.getElementsByClassName('mainnav');
  var x = document.getElementById("mob-nav-icon");

  if (x.className === "mob-nav-icon") {
    x.className += " opened";

    for (i = 0; i < navigation.length; i++) {
      navigation[i].className += " opened";
    }
  } else {
    x.className = "mob-nav-icon";

    for (i = 0; i < navigation.length; i++) {
      navigation[i].classList.remove("opened");
    }
  }
} //to get querystring e.g getParameterByName("id") => www.abc.co.uk?id=1


function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
} //Round the figure with two decimal value


function RoundNum(x) {
  var T = Math.pow(10, 2);
  return (Math.round(x * T) / T).toFixed(2);
} //Returns true or false; email validation


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^< ()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

jQuery(document).ready(function ($) {
  $(document).on('click', '.lightboxgallery-gallery-item', function (event) {
    event.preventDefault();
    $(this).lightboxgallery({
      showCounter: true,
      showTitle: true,
      showDescription: true
    });
  });
  $(document).on('click', '.show-loading', function () {
    $("#loading").show();
  });
});
/**
 * @package com_lightboxgallery
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2017 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */

;

(function ($) {
  $.fn.lightboxgallery = function (options) {
    var settings = {
      'showCounter': true,
      'showTitle': true,
      'showDescription': true
    };
    this.each(function () {
      if (options) {
        $.extend(settings, options);
      }

      var item = this;

      var lightboxgallery = function lightboxgallery() {
        this.items = $(item).parent().children();
        this.count = this.items.length - 1;
        this.index = this.items.index(item);
        this.navPrev = '';
        this.navNext = '';
        this.loaded = false;
        this.naturalWidth = 0;
        this.naturalHeight = 0;

        this.init = function () {
          this.modal();
          this.goto(this.index);
          var that = this;
          this.navNext.on('click', function (event) {
            event.preventDefault();
            that.next();
          });
          $(document).on('click', '.lightboxgallery-image', function (event) {
            event.preventDefault();
            that.next();
          });
          $(document).on('click', '.lightboxgallery-modal-wrapper, .lightboxgallery-close', function (event) {
            if (event.target !== this) {
              return;
            }

            event.preventDefault();
            that.close();
          });
          $(document).on('keyup', function (event) {
            if (event.keyCode == 39) {
              event.preventDefault();
              that.next();
            }

            if (event.keyCode == 37) {
              event.preventDefault();
              that.prev();
            }

            if (event.keyCode == 27) {
              event.preventDefault();
              that.close();
            }
          });
          this.navPrev.on('click', function (event) {
            event.preventDefault();
            that.prev();
          });
          $(window).on('resize', function () {
            var dimension = that.resize();
            $('.lightboxgallery-modal').css({
              width: dimension.width,
              height: dimension.height
            });
          });
        };

        this.modal = function () {
          $('<div id="lightboxgallery-modal" class="lightboxgallery-modal-wrapper"><a href="#" class="lightboxgallery-prev"><span></span></a><a href="#" class="lightboxgallery-next"><span></span></a><div class="lightboxgallery-modal"><a href="#" class="lightboxgallery-close lightboxgallery-hidden">&times;</a><div class="lightboxgallery-modal-body"></div></div></div>').appendTo($('body').addClass('lightboxgallery-modal-open'));
          this.modal = $('#lightboxgallery-modal');
          this.navNext = this.modal.find('.lightboxgallery-next');
          this.navPrev = this.modal.find('.lightboxgallery-prev');
        };

        this.close = function () {
          this.index = 0;
          this.loaded = true;
          this.naturalWidth = 0;
          this.naturalHeight = 0;
          $('#lightboxgallery-modal').fadeOut(function () {
            $(this).remove();
          });
          $('.lightboxgallery-modal').animate({
            width: 100,
            height: 100
          }, 300, function () {
            $(this).remove();
            $('body').removeClass('lightboxgallery-modal-open');
          });
        }; // Resize modal window


        this.resize = function () {
          var maxWidth = $(window).width() - 80;
          var maxHeight = $(window).height() - 80;
          var ratio = 0;
          var width = this.naturalWidth;
          var height = this.naturalHeight;

          if (width > maxWidth) {
            ratio = maxWidth / width;
            height = height * ratio;
            width = width * ratio;
          }

          if (height > maxHeight) {
            ratio = maxHeight / height;
            width = width * ratio;
            height = height * ratio;
          }

          return {
            'width': width,
            'height': height
          };
        }; // Go to next


        this.next = function () {
          if (this.index < this.count) {
            this.index = this.index + 1;
          } else {
            this.index = 0;
          }

          this.goto(this.index);
        }; // Go to Prev


        this.prev = function () {
          if (this.index > 0) {
            this.index = this.index - 1;
          } else {
            this.index = this.count;
          }

          this.goto(this.index);
        }; // Go to index


        this.goto = function (index) {
          if (this.loaded === false) {
            var that = this;
            var $item = $(this.items[index]);
            that.loaded = true;
            $('.lightboxgallery-modal-body').html('<div class="lightboxgallery-gallery-loading"></div>');
            var img = $("<img />").attr('src', $item.attr('href')).on('load', function () {
              if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {} else {
                that.naturalWidth = this.naturalWidth;
                that.naturalHeight = this.naturalHeight;
                var dimension = that.resize();
                $('.lightboxgallery-modal').animate({
                  width: dimension.width,
                  height: dimension.height
                }, 300, function () {
                  var galleryHtml = '<div class="lightboxgallery-image-wrapper">';
                  galleryHtml += '<img class="lightboxgallery-image" src="' + img[0].src + '" alt="' + $item.attr('data-alt') + '">';

                  if (settings.showCounter || settings.showTitle && $item.attr('data-title') || settings.showDescription && $item.attr('data-desc')) {
                    if ($item.attr('data-title') || $item.attr('data-description')) {
                      galleryHtml += '<div class="lightboxgallery-image-content">';

                      if (settings.showCounter) {
                        galleryHtml += '<span class="lightboxgallery-gallery-stat">' + (that.index + 1) + ' of ' + (that.count + 1) + '</span>';
                      }

                      if (settings.showTitle && $item.attr('data-title')) {
                        galleryHtml += '<span class="lightboxgallery-image-title">' + $item.attr('data-title') + '</span>';
                      }

                      if (settings.showDescription && $item.attr('data-desc')) {
                        galleryHtml += '<div class="lightboxgallery-image-description">' + $item.attr('data-desc') + '</div>';
                      }

                      galleryHtml += '</div>';
                    }
                  }

                  galleryHtml += '</div>';
                  $('.lightboxgallery-modal-body').html(galleryHtml);
                  that.modal.find('.lightboxgallery-close').removeClass('lightboxgallery-hidden');
                  that.loaded = false;
                });
              }
            });
          }
        };
      };

      new lightboxgallery().init();
    });
  };
})(jQuery);
