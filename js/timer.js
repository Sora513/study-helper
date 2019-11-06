var starttime = 0;
var endtime = 0;
var time = 0;
var stat2 = false;
var sh, sm, ss, spendhour, spendmin, spendsec = 0;
var spendtime = 0;
var spendtime2 = 0;
sh = 0;
sm = 0;
ss = 0;

function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if (num < 10) {
        ret = "0" + num;
    } else {
        ret = num;
    }
    return ret;
}
$(function () {
    $('#timer').click(function () {
        if (stat2 == false) {
            starttime = new Date();
            stat2 = true;
            $('#timer').text('計測中！');
            $('#timer').css({
                "color": "red",
                "border-left": "solid 18px red"
            });
        } else {
            endtime = new Date();
            time = (endtime - starttime) / 1000 / 60;
            stat2 = false;
            $('#timer').text('勉強時間を計測');
            $('#timer').css({
                "color": "#ff7c5c",
                "border-left": "solid 18px #ff7c5c"
            });
            spendtime2 = parseInt(spendtime) + parseInt(spendtime2);
            sh = Math.floor(spendtime2 / 1000 / 60 / 60);
            sm = Math.floor(spendtime2 % (1000 * 60 * 60) / 1000 / 60);
            ss = Math.floor(spendtime2 % (1000 * 60) / 1000);
            sh = set2fig(sh);
            sm = set2fig(sm);
            ss = set2fig(ss);

            var txt = "合計時間:" + sh + ":" + sm + ":" + ss;
            $('#time2').text(txt);
        }
    })

})
var nowtime

function timer() {
    nowtime = new Date();
    spendtime = nowtime - starttime;
    spendhour = Math.floor(spendtime / 1000 / 60 / 60);
    spendmin = Math.floor(spendtime % (1000 * 60 * 60) / 1000 / 60);
    spendsec = Math.floor(spendtime % (1000 * 60) / 1000);
    spendhour = set2fig(spendhour);
    spendmin = set2fig(spendmin);
    spendsec = set2fig(spendsec);
    if (stat2) {
        var txt = "経過時間:" + spendhour + ":" + spendmin + ":" + spendsec;
        $('#time').text(txt);
    }
    var nowTime = new Date();
    var nowHour = set2fig(nowTime.getHours());
    var nowMin = set2fig(nowTime.getMinutes());
    if (nowHour == 3 && nowMin == 0) {
        spendtime = 0;
        spendtime2 = 0;
        sh = Math.floor(spendtime2 / 1000 / 60 / 60);
        sm = Math.floor(spendtime2 % (1000 * 60 * 60) / 1000 / 60);
        ss = Math.floor(spendtime2 % (1000 * 60) / 1000);
        sh = set2fig(sh);
        sm = set2fig(sm);
        ss = set2fig(ss);
        var txt2 ="経過時間:" + sh + ":" + sm + ":" + ss; 
        var txt = "合計時間:" + sh + ":" + sm + ":" + ss;
        $('#time2').text(txt);
        $('#time').text(txt2)
    }
}

setInterval('timer()', 1000)