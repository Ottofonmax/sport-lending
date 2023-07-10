window.addEventListener("DOMContentLoaded", init);
function init() {


$(document).ready(function () {
    $('header .burger_wrapper').click(function () {
        let menuItem = $(this)
        if ($(this).hasClass('active')) {
          $(this).parents('header').find('.navmenu').slideUp(300);
          $(this).parents('header').removeClass('open');
          $(this).parents('body').removeClass('lock');
          setTimeout(function () {
            menuItem.removeClass('active');
          }, 300);
        } else {
          $(this).parents('header').find('.navmenu').slideDown(300);
          $(this).parents('header').addClass('open');
          $(this).parents('body').addClass('lock');
          setTimeout(function () {
            menuItem.addClass('active');
          }, 300);
        }
      });

      $('.acord .acord_title').click(function () {
        let menuItem = $(this)
        if ($(this).hasClass('active')) {
          $(this).parents('.acord').find('.acord_body').slideUp(300);
          $(this).parents('.acord').removeClass('open');
          setTimeout(function () {
            menuItem.removeClass('active');
          }, 300);
        } else {
          $(this).parents('.acord').find('.acord_body').slideDown(300);
          $(this).parents('.acord').addClass('open');
          setTimeout(function () {
            menuItem.addClass('active');
          }, 300);
        }
      });

    let popupBg = document.querySelector('.privacy-popup__bg'); // Фон попап окна
    let popup = document.querySelector('.privacy-popup'); // Само окно
    let openPopupButtons = document.querySelectorAll('.open-privacy-popup'); // Кнопки для показа окна
    let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
    let checkPopupBtn = document.querySelector('.check-popup');
    openPopupButtons.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            popupBg.classList.add('active'); // Добавляем класс 'active' для фона
            popup.classList.add('active'); // И для самого окна
        })
    });
    closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    });
    checkPopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    });
    document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
        if(e.target === popupBg) { // Если цель клика - фот, то:
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        }
    });

  $('.reviews_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]

  });

});
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnaGVhZGVyIC5idXJnZXJfd3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbWVudUl0ZW0gPSAkKHRoaXMpXHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2hlYWRlcicpLmZpbmQoJy5uYXZtZW51Jykuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvY2snKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2hlYWRlcicpLmZpbmQoJy5uYXZtZW51Jykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2hlYWRlcicpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2JvZHknKS5hZGRDbGFzcygnbG9jaycpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQoJy5hY29yZCAuYWNvcmRfdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gJCh0aGlzKVxyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuYWNvcmQnKS5maW5kKCcuYWNvcmRfYm9keScpLnNsaWRlVXAoMzAwKTtcclxuICAgICAgICAgICQodGhpcykucGFyZW50cygnLmFjb3JkJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5hY29yZCcpLmZpbmQoJy5hY29yZF9ib2R5Jykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5hY29yZCcpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxldCBwb3B1cEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXZhY3ktcG9wdXBfX2JnJyk7IC8vINCk0L7QvSDQv9C+0L/QsNC/INC+0LrQvdCwXHJcbiAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpdmFjeS1wb3B1cCcpOyAvLyDQodCw0LzQviDQvtC60L3QvlxyXG4gICAgbGV0IG9wZW5Qb3B1cEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1wcml2YWN5LXBvcHVwJyk7IC8vINCa0L3QvtC/0LrQuCDQtNC70Y8g0L/QvtC60LDQt9CwINC+0LrQvdCwXHJcbiAgICBsZXQgY2xvc2VQb3B1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpOyAvLyDQmtC90L7Qv9C60LAg0LTQu9GPINGB0LrRgNGL0YLQuNGPINC+0LrQvdCwXHJcbiAgICBsZXQgY2hlY2tQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1wb3B1cCcpO1xyXG4gICAgb3BlblBvcHVwQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHsgLy8g0J/QtdGA0LXQsdC40YDQsNC10Lwg0LLRgdC1INC60L3QvtC/0LrQuFxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IC8vINCU0LvRjyDQutCw0LbQtNC+0Lkg0LLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNC5INC90LAg0LrQu9C40LpcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQtNC10YTQvtC70YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1INCx0YDQsNGD0LfQtdGA0LBcclxuICAgICAgICAgICAgcG9wdXBCZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgJ2FjdGl2ZScg0LTQu9GPINGE0L7QvdCwXHJcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAvLyDQmCDQtNC70Y8g0YHQsNC80L7Qs9C+INC+0LrQvdCwXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgY2xvc2VQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4geyAvLyDQktC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0L3QsCDQutGA0LXRgdGC0LjQulxyXG4gICAgICAgIHBvcHVwQmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IC8vINCj0LHQuNGA0LDQtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgSDRhNC+0L3QsFxyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyAvLyDQmCDRgSDQvtC60L3QsFxyXG4gICAgfSk7XHJcbiAgICBjaGVja1BvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7IC8vINCS0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQvdCwINC60YDQtdGB0YLQuNC6XHJcbiAgICAgICAgcG9wdXBCZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgLy8g0KPQsdC40YDQsNC10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGBINGE0L7QvdCwXHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IC8vINCYINGBINC+0LrQvdCwXHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy8g0JLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC90LAg0LLQtdGB0Ywg0LTQvtC60YPQvNC10L3RglxyXG4gICAgICAgIGlmKGUudGFyZ2V0ID09PSBwb3B1cEJnKSB7IC8vINCV0YHQu9C4INGG0LXQu9GMINC60LvQuNC60LAgLSDRhNC+0YIsINGC0L46XHJcbiAgICAgICAgICAgIHBvcHVwQmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IC8vINCj0LHQuNGA0LDQtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgSDRhNC+0L3QsFxyXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgLy8g0Jgg0YEg0L7QutC90LBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgJCgnLnJldmlld3Nfc2xpZGVyJykuc2xpY2soe1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcbn07Il0sImZpbGUiOiJpbmRleC5qcyJ9
