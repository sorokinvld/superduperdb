"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3985],{9697:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var r=i(4848),s=i(8453);const l={},o="Model",t={id:"apply_api/model",title:"Model",description:"- Wrap a standard AI model with functionality necessary for SuperDuperDB",source:"@site/content/apply_api/model.md",sourceDirName:"apply_api",slug:"/apply_api/model",permalink:"/docs/apply_api/model",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/apply_api/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apply API",permalink:"/docs/apply_api/component"},next:{title:"Listener",permalink:"/docs/apply_api/listener"}},d={},a=[{value:"Implementations",id:"implementations",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"model",children:(0,r.jsx)(n.code,{children:"Model"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Wrap a standard AI model with functionality necessary for SuperDuperDB"}),"\n",(0,r.jsx)(n.li,{children:"Configure validation and training of a model on database data"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Dependencies"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/apply_api/datatype",children:(0,r.jsx)(n.code,{children:"Datatype"})})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"(Optional dependencies)"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/apply_api/validation",children:(0,r.jsx)(n.code,{children:"Validation"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/apply_api/trainer",children:(0,r.jsx)(n.code,{children:"Trainer"})})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"Model"})," is an abstract base class which cannot be called directly.\nTo use ",(0,r.jsx)(n.code,{children:"Model"})," you should call any of its downstream implementations,\nsuch as ",(0,r.jsx)(n.a,{href:"/docs/api/components/model#model-1",children:(0,r.jsx)(n.code,{children:"ObjectModel"})})," or models in the ",(0,r.jsx)(n.a,{href:"/docs/category/ai-integrations",children:"AI-integrations"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Important notes"})})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Model"})," instances can output data not-usually supported by your database.\nThis data will be encoded by default by ",(0,r.jsx)(n.code,{children:"pickle"}),", but more control may be added\nby adding the parameters ",(0,r.jsx)(n.code,{children:"datatype=..."})," or ",(0,r.jsx)(n.code,{children:"output_schema=..."}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"implementations",children:"Implementations"}),"\n",(0,r.jsx)(n.p,{children:"Here are a few SuperDuperDB native implementations:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ObjectModel"})})}),"\n",(0,r.jsxs)(n.p,{children:["Use a self-built model (",(0,r.jsx)(n.code,{children:"object"}),") or function with the system:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb import ObjectModel\n\nm = ObjectModel(\n    'my-model',\n    object=lambda x: x + 2,\n)\n\ndb.apply(m)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"QueryModel"})})}),"\n",(0,r.jsxs)(n.p,{children:["Use a SuperDuperDB query to extract data from ",(0,r.jsx)(n.code,{children:"db"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb.components.model import QueryModel\n\nquery = ... # build a select query\nm = QueryModel('my-query', select=query, key='<key-to-extract>')\n\ndb.apply(m)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"APIModel"})})}),"\n",(0,r.jsx)(n.p,{children:"Request model outputs hosted behind an API:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb.components.model import APIModel\n\nm = APIModel('my-api', url='http://localhost:6666?token={MY_DEV_TOKEN}&model={model}&text={text}')\n\ndb.apply(m)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"SequentialModel"})})}),"\n",(0,r.jsx)(n.p,{children:"Make predictions on the basis of a sequence of models:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb.components.model import SequentialModel\n\nm = SequentialModel(\n    'my-sequence',\n    models=[\n        model1,\n        model2,\n        model3,\n    ]\n)\n\ndb.apply(m)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"See also"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/sklearn",children:"Scikit-learn extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/pytorch",children:"Pytorch extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/transformers",children:"Transformers extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/llama_cpp",children:"Llama.cpp extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/vllm",children:"Vllm extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/openai",children:"OpenAI extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/anthropic",children:"Anthropic extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/cohere",children:"Cohere extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../ai_integrations/jina",children:"Jina extension"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var r=i(6540);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);