import '../scss/style.scss'
import '../scss/common.scss'

import VanillaCalendar, { Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  type: 'multiple',
  months: 2,
  jumpMonths: 1,
  settings: {
    lang: 'define',
    selection: {
      day: 'multiple',
    },
    selected: {
      dates: ['2024-01-12', '2024-02-10'],
    },
  },
  popups: {
    '2024-02-10': {
      modifier: 'vanilla-calendar-day__btn_selected--green',
    },
  },
  locale: {
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнт', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekday: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();

const calendar1 = new VanillaCalendar('#calendar1', options);
calendar1.init();