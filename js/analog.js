window.addEventListener("load", init);

function init() {

    // Stageオブジェクトを作成します
    var stage = new createjs.Stage("analog");

    var startround = 0;
    var endround = Math.PI * 2 / 60 * parseInt(nowSec);
    var startround2 = 0;
    var endround2 = Math.PI * 2 / 60 * parseInt(nowMin);
    var startround3 = 0;
    var endround3 = Math.PI * 2 / 24 * parseInt(nowHour);
    // 円を作成します
    var shape = new createjs.Shape();
    shape.graphics.beginStroke("DarkRed"); // 赤色で描画するように設定
    shape.graphics.setStrokeStyle(60);
    shape.graphics.arc(0, 0, 350, 0, endround);
    shape.x = 400; // X 座標 200px の位置に配置
    shape.y = 400; // Y 座標 200px の位置に配置
    shape.rotation = -90;
    console.log(shape.rotation);
    stage.addChild(shape); // 表示リストに追加
    // 円を作成します
    var shape2 = new createjs.Shape();
    shape2.graphics.beginStroke("Lime"); // 赤色で描画するように設定
    shape2.graphics.setStrokeStyle(50);
    shape2.graphics.arc(0, 0, 270, 0, endround2);
    shape2.x = 400; // X 座標 200px の位置に配置
    shape2.y = 400; // Y 座標 200px の位置に配置
    shape2.rotation = -90;
    stage.addChild(shape2); // 表示リストに追加

    // 円を作成します
    var shape3 = new createjs.Shape();
    shape3.graphics.beginStroke("dodgerblue"); // 赤色で描画するように設定
    shape3.graphics.setStrokeStyle(50);
    shape3.graphics.arc(0, 0, 195, 0, endround3);
    shape3.x = 400; // X 座標 200px の位置に配置
    shape3.y = 400; // Y 座標 200px の位置に配置
    shape3.rotation = -90;
    stage.addChild(shape3); // 表示リストに追加
    toween = function () {

        nowTime = new Date();
        nowHour = set2fig(nowTime.getHours());
        nowMin = set2fig(nowTime.getMinutes());
        nowSec = set2fig(nowTime.getSeconds());
        if (Math.abs(2 * Math.PI - endround) < 0.01 && Math.abs(2 * Math.PI - startround - Math.PI / 30) < 0.01) {
            startround = 2 * Math.PI;
        } else if (Math.abs(2 * Math.PI - endround) < 0.01 && Math.abs(2 * Math.PI - startround) < 0.01) {
            startround = 0.001
        } else if (startround == 0.001 && Math.abs(2 * Math.PI - endround) < 0.01) {
            startround = 0;
            endround = Math.PI / 15;
        } else if (endround == 0 && startround == 0) {
            endround = Math.PI / 30;
        } else if (Math.abs(2 * Math.PI - endround - Math.PI / 30) < 0.01 && startround == 0) {
            endround = 2 * Math.PI
            startround = 0;
        } else if (startround == 0 && Math.abs(2 * Math.PI - endround) < 0.01) {
            startround = Math.PI / 30;
        } else if (startround == 0) {
            endround = Math.PI * 2 / 60 * (parseInt(nowSec));
        } else if (Math.abs(2 * Math.PI - endround) < 0.01) {
            startround = Math.PI * 2 / 60 * (parseInt(nowSec));
        }
        createjs.Tween.get(shape.graphics.command).to({
            startAngle: startround,
            endAngle: endround
        }, 800, createjs.Ease.cubicInOut);

        if (Math.abs(2 * Math.PI - endround2) < 0.01 && Math.abs(2 * Math.PI - startround2 - Math.PI / 30) < 0.01) {
            if (nowMin == "00") {
                startround2 = 2 * Math.PI;
            }
        } else if (Math.abs(2 * Math.PI - endround2) < 0.01 && Math.abs(2 * Math.PI - startround2) < 0.01) {
            if (nowMin == "00") {
                startround2 = -0.001;
            }
        } else if (startround2 == -0.001 && Math.abs(2 * Math.PI - endround2) < 0.01) {
            startround2 = 0;
            endround2 = 0;
        } else if (endround2 == 0 && startround2 == 0) {
            endround2 = Math.PI * 2 / 60 * parseInt(nowMin);
        } else if (Math.abs(2 * Math.PI - endround2 - Math.PI / 30) < 0.01 && startround2 == 0) {
            endround2 = 2 * Math.PI
            startround2 = 0;
        } else if (startround2 == 0 && Math.abs(2 * Math.PI - endround2) < 0.01) {
            startround2 = Math.PI / 30;
        } else if (startround2 == 0) {
            endround2 = Math.PI * 2 / 60 * (parseInt(nowMin));
        } else if (Math.abs(2 * Math.PI - endround2) < 0.01) {
            startround2 = Math.PI * 2 / 60 * (parseInt(nowMin));
        }
        createjs.Tween.get(shape2.graphics.command).to({
            startAngle: startround2,
            endAngle: endround2
        }, 800, createjs.Ease.cubicInOut);

        if (Math.abs(2 * Math.PI - endround3) < 0.01 && Math.abs(2 * Math.PI - startround3 - Math.PI / 30) < 0.01) {
            if (nowHour == "00") {
                startround2 = 2 * Math.PI;
            }
        } else if (Math.abs(2 * Math.PI - endround3) < 0.01 && Math.abs(2 * Math.PI - startround3) < 0.01) {
            if (nowHour == "00") {
                startround3 = -0.001;
            }
        } else if (startround3 == -0.001 && Math.abs(2 * Math.PI - endround3) < 0.01) {
            startround3 = 0;
            endround3 = 0;
        } else if (endround3 == 0 && startround3 == 0) {
            endround3 = Math.PI * 2 / 24 * parseInt(nowHour);
        } else if (Math.abs(2 * Math.PI - endround3 - Math.PI / 30) < 0.01 && startround3 == 0) {
            endround3 = 2 * Math.PI
            startround3 = 0;
        } else if (startround3 == 0 && Math.abs(2 * Math.PI - endround3) < 0.01) {
            startround3 = Math.PI / 12;
        } else if (startround3 == 0) {
            endround3 = Math.PI * 2 / 24 * (parseInt(nowHour));
        } else if (Math.abs(2 * Math.PI - endround3) < 0.01) {
            startround3 = Math.PI * 2 / 24 * (parseInt(nowHour));
        }
        createjs.Tween.get(shape3.graphics.command).to({
            startAngle: startround3,
            endAngle: endround3
        }, 800, createjs.Ease.cubicInOut);


        // Stageの描画を更新します
        stage.update();
        createjs.Ticker.addEventListener("tick", handleTick);

        function handleTick() {
            stage.update();
        }
    }

    setInterval('toween()', 1000);
}