/**
 * Created by ajex from http://www.ajexoop.com 
 */
// createjs.Touch.isSupported = function () {
//   return true;
// };
//因为微信中获取canvas宽高是异步的，但是重写touch必须同步，所以参数必须传过来，而不是由类自己获取
createjs.Touch.addWXTouch = function (stage,wid,hei)
{
  if (stage.__touch) { return true; }
  stage.old_getElementRect = stage._getElementRect;
  stage._getElementRect = function () {
    var rect = { left: 0, top: 0, right: wid, bottom: hei}
    return rect
  }
  // stage._handlePointerDown=function ()
  // {
  //   console.log("test")
  // }

  // inject required properties on stage:
  stage.__touch = { pointers: {}, multitouch:true,preventDefault:true, count: 0 };
  var f = function (e) { createjs.Touch._WX_handleEvent(stage, e); };
  stage.__touch.f = f;
  wx.onTouchStart(f);
  wx.onTouchMove(f);
  wx.onTouchEnd(f);
  wx.onTouchCancel(f);
  // canvas.addEventListener("touchstart", f, false);
  // canvas.addEventListener("touchmove", f, false);
  // canvas.addEventListener("touchend", f, false);
  // canvas.addEventListener("touchcancel", f, false);
}
createjs.Touch.removeWXTouch = function (stage)
{
  var f = stage.__touch.f;
  wx.offTouchStart(f);
  wx.offTouchMove(f);
  wx.offTouchEnd(f);
  wx.offTouchCancel(f);
  // canvas.removeEventListener("touchstart", f, false);
  // canvas.removeEventListener("touchmove", f, false);
  // canvas.removeEventListener("touchend", f, false);
  // canvas.removeEventListener("touchcancel", f, false);
}
createjs.Touch._WX_handleEvent = function (stage, e)
{
  if (!stage) { return; }
  // console.log(e)
  // console.log(e.preventDefault)
  // console.log(canvas.getBoundingClientRect())
  window.getComputedStyle = false;
  e.preventDefault = function (){};
  canvas.currentStyle = { paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}//微信获取不到这些值 为了兼容赋予默认值
  if (stage.__touch.preventDefault) { e.preventDefault && e.preventDefault(); }
  var touches = e.changedTouches;
  var type = e.type;
  for (var i = 0, l = touches.length; i < l; i++) {
    var touch = touches[i];
    var id = touch.identifier;
    // console.log(touch.target,stage.canvas)
    // if (touch.target != stage.canvas) { continue; }
    if (type == "touchstart") {
      this._handleStart(stage, id, e, touch.pageX, touch.pageY);
    } else if (type == "touchmove") {
      this._handleMove(stage, id, e, touch.pageX, touch.pageY);
    } else if (type == "touchend" || type == "touchcancel") {
      this._handleEnd(stage, id, e);
    }

    if (type == "ontouchstart") {
      this._handleStart(stage, id, e, touch.pageX, touch.pageY);
    } else if (type == "ontouchmove") {
      this._handleMove(stage, id, e, touch.pageX, touch.pageY);
    } else if (type == "ontouchend" || type == "ontouchcancel") {
      this._handleEnd(stage, id, e);
    }
  }
}