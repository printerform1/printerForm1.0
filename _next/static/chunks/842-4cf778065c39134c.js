"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{19155:function(r,e,t){t.d(e,{HT:function(){return X},iZ:function(){return Q}});var n={},a=Uint8Array,o=Uint16Array,i=Int32Array,f=new a([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),u=new a([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),l=new a([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(r,e){for(var t=new o(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var a=new i(t[30]),n=1;n<30;++n)for(var f=t[n];f<t[n+1];++f)a[f]=f-t[n]<<5|n;return{b:t,r:a}},c=s(f,2),v=c.b,h=c.r;v[28]=258,h[258]=28;for(var d=s(u,0),g=d.b,w=d.r,y=new o(32768),b=0;b<32768;++b){var p=(43690&b)>>1|(21845&b)<<1;p=(61680&(p=(52428&p)>>2|(13107&p)<<2))>>4|(3855&p)<<4,y[b]=((65280&p)>>8|(255&p)<<8)>>1}for(var m=function(r,e,t){for(var n,a=r.length,i=0,f=new o(e);i<a;++i)r[i]&&++f[r[i]-1];var u=new o(e);for(i=1;i<e;++i)u[i]=u[i-1]+f[i-1]<<1;if(t){n=new o(1<<e);var l=15-e;for(i=0;i<a;++i)if(r[i])for(var s=i<<4|r[i],c=e-r[i],v=u[r[i]-1]++<<c,h=v|(1<<c)-1;v<=h;++v)n[y[v]>>l]=s}else for(i=0,n=new o(a);i<a;++i)r[i]&&(n[i]=y[u[r[i]-1]++]>>15-r[i]);return n},x=new a(288),b=0;b<144;++b)x[b]=8;for(var b=144;b<256;++b)x[b]=9;for(var b=256;b<280;++b)x[b]=7;for(var b=280;b<288;++b)x[b]=8;for(var F=new a(32),b=0;b<32;++b)F[b]=5;var A=m(x,9,0),k=m(x,9,1),M=m(F,5,0),S=m(F,5,1),T=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},U=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(7&e)&t},E=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(7&e)},R=function(r){return(r+7)/8|0},B=function(r,e,t){return(null==e||e<0)&&(e=0),(null==t||t>r.length)&&(t=r.length),new a(r.subarray(e,t))},L=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(r,e,t){var n=Error(e||L[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,C),!t)throw n;return n},P=function(r,e,t,n){var o=r.length,i=n?n.length:0;if(!o||e.f&&!e.l)return t||new a(0);var s=!t,c=s||2!=e.i,h=e.i;s&&(t=new a(3*o));var d=function(r){var e=t.length;if(r>e){var n=new a(Math.max(2*e,r));n.set(t),t=n}},w=e.f||0,y=e.p||0,b=e.b||0,p=e.l,x=e.d,F=e.m,A=e.n,M=8*o;do{if(!p){w=U(r,y,1);var L=U(r,y+1,3);if(y+=3,L){if(1==L)p=k,x=S,F=9,A=5;else if(2==L){var P=U(r,y,31)+257,z=U(r,y+10,15)+4,D=P+U(r,y+5,31)+1;y+=14;for(var H=new a(D),q=new a(19),G=0;G<z;++G)q[l[G]]=U(r,y+3*G,7);y+=3*z;for(var _=T(q),N=(1<<_)-1,V=m(q,_,1),G=0;G<D;){var Z=V[U(r,y,N)];y+=15&Z;var j=Z>>4;if(j<16)H[G++]=j;else{var I=0,O=0;for(16==j?(O=3+U(r,y,3),y+=2,I=H[G-1]):17==j?(O=3+U(r,y,7),y+=3):18==j&&(O=11+U(r,y,127),y+=7);O--;)H[G++]=I}}var W=H.subarray(0,P),J=H.subarray(P);F=T(W),A=T(J),p=m(W,F,1),x=m(J,A,1)}else C(1)}else{var j=R(y)+4,K=r[j-4]|r[j-3]<<8,Q=j+K;if(Q>o){h&&C(0);break}c&&d(b+K),t.set(r.subarray(j,Q),b),e.b=b+=K,e.p=y=8*Q,e.f=w;continue}if(y>M){h&&C(0);break}}c&&d(b+131072);for(var X=(1<<F)-1,Y=(1<<A)-1,$=y;;$=y){var I=p[E(r,y)&X],rr=I>>4;if((y+=15&I)>M){h&&C(0);break}if(I||C(2),rr<256)t[b++]=rr;else if(256==rr){$=y,p=null;break}else{var re=rr-254;if(rr>264){var G=rr-257,rt=f[G];re=U(r,y,(1<<rt)-1)+v[G],y+=rt}var rn=x[E(r,y)&Y],ra=rn>>4;rn||C(3),y+=15&rn;var J=g[ra];if(ra>3){var rt=u[ra];J+=E(r,y)&(1<<rt)-1,y+=rt}if(y>M){h&&C(0);break}c&&d(b+131072);var ro=b+re;if(b<J){var ri=i-J,rf=Math.min(J,ro);for(ri+b<0&&C(3);b<rf;++b)t[b]=n[ri+b]}for(;b<ro;++b)t[b]=t[b-J]}}e.l=p,e.p=$,e.b=b,e.f=w,p&&(w=1,e.m=F,e.d=x,e.n=A)}while(!w);return b!=t.length&&s?B(t,0,b):t.subarray(0,b)},z=function(r,e,t){t<<=7&e;var n=e/8|0;r[n]|=t,r[n+1]|=t>>8},D=function(r,e,t){t<<=7&e;var n=e/8|0;r[n]|=t,r[n+1]|=t>>8,r[n+2]|=t>>16},H=function(r,e){for(var t=[],n=0;n<r.length;++n)r[n]&&t.push({s:n,f:r[n]});var i=t.length,f=t.slice();if(!i)return{t:j,l:0};if(1==i){var u=new a(t[0].s+1);return u[t[0].s]=1,{t:u,l:1}}t.sort(function(r,e){return r.f-e.f}),t.push({s:-1,f:25001});var l=t[0],s=t[1],c=0,v=1,h=2;for(t[0]={s:-1,f:l.f+s.f,l:l,r:s};v!=i-1;)l=t[t[c].f<t[h].f?c++:h++],s=t[c!=v&&t[c].f<t[h].f?c++:h++],t[v++]={s:-1,f:l.f+s.f,l:l,r:s};for(var d=f[0].s,n=1;n<i;++n)f[n].s>d&&(d=f[n].s);var g=new o(d+1),w=q(t[v-1],g,0);if(w>e){var n=0,y=0,b=w-e,p=1<<b;for(f.sort(function(r,e){return g[e.s]-g[r.s]||r.f-e.f});n<i;++n){var m=f[n].s;if(g[m]>e)y+=p-(1<<w-g[m]),g[m]=e;else break}for(y>>=b;y>0;){var x=f[n].s;g[x]<e?y-=1<<e-g[x]++-1:++n}for(;n>=0&&y;--n){var F=f[n].s;g[F]==e&&(--g[F],++y)}w=e}return{t:new a(g),l:w}},q=function(r,e,t){return -1==r.s?Math.max(q(r.l,e,t+1),q(r.r,e,t+1)):e[r.s]=t},G=function(r){for(var e=r.length;e&&!r[--e];);for(var t=new o(++e),n=0,a=r[0],i=1,f=function(r){t[n++]=r},u=1;u<=e;++u)if(r[u]==a&&u!=e)++i;else{if(!a&&i>2){for(;i>138;i-=138)f(32754);i>2&&(f(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(f(a),--i;i>6;i-=6)f(8304);i>2&&(f(i-3<<5|8208),i=0)}for(;i--;)f(a);i=1,a=r[u]}return{c:t.subarray(0,n),n:e}},_=function(r,e){for(var t=0,n=0;n<e.length;++n)t+=r[n]*e[n];return t},N=function(r,e,t){var n=t.length,a=R(e+2);r[a]=255&n,r[a+1]=n>>8,r[a+2]=255^r[a],r[a+3]=255^r[a+1];for(var o=0;o<n;++o)r[a+o+4]=t[o];return(a+4+n)*8},V=function(r,e,t,n,a,i,s,c,v,h,d){z(e,d++,t),++a[256];for(var g,w,y,b,p=H(a,15),k=p.t,S=p.l,T=H(i,15),U=T.t,E=T.l,R=G(k),B=R.c,L=R.n,C=G(U),P=C.c,q=C.n,V=new o(19),Z=0;Z<B.length;++Z)++V[31&B[Z]];for(var Z=0;Z<P.length;++Z)++V[31&P[Z]];for(var j=H(V,7),I=j.t,O=j.l,W=19;W>4&&!I[l[W-1]];--W);var J=h+5<<3,K=_(a,x)+_(i,F)+s,Q=_(a,k)+_(i,U)+s+14+3*W+_(V,I)+2*V[16]+3*V[17]+7*V[18];if(v>=0&&J<=K&&J<=Q)return N(e,d,r.subarray(v,v+h));if(z(e,d,1+(Q<K)),d+=2,Q<K){g=m(k,S,0),w=k,y=m(U,E,0),b=U;var X=m(I,O,0);z(e,d,L-257),z(e,d+5,q-1),z(e,d+10,W-4),d+=14;for(var Z=0;Z<W;++Z)z(e,d+3*Z,I[l[Z]]);d+=3*W;for(var Y=[B,P],$=0;$<2;++$)for(var rr=Y[$],Z=0;Z<rr.length;++Z){var re=31&rr[Z];z(e,d,X[re]),d+=I[re],re>15&&(z(e,d,rr[Z]>>5&127),d+=rr[Z]>>12)}}else g=A,w=x,y=M,b=F;for(var Z=0;Z<c;++Z){var rt=n[Z];if(rt>255){var re=rt>>18&31;D(e,d,g[re+257]),d+=w[re+257],re>7&&(z(e,d,rt>>23&31),d+=f[re]);var rn=31&rt;D(e,d,y[rn]),d+=b[rn],rn>3&&(D(e,d,rt>>5&8191),d+=u[rn])}else D(e,d,g[rt]),d+=w[rt]}return D(e,d,g[256]),d+w[256]},Z=new i([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),j=new a(0),I=function(r,e,t,n,l,s){var c=s.z||r.length,v=new a(n+c+5*(1+Math.ceil(c/7e3))+l),d=v.subarray(n,v.length-l),g=s.l,y=7&(s.r||0);if(e){y&&(d[0]=s.r>>3);for(var b=Z[e-1],p=b>>13,m=8191&b,x=(1<<t)-1,F=s.p||new o(32768),A=s.h||new o(x+1),k=Math.ceil(t/3),M=2*k,S=function(e){return(r[e]^r[e+1]<<k^r[e+2]<<M)&x},T=new i(25e3),U=new o(288),E=new o(32),L=0,C=0,P=s.i||0,z=0,D=s.w||0,H=0;P+2<c;++P){var q=S(P),G=32767&P,_=A[q];if(F[G]=_,A[q]=G,D<=P){var j=c-P;if((L>7e3||z>24576)&&(j>423||!g)){y=V(r,d,0,T,U,E,C,z,H,P-H,y),z=L=C=0,H=P;for(var I=0;I<286;++I)U[I]=0;for(var I=0;I<30;++I)E[I]=0}var O=2,W=0,J=m,K=G-_&32767;if(j>2&&q==S(P-K))for(var Q=Math.min(p,j)-1,X=Math.min(32767,P),Y=Math.min(258,j);K<=X&&--J&&G!=_;){if(r[P+O]==r[P+O-K]){for(var $=0;$<Y&&r[P+$]==r[P+$-K];++$);if($>O){if(O=$,W=K,$>Q)break;for(var rr=Math.min(K,$-2),re=0,I=0;I<rr;++I){var rt=P-K+I&32767,rn=F[rt],ra=rt-rn&32767;ra>re&&(re=ra,_=rt)}}}_=F[G=_],K+=G-_&32767}if(W){T[z++]=268435456|h[O]<<18|w[W];var ro=31&h[O],ri=31&w[W];C+=f[ro]+u[ri],++U[257+ro],++E[ri],D=P+O,++L}else T[z++]=r[P],++U[r[P]]}}for(P=Math.max(P,D);P<c;++P)T[z++]=r[P],++U[r[P]];y=V(r,d,g,T,U,E,C,z,H,P-H,y),g||(s.r=7&y|d[y/8|0]<<3,y-=7,s.h=A,s.p=F,s.i=P,s.w=D)}else{for(var P=s.w||0;P<c+g;P+=65535){var rf=P+65535;rf>=c&&(d[y/8|0]=g,rf=c),y=N(d,y+1,r.subarray(P,rf))}s.i=c}return B(v,0,n+R(y)+l)},O=function(){var r=1,e=0;return{p:function(t){for(var n=r,a=e,o=0|t.length,i=0;i!=o;){for(var f=Math.min(i+2655,o);i<f;++i)a+=n+=t[i];n=(65535&n)+15*(n>>16),a=(65535&a)+15*(a>>16)}r=n,e=a},d:function(){return r%=65521,e%=65521,(255&r)<<24|(65280&r)<<8|(255&e)<<8|e>>8}}},W=function(r,e,t,n,o){if(!o&&(o={l:1},e.dictionary)){var i=e.dictionary.subarray(-32768),f=new a(i.length+r.length);f.set(i),f.set(r,i.length),r=f,o.w=i.length}return I(r,null==e.level?6:e.level,null==e.mem?o.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(r.length)))):20:12+e.mem,t,n,o)},J=function(r,e,t){for(;t;++e)r[e]=t,t>>>=8},K=function(r,e){var t=e.level;if(r[0]=120,r[1]=(0==t?0:t<6?1:9==t?3:2)<<6|(e.dictionary&&32),r[1]|=31-(r[0]<<8|r[1])%31,e.dictionary){var n=O();n.p(e.dictionary),J(r,2,n.d())}};function Q(r,e){e||(e={});var t=O();t.p(r);var n=W(r,e,e.dictionary?6:2,4);return K(n,e),J(n,n.length-4,t.d()),n}function X(r,e){var t;return P(r.subarray((t=e&&e.dictionary,((15&r[0])!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&C(6,"invalid zlib data"),(r[1]>>5&1)==+!t&&C(6,"invalid zlib data: "+(32&r[1]?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2),-4),{i:2},e&&e.out,e&&e.dictionary)}var Y="undefined"!=typeof TextDecoder&&new TextDecoder;try{Y.decode(j,{stream:!0})}catch(r){}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout},16463:function(r,e,t){var n=t(71169);t.o(n,"usePathname")&&t.d(e,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(e,{useRouter:function(){return n.useRouter}}),t.o(n,"useSearchParams")&&t.d(e,{useSearchParams:function(){return n.useSearchParams}})},8620:function(r,e,t){t.d(e,{Z:function(){return n}});function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}},77413:function(r,e,t){t.d(e,{j:function(){return a}});var n=t(97776);class a extends n.Loader{constructor(r){super(r)}load(r,e,t,a){let o=this,i=new n.FileLoader(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(r,function(t){try{e(o.parse(t))}catch(e){a?a(e):console.error(e),o.manager.itemError(r)}},t,a)}parse(r){let e=function(r){if("string"!=typeof r)return r;{let e=new Uint8Array(r.length);for(let t=0;t<r.length;t++)e[t]=255&r.charCodeAt(t);return e.buffer||e}}(r);return!function(r){let e=new DataView(r);if(84+50*e.getUint32(80,!0)===e.byteLength)return!0;let t=[115,111,108,105,100];for(let r=0;r<5;r++)if(function(r,e,t){for(let n=0,a=r.length;n<a;n++)if(r[n]!==e.getUint8(t+n))return!1;return!0}(t,e,r))return!1;return!0}(e)?function(r){let e;let t=new n.BufferGeometry,a=/solid([\s\S]*?)endsolid/g,o=/facet([\s\S]*?)endfacet/g,i=/solid\s(.+)/,f=0,u=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,l=RegExp("vertex"+u+u+u,"g"),s=RegExp("normal"+u+u+u,"g"),c=[],v=[],h=[],d=new n.Vector3,g=0,w=0,y=0;for(;null!==(e=a.exec(r));){w=y;let r=e[0],n=null!==(e=i.exec(r))?e[1]:"";for(h.push(n);null!==(e=o.exec(r));){let r=0,t=0,n=e[0];for(;null!==(e=s.exec(n));)d.x=parseFloat(e[1]),d.y=parseFloat(e[2]),d.z=parseFloat(e[3]),t++;for(;null!==(e=l.exec(n));)c.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])),v.push(d.x,d.y,d.z),r++,y++;1!==t&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+f),3!==r&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+f),f++}let a=w,u=y-w;t.userData.groupNames=h,t.addGroup(a,u,g),g++}return t.setAttribute("position",new n.Float32BufferAttribute(c,3)),t.setAttribute("normal",new n.Float32BufferAttribute(v,3)),t}("string"!=typeof r?new TextDecoder().decode(r):r):function(r){let e,t,a,o;let i=new DataView(r),f=i.getUint32(80,!0),u,l,s,c=!1,v;for(let r=0;r<70;r++)1129270351==i.getUint32(r,!1)&&82==i.getUint8(r+4)&&61==i.getUint8(r+5)&&(c=!0,v=new Float32Array(9*f),e=i.getUint8(r+6)/255,t=i.getUint8(r+7)/255,a=i.getUint8(r+8)/255,o=i.getUint8(r+9)/255);let h=new n.BufferGeometry,d=new Float32Array(9*f),g=new Float32Array(9*f),w=new n.Color;for(let r=0;r<f;r++){let n=84+50*r,o=i.getFloat32(n,!0),f=i.getFloat32(n+4,!0),h=i.getFloat32(n+8,!0);if(c){let r=i.getUint16(n+48,!0);(32768&r)==0?(u=(31&r)/31,l=(r>>5&31)/31,s=(r>>10&31)/31):(u=e,l=t,s=a)}for(let e=1;e<=3;e++){let t=n+12*e,a=9*r+(e-1)*3;d[a]=i.getFloat32(t,!0),d[a+1]=i.getFloat32(t+4,!0),d[a+2]=i.getFloat32(t+8,!0),g[a]=o,g[a+1]=f,g[a+2]=h,c&&(w.set(u,l,s).convertSRGBToLinear(),v[a]=w.r,v[a+1]=w.g,v[a+2]=w.b)}}return h.setAttribute("position",new n.BufferAttribute(d,3)),h.setAttribute("normal",new n.BufferAttribute(g,3)),c&&(h.setAttribute("color",new n.BufferAttribute(v,3)),h.hasColors=!0,h.alpha=o),h}(e)}}}}]);