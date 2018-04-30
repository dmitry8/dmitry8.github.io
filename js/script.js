    /* Carusel */
    var width = 270; // ширина изображения
    var count = 3; // количество изображений
    var gutter = 150 // margin между карточками

    var carousel = document.querySelector('.pets__carusel');
    var list = carousel.querySelector('.pets__list');
    var listElems = carousel.querySelectorAll('.pets__item');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.pets__button--prev').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.pets__button--next').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position - gutter + 'px';
    };

    /* Popup */
    var popup = document.querySelector('.modal-pet');
    var closeButton = document.querySelector('.modal-pet__button');
    var linkPopupOpen = document.querySelectorAll('.pets__learn-more');

    closeButton.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.remove('modal-pet--show');
      popup.classList.add('modal-pet--close');
    })

    for (var i = 0; i < linkPopupOpen.length; i++) {
      linkPopupOpen[i].addEventListener('click', function (event) {
        event.preventDefault();
        popup.classList.add('modal-pet--show');
      })
    }
