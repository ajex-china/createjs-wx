/**
 * Created by ajex from http://www.ajexoop.com
 * versions 0.0.2.1
 */
import WXLoader from './WXLoader'
import WXStageGL from './WXStageGL'
import WXGraphics from './WXGraphics'

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

stageWidth =  document.documentElement.clientWidth;
stageHeight = document.documentElement.clientHeight;

init();
function init() {
  
  wx.onShareAppMessage()
  
   stage = new createjs.Stage(canvas);
   //开启webgl的时候 需要解开initStageWH方法里的注释 webgl开启是矢量元素都不支持 需要额外的cache或者转为位图
  // stage = new WXStageGL(canvas);//使用stagegl需要外部引入StageGL文件 然后直接new 而不是new createjs.WXStageGL()

  
    container = new createjs.Container();
    stage.addChild(container);
    //createjs.Touch.enable(stage);
    initStageWH();


    // createjs.Ticker.timingMode =  createjs.Ticker.RAF_SYNCHED;//暂时不支持这种模式 使用这种模式需要修改帧频换算单位
    // createjs.Ticker.setFPS(60);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", stageBreakHandler);
  
    
    var loader = new WXLoader();
    loader.addEventListener("fileload", handleFileLoad)
    loader.addEventListener("complete", loadCompleteHandler)
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
  event.currentTarget.addEventListener("fileload", handleFileLoad)
  event.currentTarget.addEventListener("complete", loadCompleteHandler)

   

    View.init(container);
    Sound.init();

    gameStartView = window.gameStartView;
    gameView = window.gameView;
    daojishi = window.daojishi;
    pauseView = window.pauseView;


    gameStartView.init();

    // var g = new WXGraphics();//此代码与本游戏无关 看到的童鞋记一下 安卓要使用shape必须手动传入WXgraphics类
    // var shape = new createjs.Shape(g);
    // shape.graphics.setStrokeStyle(3);
    // shape.graphics.beginStroke("#F00");
    // shape.graphics.drawRect(0,0,200,200);
    // stage.addChild(shape);
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
