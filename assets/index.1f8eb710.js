var q=Object.defineProperty,G=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var U=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))Z.call(e,n)&&U(t,n,e[n]);if(O)for(var n of O(e))V.call(e,n)&&U(t,n,e[n]);return t},k=(t,e)=>G(t,Q(e));const tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};tt();const et=function(t){let e;const n=()=>{window.requestAnimationFrame(n),e.update(),e.render(),c(e.changeState())},c=o=>{!o||(e=t[o[0]],e.set(o[1]))};return{setState:c,setStates(o){t=o},start(){n()},stop(){window.cancelAnimationFrame()}}},it=-1,nt=18,at=!1,ot=[{draworder:"topdown",id:8,name:"positions",objects:[{height:16,id:5,name:"enemy spawn",properties:[{name:"spanwPoint",type:"string",value:"enemy"}],rotation:0,type:"",visible:!0,width:16,x:496,y:48},{height:16,id:7,name:"enemy spawn",properties:[{name:"spanwPoint",type:"string",value:"enemy"}],rotation:0,type:"",visible:!0,width:16,x:0,y:48},{height:16,id:8,name:"player spawn",properties:[{name:"spanwPoint",type:"string",value:"player"}],rotation:0,type:"",visible:!0,width:16,x:48,y:240},{height:16,id:9,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:16,y:112},{height:16,id:10,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:480.666666666667,y:111.333333333333},{height:16,id:11,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:400,y:240},{height:16,id:12,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:96,y:240},{height:16,id:13,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:160,y:176},{height:16,id:14,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:336,y:176},{height:16,id:15,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:480,y:176},{height:16,id:16,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:16,y:176},{height:16,id:17,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:144,y:112},{height:16,id:18,name:"item",properties:[{name:"spanwPoint",type:"string",value:"item"}],rotation:0,type:"",visible:!0,width:16,x:352,y:112}],opacity:1,type:"objectgroup",visible:!1,x:0,y:0},{draworder:"topdown",id:9,name:"ui",objects:[{height:64,id:25,name:"left",properties:[{name:"image",type:"file",value:"../images/ui/arrow.png"}],rotation:0,type:"",visible:!0,width:64,x:16,y:208},{height:64,id:26,name:"b",properties:[{name:"image",type:"file",value:"../images/ui/button_touch.png"}],rotation:0,type:"",visible:!0,width:64,x:352,y:208},{height:64,id:32,name:"right",properties:[{name:"image",type:"file",value:"../images/ui/arrow.png"}],rotation:0,type:"",visible:!0,width:64,x:96,y:208},{height:64,id:33,name:"a",properties:[{name:"image",type:"file",value:"../images/ui/button_touch.png"}],rotation:0,type:"",visible:!0,width:64,x:432,y:208}],opacity:1,type:"objectgroup",visible:!0,x:0,y:0},{data:[52,41,52,52,41,41,41,39,39,52,52,39,52,39,39,41,41,41,52,41,52,52,41,52,41,52,52,39,52,52,52,41,41,52,52,41,52,52,39,52,52,52,52,41,52,39,41,39,52,41,41,52,52,52,41,41,41,52,39,41,39,52,52,41,41,41,52,52,52,41,41,41,52,52,52,41,52,41,52,52,52,39,52,52,41,39,52,52,41,41,52,52,41,41,52,52,39,41,52,41,52,41,41,52,52,41,52,52,52,52,41,41,41,52,39,41,41,52,41,41,52,52,52,52,41,41,39,52,41,52,39,52,52,52,52,52,41,41,41,39,41,52,41,52,41,41,52,52,52,52,52,52,41,52,52,41,41,39,52,41,52,41,52,39,52,52,41,52,41,41,39,41,41,41,41,52,52,41,41,52,41,41,52,52,52,41,41,52,41,39,41,52,41,52,41,41,39,52,41,41,52,52,52,39,52,41,52,41,41,52,52,41,41,41,52,52,52,39,39,52,52,52,52,52,52,41,52,52,41,41,52,39,52,52,52,39,52,52,41,52,41,52,52,52,41,52,52,39,52,52,52,52,52,39,52,41,41,41,41,52,52,41,52,52,52,41,41,52,52,41,52,52,52,39,41,39,39,52,52,52,41,52,52,52,52,39,52,52,52,41,39,39,52,52,52,52,52,52,41,52,41,41,52,52,41,41,52,52,52,41,52,39,41,39,41,52,52,52,52,41,52,52,52,41,52,41,52,52,52,52,52,41,41,52,41,52,39,41,41,39,52,41,39,41,41,52,52,41,39,41,52,52,41,41,52,41,52,52,41,52,41,52,41,41,52,41,52,52,52,41,41,39,52,39,52,52,52,52,39,52,41,52,52,52,52,41,52,41,52,41,52,39,39,52,52,41,52,52,52,41,52,52,52,52,41,41,52,52,41,52,41,52,52,41,52,41,52,41,52,52,41,52,52,39,39,41,52,52,41,52,52,41,52,39,52,41,41,41,52,52,52,52,52,52,39,52,52,41,39,39,41,52,52,52,52,52,52,41,39,52,41,52,52,52,52,41,41,52,41,52,52,41,52,52,39,52,52,52,39,39,41,41,52,52,52,52,52,41,41,52,52,41,41,52,52,41,52,52,41,41,41,41,41,41,41,52,52,41,52,41,52,52,409,409,409,409,401,401,409,401,409,409,401,401,401,401,409,409,401,409,401,401,409,401,409,409,401,401,401,401,409,401,409,409,401,401,409,409,401,409,401,401,409,401,409,409,409,401,409,409,409,409,409,409,401,401,409,409,409,409,409,401,409,409,401,409],height:18,id:1,name:"Background",opacity:1,type:"tilelayer",visible:!0,width:32,x:0,y:0},{data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,188,189,0,193,194,0,0,0,0,191,0,0,0,0,0,0,0,0,0,0,0,0,0,193,194,0,0,0,0,0,188,189,213,214,0,218,219,0,0,0,0,216,0,0,0,0,0,0,0,0,0,0,0,0,0,218,219,0,0,0,0,0,213,214,667,667,667,683,667,675,675,667,667,683,675,667,668,0,0,0,0,0,0,666,667,667,667,683,667,667,667,667,667,675,667,667,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,683,667,675,668,0,0,0,127,128,130,130,130,130,130,130,130,130,130,130,130,130,130,130,127,128,0,0,0,666,683,675,667,0,0,0,0,0,0,0,152,153,0,0,0,0,0,0,0,0,0,0,0,0,0,0,152,153,0,0,0,0,0,0,0,0,0,196,0,0,0,0,132,133,191,0,0,0,0,0,0,0,0,0,0,0,0,0,132,133,0,0,0,0,0,0,0,0,0,221,0,0,0,0,157,158,216,0,0,0,0,0,0,0,0,0,0,0,0,0,157,158,0,0,0,0,0,0,0,127,128,130,130,130,130,130,130,130,130,130,127,128,0,0,0,0,0,0,127,128,130,130,130,130,130,130,130,130,130,127,128,152,153,0,0,0,0,0,0,0,0,0,152,153,0,0,0,0,0,0,152,153,0,0,0,0,0,0,0,0,0,152,153,188,189,0,0,0,196,0,0,0,0,0,132,133,0,0,0,196,0,0,132,133,0,0,0,0,0,0,0,191,0,188,189,213,214,0,0,0,221,0,0,0,0,0,157,158,0,0,0,221,0,0,157,158,0,0,0,0,0,0,0,216,0,213,214,335,336,335,335,335,336,335,338,335,336,335,336,336,336,336,336,336,335,336,338,335,338,335,335,335,336,338,336,338,338,335,338,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],height:18,id:3,name:"Platforms",opacity:1,type:"tilelayer",visible:!0,width:32,x:0,y:0}],st=10,rt=34,gt="orthogonal",ht="right-down",ct="1.8.5",mt=16,lt=[{firstgid:1,source:"../tilesets/Scaffolding & bg.json"},{firstgid:301,source:"../tilesets/Cave.json"}],dt=16,pt="map",ut="1.8",yt=32;var wt={compressionlevel:it,height:nt,infinite:at,layers:ot,nextlayerid:st,nextobjectid:rt,orientation:gt,renderorder:ht,tiledversion:ct,tileheight:mt,tilesets:lt,tilewidth:dt,type:pt,version:ut,width:yt};const vt=0,ft={height:1,orientation:"orthogonal",width:1},xt=0,bt="Characters",Pt=0,Bt=33,kt="1.8.5",Mt=16,St=[{id:0,image:"../images/Mini Pixel Pack 1/5 - Ant/Run (16 x 16).png",imageheight:16,imagewidth:32,properties:[{name:"action",type:"string",value:"moving"},{name:"character",type:"string",value:"Ant"}]},{id:1,image:"../images/Mini Pixel Pack 1/5 - Ant/Back_view (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"back"},{name:"character",type:"string",value:"Ant"}]},{id:2,image:"../images/Mini Pixel Pack 1/5 - Ant/Blink (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"blink"},{name:"character",type:"string",value:"Ant"}]},{id:3,image:"../images/Mini Pixel Pack 1/5 - Ant/Hurt (16 x 16).png",imageheight:16,imagewidth:32,properties:[{name:"action",type:"string",value:"hurt"},{name:"character",type:"string",value:"Ant"}]},{id:4,image:"../images/Mini Pixel Pack 1/5 - Ant/Idle (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"idle"},{name:"character",type:"string",value:"Ant"}]},{id:5,image:"../images/Mini Pixel Pack 1/5 - Ant/Jump (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"jump"},{name:"character",type:"string",value:"Ant"}]},{id:6,image:"../images/Mini Pixel Pack 1/4 - Binny/Back_view (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"back"},{name:"character",type:"string",value:"Binny"}]},{id:7,image:"../images/Mini Pixel Pack 1/4 - Binny/Blink (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"blink"},{name:"character",type:"string",value:"Binny"}]},{id:8,image:"../images/Mini Pixel Pack 1/4 - Binny/Idle (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"idle"},{name:"character",type:"string",value:"Binny"}]},{id:9,image:"../images/Mini Pixel Pack 1/4 - Binny/Jump (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"jump"},{name:"character",type:"string",value:"Binny"}]},{id:10,image:"../images/Mini Pixel Pack 1/4 - Binny/Moving (16 x 16).png",imageheight:16,imagewidth:32,properties:[{name:"action",type:"string",value:"moving"},{name:"character",type:"string",value:"Binny"}]},{id:11,image:"../images/Mini Pixel Pack 1/4 - Binny/Protected (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"hurt"},{name:"character",type:"string",value:"Binny"}]},{id:12,image:"../images/Sprite Pack 1/5 - Devo the Devil/Standing (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"idle"},{name:"character",type:"string",value:"Devo"}]},{id:13,image:"../images/Sprite Pack 1/5 - Devo the Devil/Falling (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:""},{name:"character",type:"string",value:"Devo"}]},{id:14,image:"../images/Sprite Pack 1/5 - Devo the Devil/Hurt (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"hurt"},{name:"character",type:"string",value:"Devo"}]},{id:15,image:"../images/Sprite Pack 1/5 - Devo the Devil/Jumping (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"jump"},{name:"character",type:"string",value:"Devo"}]},{id:16,image:"../images/Sprite Pack 1/5 - Devo the Devil/Running (16 x 16).png",imageheight:16,imagewidth:64,properties:[{name:"action",type:"string",value:"moving"},{name:"character",type:"string",value:"Devo"}]},{id:17,image:"../images/Sprite Pack 1/11 - Spikey Bub/Idle (16 x 16).png",imageheight:16,imagewidth:32,properties:[{name:"action",type:"string",value:"idle"},{name:"character",type:"string",value:"Bumpy"}]},{id:18,image:"../images/Sprite Pack 1/11 - Spikey Bub/Protection (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:""},{name:"character",type:"string",value:"Bumpy"}]},{id:19,image:"../images/Sprite Pack 1/11 - Spikey Bub/Running (16 x 16).png",imageheight:16,imagewidth:96,properties:[{name:"action",type:"string",value:"moving"},{name:"character",type:"string",value:"Bumpy"}]},{id:20,image:"../images/Sprite Pack 1/11 - Spikey Bub/Hurt (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"hurt"},{name:"character",type:"string",value:"Bumpy"}]},{id:21,image:"../images/Mini FX, Items & UI/Effects/Dust (16 x 16).png",imageheight:16,imagewidth:96,type:"dust"},{id:22,image:"../images/Mini FX, Items & UI/Effects/Explosion_Poof (16 x 16).png",imageheight:16,imagewidth:128,type:"explosion"},{id:23,image:"../images/Mini FX, Items & UI/Mini UI/Health_Indicator_White_Outline (8 x 8).png",imageheight:8,imagewidth:16,type:"health"},{id:24,image:"../images/Sprite Pack 4/1 - Agent_Mike_Bullet (16 x 16).png",imageheight:16,imagewidth:16,type:"bullet"},{id:25,image:"../images/Mini FX, Items & UI/Common Pick-ups/Coin (16 x 16).png",imageheight:16,imagewidth:64,type:"big coin"},{id:26,image:"../images/Mini FX, Items & UI/Effects/Yellow_Sparkle (16 x 16).png",imageheight:16,imagewidth:80},{id:27,image:"../images/Sprite Pack 1/4 - Bushly/Hurt (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"hurt"},{name:"character",type:"string",value:"Bushly"}]},{id:28,image:"../images/Sprite Pack 1/4 - Bushly/Idle (16 x 16).png",imageheight:16,imagewidth:48,properties:[{name:"action",type:"string",value:"idle"},{name:"character",type:"string",value:"Bushly"}]},{id:29,image:"../images/Sprite Pack 1/4 - Bushly/Jumping (16 x 16).png",imageheight:16,imagewidth:16,properties:[{name:"action",type:"string",value:"jump"},{name:"character",type:"string",value:"Bushly"}]},{id:30,image:"../images/Sprite Pack 1/4 - Bushly/Running (16 x 16).png",imageheight:16,imagewidth:96,properties:[{name:"action",type:"string",value:"moving"},{name:"character",type:"string",value:"Bushly"}]},{id:31,image:"../images/Mini FX, Items & UI/Common Pick-ups/Small_Coin (16 x 16).png",imageheight:16,imagewidth:64,type:"small coin"},{id:32,image:"../images/Mini FX, Items & UI/Common Pick-ups/Heart_Spin (16 x 16).png",imageheight:16,imagewidth:64,type:"heart"}],It=128,Tt="tileset",jt="1.8";var Et={columns:vt,grid:ft,margin:xt,name:bt,spacing:Pt,tilecount:Bt,tiledversion:kt,tileheight:Mt,tiles:St,tilewidth:It,type:Tt,version:jt};const $t=7,Ft="../images/Mini FX, Items & UI/Mini UI/Timer_Coin_Numbers_Outlined (8 x 8).png",Ct=16,Lt=56,At=0,Rt="Points",Dt=0,_t=14,Ot="1.8.5",Ut=8,Ht=[{id:0,type:"clock"},{id:2,type:"0"},{id:3,type:"1"},{id:4,type:"2"},{id:5,type:"3"},{id:6,type:"4"},{id:7,type:"coin"},{id:9,type:"5"},{id:10,type:"6"},{id:11,type:"7"},{id:12,type:"8"},{id:13,type:"9"}],Kt=8,Xt="tileset",Yt="1.8";var Nt={columns:$t,image:Ft,imageheight:Ct,imagewidth:Lt,margin:At,name:Rt,spacing:Dt,tilecount:_t,tiledversion:Ot,tileheight:Ut,tiles:Ht,tilewidth:Kt,type:Xt,version:Yt};const L=(t,e,n,c)=>({x:t,y:e,oldY:e,height:c,width:n,getBottom(){return this.y+this.height},getCenterX(){return this.x+this.width*.5},getCenterY(){return this.y+this.height*.5},getLeft(){return this.x},getRight(){return this.x+this.width},getTop(){return this.y},getOldBottom(){return this.old_y+this.height},getOldTop(){return this.old_y},setBottom(o){this.y=o-this.height},setLeft(o){this.x=o},setRight(o){this.x=o-this.width},setTop(o){this.y=o},moveX(o){this.x+=o},moveY(o){this.old_y=this.y,this.y+=o}}),D=async(t,e="json")=>{console.log(t.replace("../","/Robot-Bros/assets/"));const n=await fetch(t.replace("../","/Robot-Bros/assets/")),c=o=>new Promise(async(i,m)=>{const s=await n.blob(),g=document.createElement("img"),l=URL.createObjectURL(s);return g.src=l,g.addEventListener("load",()=>i(g)),g});switch(e){case"json":return await n.json();case"img":return await c()}},_=(t,e,n,c)=>(c=c!=null?c:n,[t%e*n,Math.floor(t/e)*c]);function E(t,e){return!(t.getLeft()>e.getRight()||t.getTop()>e.getBottom()||t.getRight()<e.getLeft()||t.getBottom()<e.getTop())}const F={top:(t,e)=>t.getBottom()>e.getTop()&&t.getTop()<e.getTop(),bottom:(t,e)=>t.getTop()<e.getBottom()&&t.getBottom()>e.getBottom(),left:(t,e)=>t.getLeft()<e.getRight()&&t.getCenterY()>e.getTop()&&t.getCenterY()<e.getBottom()&&t.getRight()>e.getRight(),right:(t,e)=>t.getRight()>e.getLeft()&&t.getCenterY()>e.getTop()&&t.getCenterY()<e.getBottom()&&t.getLeft()<e.getLeft()};function Wt(t,e){return F.top(t,e)?(t.setBottom(e.getTop()),t.grounded=!0,!0):F.bottom(t,e)?(t.setTop(e.getBottom()),t.velocity.y=0,!0):F.left(t,e)?(t.setLeft(e.getRight()),t.velocity.x=0,!0):F.right(t,e)?(t.setRight(e.getLeft()),t.velocity.x=0,!0):!1}const X=async function(t){return t.source&&Object.assign(t,f({},await D(t.source))),t.image&&Object.assign(t,{img:await D(t.image,"img")}),t},Y=async function(t){const e=await Promise.all(t.tilesets.map(X)),n=s=>e.find(g=>s>=g.firstgid&&s<=g.firstgid+g.tilecount),c=t.layers.filter(s=>s.type=="objectgroup").reduce((s,g)=>{var l;return k(f({},s),{[g.name]:(l=g.objects)==null?void 0:l.map(v=>{var h;return f(f({},v),(h=v.properties)==null?void 0:h.reduce((d,w)=>k(f({},d),{[w.name]:w.value}),{}))})})},{}),o=t.layers.filter(s=>s.type=="tilelayer").map(s=>s.data.map((g,l)=>{var v;if(g){const h=n(g),[d,w]=_(g-h.firstgid,h.columns,h.tileheight,h.tilewidth),[p,P]=_(l,s.width,t.tileheight,t.tilewidth),u=(v=h.tiles.find(r=>r.id==g-h.firstgid))==null?void 0:v.type;return f({type:u,img:h.img,sx:d,sy:w,sh:h.tileheight,sw:h.tilewidth},L(p,P,t.tileheight,t.tilewidth))}})),i=o.flatMap(s=>s.filter(g=>g==null?void 0:g.type));let m={};return k(f({left:0,right:t.tilewidth*t.width,top:0,bottom:t.tileheight*t.height,items:[]},t),{layers:o,objects:c,tilesets:e,collideWithEntity(s){return this.left>=s.getLeft()&&s.setLeft(this.left),this.right<=s.getRight()&&s.setRight(this.right),this.top>=s.getTop()&&s.setTop(this.top),this.bottom<=s.getBottom()&&s.setBottom(this.bottom),i.filter(g=>E(s,g)).filter(g=>Wt(s,g))},getSpawnPoint(s){const g=c.positions.filter(d=>d.spanwPoint==s&&d.id!=(m==null?void 0:m[s])),{x:l,y:v,id:h}=g[Math.floor(Math.random()*g.length)];return m[s]=h,{x:l,y:v}}})},zt=1.2,H=.85,N=async function(t){const e=await Promise.all(t.tiles.map(async n=>{var c;return k(f(f({},n),(c=n.properties)==null?void 0:c.reduce((o,i)=>k(f({},o),{[i.name]:i.value}),{})),{img:await D(n.image,"img")})}));return{getCharacter(n){return e.filter(c=>c.character==n).reduce((c,o)=>k(f({},c),{[o.action]:C(o.img)}),{})},getType(n){return e.find(c=>c.type==n)}}},C=function(t,e=20){return{counter:0,framesNb:t.width/t.height,selectedFrame:0,delay:e,cycles:0,getFrame(){return[t,this.selectedFrame*t.height,0,t.height,t.height]},animate(){this.counter++,this.counter>=this.delay&&(this.selectedFrame=(this.selectedFrame+1)%this.framesNb,this.counter=0,this.cycles++)}}},K=({tiles:t,x:e,y:n,reversed:c=!1,moveForce:o=.5,id:i})=>k(f({},L(e,n,16,16)),{tiles:t,state:"idle",direction:1,moveForce:o,jumpForce:35,reversed:c,velocity:{x:0,y:0},grounded:!1,id:i,moveLeft(){this.velocity.x-=this.moveForce},moveRight(){this.velocity.x+=this.moveForce},jump(){this.grounded&&(this.grounded=!1,this.velocity.y-=this.jumpForce)},update(){this.grounded?Math.abs(this.velocity.x)>.1?this.state="moving":Math.abs(this.velocity.x)<.1&&(this.state="idle"):this.state="jump",this.velocity.x*=H,this.velocity.y+=zt,this.velocity.y*=H,this.x+=this.velocity.x,this.moveY(this.velocity.y),this.direction=this.velocity.x>0?1:-1}}),Jt=function(t,e){return k(f({img:e},L(t.x,t.y,e.width,e.height)),{width:e.width,height:e.height,direction:t.direction,update(){this.moveX(4*this.direction)}})},R=function(t,e,n={}){return()=>f({img:C(t),type:e},n)},qt=async function(t,e){const n=await N(Et),c=n.getCharacter("Ant");n.getCharacter("Binny");const o=n.getCharacter("Bumpy"),i=n.getCharacter("Devo"),m=n.getCharacter("Bushly"),s=n.getType("explosion").img,g=n.getType("health").img,l=n.getType("dust").img,v=n.getType("bullet").img,h=n.getType("small coin").img,d=n.getType("big coin").img,w=n.getType("heart").img,p=await X(Nt),P=[R(d,"coin",{amount:10}),R(h,"coin",{amount:5}),R(w,"heart")],u=await Y(wt),r=K({tiles:c,x:32,y:15*16});r.points=0,r.health=3,r.maxHealth=5,r.dust=C(l,4),r.bullets=[];const S=[[o,!0],[i,!0],[m,!1]],M=[];let I=0,T=0;const $=a=>{const[B,x]=S[Math.floor(Math.random()*S.length)],{x:j,y:A}=a.getSpawnPoint("enemy"),z=I%2?1:-1;I++;const J=K({tiles:B,x:j,y:A,reversed:x,moveForce:.2,id:I,direction:z});M.push(J)},y=a=>{const B=()=>a.direction=a.direction*-1,x=()=>a.setBottom(48);switch((a==null?void 0:a.layer)!=a.getBottom()&&a.grounded&&(Math.random()>.5&&B(),a.layer=a.getBottom()),(a.getRight()>=u.right||a.getLeft()<=u.left)&&(a.getBottom()==16*16&&x(),B()),a.direction){case-1:return a.moveLeft();case 1:return a.moveRight()}},b=()=>{r.state!="hurt"&&(r.update(),u.collideWithEntity(r),e.left.active&&r.moveLeft(),e.right.active&&r.moveRight(),e.jump.once&&r.jump(),e.shoot.once&&r.bullets.push(Jt(r,v)))};return t.createMapBuffer(u,0),t.createMapBuffer(u,1),{set(){},render(){t.drawMap(u),M.forEach((a,B)=>{t.drawEntity(a),a!=null&&a.explosion&&(a.explosion.animate(),t.drawFrame(a.explosion.getFrame(),[a.x,a.y,16,16]))}),t.drawEntity(r),r.state=="moving"&&(r.dust.animate(),t.drawFrame(r.dust.getFrame(),[r.x-r.direction*r.width,r.y,16,16],r.direction)),r.state=="idle"&&(r.dust.selectedFrame=0),t.drawPlayerHealth(g,r),t.drawPlayerPoints(p,r),r.bullets.forEach(a=>t.drawBullet(a)),u.items.forEach(a=>t.drawItem(a))},update(){T++,T>=180&&M.length<10&&(T=0,$(u)),M.some(a=>E(a,r))||(r.lastEnemyHit=null),r.state=="hurt"&&r.tiles.hurt.cycles>=3&&(r.tiles.hurt.cycles=0,r.state="idle"),u.items.forEach((a,B)=>{E(a,r)&&(a.type=="coin"&&(r.points+=a.amount,r.points=r.points),a.type=="heart"&&r.health<r.maxHealth&&r.health++,u.items.splice(B,1)),a.img.delay=20-a.img.cycles,a.img.delay<=-10&&u.items.splice(B,1)}),M.forEach((a,B)=>{if(E(a,r)&&a.state!="hurt"&&r.lastEnemyHit===null&&(r.health--,r.lastEnemyHit=B,r.state="hurt",r.velocity.x=0,r.velocity.y=0),r.bullets.forEach((x,j)=>{E(x,a)&&(r.bullets.splice(j,1),a.state="hurt")}),a.state!="hurt"&&(y(a),a.update()),u.collideWithEntity(a),a.state=="hurt"&&!(a!=null&&a.explosion)&&(a.explosion=C(s,4)),a!=null&&a.explosion&&a.explosion.selectedFrame>=a.explosion.framesNb-1){M.splice(B,1);const x=P[Math.floor(Math.random()*P.length)],{x:j,y:A}=u.getSpawnPoint("item");u.items.push(f(f({},x()),L(j,A,16,16)));return}}),r.bullets.forEach(a=>a.update()),b()},changeState(){return e.pause.once?["pause"]:!1}}},Gt=async t=>{const n=(await navigator.keyboard.getLayoutMap()).get("KeyA")=="a";let c=!1,o=navigator.userAgentData.mobile;const i={up:[12],down:[13],left:[14],right:[15],enter:[0],pause:[9],jump:[0],shoot:[2]},m={up:[n?"KeyZ":"KeyW","ArrowUp"],down:["KeyS","ArrowDown"],left:[n?"KeyQ":"KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],enter:["Space","Enter","NumpadEnter"],pause:["KeyP"],jump:["KeyL"],shoot:[n?"KeyM":"Semicolon"]};window.addEventListener("gamepadconnected",h=>{console.log("gamepad deteted"),c=!0,setInterval(()=>{navigator.getGamepads()[0].buttons.forEach(({pressed:d},w)=>{Object.entries(i).filter(([p,P])=>P.includes(w)).forEach(([p,P])=>{var u;(u=g[p])==null||u.getInput(d)})})},10)}),window.addEventListener("gamepaddisconnected",h=>{c=!1,gamepad=null});const s=function(){return{active:!1,down:!1,get once(){return this.active?(this.active=!1,!0):!1},getInput(h){this.down!=h&&(this.active=h),this.down=h}}},g=Object.keys(m).reduce((h,d)=>k(f({},h),{[d]:s()}),{}),l=h=>{var p;h.preventDefault();const d=h.type=="keydown",w=(p=Object.entries(m).find(([P,u])=>u.includes(h.code)))==null?void 0:p[0];w&&g[w].getInput(d)};document.addEventListener("keydown",l),document.addEventListener("keyup",l);const v=h=>Object.entries(t).find(d=>d[0]==h)[1];return k(f({inputs(){const h=o?["touch"]:["keyboard"];return c&&h.push("controller"),h}},g),{get:h=>m[v(h)].active,set:(h,d)=>m[v(h)].active=d})},Qt=function(t,e){return{set(){},render(){},update(){},changeState(){if(e.pause.once)return["run"]}}},Zt=-1,Vt=18,te=!1,ee=[{data:[37,41,37,37,41,37,39,52,41,52,41,41,52,37,39,39,41,41,41,52,52,41,52,52,52,52,39,52,52,52,37,41,52,52,39,41,41,52,37,52,41,52,52,37,52,37,37,41,41,41,52,37,41,52,41,52,41,41,37,41,37,52,41,52,39,37,41,52,41,52,52,52,52,41,52,52,41,41,39,52,52,39,52,52,52,41,41,41,41,52,52,52,52,39,41,39,41,37,37,52,41,41,41,41,52,52,41,52,39,39,41,52,52,52,52,52,41,41,37,52,41,41,52,37,41,52,52,52,41,41,52,52,52,52,52,37,52,37,41,52,41,52,52,37,52,52,52,37,39,41,37,41,52,41,39,52,41,52,52,52,52,41,52,52,37,37,37,52,52,39,52,37,52,41,41,41,52,39,41,52,52,37,41,39,41,41,41,41,41,52,52,52,52,41,41,52,39,41,52,52,39,52,39,52,52,41,52,52,39,52,52,52,41,52,39,52,41,39,52,52,52,52,52,52,39,39,52,52,41,52,52,41,41,52,39,39,41,52,39,52,41,52,52,52,52,52,52,37,52,37,39,37,37,52,52,52,52,52,52,41,39,37,52,37,52,41,52,52,52,39,52,39,41,39,41,52,39,39,52,52,39,37,41,52,41,52,41,52,52,52,37,41,37,52,37,41,52,41,52,52,52,41,37,41,37,52,41,39,52,52,39,52,37,41,52,37,41,52,52,41,41,52,52,52,52,52,52,52,52,39,52,37,37,41,41,52,52,52,52,52,52,52,52,52,52,52,52,41,41,41,52,52,37,52,41,52,39,52,52,52,52,39,37,52,39,37,52,39,39,52,52,41,52,39,37,52,52,52,52,52,41,41,52,52,52,41,52,52,41,52,41,52,41,52,52,52,52,52,52,41,52,41,52,41,41,41,39,52,39,52,41,52,52,52,52,41,52,52,41,52,41,39,37,52,52,52,41,41,52,52,39,39,52,41,41,41,41,41,37,37,41,37,52,52,52,39,41,37,52,41,41,41,52,52,52,52,52,41,37,39,52,37,52,41,52,41,37,39,41,39,52,52,41,52,52,52,39,52,52,41,37,39,52,41,52,52,52,52,37,41,41,41,52,52,52,52,41,41,52,52,41,52,41,52,52,52,52,52,41,41,52,52,41,41,52,52,52,52,37,52,52,39,37,52,37,52,41,52,52,39,41,41,41,41,37,52,52,52,52,52,52,41,52,37,401,401,417,417,409,417,417,401,401,417,401,409,401,417,401,409,401,409,401,401,401,417,409,401,417,401,409,417,417,401,401,401],height:18,id:1,name:"Background",opacity:1,type:"tilelayer",visible:!0,width:32,x:0,y:0},{data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,501,667,668,0,0,0,666,668,0,0,501,667,668,0,0,0,666,668,0,0,666,502,668,0,0,0,0,0,0,0,0,0,766,0,0,670,0,733,0,0,733,0,766,0,0,670,0,733,0,0,733,0,0,766,0,0,0,0,0,0,0,0,0,0,470,667,668,0,0,766,0,0,766,0,470,667,668,0,0,766,0,0,766,0,0,766,0,0,0,0,0,0,0,0,0,0,766,0,0,733,0,799,0,0,799,0,766,0,0,670,0,799,0,0,799,0,0,766,0,0,0,0,0,0,0,0,0,0,799,0,0,799,0,0,666,668,0,0,569,667,668,0,0,0,666,668,0,0,0,799,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,501,667,668,0,0,501,667,668,0,0,0,666,668,0,0,501,667,668,0,0,0,0,0,0,0,0,0,0,0,0,0,0,766,0,0,670,0,766,0,0,670,0,733,0,0,733,0,766,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,470,667,668,0,0,470,667,668,0,0,766,0,0,766,0,569,667,438,0,0,0,0,0,0,0,0,0,0,0,0,0,0,766,0,0,670,0,766,0,0,733,0,799,0,0,799,0,0,0,766,0,0,0,0,0,0,0,0,0,0,0,0,0,0,569,667,668,0,0,799,0,0,799,0,0,666,668,0,0,666,667,570,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,127,128,130,130,130,130,130,130,130,130,130,130,130,127,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,152,153,0,0,0,0,0,0,0,0,0,0,0,152,153,0,0,0,0,0,0,0,0,0,0,0,0,0,0,193,194,0,132,133,0,191,0,0,0,0,196,0,0,0,0,132,133,0,188,189,0,0,0,0,0,0,0,0,0,0,0,218,219,0,157,158,0,216,0,0,0,0,221,0,0,0,0,157,158,0,213,214,0,338,338,335,338,338,338,335,335,336,335,338,335,338,336,336,336,335,338,335,335,335,335,338,335,338,338,335,336,335,336,336,335],height:18,id:3,name:"Platforms",opacity:1,type:"tilelayer",visible:!0,width:32,x:0,y:0},{draworder:"topdown",id:8,name:"ui",objects:[{height:32,id:3,name:"play",properties:[{name:"order",type:"int",value:0}],rotation:0,type:"menu",visible:!0,width:96,x:46.3333333333333,y:111},{height:32,id:4,name:"controller",properties:[{name:"order",type:"int",value:1}],rotation:0,type:"menu",visible:!0,width:96,x:48,y:160},{height:32,id:5,name:"character",properties:[{name:"order",type:"int",value:2}],rotation:0,type:"menu",visible:!0,width:96,x:48,y:208},{height:79.6363636363636,id:7,name:"character",rotation:0,type:"preview",visible:!0,width:79.6363636363636,x:416,y:16.3636363636364},{height:32,id:9,name:"controller",rotation:0,type:"right",visible:!0,width:32,x:160,y:160},{height:32,id:10,name:"controller",rotation:0,type:"left",visible:!0,width:32,x:0,y:160},{height:32,id:11,name:"character",rotation:0,type:"left",visible:!0,width:32,x:0,y:208},{height:32,id:12,name:"character",rotation:0,type:"right",visible:!0,width:32,x:160,y:208}],opacity:1,type:"objectgroup",visible:!0,x:0,y:0}],ie=9,ne=13,ae="orthogonal",oe="right-down",se="1.8.5",re=16,ge=[{firstgid:1,source:"../tilesets/Scaffolding & bg.json"},{firstgid:301,source:"../tilesets/Cave.json"}],he=16,ce="map",me="1.8",le=32;var de={compressionlevel:Zt,height:Vt,infinite:te,layers:ee,nextlayerid:ie,nextobjectid:ne,orientation:ae,renderorder:oe,tiledversion:se,tileheight:re,tilesets:ge,tilewidth:he,type:ce,version:me,width:le};const pe=0,ue={height:1,orientation:"orthogonal",width:1},ye=0,we="UI",ve=0,fe=13,xe="1.8.5",be=44,Pe=[{id:6,image:"../images/ui/button.png",imageheight:32,imagewidth:96,type:"default"},{id:8,image:"../images/ui/button_selected.png",imageheight:32,imagewidth:96,type:"selected"},{id:9,image:"../images/ui/Start.png",imageheight:7,imagewidth:18,type:"start"},{id:10,image:"../images/ui/CharacterPreview.png",imageheight:44,imagewidth:44,type:"charcaterPreview"},{id:11,image:"../images/ui/controller.png",imageheight:8,imagewidth:34,type:"controller"},{id:12,image:"../images/ui/keyboard.png",imageheight:8,imagewidth:32,type:"keyboard"},{id:13,image:"../images/ui/Touch.png",imageheight:8,imagewidth:21,type:"touch"},{id:14,image:"../images/ui/arrow.png",imageheight:14,imagewidth:14,type:"arrow"},{id:15,image:"../images/ui/Ant.png",imageheight:8,imagewidth:10,type:"ant"},{id:16,image:"../images/ui/Binny.png",imageheight:8,imagewidth:18,type:"binny"},{id:17,image:"../images/ui/dpad.png",imageheight:26,imagewidth:130,type:"dpad"},{id:18,image:"../images/ui/buttonB.png",imageheight:16,imagewidth:64,type:"b"},{id:19,image:"../images/ui/buttonA.png",imageheight:16,imagewidth:64,type:"a"}],Be=130,ke="tileset",Me="1.8";var Se={columns:pe,grid:ue,margin:ye,name:we,spacing:ve,tilecount:fe,tiledversion:xe,tileheight:be,tiles:Pe,tilewidth:Be,type:ke,version:Me};const Ie=async function(t,e){const n=await N(Se),c=n.getType("default").img,o=n.getType("selected").img,i=n.getType("start").img,m=n.getType("keyboard").img,s=n.getType("controller").img,g=n.getType("touch").img,l=n.getType("ant").img,v=n.getType("binny").img,h=n.getType("charcaterPreview").img,d=n.getType("arrow").img,w=await Y(de);t.createMapBuffer(w,0),t.createMapBuffer(w,1);let p=0;const P=[0,0,0],u={keyboard:m,touch:g,controller:s},r=()=>Object.entries(u).filter(([y,b])=>e.inputs().includes(y)).map(([y,b])=>b),S=[[i],[],[l,v]],M=w.objects.ui.filter(y=>y.type=="menu").sort((y,b)=>y.order-b.order),I=w.objects.ui.find(y=>y.type=="preview"),T=(y,b)=>(y+1)%b.length,$=(y,b)=>y===0?b.length-1:y-1;return{set(){},render(){t.drawMap(w),M.forEach((y,b)=>{const a=p==b?o:c;t.draw(a,0,0,a.width,a.height,y.x,y.y,y.width,y.height);const B=S[b][P[b]];t.drawCentered(B,y,2),["character","controller"].includes(y.name)&&p==b&&w.objects.ui.filter(x=>x.name==y.name&&x.type!="menu").forEach(x=>{x.name=="controller"&&S[1].length==1||t.drawFrame([d,0,0,d.width,d.height],[x.x,x.y,x.width,x.height],x.type=="right"?1:0)})}),t.draw(h,0,0,h.width,h.height,I.x,I.y,I.width,I.height)},update(){S[1]=r(),e.down.once&&(p=T(p,M)),e.up.once&&(p=$(p,M)),e.left.once&&(P[p]=T(P[p],S[p])),e.right.once&&(P[p]=$(P[p],S[p]))},changeState(){return e.enter.once&&p==0?["run"]:!1}}},Te=t=>{const e=W(t),n=e.canvas;document.body.append(n);const c=()=>{const o=document.documentElement.clientWidth/e.canvas.width,i=document.documentElement.clientHeight/e.canvas.height,m=o<i?o:i;e.canvas.style.height=Math.floor(e.canvas.height*m)+"px",e.canvas.style.width=Math.floor(e.canvas.width*m)+"px"};return window.addEventListener("resize",c),c(),e},W=t=>{const n=document.createElement("canvas").getContext("2d",{alpha:!0});return n.canvas.height=t,n.canvas.width=16/9*t,n.imageSmoothingEnabled=!1,n.canvas.style["image-rendering"]="pixelated",n},je=function(t,e=1){const n=Te(t*e),c=(i,m,s,g,l,v,h,d,w,p=1)=>n.drawImage(i,m,s,g,l,v*e,h*e,d*e*p,w*e*p),o=(i,m,s,g,l,v,h,d,w)=>{n.scale(-1,1),c(i,m,s,g,l,-Math.floor(v+d),Math.floor(h),d,w),n.scale(-1,1)};return{ctx:n,draw:c,drawCentered(i,m,s){c(i,0,0,i.width,i.height,m.x+m.width/2-i.width*s/2,m.y+m.height/2-i.height*s/2,i.width*s,i.height*s)},drawFrame(i,m,s=1){s===1?c(...i,...m):o(...i,...m)},drawEntity(i){var g;const m=(g=i.tiles[i.state])!=null?g:i.tiles.idle;m.animate();const s=m.getFrame();this.drawFrame(s,[i.x,i.y,16,16],i.direction*(i.reversed?-1:1))},drawMap(i){i==null||i.buffers.forEach(m=>n.drawImage(m.canvas,0,0))},createMapBuffer(i,m){var g;i!=null&&i.buffers||(i.buffers=[]),(g=i.buffers)!=null&&g[m]||(i.buffers[m]=W(t*e)),i.layers[m].forEach(l=>{l&&i.buffers[m].drawImage(l.img,l.sx,l.sy,l.sh,l.sw,l.x,l.y,l.height,l.width)})},drawPlayerHealth(i,{health:m,maxHealth:s}){for(let g=0;g<s;g++)n.drawImage(i,g<m?0:8,0,8,8,g*16,268,16,16)},drawPlayerPoints(i,{points:m=0}){const s=h=>_(i.tiles.find(d=>d.type==h).id,i.columns,i.tilewidth,i.tileheight),g=s("coin"),l=m.toString(),v=new Array(6-l.length).fill(0).join("")+l;for(let h=0;h<v.length;h++)c(i.img,...s(v[h]),i.tilewidth,i.tileheight,(25+h)*16,268,16,16);c(i.img,...g,i.tilewidth,i.tileheight,25*16,268,16,16)},drawBullet(i){c(i.img,0,0,i.width,i.height,i.x,i.y,i.width,i.height)},drawItem(i){i.img.animate();const m=i.img.getFrame();this.drawFrame(m,[i.x,i.y,16,16])}}};(async function(){const t=await Gt();document.addEventListener("keydown",()=>console.log(t.inputs()));const e=je(288),n=await qt(e,t),c=Qt(e,t),o=await Ie(e,t),i=new et({run:n,pause:c,title:o});i.setState(["title"]),i.start()})();
