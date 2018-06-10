/**
 * Created by ajex from http://www.ajexoop.com 
 * versions 0.0.2
 */
export default class WXGraphics extends createjs.Graphics {
  constructor() {
    super()
  }
  setStrokeStyle = function (thickness, caps, joints, miterLimit, ignoreScale) {
    this._updateInstructions(true);
    this._strokeStyle = this.command = new WXGraphics.StrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);

    // ignoreScale lives on Stroke, not StrokeStyle, so we do a little trickery:
    if (this._stroke) { this._stroke.ignoreScale = ignoreScale; }
    this._strokeIgnoreScale = ignoreScale;
    return this;
  };
}
var G = WXGraphics;
var p = (G.StrokeStyle = function (width, caps, joints, miterLimit, ignoreScale) {
  this.width = width;
  this.caps = caps;
  this.joints = joints;
  this.miterLimit = miterLimit;
  this.ignoreScale = ignoreScale;
}).prototype;
p.exec = function (ctx) {
  ctx.lineWidth = (this.width == null ? "1" : this.width);
  ctx.lineCap = (this.caps == null ? "butt" : (isNaN(this.caps) ? this.caps : WXGraphics.STROKE_CAPS_MAP[this.caps]));
  ctx.lineJoin = (this.joints == null ? "miter" : (isNaN(this.joints) ? this.joints : WXGraphics.STROKE_JOINTS_MAP[this.joints]));
  ctx.miterLimit = (this.miterLimit == null ? 10 : this.miterLimit);
  ctx.ignoreScale = (this.ignoreScale == null ? false : this.ignoreScale);
};
p.path = false;