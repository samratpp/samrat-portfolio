(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[170],{9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},2837:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var a=r(n(1506)),l=r(n(5354)),o=r(n(9713)),u=r(n(7294)),c=r(n(5697)),i=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,(0,o.default)((0,a.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return u.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(u.default.Component);i.propTypes={children:c.default.func.isRequired};var f=i;t.default=f},7441:function(e,t,n){"use strict";var r=n(5318)(n(2837));t.L=r.default},6973:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(7441);function l(){return r.createElement(a.L,null,(function(e){var t=e.theme,n=e.toggleTheme;return r.createElement("label",{className:"switch"},r.createElement("input",{type:"checkbox",onChange:function(e){return n(e.target.checked?"dark":"light")},checked:"dark"===t}),r.createElement("div",null))}))}},8342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7294),a=n(5444),l=n(6973);function o(){return r.createElement(r.Fragment,null,r.createElement(l.Z,null),r.createElement("div",{className:"contact-me-page"},r.createElement("p",null,"I'm probably building a proper contact form right now."),r.createElement("p",null,"For now: ",r.createElement("a",{href:"mailto:samratpandey46@gmail.com"},"samratpandey46@gmail.com")),r.createElement(a.rU,{to:"/",style:{marginTop:"20px",color:"#2997ff"}},"Go back")))}}}]);
//# sourceMappingURL=component---src-pages-contact-me-js-acba095ade9961cbffac.js.map