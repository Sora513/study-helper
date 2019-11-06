var playlistid="PLcdlKSgmp8IwMpM5GyfcxdpjobDWB8XE-"
var playerReady = false;
//IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(
        'player', // 埋め込む場所の指定
        {
            width: 640, // プレーヤーの幅
            height: 390, // プレーヤーの高さ
            events: {
                'onReady': onPlayerReady // プレーヤーの準備ができたときに実行
            }
        }
    );
}

// onReadyのコールバック関数
function onPlayerReady() {
    playerReady = true;
    ytPlayer.cuePlaylist({
        'listType': 'playlist',
        'list': playlistid,
        'index': 0,
        'startSeconds': 0,
        'suggestedQuality': 'small',
        'loop':1,
    });
}
var stat = false;
$(function () {
    $('#music').click(function () {
        // playerReadyがtrueのときだけ実行
        if (playerReady) {
            if (stat == false) {
                ytPlayer.playVideo();
                stat = true;
                $('#music').text('BGMを停止');
                $('#music').css({
                    "color": "red",
                    "border-left":"solid 18px red"
                })
            } else {
                ytPlayer.pauseVideo();
                stat = false;
                $('#music').text('BGMを再生');
                $('#music').css({
                    "color": "#ff7c5c",
                    "border-left":"solid 18px #ff7c5c"
                })
            }
        }
    });
});