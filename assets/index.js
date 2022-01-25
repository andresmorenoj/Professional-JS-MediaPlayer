import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js'

const video = document.querySelector("video");
const buttonPlayPause = document.querySelector(".playPause");
const buttonMuteUnmute = document.querySelector(".muteUnmute")

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

buttonPlayPause.onclick = () => {
  /* player.media.paused ? player.play() : player.pause(); */
  player.tooglePlay();
};

buttonMuteUnmute.onclick = () => {
  player.toogleMute();
}