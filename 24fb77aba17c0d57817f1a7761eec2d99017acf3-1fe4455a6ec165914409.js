(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"6NhV":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return z})),t.d(n,"b",(function(){return M})),t.d(n,"c",(function(){return C})),t.d(n,"d",(function(){return G})),t.d(n,"e",(function(){return Z}));var r=t("mXGw"),i=t.n(r),o=t("5QYd"),a=t("llhf"),c=t("56Mt"),l=t("W0B4"),s=t.n(l),u=t("edSL"),d=t.n(u),p=t("4e1R"),f=t.n(p),h=t("XQLF"),y=t.n(h),m=t("BORk"),b=t("wMFK");function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w={nodes:s.a.arrayOf(s.a.shape({id:s.a.string.isRequired})).isRequired,links:s.a.arrayOf(s.a.shape({source:s.a.string.isRequired,target:s.a.string.isRequired})).isRequired,layers:s.a.arrayOf(s.a.oneOfType([s.a.oneOf(["links","nodes"]),s.a.func])).isRequired,linkDistance:s.a.oneOfType([s.a.string,s.a.func,s.a.number]).isRequired,repulsivity:s.a.number.isRequired,distanceMin:s.a.number.isRequired,distanceMax:s.a.number.isRequired,iterations:s.a.number.isRequired,nodeColor:s.a.oneOfType([s.a.string,s.a.func]).isRequired,nodeBorderWidth:s.a.oneOfType([s.a.number,s.a.func]).isRequired,nodeBorderColor:a.k.isRequired,linkThickness:s.a.oneOfType([s.a.number,s.a.func]).isRequired,linkColor:a.k.isRequired,isInteractive:s.a.bool.isRequired},x=(v(v({},w),{},{role:s.a.string.isRequired},o.U),v({pixelRatio:s.a.number.isRequired},w),{layers:["links","nodes"],linkDistance:30,repulsivity:10,distanceMin:1,distanceMax:1/0,iterations:90,nodeBorderWidth:0,nodeBorderColor:{from:"color"},linkThickness:1,linkColor:{from:"source.color"},isInteractive:!0}),C=v(v({},x),{},{animate:!0,motionStiffness:90,motionDamping:15,role:"img"}),M=v(v({},x),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1}),E=function(e){var n=e.nodes,t=e.links,i=e.linkDistance,o=e.repulsivity,a=e.distanceMin,c=e.distanceMax,l=e.center,s=e.iterations,u=j(Object(r.useState)([]),2),p=u[0],h=u[1],b=j(Object(r.useState)([]),2),g=b[0],k=b[1];return Object(r.useEffect)((function(){var e=function(e){var n,t=e.linkDistance,r=e.repulsivity,i=e.distanceMin,o=e.distanceMax,a=e.center;return"function"==typeof t||y()(t)?n=t:f()(t)&&(n=function(e){return d()(e,t)}),{link:Object(m.c)().id((function(e){return e.id})).distance(n),charge:Object(m.d)().strength(-r).distanceMin(i).distanceMax(o),center:Object(m.a)(a[0],a[1])}}({linkDistance:i,repulsivity:o,distanceMin:a,distanceMax:c,center:l}),r=n.map((function(e){return v({},e)})),u=t.map((function(e){return v({id:"".concat(e.source,".").concat(e.target)},e)})),b=Object(m.e)(r).force("link",e.link.links(u)).force("charge",e.charge).force("center",e.center).stop();return b.tick(s),h(r),k(u.map((function(e){return e.previousSource=p.find((function(n){return n.id===e.source.id})),e.previousTarget=p.find((function(n){return n.id===e.target.id})),e}))),function(){b.stop()}}),[n,t,i,o,a,c,s,l[0],l[1]]),[p,g]},T=function(e){return Object(r.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},R=function(e){return Object(r.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},S=function(e){var n=e.node,t=e.x,r=e.y,o=e.radius,a=e.color,c=e.borderWidth,l=e.borderColor,s=e.scale,u=void 0===s?1:s,d=e.handleNodeHover,p=e.handleNodeLeave;return i.a.createElement("circle",{transform:"translate(".concat(t,",").concat(r,") scale(").concat(u,")"),r:o,fill:a,strokeWidth:c,stroke:l,onMouseEnter:function(e){return d(n,e)},onMouseMove:function(e){return d(n,e)},onMouseLeave:p})},q=Object(r.memo)(S),W=function(e){var n=e.style;return{x:n.x.val,y:n.y.val,radius:n.radius.val,scale:0}},N=function(e){return function(n){var t=n.style;return{x:t.x,y:t.y,radius:t.radius,scale:Object(b.spring)(0,e)}}},B=function(e){var n=e.nodes,t=e.color,r=e.borderWidth,a=e.borderColor,c=e.handleNodeHover,l=e.handleNodeLeave,s=Object(o.rb)().springConfig;return i.a.createElement(b.TransitionMotion,{willEnter:W,willLeave:N(s),styles:n.map((function(e){return{key:e.id,data:e,style:{x:Object(b.spring)(e.x,s),y:Object(b.spring)(e.y,s),radius:Object(b.spring)(e.radius,s),scale:Object(b.spring)(1,s)}}}))},(function(e){return i.a.createElement(i.a.Fragment,null,e.map((function(e){var n=e.key,o=e.style,s=e.data;return i.a.createElement(q,{key:n,node:s,x:o.x,y:o.y,radius:Math.max(o.radius,0),color:t(s),borderWidth:r,borderColor:a(s),scale:Math.max(o.scale,0),handleNodeHover:c,handleNodeLeave:l})})))}))},L=Object(r.memo)(B),D=function(e){var n=e.nodes,t=e.color,r=e.borderWidth,o=e.borderColor,a=e.handleNodeHover,c=e.handleNodeLeave;return n.map((function(e){return i.a.createElement(q,{key:e.id,node:e,x:e.x,y:e.y,radius:e.radius,color:t(e),borderWidth:r,borderColor:o(e),handleNodeHover:a,handleNodeLeave:c})}))},P=Object(r.memo)(D),X=function(e){var n=e.sourceX,t=e.sourceY,r=e.targetX,o=e.targetY,a=e.thickness,c=e.color;return i.a.createElement("line",{stroke:c,strokeWidth:a,strokeLinecap:"round",x1:n,y1:t,x2:r,y2:o})},I=Object(r.memo)(X),Y=function(e){var n=e.style,t=e.data,r=t.previousSource?t.previousSource.x:n.sourceX.val,i=t.previousSource?t.previousSource.y:n.sourceY.val;return{sourceX:r,sourceY:i,targetX:r,targetY:i}},F=function(e){var n=e.links,t=e.linkThickness,r=e.linkColor,a=Object(o.rb)().springConfig;return i.a.createElement(b.TransitionMotion,{willEnter:Y,styles:n.map((function(e){return{key:e.id,data:e,style:{sourceX:Object(b.spring)(e.source.x,a),sourceY:Object(b.spring)(e.source.y,a),targetX:Object(b.spring)(e.target.x,a),targetY:Object(b.spring)(e.target.y,a)}}}))},(function(e){return i.a.createElement(i.a.Fragment,null,e.map((function(e){var n=e.key,o=e.style,a=e.data;return i.a.createElement(I,{key:n,link:a,color:r(a),thickness:t(a),sourceX:o.sourceX,sourceY:o.sourceY,targetX:o.targetX,targetY:o.targetY})})))}))},H=Object(r.memo)(F),V=function(e){var n=e.links,t=e.linkThickness,r=e.linkColor;return n.map((function(e){return i.a.createElement(I,{key:e.id,link:e,color:r(e),thickness:t(e),sourceX:e.source.x,sourceY:e.source.y,targetX:e.target.x,targetY:e.target.y})}))},A=Object(r.memo)(V),Q=function(e){var n=e.node,t=e.format,r=e.tooltip;return i.a.createElement(c.a,{id:n.id,enableChip:!0,color:n.color,format:t,renderContent:"function"==typeof r?r.bind(null,v({},n)):null})},J=Object(r.memo)(Q),U=function(e){var n=e.width,t=e.height,l=e.margin,s=e.nodes,u=e.links,d=e.linkDistance,p=e.repulsivity,f=e.distanceMin,h=e.distanceMax,y=e.iterations,m=e.layers,b=e.nodeColor,g=e.nodeBorderWidth,k=e.nodeBorderColor,O=e.linkThickness,w=e.linkColor,x=e.tooltip,C=e.isInteractive,M=e.role,S=Object(o.pb)(n,t,l),q=S.margin,W=S.innerWidth,N=S.innerHeight,B=S.outerWidth,D=S.outerHeight,X=Object(o.rb)().animate,I=Object(o.sb)(),Y=T(b),F=Object(a.r)(k,I),V=R(O),Q=Object(a.r)(w,I),U=j(E({nodes:s,links:u,linkDistance:d,repulsivity:p,distanceMin:f,distanceMax:h,iterations:y,center:[W/2,N/2]}),2),z=U[0],G=U[1],K=Object(c.i)(),$=K.showTooltipFromEvent,Z=K.hideTooltip,_=Object(r.useCallback)((function(e,n){$(i.a.createElement(J,{node:e,tooltip:x}),n)}),[$,x]),ee=Object(r.useCallback)((function(){Z()}),[Z]),ne={links:i.a.createElement(!0===X?H:A,{key:"links",links:G,linkThickness:V,linkColor:Q}),nodes:i.a.createElement(!0===X?L:P,{key:"nodes",nodes:z,color:Y,borderWidth:g,borderColor:F,handleNodeHover:C?_:void 0,handleNodeLeave:C?ee:void 0})};return i.a.createElement(o.l,{width:B,height:D,margin:q,role:M},m.map((function(n,t){return"function"==typeof n?i.a.createElement(r.Fragment,{key:t},n(v(v({},e),{},{innerWidth:W,innerHeight:N,nodes:z,links:G}))):ne[n]})))};U.defaultProps=C;var z=Object(o.ub)(U),G=function(e){return i.a.createElement(o.k,null,(function(n){var t=n.width,r=n.height;return i.a.createElement(z,Object.assign({width:t,height:r},e))}))},K=function(e){var n=e.width,t=e.height,c=e.margin,l=e.pixelRatio,s=e.nodes,u=e.links,d=e.linkDistance,p=e.repulsivity,f=e.distanceMin,h=e.distanceMax,y=e.iterations,m=e.layers,b=e.nodeColor,g=e.nodeBorderWidth,k=e.nodeBorderColor,O=e.linkThickness,w=e.linkColor,x=e.isInteractive,C=Object(r.useRef)(null),M=Object(o.pb)(n,t,c),S=M.margin,q=M.innerWidth,W=M.innerHeight,N=M.outerWidth,B=M.outerHeight,L=j(E({nodes:s,links:u,linkDistance:d,repulsivity:p,distanceMin:f,distanceMax:h,iterations:y,center:[q/2,W/2]}),2),D=L[0],P=L[1],X=Object(o.sb)(),I=T(b),Y=Object(a.r)(k,X),F=R(O),H=Object(a.r)(w,X);return Object(r.useEffect)((function(){C.current.width=N*l,C.current.height=B*l;var n=C.current.getContext("2d");n.scale(l,l),n.fillStyle=X.background,n.fillRect(0,0,N,B),n.translate(S.left,S.top),m.forEach((function(t){"links"===t?P.forEach((function(e){n.strokeStyle=H(e),n.lineWidth=F(e),n.beginPath(),n.moveTo(e.source.x,e.source.y),n.lineTo(e.target.x,e.target.y),n.stroke()})):"nodes"===t?D.forEach((function(e){n.fillStyle=I(e),n.beginPath(),n.arc(e.x,e.y,e.radius,0,2*Math.PI),n.fill(),g>0&&(n.strokeStyle=Y(e),n.lineWidth=g,n.stroke())})):"function"==typeof t&&t(n,v(v({},e),{},{nodes:D,links:P}))}))}),[C,N,B,m,X,D,P,I,g,Y,F,H]),i.a.createElement("canvas",{ref:C,width:N*l,height:B*l,style:{width:N,height:B,cursor:x?"auto":"normal"}})};K.defaultProps=M;var $=Object(o.ub)(K),Z=function(e){return i.a.createElement(o.k,null,(function(n){var t=n.width,r=n.height;return i.a.createElement($,Object.assign({width:t,height:r},e))}))}}).call(this,t("pCvA"))},kNwl:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r,i=t("Eo5u"),o=t("6NhV"),a=t("RQLE"),c=[{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            Not required if using responsive component.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            Not required if using responsive component.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},(r={key:"margin",group:"Base",type:"object",help:"Chart margin.",controlType:"margin"},r.group="Base",r),{key:"linkDistance",group:"Simulation",type:"number | string | (link: Link) => number",help:"Control links' distance.",description:"\n            If you set a **number**, this value will be used for all links.\n\n            If you use a **string**, this will be used to pick the distance\n            from the corresponding link property, thus, this property\n            should exist on each link.\n\n            If you use a **function**, it will receive a link and must return\n            the desired distance.\n        "},{key:"repulsivity",group:"Simulation",type:"number",help:"Control how nodes repel each other.",description:"\n            This value will also affect the strength\n            of `distanceMin` and `distanceMax`.\n        ",controlType:"range",controlOptions:{min:1,max:100},defaultValue:o.c.repulsivity},{key:"distanceMin",group:"Simulation",type:"number",help:"Sets the minimum distance between nodes for the many-body force.",defaultValue:o.c.distanceMin},{key:"distanceMax",group:"Simulation",help:"Sets the maximum distance between nodes for the many-body force.",defaultValue:o.c.distanceMax},{key:"iterations",group:"Simulation",help:"Adjust the simulation quality.",description:"\n            Increasing this number will result in a **more accurate simulation**,\n            however it will also involve more computing.\n        ",type:"number",defaultValue:o.c.iterations,controlType:"range",controlOptions:{min:60,max:260}},{key:"nodeColor",group:"Nodes",type:"string | (node: Node) => string",help:"Control nodes' color."},{key:"nodeBorderWidth",group:"Nodes",type:"number | (node: Node) => number",help:"Control nodes' border width.",defaultValue:o.c.nodeBorderWidth,controlType:"lineWidth"},{key:"nodeBorderColor",group:"Nodes",type:"string | object | (link: Link) => string",help:"Control nodes' border color.",defaultValue:o.c.nodeBorderColor,controlType:"inheritedColor"},{key:"linkThickness",enableControlForFlavors:["canvas"],group:"Links",type:"number | (link: Link) => number",help:"Control links' thickness.",defaultValue:o.c.linkThickness,controlType:"lineWidth"},{key:"linkColor",group:"Links",type:"string | (link: Link) => string",help:"Control links' color.",defaultValue:o.c.linkColor,controlType:"inheritedColor",controlOptions:{inheritableProperties:["source.color","target.color"]}},{key:"tooltip",group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component.",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML\n            element and will receive the node's data.\n        "},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",required:!1,defaultValue:o.c.layers}].concat(Object(i.a)(Object(a.e)(["svg"],o.c))),l=Object(a.d)(c)}}]);
//# sourceMappingURL=24fb77aba17c0d57817f1a7761eec2d99017acf3-1fe4455a6ec165914409.js.map