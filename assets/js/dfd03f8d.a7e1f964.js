"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6202],{5706:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=r(4848),t=r(8453);const i={},l="Listener",d={id:"apply_api/listener",title:"Listener",description:"- apply a model to compute outputs on a query",source:"@site/content/apply_api/listener.md",sourceDirName:"apply_api",slug:"/apply_api/listener",permalink:"/docs/apply_api/listener",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/apply_api/listener.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model",permalink:"/docs/apply_api/model"},next:{title:"VectorIndex",permalink:"/docs/apply_api/vector_index"}},o={},c=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"listener",children:(0,s.jsx)(n.code,{children:"Listener"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["apply a ",(0,s.jsx)(n.code,{children:"model"})," to compute outputs on a query"]}),"\n",(0,s.jsx)(n.li,{children:"outputs are refreshed every-time new data are added"}),"\n",(0,s.jsxs)(n.li,{children:["outputs are saved to the ",(0,s.jsx)(n.code,{children:"db.databackend"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"dependencies"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/apply_api/model",children:(0,s.jsx)(n.code,{children:"Model"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"usage pattern"})})}),"\n",(0,s.jsxs)(n.p,{children:["(learn how to build a model ",(0,s.jsx)(n.a,{href:"model",children:"here"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import Listener\nm = ...  # build a model\nq = ... # build a select query\n\n# either...\nlistener = Listener(\n    mode=m,\n    select=q,\n    key='x',\n)\n\n# or...\nlistener = m.to_listener(select=q, key='x')\n\ndb.apply(listener)\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.em,{children:["how do i choose the ",(0,s.jsx)(n.code,{children:"key"})," parameter?"]}),"\n",(0,s.jsx)(n.code,{children:"key"})," refers to the field, or fields which\nwill be fed into the ",(0,s.jsx)(n.code,{children:"model"})," as ",(0,s.jsx)(n.code,{children:"*args"})," and ",(0,s.jsx)(n.code,{children:"**kwargs"})]}),(0,s.jsx)(n.p,{children:"the following forms are possible:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key='x'"}),","]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key=('x','y')"}),","]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key={'x': 'x', 'y': 'y'}"}),","]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key=(('x',), {'y': 'y'})"}),","]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"see also"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../cluster_mode/change_data_capture",children:"change-data capture"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);