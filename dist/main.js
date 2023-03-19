(()=>{"use strict";const e=e=>{let t="No Date";return{get Name(){return e},set Name(t){e=t},get Date(){return t},set Date(e){t=e}}};function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){t(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===a?new Date(e.getTime()):"number"==typeof e||"[object Number]"===a?new Date(e):("string"!=typeof e&&"[object String]"!==a||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){t(1,arguments);var n=a(e);return n.setHours(0,0,0,0),n}function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var c={};function s(){return c}function d(e,n){var o,c,d,i,u,l,m,p;t(1,arguments);var v=s(),k=r(null!==(o=null!==(c=null!==(d=null!==(i=null==n?void 0:n.weekStartsOn)&&void 0!==i?i:null==n||null===(u=n.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==d?d:v.weekStartsOn)&&void 0!==c?c:null===(m=v.locale)||void 0===m||null===(p=m.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==o?o:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=a(e),f=y.getDay(),g=(f<k?7:0)+f-k;return y.setDate(y.getDate()-g),y.setHours(0,0,0,0),y}const i=n=>{let c=[];return{get Name(){return n},set Name(e){n=e},get TaskList(){return c},set TaskList(e){c=e},addTask:t=>{if(c.find((e=>{e.Name})))return;let n=e(t);c.push(n)},removeTask:e=>{c=c.filter((t=>t.Name!==e))},contains:e=>c.find((t=>t.Name===e)),getTask:e=>c.find((t=>t.Name===e)),getTasksToday:()=>c.filter((e=>function(e){return t(1,arguments),function(e,n){t(2,arguments);var a=o(e),r=o(n);return a.getTime()===r.getTime()}(e,Date.now())}(a(new Date(e.Date))))),getTasksWeek:()=>c.filter((e=>function(e,n){return t(1,arguments),function(e,n,a){t(2,arguments);var o=d(e,a),r=d(n,a);return o.getTime()===r.getTime()}(e,Date.now(),n)}(function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var o=a(e),c=r(n);return isNaN(c)?new Date(NaN):c?(o.setDate(o.getDate()+c),o):o}(e,-r(n))}(a(new Date(e.Date)),1))))}};(()=>{const t=(()=>{let e=[i("Inbox"),i("Today"),i("This Week")];const t=t=>e.find((e=>e.Name===t));return{get ProjectList(){return e},addProject:t=>{e.find((e=>e.Name===t))||e.push(i(t))},removeProject:t=>{e=e.filter((e=>e.Name!==t))},getProject:t,contains:t=>e.find((e=>e.Name===t)),updateTodayProject:()=>{t("Today").TaskList=[],e.forEach((e=>{"This Week"!==e.getName()&&"Today"!==e.getName()&&i.getTasksToday().forEach((n=>{const a=`${n.getName()} (${e.getName()})`;t("Today").addTask(a,n.getDate())}))}))},updateWeekProject:()=>{t("This Week").TaskList=[],e.forEach((e=>{"This Week"!==e.getName()&&"Today"!==e.getName()&&i.getTasksWeek().forEach((n=>{const a=`${n.getName()} (${e.getName()})`;t("This Week").addTask(a,n.getDate())}))}))}}})(),n=e("T1"),a=e("T2"),o=i("P1");t.addProject(o.Name),t.getProject(o.Name).addTask(n.Name),t.getProject(o.Name).addTask(a.Name);const r=(e,n)=>{s(),l(),m(),k(),console.log("Opening",e),[...document.querySelectorAll(".nav-default-button"),...document.querySelectorAll(".nav-user-button")].forEach((e=>e.classList.remove("active"))),n.classList.add("active");const a=t.ProjectList.find((t=>t.Name===e));document.querySelector(".task-list").innerHTML="",document.querySelector("#project-title").textContent=e,a.TaskList.forEach((e=>{f(e.Name,e.Date)}))},c=()=>{const e=document.querySelector("#inbox-button"),t=document.querySelector("#today-button"),n=document.querySelector("#this-week-button"),a=document.querySelectorAll(".nav-user-button"),o=document.querySelectorAll("#remove-project-icon");e.addEventListener("click",(e=>{r("Inbox",e.target),m()})),t.addEventListener("click",(e=>{r("Today",e.target),p()})),n.addEventListener("click",(e=>{r("This Week",e.target),p()})),a.forEach((e=>{e.addEventListener("click",(e=>{e.target===e.currentTarget&&(r(e.target.id,e.target),m())}))})),o.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.parentNode.parentNode.id;g(t),S(t)}))}))},s=()=>{document.querySelector(".button-add-project").classList.remove("invisible")},d=()=>{document.querySelector(".button-add-project").classList.add("invisible")},u=()=>{document.querySelector(".add-project-input").value="",document.querySelector(".add-project-popup").classList.add("active")},l=()=>{document.querySelector(".add-project-popup").classList.remove("active")},m=()=>{document.querySelector(".button-add-task").classList.remove("invisible")},p=()=>{document.querySelector(".button-add-task").classList.add("invisible")},v=()=>{document.querySelector(".input-add-task-popup").value="",document.querySelector(".add-task-popup").classList.add("active")},k=()=>{document.querySelector(".add-task-popup").classList.remove("active")},y=e=>{console.log("creating",e),document.querySelector(".projects-list").innerHTML+=`\n            <button class="nav-user-button" id=${e}>\n                <div class="left-task-panel">\n                    <i class="fa fa-list-check" aria-hidden="true"></i>\n                    <p aria-hidden="true">${e}</p>\n                </div>\n                <div class="right-task-panel">\n                    <i class="fas fa-times"  id="remove-project-icon"></i>\n                </div>\n            </button>\n        `,c()},f=(e,n)=>{document.querySelector(".task-list").innerHTML+=`\n            <button class="button-task">\n            <div class="left-task-panel">\n                <i class="far fa-circle" aria-hidden="true" id="remove-task-icon"></i>\n                <p class="task-content">${e}</p>\n                <input type="text" class="input-task-name">\n            </div>\n            <div class="right-task-panel">\n                <p class="due-date">${n}</p>\n                <input type="date" class="input-due-date">\n                <i class="fas fa-times" aria-hidden="true"></i>\n            </div>\n            </button>\n        `,(()=>{const e=document.querySelectorAll("#remove-task-icon"),n=document.querySelectorAll(".task-content");e.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].textContent,n=e.target.parentNode.childNodes[3].textContent,a=e.target.parentNode.parentNode;N(a),h(n,t)}))})),n.forEach((e=>{e.addEventListener("click",(e=>{const n=e.target,a=n.textContent,o=e.target.parentNode.childNodes[5];o.value=a,(e=>{e.classList.add("invisible")})(n),(e=>{e.classList.add("active")})(o),addEventListener("keypress",(e=>{if("Enter"==e.key){const r=o.value;if(r===a)return void alert("Name of the Task cannot be the same!");const c=e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].textContent,s=t.getProject(c);if(s.contains(r))return void alert("This name has already been taken by another task!");n.textContent=o.value,s.getTask(a).Name=r,(e=>{e.classList.remove("invisible")})(n),(e=>{e.value="",e.classList.remove("active")})(o)}}))}))}))})()},g=e=>{const t=document.querySelector(".projects-list"),n=document.querySelector(`#${e}`);t.removeChild(n)},N=e=>{document.querySelector(".task-list").removeChild(e)},b=()=>{const e=document.querySelector(".add-project-input").value;""!==e?t.contains(e)?alert("Project Name already taken!"):(t.addProject(e),y(e),s(),l()):alert("Project Name cannot be Empty!")},T=()=>{const n=document.querySelector(".input-add-task-popup").value;if(""==n)return void alert("Task Name cannot be Blank!");const a=document.querySelector("#project-title").innerHTML,o=t.getProject(a);if(o.contains(n))return void alert("Task Name already taken!");const r=e(n);o.addTask(r.Name),f(r.Name,r.Date),m(),k()},S=e=>{t.removeProject(e)},h=(e,n)=>{t.getProject(n).removeTask(e)};return{loadHomePage:()=>{t.ProjectList.forEach((e=>{"Inbox"!==e.Name&&"Today"!==e.Name&&"This Week"!==e.Name&&y(e.Name)})),c(),r("Inbox",document.querySelector("#inbox-button")),(()=>{const e=document.querySelector("#button-add-project"),t=document.querySelector(".add-project-popup-add-button"),n=document.querySelector(".add-project-popup-cancel-button");e.addEventListener("click",(()=>{d(),u(),m(),k()})),t.addEventListener("click",b),n.addEventListener("click",(()=>{s(),l()}))})(),(()=>{const e=document.querySelector(".button-add-task"),t=document.querySelector(".button-add-task-popup"),n=document.querySelector(".button-cancel-task-popup");e.addEventListener("click",(()=>{s(),l(),p(),v()})),t.addEventListener("click",T),n.addEventListener("click",(()=>{k(),m()}))})()}}})().loadHomePage()})();