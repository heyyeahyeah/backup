(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_135 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_135_1();

	// image_replace
	this.instance = new lib.replace_image_135();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.2,0,681.3,800);


// symbols:
(lib.replace_image_135 = function() {
	this.initialize(img.replace_image_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.reflect_inner = function() {
	this.initialize();

	// thin
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,247.5,0.1,-247.4).s().p("EgXbAnEMAAAhOHMAu2AAAMAAABOHg");
	this.shape.setTransform(150,250);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,500);


(lib.reflect_mask_135 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("A43GjQhmgbAAiGIgGAAQgEhuAAhuIAKAAQAAgFACgEQAggzg3gmQgEAAgBgCQgRgegIgmQARgDgBgbIAEAAIAAgKIAAgKQA7gqBbgIIAKAAIAAgKQAYg+AQhMQAFgXAagKQBNgeAxAsQALAKAFAQQANApAZAeQBOgbA8AmQA/AogfBZQgpAigtAfIAGADQAqAYApATQAYALACgWQAkgegBhGQAAgFAGgFQAngpAtgjQAFgEABgKQgBhCAogYQBJgbA3AoQACACAAAFQAtA9A+AsQAgAWAjAPQAQAIAUADQAcAEAMAXQArBDAiBQQAHARgFAiQgKBCA+AAQAXAAAQAOQAcAHACgRIAAgKQgRgggPglQgQgmgRgiQgihIgBhpQAWg1BEAAQAvAAALgcQAehSCFARIAKABQBjgFA+AgQAeAOAXASQASAQAQAUQAXAxgUA0QgPAlAeArQAZAlgVAqQgYAzACBNQA8BLA4hGIAEgIQAJghgEgZQgFgdAAgeQApg0A2gqQAFgEgDgJQgPgxgHg+QgCgbARgDQAphKCJAgQA3ANAlAnQAJAuARApQAKAYAbgMQAWgJAXgFQA7gNBIAEQBWAEAjgoQA5hnC3ASIAAgFQAzhABXgeQARgGAQgEQAzgNAbARQBKALAgA3QAgA0AMBIQB0AnArBvQABAFABAFQgDBahBAiQgoAVgtAOQgvAOADBBQACAZgPAPQgKAKgBAUQg6BhirgWQgGAAgFgDQgjgRgZgZIgJAAQhEAHgqgRQg8gLgjgjQgjgjgKg7QgIg0ARgcQgJg9hbARQgbAGgXABQhkAGhPAVQgKBHgQA8QgFAOgFAMQgfA9g2AqQgtAdhUgKQg/gHg5gMQgVgGgGANQgJAXgZADQhmAOhDgbIgKAAIiVAAQgvAIgsAGQg9AIg4AOQh/Afg2hNQgXg1gdA0QgEAGgGACQg8AZg6gYQgVgIgUgBQgvgCgrANQAAAFgBAAQhMAMg1gRQgQgOgiADQgJABgHAFQgqAfhHgDQgXgBgaAFQhBAPhWgCQgtgLgNgoQgNgngyAAQgJAjgOAhQgMAfgfASQgQAJgYAAQgSAAgXgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-174.4,-42.4,349,85);


(lib.glitter_inner_sphere = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.reflect = function() {
	this.initialize();

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.setTransform(0,-307.8,1.238,1.238,0,0,-19.9);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-434.8,349,746.1);


(lib.reflect_container_cjs_135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flash:20});

	// timeline functions:
	this.frame_0 = function() {
		this.preview.visible = false;
	}
	this.frame_20 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

	// preview
	this.preview = new lib.reflect();
	this.preview.setTransform(-0.3,0,1,1,0,0,0,-0.4,0);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preview}]}).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.setTransform(-0.3,477.6,1,1,0,0,0,-0.4,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:0,y:0},9,cjs.Ease.get(-0.99)).to({regY:0.1,y:-477.1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-434.8,349,746.1);


(lib.glitter_inner = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.setTransform(0,0.1,1.5,0.086,-44.9);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.setTransform(0,0,0.334,0.334);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.setTransform(0,0,1.5,0.086,45);

	this.instance_3 = new lib.glitter_inner_sphere();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter = function() {
	this.initialize();

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.reflect_wrapper_135 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_135();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-434.8,349,746.1);


(lib.glitter_container_cjs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:20});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay( Math.floor( Math.random() * 20 ) );
	}
	this.frame_20 = function() {
		
	}
	this.frame_50 = function() {
		this.gotoAndPlay( 0 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50));

	// mc
	this.lux = new lib.glitter();

	this.timeline.addTween(cjs.Tween.get(this.lux).to({_off:true},1).wait(19).to({alpha:0,_off:false},0).to({scaleX:0.73,scaleY:0.73,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.49)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter_wrapper = function() {
	this.initialize();

	// cjs
	this.instance = new lib.glitter_container_cjs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.sign_effect_135_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(90.6,596.7,0.725,0.725);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(232.5,653.6);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(14.8,614.2);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(287.8,609.8);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(138.5,657.4);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(347.1,627.1,0.692,0.692);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(69.9,638.3,0.66,0.66);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(187.4,604.6);

	// mask
	this.reflect_mask = new lib.reflect_mask_135();
	this.reflect_mask.setTransform(181.5,628.2);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgYUA0TQhmgagBiHIgEAAQgGhuAAhuIAKAAQAAgFADgDQAgg1g3gnQgEAAgCgCQgRgegGgmQARgDgDgbIAFAAIAAgKIAAgKQA7gpBcgIIAKgBIAAgKQAWg+ARhMQAFgWAagKQBMgfAyAsQAKAKAGARQANAoAZAeQBNgbA+AnQA+AoggBYQgoAjgtAeIAHAEQAqAXApAUQAXAKADgWQAjgdAAhHQAAgFAEgFQAogoAugkQAEgEAAgKQAAhBApgZQBIgaA3AoQADABgBAFQAsA9A/AsQAgAWAjAQQAQAHAUADQAcAEANAXQAqBEAhBQQAIATgFAhQgKBDA9AAQAYAAARANQAaAHADgRIAAgKQgRgfgQgmQgPgmgQgjQgkhJAAhpQAXg1BDAAQAvAAALgcQAehRCFARIAKAAQBjgEA/AfQAdAPAXASQASAPAPAUQAZAxgVA1QgPAkAdAsQAaAlgUArQgZA0ABBMQA+BLA2hGIAGgHQAIghgEgaQgGgdABgeQApg2A1gqQAGgEgDgJQgPgxgHg9QgDgcASgDQAphJCIAgQA4ANAlAmQAIAuASApQAKAYAcgMQAUgJAZgFQA6gMBIAEQBWAEAjgpQA5hmC2ARIAAgFQA0g/BXgfQAQgGARgEQAzgNAbARQBKAMAhA3QAeAzAOBIQByAoAsBvQACAEAAAFQgDBdhBAhQgoAWgtANQgwAOAFBCQABAZgPAPQgKAKgBATQg5BhisgVQgFgBgHgDQghgRgZgZIgKABQhEAHgrgSQg7gKgjgjQgjgjgJg8QgJg0ASgcQgKg9hbASQgcAFgWABQhlAGhPAVQgIBHgSA8QgDAOgHAMQgeA+g1ApQguAdhUgJQg/gHg6gNQgUgGgGAOQgJAWgaAEQhkANhEgbIgKAAIiUAAQgwAIgrAGQg/AIg3AOQh+Afg3hNQgWg1geA0QgEAGgFADQg9AYg6gXQgUgJgVgBQgwgCgqANQAAAFAAAAQhNANg0gSQgRgNgiACQgKABgGAFQgqAghHgEQgWgBgbAGQhAAOhYgCQgsgKgNgpQgNgmgygBQgKAjgNAiQgMAfgeARQgRAKgYAAQgSAAgXgGg");
	mask.setTransform(178,335.3);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_135();
	this.reflect_wrapper.setTransform(7,628.2);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.2,193.3,427.2,746.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;