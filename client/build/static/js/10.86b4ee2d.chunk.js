(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{136:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),l=a(8),c=a(5),o=a(9),i=a(1),s=a.n(i),u=(a(52),a(54)),m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={loader:!0,tabEl:null},a.handleSubmit=function(e){e.preventDefault();var t="localhost"===window.location.hostname?"http://localhost:5000":"";fetch("".concat(t,"/api/ko-tab/ep/").concat(a.refs.inputEndPoint.value,"/akey/").concat(a.refs.inputApiKey.value)).then(function(e){return e.json()}).then(function(e){a.buildSeries(e.koData)}).catch(function(e){return console.error("Error:",e)})},a.buildSeries=function(e){a.setState({tabEl:null});var t=[],n=[];for(var r in e){"0"===r&&(n=e[0].map(function(e,t){var a=Object.keys(e);return s.a.createElement("th",{key:t},a[0])}));var l=e[r].map(function(e,t){var a=Object.values(e);return s.a.createElement("td",{key:t},a[0])});t.push(s.a.createElement("tr",{key:r},l))}var c=s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,n)),s.a.createElement("tbody",null,t));a.setState({tabEl:c})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{header:"Current Inventory"}),s.a.createElement("div",{className:"row placeholders"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 placeholder insight-tab"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{for:"inputEndPoint"},"End Point"),s.a.createElement("input",{type:"text",className:"form-control",id:"inputEndPoint",ref:"inputEndPoint",placeholder:"Enter endpoint"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{for:"inputApiKey"},"API Key"),s.a.createElement("input",{type:"text",className:"form-control",id:"inputApiKey",ref:"inputApiKey",placeholder:"Enter API Key"})),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},this.state.tabEl)))))}}]),t}(i.Component);t.default=m}}]);
//# sourceMappingURL=10.86b4ee2d.chunk.js.map