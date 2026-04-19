import{r as p,j as t}from"./iframe--3zVJC9D.js";import{c as l,b as a}from"./emotion-styled-base.browser.esm-BNcqcKdG.js";import{i as c}from"./thumbnail-Bx3by73L.js";import{S as d}from"./index-Bl0TXup9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAzCzJow.js";const m=l("div",{target:"en92ez10"})({name:"1878o4o",styles:"display:grid;gap:20px"}),S={component:a,title:"Transitions/Blur",argTypes:{in:{type:{name:"boolean",required:!0},description:"If `true`, the component will transition in."},appear:{description:"By default the child component does not perform the enter transition when it first mounts, regardless of the value of in. If you want this behavior, set both appear and in to true. ",defaultValue:{summary:!1}},children:{type:{required:!0},description:"The content node to be collapsed."},easing:{description:`The transition timing function.
	 * You may specify a single easing or a object containing enter and exit values.`,type:{name:"string"}},radius:{description:"The blur radius in `px`",defaultValue:{summary:25},type:{name:"number"}},timeout:{description:`The duration for the transition, in milliseconds.
	 * You may specify a single timeout for all transitions, or individually with an object.`,defaultValue:{summary:"{ enter: 225, exit: 195 }"}},mountOnEnter:{type:{name:"boolean",required:!1},description:`By default the child component is mounted immediately along with the parent Transition component. 
	* If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.`,table:{defaultValue:{summary:"false"}}},unmountOnExit:{type:{name:"boolean",required:!1},description:`By default the child component stays mounted after it reaches the 'exited' state.
	* Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.`,table:{defaultValue:{summary:"false"}}}}},h=({in:f,children:y,...s})=>{const[n,u]=p.useState(!0);return t.jsxs(m,{children:[t.jsx(d,{label:"Show",checked:n,onChange:u}),t.jsx(a,{in:n,...s,children:t.jsx("img",{alt:"demo",style:{width:250,height:250,borderRadius:4,objectFit:"cover"},src:c})})]})},e=h.bind({});e.parameters={docs:{source:{code:`
<Blur in={open} radius={15}>
  <img src='https://picsum.photos/400' />
</Blur>`}}};e.args={radius:15,timeout:500,appear:!1};var r,i,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  in: inProp,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(true);
  return <Wrapper>
            <Switch label='Show' checked={open} onChange={setOpen} />

            <Blur in={open} {...props}>
                <img alt='demo' style={{
        width: 250,
        height: 250,
        borderRadius: 4,
        objectFit: 'cover'
      }} src={image} />
            </Blur>
        </Wrapper>;
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const O=["Basic"];export{e as Basic,O as __namedExportsOrder,S as default};
