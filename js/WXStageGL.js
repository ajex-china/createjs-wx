/**
 * Created by ajex from http://www.ajexoop.com 
 * versions 0.0.2
 */
export default class StageGL extends createjs.StageGL {
  constructor(canvas, options) {
    super(canvas, options)
  }
  _initializeWebGL() {
    if (this.canvas) {
      if (!this._webGLContext || this._webGLContext.canvas !== this.canvas) {
        // A context hasn't been defined yet,
        // OR the defined context belongs to a different canvas, so reinitialize.

        // defaults and options
        var options = {
          depth: false, // Disable the depth buffer as it isn't used.
          alpha: this._transparent, // Make the canvas background transparent.
          stencil: true,
          antialias: this._antialias,
          premultipliedAlpha: this._premultiply, // Assume the drawing buffer contains colors with premultiplied alpha.
          preserveDrawingBuffer: this._preserveBuffer
        };

        var gl = this._webGLContext = this._fetchWebGLContext(this.canvas, options);
        if (!gl) { return null; }

        this.updateSimultaneousTextureCount(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
        this._maxTextureSlots = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        this._createBuffers(gl);
        this._initTextures(gl);

        gl.disable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiply);
        //gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);

        this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a);
        this.updateViewport(this._viewportWidth || this.canvas.width, this._viewportHeight || this.canvas.height);
      }
    } else {
      this._webGLContext = null;
    }
    return this._webGLContext;
  };
  _fetchWebGLContext(canvas, options) {
    var gl;

    try {
      gl = canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options);
    } catch (e) {
      // don't do anything in catch, null check will handle it
    }
    if (!gl) {
      var msg = "Could not initialize WebGL";
      console.error ? console.error(msg) : console.log(msg);
    } else {
      gl.viewportWidth = canvas.width;
      gl.viewportHeight = canvas.height;
    }
    //WebGLRenderingContext = gl;
    if (gl.wxBindCanvasTexture) gl.wxBindCanvasTexture(gl.TEXTURE_2D, canvas)
    return gl;
  };
}

createjs.StageGL.isWebGLActive = function (ctx) {
  return true
};