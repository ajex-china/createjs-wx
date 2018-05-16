//var createjs = window.createjs;
//var lib, images, ss;
window.lib = window.lib||{};
window.images = window.images||{};
window.ss = window.ss||{};
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 60,
	color: "#000000",
	webfonts: {},
	manifest: [
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/_3.png", id:"_3"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap1bb.png", id:"Bitmap1bb"},
		{src:"images/Bitmap1bbb.png", id:"Bitmap1bbb"},
		{src:"images/Bitmap1bbbb.png", id:"Bitmap1bbbb"},
		{src:"images/Bitmap1ggg.png", id:"Bitmap1ggg"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/car0001.png", id:"car0001"},
		{src:"images/car0005.png", id:"car0005"},
		{src:"images/car0015.png", id:"car0015"},
		{src:"images/checheche.png", id:"checheche"},
		{src:"images/ci.png", id:"ci"},
		{src:"images/endViewPic.jpg", id:"endViewPic"},
		{src:"images/go.png", id:"go"},
		{src:"images/huodui.png", id:"huodui"},
		{src:"images/jiasuqiu2.png", id:"jiasuqiu2"},
		{src:"images/jiaxuqiu1.png", id:"jiaxuqiu1"},
		{src:"images/lunzi1.png", id:"lunzi1"},
		{src:"images/map.jpg", id:"map"},
		{src:"images/mutong.png", id:"mutong"},
		{src:"images/nextGameBtnpic.png", id:"nextGameBtnpic"},
		{src:"images/noLoginBtn.png", id:"noLoginBtn"},
		{src:"images/returnHomeBtnpic.png", id:"returnHomeBtnpic"},
		{src:"images/sd_00000.png", id:"sd_00000"},
		{src:"images/sd_00004.png", id:"sd_00004"},
		{src:"images/sd_00008.png", id:"sd_00008"},
		{src:"images/sd_00012.png", id:"sd_00012"},
		{src:"images/select.jpg", id:"select"},
		{src:"images/soulLoginBtn.png", id:"soulLoginBtn"},
		{src:"images/startGameBtn.png", id:"startGameBtn"},
		{src:"images/startViewPic.jpg", id:"startViewPic"},
		{src:"images/ui1assets.png", id:"ui1assets"},
		{src:"images/ui2assets.png", id:"ui2assets"},
		{src:"images/ui3assets.png", id:"ui3assets"},
		{src:"images/yingzi.png", id:"yingzi"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,64);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,64);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,64);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,37);


