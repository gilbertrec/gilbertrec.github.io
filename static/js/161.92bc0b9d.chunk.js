(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1523),r=n(6842),s=n(7892),a=n.n(s),u=n(184),o=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsx)("article",{className:"mini-post",children:(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{className:"title_published",children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:e.authors}),(0,u.jsxs)("time",{className:"published",children:[a()(e.date).format("MMMM, YYYY")," - ",e.conference]})]})})})},c=[{title:"A Multivocal Literature Review of MLOps Tools and Features",subtitle:"Literature Review of MLOps tools used in state-of-the-practice and comparison of theirs main features.",image:"/images/projects/mlops.png",authors:"F. Pecorelli, G .Catolino, S. Moreschini\u2217, D. Di Nucci\xa7, F. Palomba\xa7, and D. A. Tamburri,",conference:"Euromicro SEAA 2022",date:"2022-06-1",desc:"To this aim, we conducted a Multivocal Literature Review (MLR) to (i) extract tools that allow for and support the creation of MLOps pipelines and (ii) analyze their main characteristics and features to provide a comprehensive overview of their value. Overall, we investigate the functionalities of 13 MLOps Tools. Our results show that most MLOps Tools support the same features but apply different approaches that can bring different advantages, depending on user requirements.",link:"/personal_doc/publications/2022113916.pdf"}],h=function(){return(0,u.jsx)(r.Z,{title:"Publications",description:"My Publications and Projects in WIP",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsx)("div",{className:"title",children:(0,u.jsx)("h2",{"data-testid":"heading",children:(0,u.jsx)(i.rU,{to:"/projects",children:"Publications"})})})}),c.map((function(t){return(0,u.jsx)(o,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",u="day",o="week",c="month",h="quarter",l="year",f="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},M=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+M(i,2,"0")+":"+M(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:u,D:f,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",y={};y[g]=m;var D=function(t){return t instanceof b},w=function t(e,n,i){var r;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(r=s),n&&(y[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,r=u}return!i&&r&&(g=r),r||!i&&g},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},O=v;O.l=w,O.i=D,O.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t)}var M=m.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match($);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return O},M.isValid=function(){return!(this.$d.toString()===d)},M.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return S(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<S(t)},M.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,i=!!O.u(e)||e,h=O.p(t),d=function(t,e){var r=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(u)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,M=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case l:return i?d(1,0):d(31,11);case c:return i?d(1,m):d(0,m+1);case o:var g=this.$locale().weekStart||0,y=(p<g?p+7:p)-g;return d(i?M-y:M+(6-y),m);case u:case f:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case r:return $(v+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),d=(n={},n[u]=h+"Date",n[f]=h+"Date",n[c]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===l){var p=this.clone().set(f,1);p.$d[d]($),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[O.p(t)]()},M.add=function(i,h){var f,d=this;i=Number(i);var $=O.p(h),p=function(t){var e=S(d);return O.w(e.date(e.date()+Math.round(t*i)),d)};if($===c)return this.set(c,this.$M+i);if($===l)return this.set(l,this.$y+i);if($===u)return p(1);if($===o)return p(7);var m=(f={},f[s]=e,f[a]=n,f[r]=t,f)[$]||1,M=this.$d.getTime()+i*m;return O.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},l=function(t){return O.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:O.s(u+1,2,"0"),MMM:h(n.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||$[t]||r.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(i,f,d){var $,p=O.p(f),m=S(i),M=(m.utcOffset()-this.utcOffset())*e,v=this-m,g=O.m(this,m);return g=($={},$[l]=g/12,$[c]=g,$[h]=g/3,$[o]=(v-M)/6048e5,$[u]=(v-M)/864e5,$[a]=v/n,$[s]=v/e,$[r]=v/t,$)[p]||v,d?g:O.a(g)},M.daysInMonth=function(){return this.endOf(c).$D},M.$locale=function(){return y[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},M.clone=function(){return O.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},m}(),x=b.prototype;return S.prototype=x,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",u],["$M",c],["$y",l],["$D",f]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,b,S),t.$i=!0),S},S.locale=w,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=y[g],S.Ls=y,S.p={},S}()}}]);
//# sourceMappingURL=161.92bc0b9d.chunk.js.map