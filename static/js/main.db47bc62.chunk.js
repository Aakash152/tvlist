(this.webpackJsonptvseriesdetails=this.webpackJsonptvseriesdetails||[]).push([[0],{58:function(e,t,a){e.exports=a(74)},63:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=a(25),s=a(26),o=a(28),m=a(27),u=(a(63),{backgroundColor:"black",fontSize:"18px",color:"white",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"10px",width:"100%"}),h={display:"block",padding:"10px",width:"100%"};var p=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:h}),r.a.createElement("div",{style:u}," ",r.a.createElement("span",null,"Author: Aakash Kharche")))},E=a(20),d=a(117),v=function(e){var t=e.series;return r.a.createElement("li",null,r.a.createElement(E.b,{to:"/series/".concat(t.show.id)},r.a.createElement(d.a,{size:"small"},t.show.name)))},b=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{style:{listStyleType:"none",paddingLeft:0}},e.list.map((function(e){return r.a.createElement(v,{series:e,key:e.show.id})}))))},f=a(49),g=a(50),y=a.n(g),j=a(40);function w(){var e=Object(f.a)(["\n  margin-top: 50px;\n"]);return w=function(){return e},e}var x=Object(j.css)(w()),O=function(){return r.a.createElement("div",null,r.a.createElement(y.a,{color:"#36D7B7",margin:5,css:x}))},S=a(119),k=a(116),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={series:[],seriesname:"",isFetching:!1},e.onSeriesListChange=function(t){e.setState({seriesname:t.target.value,isFetching:!0}),fetch("https://api.tvmaze.com/search/shows?q=".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){e.setState({series:t,isFetching:!1})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.seriesname,a=e.isFetching,n=e.series;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"You Can Find Details About your Favorite Tv Series here..!"),r.a.createElement("br",null),r.a.createElement(S.a,null,r.a.createElement(k.a,{name:"SeriesName",label:"Enter Series Name",variant:"outlined",value:t,onChange:this.onSeriesListChange}))),!a&&0===n.length&&""===t.trim()&&r.a.createElement("p",null,"Please enter Series Name"),!a&&0===n.length&&""!==t.trim()&&r.a.createElement("p",null,"No Records Found"),t.length>15&&r.a.createElement("p",null,"Maximum 15 Characters"),a?r.a.createElement(O,null):r.a.createElement(b,{list:this.state.series}))}}]),a}(n.Component),C=a(111),F=a(115),N=a(112),z=a(113),B=a(114),T=(a(73),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={show:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://api.tvmaze.com/shows/".concat(t,"?embed=episodes")).then((function(e){return e.json()})).then((function(t){e.setState({show:t})}))}},{key:"render",value:function(){var e=this.state.show;return r.a.createElement("div",null,null===e&&r.a.createElement(O,null),null!==e&&r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(C.a,{item:!0,xs:12,md:4},r.a.createElement(N.a,null,r.a.createElement(z.a,null,r.a.createElement(B.a,{color:"textSecondary",gutterBottom:!0},e.name),r.a.createElement(B.a,{color:"textSecondary"},"Premiered :",e.premiered),r.a.createElement(B.a,{variant:"body2",component:"p"},"Rating :",e.rating.average),r.a.createElement(B.a,{variant:"body2",component:"p"},"Episodes :",e._embedded.episodes.length),r.a.createElement(B.a,{variant:"body2",component:"p"},r.a.createElement("img",{alt:"show",src:e.image.medium}))),r.a.createElement(F.a,null,r.a.createElement(E.b,{to:"/"},r.a.createElement(d.a,{size:"small"},"Back")))))))}}]),a}(n.Component)),D=a(10),L=function(){return r.a.createElement("div",null,r.a.createElement(E.a,{basename:"/tvlist"},r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/",component:A}),r.a.createElement(D.a,{exact:!0,path:"/series/:id",component:T}))))},J=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"Tv Series Finder")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(L,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p,null))}}]),a}(n.Component),M=document.getElementById("root");c.a.render(r.a.createElement(J,null),M)}},[[58,1,2]]]);
//# sourceMappingURL=main.db47bc62.chunk.js.map