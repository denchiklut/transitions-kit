import{r as d,j as t}from"./iframe--3zVJC9D.js";import{c as i,$ as s}from"./emotion-styled-base.browser.esm-BNcqcKdG.js";import{i as m}from"./thumbnail-Bx3by73L.js";import{S as u}from"./index-Bl0TXup9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAzCzJow.js";const l=i("div",{target:"e1igr30x1"})({name:"1878o4o",styles:"display:grid;gap:20px"}),h=i("img",{target:"e1igr30x0"})({name:"1fjwze4",styles:"width:250px;height:250px;border-radius:4px"}),E={component:s,title:"Transitions/Fade",argTypes:{in:{type:{name:"boolean",required:!0},description:"If `true`, the component will transition in."},appear:{description:"By default the child component does not perform the enter transition when it first mounts, regardless of the value of in. If you want this behavior, set both appear and in to true. ",defaultValue:{summary:!1}},children:{type:{required:!0},description:"The content node to be collapsed."},easing:{description:`The transition timing function.
	 * You may specify a single easing or a object containing enter and exit values.`,type:{name:"string"}},timeout:{description:`The duration for the transition, in milliseconds.
	 * You may specify a single timeout for all transitions, or individually with an object.`,defaultValue:{summary:"{ enter: 225, exit: 195 }"}},mountOnEnter:{type:{name:"boolean",required:!1},description:`By default the child component is mounted immediately along with the parent Transition component. 
	* If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.`,table:{defaultValue:{summary:"false"}}},unmountOnExit:{type:{name:"boolean",required:!1},description:`By default the child component stays mounted after it reaches the 'exited' state.
	* Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.`,table:{defaultValue:{summary:"false"}}}}},f=({in:y,children:g,...p})=>{const[n,c]=d.useState(!0);return t.jsxs(l,{children:[t.jsx(u,{label:"Show",checked:n,onChange:c}),t.jsx(s,{in:n,...p,children:t.jsx(h,{src:m})})]})},e=f.bind({});e.parameters={docs:{source:{code:`
<Fade in={open}>
  {content}
</Fade>`}}};e.args={timeout:500,appear:!1};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  in: inProp,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(true);
  return <Wrapper>
            <Switch label='Show' checked={open} onChange={setOpen} />

            <Fade in={open} {...props}>
                <Image src={image} />
            </Fade>
        </Wrapper>;
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const T=["Basic"];export{e as Basic,T as __namedExportsOrder,E as default};
