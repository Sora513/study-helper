var nowTime,nowYear,nowMonth,nowDate,nowHour,nowMin,nowSec,msg,msg2;
        function set2fig(num) {
            // 桁数が1桁だったら先頭に0を加えて2桁に調整する
            var ret;
            if (num < 10) { ret = "0" + num; }
            else { ret = num; }
            return ret;
        }
        function showClock2() {
            nowTime = new Date();
            nowYear = nowTime.getFullYear();
            nowMonth = set2fig(parseInt(nowTime.getMonth())+1);
            nowDate = set2fig(nowTime.getDate());
            nowHour = set2fig(nowTime.getHours());
            nowMin = set2fig(nowTime.getMinutes());
            nowSec = set2fig(nowTime.getSeconds());
            msg = nowHour + ":" + nowMin + ":" + nowSec;
            //メモリリーク
            //document.getElementById("RTC").innerHTML = msg;
            msg2 = nowYear + "/" + nowMonth + "/" + nowDate;
            //メモリリーク
            //document.getElementById("date").innerHTML = msg2;
            var RTC=$("#RTC");
            var date=$("#date");
            RTC.html(msg);
            date.html(msg2);
            //RTC.html()=null;
            //date.html()=null;
            RTC=null;
            date=null;
            //これもだめ
        }
        setInterval('showClock2()', 1000);