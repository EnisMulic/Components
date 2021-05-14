(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{464:function(module,exports,__webpack_require__){__webpack_require__(465),__webpack_require__(622),__webpack_require__(623),__webpack_require__(825),__webpack_require__(826),__webpack_require__(830),__webpack_require__(831),__webpack_require__(829),__webpack_require__(827),__webpack_require__(832),__webpack_require__(833),module.exports=__webpack_require__(820)},532:function(module,exports){},623:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(332)},820:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(332).configure)([__webpack_require__(821),__webpack_require__(822)],module,!1)}).call(this,__webpack_require__(188)(module))},821:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=821},822:function(module,exports,__webpack_require__){var map={"./components/Animations/Glitch/Glitch.stories.js":834,"./components/Cards/FlipCard/FlipCard.stories.js":828,"./components/Tags/RoundedTag/RoundedTag.stories.js":835};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=822},828:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ImageCard",(function(){return ImageCard})),__webpack_require__.d(__webpack_exports__,"TextCard",(function(){return TextCard}));var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,objectSpread2=__webpack_require__(46),taggedTemplateLiteral=__webpack_require__(52),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(53)),jsx_runtime=__webpack_require__(29),SizeCss=Object(styled_components_browser_esm.a)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n    width: ",";\n    height: ",";\n"])),(function(props){return props.width}),(function(props){return props.height})),Wrapper=styled_components_browser_esm.b.div(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\n    background-color: transparent;\n    perspective: 1000px;\n    ","\n\n    img {\n        ","\n    }\n\n    text-align: center;\n"])),SizeCss,SizeCss),RotateCss=Object(styled_components_browser_esm.a)(_templateObject3||(_templateObject3=Object(taggedTemplateLiteral.a)(["\n    transform: ",";\n"])),(function(_ref){return"xAxis"===_ref.rotate?"rotateX(180deg)":"rotateY(180deg)"})),FlipCardInner=styled_components_browser_esm.b.div(_templateObject4||(_templateObject4=Object(taggedTemplateLiteral.a)(["\n    position: relative;\n    max-width: 100%;\n    max-height: 100%;\n    text-align: center;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    display: flex;\n    justify-content: center;\n    margin: auto;\n\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n    :hover {\n        ","\n    }\n"])),RotateCss),FlipCardCss=Object(styled_components_browser_esm.a)(_templateObject5||(_templateObject5=Object(taggedTemplateLiteral.a)(["\n    object-fit: cover;\n    position: absolute;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    color: black;\n"]))),FlipCardFront=styled_components_browser_esm.b.div(_templateObject6||(_templateObject6=Object(taggedTemplateLiteral.a)(["\n    ","\n"])),FlipCardCss),FlipCardBack=styled_components_browser_esm.b.div(_templateObject7||(_templateObject7=Object(taggedTemplateLiteral.a)(["\n    ","\n    ","\n"])),FlipCardCss,RotateCss),FlipCard_FlipCard=function FlipCard(props){var _props$rotate=props.rotate,rotate=void 0===_props$rotate?"yAxis":_props$rotate,front=props.front,back=props.back,width=props.width,height=props.height;return Object(jsx_runtime.jsx)(Wrapper,{width:width,height:height,children:Object(jsx_runtime.jsxs)(FlipCardInner,{rotate:rotate,children:[Object(jsx_runtime.jsx)(FlipCardFront,{children:front}),Object(jsx_runtime.jsx)(FlipCardBack,{rotate:rotate,children:back})]})})};FlipCard_FlipCard.__docgenInfo={description:"",methods:[],displayName:"FlipCard"};var Cards_FlipCard=FlipCard_FlipCard;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/FlipCard/index.js"]={name:"FlipCard",docgenInfo:FlipCard_FlipCard.__docgenInfo,path:"src/components/Cards/FlipCard/index.js"});var PlayingCardFront=__webpack_require__.p+"static/media/PlayingCardFront.fb4b775d.jpg",PlayingCardBack=__webpack_require__.p+"static/media/PlayingCardBack.3a4027d8.jpg",FlipCard_stories_Template=(__webpack_exports__.default={title:"Cards/FlipCard",argTypes:{rotate:{defaultValue:"yAxis",control:{type:"radio",options:["xAxis","yAxis"]}},width:{defaultValue:"150px",control:{type:"text"}},height:{defaultValue:"200px",control:{type:"text"}},front:{defaultValue:Object(jsx_runtime.jsx)("img",{src:PlayingCardFront,alt:"Ace of Spades"})},back:{defaultValue:Object(jsx_runtime.jsx)("img",{src:PlayingCardBack,alt:"Card back"})}}},function Template(args){return Object(jsx_runtime.jsx)(Cards_FlipCard,Object(objectSpread2.a)({},args))}),ImageCard=FlipCard_stories_Template.bind({}),TextCard=FlipCard_stories_Template.bind({});TextCard.args={front:"Front",back:"Back"},ImageCard.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <FlipCard {...args} />"}},ImageCard.parameters),TextCard.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <FlipCard {...args} />"}},TextCard.parameters)},833:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(840),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},834:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"GlitchText",(function(){return Glitch_stories_GlitchText}));var _templateObject,_templateObject2,_templateObject3,_templateObject4,objectSpread2=__webpack_require__(46),taggedTemplateLiteral=(__webpack_require__(0),__webpack_require__(52)),styled_components_browser_esm=__webpack_require__(53),jsx_runtime=__webpack_require__(29),glitch=Object(styled_components_browser_esm.c)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n    0% {\n        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),\n            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),\n            -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);\n    }\n    14% {\n        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),\n            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),\n            -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);\n    }\n    15% {\n        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),\n            0.025em 0.025em 0 rgba(0, 255, 0, 0.75),\n            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);\n    }\n    49% {\n        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),\n            0.025em 0.025em 0 rgba(0, 255, 0, 0.75),\n            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);\n    }\n    50% {\n        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),\n            0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);\n    }\n    99% {\n        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),\n            0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);\n    }\n    100% {\n        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),\n            -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),\n            -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);\n    }\n"]))),Wrapper=styled_components_browser_esm.b.body(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\n    @media (prefers-reduced-motion: reduce) {\n        *,\n        ::before,\n        ::after {\n            animation-delay: -1ms !important;\n            animation-duration: 1ms !important;\n            animation-iteration-count: 1 !important;\n            background-attachment: initial !important;\n            scroll-behavior: auto !important;\n            transition-duration: 0s !important;\n            transition-delay: 0s !important;\n        }\n    }\n"]))),Glitch_GlitchText=styled_components_browser_esm.b.p(_templateObject3||(_templateObject3=Object(taggedTemplateLiteral.a)(["\n    color: white;\n    font-family: sans-serif;\n\n    font-size: ",";\n    font-weight: ",";\n\n    position: relative;\n\n    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),\n        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),\n        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);\n\n    animation: "," 2000ms infinite;\n"])),(function(props){return props.size||"6rem"}),(function(props){return props.weight||"700"}),glitch),GlitchSpan=styled_components_browser_esm.b.span(_templateObject4||(_templateObject4=Object(taggedTemplateLiteral.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    &:first-child {\n        animation: "," 650ms infinite;\n        clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);\n        transform: translate(-0.025em, -0.0125em);\n        opacity: 0.8;\n    }\n\n    &:last-child {\n        animation: "," 375ms infinite;\n        clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);\n        transform: translate(0.0125em, 0.025em);\n        opacity: 0.8;\n    }\n"])),glitch,glitch),Glitch_Glitch=function Glitch(props){return Object(jsx_runtime.jsx)(Wrapper,{children:Object(jsx_runtime.jsxs)(Glitch_GlitchText,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{children:[Object(jsx_runtime.jsx)(GlitchSpan,{"aria-hidden":"true",children:props.text}),props.text,Object(jsx_runtime.jsx)(GlitchSpan,{"aria-hidden":"true",children:props.text})]}))})};Glitch_Glitch.__docgenInfo={description:"",methods:[],displayName:"Glitch"};var Animations_Glitch=Glitch_Glitch;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animations/Glitch/index.js"]={name:"Glitch",docgenInfo:Glitch_Glitch.__docgenInfo,path:"src/components/Animations/Glitch/index.js"});__webpack_exports__.default={title:"Animations/Glitch",argTypes:{text:{defaultValue:"Text",control:{type:"text"}},size:{defaultValue:"6rem",control:{type:"text"}},weight:{defaultValue:"700",control:{type:"text"}}}};var Glitch_stories_GlitchText=function GlitchText(args){return Object(jsx_runtime.jsx)(Animations_Glitch,Object(objectSpread2.a)({},args))};Glitch_stories_GlitchText.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Glitch {...args} />"}},Glitch_stories_GlitchText.parameters),Glitch_stories_GlitchText.__docgenInfo={description:"",methods:[],displayName:"GlitchText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animations/Glitch/Glitch.stories.js"]={name:"GlitchText",docgenInfo:Glitch_stories_GlitchText.__docgenInfo,path:"src/components/Animations/Glitch/Glitch.stories.js"})},835:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));var _templateObject,objectSpread2=__webpack_require__(46),taggedTemplateLiteral=__webpack_require__(52),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(53)),jsx_runtime=__webpack_require__(29),Tag=styled_components_browser_esm.b.div(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n    border: 1px solid ",";\n    display: inline-block;\n    font-size: 80%;\n    padding: 0.3125rem 0.9375rem;\n    background-color: ",";\n    color: ",";\n    border-radius: 20px;\n    margin-right: 0.3125rem;\n    margin-bottom: 0.3125rem;\n    width: ",";\n    height: ",";\n"])),(function(props){return props.border||"#fff"}),(function(props){return props.backgroundColor}),(function(props){return props.color}),(function(props){return props.width||"auto"}),(function(props){return props.height||"auto"})),RoundedTag_RoundedTag=function RoundedTag(props){return Object(jsx_runtime.jsx)(Tag,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{children:props.value}))};RoundedTag_RoundedTag.__docgenInfo={description:"",methods:[],displayName:"RoundedTag"};var Tags_RoundedTag=RoundedTag_RoundedTag;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tags/RoundedTag/index.js"]={name:"RoundedTag",docgenInfo:RoundedTag_RoundedTag.__docgenInfo,path:"src/components/Tags/RoundedTag/index.js"});__webpack_exports__.default={title:"Tags/RoundedTag",argTypes:{value:{defaultValue:"Text",control:{type:"text"}},border:{defaultValue:"#fff",control:{type:"color"}},color:{defaultValue:"#fff",control:{type:"color"}},backgroundColor:{defaultValue:"#0a192f",control:{type:"color"}},width:{control:{type:"text"}},height:{control:{type:"text"}}}};var Basic=function Template(args){return Object(jsx_runtime.jsx)(Tags_RoundedTag,Object(objectSpread2.a)({},args))}.bind({});Basic.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <RoundedTag {...args} />"}},Basic.parameters)}},[[464,2,3]]]);