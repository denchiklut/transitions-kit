"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[653],{"./src/components/accordion/accrodion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Multiple:()=>Multiple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>accrodion_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");var Summary=(0,emotion_styled_base_browser_esm.A)("div",{target:"e1yi04yt3"})({name:"1muk4gy",styles:"padding:12px 8px;gap:8px;cursor:pointer;display:flex;align-items:center;color:rgba(0, 0, 0, 0.87);background-color:rgba(0, 0, 0, .03)"}),Details=(0,emotion_styled_base_browser_esm.A)("div",{target:"e1yi04yt2"})({name:"hx6a8",styles:"padding:16px;font-size:16px;color:rgba(0, 0, 0, 0.87);border-top:1px solid rgba(0, 0, 0, .125)"}),Wrapper=(0,emotion_styled_base_browser_esm.A)("div",{target:"e1yi04yt1"})({name:"g0c9nw",styles:"border:1px solid rgba(0, 0, 0, .125);&:not(:last-child){border-bottom:0;}&:before{display:none;}"}),Icon=(0,emotion_styled_base_browser_esm.A)("span",{target:"e1yi04yt0"})((function(_ref){var expanded=_ref.expanded;return{transition:"transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",transform:"rotate(".concat(expanded?90:0,"deg)"),fontSize:"0.9rem",color:"rgba(0, 0, 0, 0.54)"}}),""),index_esm=__webpack_require__("./node_modules/transitions-kit/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toArray(r){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Accordion=function Accordion(_ref){var childrenProp=_ref.children,_ref$expanded=_ref.expanded,expanded=void 0!==_ref$expanded&&_ref$expanded,onChange=_ref.onChange,_Children$toArray2=_toArray(react.Children.toArray(childrenProp)),summary=_Children$toArray2[0],children=_Children$toArray2.slice(1);return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(Summary,{onClick:function onClick(){return null==onChange?void 0:onChange(!expanded)},children:[(0,jsx_runtime.jsx)(Icon,{expanded,className:"material-symbols-rounded",children:"arrow_forward_ios"}),summary]}),(0,jsx_runtime.jsx)(index_esm.SD,{in:expanded,timeout:"auto",children:(0,jsx_runtime.jsx)(Details,{children})})]})};Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{expanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newExpanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"newExpanded"}],return:{name:"void"}}},description:""}}};const accrodion_stories={component:Accordion,title:"Advanced/Accordion"},Basic=(props=>{const[open,setOpen]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)(Accordion,{expanded:open,...props,onChange:()=>setOpen(!open),children:[(0,jsx_runtime.jsx)("p",{children:"Summary"}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]})}).bind({}),Multiple=(props=>{const[open,setOpen]=(0,react.useState)(0);return(0,jsx_runtime.jsx)("div",{children:[...Array.from(Array(3).keys())].map((i=>(0,jsx_runtime.jsxs)(Accordion,{expanded:i===open,onChange:()=>setOpen(open===i?-1:i),...props,children:[(0,jsx_runtime.jsxs)("p",{children:["Summary ",i+1]}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, autem commodi delectus dignissimos distinctio earum ex explicabo facilis itaque maiores, officia porro quae quibusdam quidem, quis recusandae reiciendis tempore totam?"})]},i)))})}).bind({}),__namedExportsOrder=["Basic","Multiple"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"props => {\n  const [open, setOpen] = useState(true);\n  return <Accordion expanded={open} {...props} onChange={() => setOpen(!open)}>\n            <p>Summary</p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus\n                ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.\n            </p>\n        </Accordion>;\n}",...Basic.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"props => {\n  const [open, setOpen] = useState(0);\n  return <div>\n            {[...Array.from(Array(3).keys())].map(i => <Accordion key={i} expanded={i === open} onChange={() => setOpen(open === i ? -1 : i)} {...props}>\n                    <p>Summary {i + 1}</p>\n\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, autem commodi\n                        delectus dignissimos distinctio earum ex explicabo facilis itaque maiores,\n                        officia porro quae quibusdam quidem, quis recusandae reiciendis tempore\n                        totam?\n                    </p>\n                </Accordion>)}\n        </div>;\n}",...Multiple.parameters?.docs?.source}}}}}]);