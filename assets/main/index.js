System.register("chunks:///_virtual/cblog.ts",["cc"],(function(e){var r;return{setters:[function(e){r=e.cclegacy}],execute:function(){r._RF.push({},"0a2f4K7ZIpCAovi8nCr1Vxw","cblog",void 0);var l=e("CbLog",function(){function e(){}var r=e.prototype;return r.info=function(){for(var e=arguments.length,r=new Array(e),l=0;l<e;l++)r[l]=arguments[l];this.custLog("INFO",r)},r.error=function(){for(var e=arguments.length,r=new Array(e),l=0;l<e;l++)r[l]=arguments[l];this.custLog("ERROR",r)},r.test=function(){for(var e=arguments.length,r=new Array(e),l=0;l<e;l++)r[l]=arguments[l];console.log("[INFO2]",r)},r.custLog=function(e,r){try{null.aa=1}catch(n){var l=this.defaultParseCallStack(n);1==r.length?console.log("["+e+"] ["+l.callerName+"]",r[0]):2==r.length?console.log("["+e+"] ["+l.callerName+"]",r[0],r[1]):3==r.length?console.log("["+e+"] ["+l.callerName+"]",r[0],r[1],r[2]):console.log("["+e+"] ["+l.callerName+"]",r)}},r.defaultParseCallStack=function(e){try{var r=e.stack.split("\n");if(!r.length)return null;var l=/^(?:\s*)at (?:(.+) \()?(?:([^(]+?):(\d+):(\d+))\)?$/.exec(r[3]);if(l&&5===l.length){var n="",t="",a="";if(l[1]&&""!==l[1]){var o=l[1].replace(/[[\]]/g,"").split(" as ");if(t=o[0],a=(a=o[1])||"",t.includes(".")){var c=t.split(".");n=c[0],t=c[1]}}return{fileName:l[2],lineNumber:parseInt(l[3],10),columnNumber:parseInt(l[4],10),callStack:r.join("\n"),className:n,functionName:t,functionAlias:a,callerName:l[1]||""}}console.error("log4js.logger - defaultParseCallStack error")}catch(e){console.error("log4js.logger - defaultParseCallStack error",e)}return null},e}());l.inst=new l,r._RF.pop()}}}));

System.register("chunks:///_virtual/ChangeMapMgr.ts",["cc","./cblog.ts"],(function(e){var i,t,o,n,a,r,d,s,l,h,p,c,g,m,_;return{setters:[function(e){i=e.cclegacy,t=e.find,o=e.Vec3,n=e.Node,a=e.TiledMap,r=e.resources,d=e.TiledMapAsset,s=e.TiledObjectGroup,l=e.RigidBody2D,h=e.ERigidBody2DType,p=e.BoxCollider2D,c=e.CircleCollider2D,g=e.Vec2,m=e.PolygonCollider2D},function(e){_=e.CbLog}],execute:function(){i._RF.push({},"1418e4FD7VMdIrtGNAl3Uma","ChangeMapMgr",void 0);var u=e("ChangeMapMgr",function(){function e(){this._inited=!1,this._mapRoot=void 0,this._role=void 0,this._mapNode=void 0,this._tilemapTmxNode=void 0,this._tileMapBgNode=void 0,this._tileMapTopNode=void 0,this._tileMapColliderNode=void 0,this._tileMapTriggerNode=void 0,this._custBlockNode=void 0,this._custTriggerNode=void 0}var i=e.prototype;return i.init=function(){this._inited||(this._mapRoot=t("Canvas/MapRoot"),this._role=t("Canvas/MapRoot/role"),this._inited=!0)},i.changeMap=function(e){_.inst.info("path="+e),this.deleteOldMap(),this.loadNewMap(e)},i.deleteOldMap=function(){_.inst.info(""),this._role.setParent(this._mapRoot),this._role.scale=new o(1,1,1);var e=this._mapRoot.getChildByName("map");e&&e.removeFromParent()},i.loadNewMap=function(e){var i=this;_.inst.info("path="+e),this._mapNode=new n("map"),this._mapRoot.insertChild(this._mapNode,0),this._tilemapTmxNode=new n("tilemap"),this._mapNode.addChild(this._tilemapTmxNode),this._tilemapTmxNode.addComponent(a),this._custBlockNode=new n("cust_block"),this._mapNode.addChild(this._custBlockNode),this._custTriggerNode=new n("cust_trigger"),this._mapNode.addChild(this._custTriggerNode),r.load(e,d,(function(t,n){if(_.inst.info("[resources.load]",t,n),t)_.inst.error("load tilemap <"+e+"> failed");else{var r=i._tilemapTmxNode.getComponent(a);r.tmxAsset=n,r.enableCulling=!1,i._tilemapTmxNode.children.forEach((function(e){_.inst.info(e.name),e.layer=2})),i._mapNode.scale=new o(1.8,1.8,1.8),i._tilemapTmxNode.insertChild(i._role,1),i._role.scale=new o(.6,.6,.6),i._tileMapBgNode=i._tilemapTmxNode.getChildByName("bg"),i._tileMapTopNode=i._tilemapTmxNode.getChildByName("top"),i._tileMapColliderNode=i._tilemapTmxNode.getChildByName("collider"),i._tileMapTriggerNode=i._tilemapTmxNode.getChildByName("trigger"),i.createTriggers(),i.createColliders()}}))},i.createTriggers=function(){var e=this;this._tileMapTriggerNode.getComponent(s).getObjects().forEach((function(i){var t=i,o=null;t.jsonProp&&(o=JSON.parse(t.jsonProp)),0==t.type&&t.width>0?e.createBoxTrigger(t,o):1==t.type&&e.createCircleTrigger(t,o)}))},i.createBoxTrigger=function(e,i){if(_.inst.info(e,i),e){var t=this.convTilePosToUiPos(e.x,e.y),o=new n;o.name="trigger_"+e.id;var a=o.addComponent(l);a.gravityScale=0,"static"==i.rigidType?a.type=h.Static:"sensor"==i.rigidType&&(a.type=h.Kinematic);var r=o.addComponent(p);r.size.width=e.width,r.size.height=e.height,r.tag=110,"sensor"==i.rigidType&&(r.sensor=!0),r.jsonObj=i,this._custTriggerNode.addChild(o),o.setPosition(t.x+e.width/2,t.y-e.height/2)}else console.log("obj is null")},i.createCircleTrigger=function(e,i){if(_.inst.info(e,i),e){var t=this.convTilePosToUiPos(e.x,e.y),o=new n;o.name="trigger_"+e.id;var a=o.addComponent(l);a.gravityScale=0,"static"==i.rigidType?a.type=h.Static:"sensor"==i.rigidType&&(a.type=h.Kinematic);var r=o.addComponent(c);r.radius=e.width/2,r.tag=110,"sensor"==i.rigidType&&(r.sensor=!0),r.jsonObj=i,this._custTriggerNode.addChild(o),o.setPosition(t.x+e.width/2,t.y-e.height/2)}else console.log("obj is null")},i.createColliders=function(){for(var e=this._tileMapColliderNode.getComponent(s).getObjects(),i=0;i<e.length;i++){var t=e[i];2==t.type?this.createPolygonCollider(t):0==t.type&&t.width>0&&this.createBoxCollider(t)}},i.getMapObjById=function(e){for(var i=this._tileMapColliderNode.getComponent(s).getObjects(),t=0;t<i.length;t++){var o=i[t];if(o.id==e)return o}return null},i.convTilePosToUiPos=function(e,i){var t=this._tilemapTmxNode.getComponent(a),o=t.getTileSize(),n=t.getMapSize().width,r=t.getMapSize().height,d=n*o.width,s=r*o.height,l=new g(0,0);return l.x=e-d/2,l.y=i-s/2,l},i.createPolygonCollider=function(e){if(e){var i=this.convTilePosToUiPos(e.x,e.y),t=new n;t.name="block_"+e.id;var o=t.addComponent(l);o.type=h.Static,o.gravityScale=0;var a=t.addComponent(m);a.points=[];for(var r=0;r<e.points.length;r++){var d=e.points[r];a.points.push(new g(d.x,d.y))}this._custBlockNode.addChild(t),t.setPosition(i.x,i.y),_.inst.info("node="+t.name)}else console.log("createPolygonCollider() obj is null")},i.createBoxCollider=function(e){if(e){var i=this.convTilePosToUiPos(e.x,e.y),t=new n;t.name="block_"+e.id;var o=t.addComponent(l);o.type=h.Static,o.gravityScale=0;var a=t.addComponent(p);a.size.width=e.width,a.size.height=e.height,this._custBlockNode.addChild(t),t.setPosition(i.x+e.width/2,i.y-e.height/2),_.inst.info("node="+t.name)}else console.log("createBoxCollider() error, obj is null")},e}());u.inst=new u,i._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameConfig.ts",["./rollupPluginModLoBabelHelpers.js","cc","./cblog.ts","./ChangeMapMgr.ts"],(function(n){var t,o,e,i,r,a,c,s;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,e=n._decorator,i=n.profiler,r=n.game,a=n.Component},function(n){c=n.CbLog},function(n){s=n.ChangeMapMgr}],execute:function(){var u;o._RF.push({},"c3daaP7OCBIvY4E84/DDcQp","GameConfig",void 0);var f=e.ccclass;e.property,n("GameConfig",f("GameConfig")(u=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var e=o.prototype;return e.onLoad=function(){c.inst.info(""),i.hideStats(),r.frameRate=55},e.start=function(){s.inst.init()},o}(a))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameConfig.ts","./TestColliderByScript.ts","./TestColliderInTilemap.ts","./TestFgui.ts","./TestJoyStick.ts","./TestJoystickModule.ts","./TestLoadMap.ts","./TestRole.ts","./TestRoleAni.ts","./TestTrigger.ts","./ChangeMapMgr.ts","./cblog.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/TestColliderByScript.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,r,i,n,a,c,l,s,p,d,u,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,c=e.Node,l=e.UITransform,s=e.Vec3,p=e.RigidBody2D,d=e.ERigidBody2DType,u=e.BoxCollider2D,y=e.Component}],execute:function(){var f,C,v,g,h;n._RF.push({},"f5577/XWe1DXo4oynYRIj1o","TestColliderByScript",void 0);var S=a.ccclass,m=a.property;e("TestColliderByScript",(f=S("TestColliderByScript"),C=m(c),f((h=t((g=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,r(t,"blockParent",h,i(t)),t}o(t,e);var n=t.prototype;return n.start=function(){},n.test=function(){var e=new c("aaa");e.addComponent(l).setContentSize(100,100),e.setPosition(new s(-48.638,127.943,0));var t=e.addComponent(p);t.type=d.Static,t.gravityScale=0,e.addComponent(u).size=e.getComponent(l).contentSize,this.blockParent.addChild(e)},t}(y)).prototype,"blockParent",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=g))||v));n._RF.pop()}}}));

System.register("chunks:///_virtual/TestColliderInTilemap.ts",["./rollupPluginModLoBabelHelpers.js","cc","./cblog.ts"],(function(e){var i,t,o,n,l,r,a,s,d,c,p,h,y,g,u,v;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){l=e.cclegacy,r=e._decorator,a=e.TiledMap,s=e.Node,d=e.TiledObjectGroup,c=e.Vec2,p=e.RigidBody2D,h=e.ERigidBody2DType,y=e.PolygonCollider2D,g=e.BoxCollider2D,u=e.Component},function(e){v=e.CbLog}],execute:function(){var f,C,m,b,P,T,w,x,z;l._RF.push({},"23afficjcNMNpRU4XE/BxI7","TestColliderInTilemap",void 0);var B=r.ccclass,S=r.property;e("TestColliderInTilemap",(f=B("TestColliderInTilemap"),C=S(a),m=S(s),b=S(s),f((w=i((T=function(e){function i(){for(var i,t=arguments.length,l=new Array(t),r=0;r<t;r++)l[r]=arguments[r];return i=e.call.apply(e,[this].concat(l))||this,o(i,"tilemap",w,n(i)),o(i,"colliderLayer",x,n(i)),o(i,"block",z,n(i)),i}t(i,e);var l=i.prototype;return l.start=function(){},l.update=function(e){},l.getMapObjById=function(e){for(var i=this.colliderLayer.getComponent(d).getObjects(),t=0;t<i.length;t++){var o=i[t];if(o.id==e)return o}return null},l.convTilePosToUiPos=function(e,i){var t=this.tilemap.getTileSize(),o=this.tilemap.getMapSize().width,n=this.tilemap.getMapSize().height,l=o*t.width,r=n*t.height,a=new c(0,0);return a.x=e-l/2,a.y=i-r/2,a},l.createColliders=function(){for(var e=this.colliderLayer.getComponent(d).getObjects(),i=0;i<e.length;i++){var t=e[i];2==t.type?this.createPolygonCollider(t):0==t.type&&t.width>0&&this.createBoxCollider(t)}},l.createPolygonCollider=function(e){if(e){var i=this.convTilePosToUiPos(e.x,e.y),t=new s;t.name=e.id+"";var o=t.addComponent(p);o.type=h.Static,o.gravityScale=0;var n=t.addComponent(y);n.points=[];for(var l=0;l<e.points.length;l++){var r=e.points[l];n.points.push(new c(r.x,r.y))}this.block.addChild(t),t.setPosition(i.x,i.y),v.inst.info("node="+t.name)}else console.log("createPolygonCollider() obj is null")},l.createBoxCollider=function(e){if(e){var i=this.convTilePosToUiPos(e.x,e.y),t=new s;t.name=e.id+"";var o=t.addComponent(p);o.type=h.Static,o.gravityScale=0;var n=t.addComponent(g);n.size.width=e.width,n.size.height=e.height,this.block.addChild(t),t.setPosition(i.x+e.width/2,i.y-e.height/2),v.inst.info("node="+t.name)}else console.log("createBoxCollider() error, obj is null")},l.testPolygonCollider=function(){var e=this.getMapObjById("22");if(e){var i=this.convTilePosToUiPos(e.x,e.y),t=new s,o=t.addComponent(p);o.type=h.Static,o.gravityScale=0;var n=t.addComponent(y);n.points=[];for(var l=0;l<e.points.length;l++){var r=e.points[l];n.points.push(new c(r.x,r.y))}this.block.addChild(t),t.setPosition(i.x,i.y)}else console.log("testPolygonCollider() error")},l.testBoxCollider=function(){var e=this.getMapObjById("18");if(e){var i=this.convTilePosToUiPos(e.x,e.y),t=new s,o=t.addComponent(p);o.type=h.Static,o.gravityScale=0;var n=t.addComponent(g);n.size.width=e.width,n.size.height=e.height,this.block.addChild(t),t.setPosition(i.x+e.width/2,i.y-e.height/2)}else console.log("testPolygonCollider() error")},i}(u)).prototype,"tilemap",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=i(T.prototype,"colliderLayer",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=i(T.prototype,"block",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=T))||P));l._RF.pop()}}}));

System.register("chunks:///_virtual/TestFgui.ts",["./rollupPluginModLoBabelHelpers.js","cc","./fairygui.mjs"],(function(t){var i,n,e,o,s,a,r,c,h,l,u,d,g,f,_;return{setters:[function(t){i=t.applyDecoratedDescriptor,n=t.inheritsLoose,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,a=t._decorator,r=t.Node,c=t.Color,h=t.Component},function(t){l=t.GRoot,u=t.UIPackage,d=t.RelationType,g=t.GGraph,f=t.Event,_=t.Window}],execute:function(){var p,w,C,m,v;s._RF.push({},"aa3349KCmhOh5uEGJJ41yoF","TestFgui",void 0);var B=a.ccclass,I=a.property,b=(t("TestFgui",(p=B("TestFgui"),w=I(r),p((v=i((m=function(t){function i(){for(var i,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(i=t.call.apply(t,[this].concat(s))||this)._view=null,i._bagWindow=null,i._closeButton=null,e(i,"fguiRoot",v,o(i)),i}n(i,t);var s=i.prototype;return s.start=function(){var t=this;l.create(),l.inst.node.setParent(this.fguiRoot),setTimeout((function(){u.loadPackage("UI/Bag",t.onUILoaded.bind(t))}),2)},s.onUILoaded=function(){var t=this;this._view=u.createObject("Bag","Main").asCom,l.inst.addChild(this._view);this._view.getChild("n1").asCom;this._view.setSize(100,100),this._view.setPosition(20,l.inst.height-200),this._bagWindow=new b,this._view.getChild("bagBtn").onClick((function(){t._bagWindow.show()}),this),u.loadPackage("UI/MainMenu",this.onUILoadedMain.bind(this))},s.onUILoadedMain=function(){this._closeButton=u.createObject("MainMenu","CloseButton"),this._closeButton.setPosition(l.inst.width-this._closeButton.width-10,l.inst.height-this._closeButton.height-10),this._closeButton.addRelation(l.inst,d.Right_Right),this._closeButton.addRelation(l.inst,d.Bottom_Bottom),this._closeButton.sortingOrder=1e5,l.inst.addChild(this._closeButton)},s.drawColor=function(t,i){var n=new g;l.inst.addChild(n),n.setPosition(t.x,t.y),n.setSize(t.width,t.height),n.drawRect(1,c.RED,i),n.enabled=!1},i}(h)).prototype,"fguiRoot",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=m))||C)),function(t){function i(){return t.call(this)||this}n(i,t);var e=i.prototype;return e.onInit=function(){this.contentPane=u.createObject("Bag","BagWin").asCom,this.center()},e.onShown=function(){var t=this.contentPane.getChild("list");t.on(f.CLICK_ITEM,this.onClickItem,this),t.itemRenderer=this.renderListItem.bind(this),t.setVirtual(),t.numItems=45},e.renderListItem=function(t,i){i.icon="Icons/i"+Math.floor(10*Math.random()),i.text=""+Math.floor(100*Math.random())},e.onClickItem=function(t){this.contentPane.getChild("n11").icon=t.icon,this.contentPane.getChild("n13").text=t.icon},i}(_));s._RF.pop()}}}));

System.register("chunks:///_virtual/TestJoyStick.ts",["./rollupPluginModLoBabelHelpers.js","cc","./fairygui.mjs","./TestJoystickModule.ts","./TestRoleAni.ts"],(function(t){var i,e,n,o,s,r,a,c,u,l,h,y,_,d,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,a=t.Node,c=t.Vec2,u=t.RigidBody2D,l=t.Component},function(t){h=t.UIPackage,y=t.GRoot,_=t.GTextField},function(t){d=t.default},function(t){p=t.TestRoleAni}],execute:function(){var f,k,v,g,w,R,S;s._RF.push({},"12bfcbWQcdNI7Xq4AXhwyak","TestJoyStick",void 0);var J=r.ccclass,b=r.property;t("TestJoyStick",(f=J("TestJoyStick"),k=b(a),v=b(p),f((R=i((w=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s))||this,n(i,"role",R,o(i)),n(i,"roleAni",S,o(i)),i._view=void 0,i._joystick=void 0,i._text=void 0,i._roleVelocity=new c(0,0),i.run_state="",i}e(i,t);var s=i.prototype;return s.start=function(){h.loadPackage("UI/Joystick",this.onUILoaded.bind(this))},s.update=function(t){},s.onUILoaded=function(){this._view=h.createObject("Joystick","Main").asCom,this._view.setSize(y.inst.width,y.inst.height),y.inst.addChild(this._view),this._text=this._view.getChild("n9",_),this._text.setPosition(100,10),this._text.text="1111111",this._joystick=new d(this._view),this._joystick.on(d.JoystickMoving,this.onJoystickMoving,this),this._joystick.on(d.JoystickUp,this.onJoystickUp,this)},s.onJoystickMoving=function(t,i,e){this._text.text=Math.round(t)+" | "+Math.round(100*i)+","+Math.round(100*e);this._roleVelocity.x=10*i,this._roleVelocity.y=10*-e,this.role.getComponent(u).linearVelocity=this._roleVelocity;var n=t;n>=22.5&&n<67.5?this.setRunStat("run_se"):n>=67.5&&n<112.5?this.setRunStat("run_s"):n>=112.5&&n<157.5?this.setRunStat("run_sw"):n>=157.5&&n<202.5?this.setRunStat("run_w"):n>=202.5&&n<247.5?this.setRunStat("run_nw"):n>=247.5&&n<292.5?this.setRunStat("run_n"):n>=292.5&&n<337.5?this.setRunStat("run_ne"):this.setRunStat("run_e")},s.onJoystickUp=function(){this.role.getComponent(u).linearVelocity=new c(0,0),this.roleAni.roleStopped(),this.run_state=""},s.setRunStat=function(t){this.run_state!=t&&(this.run_state=t,this.roleAni.playRoleAni(this.run_state))},i}(l)).prototype,"role",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=i(w.prototype,"roleAni",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=w))||g));s._RF.pop()}}}));

System.register("chunks:///_virtual/TestJoystickModule.ts",["./rollupPluginModLoBabelHelpers.js","cc","./fairygui.mjs"],(function(t){var i,h,s,e,o,n,_,u;return{setters:[function(t){i=t.inheritsLoose,h=t.assertThisInitialized},function(t){s=t.cclegacy,e=t.Vec2,o=t.EventTarget},function(t){n=t.GRoot,_=t.GButton,u=t.Event}],execute:function(){s._RF.push({},"42a6cdyOVVPUr51OHwSt5Tb","TestJoystickModule",void 0);var c=t("default",function(t){function s(i){var s;return(s=t.call(this)||this)._InitX=void 0,s._InitY=void 0,s._startStageX=0,s._startStageY=0,s._lastStageX=0,s._lastStageY=0,s._button=void 0,s._touchArea=void 0,s._thumb=void 0,s._center=void 0,s._touchId=void 0,s._tweener=null,s._curPos=void 0,s.radius=void 0,s._button=i.getChild("joystick",_),s._button.changeStateOnClick=!1,s._thumb=s._button.getChild("thumb"),s._touchArea=i.getChild("joystick_touch"),s._center=i.getChild("joystick_center"),s._InitX=s._center.x+s._center.width/2,s._InitY=s._center.y+s._center.height/2,s._touchId=-1,s.radius=100,s._curPos=new e,s._touchArea.on(u.TOUCH_BEGIN,s.onTouchDown,h(s)),s._touchArea.on(u.TOUCH_MOVE,s.onTouchMove,h(s)),s._touchArea.on(u.TOUCH_END,s.onTouchEnd,h(s)),s._touchArea.setSize(i.width,i.height),s._touchArea.setPosition(0,0),s}i(s,t);var o=s.prototype;return o.trigger=function(t){this.onTouchDown(t)},o.onTouchDown=function(t){if(this._thumb.visible=!0,-1==this._touchId){this._touchId=t.touchId,this._tweener&&(this._tweener.kill(),this._tweener=null),n.inst.globalToLocal(t.pos.x,t.pos.y,this._curPos);var i=this._curPos.x,h=this._curPos.y;this._button.selected=!0,i<0?i=0:i>this._touchArea.width&&(i=this._touchArea.width),h>n.inst.height?h=n.inst.height:h<this._touchArea.y&&(h=this._touchArea.y),this._lastStageX=i,this._lastStageY=h,this._startStageX=i,this._startStageY=h,this._center.visible=!0,this._center.x=i-this._center.width/2,this._center.y=h-this._center.height/2,this._button.x=i-this._button.width/2,this._button.y=h-this._button.height/2;var s=i-this._InitX,e=h-this._InitY,o=180*Math.atan2(e,s)/Math.PI;this._thumb.rotation=o+90,t.captureTouch()}},o.onTouchMove=function(t){if(-1!=this._touchId&&t.touchId==this._touchId){var i=t.pos.x,h=t.pos.y,e=i-this._lastStageX,o=h-this._lastStageY;this._lastStageX=i,this._lastStageY=h;var _=this._button.x+e,u=this._button.y+o,c=_+this._button.width/2-this._startStageX,a=u+this._button.height/2-this._startStageY,r=Math.atan2(a,c),d=180*r/Math.PI;this._thumb.rotation=d+90;var l=Math.cos(r),g=Math.sin(r),b=this.radius*l,v=this.radius*g;Math.abs(c)>Math.abs(b)&&(c=b),Math.abs(a)>Math.abs(v)&&(a=v),(_=this._startStageX+c)<0&&(_=0),(u=this._startStageY+a)>n.inst.height&&(u=n.inst.height),this._button.x=_-this._button.width/2,this._button.y=u-this._button.height/2;var y=d;y<0&&(y=360+y),this.emit(s.JoystickMoving,y,l,g)}},o.onTouchEnd=function(t){-1!=this._touchId&&t.touchId==this._touchId&&(this._touchId=-1,this._thumb.rotation=this._thumb.rotation+180,this._center.visible=!1,this._thumb.visible=!1,this._center.visible=!1,this.emit(s.JoystickUp))},o.onTweenComplete=function(){this._tweener=null,this._button.selected=!1,this._thumb.rotation=0,this._center.visible=!0,this._center.x=this._InitX-this._center.width/2,this._center.y=this._InitY-this._center.height/2},s}(o));c.JoystickMoving="JoystickMoving",c.JoystickUp="JoystickUp",s._RF.pop()}}}));

System.register("chunks:///_virtual/TestLoadMap.ts",["./rollupPluginModLoBabelHelpers.js","cc","./cblog.ts","./ChangeMapMgr.ts"],(function(e){var t,o,i,n,r,a,l,s,c,d,p,h,g,u,y,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.Node,s=e.TiledObjectGroup,c=e.Vec2,d=e.RigidBody2D,p=e.ERigidBody2DType,h=e.PolygonCollider2D,g=e.BoxCollider2D,u=e.Component},function(e){y=e.CbLog},function(e){f=e.ChangeMapMgr}],execute:function(){var v,C,m,b,M,T,P;r._RF.push({},"57363Bg6lVKnJILt928x6K8","TestLoadMap",void 0);var w=a.ccclass,x=a.property;e("TestLoadMap",(v=w("TestLoadMap"),C=x(l),m=x(l),v((T=t((M=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,i(t,"mapRoot",T,n(t)),i(t,"role",P,n(t)),t.tilemap=void 0,t.colliderLayer=void 0,t.block=void 0,t}o(t,e);var r=t.prototype;return r.start=function(){this.testChangeMap()},r.testChangeMap=function(){setTimeout((function(){f.inst.changeMap("map/01/333")}),1e3)},r.getMapObjById=function(e){for(var t=this.colliderLayer.getComponent(s).getObjects(),o=0;o<t.length;o++){var i=t[o];if(i.id==e)return i}return null},r.convTilePosToUiPos=function(e,t){var o=this.tilemap.getTileSize(),i=this.tilemap.getMapSize().width,n=this.tilemap.getMapSize().height,r=i*o.width,a=n*o.height,l=new c(0,0);return l.x=e-r/2,l.y=t-a/2,l},r.createColliders=function(){for(var e=this.colliderLayer.getComponent(s).getObjects(),t=0;t<e.length;t++){var o=e[t];2==o.type?this.createPolygonCollider(o):0==o.type&&o.width>0&&this.createBoxCollider(o)}},r.createPolygonCollider=function(e){if(e){var t=this.convTilePosToUiPos(e.x,e.y),o=new l;o.name=e.id+"";var i=o.addComponent(d);i.type=p.Static,i.gravityScale=0;var n=o.addComponent(h);n.points=[];for(var r=0;r<e.points.length;r++){var a=e.points[r];n.points.push(new c(a.x,a.y))}this.block.addChild(o),o.setPosition(t.x,t.y),y.inst.info("node="+o.name)}else console.log("createPolygonCollider() obj is null")},r.createBoxCollider=function(e){if(e){var t=this.convTilePosToUiPos(e.x,e.y),o=new l;o.name=e.id+"";var i=o.addComponent(d);i.type=p.Static,i.gravityScale=0;var n=o.addComponent(g);n.size.width=e.width,n.size.height=e.height,this.block.addChild(o),o.setPosition(t.x+e.width/2,t.y-e.height/2),y.inst.info("node="+o.name)}else console.log("createBoxCollider() error, obj is null")},t}(u)).prototype,"mapRoot",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=t(M.prototype,"role",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=M))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/TestRole.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,o,n,l,a,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,l=e._decorator,a=e.Node,c=e.Component}],execute:function(){var p,s,u,f,b,y,d;n._RF.push({},"4e97e1UbpVMlbdljtgN43bQ","TestRole",void 0);var g=l.ccclass,h=l.property;e("TestRole",(p=g("TestRole"),s=h(a),u=h(a),p((y=t((b=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,i(t,"role",y,o(t)),i(t,"tileMap",d,o(t)),t}r(t,e);var n=t.prototype;return n.start=function(){},n.update=function(e){},t}(c)).prototype,"role",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=t(b.prototype,"tileMap",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=b))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/TestRoleAni.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var o,i,t,n,r,p,l,s,a,c;return{setters:[function(e){o=e.applyDecoratedDescriptor,i=e.inheritsLoose,t=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,p=e._decorator,l=e.Node,s=e.Animation,a=e.Sprite,c=e.Component}],execute:function(){var m,u,A,d,h,_,f;r._RF.push({},"78891UmQndA27jnYdTIvbJ1","TestRoleAni",void 0);var C=p.ccclass,j=p.property;e("TestRoleAni",(m=C("TestRoleAni"),u=j(l),A=j(l),m((_=o((h=function(e){function o(){for(var o,i=arguments.length,r=new Array(i),p=0;p<i;p++)r[p]=arguments[p];return o=e.call.apply(e,[this].concat(r))||this,t(o,"roleAniNode",_,n(o)),t(o,"emojAniNode",f,n(o)),o._roleAniComp=void 0,o._roleSpriteComp=void 0,o._emojAniComp=void 0,o.role_direction="",o}i(o,e);var r=o.prototype;return r.start=function(){this._roleAniComp=this.roleAniNode.getComponent(s),this._roleSpriteComp=this.roleAniNode.getComponent(a),this._emojAniComp=this.emojAniNode.getComponent(s),this.roleStopped(),this.stopEmojAni()},r.update=function(e){},r.playRoleAni=function(e){this.role_direction=e,this._roleAniComp.play(e)},r.roleStopped=function(){this._roleAniComp.stop();var e=this.role_direction.replace("run","walk")+"2",o=this._roleSpriteComp.spriteAtlas.getSpriteFrame(e);o&&(this._roleSpriteComp.spriteFrame=o)},r.playEmojAni=function(e){this._emojAniComp.play("gan_tan_hao"),this.emojAniNode.active=!0},r.stopEmojAni=function(){this.emojAniNode.active=!1,this._emojAniComp.stop()},o}(c)).prototype,"roleAniNode",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=o(h.prototype,"emojAniNode",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=h))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/TestTrigger.ts",["./rollupPluginModLoBabelHelpers.js","cc","./cblog.ts","./TestRoleAni.ts","./ChangeMapMgr.ts"],(function(t){var n,o,i,e,r,a,c,s,l,u,h,p,g,f;return{setters:[function(t){n=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,c=t.Node,s=t.Button,l=t.BoxCollider2D,u=t.Contact2DType,h=t.Component},function(t){p=t.CbLog},function(t){g=t.TestRoleAni},function(t){f=t.ChangeMapMgr}],execute:function(){var C,T,d,y,v,b,A,B,N;r._RF.push({},"a23c98yCj1CjJTbWOkG42M2","TestTrigger",void 0);var j=a.ccclass,m=a.property;t("TestTrigger",(C=j("TestTrigger"),T=m(c),d=m(g),y=m(c),C((A=n((b=function(t){function n(){for(var n,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=t.call.apply(t,[this].concat(r))||this,i(n,"role",A,e(n)),i(n,"roleAni",B,e(n)),i(n,"actionBtn",N,e(n)),n.otherNode=void 0,n}o(n,t);var r=n.prototype;return r.onLoad=function(){this.test()},r.start=function(){var t=this;this.actionBtn.active=!1,this.actionBtn.on(s.EventType.CLICK,(function(){p.inst.info("------------------",t.otherNode);var n=t.otherNode;n&&n.jsonObj?f.inst.changeMap(n.jsonObj.dest):f.inst.changeMap("map/02/555"),t.roleAni.stopEmojAni(),t.actionBtn.active=!1,t.otherNode=null}),this)},r.update=function(t){},r.test=function(){var t=this.role.getComponent(l);t.on(u.BEGIN_CONTACT,this.onBeginContact,this),t.on(u.END_CONTACT,this.onEndContact,this),t.on(u.STAY_CONTACT,this.onStayContact,this)},r.onBeginContact=function(t,n,o){p.inst.info("onBeginContact",n.tag),110==n.tag&&(this.roleAni.playEmojAni(""),this.actionBtn.active=!0,this.otherNode=n)},r.onEndContact=function(t,n,o){p.inst.info("onEndContact",n.tag),this.roleAni.stopEmojAni(),this.actionBtn.active=!1,this.otherNode=null},r.onStayContact=function(t,n,o){},n}(h)).prototype,"role",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=n(b.prototype,"roleAni",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=n(b.prototype,"actionBtn",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=b))||v));r._RF.pop()}}}));

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