var audio = document.getElementById('myJukebox');

var player = {
  currentSong: 0,
  songs: ["music/song1.mp3", "music/song2.mp3", "music/song3.mp3"],

  //plays audio
  play: function() {
    audio.play();
    audio.loop = true;
  },

  playsong: function(i) {
    this.currentSong = i;
    audio.src = this.songs[this.currentSong];
    this.play();
  },

  //pause track
  pause: function() {
    audio.pause();
  },
  //stops track
  stop: function() {
    audio.pause();
    audio.currentTime = 0;
  },
  //next track
  next: function() {
    this.currentSong++;
    this.currentSong %= this.songs.length;
    audio.src = this.songs[this.currentSong];
    this.play();
  },
  //previous track
  pre: function() {
    this.currentSong--;
    this.currentSong %= this.songs.length - 1;
    audio.src = this.songs[this.currentSong];
    this.play();
  }

};
//first track plays when page loads
window.onload = player.play;