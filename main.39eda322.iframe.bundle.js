(self.webpackChunktransitions_kit=self.webpackChunktransitions_kit||[]).push([[179],{"./.storybook/preview.js":()=>{},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),_home_runner_work_transitions_kit_transitions_kit_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./.storybook/preview.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(_home_runner_work_transitions_kit_transitions_kit_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__).forEach((function(key){var value=_home_runner_work_transitions_kit_transitions_kit_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__[key];switch(key){case"args":return(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.uc)(value);case"argTypes":return(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.HZ)(loader,!1)}));case"parameters":return(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__._C)(enhancer)}));case"render":return(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,_home_runner_work_transitions_kit_transitions_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/blur/blur.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>blur_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var react=__webpack_require__("./node_modules/react/index.js"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),utils=__webpack_require__("./src/utils/index.ts"),getCSS=function getCSS(radius){return{entering:{opacity:1,filter:"blur(0)"},entered:{opacity:1,filter:"blur(0)"},exiting:{opacity:0,filter:"blur("+radius+"px)"},exited:{opacity:0,filter:"blur("+radius+"px)"}}},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["addEndListener","appear","children","easing","in","radius","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Blur=(0,react.forwardRef)((function(props,ref){var addEndListener=props.addEndListener,_props$appear=props.appear,appear=void 0===_props$appear||_props$appear,_children=props.children,inProp=(props.easing,props.in),_props$radius=props.radius,radius=void 0===_props$radius?25:_props$radius,onEnter=props.onEnter,onEntered=props.onEntered,onEntering=props.onEntering,onExit=props.onExit,onExited=props.onExited,onExiting=props.onExiting,style=props.style,timeout=props.timeout,other=_objectWithoutProperties(props,_excluded),handleRef=(0,utils.cR)(_children.ref,ref);return(0,jsx_runtime.jsx)(Transition.ZP,Object.assign({in:inProp,appear,onExit:function handleExit(node){node.style.webkitTransition=(0,utils.vQ)(["opacity","filter"],{duration:timeout}),node.style.transition=(0,utils.vQ)(["opacity","filter"],{duration:timeout}),null==onExit||onExit(node)},onEnter:function handleEnter(node,isAppearing){(0,utils.nq)(node),node.style.webkitTransition=(0,utils.vQ)(["opacity","filter"],{duration:timeout}),node.style.transition=(0,utils.vQ)(["opacity","filter"],{duration:timeout}),null==onEnter||onEnter(node,isAppearing)},addEndListener:function handleAddEnd(node,next){null==addEndListener||addEndListener(node,next)},onEntering,onEntered,onExiting,onExited,timeout},other,{children:function children(state){return(0,react.cloneElement)(_children,{ref:handleRef,style:Object.assign({opacity:0,visibility:"exited"!==state||inProp?void 0:"hidden"},getCSS(radius)[state],style,_children.props.style)})}}))}));try{Blur.displayName="Blur",Blur.__docgenInfo={description:"",displayName:"Blur",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"Element & { ref?: Ref<unknown> | undefined; }"}},easing:{defaultValue:null,description:"The transition timing function.\nYou may specify a single easing or a object containing enter and exit values.",name:"easing",required:!1,type:{name:"any"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},timeout:{defaultValue:null,description:"The duration for the transition, in milliseconds.",name:"timeout",required:!1,type:{name:"number"}},radius:{defaultValue:{value:"25"},description:"The size if filter radius.",name:"radius",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/blur/blur.tsx#Blur"]={docgenInfo:Blur.__docgenInfo,name:"Blur",path:"src/blur/blur.tsx#Blur"})}catch(__react_docgen_typescript_loader_error){}const thumbnail_namespaceObject=__webpack_require__.p+"static/media/thumbnail.ebf086b4.jpeg",blur_stories={component:Blur,title:"Transitions/Blur"};var Template=function Template(props){return(0,jsx_runtime.jsx)(Blur,Object.assign({},props))};Template.displayName="Template";var Basic=Template.bind({});Basic.parameters={docs:{source:{code:"\n<Blur in={open} radius={25} timeout={500}>\n  <img src='https://picsum.photos/400' />\n</Blur>"}}},Basic.args={in:!0,radius:15,timeout:500,appear:!1,unmountOnExit:!0,mountOnEnter:!0,children:(0,jsx_runtime.jsx)("img",{alt:"demo",style:{width:250,height:250,borderRadius:4,objectFit:"cover"},src:thumbnail_namespaceObject})};var __namedExportsOrder=["Basic"]},"./src/collapse/collapse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>collapse_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),utils=__webpack_require__("./src/utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CollapseRoot=function CollapseRoot(_ref){var children=_ref.children,ownerState=_ref.ownerState,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style;return(0,jsx_runtime.jsx)("div",{style:Object.assign({height:0,overflow:"hidden",transition:(0,utils.vQ)("height")},"horizontal"===ownerState.orientation&&{height:"auto",width:0,transition:(0,utils.vQ)("width")},style),children})};CollapseRoot.displayName="CollapseRoot";var CollapseWrapper=(0,react.forwardRef)((function(_ref2,ref){var children=_ref2.children,ownerState=_ref2.ownerState;_ref2.style;return(0,jsx_runtime.jsx)("div",{ref,style:Object.assign({display:"flex",width:"100%"},"horizontal"===ownerState.orientation&&{width:"auto",height:"100%"}),children})})),CollapseWrapperInner=function CollapseWrapperInner(_ref3){var children=_ref3.children,ownerState=_ref3.ownerState;return(0,jsx_runtime.jsx)("div",{style:Object.assign({width:"100%"},"horizontal"===ownerState.orientation&&{width:"auto",height:"100%"}),children})};CollapseWrapperInner.displayName="CollapseWrapperInner";try{CollapseRoot.displayName="CollapseRoot",CollapseRoot.__docgenInfo={description:"",displayName:"CollapseRoot",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}},ownerState:{defaultValue:null,description:"",name:"ownerState",required:!0,type:{name:'{ in?: boolean | undefined; orientation: "horizontal" | "vertical"; collapsedSize: string | number; state: TransitionStatus; }'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/collapse/styles.tsx#CollapseRoot"]={docgenInfo:CollapseRoot.__docgenInfo,name:"CollapseRoot",path:"src/collapse/styles.tsx#CollapseRoot"})}catch(__react_docgen_typescript_loader_error){}try{CollapseWrapper.displayName="CollapseWrapper",CollapseWrapper.__docgenInfo={description:"",displayName:"CollapseWrapper",props:{style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ownerState:{defaultValue:null,description:"",name:"ownerState",required:!0,type:{name:'{ in?: boolean | undefined; orientation: "horizontal" | "vertical"; collapsedSize: string | number; state: TransitionStatus; }'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/collapse/styles.tsx#CollapseWrapper"]={docgenInfo:CollapseWrapper.__docgenInfo,name:"CollapseWrapper",path:"src/collapse/styles.tsx#CollapseWrapper"})}catch(__react_docgen_typescript_loader_error){}try{CollapseWrapperInner.displayName="CollapseWrapperInner",CollapseWrapperInner.__docgenInfo={description:"",displayName:"CollapseWrapperInner",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}},ownerState:{defaultValue:null,description:"",name:"ownerState",required:!0,type:{name:'{ in?: boolean | undefined; orientation: "horizontal" | "vertical"; collapsedSize: string | number; state: TransitionStatus; }'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/collapse/styles.tsx#CollapseWrapperInner"]={docgenInfo:CollapseWrapperInner.__docgenInfo,name:"CollapseWrapperInner",path:"src/collapse/styles.tsx#CollapseWrapperInner"})}catch(__react_docgen_typescript_loader_error){}var Collapse=function Collapse(_ref){var inProp=_ref.in,_ref$orientation=_ref.orientation,orientation=void 0===_ref$orientation?"vertical":_ref$orientation,_ref$collapsedSize=_ref.collapsedSize,collapsedSizeProp=void 0===_ref$collapsedSize?"0px":_ref$collapsedSize,_ref$timeout=_ref.timeout,timeout=void 0===_ref$timeout?500:_ref$timeout,unmountOnExit=_ref.unmountOnExit,_children=_ref.children,wrapperRef=(0,react.useRef)(null),collapsedSize="number"==typeof collapsedSizeProp?collapsedSizeProp+"px":collapsedSizeProp,isHorizontal="horizontal"===orientation,size=isHorizontal?"width":"height",ownerState={orientation,in:inProp,collapsedSize},getWrapperSize=function getWrapperSize(){return wrapperRef.current?wrapperRef.current[isHorizontal?"clientWidth":"clientHeight"]:0};return(0,jsx_runtime.jsx)(Transition.ZP,{in:inProp,timeout,onExit:function handleExit(node){node.style[size]=getWrapperSize()+"px",getWrapperSize()},onEntere:function handleEnter(node){wrapperRef.current&&isHorizontal&&(wrapperRef.current.style.position="absolute"),node.style[size]=collapsedSize},onEntered:function handleEntered(node){node.style[size]="auto"},onExiting:function handleExiting(node){node.style.transitionDuration=timeout+"ms",node.style[size]=collapsedSize},onEntering:function handleEntering(node){var wrapperSize=getWrapperSize();wrapperRef.current&&isHorizontal&&(wrapperRef.current.style.position=""),node.style.transitionDuration=timeout+"ms",node.style[size]=wrapperSize+"px"},unmountOnExit,children:function children(state){var _ref2;return(0,jsx_runtime.jsx)(CollapseRoot,{ownerState:Object.assign({},ownerState,{state}),style:(_ref2={},_ref2[isHorizontal?"minWidth":"minHeight"]=collapsedSize,_ref2),children:(0,jsx_runtime.jsx)(CollapseWrapper,{ownerState:Object.assign({},ownerState,{state}),ref:wrapperRef,children:(0,jsx_runtime.jsx)(CollapseWrapperInner,{ownerState:Object.assign({},ownerState,{state}),children:_children})})})}})};Collapse.displayName="Collapse";try{Collapse.displayName="Collapse",Collapse.__docgenInfo={description:"",displayName:"Collapse",props:{in:{defaultValue:null,description:"",name:"in",required:!0,type:{name:"boolean"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},collapsedSize:{defaultValue:null,description:"",name:"collapsedSize",required:!1,type:{name:"string | number"}},timeout:{defaultValue:{value:"500"},description:"",name:"timeout",required:!1,type:{name:"number"}},unmountOnExit:{defaultValue:null,description:"",name:"unmountOnExit",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/collapse/collapse.tsx#Collapse"]={docgenInfo:Collapse.__docgenInfo,name:"Collapse",path:"src/collapse/collapse.tsx#Collapse"})}catch(__react_docgen_typescript_loader_error){}const collapse_stories={component:Collapse,title:"Transitions/Collapse"};var Template=function Template(props){return(0,jsx_runtime.jsx)(Collapse,Object.assign({},props))};Template.displayName="Template";var Basic=Template.bind({});Basic.parameters={docs:{source:{code:"\n<Collapse in={open} timeout={500}>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio\n    dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis\n    porro possimus recusandae repellat sequi similique.\n  </p>\n</Collapse>"}}},Basic.args={timeout:500,children:(0,jsx_runtime.jsx)("div",{style:{width:200},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis porro possimus recusandae repellat sequi similique."})};var __namedExportsOrder=["Basic"]},"./src/fade/fade.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>fade_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var react=__webpack_require__("./node_modules/react/index.js"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),utils=__webpack_require__("./src/utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var styles={entering:{opacity:1},entered:{opacity:1}},Fade=(0,react.forwardRef)((function(props,ref){var addEndListener=props.addEndListener,_props$appear=props.appear,appear=void 0===_props$appear||_props$appear,_children=props.children,inProp=(props.easing,props.in),onEnter=props.onEnter,onEntered=props.onEntered,onEntering=props.onEntering,onExit=props.onExit,onExited=props.onExited,onExiting=props.onExiting,style=props.style,timeout=props.timeout,other=_objectWithoutProperties(props,_excluded),handleRef=(0,utils.cR)(_children.ref,ref);return(0,jsx_runtime.jsx)(Transition.ZP,Object.assign({in:inProp,appear,onExit:function handleExit(node){node.style.webkitTransition=(0,utils.vQ)("opacity",{duration:timeout}),node.style.transition=(0,utils.vQ)("opacity",{duration:timeout}),null==onExit||onExit(node)},onEnter:function handleEnter(node,isAppearing){(0,utils.nq)(node),node.style.webkitTransition=(0,utils.vQ)("opacity",{duration:timeout}),node.style.transition=(0,utils.vQ)("opacity",{duration:timeout}),null==onEnter||onEnter(node,isAppearing)},addEndListener:function handleAddEnd(node,next){null==addEndListener||addEndListener(node,next)},onEntering,onEntered,onExiting,onExited,timeout},other,{children:function children(state){return(0,react.cloneElement)(_children,{ref:handleRef,style:Object.assign({opacity:0,visibility:"exited"!==state||inProp?void 0:"hidden"},styles[state],style,_children.props.style)})}}))}));try{Fade.displayName="Fade",Fade.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"Element & { ref?: Ref<unknown> | undefined; }"}},easing:{defaultValue:null,description:"The transition timing function.\nYou may specify a single easing or a object containing enter and exit values.",name:"easing",required:!1,type:{name:"any"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},timeout:{defaultValue:null,description:"The duration for the transition, in milliseconds.",name:"timeout",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fade/fade.tsx#Fade"]={docgenInfo:Fade.__docgenInfo,name:"Fade",path:"src/fade/fade.tsx#Fade"})}catch(__react_docgen_typescript_loader_error){}const fade_stories={component:Fade,title:"Transitions/Fade",argTypes:{easing:{control:!1,table:{disable:!0}}}};var Template=function Template(props){return(0,jsx_runtime.jsx)(Fade,Object.assign({},props))};Template.displayName="Template";var Basic=Template.bind({});Basic.parameters={docs:{source:{code:"\n<Fade in={open} timeout={500}>\n  <div style={{ \n      width: 250, \n      height: 250, \n      background: 'linear-gradient(to right, #fc5c7d, #6a82fb)'\n    }}\n  />\n</Fade>"}}},Basic.args={in:!0,timeout:500,mountOnEnter:!0,unmountOnExit:!0,children:(0,jsx_runtime.jsx)("div",{style:{width:250,height:250,borderRadius:4,background:"linear-gradient(to right, #fc5c7d, #6a82fb)"}})};var __namedExportsOrder=["Basic"]},"./src/slide/slide.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>slide_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts");__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js");function setTranslateValue(direction,node,containerProp){var transform=function getTranslateValue(direction,node,resolvedContainer){var rect=node.getBoundingClientRect(),containerRect=null==resolvedContainer?void 0:resolvedContainer.getBoundingClientRect(),containerWindow=(0,utils.km)(node),computedStyle=containerWindow.getComputedStyle(node),transform=computedStyle.getPropertyValue("-webkit-transform")||computedStyle.getPropertyValue("transform"),offsetX=0,offsetY=0;if(transform&&"none"!==transform&&"string"==typeof transform){var transformValues=transform.split("(")[1].split(")")[0].split(",");offsetX=parseInt(transformValues[4],10),offsetY=parseInt(transformValues[5],10)}return"left"===direction?containerRect?"translateX("+(containerRect.right+offsetX-rect.left)+"px)":"translateX("+(containerWindow.innerWidth+offsetX-rect.left)+"px)":"right"===direction?containerRect?"translateX(-"+(rect.right-containerRect.left-offsetX)+"px)":"translateX(-"+(rect.left+rect.width-offsetX)+"px)":"up"===direction?containerRect?"translateY("+(containerRect.bottom+offsetY-rect.top)+"px)":"translateY("+(containerWindow.innerHeight+offsetY-rect.top)+"px)":containerRect?"translateY(-"+(rect.top-containerRect.top+rect.height-offsetY)+"px)":"translateY(-"+(rect.top+rect.height-offsetY)+"px)"}(direction,node,function resolveContainer(containerPropProp){return"function"==typeof containerPropProp?containerPropProp():containerPropProp}(containerProp));transform&&(node.style.webkitTransform=transform,node.style.transform=transform)}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["addEndListener","appear","children","container","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Slide=(0,react.forwardRef)((function(props,ref){var addEndListener=props.addEndListener,_props$appear=props.appear,appear=void 0===_props$appear||_props$appear,_children=props.children,containerProp=props.container,_props$direction=props.direction,direction=void 0===_props$direction?"down":_props$direction,inProp=props.in,onEnter=props.onEnter,onEntered=props.onEntered,onEntering=props.onEntering,onExit=props.onExit,onExited=props.onExited,onExiting=props.onExiting,style=props.style,_props$timeout=props.timeout,timeout=void 0===_props$timeout?500:_props$timeout,other=_objectWithoutProperties(props,_excluded),childrenRef=(0,react.useRef)(void 0),handleRefIntermediary=(0,utils.cR)(_children.ref,childrenRef),handleRef=(0,utils.cR)(handleRefIntermediary,ref),updatePosition=(0,react.useCallback)((function(){childrenRef.current&&setTranslateValue(direction,childrenRef.current,containerProp)}),[direction,containerProp]);return(0,react.useEffect)((function(){if(!inProp&&"down"!==direction&&"right"!==direction){var handleResize=(0,utils.Ds)((function(){childrenRef.current&&setTranslateValue(direction,childrenRef.current,containerProp)})),containerWindow=(0,utils.km)(childrenRef.current);return containerWindow.addEventListener("resize",handleResize),function(){handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}}),[direction,inProp,containerProp]),(0,react.useEffect)((function(){inProp||updatePosition()}),[inProp,updatePosition]),(0,jsx_runtime.jsx)(Transition.ZP,Object.assign({in:inProp,appear,timeout,onEnter:function handleEnter(node,isAppearing){setTranslateValue(direction,node,containerProp),(0,utils.nq)(node),null==onEnter||onEnter(node,isAppearing)},onEntered,onEntering:function handleEntering(node,isAppearing){node.style.webkitTransition=(0,utils.vQ)("-webkit-transform",{duration:timeout}),node.style.transition=(0,utils.vQ)("transform",{duration:timeout}),node.style.webkitTransform="none",node.style.transform="none",null==onEntering||onEntering(node,isAppearing)},onExit:function handleExit(node){node.style.webkitTransition=(0,utils.vQ)("-webkit-transform",{duration:timeout}),node.style.transition=(0,utils.vQ)("transform",{duration:timeout}),setTranslateValue(direction,node,containerProp),null==onExit||onExit(node)},onExited:function handleExited(node){node.style.webkitTransition="",node.style.transition="",null==onExited||onExited(node)},onExiting,addEndListener:function handleAddEndListener(next){null==addEndListener||addEndListener(childrenRef.current,next)}},other,{children:function children(state){return(0,react.cloneElement)(_children,{ref:handleRef,style:Object.assign({visibility:"exited"!==state||inProp?void 0:"hidden"},style,_children.props.style)})}}))}));try{Slide.displayName="Slide",Slide.__docgenInfo={description:"",displayName:"Slide",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"Element & { ref?: Ref<unknown> | undefined; }"}},container:{defaultValue:null,description:"An HTML element, or a function that returns one.\nIt's used to set the container the Slide is transitioning from.",name:"container",required:!1,type:{name:"Element | (() => Element) | null"}},direction:{defaultValue:{value:"'down'"},description:"Direction the child node will enter from.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}},easing:{defaultValue:{value:"{\nenter: theme.transitions.easing.easeOut,\nexit: theme.transitions.easing.sharp,\n}"},description:"The transition timing function.\nYou may specify a single easing or a object containing enter and exit values.",name:"easing",required:!1,type:{name:"any"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},timeout:{defaultValue:null,description:"The duration for the transition, in milliseconds.",name:"timeout",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/slide/slide.tsx#Slide"]={docgenInfo:Slide.__docgenInfo,name:"Slide",path:"src/slide/slide.tsx#Slide"})}catch(__react_docgen_typescript_loader_error){}const slide_stories={component:Slide,title:"Transitions/Slide",argTypes:{easing:{control:!1,table:{disable:!0}}}};var Template=function Template(props){return(0,jsx_runtime.jsx)(Slide,Object.assign({},props))};Template.displayName="Template";var Basic=Template.bind({});Basic.parameters={docs:{source:{code:"\n<Slide direction=\"up\" in={checked} mountOnEnter unmountOnExit>\n  <div style={{ \n      width: 250, \n      height: 250, \n      background: 'linear-gradient(to right, #ff5f6d, #ffc371)'\n    }}\n  />\n</Slide>"}}},Basic.args={in:!0,timeout:500,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,jsx_runtime.jsx)("div",{style:{width:250,height:250,borderRadius:4,background:"linear-gradient(to right, #ff5f6d, #ffc371)"}})};var __namedExportsOrder=["Basic"]},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{vQ:()=>createTransition,Ds:()=>debounce,km:()=>ownerWindow,nq:()=>reflow,cR:()=>useForkRef});__webpack_require__("./node_modules/core-js/modules/es.array.flat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var reflow=function reflow(node){return node.scrollTop},createTransition=function createTransition(transition){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{duration:300},all=[transition].flat(),duration=options.duration;return all.map((function(transition){return transition+" "+duration+"ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"})).join(", ")},react=__webpack_require__("./node_modules/react/index.js"),setRef=function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)},useForkRef=function useForkRef(refA,refB){return(0,react.useMemo)((function(){return null==refA&&null==refB?null:function(refValue){setRef(refA,refValue),setRef(refB,refValue)}}),[refA,refB])},debounce=(__webpack_require__("./node_modules/core-js/modules/web.timers.js"),function debounce(func){var timeout,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function debounced(){for(var _this=this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var later=function later(){func.apply(_this,args)};clearTimeout(timeout),timeout=setTimeout(later,wait)}return debounced.clear=function(){clearTimeout(timeout)},debounced});function ownerWindow(node){var doc=function ownerDocument(node){return node&&node.ownerDocument||document}(node);return doc.defaultView||window}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./blur/blur.stories.tsx":"./src/blur/blur.stories.tsx","./collapse/collapse.stories.tsx":"./src/collapse/collapse.stories.tsx","./fade/fade.stories.tsx":"./src/fade/fade.stories.tsx","./slide/slide.stories.tsx":"./src/slide/slide.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[217],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);