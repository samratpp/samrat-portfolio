(self.webpackChunksamrat_portfolio=self.webpackChunksamrat_portfolio||[]).push([[170],{9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},2837:function(e,t,n){"use strict";var a=n(5318);t.__esModule=!0,t.default=void 0;var r=a(n(1506)),c=a(n(5354)),l=a(n(9713)),o=a(n(7294)),u=a(n(5697)),i=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,(0,l.default)((0,r.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,c.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return o.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(o.default.Component);i.propTypes={children:u.default.func.isRequired};var m=i;t.default=m},7441:function(e,t,n){"use strict";var a=n(5318)(n(2837));t.L=a.default},6973:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(7441);function c(){return a.createElement(r.L,null,(function(e){var t=e.theme,n=e.toggleTheme;return a.createElement("label",{className:"switch"},a.createElement("input",{type:"checkbox",onChange:function(e){return n(e.target.checked?"dark":"light")},checked:"dark"===t}),a.createElement("div",null))}))}},3375:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7294);function r(){return a.createElement(a.Fragment,null,a.createElement("div",{className:"samrats-footer"},a.createElement("p",null,"Built with React Gatsby")))}},8342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),r=n(5444),c=n(6973),l=n(3375);function o(){return a.createElement(a.Fragment,null,a.createElement(c.Z,null),a.createElement("div",{className:"contact-me-page"},a.createElement("p",null,"Please write to me at:"," ",a.createElement("a",{href:"mailto:samratpandey46@gmail.com"},"samratpandey46@gmail.com"),a.createElement("br",null),a.createElement("i",{style:{opacity:"0.5"}},"I am always up for new and exciting projects.")),a.createElement("p",{style:{marginTop:"10px"}},"Here's my GitHub:"," ",a.createElement("a",{href:"https://github.com/samratpp"},"github.com/samratpp")),a.createElement("p",{style:{marginTop:"10px"}},"You can find me on facebook:"," ",a.createElement("a",{href:"https://www.facebook.com/samratpandeyy/"},"facebook.com/samratpandeyy/")),a.createElement("div",{className:"samrat-contact"},a.createElement(r.rU,{to:"/myWorks"},"view my works⇀"),a.createElement(r.rU,{to:"/"},"go back⇀")),a.createElement(l.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-contact-me-js-ef396baefe88225e08cd.js.map