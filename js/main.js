/**
 * Created by ajex from http://www.ajexoop.com 
 */
import WXLoader from './WXLoader'

var img,stage,loadPic,selectArea,model,modelData,container,loadingView,gameStartView,gameView,pauseView,selectView,endView,currentView,mainCar,daojishi,stageWidth,stageHeight,stageScale;
// var loadlib = window.loadlib;
// var lib = window.lib;
// var images = window.images;
var View = window.View;


//showprz宝箱标识 0 无宝箱 1 银宝箱 2 金宝箱
// var gameid,numid,showprz,wxflag,isShowBox = false,boxDistance = 0,prizeText="",blogText="快点来玩梦梦战车吧！";
window.isServiceStartGame = false;//是否通过服务开始游戏（是否单机玩游戏是否有宝箱）
//var testTxt;
window.model = new createjs.EventDispatcher();
window.modelData = {};
window.showprz = "";
window.isStart = false;
window.checkFps = false;
window.gameid = "";
window.numid = "";
window.wxflag = "";
window.isShowBox = false;
window.boxDistance = 0;
window.prizeText = "";
window.blogText = "快点来玩梦梦战车吧！";
window.arrowStatus = ""
//img = document.getElementById("img");
//img.style.left = "0px";

stageWidth =  document.documentElement.clientWidth;
stageHeight = document.documentElement.clientHeight;
//loadPic = document.getElementById("loadPic");
//stageScale = stageHeight/1206;
//loadPic.style.width =  750*stageScale + 'px';
//loadPic.style.height = 1206*stageScale + 'px';
//loadPic.style.left = (stageWidth -  750*stageScale)/2;

//var endPop = document.getElementById("end_pop");

setAssets();
function setAssets() {

  for (var i = 0; i < lib.properties.manifest.length; i++) {
    images[lib.properties.manifest[i].id] = lib.properties.manifest[i].src;
  }
}


