import{a,j as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const e=({background:n,label:l,mention:p,subTitle:b,price:v,...f})=>a("div",{className:"card",children:[s("div",{className:(l?"media":"simple")==="simple"?"card":"card media",style:{background:n},...f}),l&&s("div",{className:"card-section",children:a("div",{className:"card-groud",children:[p,a("div",{className:"card-information",children:[a("div",{className:"card-title",children:[l,b]}),v]})]})})]});try{e.displayName="Card",e.__docgenInfo={description:"",displayName:"Card",props:{mention:{defaultValue:null,description:"",name:"mention",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!1,type:{name:"number"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"simple"'},{value:'"media"'}]}}}}}catch{}const T={title:"Design System/Card",component:e,argTypes:{background:{control:"color"}}},r={render:()=>s(e,{variant:"simple",label:"label"})},i={render:()=>s(e,{variant:"media",label:"label",mention:"mention",subTitle:"subTitle",price:246})};var t,d,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Card variant='simple' label="label" />
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var o,m,u;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Card variant='media' label="label" mention='mention' subTitle='subTitle' price={246} />
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const h=["simple","media"];export{h as __namedExportsOrder,T as default,i as media,r as simple};
//# sourceMappingURL=Card.stories-f1a2b422.js.map
