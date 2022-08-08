var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var _=(n,e,t)=>e in n?te(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,j=(n,e)=>{for(var t in e||(e={}))oe.call(e,t)&&_(n,t,e[t]);if(D)for(var t of D(e))ie.call(e,t)&&_(n,t,e[t]);return n},q=(n,e)=>ne(n,re(e));class L{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const T="https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";class se{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function N(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(T+"/configuration.html"+e)}async function ae(n,e){const t=await WA.room.getTiledMap(),r=new Map;return Y(t.layers,r,n,e),r}function Y(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const i of o.objects)if(i.type==="variable"){if(!!t&&o.name!==t||!!r&&!r.includes(i.name))continue;e.set(i.name,new se(i))}}else o.type==="group"&&Y(o.layers,e,t,r)}let R;async function k(){return R===void 0&&(R=ue()),R}async function ue(){return le(await WA.room.getTiledMap())}function le(n){const e=new Map;return F(n.layers,"",e),e}function F(n,e,t){for(const r of n)r.type==="group"?F(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}function ce(n){let e=1/0,t=1/0,r=0,o=0;const i=n.data;if(typeof i=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<n.height;s++)for(let u=0;u<n.width;u++)i[u+s*n.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),t=Math.min(t,s),r=Math.max(r,s));return{top:t,left:e,right:o+1,bottom:r+1}}function J(n){let e=1/0,t=1/0,r=0,o=0;for(const i of n){const s=ce(i);s.left<e&&(e=s.left),s.top<t&&(t=s.top),s.right>o&&(o=s.right),s.bottom>r&&(r=s.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var fe=Object.prototype.toString,C=Array.isArray||function(e){return fe.call(e)==="[object Array]"};function V(n){return typeof n=="function"}function pe(n){return C(n)?"array":typeof n}function G(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function K(n,e){return n!=null&&typeof n=="object"&&e in n}function he(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var de=RegExp.prototype.test;function ge(n,e){return de.call(n,e)}var ye=/\S/;function we(n){return!ge(ye,n)}var me={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ve(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return me[t]})}var be=/\s*/,Ae=/\s+/,Z=/\s*=/,We=/\s*\}/,Se=/#|\^|\/|>|\{|&|=|!/;function Ce(n,e){if(!n)return[];var t=!1,r=[],o=[],i=[],s=!1,u=!1,a="",c=0;function h(){if(s&&!u)for(;i.length;)delete o[i.pop()];else i=[];s=!1,u=!1}var g,w,p;function A(b){if(typeof b=="string"&&(b=b.split(Ae,2)),!C(b)||b.length!==2)throw new Error("Invalid tags: "+b);g=new RegExp(G(b[0])+"\\s*"),w=new RegExp("\\s*"+G(b[1])),p=new RegExp("\\s*"+G("}"+b[1]))}A(e||m.tags);for(var l=new P(n),f,d,v,B,E,W;!l.eos();){if(f=l.pos,v=l.scanUntil(g),v)for(var x=0,ee=v.length;x<ee;++x)B=v.charAt(x),we(B)?(i.push(o.length),a+=B):(u=!0,t=!0,a+=" "),o.push(["text",B,f,f+1]),f+=1,B===`
`&&(h(),a="",c=0,t=!1);if(!l.scan(g))break;if(s=!0,d=l.scan(Se)||"name",l.scan(be),d==="="?(v=l.scanUntil(Z),l.scan(Z),l.scanUntil(w)):d==="{"?(v=l.scanUntil(p),l.scan(We),l.scanUntil(w),d="&"):v=l.scanUntil(w),!l.scan(w))throw new Error("Unclosed tag at "+l.pos);if(d==">"?E=[d,v,f,l.pos,a,c,t]:E=[d,v,f,l.pos],c++,o.push(E),d==="#"||d==="^")r.push(E);else if(d==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+v+'" at '+f);if(W[1]!==v)throw new Error('Unclosed section "'+W[1]+'" at '+f)}else d==="name"||d==="{"||d==="&"?u=!0:d==="="&&A(v)}if(h(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+l.pos);return Le(Be(o))}function Be(n){for(var e=[],t,r,o=0,i=n.length;o<i;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function Le(n){for(var e=[],t=e,r=[],o,i,s=0,u=n.length;s<u;++s)switch(o=n[s],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":i=r.pop(),i[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function P(n){this.string=n,this.tail=n,this.pos=0}P.prototype.eos=function(){return this.tail===""};P.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};P.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function S(n,e){this.view=n,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,i,s,u,a=!1;o;){if(e.indexOf(".")>0)for(i=o.view,s=e.split("."),u=0;i!=null&&u<s.length;)u===s.length-1&&(a=K(i,s[u])||he(i,s[u])),i=i[s[u++]];else i=o.view[e],a=K(o.view,e);if(a){r=i;break}o=o.parent}t[e]=r}return V(r)&&(r=r.call(this.view)),r};function y(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}y.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};y.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||m.tags).join(":"),i=typeof r!="undefined",s=i?r.get(o):void 0;return s==null&&(s=Ce(e,t),i&&r.set(o,s)),s};y.prototype.render=function(e,t,r,o){var i=this.getConfigTags(o),s=this.parse(e,i),u=t instanceof S?t:new S(t,void 0);return this.renderTokens(s,u,r,e,o)};y.prototype.renderTokens=function(e,t,r,o,i){for(var s="",u,a,c,h=0,g=e.length;h<g;++h)c=void 0,u=e[h],a=u[0],a==="#"?c=this.renderSection(u,t,r,o,i):a==="^"?c=this.renderInverted(u,t,r,o,i):a===">"?c=this.renderPartial(u,t,r,i):a==="&"?c=this.unescapedValue(u,t):a==="name"?c=this.escapedValue(u,t,i):a==="text"&&(c=this.rawValue(u)),c!==void 0&&(s+=c);return s};y.prototype.renderSection=function(e,t,r,o,i){var s=this,u="",a=t.lookup(e[1]);function c(w){return s.render(w,t,r,i)}if(!!a){if(C(a))for(var h=0,g=a.length;h<g;++h)u+=this.renderTokens(e[4],t.push(a[h]),r,o,i);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],t.push(a),r,o,i);else if(V(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(t.view,o.slice(e[3],e[5]),c),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],t,r,o,i);return u}};y.prototype.renderInverted=function(e,t,r,o,i){var s=t.lookup(e[1]);if(!s||C(s)&&s.length===0)return this.renderTokens(e[4],t,r,o,i)};y.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),i=e.split(`
`),s=0;s<i.length;s++)i[s].length&&(s>0||!r)&&(i[s]=o+i[s]);return i.join(`
`)};y.prototype.renderPartial=function(e,t,r,o){if(!!r){var i=this.getConfigTags(o),s=V(r)?r(e[1]):r[e[1]];if(s!=null){var u=e[6],a=e[5],c=e[4],h=s;a==0&&c&&(h=this.indentPartial(s,c,u));var g=this.parse(h,i);return this.renderTokens(g,t,r,h,o)}}};y.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};y.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||m.escape,i=t.lookup(e[1]);if(i!=null)return typeof i=="number"&&o===m.escape?String(i):o(i)};y.prototype.rawValue=function(e){return e[1]};y.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};y.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){M.templateCache=n},get templateCache(){return M.templateCache}},M=new y;m.clearCache=function(){return M.clearCache()};m.parse=function(e,t){return M.parse(e,t)};m.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+pe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,t,r,o)};m.escape=ve;m.Scanner=P;m.Context=S;m.Writer=y;class Me{constructor(e,t){this.template=e,this.state=t,this.ast=m.parse(e)}getValue(){return this.value===void 0&&(this.value=m.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=m.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],i=r[1],s=r[4];["name","&","#","^"].includes(o)&&t.add(i),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,t)}}}async function Pe(){var n;const e=await k();for(const[t,r]of e.entries()){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const i of o){if(i.type==="int"||i.type==="bool"||i.type==="object"||typeof i.value!="string")continue;const s=new Me(i.value,WA.state);if(s.isPureString())continue;const u=s.getValue();$(t,i.name,u),s.onChange(a=>{$(t,i.name,a)})}}}function $(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let I,O=0,U=0;function H(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Ee(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=z(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Te(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=z(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Q(n){return n.map(e=>I.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function z(n){const e=Q(n),t=J(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(O-r,2)+Math.pow(U-o,2))}function ke(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Ee(n):Te(n),H(n)}),H(n)}function xe(n,e,t,r){const o=n.name;let i,s,u=!1;const a=t.getString("tag");let c=!0;a&&!WA.player.tags.includes(a)&&(c=!1);const h=!!a;function g(){var l;i&&i.remove(),i=WA.ui.displayActionMessage({message:(l=t.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,w()}})}function w(){var l;i&&i.remove(),i=WA.ui.displayActionMessage({message:(l=t.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,g()}})}function p(l){const f=J(Q(e.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:f.right*32,y:f.top*32,width:32*3,height:32*4},allowApi:!0})}function A(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,t.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!c||!h)&&(t.getString("code")||t.getString("codeVariable"))){p(o);return}!c||(WA.state[e.name]?g():w())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),i&&i.remove(),A()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&g(),s&&WA.state[e.name]===!0&&A(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&w())})}function Re(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-O,2)+Math.pow(n.y-U,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Ge(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&Re(n)})}function Ie(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var i;o?r=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Ve(n){n=n!=null?n:T;const e=await ae();I=await k();for(const t of e.values())t.properties.get("door")&&ke(t),t.properties.get("bell")&&Ge(t);for(const t of I.values()){const r=new L(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');xe(t,s,r,n)}const i=r.getString("bellVariable");i&&Ie(i,r,t.name)}WA.player.onPlayerMove(t=>{O=t.x,U=t.y})}function Oe(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),i=n.getString("triggerMessage"),s=n.getString("tag");Ue(t,e,r,o,i,s)}}function Ue(n,e,t,r,o,i){i&&!WA.player.tags.includes(i)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function De(){const n=await k();for(const e of n.values()){const t=new L(e.properties);Oe(t,e.name)}}let X;async function _e(n){const e=await WA.room.getTiledMap();n=n!=null?n:T,X=await k();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new L(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const i of X.values()){const s=new L(i.properties),u=s.getString("openConfig");u&&i.type==="tilelayer"&&je(u.split(","),i.name,s)}}}function je(n,e,t){let r;const o=t.getString("openConfigAdminTag");let i=!0;o&&!WA.player.tags.includes(o)&&(i=!1);function s(){var a;r&&r.remove(),r=WA.ui.displayActionMessage({message:(a=t.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>N(n)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=t.getString("openConfigTrigger");i&&(a&&a==="onaction"?s():N(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const qe=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Ne=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Ke(){var n;const e=WA.player.state.tutorialDone,t=/Mobi|Android/i.test(navigator.userAgent),o=await((n=(await WA.room.getTiledMap()).properties)===null||n===void 0?void 0:n.find(s=>s.name==="tutorial")),i=o&&o.value;if(!e&&i){Ze(t);let s=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),c=()=>{const A=s.x+a.x+a.width>u.x+u.width,l=s.x+a.x<u.x,f=s.y+a.y+a.height>u.y+u.height,d=s.y+a.y<u.y;A?a.x=-a.width-1.5*16:l&&(a.x=1.5*16),f?a.y=-a.height:d&&(a.y=16)},h=p=>{a.width=p.width,a.height=p.height,a.scale=p.scale},g=p=>{const l=(t?qe:Ne).filter(f=>{if(f.lowerBound&&f.uppperBound)return f.lowerBound<p&&p<=f.uppperBound;if(f.lowerBound&&!f.uppperBound)return f.lowerBound<p;if(!f.lowerBound&&f.uppperBound)return p<=f.uppperBound;throw new Error(`Zoom level of: ${p} could not fit in any of the desktopConfig's ranges.`)});h(l[0].config)},w=()=>{if(u===void 0)return;const p=u.zoom;g(p),c()};WA.player.onPlayerMove(p=>{s=p,w()}),WA.camera.onCameraUpdate().subscribe(p=>{u=p,w()}),WA.player.state.tutorialDone=!0}}function Ze(n){let e={allow:"",name:"tutorial",url:T+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};n&&(e=q(j({},e),{position:{x:32,y:-225,height:390,width:250},scale:1})),WA.room.website.create(e)}function $e(){return WA.onInit().then(()=>{Ve().catch(n=>console.error(n)),De().catch(n=>console.error(n)),_e().catch(n=>console.error(n)),Pe().catch(n=>console.error(n)),Ke().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("officeZone").subscribe(()=>{WA.room.showLayer("roofOffice0"),WA.room.showLayer("roofOffice1"),WA.room.showLayer("roofOffice2")}),WA.room.onLeaveLayer("officeZone").subscribe(()=>{}),$e().then(()=>{console.log("Scripting API Extra ready")}).catch(n=>console.error(n))}).catch(n=>console.error(n));