(lib.Bitmap1bb = function() {
	this.initialize(img.Bitmap1bb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,178);


(lib.Bitmap1bbb = function() {
	this.initialize(img.Bitmap1bbb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,177);


(lib.Bitmap1bbbb = function() {
	this.initialize(img.Bitmap1bbbb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,112);


(lib.Bitmap1ggg = function() {
	this.initialize(img.Bitmap1ggg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,208);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,58);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,166);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,166);


(lib.car0001 = function() {
	this.initialize(img.car0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,233);


(lib.car0005 = function() {
	this.initialize(img.car0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,215);


(lib.car0015 = function() {
	this.initialize(img.car0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,230);


(lib.checheche = function() {
	this.initialize(img.checheche);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,234);


(lib.ci = function() {
	this.initialize(img.ci);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,199);


(lib.endViewPic = function() {
	this.initialize(img.endViewPic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.go = function() {
	this.initialize(img.go);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,64);


(lib.huodui = function() {
	this.initialize(img.huodui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,171);


(lib.jiasuqiu2 = function() {
	this.initialize(img.jiasuqiu2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,134);


(lib.jiaxuqiu1 = function() {
	this.initialize(img.jiaxuqiu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,120);


(lib.lunzi1 = function() {
	this.initialize(img.lunzi1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,44);


(lib.map = function() {
	this.initialize(img.map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1300);


(lib.mutong = function() {
	this.initialize(img.mutong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,149);


(lib.nextGameBtnpic = function() {
	this.initialize(img.nextGameBtnpic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,136);


(lib.noLoginBtn = function() {
	this.initialize(img.noLoginBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,114);


(lib.returnHomeBtnpic = function() {
	this.initialize(img.returnHomeBtnpic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,136);


(lib.sd_00000 = function() {
	this.initialize(img.sd_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,198);


(lib.sd_00004 = function() {
	this.initialize(img.sd_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,198);


(lib.sd_00008 = function() {
	this.initialize(img.sd_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,193);


(lib.sd_00012 = function() {
	this.initialize(img.sd_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,191);


(lib.select = function() {
	this.initialize(img.select);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.soulLoginBtn = function() {
	this.initialize(img.soulLoginBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,89);


(lib.startGameBtn = function() {
	this.initialize(img.startGameBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,89);


(lib.startViewPic = function() {
	this.initialize(img.startViewPic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.ui1assets = function() {
	this.initialize(img.ui1assets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,79);


(lib.ui2assets = function() {
	this.initialize(img.ui2assets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.ui3assets = function() {
	this.initialize(img.ui3assets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,148);


(lib.yingzi = function() {
	this.initialize(img.yingzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,201);


(lib.zhuxiaoBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-54.4,-28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.4,-28.4,106,58);


(lib.weixinBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.noLoginBtn();
	this.instance.setTransform(-155.5,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-70,342,114);


(lib.soulBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.soulLoginBtn();
	this.instance.setTransform(-155.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-44.5,311,89);


(lib.returnHomeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.returnHomeBtnpic();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,136);


(lib.resumeGameBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.nextGameBtnpic();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,136);


(lib.yingzi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.yingzi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,201);


(lib.y4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ui1assets();
	this.instance.setTransform(-132,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-39.5,264,79);


(lib.y3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ui2assets();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,79,79);


(lib.y2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ui3assets();
	this.instance.setTransform(74.5,-74,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-74,149,148);


(lib.y1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ui3assets();
	this.instance.setTransform(-74.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-74,149,148);


(lib.tgo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.go();
	this.instance.setTransform(-62,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-32,124,64);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._3();
	this.instance.setTransform(-33,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-32,66,64);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2();
	this.instance.setTransform(-32.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-32,65,64);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1();
	this.instance.setTransform(-14,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-32,28,64);


(lib.sfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.mutong();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,149);


(lib.sd_00012_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sd_00012();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183,191);


(lib.sd_00008_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sd_00008();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,193);


(lib.sd_00004_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sd_00004();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183,198);


(lib.sd_00000_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sd_00000();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,198);


(lib.JSGX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap1ggg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,282,208);


(lib.jiasuqiu1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.jiaxuqiu1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,120);


(lib.jiaquqiu2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.jiasuqiu2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,134);


(lib.erhejh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.huodui();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,171);


(lib.ci_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ci();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,199);


(lib.bao_00009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap1bbbb();
	this.instance.setTransform(68.8,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.8,47.6,101,112);


(lib.bao_00007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap1bbb();
	this.instance.setTransform(38,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38,32.5,153,177);


(lib.bao_00005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap1bb();
	this.instance.setTransform(29,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29,48.5,177,178);


(lib.mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.startGameBtn();
	this.instance.setTransform(-232,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232,-44.5,464,89);


(lib.mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.endViewPic, null, new cjs.Matrix2D(1,0,0,1,-80,-1115.9)).s().p("AseKTIAA0lIY9AAIAAUlg");
	this.shape.setTransform(-15.4,0,2.276,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.4,-65.9,364,132);


(lib.map1Assets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.map();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1300);


(lib.lunzi1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.lunzi1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,44);


(lib.chechechemc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.checheche();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,234);


(lib.carAssets7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.box2();
	this.instance.setTransform(-56,-62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-62.9,110,166);


(lib.carAssets6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.box1();
	this.instance.setTransform(-62,-61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-61.9,110,166);


(lib.car0015_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.car0015();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,230);


(lib.car0005_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.car0005();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,215);


(lib.car0001_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.car0001();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,233);


(lib.alphaBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(7,7,7,0.008)").s().p("AzhP8IAA/3MAnDAAAIAAf3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-102,250.1,204.1);


(lib.startViewAssets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.zhuxiaoBtn = new lib.zhuxiaoBtn();
	this.zhuxiaoBtn.setTransform(658,72.1);

	this.txt = new cjs.Text("123456789", "28px 'SimHei'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 30;
	this.txt.lineWidth = 157;
	this.txt.setTransform(603,59.1);

	this.startBtn = new lib.mc3();
	this.startBtn.setTransform(377,1038.4);

	this.weixinBtn = new lib.weixinBtn();
	this.weixinBtn.setTransform(548,1038.9);

	this.soulBtn = new lib.soulBtn();
	this.soulBtn.setTransform(198,1039.4);

	this.instance = new lib.startViewPic();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.soulBtn},{t:this.weixinBtn},{t:this.startBtn},{t:this.txt},{t:this.zhuxiaoBtn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.selectArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.nameTxt = new cjs.Text("", "25px 'Microsoft YaHei'");
	this.nameTxt.name = "nameTxt";
	this.nameTxt.textAlign = "center";
	this.nameTxt.lineHeight = 35;
	this.nameTxt.lineWidth = 384;
	this.nameTxt.setTransform(372,692.9);

	this.timeline.addTween(cjs.Tween.get(this.nameTxt).wait(1));

	// 图层 1
	this.btn = new lib.alphaBtn();
	this.btn.setTransform(377.5,782,0.716,0.246);

	this.instance = new lib.select();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.rightBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.alphaBtn();
	this.instance.setTransform(74,78,1,1.235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.alphaBtn();
	this.instance_1.setTransform(74,76,1.702,2.255);

	this.instance_2 = new lib.y2();
	this.instance_2.setTransform(74.5,74);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.8,-154,425.7,460.2);


(lib.pauseBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.alphaBtn();
	this.instance.setTransform(38,37,0.776,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.y3();
	this.instance_1.setTransform(39,38);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-65,194.1,204.1);


(lib.leftBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.alphaBtn();
	this.instance.setTransform(74.5,74,1,1.157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.alphaBtn();
	this.instance_1.setTransform(74,76,1.702,2.255);

	this.instance_2 = new lib.y1();
	this.instance_2.setTransform(74.5,74);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.8,-154,425.7,460.2);


(lib.daojishi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_1 = function() {
		playSound("_11");
	}
	this.frame_59 = function() {
		playSound("_11");
	}
	this.frame_119 = function() {
		playSound("_11");
	}
	this.frame_179 = function() {
		playSound("_33");
	}
	this.frame_240 = function() {
		this.stop();
		if(model)
		{
			model.dispatchEvent("jiOver");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(58).call(this.frame_59).wait(60).call(this.frame_119).wait(60).call(this.frame_179).wait(61).call(this.frame_240).wait(1));

	// 图层 4
	this.instance = new lib.tgo();
	this.instance.setTransform(383.1,521.6,1.629,1.629);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({scaleX:1,scaleY:1},40).to({alpha:0},21).wait(1));

	// 图层 3
	this.instance_1 = new lib.t3();
	this.instance_1.setTransform(383.1,521.6,1.92,1.92);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},39).to({alpha:0},20).to({_off:true},1).wait(181));

	// 图层 2
	this.instance_2 = new lib.t2();
	this.instance_2.setTransform(384.1,520.6,1.738,1.738);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({scaleX:1,scaleY:1},40).to({alpha:0},20).to({_off:true},1).wait(121));

	// 图层 1
	this.instance_3 = new lib.t1();
	this.instance_3.setTransform(384.1,519.6,1.781,1.781);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({scaleX:1,scaleY:1},40).to({alpha:0},20).to({_off:true},1).wait(61));

	// 图层 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eg6lBeOMAAAi8bMB1KAAAMAAAC8bg");
	this.shape.setTransform(375,603);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},240).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.endViewAssets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.listBtn = new lib.alphaBtn();
	this.listBtn.setTransform(383,1112.9,1.502,0.593);

	this.fenxiangBtn = new lib.alphaBtn();
	this.fenxiangBtn.setTransform(383.3,988.5,1.502,0.593);

	this.resetBtn = new lib.alphaBtn();
	this.resetBtn.setTransform(380.8,869.5,1.502,0.574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.resetBtn},{t:this.fenxiangBtn},{t:this.listBtn}]}).wait(1));

	// 图层 3
	this.zhedang = new lib.mc1();
	this.zhedang.setTransform(395.5,1116.2);

	this.timeline.addTween(cjs.Tween.get(this.zhedang).wait(1));

	// 图层 1
	this.txt = new cjs.Text("4133m", "79px 'Microsoft YaHei'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 106;
	this.txt.lineWidth = 556;
	this.txt.setTransform(374,512.8);

	this.instance = new lib.Bitmap1();
	this.instance.setTransform(250.5,611.7);

	this.contentTxt = new cjs.Text("由于你神一般的操控，成功的让梦梦在战场\n行驶了 673 m，已经超越了 69% 的玩家。", "25px 'SimHei'", "#5D5045");
	this.contentTxt.name = "contentTxt";
	this.contentTxt.textAlign = "center";
	this.contentTxt.lineHeight = 37;
	this.contentTxt.lineWidth = 551;
	this.contentTxt.setTransform(371.5,667.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.contentTxt},{t:this.instance},{t:this.txt}]}).wait(1));

	// 图层 4
	this.instance_1 = new lib.endViewPic();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.distanceUI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.txt = new cjs.Text("1206m", "60px 'SimHei'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 62;
	this.txt.lineWidth = 247;
	this.txt.setTransform(131.5,7);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// 图层 1
	this.instance = new lib.y4();
	this.instance.setTransform(132,39.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,79);


(lib.carAssets5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sd_.psd
	this.instance = new lib.sd_00000_1();
	this.instance.setTransform(0.1,-31.9,1,1,0,0,0,97,99);

	this.instance_1 = new lib.sd_00004_1();
	this.instance_1.setTransform(-1.4,-31.9,1,1,0,0,0,91.5,99);

	this.instance_2 = new lib.sd_00008_1();
	this.instance_2.setTransform(-7.9,-29.4,1,1,0,0,0,89,96.5);

	this.instance_3 = new lib.sd_00012_1();
	this.instance_3.setTransform(-2.4,-32.4,1,1,0,0,0,91.5,95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},7).wait(7));

	// 加速球2
	this.instance_4 = new lib.jiaquqiu2_mc();
	this.instance_4.setTransform(1.5,-15,1,1,0,0,0,69.5,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-32},29).to({y:-15},30).wait(1));

	// 加速球1
	this.instance_5 = new lib.jiasuqiu1_mc();
	this.instance_5.setTransform(4.5,69,1,1,0,0,0,66.5,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-130.9,194,260);


(lib.carAssets4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// 爆炸
	this.instance = new lib.bao_00005();
	this.instance.setTransform(-31.5,20.5,1,1,0,0,0,102,140.5);

	this.instance_1 = new lib.bao_00007();
	this.instance_1.setTransform(-2.7,-14.2,1.657,1.657,0,0,0,121.9,130.7);

	this.instance_2 = new lib.bao_00009();
	this.instance_2.setTransform(6,-18.8,1.943,1.943,0,0,0,130,108.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},8).to({state:[]},1).to({state:[]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({regX:129.9,scaleX:3.24,scaleY:3.24,x:5.7,alpha:0},8).to({_off:true},1).wait(5));

	// 图层 1
	this.instance_3 = new lib.erhejh();
	this.instance_3.setTransform(-4,-34.5,1,1,0,0,0,64,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-14.7,x:-7,y:-49.5},3).to({rotation:28.7,x:23,y:-80.5},3).to({rotation:-7,x:-8,y:-101.5},3).to({_off:true},1).wait(11));

	// 图层 3
	this.instance_4 = new lib.yingzi_1();
	this.instance_4.setTransform(-5,29,0.905,0.542,0,0,0,79.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-120,144,203.5);


(lib.carAssets3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// 爆炸
	this.instance = new lib.bao_00005();
	this.instance.setTransform(-34.5,24.5,1,1,0,0,0,102,140.5);

	this.instance_1 = new lib.bao_00007();
	this.instance_1.setTransform(-5.8,-10.2,1.657,1.657,0,0,0,121.9,130.7);

	this.instance_2 = new lib.bao_00009();
	this.instance_2.setTransform(2.9,-14.8,1.943,1.943,0,0,0,130,108.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},8).to({state:[]},1).to({state:[]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({regX:129.9,scaleX:3.24,scaleY:3.24,x:2.7,alpha:0},8).to({_off:true},1).wait(5));

	// 图层 1
	this.instance_3 = new lib.sfg();
	this.instance_3.setTransform(-4.5,-9.5,1,1,0,0,0,85.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-18.5,x:-5.5,y:-24.5},3).to({rotation:19.5,x:15.4,y:-47.5},3).to({rotation:-8.7,x:0.5,y:-80.4},3).to({_off:true},1).wait(11));

	// 图层 3
	this.instance_4 = new lib.yingzi_1();
	this.instance_4.setTransform(-10.1,29.5,1.088,0.587,0,0,0,79.4,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-84,177.5,172.5);


(lib.carAssets2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// 爆炸
	this.instance = new lib.bao_00005();
	this.instance.setTransform(-35.5,39.5,1,1,0,0,0,102,140.5);

	this.instance_1 = new lib.bao_00007();
	this.instance_1.setTransform(-6.7,4.8,1.657,1.657,0,0,0,121.9,130.7);

	this.instance_2 = new lib.bao_00009();
	this.instance_2.setTransform(2,0.2,1.943,1.943,0,0,0,130,108.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},8).to({state:[]},1).to({state:[]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({regX:129.9,scaleX:3.24,scaleY:3.24,x:1.7,alpha:0},8).to({_off:true},1).wait(5));

	// 地刺
	this.instance_3 = new lib.ci_mc();
	this.instance_3.setTransform(-2.5,-18.5,1,1,0,0,0,77.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-6.2,x:-8.5,y:-32.5},3).to({rotation:9.2,x:7.1,y:-54.6},3).to({rotation:-2.2,x:-14.7,y:-71.5},3).to({rotation:1.2,x:-0.4,y:-111.5},3).to({_off:true},1).wait(8));

	// 影子
	this.instance_4 = new lib.yingzi_1();
	this.instance_4.setTransform(-7,60.1,0.893,0.433,0,0,0,79.5,100.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-118,155,221.5);


(lib.carAssets1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_41 = function() {
		this.gotoAndPlay(27);
	}
	this.frame_92 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(15).call(this.frame_41).wait(51).call(this.frame_92).wait(1));

	// car-.psd
	this.instance = new lib.car0001_1();
	this.instance.setTransform(0,13.5,1,1,0,0,0,71,116.5);

	this.instance_1 = new lib.car0005_1();
	this.instance_1.setTransform(-0.5,7.5,1,1,0,0,0,73.5,107.5);

	this.instance_2 = new lib.car0015_1();
	this.instance_2.setTransform(-0.5,10,1,1,0,0,0,70.5,115);

	this.instance_3 = new lib.chechechemc();
	this.instance_3.setTransform(-4,19,1,1,0,0,0,79.5,117);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).wait(4).to({regY:117.1,rotation:39.7,x:-20,y:16},0).wait(4).to({regY:117,rotation:94.7,y:-2},0).wait(4).to({rotation:146.9,x:-18.9,y:-16},0).wait(4).to({regX:79.6,rotation:206.9,x:7.1,y:-17},0).wait(4).to({rotation:259.4,x:17.1,y:0},0).wait(4).to({regX:79.7,rotation:311.4,x:11.2,y:16.9},0).wait(4).to({regY:117.1,rotation:352.1,x:0.2,y:20},0).wait(4).to({rotation:392.9,x:-13.8},0).wait(4).to({regX:79.6,rotation:434.1,x:-23.8,y:0.9},0).wait(4).to({regX:79.5,rotation:444.7,x:-29.9,y:-11.1},0).wait(4).to({regY:117.2,rotation:449.4,x:-32.9},0).wait(4).to({regX:79.6,rotation:454.1,x:-36.9,y:-17},0).wait(4));

	// 光效
	this.instance_4 = new lib.JSGX();
	this.instance_4.setTransform(-3.6,-77.2,2.422,2.227,-90,0,0,232.1,106.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.lunzi1_mc();
	this.instance_5.setTransform(-1,-18,1,1,0,0,0,70.5,22);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({scaleX:3.08,scaleY:1.71,y:-77.3},2).to({regX:232,scaleX:2.03,scaleY:2.23,y:-77},2).to({regX:232.1,scaleX:3,y:-77.2},2).to({scaleX:2.42,scaleY:1.53,x:-3.7},2).to({regX:232,scaleX:2.06,scaleY:2.23,x:-3.6,y:-93.7},2).to({regX:232.1,scaleX:2.42,y:-77.2},2).to({_off:true},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).wait(4).to({regY:21.9,rotation:52.7,x:10.1,y:-25},0).wait(4).to({rotation:118.2,x:20.1,y:-40},0).wait(4).to({rotation:138.4,x:23.1,y:-46},0).wait(4).to({regY:22,rotation:154.4,x:28.1,y:-52.1},0).wait(4).to({regY:21.9,rotation:170.9,x:31.1,y:-58},0).wait(4).to({rotation:185.3,x:34.1,y:-64},0).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-103,142,233);


// stage content:



(lib.assets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});