(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 800,
	height: 500,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/hackershackerlar1995filmizleafismovieposter.jpg", id:"hackershackerlar1995filmizleafismovieposter"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.hackershackerlar1995filmizleafismovieposter = function() {
	this.initialize(img.hackershackerlar1995filmizleafismovieposter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,511,766);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgrBRQgXgJgBgRQAAgPATAAQAHgBAOAFQAOAEAHABQAeAAAAgNQAAgIgWgKQgfgOgJgFQgVgPgBgWQABgfAhgMQAUgFAlAAQAQAAAIADQAKAGgBAOQAAAcgPAAQgPAAgDgMIgNgBQgjAAAAAKQAAAGAUALQAfAOALAHQAWAPAAAUQAAAbgYAPQgVALgbgBQgUAAgSgGg");
	this.shape.setTransform(37.6,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgrBRQgYgJABgRQAAgPASAAQAIgBANAFQAOAEAHABQAdAAABgNQAAgIgWgKQgegOgKgFQgWgPABgWQgBgfAigMQAUgFAlAAQAQAAAIADQAJAGABAOQAAAcgPAAQgQAAgDgMIgNgBQgkAAAAAKQABAGAUALQAfAOALAHQAXAPgBAUQABAbgaAPQgUALgbgBQgUAAgSgGg");
	this.shape_1.setTransform(22,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("Ag0BDQgagUAAgjQAAgmAUgbQAYgfAlAAQAbAAASAJQAXAMAAAYQAAARgTAOQgIAGgbAJIgzAYQAIAIALAEQAKAEAMAAQAVAAAOgJQANgHAIAAQAQAAAAAQQAAARgaAMQgWAJgYAAQgjAAgYgSgAgUgkQgKAKgHATIAjgPQAUgKAMgIQgKgGgRAAQgNAAgKAKg");
	this.shape_2.setTransform(5.2,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ag9BRQgEgGgBgJIAAhkIABgPIAAgOQAAgIAFgHQAFgFALAAQAQgBAEATQAZgVAjAAQAeAAAAAqIAAAKQgBAYgUAAQgUAAAAgVIgBgPQghAFgPAfIAABMQAAAJgGAGQgGAGgJAAQgKAAgGgGg");
	this.shape_3.setTransform(-10.9,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhAB9QgGgGAAgJIAAg7IAAg7QAAgigCgZIgCgeQAAgNAFgJQAHgLAMAAQAIAAAGAGQAGAGAAAIIAAACQAKgGALgDQAJgDAKAAQAkAAARAfQAMAWAAAlQAAAggUAXQgUAYgjAAQgMAAgPgDIAABAQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgIhKQgKAFgKAJQACAgAAAfQANAEANAAQAPAAAJgJQAIgKAAgSQAAgVgCgIQgFgTgPAAQgKAAgIAEg");
	this.shape_4.setTransform(-27.2,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#006633").ss(1,1,1).p("ALIAAQAACOjRBlQjQBlknAAQkmAAjQhlQjRhlAAiOQAAiNDRhlQDQhlEmAAQEnAADQBlQDRBlAACNg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("An2DyQjRhkABiOQgBiNDRhlQDQhkEmAAQEnAADQBkQDRBlgBCNQABCOjRBkQjQBlknAAQkmAAjQhlg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.2,-35.4,144.4,70.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("s2.html", "_self");
		}
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 4
	this.button_1 = new lib.Symbol2();
	this.button_1.parent = this;
	this.button_1.setTransform(698.4,439.2);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.button_1}]}).wait(30));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjuB4IAAjvIHdAAIAADvg");
	var mask_graphics_1 = new cjs.Graphics().p("AkSCvIAAldIIlAAIAAFdg");
	var mask_graphics_2 = new cjs.Graphics().p("Ak2DmIAAnLIJtAAIAAHLg");
	var mask_graphics_3 = new cjs.Graphics().p("AlaEeIAAo7IK1AAIAAI7g");
	var mask_graphics_4 = new cjs.Graphics().p("Al+FVIAAqpIL9AAIAAKpg");
	var mask_graphics_5 = new cjs.Graphics().p("AmiGMIAAsXINFAAIAAMXg");
	var mask_graphics_6 = new cjs.Graphics().p("AnGHEIAAuHIONAAIAAOHg");
	var mask_graphics_7 = new cjs.Graphics().p("AnpH7IAAv1IPUAAIAAP1g");
	var mask_graphics_8 = new cjs.Graphics().p("AoOIyIAAxjIQdAAIAARjg");
	var mask_graphics_9 = new cjs.Graphics().p("AoxJqIAAzTIRjAAIAATTg");
	var mask_graphics_10 = new cjs.Graphics().p("ApVKhIAA1BISrAAIAAVBg");
	var mask_graphics_11 = new cjs.Graphics().p("Ap5LYIAA2wITzAAIAAWwg");
	var mask_graphics_12 = new cjs.Graphics().p("AqdMQIAA4fIU7AAIAAYfg");
	var mask_graphics_13 = new cjs.Graphics().p("ArBNHIAA6NIWDAAIAAaNg");
	var mask_graphics_14 = new cjs.Graphics().p("ArlN+IAA78IXLAAIAAb8g");
	var mask_graphics_15 = new cjs.Graphics().p("AsJO2IAA9rIYSAAIAAdrg");
	var mask_graphics_16 = new cjs.Graphics().p("AssPtIAA/ZIZZAAIAAfZg");
	var mask_graphics_17 = new cjs.Graphics().p("AtRQkMAAAghIIaiAAMAAAAhIg");
	var mask_graphics_18 = new cjs.Graphics().p("At0RcMAAAgi3IbpAAMAAAAi3g");
	var mask_graphics_19 = new cjs.Graphics().p("AuYSTMAAAgklIcxAAMAAAAklg");
	var mask_graphics_20 = new cjs.Graphics().p("Au8TLMAAAgmVId5AAMAAAAmVg");
	var mask_graphics_21 = new cjs.Graphics().p("AvgUCMAAAgoDIfBAAMAAAAoDg");
	var mask_graphics_22 = new cjs.Graphics().p("AwEU5MAAAgpxMAgJAAAMAAAApxg");
	var mask_graphics_23 = new cjs.Graphics().p("AwnVxMAAAgrhMAhPAAAMAAAArhg");
	var mask_graphics_24 = new cjs.Graphics().p("AxMWoMAAAgtPMAiZAAAMAAAAtPg");
	var mask_graphics_25 = new cjs.Graphics().p("AxvXfMAAAgu9MAjfAAAMAAAAu9g");
	var mask_graphics_26 = new cjs.Graphics().p("AyTYXMAAAgwtMAknAAAMAAAAwtg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay3ZOMAAAgybMAlvAAAMAAAAybg");
	var mask_graphics_28 = new cjs.Graphics().p("AzbaFMAAAg0KMAm3AAAMAAAA0Kg");
	var mask_graphics_29 = new cjs.Graphics().p("Az/a9MAAAg15MAn/AAAMAAAA15g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:392,y:284}).wait(1).to({graphics:mask_graphics_1,x:392.3,y:285}).wait(1).to({graphics:mask_graphics_2,x:392.6,y:286.1}).wait(1).to({graphics:mask_graphics_3,x:392.8,y:287.1}).wait(1).to({graphics:mask_graphics_4,x:393.1,y:288.2}).wait(1).to({graphics:mask_graphics_5,x:393.4,y:289.2}).wait(1).to({graphics:mask_graphics_6,x:393.7,y:290.2}).wait(1).to({graphics:mask_graphics_7,x:394,y:291.3}).wait(1).to({graphics:mask_graphics_8,x:394.2,y:292.3}).wait(1).to({graphics:mask_graphics_9,x:394.5,y:293.3}).wait(1).to({graphics:mask_graphics_10,x:394.8,y:294.4}).wait(1).to({graphics:mask_graphics_11,x:395.1,y:295.4}).wait(1).to({graphics:mask_graphics_12,x:395.3,y:296.4}).wait(1).to({graphics:mask_graphics_13,x:395.6,y:297.5}).wait(1).to({graphics:mask_graphics_14,x:395.9,y:298.5}).wait(1).to({graphics:mask_graphics_15,x:396.2,y:299.5}).wait(1).to({graphics:mask_graphics_16,x:396.4,y:300.6}).wait(1).to({graphics:mask_graphics_17,x:396.7,y:301.6}).wait(1).to({graphics:mask_graphics_18,x:397,y:302.6}).wait(1).to({graphics:mask_graphics_19,x:397.3,y:303.7}).wait(1).to({graphics:mask_graphics_20,x:397.6,y:304.7}).wait(1).to({graphics:mask_graphics_21,x:397.8,y:305.8}).wait(1).to({graphics:mask_graphics_22,x:398.1,y:306.8}).wait(1).to({graphics:mask_graphics_23,x:398.4,y:307.8}).wait(1).to({graphics:mask_graphics_24,x:398.7,y:308.9}).wait(1).to({graphics:mask_graphics_25,x:398.9,y:309.9}).wait(1).to({graphics:mask_graphics_26,x:399.2,y:310.9}).wait(1).to({graphics:mask_graphics_27,x:399.5,y:312}).wait(1).to({graphics:mask_graphics_28,x:399.8,y:313}).wait(1).to({graphics:mask_graphics_29,x:400,y:314}).wait(1));

	// Layer 2
	this.instance_2 = new lib.hackershackerlar1995filmizleafismovieposter();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,134,0.429,0.46);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Layer 1
	this.text = new cjs.Text("HACKERLAR 1995", "bold 32px 'Comic Sans MS'", "#006666");
	this.text.lineHeight = 47;
	this.text.lineWidth = 333;
	this.text.parent = this;
	this.text.setTransform(-341,56.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:-304.2},0).wait(1).to({x:-267.4},0).wait(1).to({x:-230.6},0).wait(1).to({x:-193.8},0).wait(1).to({x:-173.7},0).wait(1).to({x:-153.6},0).wait(1).to({x:-133.5},0).wait(1).to({x:-113.3},0).wait(1).to({x:-93.2},0).wait(1).to({x:-73.1},0).wait(1).to({x:-53},0).wait(1).to({x:-32.9},0).wait(1).to({x:-12.8},0).wait(1).to({x:7.3},0).wait(1).to({x:27.5},0).wait(1).to({x:47.6},0).wait(1).to({x:67.7},0).wait(1).to({x:87.8},0).wait(1).to({x:100.4},0).wait(1).to({x:113.1},0).wait(1).to({x:125.7},0).wait(1).to({x:138.4},0).wait(1).to({x:151},0).wait(1).to({x:163.6},0).wait(1).to({x:176.3},0).wait(1).to({x:188.9},0).wait(1).to({x:201.6},0).wait(1).to({x:214.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57,304.3,1113.6,420.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;