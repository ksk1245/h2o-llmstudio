"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[393],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3612:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),o=a(6010),r=a(5281),l=a(5999);const i={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const s={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function c(e){const{mdxAdmonitionTitle:t,rest:a}=function(e){const t=n.Children.toArray(e),a=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=n.createElement(n.Fragment,null,t.filter((e=>e!==a)));return{mdxAdmonitionTitle:a,rest:o}}(e.children);return{...e,title:e.title??t,children:a}}function d(e){const{children:t,type:a,title:l,icon:d}=c(e),m=function(e){const t=u[e]??e,a=s[t];return a||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),s.info)}(a),p=l??m.label,{iconComponent:f}=m,h=d??n.createElement(f,null);return n.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${m.infimaClassName}`,i.admonition)},n.createElement("div",{className:i.admonitionHeading},n.createElement("span",{className:i.admonitionIcon},h),p),n.createElement("div",{className:i.admonitionContent},t))}},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),o=a(7294),r=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=f({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var k=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},6116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>T,contentTitle:()=>y,default:()=>x,frontMatter:()=>v,metadata:()=>w,toc:()=>N});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),l=a(5162),i=a(3612);const s=a.p+"assets/images/upload-dataset-3a8f13219da5c9925fc96b3ca3c72c05.png",u=a.p+"assets/images/upload-local-file-1aa792f7f5e73f97c8a6be59b29f4855.png",c=a.p+"assets/images/import-s3-bucket-870e0775b8230e5f464d7a037089c2aa.png",d=a.p+"assets/images/import-kaggle-dataset-588805c7decac74a71569c60567f5c2d.png";var m=a(1953);const p={toc:[]},f="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Defines a ",(0,o.kt)("inlineCode",{parentName:"p"},".csv")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".pq")," file containing a dataframe with validation records that H2O LLM Studio uses to ",(0,o.kt)("em",{parentName:"p"},"evaluate")," the model during training."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"validation")," dataframe should have the same format as the ",(0,o.kt)("em",{parentName:"li"},"train")," dataframe.")))}h.isMDXComponent=!0;var k=a(8973),b=a(4396),g=a(5661);const v={},y="Import a dataset",w={unversionedId:"guide/datasets/import-dataset",id:"guide/datasets/import-dataset",title:"Import a dataset",description:"H2O LLM Studio provides a number of data connectors to support importing data from local or external sources and requires your data to be in a certain format for successful importing of data.",source:"@site/docs/guide/datasets/import-dataset.md",sourceDirName:"guide/datasets",slug:"/guide/datasets/import-dataset",permalink:"/h2o-llmstudio/guide/datasets/import-dataset",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Supported data connectors and format",permalink:"/h2o-llmstudio/guide/datasets/data-connectors-format"},next:{title:"View and manage dataset",permalink:"/h2o-llmstudio/guide/datasets/view-dataset"}},T={},N=[{value:"Import data",id:"import-data",level:2},{value:"Configure dataset",id:"configure-dataset",level:2},{value:"Data validity check",id:"data-validity-check",level:2},{value:"View dataset",id:"view-dataset",level:2}],C={toc:N},E="wrapper";function x(e){let{components:t,...p}=e;return(0,o.kt)(E,(0,n.Z)({},C,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-a-dataset"},"Import a dataset"),(0,o.kt)("p",null,"H2O LLM Studio provides a number of data connectors to support importing data from local or external sources and requires your data to be in a certain format for successful importing of data. "),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"data-connectors-format"},"Supported data connectors and format"),"."),(0,o.kt)("h2",{id:"import-data"},"Import data"),(0,o.kt)("p",null,"Follow the relevant steps below to import a dataset to H2O LLM Studio."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the H2O LLM Studio left-navigation pane, click ",(0,o.kt)("strong",{parentName:"li"},"Import dataset"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the relevant ",(0,o.kt)("strong",{parentName:"li"},"Source")," (data connector) that you want to use from the dropdown list .",(0,o.kt)("admonition",{parentName:"li",title:"Data sources",type:"note"},(0,o.kt)(r.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"upload",label:"Upload",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",null,"Drag and drop the file, or click ",(0,o.kt)("b",null,"Browse")," and select the file you want to upload."),(0,o.kt)("li",null,"Click ",(0,o.kt)("b",null,"Upload"),".",(0,o.kt)("img",{src:s,alt:"upload-dataset"})))),(0,o.kt)(l.Z,{value:"local",label:"Local",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",null,"Enter the file path as the ",(0,o.kt)("b",null,"File Location")," or select the relevant local directory that the dataset is located in."),(0,o.kt)("li",null,"Click ",(0,o.kt)("b",null,"Continue"),".",(0,o.kt)("img",{src:u,alt:"upload-local-file"})))),(0,o.kt)(l.Z,{value:"aws",label:"AWS S3",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",null,"Enter values for the following fields:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"S3 bucket name: ")," ",(0,o.kt)("br",null),"The name of the S3 bucket including the reletive file paths."),(0,o.kt)("li",null,(0,o.kt)("b",null,"AWS access key: "),(0,o.kt)("br",null),"The access key associated with your S3 bucket. This field is optional. If the S3 bucket is public, you can leave this empty for anonymous access."),(0,o.kt)("li",null,(0,o.kt)("b",null,"AWS access secret: "),(0,o.kt)("br",null),"The access secret associated with your S3 bucket. This field is optional. If the S3 bucket is public, you can leave this empty for anonymous access."),(0,o.kt)("li",null,(0,o.kt)("b",null,"File name: "),(0,o.kt)("br",null),"Enter the file name of the dataset that you want to import.")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{type:"info",title:"Note",mdxType:"Admonition"},(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys"},"AWS credentials")," and ",(0,o.kt)("a",{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html"},"Methods for accessing a bucket")," in the AWS Documentation.")))),(0,o.kt)("li",null,"Click ",(0,o.kt)("b",null,"Continue"),".",(0,o.kt)("img",{src:c,alt:"import-s3-bucket"})))),(0,o.kt)(l.Z,{value:"kaggle",label:"Kaggle",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",null,"Enter values for the following fields:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"Kaggle API command: "),(0,o.kt)("br",null),"Enter the Kaggle API command that you want to execute."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Kaggle username: "),(0,o.kt)("br",null),"Your Kaggle username for API authentication"),(0,o.kt)("li",null,(0,o.kt)("b",null,"Kaggle secret key: "),(0,o.kt)("br",null),"Your Kaggle secret key for API authentication."))),(0,o.kt)("li",null,"Click ",(0,o.kt)("b",null,"Continue"),".",(0,o.kt)("img",{src:d,alt:"import-kaggle-dataset"})))))))),(0,o.kt)("h2",{id:"configure-dataset"},"Configure dataset"),(0,o.kt)("p",null,"Once you have successfully uploaded or imported your dataset, you can configure the dataset settings."),(0,o.kt)("admonition",{title:"Tip",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can upload a ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," file with both training and validation sets to avoid having to separately upload files.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dataset name:")," ",(0,o.kt)("br",null),"\nA suitable name for the whole dataset which includes both the train dataframe and validation dataframe.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Train Dataframe:")," ",(0,o.kt)(m.ZP,{mdxType:"TrainDataframeTooltip"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Validation Dataframe:")," ",(0,o.kt)(h,{mdxType:"ValidationDataframeTooltip"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Prompt Column:")," ",(0,o.kt)(k.ZP,{mdxType:"PromptColumnTooltip"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Answer Column:")," ",(0,o.kt)(b.ZP,{mdxType:"AnswerColumnTooltip"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parent Id Column:")," ",(0,o.kt)(g.ZP,{mdxType:"ParentIdColumnTooltip"})))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"configure-dataset",src:a(2633).Z,width:"2844",height:"1716"})),(0,o.kt)("h2",{id:"data-validity-check"},"Data validity check"),(0,o.kt)("p",null,"H2O LLM Studio will provide a preview of the dataset input (sample questions) and output (sample answers) according to the content of the imported dataset. Review the text to ensure that the input and output is as intended, and then click ",(0,o.kt)("strong",{parentName:"p"},"Continue"),". "),(0,o.kt)("h2",{id:"view-dataset"},"View dataset"),(0,o.kt)("p",null,"You will now be redirected to the ",(0,o.kt)("strong",{parentName:"p"},"View datasets")," screen. You should be able to see the dataset you just imported listed on the screen. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"view-dataset",src:a(1623).Z,width:"2838",height:"1830"})),(0,o.kt)("p",null,"For more information about viewing dataset summary and statistics, see ",(0,o.kt)("a",{parentName:"p",href:"view-dataset"},"View and manage datasets")))}x.isMDXComponent=!0},4396:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The column in the dataset containing the expected output."))}i.isMDXComponent=!0},5661:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An optional column specifying the parent id to be used for chained conversations. The value of this column needs to match an additional column with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". If provided, the prompt will be concatenated after preceeding parent rows."))}i.isMDXComponent=!0},8973:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The column in the dataset containing the user prompt."))}i.isMDXComponent=!0},1953:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Defines a ",(0,o.kt)("inlineCode",{parentName:"p"},".csv")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".pq")," file containing a dataframe with training records that H2O LLM Studio uses to ",(0,o.kt)("em",{parentName:"p"},"train")," the model."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The records are combined into mini-batches when training the model.")))}i.isMDXComponent=!0},2633:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/configure-dataset-7875dead4d146bd3e142adda1ae75bfe.png"},1623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view-imported-dataset-c048f2e905f186278154db0332bcb2c0.png"}}]);