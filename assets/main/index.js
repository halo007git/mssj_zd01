System.register("chunks:///_virtual/CameraMap.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,a,n,o,i,c,l,p;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,a=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,i=e._decorator,c=e.Node,l=e.Vec3,p=e.Component}],execute:function(){var s,u,f,h,y;o._RF.push({},"65c3aKbrXBOE4WhLEnqa4hB","CameraMap",void 0);var m=i.ccclass,d=i.property;e("CameraMap",(s=m("CameraMap"),u=d(c),s((y=r((h=function(e){function r(){for(var r,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(r=e.call.apply(e,[this].concat(o))||this)._camPos=new l,r._rolePos=new l,a(r,"role",y,n(r)),r}t(r,e);var o=r.prototype;return o.start=function(){},o.update=function(e){},r}(p)).prototype,"role",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=h))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/JoyStick01.ts",["./rollupPluginModLoBabelHelpers.js","cc","./fairygui.mjs","./JoystickModule.ts"],(function(t){var i,o,e,n,s,c,r,a,l,h,y,u,d,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,o=t.inheritsLoose,e=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,c=t._decorator,r=t.Node,a=t.Vec2,l=t.RigidBody2D,h=t.Component},function(t){y=t.UIPackage,u=t.GRoot,d=t.GTextField},function(t){p=t.default}],execute:function(){var _,k,v,f,g;s._RF.push({},"adb8d6H/axLx62lPa4oYhn2","JoyStick01",void 0);var J=c.ccclass,w=c.property;t("JoyStick01",(_=J("JoyStick01"),k=w(r),_((g=i((f=function(t){function i(){for(var i,o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(i=t.call.apply(t,[this].concat(s))||this)._view=void 0,i._joystick=void 0,i._text=void 0,i._roleVelocity=new a(0,0),e(i,"role",g,n(i)),i}o(i,t);var s=i.prototype;return s.start=function(){y.loadPackage("UI/Joystick",this.onUILoaded.bind(this))},s.update=function(t){},s.onUILoaded=function(){this._view=y.createObject("Joystick","Main").asCom,this._view.setSize(u.inst.width,u.inst.height),u.inst.addChild(this._view),this._text=this._view.getChild("n9",d),this._text.setPosition(100,10),this._text.text="1111111",this._joystick=new p(this._view),this._joystick.on(p.JoystickMoving,this.onJoystickMoving,this),this._joystick.on(p.JoystickUp,this.onJoystickUp,this)},s.onJoystickMoving=function(t,i,o){this._text.text=Math.round(t)+" | "+Math.round(100*i)+","+Math.round(100*o);this._roleVelocity.x=10*i,this._roleVelocity.y=10*-o,this.role.getComponent(l).linearVelocity=this._roleVelocity},s.onJoystickUp=function(){this.role.getComponent(l).linearVelocity=new a(0,0)},i}(h)).prototype,"role",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=f))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/JoystickModule.ts",["./rollupPluginModLoBabelHelpers.js","cc","./fairygui.mjs"],(function(t){var i,h,e,s,o,n,_,u,a,c;return{setters:[function(t){i=t.inheritsLoose,h=t.assertThisInitialized},function(t){e=t.cclegacy,s=t.Vec2,o=t.EventTarget},function(t){n=t.GRoot,_=t.GTween,u=t.EaseType,a=t.GButton,c=t.Event}],execute:function(){e._RF.push({},"be120q4nUtAVr7WtsYeeOFJ","JoystickModule",void 0);var r=t("default",function(t){function e(i){var e;return(e=t.call(this)||this)._InitX=void 0,e._InitY=void 0,e._startStageX=0,e._startStageY=0,e._lastStageX=0,e._lastStageY=0,e._button=void 0,e._touchArea=void 0,e._thumb=void 0,e._center=void 0,e._touchId=void 0,e._tweener=null,e._curPos=void 0,e.radius=void 0,e._button=i.getChild("joystick",a),e._button.changeStateOnClick=!1,e._thumb=e._button.getChild("thumb"),e._touchArea=i.getChild("joystick_touch"),e._center=i.getChild("joystick_center"),e._InitX=e._center.x+e._center.width/2,e._InitY=e._center.y+e._center.height/2,e._touchId=-1,e.radius=100,e._curPos=new s,e._touchArea.on(c.TOUCH_BEGIN,e.onTouchDown,h(e)),e._touchArea.on(c.TOUCH_MOVE,e.onTouchMove,h(e)),e._touchArea.on(c.TOUCH_END,e.onTouchEnd,h(e)),e._touchArea.setSize(i.width,i.height),e._touchArea.setPosition(0,0),e}i(e,t);var o=e.prototype;return o.trigger=function(t){this.onTouchDown(t)},o.onTouchDown=function(t){if(-1==this._touchId){this._touchId=t.touchId,this._tweener&&(this._tweener.kill(),this._tweener=null),n.inst.globalToLocal(t.pos.x,t.pos.y,this._curPos);var i=this._curPos.x,h=this._curPos.y;this._button.selected=!0,i<0?i=0:i>this._touchArea.width&&(i=this._touchArea.width),h>n.inst.height?h=n.inst.height:h<this._touchArea.y&&(h=this._touchArea.y),this._lastStageX=i,this._lastStageY=h,this._startStageX=i,this._startStageY=h,this._center.visible=!0,this._center.x=i-this._center.width/2,this._center.y=h-this._center.height/2,this._button.x=i-this._button.width/2,this._button.y=h-this._button.height/2;var e=i-this._InitX,s=h-this._InitY,o=180*Math.atan2(s,e)/Math.PI;this._thumb.rotation=o+90,t.captureTouch()}},o.onTouchMove=function(t){if(-1!=this._touchId&&t.touchId==this._touchId){var i=t.pos.x,h=t.pos.y,s=i-this._lastStageX,o=h-this._lastStageY;this._lastStageX=i,this._lastStageY=h;var _=this._button.x+s,u=this._button.y+o,a=_+this._button.width/2-this._startStageX,c=u+this._button.height/2-this._startStageY,r=Math.atan2(c,a),d=180*r/Math.PI;this._thumb.rotation=d+90;var g=Math.cos(r),l=Math.sin(r),b=this.radius*g,v=this.radius*l;Math.abs(a)>Math.abs(b)&&(a=b),Math.abs(c)>Math.abs(v)&&(c=v),(_=this._startStageX+a)<0&&(_=0),(u=this._startStageY+c)>n.inst.height&&(u=n.inst.height),this._button.x=_-this._button.width/2,this._button.y=u-this._button.height/2,this.emit(e.JoystickMoving,d,g,l)}},o.onTouchEnd=function(t){-1!=this._touchId&&t.touchId==this._touchId&&(this._touchId=-1,this._thumb.rotation=this._thumb.rotation+180,this._center.visible=!1,this._tweener=_.to2(this._button.x,this._button.y,this._InitX-this._button.width/2,this._InitY-this._button.height/2,.3).setTarget(this._button,this._button.setPosition).setEase(u.CircOut).onComplete(this.onTweenComplete,this),this.emit(e.JoystickUp))},o.onTweenComplete=function(){this._tweener=null,this._button.selected=!1,this._thumb.rotation=0,this._center.visible=!0,this._center.x=this._InitX-this._center.width/2,this._center.y=this._InitY-this._center.height/2},e}(o));r.JoystickMoving="JoystickMoving",r.JoystickUp="JoystickUp",e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./CameraMap.ts","./JoyStick01.ts","./JoystickModule.ts","./TestFgui.ts","./TileMapHook.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/TestFgui.ts",["./rollupPluginModLoBabelHelpers.js","cc","./fairygui.mjs"],(function(t){var n,i,e,o,s,a,c,r,h,l,u;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy,e=t._decorator,o=t.profiler,s=t.game,a=t.Component},function(t){c=t.GRoot,r=t.UIPackage,h=t.RelationType,l=t.Event,u=t.Window}],execute:function(){var d;i._RF.push({},"aa3349KCmhOh5uEGJJ41yoF","TestFgui",void 0);var g=e.ccclass,_=(e.property,t("TestFgui",g("TestFgui")(d=function(t){function i(){for(var n,i=arguments.length,e=new Array(i),o=0;o<i;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this)._view=null,n._bagWindow=null,n._closeButton=null,n}n(i,t);var e=i.prototype;return e.start=function(){o.hideStats(),s.frameRate=55,c.create(),console.log(c.inst.node.parent,c.inst.node.layer)},e.onUILoaded=function(){var t=this;this._view=r.createObject("Bag","Main").asCom,this._view.makeFullScreen(),c.inst.addChild(this._view),this._bagWindow=new _,this._view.getChild("bagBtn").onClick((function(){t._bagWindow.show()}),this),r.loadPackage("UI/MainMenu",this.onUILoadedMain.bind(this))},e.onUILoadedMain=function(){this._closeButton=r.createObject("MainMenu","CloseButton"),this._closeButton.setPosition(c.inst.width-this._closeButton.width-10,c.inst.height-this._closeButton.height-10),this._closeButton.addRelation(c.inst,h.Right_Right),this._closeButton.addRelation(c.inst,h.Bottom_Bottom),this._closeButton.sortingOrder=1e5,c.inst.addChild(this._closeButton)},i}(a))||d),function(t){function i(){return t.call(this)||this}n(i,t);var e=i.prototype;return e.onInit=function(){this.contentPane=r.createObject("Bag","BagWin").asCom,this.center()},e.onShown=function(){var t=this.contentPane.getChild("list");t.on(l.CLICK_ITEM,this.onClickItem,this),t.itemRenderer=this.renderListItem.bind(this),t.setVirtual(),t.numItems=45},e.renderListItem=function(t,n){n.icon="Icons/i"+Math.floor(10*Math.random()),n.text=""+Math.floor(100*Math.random())},e.onClickItem=function(t){this.contentPane.getChild("n11").icon=t.icon,this.contentPane.getChild("n13").text=t.icon},i}(u));i._RF.pop()}}}));

System.register("chunks:///_virtual/TileMapHook.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,r,i,n,a,l,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,l=e.Node,c=e.Component}],execute:function(){var p,s,u,f,d;n._RF.push({},"cfd41mIVIZBDZWuxJQjyaOq","TileMapHook",void 0);var h=a.ccclass,y=a.property;e("TileMapHook",(p=h("TileMapHook"),s=y(l),p((d=t((f=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,r(t,"role",d,i(t)),t}o(t,e);var n=t.prototype;return n.start=function(){this.node.insertChild(this.role,1)},n.update=function(e){},t}(c)).prototype,"role",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=f))||u));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});