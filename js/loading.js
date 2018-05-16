//var createjs = window.createjs;
window.loadlib = window.loadlib || {};
window.loadimages = window.loadimages || {};
window.ss = window.ss || {};

(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 60,
	color: "#999999",
	webfonts: {},
	manifest: [
		{src:"images/jiayouzhan.png", id:"jiayouzhan"},
		{src:"images/jiazaiyewenzi.png", id:"jiazaiyewenzi"},
		{src:"images/jzyBG2.jpg", id:"jzyBG2"}
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



(lib.jiayouzhan = function() {
	this.initialize(img.jiayouzhan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,41);


(lib.jiazaiyewenzi = function() {
	this.initialize(img.jiazaiyewenzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,28);


(lib.jzyBG2 = function() {
	this.initialize(img.jzyBG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.jiayou_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.jiayouzhan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,41);


(lib.loadingMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	//  (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9eBaQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhABMA69AAAQAigBAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_1 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_2 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_3 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_4 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_5 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_6 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_7 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_8 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_9 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_10 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_11 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_12 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_13 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_14 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_15 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_16 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_17 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_18 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_19 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_20 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_21 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_22 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_23 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_24 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_25 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_26 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_27 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_28 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_29 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_30 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_31 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_32 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_33 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_34 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_35 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_36 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_37 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_38 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_39 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_40 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_41 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_42 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_43 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_44 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_45 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_46 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_47 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_48 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_49 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_50 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_51 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_52 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_53 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_54 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_55 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_56 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_57 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_58 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_59 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_60 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_61 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_62 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_63 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_64 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_65 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_66 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_67 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_68 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_69 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_70 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_71 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_72 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_73 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_74 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_75 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_76 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_77 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_78 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_79 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_80 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_81 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_82 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_83 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_84 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_85 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_86 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_87 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_88 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_89 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_90 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_91 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_92 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_93 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_94 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_95 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_96 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_97 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_98 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	var mask_graphics_99 = new cjs.Graphics().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-194,y:9.1}).wait(1).to({graphics:mask_graphics_1,x:-190,y:10.5}).wait(1).to({graphics:mask_graphics_2,x:-186,y:10.5}).wait(1).to({graphics:mask_graphics_3,x:-182,y:10.5}).wait(1).to({graphics:mask_graphics_4,x:-178.1,y:10.5}).wait(1).to({graphics:mask_graphics_5,x:-174.1,y:10.5}).wait(1).to({graphics:mask_graphics_6,x:-170.1,y:10.5}).wait(1).to({graphics:mask_graphics_7,x:-166.1,y:10.5}).wait(1).to({graphics:mask_graphics_8,x:-162.2,y:10.5}).wait(1).to({graphics:mask_graphics_9,x:-158.2,y:10.5}).wait(1).to({graphics:mask_graphics_10,x:-154.2,y:10.5}).wait(1).to({graphics:mask_graphics_11,x:-150.2,y:10.5}).wait(1).to({graphics:mask_graphics_12,x:-146.3,y:10.5}).wait(1).to({graphics:mask_graphics_13,x:-142.3,y:10.5}).wait(1).to({graphics:mask_graphics_14,x:-138.3,y:10.5}).wait(1).to({graphics:mask_graphics_15,x:-134.3,y:10.5}).wait(1).to({graphics:mask_graphics_16,x:-130.3,y:10.5}).wait(1).to({graphics:mask_graphics_17,x:-126.4,y:10.5}).wait(1).to({graphics:mask_graphics_18,x:-122.4,y:10.5}).wait(1).to({graphics:mask_graphics_19,x:-118.4,y:10.5}).wait(1).to({graphics:mask_graphics_20,x:-114.4,y:10.5}).wait(1).to({graphics:mask_graphics_21,x:-110.5,y:10.5}).wait(1).to({graphics:mask_graphics_22,x:-106.5,y:10.5}).wait(1).to({graphics:mask_graphics_23,x:-102.5,y:10.5}).wait(1).to({graphics:mask_graphics_24,x:-98.5,y:10.5}).wait(1).to({graphics:mask_graphics_25,x:-94.6,y:10.5}).wait(1).to({graphics:mask_graphics_26,x:-90.6,y:10.5}).wait(1).to({graphics:mask_graphics_27,x:-86.6,y:10.5}).wait(1).to({graphics:mask_graphics_28,x:-82.6,y:10.5}).wait(1).to({graphics:mask_graphics_29,x:-78.7,y:10.5}).wait(1).to({graphics:mask_graphics_30,x:-74.7,y:10.5}).wait(1).to({graphics:mask_graphics_31,x:-70.7,y:10.5}).wait(1).to({graphics:mask_graphics_32,x:-66.7,y:10.5}).wait(1).to({graphics:mask_graphics_33,x:-62.7,y:10.5}).wait(1).to({graphics:mask_graphics_34,x:-58.8,y:10.5}).wait(1).to({graphics:mask_graphics_35,x:-54.8,y:10.5}).wait(1).to({graphics:mask_graphics_36,x:-50.8,y:10.5}).wait(1).to({graphics:mask_graphics_37,x:-46.8,y:10.5}).wait(1).to({graphics:mask_graphics_38,x:-42.9,y:10.5}).wait(1).to({graphics:mask_graphics_39,x:-38.9,y:10.5}).wait(1).to({graphics:mask_graphics_40,x:-34.9,y:10.5}).wait(1).to({graphics:mask_graphics_41,x:-30.9,y:10.5}).wait(1).to({graphics:mask_graphics_42,x:-27,y:10.5}).wait(1).to({graphics:mask_graphics_43,x:-23,y:10.5}).wait(1).to({graphics:mask_graphics_44,x:-19,y:10.5}).wait(1).to({graphics:mask_graphics_45,x:-15,y:10.5}).wait(1).to({graphics:mask_graphics_46,x:-11,y:10.5}).wait(1).to({graphics:mask_graphics_47,x:-7.1,y:10.5}).wait(1).to({graphics:mask_graphics_48,x:-3.1,y:10.5}).wait(1).to({graphics:mask_graphics_49,x:0.9,y:10.5}).wait(1).to({graphics:mask_graphics_50,x:4.9,y:10.5}).wait(1).to({graphics:mask_graphics_51,x:8.8,y:10.5}).wait(1).to({graphics:mask_graphics_52,x:12.8,y:10.5}).wait(1).to({graphics:mask_graphics_53,x:16.8,y:10.5}).wait(1).to({graphics:mask_graphics_54,x:20.8,y:10.5}).wait(1).to({graphics:mask_graphics_55,x:24.7,y:10.5}).wait(1).to({graphics:mask_graphics_56,x:28.7,y:10.5}).wait(1).to({graphics:mask_graphics_57,x:32.7,y:10.5}).wait(1).to({graphics:mask_graphics_58,x:36.7,y:10.5}).wait(1).to({graphics:mask_graphics_59,x:40.7,y:10.5}).wait(1).to({graphics:mask_graphics_60,x:44.6,y:10.5}).wait(1).to({graphics:mask_graphics_61,x:48.6,y:10.5}).wait(1).to({graphics:mask_graphics_62,x:52.6,y:10.5}).wait(1).to({graphics:mask_graphics_63,x:56.6,y:10.5}).wait(1).to({graphics:mask_graphics_64,x:60.5,y:10.5}).wait(1).to({graphics:mask_graphics_65,x:64.5,y:10.5}).wait(1).to({graphics:mask_graphics_66,x:68.5,y:10.5}).wait(1).to({graphics:mask_graphics_67,x:72.5,y:10.5}).wait(1).to({graphics:mask_graphics_68,x:76.4,y:10.5}).wait(1).to({graphics:mask_graphics_69,x:80.4,y:10.5}).wait(1).to({graphics:mask_graphics_70,x:84.4,y:10.5}).wait(1).to({graphics:mask_graphics_71,x:88.4,y:10.5}).wait(1).to({graphics:mask_graphics_72,x:92.4,y:10.5}).wait(1).to({graphics:mask_graphics_73,x:96.3,y:10.5}).wait(1).to({graphics:mask_graphics_74,x:100.3,y:10.5}).wait(1).to({graphics:mask_graphics_75,x:104.3,y:10.5}).wait(1).to({graphics:mask_graphics_76,x:108.3,y:10.5}).wait(1).to({graphics:mask_graphics_77,x:112.2,y:10.5}).wait(1).to({graphics:mask_graphics_78,x:116.2,y:10.5}).wait(1).to({graphics:mask_graphics_79,x:120.2,y:10.5}).wait(1).to({graphics:mask_graphics_80,x:124.2,y:10.5}).wait(1).to({graphics:mask_graphics_81,x:128.1,y:10.5}).wait(1).to({graphics:mask_graphics_82,x:132.1,y:10.5}).wait(1).to({graphics:mask_graphics_83,x:136.1,y:10.5}).wait(1).to({graphics:mask_graphics_84,x:140.1,y:10.5}).wait(1).to({graphics:mask_graphics_85,x:144,y:10.5}).wait(1).to({graphics:mask_graphics_86,x:148,y:10.5}).wait(1).to({graphics:mask_graphics_87,x:152,y:10.5}).wait(1).to({graphics:mask_graphics_88,x:156,y:10.5}).wait(1).to({graphics:mask_graphics_89,x:160,y:10.5}).wait(1).to({graphics:mask_graphics_90,x:163.9,y:10.5}).wait(1).to({graphics:mask_graphics_91,x:167.9,y:10.5}).wait(1).to({graphics:mask_graphics_92,x:171.9,y:10.5}).wait(1).to({graphics:mask_graphics_93,x:175.9,y:10.5}).wait(1).to({graphics:mask_graphics_94,x:179.8,y:10.5}).wait(1).to({graphics:mask_graphics_95,x:183.8,y:10.5}).wait(1).to({graphics:mask_graphics_96,x:187.8,y:10.5}).wait(1).to({graphics:mask_graphics_97,x:191.8,y:10.5}).wait(1).to({graphics:mask_graphics_98,x:195.7,y:10.5}).wait(1).to({graphics:mask_graphics_99,x:199.7,y:10.5}).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FF9900","#FFFF00","#00FF00"],[0,0.247,0.58,1],-196.7,0,196.7,0).s().p("A9eBMQgiAAgXgXQgXgVAAggQAAgeAXgWIAAgBQAYgWAhAAMA69AAAQAiAAAXAWQAXAXAAAeQAAAfgXAWQgYAXghAAg");
	this.shape.setTransform(199.7,10.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#362E2C").s().p("A9tBtQgtAAghggQggggAAgtQAAgsAgggIAAgBQAhggAtABMA7bAAAQAtAAAgAgQAhAgAAAsQAAAtghAgIAAAAQggAggtAAgA+mg3IAAAAQgXAXAAAgQAAAhAXAXQAYAYAhgBMA7bAAAQAhABAXgYIAAAAQAYgXAAghQAAgggYgXQgXgYghAAMg7bAAAQghABgYAXg");
	this.shape_1.setTransform(199.7,10.5,0.993,0.953);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#594D41").s().p("A+mA4QgXgXAAghQAAggAXgXIAAAAQAYgXAhgBMA7bAAAQAhAAAXAYQAYAXAAAgQAAAhgYAXIAAAAQgXAYghgBMg7bAAAIAAAAQghAAgYgXg");
	this.shape_2.setTransform(199.7,10.5,0.993,0.953);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,399.5,21);


(lib.jyz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.jiayou_mc();
	this.instance.setTransform(17.5,20.5,1,1,0,0,0,17.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({alpha:0.199},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,41);


(lib.loadingViewAssets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 加油站
	this.instance = new lib.jyz();
	this.instance.setTransform(200.7,747.2,1,1,0,0,0,17.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 文字
	this.instance_1 = new lib.jiazaiyewenzi();
	this.instance_1.setTransform(241.2,739.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 进度条
	this.bar = new lib.loadingMc();
	this.bar.setTransform(374.7,786,1,1,0,0,0,199.7,10.5);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	// BG
	this.instance_2 = new lib.jzyBG2();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.7,0,965.7,1206);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(loadlib = loadlib || {}, loadimages = loadimages || {}, createjs = createjs || {}, ss = ss || {});