init();
function init() {
    // canvas = document.getElementById("mainView");
  wx.onShareAppMessage()
   stage = new createjs.Stage(canvas);
  //  stage = new createjs.StageGL(canvas);//开启webgl的时候 需要解开initStageWH方法里的注释 webgl开启是矢量元素都不支持 需要额外的cache或者转为位图

    container = new createjs.Container();
    stage.addChild(container);
    //createjs.Touch.enable(stage);
    initStageWH();

    // var loader = new createjs.LoadQueue(true);
    // loader.addEventListener("fileload", loadHandleFileLoad);
    // loader.addEventListener("complete", loadLoadingComplete);
    // loader.loadManifest(loadlib.properties.manifest);


    // createjs.Ticker.timingMode =  createjs.Ticker.RAF_SYNCHED;//暂时不支持这种模式 使用这种模式需要修改帧频换算单位
    // createjs.Ticker.setFPS(60);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", stageBreakHandler);
    console.log(canvas);
  
    // wx.downloadFile({
    //   url: "images/_1.png",
    //   complete: function (data) {
    //     console.log(data);
    //     if (data.errMsg) {
    //       console.log(data.errMsg);
    //       return;
    //     }
    //   }
    // })
    // var manager = new LocalAssetsManager()
    // manager.initImage(lib.properties.manifest);
  // loadLoadingComplete();
    
    var loader = new WXLoader();
    loader.addEventListener("fileload", handleFileLoad)
    loader.addEventListener("complete", loadLoadingComplete)
    loader.load(lib.properties.manifest, true)//暂时只支持单图片加载，sprite的加载模式因为消耗性能实际上也不用支持
}
//function handleVisibilityChange() {
//    if (document.hidden) {
//        if(typeof WeixinJSBridge != 'undefined')
//        {
//            WeixinJSBridge.call('closeWindow');
//        }
//        //pauseSimulation();
//    } else  {
//        //startSimulation();
//    }
//}
function loadHandleFileLoad(evt)
{
    if (evt.item.type == "image") { loadimages[evt.item.id] = evt.result; }
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") 
    { 
      images[evt.item.id] = evt.result;
      // console.log(evt.result)
    }
}
function loadLoadingComplete(event){
    // event.currentTarget.removeEventListener("fileload",handleFileLoad);
    // event.currentTarget.removeEventListener("complete",loadLoadingComplete);
    // var queue = event.target;
    // ss["loading_atlas_P_"] = queue.getResult("loading_atlas_P_");
    // loadingView = new View.LoadingView();
    // container.addChild(loadingView);
    // var loader = new createjs.LoadQueue(true);
    // loader.installPlugin(createjs.Sound);
    // loader.addEventListener("fileload", handleFileLoad);
    // loader.addEventListener("progress",loadProgressHandler);
    // loader.addEventListener("complete", loadCompleteHandler);
    // loader.loadManifest(lib.properties.manifest);
    console.log("complete")
  loadCompleteHandler();

//    loadPic.style.display='none';
}
function playSound(id, loop) {
    createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
function setCookie(name, value, expires, path, domain, secure){
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    if(expires instanceof Date){
        cookieText += "; expires=" + expires.toGMTString();
    }
    if(path){
        cookieText += "; path=" + path;
    }
    if(domain){
        cookieText += "; domain=" + domain;
    }
    if(secure){
        cookieText += "; secure";
    }

    document.cookie = cookieText;
};

function loadProgressHandler(event)
{
    loadingView.back.bar.gotoAndStop(Math.floor(event.progress*99));
//    loadingView.back.icon.txt.text = Math.floor(event.progress*99).toString() + "%";
}
function loadCompleteHandler(event)
{
    // event.currentTarget.removeEventListener("fileload",handleFileLoad);
    // event.currentTarget.removeEventListener("progress",loadProgressHandler);
    // event.currentTarget.removeEventListener("complete",loadCompleteHandler);

    // if(loadingView.parent) loadingView.parent.removeChild(loadingView);

    

    View.init(container);
    Sound.init();

    gameStartView = window.gameStartView;
    gameView = window.gameView;
    daojishi = window.daojishi;
    pauseView = window.pauseView;


    // currentView = gameStartView;
    // container.addChild(gameStartView);
    // gameStartView.statusChange("login");
    // setCookie('17m3_evid', "16", new Date().getTime() + 3600, '/')

//     if(typeof gameid == 'undefined')
//     {
//         currentView = gameStartView;
//         container.addChild(gameStartView);
//         gameStartView.statusChange("login");
//     }
//     else
//     {
// //        currentView = gameView;
// //        GameConfig.gameType = gameid;
// //        container.addChild(gameView);
// //        gameView.daojishiStart();
//         GameConfig.gameType = gameid;
//         currentView = gameStartView;
//         container.addChild(gameStartView);
//         gameStartView.statusChange("start");
//     }
//     if(typeof numid != 'undefined')
//     {
//         gameStartView.back.txt.text = numid.toString();
//     }

    gameStartView.init();

//    img.src = "images/weixin.jpg";
//    img.style.width = '1px';
//    img.style.height = '1px';
//    FPS.startFPS(stage);

//    EndView.show()
    // resize();
}
function stageBreakHandler(event)
{
    stage.update();
}
function initStageWH()
{
  //获取屏幕宽高  
  wx.getSystemInfo({
    success: function (res) {
      stageWidth = res.windowWidth*2;
      stageHeight = res.windowHeight*2;
      canvas.width = stageWidth;
      canvas.height = stageHeight;
      stageScale = stageHeight / 1206;
      container.scaleX = stageScale;
      container.scaleY = stageScale;
      container.x = (stageWidth - 750 * container.scaleX) / 2;
      // stage.updateViewport(canvas.width, canvas.height)//开启webgl的时候需要开启这句话
      createjs.Touch.addWXTouch(stage, res.windowWidth, res.windowHeight);
    }
  }) 
}
 
function resize()
{
  // var  aa= {};
  // wx.getScreenBrightness(aa)
  // console.log(aa);
    // stageWidth =  document.documentElement.clientWidth;
    // stageHeight = document.documentElement.clientHeight;

    // canvas.width = stageWidth +20;
    // canvas.height = stageHeight + 20;
    // stageScale = stageHeight/1206;
    // container.scaleX = stageScale;
    // container.scaleY = stageScale;
    // container.x = (stageWidth -  750*container.scaleX)/2;

    
//    $("#end_pop").css("transform","scale(" + stageScale + "deg)");
//    $("#end_pop").css("-ms-transform","scale(" + stageScale + "deg)");
//    $("#end_pop").css("-moz-transform","scale(" + stageScale + "deg)");
//    $("#end_pop").css("-webkit-transform","scale(" + stageScale + "deg)");
//    $("#end_pop").css("-o-transform","scale(" + stageScale + "deg)");
//    $("#end_pop").css("left",container.x);

    // $("#end_pop").css({"transform-origin":"0 0","transform":"scale(" + (stageScale + 0.05) + ")","left":container.x})

//    console.log("change",stageWidth,stageHeight);

}
