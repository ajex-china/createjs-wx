/**
 * Created by ajex from http://www.ajexoop.com
 * versions 0.0.2
 */
var lib = window.lib;
var images = window.images;
var Service
var loadingView, gameStartView, gameView, pauseView, selectView, endView, currentView, mainCar, daojishi,container;

//View
var View = {};
View.init = function init(con)
{
  window.gameStartView = new View.GameStartView();
  window.gameView = new View.GameView();
  //    selectView = new View.SelectAreaView();
  window.daojishi = new lib.daojishi();
  window.pauseView = new View.PauseView();
  window.endView = new View.EndView();

  gameStartView = window.gameStartView;
  gameView = window.gameView;
  daojishi = window.daojishi;
  pauseView = window.pauseView;
  endView = window.endView;


  Service = window.Service;
  container = con;
}
View.changeView = function changeView(view, parent, completeFunction, parameterList) {
  if (currentView) {
    if (currentView.parent) {
      currentView.parent.removeChild(currentView);
      parent.addChild(view);
      currentView = view;
    }
  }
  else {
    parent.addChild(view);
    currentView = view;
  }
};
//LoadingView
(function () {
  "use strict";
  function LoadingView() {
    this.Container_constructor();

    this.back = new loadlib.loadingViewAssets();
    this.addChild(this.back);
    //        this.back.bar.gotoAndStop(0);
  }
  var p = createjs.extend(LoadingView, createjs.Container);
  View.LoadingView = createjs.promote(LoadingView, "Container");
}());
//SelectAreaView
(function () {
  "use strict";
  function SelectAreaView() {
    this.Container_constructor();

    this.back = new lib.selectArea();
    this.addChild(this.back);
    this.back.btn.addEventListener("click", function () {
      var index = selectArea.selectedIndex;
      var value = selectArea.options[index].value;
      if (value == 0) {
        alert("请选择大区！");
        return;
      }
      else {
        Service.bindingArea(value, function (data) {
          if (data.resultCode == 1) {
            alert("绑定成功");
            selectView.hide();
            //                        View.changeView(gameView,container);
            //                        gameView.daojishiStart();
            View.changeView(gameStartView, container);
            gameStartView.init();
          }
          else {
            alert(data.resultInfo);
          }
        })
      }
    })
    selectArea.addEventListener("onchange", function (event) {
      var index = selectArea.selectedIndex;
      var value = selectArea.options[index].value;
      Service.QueryName(value, function (data) {
        if (data.resultCode == 1) {
          this.back.nameTxt.text = data.NickName;
        }
        else {
          alert(data.resultInfo)
        }
      })
    })
  }
  var p = createjs.extend(SelectAreaView, createjs.Container);
  p.show = function () {
    selectArea.style.display = "block";
  }
  p.hide = function () {
    selectArea.style.display = "none";
  }
  View.SelectAreaView = createjs.promote(SelectAreaView, "Container");
}());
//GameStartView
(function () {
  "use strict";
  function GameStartView() {
    this.Container_constructor();
    this.back = new lib.startViewAssets();
    this.addChild(this.back);
    //        this.back.listBtn.addEventListener("click",p.listHandler);
    this.back.soulBtn.addEventListener("click", p.soulHandler);
    this.back.weixinBtn.addEventListener("click", p.weixinHandler);
    this.back.startBtn.addEventListener("click", p.checkStartHandler);
    this.back.zhuxiaoBtn.addEventListener("click", p.zhuxiaoHandler);
  }
  var p = createjs.extend(GameStartView, createjs.Container);
  p.init = function init() {
    this.back.soulBtn.mouseEnabled = false;
    this.back.weixinBtn.mouseEnabled = false;
    this.back.startBtn.mouseEnabled = false;
    this.back.zhuxiaoBtn.mouseEnabled = false;
    this.back.soulBtn.mouseChildren = false;
    this.back.weixinBtn.mouseChildren = false;
    this.back.startBtn.mouseChildren = false;
    this.back.zhuxiaoBtn.mouseChildren = false;
    var _this = this;
    setTimeout(function () {
      _this.back.soulBtn.mouseEnabled = true;
      _this.back.weixinBtn.mouseEnabled = true;
      _this.back.startBtn.mouseEnabled = true;
      _this.back.zhuxiaoBtn.mouseEnabled = true;
      _this.back.soulBtn.mouseChildren = true;
      _this.back.weixinBtn.mouseChildren = true;
      _this.back.startBtn.mouseChildren = true;
      _this.back.zhuxiaoBtn.mouseChildren = true;
    }, 1000)
    currentView = gameStartView;
    container.addChild(gameStartView);
    gameStartView.statusChange("login");
    // $('#popBottom').css("display", "none");
    // Service.init(function (data) {
    //   console.log("init")
    //   gameid = data.gameid;
    //   numid = data.numid;
    //   wxflag = data.wxflag;

    //   if (typeof gameid == 'undefined') {
    //     currentView = gameStartView;
    //     container.addChild(gameStartView);
    //     gameStartView.statusChange("login");
    //   }
    //   //            else if(data.areaid == 0)
    //   //            {
    //   //                View.changeView(selectView,container);
    //   //                selectView.show();
    //   //            }
    //   else {
    //     GameConfig.gameType = gameid;
    //     currentView = gameStartView;
    //     container.addChild(gameStartView);
    //     gameStartView.statusChange("start");
    //   }
    //   if (typeof numid != 'undefined') {
    //     gameStartView.back.txt.text = numid.toString();
    //   }
    // })
  }
  p.listHandler = function listHandler(event) {
    cbsRanklist.showRankbox(1);
  }
  p.zhuxiaoHandler = function zhuxiaoHandler(event) {
    window.location.href = Service.zhuxiaoURL;
  }
  p.weixinHandler = function weixinHandler(event) {
    console.log("start")
    p.gameStartHandler()
    //        window.open("http://testat.17m3cdn.com/17m3/mobile/h5game/20151110/zhandoumm/auth.php");
  }
  p.checkStartHandler = function checkStartHandler(event) {
    window.isServiceStartGame = true;
    p.gameStartHandler();
  }
  p.gameStartHandler = function gameStartHandler(event) {
    View.changeView(gameView, container);
    gameView.daojishiStart();
  }
  p.soulHandler = function soulHandler(event) {
    wx.showModal({
      title: '抱歉',
      content: '对不起，暂不支持！',
      success: function (res) {
        // if (res.confirm) {
        //   wx.closeModal()
        // }
      }
    })
    return;
    try {
      if (mslogin) {
        mslogin.login();
      }
    }
    catch (error) {
      console.log("没有登录文件")
    }
  }
  p.statusChange = function statusChange(type) {
    if (type == "login") {
      gameStartView.back.startBtn.visible = false;
      gameStartView.back.zhuxiaoBtn.visible = false;
      gameStartView.back.txt.visible = false;
      gameStartView.back.soulBtn.visible = true;
      gameStartView.back.weixinBtn.visible = true;
    }
    else {
      gameStartView.back.startBtn.visible = true;
      gameStartView.back.zhuxiaoBtn.visible = true;
      gameStartView.back.txt.visible = true;
      gameStartView.back.soulBtn.visible = false;
      gameStartView.back.weixinBtn.visible = false;
    }
  }
  View.GameStartView = createjs.promote(GameStartView, "Container");
}());
//Map
(function () {
  "use strict";
  function Map(map) {
    this.Container_constructor();
    p.map = map;
    this.addChild(p.map);
  }
  var p = createjs.extend(Map, createjs.Container);
  p.width = 750;
  p.height = 1300;
  View.Map = createjs.promote(Map, "Container");
}());
//GameMap
(function () {
  "use strict";
  function GameMap() {
    this.Container_constructor();

    //        this.back = new lib.home();
    //        this.addChild(this.back);
  }
  var p = createjs.extend(GameMap, createjs.Container);
  p.currentMap;//现在的地图
  p.nextMap;//下一张地图（用作移动地图）
  p.readyMap;//用作切换不同地图时的准备地图
  p.destoryMapList = [];
  p.readyMapClass;
  p.initMap = function initMap(mapCls, width, height) {
    p.currentMap = new View.Map(new mapCls());
    p.nextMap = new View.Map(new mapCls());
    p.readyMap = new View.Map(new mapCls());
    p.nextMap.y = - 1300;
    p.readyMap.y = -1300 * 2;
    this.addChild(p.currentMap);
    this.addChild(p.nextMap);
    this.addChild(p.readyMap);
  }
  p.changeMap = function changeMap(mapCls) {
    p.readyMapClass = mapCls;
  }
  p.mapMove = function mapMove(num) {
    p.readyMap.y += num;
    p.nextMap.y += num;
    p.currentMap.y += num;
    var bu;
    if (p.currentMap.y >= 1300) {
      bu = p.currentMap.y - 1300//像素填补
      p.currentMap.y = -1300 * 2 + bu;
      var obj = p.currentMap;
      p.currentMap = p.nextMap;
      p.nextMap = p.readyMap;
      p.readyMap = obj;
    }

    if (GameConfig) {
      GameConfig.allDistance += num;
      gameView.distanceUI.txt.text = parseInt(GameConfig.allDistance / 20) + "m";
    }
  }
  View.GameMap = createjs.promote(GameMap, "Container");
}());
//GameView
(function () {
  "use strict";
  function GameView() {
    this.Container_constructor();

    //        this.back = new lib.home();
    //        this.addChild(this.back);
    if (p.gameMap) {
      this.addChild(p.gameMap);
    }
    p.gameMap.initMap(lib.map1Assets, 750, 1300);
    this.addChild(p.carCon);
    mainCar = CarFactory.CreateCar(1);
    p.carCon.addChild(mainCar);
    //        p.start();
    this.distanceUI = new lib.distanceUI();
    this.distanceUI.x = 26;
    this.distanceUI.y = 42;
    this.distanceUI.txt.text = "0m";
    this.addChild(this.distanceUI);
    this.pauseBtn = new lib.pauseBtn();
    this.pauseBtn.x = 300;
    this.pauseBtn.y = 45;
    this.addChild(this.pauseBtn);
    this.leftBtn = new lib.leftBtn();
    this.leftBtn.x = 92;
    this.leftBtn.y = 1000;
    this.addChild(this.leftBtn);
    this.rightBtn = new lib.rightBtn();
    this.rightBtn.x = 750 - 234;
    this.rightBtn.y = 1000;
    this.addChild(this.rightBtn);
    

    this.leftBtn.addEventListener("mousedown", p.leftMoveHandler, true);
    this.rightBtn.addEventListener("mousedown", p.rightMoveHandler, true);
    //        this.leftBtn.addEventListener("mouseup", p.upHandler);
    //        this.rightBtn.addEventListener("mouseup", p.upHandler);
  }
  var p = createjs.extend(GameView, createjs.Container);
  p.carCon = new createjs.Container();
  p.gameMap = new View.GameMap();
  p.gameTick = function gameTick(event) {
    if (mainCar.currentSpeed < mainCar.maxSpeed) {
      mainCar.currentSpeed += mainCar.addSpeed;
    }
    else {
      mainCar.currentSpeed = mainCar.maxSpeed;
    }
    //        if(arrowStatus == "left")
    //        {
    //            mainCar.x -= mainCar.moveSpeed;
    //            if(mainCar.x < GameConfig.leftValue + mainCar.wr)
    //            {
    //                mainCar.x = GameConfig.leftValue + mainCar.wr;
    //            }
    //        }
    //        else if(arrowStatus == "right")
    //        {
    //            mainCar.x += mainCar.moveSpeed;
    //            if(mainCar.x > GameConfig.rightValue - mainCar.wr)
    //            {
    //                mainCar.x = GameConfig.rightValue - mainCar.wr;
    //            }
    //        }
    if (mainCar.addSpeedDistance) {
      if (mainCar.addSpeedDistance <= GameConfig.allDistance && mainCar.addSpeedDistance != 0) {
        mainCar.reWudi();
      }
    }

    //路程到达某个值 且第一次到达这个值
    var v = parseInt(GameConfig.allDistance / 1000);
    var carType = GameConfig.randomItem[parseInt(Math.random() * (GameConfig.randomItem.length))];
    if (GameConfig.mapInfo.length > 0) {
      if (GameConfig.mapInfo.length != v) {
        if (GameConfig.mapInfo.length > 18 && GameConfig.maxSpeed != 20) {

          GameConfig.maxSpeed = 20;
          mainCar.maxSpeed = GameConfig.maxSpeed;
        }
        else if (GameConfig.mapInfo.length > 50 && GameConfig.maxSpeed != 25) {
          GameConfig.maxSpeed = 25;
          mainCar.maxSpeed = GameConfig.maxSpeed;
        }
        //                console.log(Math.abs(GameConfig.allDistance - boxDistance));
        if (Math.abs(GameConfig.allDistance - boxDistance) <= 1000 && boxDistance != 0) {
          if (isShowBox == false) {
            if (showprz == 1) {
              CarFactory.CreateCar(6);
              boxDistance = 0;
              isShowBox = true;
            }
            else if (showprz == 2) {
              CarFactory.CreateCar(7);
              boxDistance = 0;
              isShowBox = true;
            }
          }
        }
        else {
          if (GameConfig.mapInfo.length > 30) {
            if (GameConfig.mapInfo.length % 20 == 0) {
              CarFactory.CreateCar(5);
            }
            else {
              var a1 = parseInt(Math.random() * GameConfig.randomPoint.length);
              var a2 = a1 + 1;
              if (a2 > 2) {
                a2 = 0;
              }
              var x1 = GameConfig.randomPoint[a1];
              var x2 = GameConfig.randomPoint[a2];
              CarFactory.CreateCar(carType, x1);
              CarFactory.CreateCar(carType, x2);
            }
          }
          else {
            if (GameConfig.mapInfo.length % 10 == 0) {
              CarFactory.CreateCar(5);
            }
            else {
              CarFactory.CreateCar(carType);
            }
          }
        }
        GameConfig.mapInfo.push(v);
      }
    }
    else if (GameConfig.mapInfo.length == 0) {
      if (v >= 1) {
        CarFactory.CreateCar(carType);
        GameConfig.mapInfo.push(v);
      }
    }
    var i;
    for (i = 0; i < CarFactory.CarList.length; i++) {
      //            CarFactory.CarList[i].y += CarFactory.CarList[i].currentSpeed;
      CarFactory.CarList[i].y += mainCar.currentSpeed;
    }
    for (i = 0; i < CarFactory.CarList.length; i++)//分两次运算防止数组变化造成某一单位多运行一次
    {
      if ((Math.abs(mainCar.x - CarFactory.CarList[i].x) < (mainCar.wr + CarFactory.CarList[i].wr)) && (Math.abs(mainCar.y - CarFactory.CarList[i].y) < (mainCar.hr + CarFactory.CarList[i].hr))) {
        //                CarFactory.CarList[i].dead();
        if (p.hitTestHandler(CarFactory.CarList[i])) {
          return;
        }
        continue;
      }
      if (CarFactory.CarList[i].y > 1206 + CarFactory.CarList[i].hr) {
        //                CarFactory.CarList[i].dead();
        //                p.hitTestHandler(CarFactory.CarList[i]);
        CarFactory.destoryCar(CarFactory.CarList[i]);
      }
    }
    p.gameMap.mapMove(mainCar.currentSpeed);
  }
  p.hitTestHandler = function hitTestHandler(obj) {
    obj.dead();
    if (obj.deadSound) obj.deadSound();
    if (obj.type != 1 && obj.type != 5 && obj.type != 6 && obj.type != 7 && mainCar.status != "wudi") {
      mainCar.dead();
      return true;
    }
    else if (obj.type == 6 || obj.type == 7) {
      var fun = function (data) {
        if (data.resultCode == 1) {
          prizeText = data.resultInfo;
        }
        else {
          prizeText = "";
        }
        if (typeof data.resultData != 'undefined') {
          $('#copyTarget').text(data.resultData);
          $('#popBottom').css("display", "block");
        }
        else {
          $('#popBottom').css("display", "none");
        }
      }
      Service.getBox(fun);
    }
    else if (obj.type == 5) {
      mainCar.wudi();
    }
    return false
  }
  p.start = function start() {
    if (showprz == 1 || showprz == 2) {
      if (isShowBox == false) {
        boxDistance = 3000 + parseInt(Math.random() * 10000);
      }
    }
    //        showprz = 2;
    //        boxDistance = 5000;

    isStart = true
    window.model.removeEventListener("jiOver", p.start);
    GameConfig.mapInfo = [];
    GameConfig.allDistance = 0;
    GameConfig.maxSpeed = 15;
    mainCar.currentSpeed = 0;
    mainCar.maxSpeed = GameConfig.maxSpeed;
    mainCar.addSpeedDistance = 0;
    prizeText = "";
    createjs.Ticker.addEventListener("tick", p.gameTick);
    gameView.pauseBtn.addEventListener("click", p.clickHandler);
    Sound.playBgm();
  }
  p.pause = function pause() {
    isStart = false
    //        gameView.leftBtn.removeEventListener("mousedown", p.leftMoveHandler);
    //        gameView.leftBtn.removeEventListener("mouseup", p.upHandler);
    //        gameView.rightBtn.removeEventListener("mousedown", p.rightMoveHandler);
    //        gameView.rightBtn.removeEventListener("mouseup", p.upHandler);
    gameView.pauseBtn.removeEventListener("click", p.clickHandler);
    createjs.Ticker.removeEventListener("tick", p.gameTick);
    console.log("pause");
    container.addChild(pauseView);
    Sound.stopBgm();
  }
  p.resume = function resume() {
    //       if(gameView.parent)
    //       {
    //           gameView.parent.removeChild(gameView);
    //           stage.update();
    //       }
    //        createjs.Ticker.reset();
    //        createjs.Ticker._tickTimes = [];
    //        createjs.Ticker._times = [];
    //        createjs.Ticker.removeEventListener("tick", stageBreakHandler);
    //        setTimeout(p.resumeDelayHandler,2000);

    isStart = true;
    window.model.removeEventListener("jiOver", p.resume);
    //        gameView.leftBtn.addEventListener("mousedown", p.leftMoveHandler);
    //        gameView.leftBtn.addEventListener("mouseup", p.upHandler);
    //        gameView.rightBtn.addEventListener("mousedown", p.rightMoveHandler);
    //        gameView.rightBtn.addEventListener("mouseup", p.upHandler);
    gameView.pauseBtn.addEventListener("click", p.clickHandler);
    createjs.Ticker.addEventListener("tick", p.gameTick);
    console.log("resume");
    if (pauseView.parent) pauseView.parent.removeChild(pauseView);
    Sound.playBgm();
  }
  p.resumeDelayHandler = function resumeDelayHandler() {
    createjs.Ticker.init();
    createjs.Ticker.addEventListener("tick", stageBreakHandler);
    container.addChild(gameView);

    isStart = true;
    window.model.removeEventListener("jiOver", p.resume);
    //        gameView.leftBtn.addEventListener("mousedown", p.leftMoveHandler);
    //        gameView.leftBtn.addEventListener("mouseup", p.upHandler);
    //        gameView.rightBtn.addEventListener("mousedown", p.rightMoveHandler);
    //        gameView.rightBtn.addEventListener("mouseup", p.upHandler);
    gameView.pauseBtn.addEventListener("click", p.clickHandler);
    createjs.Ticker.addEventListener("tick", p.gameTick);
    console.log("resume");
    if (pauseView.parent) pauseView.parent.removeChild(pauseView);
    Sound.playBgm();
  }
  p.over = function over() {
    isStart = false;
    isShowBox = false;
    boxDistance = 0;
    if (pauseView.parent) pauseView.parent.removeChild(pauseView);
    gameView.pauseBtn.removeEventListener("click", p.clickHandler);
    //        gameView.leftBtn.removeEventListener("mousedown", p.leftMoveHandler);
    //        gameView.leftBtn.removeEventListener("mouseup", p.upHandler);
    //        gameView.rightBtn.removeEventListener("mousedown", p.rightMoveHandler);
    //        gameView.rightBtn.removeEventListener("mouseup", p.upHandler);
    //        canvas.removeEventListener('touchstart',touchStart);
    //        canvas.removeEventListener('touchend',touchEnd);
    createjs.Ticker.removeEventListener("tick", p.gameTick);
    Sound.stopBgm();

    var strHandler = function strHandler(fen) {
      var str;
      if (prizeText != "") {
        str = prizeText;
      }
      else {
        if (GameConfig.succper == 0) {
          str = " 你让梦梦在战场上行驶了" + fen + "m,\n超越" + GameConfig.succper + "%的玩家。加油，加油，加油！"
        }
        else if (GameConfig.succper < 99) {
          str = "由于你神一般的操控，成功的让梦梦在战场\n行驶了 " + fen + " m，已经超越了" + GameConfig.succper + "%的玩家。";
        }
        else if (GameConfig.succper = 100) {
          str = "你的超神手速，成功让梦梦行驶了" + fen + "m,\n获得了操控王者的称号,已经超越99%的玩家！"
        }
      }
      blogText = str;
      return str;
    }
    var fen = parseInt(GameConfig.allDistance / 20);
    var str;
    if (typeof gameid == 'undefined' || gameid == "") {

      setTimeout(function () {
        // EndView.show();
        // EndView.tweenTxt(fen);
        // $('#pop_content').html("由于你神一般的操控，成功的让梦梦在战场<br>行驶了 " + fen + " m!");
        View.changeView(endView,container);
        endView.tweenTxt(fen);
        endView.back.contentTxt.text = "由于你神一般的操控，成功的让梦梦在战场\n行驶了 " + fen + " m!";
        endView.back.zhedang.visible = true;
        endView.back.listBtn.mouseEnabled = false;
        endView.back.listBtn.mouseChildren = false;
      }, 2000);
    }
    else {
      setTimeout(function () {
        Service.gameover(gameid, fen, function (data) {
          GameConfig.myrank = data.myrank;
          GameConfig.succper = data.succper;
          GameConfig.succper = parseInt(GameConfig.succper.split("%")[0]);
          str = strHandler(fen);
          // EndView.show();
          // EndView.tweenTxt(fen);
          // $('#pop_content').html(str);
          fenxiangTextHandler();
          View.changeView(endView,container);
          endView.tweenTxt(fen);
          endView.back.contentTxt.text = str;
          endView.back.zhedang.visible = false;
          endView.back.listBtn.mouseEnabled = true;
          endView.back.listBtn.mouseChildren = true;
        })
      }, 1500);
    }
  };
  p.allCarDead = function allCarDead() {
    var i;
    for (i = 0; i < CarFactory.CarList.length; i++) {
      if (CarFactory.CarList[i] != 5 && CarFactory.CarList[i] != 1) {
        CarFactory.CarList[i].dead();
      }
    }
  }
  p.leftMoveHandler = function leftMoveHandler(event) {
    if (isStart == false) return;
    if (arrowStatus == "left") return;
    if (mainCar.index <= 0) return;
    arrowStatus = "left";
    mainCar.tweenMove(GameConfig.randomPoint[mainCar.index - 1])
  }
  p.rightMoveHandler = function rightMoveHandler(event) {
    if (isStart == false) return;
    if (arrowStatus == "right") return;
    if (mainCar.index >= 2) return;
    arrowStatus = "right";
    mainCar.tweenMove(GameConfig.randomPoint[mainCar.index + 1])
  }
  p.upHandler = function upHandler(event) {

  }
  p.clickHandler = function clickHandler(event) {
    p.pause();
  }
  p.daojishiStart = function daojishiStart() {
    var fun = function () {
      container.addChild(daojishi);
      daojishi.gotoAndPlay(1);
      window.model.addEventListener("jiOver", p.start);
      gameView.distanceUI.txt.text = "0m";
      mainCar.back.gotoAndPlay(0);
      mainCar.x = GameConfig.randomPoint[1];
      mainCar.index = 1;
      for (var i = 0; i < CarFactory.CarList.length; i++) {
        if (CarFactory.CarList[i].parent) {
          CarFactory.CarList[i].parent.removeChild(CarFactory.CarList[i]);
        }
      }
      CarFactory.CarList = [];
    }

    if (window.isServiceStartGame == true) {
      Service.startGame(function (data) {
        showprz = data.showprz;
        fun()
      })
    }
    else {
      fun()
    }
  }
  p.daojishiResume = function daojishiResume() {
    if (pauseView.parent) pauseView.parent.removeChild(pauseView);
    container.addChild(daojishi);
    daojishi.gotoAndPlay(1);
    window.model.addEventListener("jiOver", p.resume);
  }
  View.GameView = createjs.promote(GameView, "Container");
}());
//PauseView
(function () {
  "use strict";
  function PauseView() {
    this.Container_constructor();
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill("#000000").drawRect(0, 0, 750, 1206);
    this.addChild(this.shape);
    this.shape.alpha = 0.5;
    this.resumeGameBtn = new lib.resumeGameBtn();
    this.resumeGameBtn.x = 197;
    this.resumeGameBtn.y = 500;
    this.addChild(this.resumeGameBtn);
    //        this.returnHomeBtn = new lib.returnHomeBtn();
    //        this.returnHomeBtn.x = 197;
    //        this.returnHomeBtn.y = 670;
    //        this.addChild(this.returnHomeBtn);
    this.resumeGameBtn.addEventListener("click", p.resumeGameBtnClickHandler);
    //        this.returnHomeBtn.addEventListener("click", p.returnHomeBtnClickHandler);
  }
  var p = createjs.extend(PauseView, createjs.Container);
  p.resumeGameBtnClickHandler = function resumeGameBtnClickHandler(event) {
    gameView.daojishiResume();
  }
  p.returnHomeBtnClickHandler = function returnHomeBtnClickHandler(event) {
    gameView.over();
    View.changeView(gameStartView, container);
  }
  View.PauseView = createjs.promote(PauseView, "Container");
}());
//EndView
// var EndView = {
//   show: function show(fun) {
//     // $('#end_pop').show(500, fun);
//   },
//   hide: function (fun) {
//     //$('#end_pop').hide(500, fun);
//   },
//   tweenTxt: function (num) {
//     // $('#m_title').text('0m');
//     EndView.num = num;
//     EndView.addNum = num / 100;
//     EndView.currentNum = 0;
//     createjs.Ticker.addEventListener("tick", EndView.tweenTxtMove);
//   },
//   tweenTxtMove: function () {
//     if (EndView.currentNum + EndView.addNum < EndView.num) {
//       EndView.currentNum = EndView.currentNum + EndView.addNum;
//       // $('#m_title').text(parseInt(EndView.currentNum) + "m");
//       //            console.log(parseInt(EndView.currentNum) + "m")
//     }
//     else {
//       EndView.currentNum = EndView.num;
//       EndView.endTween();
//     }
//   },
//   endTween: function () {
//     //$('#m_title').text(EndView.num + "m");
//     createjs.Ticker.removeEventListener("tick", EndView.tweenTxtMove);
//   },
//   resetHandle: function () {
//     EndView.endTween();
//     EndView.hide(function () {
//       gameStartView.init()
//     });
//     View.changeView(gameStartView, container);

