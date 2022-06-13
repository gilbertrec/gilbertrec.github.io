(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{158:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",c="week",o="month",h="quarter",d="year",f="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},j={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:d,w:c,d:u,D:f,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",v={};v[g]=p;var O=function(t){return t instanceof S},y=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();v[s]&&(i=s),n&&(v[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;v[u]=e,i=u}return!r&&i&&(g=i),i||!r&&g},D=function(t,e){if(O(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},b=j;b.l=y,b.i=O,b.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function p(t){this.$L=y(t.locale,null,!0),this.parse(t)}var M=p.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return b},M.isValid=function(){return!(this.$d.toString()===l)},M.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return D(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<D(t)},M.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,r=!!b.u(e)||e,h=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,p=this.$M,M=this.$D,j="set"+(this.$u?"UTC":"");switch(h){case d:return r?l(1,0):l(31,11);case o:return r?l(1,p):l(0,p+1);case c:var g=this.$locale().weekStart||0,v=(m<g?m+7:m)-g;return l(r?M-v:M+(6-v),p);case u:case f:return $(j+"Hours",0);case a:return $(j+"Minutes",1);case s:return $(j+"Seconds",2);case i:return $(j+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var n,c=b.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[u]=h+"Date",n[f]=h+"Date",n[o]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===d){var m=this.clone().set(f,1);m.$d[l]($),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[b.p(t)]()},M.add=function(r,h){var f,l=this;r=Number(r);var $=b.p(h),m=function(t){var e=D(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===o)return this.set(o,this.$M+r);if($===d)return this.set(d,this.$y+r);if($===u)return m(1);if($===c)return m(7);var p=(f={},f[s]=e,f[a]=n,f[i]=t,f)[$]||1,M=this.$d.getTime()+r*p;return b.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,a=this.$m,u=this.$M,c=n.weekdays,o=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:b.s(u+1,2,"0"),MMM:h(n.monthsShort,u,o,3),MMMM:h(o,u),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,c,2),ddd:h(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:b.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||$[t]||i.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(r,f,l){var $,m=b.p(f),p=D(r),M=(p.utcOffset()-this.utcOffset())*e,j=this-p,g=b.m(this,p);return g=($={},$[d]=g/12,$[o]=g,$[h]=g/3,$[c]=(j-M)/6048e5,$[u]=(j-M)/864e5,$[a]=j/n,$[s]=j/e,$[i]=j/t,$)[m]||j,l?g:b.a(g)},M.daysInMonth=function(){return this.endOf(o).$D},M.$locale=function(){return v[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return b.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},p}(),w=S.prototype;return D.prototype=w,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",o],["$y",d],["$D",f]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,S,D),t.$i=!0),D},D.locale=y,D.isDayjs=O,D.unix=function(t){return D(1e3*t)},D.en=v[g],D.Ls=v,D.p={},D}()},170:function(t,e,n){"use strict";n.r(e);n(1);var r=n(6),i=n(19),s=n(158),a=n.n(s),u=n(0),c=function(t){var e=t.data;return Object(u.jsx)("div",{className:"cell-container",children:Object(u.jsxs)("article",{className:"mini-post",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:Object(u.jsx)("a",{href:e.link,children:e.title})}),Object(u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),Object(u.jsx)("a",{href:e.link,className:"image",children:Object(u.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(u.jsx)("div",{className:"description",children:Object(u.jsx)("p",{children:e.desc})})]})})},o=[{title:"WIP",subtitle:"2015 Best WIP of the year",image:"/images/projects/nearestdollar.jpg",date:"2022-06-11",desc:"SORRY WIP"}];e.default=function(){return Object(u.jsx)(i.a,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:Object(u.jsxs)("article",{className:"post",id:"projects",children:[Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h2",{"data-testid":"heading",children:Object(u.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),o.map((function(t){return Object(u.jsx)(c,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=6.47109604.chunk.js.map