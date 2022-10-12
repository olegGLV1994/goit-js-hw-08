import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const LOCAL_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    console.log(data);
    localStorage.setItem(LOCAL_KEY, data.seconds);
  }, 500)
);
player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);
