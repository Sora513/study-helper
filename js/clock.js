
        function set2fig(num) {
            // 桁数が1桁だったら先頭に0を加えて2桁に調整する
            var ret;
            if (num < 10) { ret = "0" + num; }
            else { ret = num; }
            return ret;
        
        function showClock2() {
            var nowTime = new Date();
            var nowYear = nowTime.getFullYear();
            var nowMonth = set2fig(parseInt(nowTime.getMonth())+1);
            var nowDate = set2fig(nowTime.getDate());
            var nowHour = set2fig(nowTime.getHours());
            var nowMin = set2fig(nowTime.getMinutes());
            var nowSec = set2fig(nowTime.getSeconds());
            var msg = nowHour + ":" + nowMin + ":" + nowSec;
            document.getElementById("RTC").innerHTML = msg;
            var msg2 = nowYear + "/" + nowMonth + "/" + nowDate;
            document.getElementById("date").innerHTML = msg2;
        }
        setInterval('showClock2()', 1000);
