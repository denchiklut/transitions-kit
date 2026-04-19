import{r as d,j as e}from"./iframe--3zVJC9D.js";import{c as n,w as b}from"./emotion-styled-base.browser.esm-BNcqcKdG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAzCzJow.js";const f=n("div",{target:"e1yi04yt3"})({name:"1muk4gy",styles:"padding:12px 8px;gap:8px;cursor:pointer;display:flex;align-items:center;color:rgba(0, 0, 0, 0.87);background-color:rgba(0, 0, 0, .03)"}),h=n("div",{target:"e1yi04yt2"})({name:"hx6a8",styles:"padding:16px;font-size:16px;color:rgba(0, 0, 0, 0.87);border-top:1px solid rgba(0, 0, 0, .125)"}),S=n("div",{target:"e1yi04yt1"})({name:"g0c9nw",styles:"border:1px solid rgba(0, 0, 0, .125);&:not(:last-child){border-bottom:0;}&:before{display:none;}"}),A=n("span",{target:"e1yi04yt0"})(({expanded:r})=>({transition:"transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",transform:`rotate(${r?90:0}deg)`,fontSize:"0.9rem",color:"rgba(0, 0, 0, 0.54)"}),""),c=({children:r,expanded:s=!1,onChange:t})=>{const[o,...y]=d.Children.toArray(r);return e.jsxs(S,{children:[e.jsxs(f,{onClick:()=>t==null?void 0:t(!s),children:[e.jsx(A,{expanded:s,className:"material-symbols-rounded",children:"arrow_forward_ios"}),o]}),e.jsx(b,{in:s,timeout:"auto",children:e.jsx(h,{children:y})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{expanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newExpanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"newExpanded"}],return:{name:"void"}}},description:""}}};const _={component:c,title:"Advanced/Accordion"},j=r=>{const[s,t]=d.useState(!0);return e.jsxs(c,{expanded:s,...r,onChange:()=>t(!s),children:[e.jsx("p",{children:"Summary"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]})},q=r=>{const[s,t]=d.useState(0);return e.jsx("div",{children:[...Array.from(Array(3).keys())].map(o=>e.jsxs(c,{expanded:o===s,onChange:()=>t(s===o?-1:o),...r,children:[e.jsxs("p",{children:["Summary ",o+1]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, autem commodi delectus dignissimos distinctio earum ex explicabo facilis itaque maiores, officia porro quae quibusdam quidem, quis recusandae reiciendis tempore totam?"})]},o))})},i=j.bind({}),a=q.bind({});var p,m,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`props => {
  const [open, setOpen] = useState(true);
  return <Accordion expanded={open} {...props} onChange={() => setOpen(!open)}>
            <p>Summary</p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </p>
        </Accordion>;
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`props => {
  const [open, setOpen] = useState(0);
  return <div>
            {[...Array.from(Array(3).keys())].map(i => <Accordion key={i} expanded={i === open} onChange={() => setOpen(open === i ? -1 : i)} {...props}>
                    <p>Summary {i + 1}</p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, autem commodi
                        delectus dignissimos distinctio earum ex explicabo facilis itaque maiores,
                        officia porro quae quibusdam quidem, quis recusandae reiciendis tempore
                        totam?
                    </p>
                </Accordion>)}
        </div>;
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const k=["Basic","Multiple"];export{i as Basic,a as Multiple,k as __namedExportsOrder,_ as default};
