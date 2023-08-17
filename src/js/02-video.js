
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('play', function () {
  console.log('Play');
});

player.on('pause', function () {
  console.log('Pause');
});

player.on(
  'timeupdate',
  throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }),
  1000
);

const theme = localStorage.getItem('videoplayer-current-time') || 0;
console.log(theme);

player.setCurrentTime(theme);