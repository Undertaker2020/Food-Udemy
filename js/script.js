import calc from './modules/calc';
      import cards from './modules/cards';
      import forms from './modules/forms';
      import modal from './modules/modal';
      import slider from './modules/slider';
      import tabs from './modules/tabs';
      import timer from './modules/timer';
      import { openModal } from './modules/modal';
window.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
      calc();
      cards();
      forms(modalTimerId, 'form');
      modal('[data-modal]', '.modal', modalTimerId);
      slider({
            container: '.offer__slider',
            slide: '.offer__slide',
            nextArrow: '.offer__slider-next',
            prewArrow: '.offer__slider-prev',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper', 
            field: '.offer_slider-inner'
      });
      tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
      timer('.timer', '2023-10-31');
});

