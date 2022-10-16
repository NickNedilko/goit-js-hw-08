import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

const VIDEO_TIME = 'videoplayer-current-time';

function onPlay({ seconds }) {
  localStorage.setItem(VIDEO_TIME, seconds);
}

setCurrentTime();

function setCurrentTime() {
  if (!localStorage.getItem(VIDEO_TIME)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(VIDEO_TIME));
}