//   },
//   shareHandler: function () {
//     cbsRanklist.sharegame(1, blogText, 1);
//   },
//   listHandler: function () {
//     if (typeof gameid == 'undefined') {
//       alert("只有登录后，才能查看排行榜！")
//       return;
//     }
//     cbsRanklist.showRankbox(1, function () {
//       EndView.hide(function () {
//         gameStartView.init();
//       });
//       View.changeView(gameStartView, container);
//     });
//   }
// };
(function() {
   function EndView(){
       this.Container_constructor();
       this.back = new lib.endViewAssets();
       this.addChild(this.back);
       this.back.resetBtn.addEventListener("click", p.resetHandler);
       this.back.fenxiangBtn.addEventListener("click", p.fenxiangHandler);
       this.back.listBtn.addEventListener("click", p.listHandler);
   }
   var p = createjs.extend(EndView,createjs.Container);
   p.resetHandler = function resetHandler(event)
   {
       p.endtween();
       View.changeView(gameStartView,container);
       gameStartView.init();
//        View.changeView(gameView,container);
//        gameView.daojishiStart();
//        if(endView.parent)
//        {
//            endView.parent.removeChild(endView);
//            gameView.daojishiStart();
//        }
   }
   p.fenxiangHandler = function fenxiangHandler(event)
   {
//        alert(cbsRanklist.sharegame);
      //  cbsRanklist.sharegame(1,blogText,1);
     wx.showShareMenu()
   }
   p.listHandler = function listHandler(event)
   {
       cbsRanklist.showRankbox(1,function (){
//            if(endView.parent)
//            {
//                endView.parent.removeChild(endView);
//            }
//            gameView.daojishiStart();
//            View.changeView(gameView,container);
//            gameView.daojishiStart();
           View.changeView(gameStartView,container);
           gameStartView.init();
       });
   }
   p.tweenTxt = function tweenTxt(num)
   {
       endView.back.txt.text = "0m";
       p.num = num;
       p.addNum = num/100;
       p.currentNum = 0;
       createjs.Ticker.addEventListener("tick", p.tweenTxtMove);
   }
   p.tweenTxtMove = function tweenTxtMove()
   {
       if(p.currentNum + p.addNum < p.num)
       {
           p.currentNum = p.currentNum + p.addNum;
           endView.back.txt.text = parseInt(p.currentNum) + "m";
       }
       else
       {
           p.currentNum = p.num;
           p.endtween();
       }
   }
   p.endtween = function endtween()
   {
       endView.back.txt.text = p.num + "m";
       createjs.Ticker.removeEventListener("tick", p.tweenTxtMove);
   }
   View.EndView = createjs.promote(EndView, "Container");
}());
//Car
(function () {
  "use strict";
  function Car(carAssets) {
    this.Container_constructor();
    this.back = carAssets;
    this.back.tickChildren = false;
    this.addChild(carAssets);
    this.index = 1;
  }
  var p = createjs.extend(Car, createjs.Container);
  p.currentSpeed;
  p.addSpeed;
  p.initSpeed;
  p.maxSpeed;
  p.moveSpeed//左右速度
  p.wr;
  p.hr;
  p.tweenMove = function tweenMove(x, time) {
    if (x < GameConfig.randomPoint[0]) return;
    if (x > GameConfig.randomPoint[2]) return;
    //        if(x > this.x && arrowStatus == "right") return;
    //        if(x < this.x && arrowStatus == "left") return;
    if (arrowStatus == "right") {
      this.index++;
    }
    else if (arrowStatus == "left") {
      this.index--;
    }
    var bi;
    if (x > this.x) {
      bi = Math.abs((x - this.x) / (GameConfig.randomPoint[2] - GameConfig.randomPoint[1]))
    }
    else if (x < this.x) {
      bi = Math.abs((this.x - x) / (GameConfig.randomPoint[1] - GameConfig.randomPoint[0]));
    }
    //        console.log("bi>>>>>>>>>",bi);
    createjs.Tween.removeTweens(this)
    console.log("tween",this)
    this.tween = createjs.Tween.get(this).to({ x: x }, 150 * bi/1000, createjs.Ease.none).call(p.tweenDelayComplete, [this]);
  };
  p.tweenDelayComplete = function tweenDelayComplete(target) {
    arrowStatus = "none";
  };
  p.dead = function dead() {
    this.back.play();
    CarFactory.deadCar(this);
  };
  View.Car = createjs.promote(Car, "Container");
}());
//MainCar(玩家车)
(function () {
  "use strict";
  function MainCar(carAssets) {
    this.Car_constructor(carAssets);
    this.status = "none";
  }
  var p = createjs.extend(MainCar, View.Car);
  p.dead = function dead() {
    mainCar.addSpeedDistance = 0;
    mainCar.back.gotoAndPlay(42);
    gameView.over();
  }
  //    p.strHandler = function strHandler(fen)
  //    {
  //        var str;
  //        if(GameConfig.succper == 0)
  //        {
  //            str = " 你让梦梦在战场上行驶了" + fen + "m,\n超越1%的玩家。加油，加油，加油！";
  //        }
  //        else if(GameConfig.succper < 99)
  //        {
  //            str =  "由于你神一般的操控，成功的让梦梦在战场\n行驶了 " + fen + " m，已经超越了" + GameConfig.succper + "%的玩家。";
  //        }
  //        else if(GameConfig.succper = 100)
  //        {
  //            str = "你的超神手速，成功让梦梦行驶了" + fen + "m,\n获得了操控王者的称号,已经超越99%的玩家！";
  //        }
  //        return str;
  //    }
  p.wudi = function wudi() {
    mainCar.maxSpeed = 30;
    mainCar.addSpeed = 0.5
    mainCar.status = "wudi";
    mainCar.back.gotoAndPlay(27);
    mainCar.addSpeedDistance = GameConfig.allDistance + 3000;

    Sound.playAddSpeed();
    //        if(mainCar.addTime)
    //        {
    //            clearTimeout(mainCar.addTime);
    //        }
    //         mainCar.addTime = setTimeout(p.reWudi,3000)
  }
  p.reWudi = function reWudi() {
    mainCar.addSpeedDistance = 0;
    gameView.allCarDead();
    mainCar.addTime = null;
    mainCar.maxSpeed = GameConfig.maxSpeed;
    mainCar.addSpeed = 0.1;
    mainCar.back.gotoAndPlay(0);
    setTimeout(function () { mainCar.status = "none" }, 200);
    Sound.stopAddSpeed();
  }
  View.MainCar = createjs.promote(MainCar, "Car");
}());
//ItemCar（道具车）
(function () {
  "use strict";
  function ItemCar(carAssets) {
    this.Car_constructor(carAssets);
  }
  var p = createjs.extend(ItemCar, View.Car);
  p.dead = function dead() {
    CarFactory.destoryCar(this);
  };
  View.ItemCar = createjs.promote(ItemCar, "Car");
}());
//function copyInit()
//{
//    var clipboard = new Clipboard("#copyBtn");
//    clipboard.on("success",function (e){
//        alert("复制成功！")
//        e.clearSelection();
//    })
//    clipboard.on("error",function (e){
//        alert("复制失败！请长按激活码复制！")
//    })
//}
//copyInit();

