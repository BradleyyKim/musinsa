// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    origin: 'http://localhost:5502',
    height: '360',
    width: '640',
    videoId: '8VRj9tXu4NI',
    playerVars: {
      autoplay: 1, //자동재생유무
      loop: true,     // 반복재생 유무
      playlist: '8VRj9tXu4NI' //반복 재생할 유튜브 영상 ID 목록 
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}