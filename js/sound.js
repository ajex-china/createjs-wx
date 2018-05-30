/**
 * Created by ajex from http://www.ajexoop.com
 * versions 0.0.2
 */
var Sound = {};
Sound.init = function ()
{
  Sound.bgmAudio = new Audio()
  Sound.bgmAudio.loop = true
  Sound.bgmAudio.src = 'sounds/bgm.mp3'

  Sound.addSpeedAudio = new Audio()
  Sound.addSpeedAudio.loop = true
  Sound.addSpeedAudio.src = 'sounds/addSpeedSound.mp3'

  Sound.boxAudio = new Audio()
  Sound.boxAudio.src = 'sounds/box.mp3'

  Sound.diciAudio = new Audio()
  Sound.diciAudio.src = 'sounds/diciSound.mp3'

  Sound.huoAudio = new Audio()
  Sound.huoAudio.src = 'sounds/huoSound.mp3'

  Sound.mutongAudio = new Audio()
  Sound.mutongAudio.src = 'sounds/mutongSound.mp3'

  Sound._11 = new Audio();
  Sound._11.src = 'sounds/_11.mp3'

  Sound._33 = new Audio();
  Sound._33.src = 'sounds/_33.mp3'

  // Sound.playBgm();


}
Sound.playBgm = function ()
{
  Sound.bgmAudio.currentTime = 0
  Sound.bgmAudio.play()
}
Sound.stopBgm = function () {
  Sound.bgmAudio.pause()
}
Sound.playAddSpeed = function playAddSpeed() {
  Sound.addSpeedAudio.currentTime = 0
  Sound.addSpeedAudio.play();
}
Sound.stopAddSpeed = function stopAddSpeed() {
  Sound.addSpeedAudio.pause();
}
Sound.playCi = function playCi() {
  Sound.diciAudio.play();
}
Sound.playHuo = function playHuo() {
  Sound.huoAudio.play();
}
Sound.playTong = function playTong() {
  Sound.mutongAudio.play();
}
Sound.playBox = function playBox() {
  Sound.boxAudio.play();
}
window.Sound = Sound;
window.playSound = function (id)
{
  Sound[id].play();
}