//CarFactory
var CarFactory = {};
CarFactory.CarList = [];
CarFactory.assets2DestoryList = [];
CarFactory.assets3DestoryList = [];
CarFactory.assets4DestoryList = [];
CarFactory.assets5DestoryList = [];
CarFactory.randomControl = function randomControl(obj) {
  var point = GameConfig.randomPoint[parseInt(Math.random() * GameConfig.randomPoint.length)];
  while (CarFactory.oldPoint == point) {
    point = GameConfig.randomPoint[parseInt(Math.random() * GameConfig.randomPoint.length)];
  }
  CarFactory.oldPoint = point
  return CarFactory.oldPoint;
}
CarFactory.CreateCar = function CreateCar(type, xx) {
  var car;
  switch (type) {
    case 1:
      car = new View.MainCar(new lib.carAssets1());
      car.type = type;
      car.addSpeed = 0.1;
      car.moveSpeed = 10;
      car.maxSpeed = 15;
      car.initSpeed = 2;
      car.currentSpeed = 0;
      car.wr = 72;
      car.hr = 111;
      car.x = GameConfig.randomPoint[1];
      car.y = 880;
      break;
    case 2:
      if (CarFactory.assets2DestoryList.length > 0) {
        car = CarFactory.assets2DestoryList.shift()
      }
      else {
        car = new View.Car(new lib.carAssets2());
      }
      car.type = type;
      car.addSpeed = 0;
      car.moveSpeed = 5;
      car.maxSpeed = 15;
      car.initSpeed = 15;
      car.currentSpeed = 15;
      car.wr = 67;
      car.hr = 40;
      car.x = CarFactory.randomControl(car);
      //            car.x = GameConfig.randomPoint[parseInt(((Math.random() *GameConfig.randomPoint.length)+(Math.random() *GameConfig.randomPoint.length))/2)];
      car.y = - car.hr;
      car.deadSound = Sound.playCi;
      CarFactory.CarList.push(car);
      gameView.carCon.addChild(car);
      car.back.gotoAndStop(0);
      break;
    case 3:
      if (CarFactory.assets3DestoryList.length > 0) {
        car = CarFactory.assets3DestoryList.shift()
      }
      else {
        car = new View.Car(new lib.carAssets3());
      }
      car.type = type;
      car.addSpeed = 0;
      car.moveSpeed = 5;
      car.maxSpeed = 15;
      car.initSpeed = 15;
      car.currentSpeed = 15;
      car.wr = 75;
      car.hr = 46;
      car.x = GameConfig.randomPoint[parseInt(((Math.random() * GameConfig.randomPoint.length) + (Math.random() * GameConfig.randomPoint.length)) / 2)];
      car.y = - car.hr;
      car.deadSound = Sound.playTong;
      CarFactory.CarList.push(car);
      gameView.carCon.addChild(car);
      car.back.gotoAndStop(0);
      break;
    case 4:
      if (CarFactory.assets4DestoryList.length > 0) {
        car = CarFactory.assets4DestoryList.shift()
      }
      else {
        car = new View.Car(new lib.carAssets4());
      }
      car.type = type;
      car.addSpeed = 0;
      car.moveSpeed = 5;
      car.maxSpeed = 15;
      car.initSpeed = 15;
      car.currentSpeed = 15;
      car.wr = 50;
      car.hr = 36;
      car.x = CarFactory.randomControl(car);
      //            car.x =  GameConfig.randomPoint[parseInt(((Math.random() *GameConfig.randomPoint.length)+(Math.random() *GameConfig.randomPoint.length))/2)];
      car.y = - car.hr;
      car.deadSound = Sound.playHuo;
      CarFactory.CarList.push(car);
      gameView.carCon.addChild(car);
      car.back.gotoAndStop(0);
      break;
    case 5:
      if (CarFactory.assets5DestoryList.length > 0) {
        car = CarFactory.assets5DestoryList.shift()
      }
      else {
        car = new View.ItemCar(new lib.carAssets5());
      }
      car.type = type;
      car.addSpeed = 0;
      car.moveSpeed = 5;
      car.maxSpeed = 15;
      car.initSpeed = 15;
      car.currentSpeed = 15;
      car.wr = 60;
      car.hr = 55;
      car.x = CarFactory.randomControl(car);
      //            car.x =  GameConfig.randomPoint[parseInt(((Math.random() *GameConfig.randomPoint.length)+(Math.random() *GameConfig.randomPoint.length))/2)];
      car.y = - car.hr;
      CarFactory.CarList.push(car);
      gameView.carCon.addChild(car);
      break;
    case 6:
      car = new View.ItemCar(new lib.carAssets6());
      car.type = type;
      car.addSpeed = 0;
      car.moveSpeed = 5;
      car.maxSpeed = 15;
      car.initSpeed = 15;
      car.currentSpeed = 15;
      car.wr = 55;
      car.hr = 51;
      car.x = CarFactory.randomControl(car);
      //            car.x =  GameConfig.randomPoint[parseInt(((Math.random() *GameConfig.randomPoint.length)+(Math.random() *GameConfig.randomPoint.length))/2)];
      car.y = - car.hr;
      car.deadSound = Sound.playBox;
      CarFactory.CarList.push(car);
      gameView.carCon.addChild(car);
      break;
    case 7:
      car = new View.ItemCar(new lib.carAssets7());
      car.type = type;
      car.addSpeed = 0;
      car.moveSpeed = 5;
      car.maxSpeed = 15;
      car.initSpeed = 15;
      car.currentSpeed = 15;
      car.wr = 55;
      car.hr = 51;
      car.x = CarFactory.randomControl(car);
      //            car.x =  GameConfig.randomPoint[parseInt(((Math.random() *GameConfig.randomPoint.length)+(Math.random() *GameConfig.randomPoint.length))/2)];
      car.y = - car.hr;
      car.deadSound = Sound.playBox;
      CarFactory.CarList.push(car);
      gameView.carCon.addChild(car);
      break;
    default:

      break;
  }
  if (xx) car.x = xx;
  return car;
}
CarFactory.destoryCar = function destoryCar(car) {
  for (var i = 0; i < CarFactory.CarList.length; i++) {
    if (CarFactory.CarList[i] == car) {
      CarFactory.CarList.splice(i, 1);
      break;
    }
  }
  CarFactory.destory(car);
};
CarFactory.deadCar = function deadCar(car) {
  for (var i = 0; i < CarFactory.CarList.length; i++) {
    if (CarFactory.CarList[i] == car) {
      CarFactory.CarList.splice(i, 1);
      break;
    }
  }
  setTimeout(function () { CarFactory.destory(car) }, 1000);
}
CarFactory.destory = function destory(car) {
  if (car.parent) {
    car.parent.removeChild(car);
  }
  if (car.type == 2) {
    CarFactory.assets2DestoryList.push(car);
  }
  else if (car.type == 3) {
    CarFactory.assets3DestoryList.push(car);
  }
  else if (car.type == 4) {
    CarFactory.assets4DestoryList.push(car);
  }
  else if (car.type == 5) {
    CarFactory.assets5DestoryList.push(car);
  }
}
// //Sound
// var Sound = {};
// Sound.playSound = function playSound(id, loop) {
//   return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
// }
// Sound.playBgm = function playBgm() {
//   Sound.playBgmSound = Sound.playSound("carSound", -1);
// }
// Sound.stopBgm = function stopBgm() {
//   if (Sound.playBgmSound) {
//     Sound.playBgmSound.stop()
//   }
// }
// Sound.playAddSpeed = function playAddSpeed() {
//   Sound.addSpeedSound = Sound.playSound("addSpeedSound", -1);
// }
// Sound.stopAddSpeed = function stopAddSpeed() {
//   if (Sound.addSpeedSound) {
//     Sound.addSpeedSound.stop();
//   }
// }
// Sound.playCi = function playCi() {
//   Sound.playSound("diciSound", 0);
// }
// Sound.playHuo = function playHuo() {
//   Sound.playSound("huoSound", 0);
// }
// Sound.playTong = function playTong() {
//   Sound.playSound("mutongSound", 0);
// }
// Sound.playBox = function playBox() {
//   Sound.playSound("box", 0);
// }
//GameConfig
var GameConfig = {};
GameConfig.leftValue = 75;
GameConfig.rightValue = 750 - 65;

GameConfig.randomPoint = [173, 379, 582];
GameConfig.randomItem = [2, 3, 4];
GameConfig.allDistance = 0;
GameConfig.maxSpeed = 25;
//GameConfig.mapDistance = [1200,2400,3600,4800,6000];
GameConfig.mapInfo = [];
window.View = View;