# 使用方法
main.htmlと同じディレクトリに"config.js"を追加してください。<br>
その中に<br>
```js
var city = "CityName,CountryCode";
var APIkey = "Read README.md";
var playlistid="Read README.md";
```
を記述してください。<br>

例)
```js
var city = "Tokyo,jp";
var APIkey = "abcdefghijklmn...";//取得方法は注意に記述
var playlistid="PL〇〇〇〇";//取得方法は注意に記述
```

main.htmlを開くと実行できます。<br>
ボタンを押すと各種機能が使えます。<br>
デフォルトでは午前3時0分台に、合計時間のリセットを行っています。

# 注意
使用する際は**必ずtenki.jsのAPIkeyを追加してください！**<br>
[ここからOpenWeatherMapにサインアップして取得できます。](https://home.openweathermap.org/users/sign_up)<br>

BGMは、Youtubeのプレイリストを参照しています。<br>
プレイリストIDは、youtubeのプレイリストのURLの"&list="以降のPLから始まる文字列です。<br>
