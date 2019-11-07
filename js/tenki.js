var httpObj = new XMLHttpRequest();
// openweathermapからJSONデータ取得
function tenki() {
 
httpObj.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=Nagoya,jp&cnt=8&appid="+APIkey, true);
httpObj.onload = function () {
    var data = JSON.parse(this.responseText); // JSON形式データを変換
    console.log(data);

    var icon = "<img src='http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png'>"; // お天気アイコン
    console.log(data.list[0].dt_txt)
    // データ整形
    var tag = "<table><p>24時間の天気予報</p><tr>";
    for (var i = 0; i < 8; i++) {
        var time = data.list[i].dt_txt.substr(11, 2);
        tag += "<th>" + time + "時</th>";
    }
    tag += "</tr><tr>"
    for (var i = 0; i < 8; i++) {
        var icon = "<img src='http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon.slice(0,-1) + "d@2x.png'>";
        tag += "<td>" + icon + "</td>"
    }
    tag += "</tr>"
    /*
    var day = ["今日", "明日"];
	var tag = "";
	tag += "<p>" + cityName + "</p>";
	tag += "<table>";
	for(var i=0; i<2; i++){
		var tempMax = Math.floor(Number(data.list[i].temp.max)*10)/10 + " ℃";	// 最高気温
		var tempMin = Math.floor(Number(data.list[i].temp.min)*10)/10 + " ℃";	// 最低気温
    	var icon = "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>";	// お天気アイコン
	    tag += "<tr>";		tag += "<td>" + day[i] + "</td>";
	    tag += "<td>" + icon + "</td>";
	    tag += "<td>最高</td><td>" + tempMax + "</td>";		tag += "<td>最低</td><td>" + tempMin + "</td>";
	    tag += "</tr>";
	}*/
    tag += "</table>";
    var result = document.getElementById("result");
    result.innerHTML = tag;
}
httpObj.send(null);
console.log("refleshed")
}
tenki()
setInterval('tenki()', 360000);
