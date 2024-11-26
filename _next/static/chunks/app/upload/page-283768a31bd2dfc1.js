(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{82908:function(e,t,r){Promise.resolve().then(r.bind(r,21388))},21388:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var n=r(57437),l=r(2265),a=r(57585),o=r(56862),s=r(41671),i=r(97776);class c{parse(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0!==r.binary&&r.binary,l=[],a=0;e.traverse(function(e){if(e.isMesh){let t=e.geometry;if(!0!==t.isBufferGeometry)throw Error("THREE.STLExporter: Geometry is not of type THREE.BufferGeometry.");let r=t.index,n=t.getAttribute("position");a+=null!==r?r.count/3:n.count/3,l.push({object3d:e,geometry:t})}});let o=80;!0===n?((t=new DataView(new ArrayBuffer(2*a+48*a+80+4))).setUint32(o,a,!0),o+=4):t="solid exported\n";let s=new i.Vector3,c=new i.Vector3,u=new i.Vector3,d=new i.Vector3,f=new i.Vector3,h=new i.Vector3;for(let e=0,t=l.length;e<t;e++){let t=l[e].object3d,r=l[e].geometry,n=r.index,a=r.getAttribute("position");if(null!==n)for(let e=0;e<n.count;e+=3)m(n.getX(e+0),n.getX(e+1),n.getX(e+2),a,t);else for(let e=0;e<a.count;e+=3)m(e+0,e+1,e+2,a,t)}return!1===n&&(t+="endsolid exported\n"),t;function m(e,r,l,a,i){s.fromBufferAttribute(a,e),c.fromBufferAttribute(a,r),u.fromBufferAttribute(a,l),!0===i.isSkinnedMesh&&(i.boneTransform(e,s),i.boneTransform(r,c),i.boneTransform(l,u)),s.applyMatrix4(i.matrixWorld),c.applyMatrix4(i.matrixWorld),u.applyMatrix4(i.matrixWorld),d.subVectors(u,c),f.subVectors(s,c),d.cross(f).normalize(),h.copy(d).normalize(),!0===n?(t.setFloat32(o,h.x,!0),o+=4,t.setFloat32(o,h.y,!0),o+=4,t.setFloat32(o,h.z,!0),o+=4):t+="	facet normal "+h.x+" "+h.y+" "+h.z+"\n		outer loop\n",p(s),p(c),p(u),!0===n?(t.setUint16(o,0,!0),o+=2):t+="		endloop\n	endfacet\n"}function p(e){!0===n?(t.setFloat32(o,e.x,!0),o+=4,t.setFloat32(o,e.y,!0),o+=4,t.setFloat32(o,e.z,!0),o+=4):t+="			vertex "+e.x+" "+e.y+" "+e.z+"\n"}}}var u=e=>{let{scale:t=1,visible:r=!1,geometry:a,meshProps:s,materialProps:{opacity:c=1,...u},onLoaded:d,...f}=e,h=(0,l.useRef)(null),m=(0,l.useRef)(null),[p,x]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{x(!0)},[a]),(0,o.F)(()=>{var e;if(!p||null==a.boundingSphere||null==h.current||null==m.current)return;new i.Box3().setFromObject(h.current);let{min:t,max:r}=null!==(e=a.boundingBox)&&void 0!==e?e:{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}};a.computeVertexNormals();let n={width:r.x-t.x,length:r.y-t.y,height:r.z-t.z};a.applyMatrix4(new i.Matrix4().makeTranslation(-t.x-n.width/2,-t.y-n.length/2,-t.z-n.height/2)),d({...n,boundingRadius:a.boundingSphere.radius},h.current,m.current),x(!1)}),(0,n.jsx)("group",{ref:m,...f,children:(0,n.jsxs)("mesh",{ref:h,scale:[t,t,t],castShadow:!0,...s,children:[(0,n.jsx)("primitive",{object:a,attach:"geometry"}),(0,n.jsx)("meshStandardMaterial",{side:i.DoubleSide,opacity:r?c:0,...u})]})})},d=e=>{let{offsetX:t=0,offsetY:r=0,offsetZ:l=0,distance:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("ambientLight",{}),(0,n.jsx)("spotLight",{castShadow:!0,position:[t,r,a+l]}),[[-a+t,r,a+l],[t,-a+r,a+l],[t,a+r,l]].map((e,t)=>(0,n.jsx)("directionalLight",{intensity:2,position:e},t))]})};function f(e,t,r){return Math.max(Math.min(t,r),e)}function h(e){let t=f(-Math.PI/2+.01,e.latitude,Math.PI/2-.01),r=f(-Math.PI+.01,e.longitude,Math.PI-.01);return[e.distance*Math.cos(t)*Math.sin(r),-e.distance*Math.cos(r)*Math.cos(t),e.distance*Math.sin(t)]}var m=e=>{let{initialPosition:t,center:r,...a}=e,{camera:s}=(0,o.D)();return(0,l.useEffect)(()=>{s.up.applyAxisAngle(new i.Vector3(1,0,0),Math.PI/2)},[s]),(0,l.useEffect)(()=>{let e=h(t);s.position.set(e[0]+r[0],e[1]+r[1],e[2]+r[2]),s.lookAt(...r)},[s,r]),(0,n.jsx)("perspectiveCamera",{near:1,far:1e3,...a})},p=r(64736),x=r(43324),g=r(36327),b=r(42618),v=r(26547);let j=Math.PI/8,w=-Math.PI/8,y=new i.Color("white");var N=e=>{let{url:t,extraHeaders:r,shadows:a=!1,objectRespectsFloor:f=!0,showAxes:N=!1,showAxisGizmo:C=!1,showGrid:M=!1,orbitControls:P=!1,showRotationGizmo:k=!1,onFinishLoading:S=()=>{},onOrbitChange:E,onRotationControlChange:I,cameraInitialPosition:{latitude:F,longitude:R,distance:T}={},cameraProps:{ref:D,initialPosition:{latitude:z=j,longitude:A=w,distance:B}={}}={},modelProps:{ref:V,scale:_=1,positionX:L,positionY:O,rotationX:U=0,rotationY:G=0,rotationZ:H=0,color:W="grey",geometryProcessor:X}={},floorProps:{gridWidth:q,gridLength:Y}={}}=e,{camera:Q}=(0,o.D)(),[J,K]=(0,l.useState)(),[Z,$]=(0,l.useState)({width:0,height:0,length:0,boundingRadius:0}),[ee,et]=(0,l.useState)(),[er,en]=(0,l.useState)([0,0,0]),[el,ea]=(0,l.useState)(!1);(0,l.useEffect)(()=>{ea(!1)},[t]);let eo=(0,o.H)(s.j,t,e=>e.setRequestHeader(null!=r?r:{})),es=(0,l.useMemo)(()=>{var e;return null!==(e=null==X?void 0:X(eo))&&void 0!==e?e:eo},[eo,X]);function ei(e,t){let r=Math.max(null!=q?q:0,null!=Y?Y:0);return r>0?r*(null!=t?t:1):e*(null!=t?t:1)}(0,l.useEffect)(()=>{null!=D&&(D.current={camera:Q,setCameraPosition:e=>{let{latitude:t,longitude:r,distance:n}=e,[l,a,o]=h({latitude:t,longitude:r,distance:ei(Z.boundingRadius,n)}),[s,i,c]=er;Q.position.set(l+s,a+i,o+c),Q.lookAt(s,i,c)}})},[Q,D,er,Z]),(0,l.useEffect)(()=>{null!=V&&null!=J&&(V.current={save:()=>new Blob([new c().parse(J,{binary:!0})],{type:"application/octet-stream"}),model:J})},[J,V]),(0,o.F)(e=>{let{scene:t}=e;if(!f)return;let r=t.getObjectByName("mesh"),n=t.getObjectByName("group"),l=new i.Box3().setFromObject(r),a=l.max.z-l.min.z;n.position.z=a/2});let ec=[null!=L?L:Z.width*_/2,null!=O?O:Z.length*_/2,0],eu=(0,o.D)(e=>e.scene),ed=(0,l.useRef)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("scene",{background:y}),el&&N&&(0,n.jsx)("axesHelper",{scale:[50,50,50]}),null!=ee&&(0,n.jsx)(m,{initialPosition:ee,center:er}),(0,n.jsx)(u,{name:"group",meshProps:{name:"mesh"},scale:_,geometry:es,position:ec,rotation:[U,G,H],visible:el,materialProps:{color:W},onLoaded:function(e,t){K(t);let{width:r,length:n,height:l,boundingRadius:a}=e;$(e),en([null!=L?L:r/2,null!=O?O:n/2,f?l/2:0]),et({latitude:null!=F?F:z,longitude:null!=R?R:A,distance:ei(a,null!=T?T:B)}),S(e),setTimeout(()=>ea(!0),100)}}),M&&(0,n.jsx)(p.r,{rotation:[Math.PI/2,0,0],position:[0,0,0],cellSize:6,cellThickness:1,cellColor:"#6f6f6f",sectionSize:30,sectionThickness:1.25,sectionColor:"#e0dede",fadeDistance:1e3,fadeStrength:10,followCamera:!1,infiniteGrid:!0,args:[10,10]}),(0,n.jsx)(d,{distance:350,offsetX:ec[0],offsetY:ec[1]}),el&&C&&(0,n.jsx)(x.I,{alignment:"bottom-right",margin:[80,80],children:(0,n.jsx)(g.f,{axisColors:["#9d4b4b","#2f7f4f","#3b5b9d"],labelColor:"white"})}),el&&P&&(0,n.jsx)(v.z,{makeDefault:!0,onChange:E,target:er,dampingFactor:.2}),el&&k&&(0,n.jsx)(b.Y,{ref:ed,mode:"rotate",onObjectChange:e=>{ed.current&&(null==I||I(ed.current.object.rotation))},object:eu.getObjectByName("mesh")})]})};class C extends l.Component{shouldComponentUpdate(e,t,r){return""===this.state.message&&""!==t.message&&null!=e.onError&&e.onError(Error(t.message)),!0}static getDerivedStateFromError(e){return{message:e.message}}componentDidCatch(){}render(){return""!==this.state.message?null:this.props.children}constructor(...e){super(...e),this.state={message:""}}}var M=e=>{let{url:t,cameraProps:r,modelProps:o,floorProps:s,children:c,onError:u,extraHeaders:d,onFinishLoading:f,onOrbitChange:h,onRotationControlChange:m,canvasId:p,shadows:x,objectRespectsFloor:g,showAxes:b,showAxisGizmo:v,showGrid:j,orbitControls:w,showRotationGizmo:y,cameraInitialPosition:M,...P}=e;return(0,n.jsx)("div",{...P,children:(0,n.jsx)(C,{onError:u,children:(0,n.jsx)(l.Suspense,{fallback:null,children:(0,n.jsxs)(a.Xz,{shadows:!0,gl:{preserveDrawingBuffer:!0,shadowMapType:i.PCFSoftShadowMap,antialias:!0},id:p,style:{width:"100%",height:"100%"},children:[(0,n.jsx)(N,{url:t,cameraProps:r,modelProps:o,floorProps:s,extraHeaders:d,onFinishLoading:f,onOrbitChange:h,onRotationControlChange:m,shadows:x,objectRespectsFloor:g,showAxes:b,showAxisGizmo:v,showGrid:j,orbitControls:w,showRotationGizmo:y,cameraInitialPosition:M}),c]})})})})};let P=(0,l.createContext)(void 0),k=()=>(0,l.useContext)(P),S=e=>{let{children:t}=e,[r,a]=(0,l.useState)(void 0);return(0,n.jsx)(P.Provider,{value:{modal:r,showModal:e=>{a(e)},popModal:()=>{a(void 0)}},children:t})},E=e=>{let{title:t,bodyText:r,onConfirm:l,onCancel:a,confirmText:o,cancelText:s}=e,{popModal:i}=k();return(0,n.jsxs)("div",{className:"border-[#444444] bg-[#1e1e1e] w-5/12 rounded-md border-2 p-8",children:[(0,n.jsx)("h1",{className:"font-bold",children:t}),(0,n.jsx)("p",{className:"mt-4",children:r}),(0,n.jsxs)("div",{className:"mt-8 flex flex-row space-x-4",children:[(0,n.jsx)("button",{type:"button",className:"border-[#444444] bg-[#444444] text-theme-text hover:border-blue-500 hover:bg-[#1e1e1e] hover:text-theme-highlight flex w-full items-center justify-center rounded-md border-2 px-8 py-2 text-center transition duration-100",onClick:()=>{null==a||a(),i()},children:null!=s?s:"Cancel"}),(0,n.jsx)("button",{type:"button",className:"border-blue-500 bg-blue-500 text-theme-body hover:bg-[#1e1e1e] hover:text-theme-highlight flex w-full items-center justify-center rounded-md border-2 px-8 py-2 text-center transition duration-100",onClick:()=>{null==l||l(),i()},children:null!=o?o:"Confirm"})]})]})},I=()=>{let{modal:e}=k();return(0,n.jsxs)("div",{className:"fixed inset-0 z-50 transition duration-200 ".concat(e?"opacity-100":"pointer-events-none opacity-0"),children:[(0,n.jsx)("div",{className:"bg-[#1e1e1e] absolute inset-0 opacity-75"}),(0,n.jsx)("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:e})]})};var F=e=>{let{onFileSelect:t,className:r,onlyAcceptDraggedFiles:a,dragActiveClassName:o,dragInactiveClassName:s,children:i}=e,[c,u]=(0,l.useState)(!1),d=(0,l.useRef)(null),f=e=>{e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?u(!0):"dragleave"===e.type&&u(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-full h-full ".concat(c?o:s," ").concat(r),onDragOver:f,onDragEnter:f,onDragLeave:f,onDrop:e=>{e.preventDefault(),e.stopPropagation(),u(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&t(e.dataTransfer.files[0])},onClick:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.click()},children:i}),(0,n.jsx)("input",{className:"hidden",ref:d,type:"file",id:"input-file-upload",onChange:e=>{e.currentTarget.files&&e.currentTarget.files[0]&&t(e.currentTarget.files[0])},tabIndex:-1,accept:".stl",onClick:e=>{a&&e.preventDefault()}})]})},R=r(61015);let T=(0,l.forwardRef)((e,t)=>{let{modelColor:r,modelRefs:a,cameraRef:o}=e,[s,i]=(0,l.useState)(!1),c={x:(0,l.useRef)(null),y:(0,l.useRef)(null),z:(0,l.useRef)(null)},u=e=>{for(let[t,r]of Object.entries(c)){if(!r.current){console.log(r);continue}r.current.updateInputs(e[t])}},d=e=>{if(!o.current)return;let t={radius:5,phi:Math.PI/2,theta:0};switch(e){case"front":t={radius:100,phi:0,theta:0};break;case"back":t={radius:100,phi:Math.PI,theta:0};break;case"left":t={radius:100,phi:Math.PI/2,theta:0};break;case"right":t={radius:100,phi:Math.PI/2,theta:Math.PI};break;case"top":t={radius:100,phi:Math.PI/2,theta:Math.PI/2};break;case"bottom":t={radius:100,phi:Math.PI/2,theta:3*Math.PI/2}}let r=function(e){let t=Math.max(0,e.phi),r=e.theta%(2*Math.PI);return[e.radius*Math.sin(t)*Math.cos(r),e.radius*Math.cos(t),e.radius*Math.sin(t)*Math.sin(r)]}(t);o.current.camera.position.set(r[0],r[1],r[2]),o.current.camera.lookAt(0,0,0),console.log("Attempting to set view direction to: ".concat(e)),console.log("Angle: ".concat(t)),o.current.camera.updateProjectionMatrix()};return(0,l.useEffect)(()=>{t&&(t.current={updateRotations:u,setColorPickerOpen:i,setViewDirection:d})},[]),(0,n.jsx)("div",{className:"flex flex-col flex-shrink-0 min-w-72 text-white",children:(0,n.jsx)("div",{className:"divide-y divide-[#444444] border-y border-[#444444]",children:(0,n.jsxs)("div",{className:"p-4 gap-y-4 flex flex-col",children:[(0,n.jsx)("p",{children:"Model Color:"}),(0,n.jsxs)("div",{className:"relative flex flex-row items-center",children:[(0,n.jsx)("button",{className:"w-14 h-6 rounded-sm",style:{backgroundColor:r.value},onClick:e=>{e.preventDefault(),i(e=>!e),e.stopPropagation()}}),(0,n.jsx)("input",{className:"text-white grow bg-transparent pl-5 outline-none overflow-ellipsis pointer-events-auto",type:"text",value:r.value}),s&&(0,n.jsx)("div",{className:"absolute top-0 left-0 w-0",onClick:e=>e.stopPropagation(),children:(0,n.jsx)(R.AI,{className:"-translate-x-[calc(100%+1rem)]",styles:{default:{picker:{backgroundColor:"#2c2c2c",fontFamily:"inherit"}}},color:r.value,onChange:(e,t)=>{r.set(e.hex)},disableAlpha:!0})})]})]})})})});var D=r(87138),z=e=>{let{projectFilename:t,modelLoaded:r,onFileSelect:a,exportQuery:o}=e,s=(0,l.useRef)(null);return(0,n.jsxs)("div",{className:"relative flex flex-row items-center justify-between bg-[#2c2c2c] h-12",children:[(0,n.jsx)(D.default,{className:"flex h-full items-center justify-center p-5",href:"/",children:(0,n.jsx)("img",{src:"logo.png",className:"w-[100px] shadow-none",alt:""})}),r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{className:"text-white text-center grow bg-transparent px-3 outline-none overflow-ellipsis",type:"text",spellCheck:!1,value:t.value,onFocus:e=>e.currentTarget.select(),onChange:e=>t.set(e.currentTarget.value),onBlur:e=>document.title=e.currentTarget.value}),(0,n.jsxs)("div",{className:"flex flex-row h-full",children:[(0,n.jsx)("button",{className:"flex h-full items-center justify-center p-5 bg-blue-900 text-white cursor-pointer",onClick:()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.click()},children:"Reupload"}),(0,n.jsx)("input",{className:"hidden",ref:s,type:"file",id:"file-reupload-input",accept:".stl",onChange:e=>{e.currentTarget.files&&a(e.currentTarget.files[0])}}),(0,n.jsx)(D.default,{href:{pathname:"/export",query:o},className:"flex h-full items-center justify-center p-5 bg-blue-700 text-white cursor-pointer",children:"Export"})]})]})]})};let A=()=>{var e;let[t,r]=(0,l.useState)(),[a,o]=(0,l.useState)(),[s,c]=(0,l.useState)(),[u,d]=(0,l.useState)("#8E2929"),[f,h]=(0,l.useState)(!1),m=(0,l.useRef)(null),p=(0,l.useRef)(null),x=(0,l.useRef)(null),g=(0,l.useRef)(null),b=(0,l.useRef)(null),{showModal:v}=k(),j=e=>{let t=URL.createObjectURL(e);o(t),c(t),localStorage.setItem("stlFileUrl",t),localStorage.setItem("stlFileName",e.name)},w=e=>{var t;let n="printerForm-".concat(e.name,".pdf");if(r(n),document.title=n,j(e),m.current&&p.current)for(let e of["x","y","z"])p.current.model.rotation[e]=0,m.current.model.rotation[e]=0;null===(t=b.current)||void 0===t||t.updateRotations(new i.Euler),h(!1)},y=(0,l.useMemo)(()=>({modelUrl:a,modelColor:u}),[a,u]);(0,l.useEffect)(()=>{let e=e=>{"R"===e.key.toUpperCase()&&h(e=>!e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);let[N,C]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=localStorage.getItem("returningToUpload"),t=localStorage.getItem("stlFileUrl"),n=localStorage.getItem("stlFileName");"true"===e&&t&&n&&(o(t),c(t),r("printerForm-".concat(n,".pdf")),document.title="printerForm-".concat(n,".pdf"),localStorage.removeItem("returningToUpload"),C(!0))},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I,{}),(0,n.jsxs)("div",{className:"flex flex-col h-screen w-full",onClick:()=>{var e;return null===(e=b.current)||void 0===e?void 0:e.setColorPickerOpen(!1)},children:[(0,n.jsx)(z,{modelLoaded:void 0!==a,projectFilename:{value:t,set:r},onFileSelect:w,exportQuery:y}),(0,n.jsxs)("div",{className:"bg-[#1E1E1E] flex w-full h-full flex-col justify-center",children:[!N&&!a&&(0,n.jsx)("div",{className:"m-12 h-full",children:(0,n.jsx)(F,{className:"flex w-full h-full items-center justify-center cursor-pointer rounded-lg border-dashed border-2 transition duration-200",dragActiveClassName:"bg-[#262626] border-blue-500",dragInactiveClassName:"bg-[#2c2c2c] border-gray-500",onFileSelect:w,children:(0,n.jsx)("p",{style:{color:"#D3D3D3"},children:"Drag/select STL model file here"})})}),(N||a)&&(0,n.jsxs)("div",{className:"relative flex grow flex-row w-full bg-[#2c2c2c]",children:[(0,n.jsx)("div",{className:"absolute bottom-4 left-4 z-30",children:(0,n.jsxs)("div",{className:"relative overflow-hidden border-gray-500 hover:border-blue-500 transition duration-100 rounded-xl border-2 w-80 h-48 shadow-xl",children:[(0,n.jsx)(M,{className:"absolute inset-0 bg-[#444444]",modelProps:{ref:p,color:u},cameraProps:{ref:g},shadows:!0,objectRespectsFloor:!1,url:s}),(0,n.jsxs)("p",{className:"absolute top-2 left-2",children:["PRINCIPAL VIEW ",(0,n.jsx)("span",{className:"text-blue-500 font-bold",children:"WIP"})]})]})}),(0,n.jsx)(F,{onFileSelect:e=>{v((0,n.jsx)(E,{title:"Model Reupload",bodyText:'Are you sure you would like to replace the current model with "'.concat(e.name,'"?'),onConfirm:()=>w(e)}))},className:"relative grow after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:transition after:duration-200 ",dragInactiveClassName:"after:shadow-[inset_0_0_20px_transparent]",dragActiveClassName:"after:shadow-[inset_0_0_20px_#006bff]",onlyAcceptDraggedFiles:!0,children:(0,n.jsx)(M,{className:"absolute inset-0 bg-[#1E1E1E] cursor-grab active:cursor-grabbing",modelProps:{ref:m,color:u},cameraProps:{ref:x},onOrbitChange:()=>{x.current&&g.current&&g.current.camera.copy(x.current.camera)},onRotationControlChange:null===(e=b.current)||void 0===e?void 0:e.updateRotations,shadows:!0,showAxisGizmo:!0,showGrid:!0,showRotationGizmo:f,objectRespectsFloor:!1,orbitControls:!0,url:a||""})}),(0,n.jsx)(T,{ref:b,modelColor:{value:u,set:d},modelRefs:[p,m],setViewDirection:e=>{var t;null===(t=b.current)||void 0===t||t.setViewDirection(e)},cameraRef:x})]})]})]})]})};var B=()=>(0,n.jsx)(S,{children:(0,n.jsx)(A,{})})}},function(e){e.O(0,[689,138,530,971,23,744],function(){return e(e.s=82908)}),_N_E=e.O()}]);