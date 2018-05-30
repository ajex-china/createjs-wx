/**
 * Created by ajex from http://www.ajexoop.com 
 * versions 0.0.2
 */
export default class WXLoader extends createjs.EventDispatcher {
  constructor(){
    super()
    this.assetsList = [];
    this.totalLoadCount = 0;
  }

  load(assetsList,isLocal){
    if (!assetsList) return;
    if (assetsList.length <= 0) return;
    this.isLocal = isLocal;
    this.assetsList = assetsList;
    this.totalLoadCount = this.assetsList.length;
    this.startLoad()
  }
  startLoad()
  {
    if (this.assetsList.length > 0) var obj = this.assetsList.shift();
    var source;
    var item ;
    if (typeof (obj) == 'string') {
      source = obj;
      item = {};
      item.src = source;
      item.id = source;
    }
    else if (typeof (obj) == "object") {
      source = obj.src;
      item = obj
    }
    var _this = this;
    item.type = "image";
    this.currentItem = item;
    if (this.isLocal)
    {
      var image = new Image()
      image.src = source;
      image.onload = function ()
      {
        _this.fileload(image)
      }
    }
    else
    {
      wx.downloadFile({
        url: source,
        complete: function (data) {
          console.log(data);
          if (data.errMsg) {
            console.log(data.errMsg);
            return;
          }
          _this.fileload()
        }
      })
    }
  }
  fileload(obj)
  {
    var event = new createjs.Event("fileload")
    event.result = obj;
    event.item = this.currentItem;
    this.dispatchEvent(event);
    this.nextLoad();
  }
  nextLoad()
  {
    var progress = this.assetsList.length / this.totalLoadCount;
    var loaded = this.totalLoadCount - this.assetsList.length;
    var total = this.totalLoadCount;
    var event = new createjs.Event("progress");
    event.progress = progress;
    event.loaded = loaded;
    event.total = total;
    this.dispatchEvent(event);
    if (this.assetsList.length > 0) 
    {
      this.startLoad();
    }
    else
    {
      this.loadComplete()
    }
    
  }
  loadComplete()
  {
    this.dispatchEvent("complete");
    this.assetsList = [];
    this.totalLoadCount = 0;
  }
}