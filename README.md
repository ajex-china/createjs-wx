# createjs-wx
在createjs的源代码基础上，进行的二次封装，可以支持微信小游戏。

重点代码是:WXLoader.js  createjs-1.0-wx.js createjs-2015-wx.js createjs-wx-touch.js

fla里是资源文件，也就是说封装好的createjs是支持animateCC导出的文件的，但是需要小修一下，大家可以对比一下我做的修改。

除了开源，为了给大家快速理解，我还用微信小游戏版本的代码重写了之前的赛车游戏，内部注释掉的是以前的写法，大家可以做做对比。

因为对自己的es6没有信心，本人暂时没有用es6的方式封装，要es6版本的可以去群里找maksim大神。

再补充一点，由于微信的计时单位跟我们平时不一样，所以在使用tween这种需要输入时间参数的api，需要在时间参数上除以1000，也就是：原时间/1000

后续修复：

由于安卓兼容问题，使用setStrokeStyle需要导入新文件，并如下写代码（坑爹的腾讯安卓ctx.miterLimit接口不支持字符串化的数字）：

var g = new WXGraphics();
var shape = new createjs.Shape(g);
shape.graphics.setStrokeStyle(3);
shape.graphics.beginStroke("#F00");
shape.graphics.drawRect(0,0,200,200);
stage.addChild(shape);
由于安卓兼容问题，使用stagegl需要导入新文件，并初始化新的类文件

stage = new WXStageGL(canvas);
