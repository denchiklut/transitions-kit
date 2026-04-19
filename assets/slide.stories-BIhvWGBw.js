import{r as a,j as e}from"./iframe--3zVJC9D.js";import{c as u,R as i}from"./emotion-styled-base.browser.esm-BNcqcKdG.js";import{i as s}from"./thumbnail-Bx3by73L.js";import{S as m}from"./index-Bl0TXup9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAzCzJow.js";const f=u("div",{target:"e1toyhrq1"})({name:"1878o4o",styles:"display:grid;gap:20px"}),d=u("img",{target:"e1toyhrq0"})({name:"1u8hqvf",styles:"border-radius:4px"}),E={component:i,title:"Transitions/Slide",argTypes:{in:{type:{name:"boolean",required:!0},description:"If `true`, the component will transition in."},appear:{description:"By default the child component does not perform the enter transition when it first mounts, regardless of the value of in. If you want this behavior, set both appear and in to true. ",defaultValue:{summary:!1}},direction:{description:"Direction the child node will enter from.",options:["left","right","up","down"],control:{type:"radio"}},container:{description:`An HTML element, or a function that returns one.
	 * It's used to set the container the Slide is transitioning from.`},children:{type:{required:!0},description:"The content node to be collapsed."},easing:{description:`The transition timing function.
	 * You may specify a single easing or a object containing enter and exit values.`,type:{name:"string"}},timeout:{description:`The duration for the transition, in milliseconds.
	 * You may specify a single timeout for all transitions, or individually with an object.`,defaultValue:{summary:"{ enter: 225, exit: 195 }"}},mountOnEnter:{type:{name:"boolean",required:!1},description:`By default the child component is mounted immediately along with the parent Transition component. 
	* If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.`,table:{defaultValue:{summary:"false"}}},unmountOnExit:{type:{name:"boolean",required:!1},description:`By default the child component stays mounted after it reaches the 'exited' state.
	* Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.`,table:{defaultValue:{summary:"false"}}}}},g=({in:y,children:x,...r})=>{const[t,h]=a.useState(!0),o=a.useRef(null);return e.jsxs(f,{children:[e.jsx(m,{label:"Show",checked:t,onChange:h}),e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(i,{in:t,...r,children:e.jsx(d,{src:s,width:250,height:250})}),e.jsxs("div",{children:[e.jsx("p",{children:"Show from target"}),e.jsx("div",{ref:o,style:{border:"1px solid",height:200,width:200,padding:10,marginTop:16,overflow:"hidden"},children:e.jsx(i,{in:t,...r,container:o.current,children:e.jsx(d,{src:s,width:180,height:180})})})]})]})]})},n=g.bind({});n.parameters={docs:{source:{code:`
<div>
  <Slide in={checked} direction='up'>
    {content}
  </Slide>
  
  <Slide in={checked} direction='up' container={containerRef.current}>
    {content}
  </Slide>
</div>`}}};n.args={timeout:500,direction:"up",appear:!1};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`({
  in: inProp,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  return <Wrapper>
            <Switch label='Show' checked={open} onChange={setOpen} />

            <div style={{
      display: 'flex',
      gap: 20
    }}>
                <Slide in={open} {...props}>
                    <Image src={image} width={250} height={250} />
                </Slide>

                <div>
                    <p>Show from target</p>

                    <div ref={ref} style={{
          border: '1px solid',
          height: 200,
          width: 200,
          padding: 10,
          marginTop: 16,
          overflow: 'hidden'
        }}>
                        <Slide in={open} {...props} container={ref.current}>
                            <Image src={image} width={180} height={180} />
                        </Slide>
                    </div>
                </div>
            </div>
        </Wrapper>;
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const O=["Basic"];export{n as Basic,O as __namedExportsOrder,E as default};
