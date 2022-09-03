import{R as ne,j as I,r as x}from"./jsx-runtime.15518f79.js";import{R as ee}from"./index.cdba1897.js";function xe(t,s){if(t==null)return{};var l={},i=Object.keys(t),n,e;for(e=0;e<i.length;e++)n=i[e],!(s.indexOf(n)>=0)&&(l[n]=t[n]);return l}function oe(t,s){return oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},oe(t,s)}function he(t,s){t.prototype=Object.create(s.prototype),t.prototype.constructor=t,oe(t,s)}const de={disabled:!1},pe=ne.createContext(null);var ye=function(s){return s.scrollTop},Q="unmounted",W="exited",G="entering",B="entered",se="exiting",U=function(t){he(s,t);function s(i,n){var e;e=t.call(this,i,n)||this;var a=n,d=a&&!a.isMounting?i.enter:i.appear,c;return e.appearStatus=null,i.in?d?(c=W,e.appearStatus=G):c=B:i.unmountOnExit||i.mountOnEnter?c=Q:c=W,e.state={status:c},e.nextCallback=null,e}s.getDerivedStateFromProps=function(n,e){var a=n.in;return a&&e.status===Q?{status:W}:null};var l=s.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(n){var e=null;if(n!==this.props){var a=this.state.status;this.props.in?a!==G&&a!==B&&(e=G):(a===G||a===B)&&(e=se)}this.updateStatus(!1,e)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var n=this.props.timeout,e,a,d;return e=a=d=n,n!=null&&typeof n!="number"&&(e=n.exit,a=n.enter,d=n.appear!==void 0?n.appear:a),{exit:e,enter:a,appear:d}},l.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===G){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:ee.findDOMNode(this);a&&ye(a)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===W&&this.setState({status:Q})},l.performEnter=function(n){var e=this,a=this.props.enter,d=this.context?this.context.isMounting:n,c=this.props.nodeRef?[d]:[ee.findDOMNode(this),d],g=c[0],m=c[1],j=this.getTimeouts(),S=d?j.appear:j.enter;if(!n&&!a||de.disabled){this.safeSetState({status:B},function(){e.props.onEntered(g)});return}this.props.onEnter(g,m),this.safeSetState({status:G},function(){e.props.onEntering(g,m),e.onTransitionEnd(S,function(){e.safeSetState({status:B},function(){e.props.onEntered(g,m)})})})},l.performExit=function(){var n=this,e=this.props.exit,a=this.getTimeouts(),d=this.props.nodeRef?void 0:ee.findDOMNode(this);if(!e||de.disabled){this.safeSetState({status:W},function(){n.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:se},function(){n.props.onExiting(d),n.onTransitionEnd(a.exit,function(){n.safeSetState({status:W},function(){n.props.onExited(d)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},l.setNextCallback=function(n){var e=this,a=!0;return this.nextCallback=function(d){a&&(a=!1,e.nextCallback=null,n(d))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},l.onTransitionEnd=function(n,e){this.setNextCallback(e);var a=this.props.nodeRef?this.props.nodeRef.current:ee.findDOMNode(this),d=n==null&&!this.props.addEndListener;if(!a||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],g=c[0],m=c[1];this.props.addEndListener(g,m)}n!=null&&setTimeout(this.nextCallback,n)},l.render=function(){var n=this.state.status;if(n===Q)return null;var e=this.props,a=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var d=xe(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return I(pe.Provider,{value:null,children:typeof a=="function"?a(n,d):ne.cloneElement(ne.Children.only(a),d)})},s}(ne.Component);U.contextType=pe;U.propTypes={};function V(){}U.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:V,onEntering:V,onEntered:V,onExit:V,onExiting:V,onExited:V};U.UNMOUNTED=Q;U.EXITED=W;U.ENTERING=G;U.ENTERED=B;U.EXITING=se;const q=U;function K(t,s){var l={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&s.indexOf(i)<0&&(l[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)s.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(l[i[n]]=t[i[n]])}return l}const ae={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},X={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function P(t,s){var l,i;const{timeout:n,easing:e,style:a={}}=t;return{duration:(l=a.transitionDuration)!==null&&l!==void 0?l:typeof n=="number"||typeof n=="string"?n:n[s.mode]||0,easing:(i=a.transitionTimingFunction)!==null&&i!==void 0?i:typeof e=="object"?e[s.mode]:e,delay:a.transitionDelay}}const O=(t=["all"],s={})=>{const{duration:l=X.standard,easing:i=ae.easeInOut,delay:n=0}=s,e=a=>`${Math.round(a)}ms`;return(Array.isArray(t)?t:[t]).map(a=>`${a} ${typeof l=="string"?l:e(l)} ${i} ${typeof n=="string"?n:e(n)}`).join(",")},ie=t=>{if(!t)return 0;const s=t/36;return Math.round(10*(4+15*Math.pow(s,.25)+s/5))},ce=(t,s)=>{typeof t=="function"?t(s):t&&(t.current=s)},_=(t,s)=>x.exports.useMemo(()=>t==null&&s==null?null:l=>{ce(t,l),ce(s,l)},[t,s]),me=(t,s=166)=>{let l;function i(...n){clearTimeout(l),l=setTimeout(()=>{t.apply(this,n)},s)}return i.clear=()=>{clearTimeout(l)},i};function fe(t){return function(l){return l&&l.ownerDocument||document}(t).defaultView||window}const re=t=>!isNaN(parseFloat(t)),J=t=>t.scrollTop,be={entering:{opacity:1},entered:{opacity:1}},Ne=x.exports.forwardRef((t,s)=>{const l={enter:X.enteringScreen,exit:X.leavingScreen},{addEndListener:i,appear:n=!0,children:e,easing:a,in:d,onEnter:c,onEntered:g,onEntering:m,onExit:j,onExited:S,onExiting:T,style:h,timeout:v=l}=t,k=K(t,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),y=x.exports.useRef(null),w=_(e.ref,s),N=_(y,w),p=u=>r=>{const o=y.current;u&&o&&(r===void 0?u(o):u(o,r))},b=p(m),M=p(g),R=p(T),L=p(S),$=p((u,r)=>{J(u);const o=P({style:h,timeout:v,easing:a},{mode:"enter"});u.style.webkitTransition=O("opacity",o),u.style.transition=O("opacity",o),c==null||c(u,r)}),D=p(u=>{const r=P({style:h,timeout:v,easing:a},{mode:"exit"});u.style.webkitTransition=O("opacity",r),u.style.transition=O("opacity",r),j==null||j(u)});return I(q,Object.assign({in:d,appear:n,nodeRef:y,onExit:D,onEnter:$,addEndListener:u=>{y.current&&(i==null||i(y.current,u))},onEntering:b,onEntered:M,onExiting:R,onExited:L,timeout:v},k,{children:u=>x.exports.cloneElement(e,{ref:N,style:Object.assign(Object.assign(Object.assign({opacity:0,visibility:u!=="exited"||d?void 0:"hidden"},be[u]),h),e.props.style)})}))}),ve=t=>({entering:{opacity:1,filter:"blur(0)"},entered:{opacity:1,filter:"blur(0)"},exiting:{opacity:0,filter:`blur(${t}px)`},exited:{opacity:0,filter:`blur(${t}px)`}}),Le=x.exports.forwardRef((t,s)=>{const l={enter:X.enteringScreen,exit:X.leavingScreen},{addEndListener:i,appear:n=!0,children:e,easing:a,in:d,radius:c=25,onEnter:g,onEntered:m,onEntering:j,onExit:S,onExited:T,onExiting:h,style:v,timeout:k=l}=t,y=K(t,["addEndListener","appear","children","easing","in","radius","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),w=x.exports.useRef(null),N=_(e.ref,s),p=_(w,N),b=r=>o=>{const f=w.current;r&&f&&(o===void 0?r(f):r(f,o))},M=b(j),R=b(m),L=b(h),$=b(T),D=b((r,o)=>{J(r);const f=P({style:v,timeout:k,easing:a},{mode:"enter"});r.style.webkitTransition=O(["opacity","filter"],f),r.style.transition=O(["opacity","filter"],f),g==null||g(r,o)}),u=b(r=>{const o=P({style:v,timeout:k,easing:a},{mode:"exit"});r.style.webkitTransition=O(["opacity","filter"],o),r.style.transition=O(["opacity","filter"],o),S==null||S(r)});return I(q,Object.assign({in:d,appear:n,nodeRef:w,onExit:u,onEnter:D,addEndListener:r=>{w.current&&(i==null||i(w.current,r))},onEntering:M,onEntered:R,onExiting:L,onExited:$,timeout:k},y,{children:r=>x.exports.cloneElement(e,{ref:p,style:Object.assign(Object.assign(Object.assign({opacity:0,visibility:r!=="exited"||d?void 0:"hidden"},ve(c)[r]),v),e.props.style)})}))}),Oe=x.exports.forwardRef(({children:t,ownerState:s,style:l={}},i)=>I("div",Object.assign({ref:i,style:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},l),{height:0,overflow:"hidden",transition:O("height")}),s.orientation==="horizontal"&&{height:"auto",width:0,transition:O("width")}),s.state==="entered"&&Object.assign({height:"auto",overflow:"visible"},s.orientation==="horizontal"&&{width:"auto"})),s.state==="exited"&&!s.in&&s.collapsedSize==="0px"&&{visibility:"hidden"})},{children:t}))),je=x.exports.forwardRef(({children:t,ownerState:s,style:l},i)=>I("div",Object.assign({ref:i,style:Object.assign({display:"flex",width:"100%"},s.orientation==="horizontal"&&{width:"auto",height:"100%"})},{children:t}))),we=({children:t,ownerState:s})=>I("div",Object.assign({style:Object.assign({width:"100%"},s.orientation==="horizontal"&&{width:"auto",height:"100%"})},{children:t})),$e=x.exports.forwardRef((t,s)=>{const{addEndListener:l,children:i,className:n,collapsedSize:e="0px",component:a,easing:d,in:c,onEnter:g,onEntered:m,onEntering:j,onExit:S,onExited:T,onExiting:h,orientation:v="vertical",style:k,timeout:y=X.standard}=t,w=K(t,["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout"]),N=Object.assign(Object.assign({},t),{orientation:v,collapsedSize:e}),p=x.exports.useRef(),b=x.exports.useRef(null),M=_(b,s),R=x.exports.useRef(null),L=x.exports.useRef(),$=typeof e=="number"?`${e}px`:e,D=v==="horizontal",u=D?"width":"height";x.exports.useEffect(()=>()=>{clearTimeout(p.current)},[]);const r=E=>H=>{const A=b.current;E&&A&&(H===void 0?E(A):E(A,H))},o=()=>R.current?R.current[D?"scrollWidth":"scrollHeight"]:0,f=r((E,H)=>{E.style[u]=$,g==null||g(E,H)}),C=r((E,H)=>{const A=o(),{duration:Y,easing:Z}=P({style:k,timeout:y,easing:d},{mode:"enter"});if(y==="auto"){const ue=ie(A);E.style.transitionDuration=`${ue}ms`,L.current=ue}else E.style.transitionDuration=typeof Y=="string"?Y:`${Y}ms`;E.style[u]=`${A}px`,E.style.transitionTimingFunction=`${Z}`,j==null||j(E,H)}),z=r((E,H)=>{E.style[u]="auto",m==null||m(E,H)}),F=r(E=>{E.style[u]=`${o()}px`,R.current&&J(R.current),S==null||S(E)}),Ee=r(E=>{const H=o(),{duration:A,easing:Y}=P({style:k,timeout:y,easing:d},{mode:"exit"});if(y==="auto"){const Z=ie(H);E.style.transitionDuration=`${Z}ms`,L.current=Z}else E.style.transitionDuration=typeof A=="string"?A:`${A}ms`;E.style[u]=$,E.style.transitionTimingFunction=Y!=null?Y:"",h==null||h(E)}),ge=r(T);return I(q,Object.assign({in:c,nodeRef:b,onEnter:f,onEntered:z,onEntering:C,onExit:F,onExited:ge,onExiting:Ee,addEndListener:E=>{y==="auto"&&(p.current=setTimeout(E,Number(L.current)||0)),b.current&&(l==null||l(b.current,E))},timeout:y==="auto"?void 0:y},w,{children:E=>I(Oe,Object.assign({ref:M,ownerState:Object.assign(Object.assign({},N),{state:E}),style:Object.assign({[D?"minWidth":"minHeight"]:$},k)},{children:I(je,Object.assign({ownerState:Object.assign(Object.assign({},N),{state:E}),ref:R},{children:I(we,Object.assign({ownerState:Object.assign(Object.assign({},N),{state:E})},{children:i}))}))}))}))});function te(t,s,l){var i;const n=function(e,a,d){const c=a.getBoundingClientRect(),g=d==null?void 0:d.getBoundingClientRect(),m=fe(a),j=m.getComputedStyle(a),S=j.getPropertyValue("-webkit-transform")||j.getPropertyValue("transform");let T=0,h=0;if(S&&S!=="none"&&typeof S=="string"){const v=S.split("(")[1].split(")")[0].split(",");T=parseInt(v[4],10),h=parseInt(v[5],10)}return e==="left"?g?`translateX(${g.right+T-c.left}px)`:`translateX(${m.innerWidth+T-c.left}px)`:e==="right"?g?`translateX(-${c.right-g.left-T}px)`:`translateX(-${c.left+c.width-T}px)`:e==="up"?g?`translateY(${g.bottom+h-c.top}px)`:`translateY(${m.innerHeight+h-c.top}px)`:g?`translateY(-${c.top-g.top+c.height-h}px)`:`translateY(-${c.top+c.height-h}px)`}(t,s,typeof(i=l)=="function"?i():i);n&&(s.style.webkitTransform=n,s.style.transform=n)}const De=x.exports.forwardRef((t,s)=>{const l={enter:ae.easeOut,exit:ae.sharp},i={enter:X.enteringScreen,exit:X.leavingScreen},{addEndListener:n,appear:e=!0,children:a,container:d,direction:c="down",easing:g=l,in:m,onEnter:j,onEntered:S,onEntering:T,onExit:h,onExited:v,onExiting:k,style:y,timeout:w=i}=t,N=K(t,["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),p=x.exports.useRef(void 0),b=_(a.ref,p),M=_(b,s),R=o=>f=>{const C=p.current;o&&C&&(f===void 0?o(C):o(C,f))},L=R((o,f)=>{te(c,o,d),J(o),j==null||j(o,f)}),$=R((o,f)=>{const C=P({timeout:w,style:y,easing:g},{mode:"enter"});o.style.webkitTransition=O("-webkit-transform",C),o.style.transition=O("transform",C),o.style.webkitTransform="none",o.style.transform="none",T==null||T(o,f)}),D=R(o=>{const f=P({timeout:w,style:y,easing:g},{mode:"exit"});o.style.webkitTransition=O("-webkit-transform",f),o.style.transition=O("transform",f),te(c,o,d),h==null||h(o)}),u=R(o=>{o.style.webkitTransition="",o.style.transition="",v==null||v(o)}),r=x.exports.useCallback(()=>{p.current&&te(c,p.current,d)},[c,d]);return x.exports.useEffect(()=>{if(m||c==="down"||c==="right")return;const o=me(()=>{p.current&&te(c,p.current,d)}),f=fe(p.current);return f.addEventListener("resize",o),()=>{o.clear(),f.removeEventListener("resize",o)}},[c,m,d]),x.exports.useEffect(()=>{m||r()},[m,r]),I(q,Object.assign({in:m,appear:e,nodeRef:p,timeout:w,onEnter:L,onEntered:S,onEntering:$,onExit:D,onExited:u,onExiting:k,addEndListener:o=>{p.current&&(n==null||n(p.current,o))}},N,{children:o=>x.exports.cloneElement(a,{ref:M,style:Object.assign(Object.assign({visibility:o!=="exited"||m?void 0:"hidden"},y),a.props.style)})}))}),Se={entering:{transform:"none"},entered:{transform:"none"}},Ce=x.exports.forwardRef((t,s)=>{const l={enter:X.enteringScreen,exit:X.leavingScreen},{addEndListener:i,appear:n=!0,children:e,easing:a,in:d,onEnter:c,onEntered:g,onEntering:m,onExit:j,onExited:S,onExiting:T,style:h,timeout:v=l}=t,k=K(t,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),y=x.exports.useRef(null),w=_(e.ref,s),N=_(y,w),p=u=>r=>{const o=y.current;u&&o&&(r===void 0?u(o):u(o,r))},b=p(g),M=p(m),R=p(S),L=p(T),$=p((u,r)=>{J(u);const o=P({style:h,timeout:v,easing:a},{mode:"enter"});u.style.webkitTransition=O("transform",o),u.style.transition=O("transform",o),c==null||c(u,r)}),D=p(u=>{const r=P({style:h,timeout:v,easing:a},{mode:"exit"});u.style.webkitTransition=O("transform",r),u.style.transition=O("transform",r),j==null||j(u)});return I(q,Object.assign({in:d,appear:n,nodeRef:y,onEnter:$,onEntered:b,onEntering:M,onExit:D,onExited:R,onExiting:L,addEndListener:u=>{y.current&&(i==null||i(y.current,u))},timeout:v},k,{children:u=>x.exports.cloneElement(e,{ref:N,style:Object.assign(Object.assign(Object.assign({transform:"scale(0)",visibility:u!=="exited"||d?void 0:"hidden"},Se[u]),h),e.props.style)})}))}),le=t=>`scale(${t}, ${Math.pow(t,2)})`,Te={entering:{opacity:1,transform:le(1)},entered:{opacity:1,transform:"none"}};typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent);const ze=x.exports.forwardRef((t,s)=>{const{addEndListener:l,appear:i=!0,children:n,easing:e,in:a,onEnter:d,onEntered:c,onEntering:g,onExit:m,onExited:j,onExiting:S,style:T,timeout:h="auto"}=t,v=K(t,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),k=x.exports.useRef(),y=x.exports.useRef(),w=x.exports.useRef(null),N=_(n.ref,s),p=_(w,N),b=r=>o=>{const f=w.current;r&&f&&(o===void 0?r(f):r(f,o))},M=b(c),R=b(g),L=b(j),$=b(S),D=b((r,o)=>{J(r);const{duration:f,delay:C,easing:z}=P({style:T,timeout:h,easing:e},{mode:"enter"});let F;h==="auto"?(F=ie(r.clientHeight),y.current=F):F=f,r.style.transition=[O("opacity",{duration:F,delay:C}),O("transform",{duration:re(F)?.666*F:F,delay:C,easing:z})].join(","),d==null||d(r,o)}),u=b(r=>{const{duration:o,delay:f,easing:C}=P({style:T,timeout:h,easing:e},{mode:"exit"});let z;h==="auto"?(z=ie(r.clientHeight),y.current=z):z=o,r.style.transition=[O("opacity",{duration:z,delay:f}),O("transform",{duration:re(z)?.666*z:z,delay:re(z)?f||.333*z:f,easing:C})].join(","),r.style.opacity="0",r.style.transform=le(.75),m==null||m(r)});return x.exports.useEffect(()=>()=>{clearTimeout(k.current)},[]),I(q,Object.assign({in:a,appear:i,nodeRef:w,onEnter:D,onEntered:M,onEntering:R,onExit:u,onExited:L,onExiting:$,addEndListener:r=>{h==="auto"&&(k.current=setTimeout(r,y.current||0)),w.current&&(l==null||l(w.current,r))},timeout:h==="auto"?void 0:h},v,{children:r=>x.exports.cloneElement(n,{ref:p,style:Object.assign(Object.assign(Object.assign({opacity:0,transform:le(.75),visibility:r!=="exited"||a?void 0:"hidden"},Te[r]),T),n.props.style)})}))});export{ze as H,Ne as O,Ce as R,$e as T,Le as v,De as z};
//# sourceMappingURL=index.esm.5848a576.js.map