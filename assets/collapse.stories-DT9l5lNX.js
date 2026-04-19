import{j as e,r as m}from"./iframe--3zVJC9D.js";import{c as s,w as o}from"./emotion-styled-base.browser.esm-BNcqcKdG.js";import{S as u}from"./index-Bl0TXup9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAzCzJow.js";const x=s("div",{target:"ew7frfw2"})({name:"1i7yhco",styles:"margin:12px;padding:8px;width:116px;height:120px;font-size:16px;border-radius:5px;background:#7f7f7f;box-sizing:border-box;box-shadow:rgba(50, 50, 93, 0.25) 0 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;position:relative"}),r=s("div",{target:"ew7frfw1"})({name:"1pts316",styles:"display:grid;height:145px;margin-left:-10px;grid-template-columns:145px 145px"}),f=s("svg",{target:"ew7frfw0"})({name:"1oy5w9m",styles:"width:100%;height:100%;fill:#cec6e4;box-shadow:rgba(50, 50, 93, 0.25) 0 30px 60px -12px inset,rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}),d=()=>e.jsx(f,{children:e.jsx("polygon",{points:"0,100 50,00, 100,100"})}),i=()=>e.jsx(x,{children:e.jsx(d,{})});d.__docgenInfo={description:"",methods:[],displayName:"Icon"};i.__docgenInfo={description:"",methods:[],displayName:"Content"};const O={component:o,title:"Transitions/Collapse",argTypes:{in:{type:{name:"boolean",required:!0},description:"If `true`, the component will transition in."},appear:{description:"By default the child component does not perform the enter transition when it first mounts, regardless of the value of in. If you want this behavior, set both appear and in to true. ",defaultValue:{summary:!1}},children:{type:{required:!0},description:"The content node to be collapsed."},collapsedSize:{description:"The width (horizontal) or height (vertical) of the container when collapsed.",defaultValue:{summary:"0px"}},orientation:{description:"The transition orientation.",options:["vertical","horizontal"],defaultValue:{summary:"vertical"},control:{type:"radio"}},easing:{description:`The transition timing function.
	 * You may specify a single easing or a object containing enter and exit values.`,type:{name:"string"}},timeout:{description:`The duration for the transition, in milliseconds.
	 * You may specify a single timeout for all transitions, or individually with an object. 
	 * Set to 'auto' to automatically calculate transition time based on height.`,defaultValue:{summary:300}},mountOnEnter:{type:{name:"boolean",required:!1},description:`By default the child component is mounted immediately along with the parent Transition component. 
	* If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.`,table:{defaultValue:{summary:"false"}}},unmountOnExit:{type:{name:"boolean",required:!1},description:`By default the child component stays mounted after it reaches the 'exited' state.
	* Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.`,table:{defaultValue:{summary:"false"}}}}},g=({in:y,collapsedSize:w,orientation:b,children:C,...a})=>{const[t,h]=m.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Show",checked:t,onChange:h}),e.jsx("div",{style:{height:10}}),e.jsxs(r,{children:[e.jsx(o,{in:t,...a,children:e.jsx(i,{})}),e.jsx(o,{in:t,collapsedSize:69,...a,children:e.jsx(i,{})})]}),e.jsxs(r,{children:[e.jsx(o,{in:t,orientation:"horizontal",...a,children:e.jsx(i,{})}),e.jsx(o,{in:t,orientation:"horizontal",collapsedSize:67,...a,children:e.jsx(i,{})})]})]})},n=g.bind({});n.parameters={docs:{source:{code:`
<div>
  <Collapse in={open}>{content}</Collapse>
  
  <Collapse in={open} collapsedSize={69}>
    {content}
  </Collapse>
  
  <Collapse in={open} orientation='horizontal'>
    {content}
  </Collapse>
  
  <Collapse in={open} orientation='horizontal' collapsedSize={67}>
    {content}
  </Collapse>
</div>
`}}};n.args={timeout:500,appear:!1};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`({
  in: inProp,
  collapsedSize,
  orientation,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(true);
  return <>
            <Switch label='Show' checked={open} onChange={setOpen} />

            <div style={{
      height: 10
    }} />

            <Row>
                <Collapse in={open} {...props}>
                    <Content />
                </Collapse>

                <Collapse in={open} collapsedSize={69} {...props}>
                    <Content />
                </Collapse>
            </Row>

            <Row>
                <Collapse in={open} orientation='horizontal' {...props}>
                    <Content />
                </Collapse>

                <Collapse in={open} orientation='horizontal' collapsedSize={67} {...props}>
                    <Content />
                </Collapse>
            </Row>
        </>;
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const E=["Basic"];export{n as Basic,E as __namedExportsOrder,O as default};
