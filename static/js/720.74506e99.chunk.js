(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[720],{2942:function(t,e,i){"use strict";i(2791);var n=i(7892),s=i.n(n),r=i(184);e.Z=function(t){var e=t.data;return(0,r.jsx)("div",{className:"cell-container",children:(0,r.jsx)("article",{className:"mini-post",children:(0,r.jsxs)("header",{children:[(0,r.jsx)("h3",{className:"title_published",children:(0,r.jsx)("a",{href:e.link,children:e.title})}),(0,r.jsx)("time",{className:"published",children:e.authors}),(0,r.jsxs)("time",{className:"published",children:[s()(e.date).format("MMMM, YYYY")," - ",e.conference]})]})})})}},4720:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return u}});i(2791);var n=i(1523),s=i(6842),r=i(2942),a=[{title:"A Multivocal Literature Review of MLOps Tools and Features",subtitle:"Literature Review of MLOps tools used in state-of-the-practice and comparison of theirs main features.",image:"/images/projects/mlops.png",authors:"G.Recupito, F. Pecorelli, G. Catolino, S. Moreschini\u2217, D. Di Nucci\xa7, F. Palomba\xa7, and D. A. Tamburri,",conference:"Euromicro SEAA 2022",date:"2022-06-1",desc:"To this aim, we conducted a Multivocal Literature Review (MLR) to (i) extract tools that allow for and support the creation of MLOps pipelines and (ii) analyze their main characteristics and features to provide a comprehensive overview of their value. Overall, we investigate the functionalities of 13 MLOps Tools. Our results show that most MLOps Tools support the same features but apply different approaches that can bring different advantages, depending on user requirements.",link:"/personal_doc/publications/2022113916.pdf"},{title:"Unmasking Data Secrets: An Empirical Investigation into Data Smells and Their Impact on Data Quality",subtitle:"Analysis of Data Smells  updating existing SLRs and correlation analysis on Data Quality",image:"/images/projects/mlops.png",authors:"G. Recupito, R. Rapacciuolo, D. Di Nucci, F. Palomba",conference:"CAIN 2024",date:"2024-01-28",desc:"In this paper, we expanded the current body of knowledge on data smells by proposing a two-step investigation into the matter. First, we updated an existing literature review in an effort of cataloguing the currently existing data smells and the tools to detect them. Afterward, we assess the prevalence of data smells and their correlation with data quality metrics. We identify a novel set composed of 12 data smells distributed across three additional categories.",link:"/personal_doc/publications/C2.pdf"},{title:"When Code Smells Meet ML: On the Lifecycle of ML-specific Code Smells in ML-enabled Systems",subtitle:"Investigating the Emergence and Evolution of ML-specific Code Smells",authors:"G. Recupito, G. Giordano, F. Ferrucci, D. Di Nucci, F. Palomba",conference:"MSR 2024 - Registered Report Track",date:"2024-03-12",desc:"The paper investigates the emergence and evolution of ML-specific code smells, which are sub-optimal implementation solutions applied on ML pipelines that may decrease both the quality and maintainability of ML-enabled systems. The authors present a plan to study ML-specific code smells by empirically analyzing their prevalence in real ML-enabled systems, how they are introduced and removed, and their survivability. They propose conducting an exploratory study, mining a large dataset of ML-enabled systems, and analyzing over 400k commits about 337 projects. They plan to track and inspect the introduction and evolution of ML smells through CodeSmile, a novel ML smell detector built for this investigation.",link:"/personal_doc/publications/C3.pdf"},{title:"Toward a Search-Based Approach to Support the Design of Security Tests for Malicious Network Traffic",subtitle:"Investigating the Emergence and Evolution of ML-specific Code Smells",authors:"D. La Gamba, G. Iuliano, G. Recupito, G. Giordano, F. Ferrucci, D. Di Nucci, F. Palomba",conference:"SECUTE 2024 - EASE 2024",date:"2024-04-25",desc:"This ongoing paper introduces a search-based approach using Genetic Algorithms (GAs) to evolve detection rules and detect intrusion attacks.",link:"/personal_doc/publications/W1.pdf"}],o=i(184),u=function(){return(0,o.jsx)(s.Z,{title:"Publications",description:"My Publications and Projects in WIP",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(n.rU,{to:"/projects",children:"Publications"})})})}),a.map((function(t){return(0,o.jsx)(r.Z,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,i=36e5,n="millisecond",s="second",r="minute",a="hour",o="day",u="week",c="month",l="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},v={s:$,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+$(n,2,"0")+":"+$(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,c),r=i-s<0,a=e.clone().add(n+(r?-1:1),c);return+(-(n+(i-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:h,h:a,m:r,s:s,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",y={};y[M]=g;var D=function(t){return t instanceof L},S=function t(e,i,n){var s;if(!e)return M;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),i&&(y[r]=i,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,s=o}return!n&&s&&(M=s),s||!n&&M},b=function(t,e){if(D(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new L(i)},w=v;w.l=S,w.i=D,w.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var L=function(){function g(t){this.$L=S(t.locale,null,!0),this.parse(t)}var $=g.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return w},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var i=b(t);return this.startOf(e)<=i&&i<=this.endOf(e)},$.isAfter=function(t,e){return b(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<b(t)},$.$g=function(t,e,i){return w.u(t)?this[e]:this.set(i,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var i=this,n=!!w.u(e)||e,l=w.p(t),f=function(t,e){var s=w.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return n?s:s.endOf(o)},p=function(t,e){return w.w(i.toDate()[t].apply(i.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},m=this.$W,g=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return n?f(1,0):f(31,11);case c:return n?f(1,g):f(0,g+1);case u:var M=this.$locale().weekStart||0,y=(m<M?m+7:m)-M;return f(n?$-y:$+(6-y),g);case o:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case r:return p(v+"Seconds",2);case s:return p(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var i,u=w.p(t),l="set"+(this.$u?"UTC":""),f=(i={},i[o]=l+"Date",i[h]=l+"Date",i[c]=l+"Month",i[d]=l+"FullYear",i[a]=l+"Hours",i[r]=l+"Minutes",i[s]=l+"Seconds",i[n]=l+"Milliseconds",i)[u],p=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[w.p(t)]()},$.add=function(n,l){var h,f=this;n=Number(n);var p=w.p(l),m=function(t){var e=b(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===o)return m(1);if(p===u)return m(7);var g=(h={},h[r]=e,h[a]=i,h[s]=t,h)[p]||1,$=this.$d.getTime()+n*g;return w.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,o=this.$M,u=i.weekdays,c=i.months,l=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},h=i.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:l(i.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,u,2),ddd:l(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return n.replace(m,(function(t,e){return e||p[t]||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,h,f){var p,m=w.p(h),g=b(n),$=(g.utcOffset()-this.utcOffset())*e,v=this-g,M=w.m(this,g);return M=(p={},p[d]=M/12,p[c]=M,p[l]=M/3,p[u]=(v-$)/6048e5,p[o]=(v-$)/864e5,p[a]=v/i,p[r]=v/e,p[s]=v/t,p)[m]||v,f?M:w.a(M)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return y[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=S(t,e,!0);return n&&(i.$L=n),i},$.clone=function(){return w.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),O=L.prototype;return b.prototype=O,[["$ms",n],["$s",s],["$m",r],["$H",a],["$W",o],["$M",c],["$y",d],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,L,b),t.$i=!0),b},b.locale=S,b.isDayjs=D,b.unix=function(t){return b(1e3*t)},b.en=y[M],b.Ls=y,b.p={},b}()}}]);
//# sourceMappingURL=720.74506e99.chunk.js.map