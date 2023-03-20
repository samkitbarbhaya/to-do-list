(()=>{"use strict";const e=e=>{let t="No Date";return{get Name(){return e},set Name(t){e=t},get Date(){return t},set Date(e){t=e}}};function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){t(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===a?new Date(e.getTime()):"number"==typeof e||"[object Number]"===a?new Date(e):("string"!=typeof e&&"[object String]"!==a||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){t(1,arguments);var n=a(e);return n.setHours(0,0,0,0),n}function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var c={};function s(){return c}function i(e,n){var o,c,i,d,l,u,m,p;t(1,arguments);var v=s(),k=r(null!==(o=null!==(c=null!==(i=null!==(d=null==n?void 0:n.weekStartsOn)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(u=l.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==i?i:v.weekStartsOn)&&void 0!==c?c:null===(m=v.locale)||void 0===m||null===(p=m.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==o?o:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=a(e),f=y.getDay(),N=(f<k?7:0)+f-k;return y.setDate(y.getDate()-N),y.setHours(0,0,0,0),y}const d=n=>{let c=[];return{get Name(){return n},set Name(e){n=e},get TaskList(){return c},set TaskList(e){c=e},addTask:t=>{if(c.find((e=>{e.Name})))return;let n=e(t);c.push(n)},removeTask:e=>{c=c.filter((t=>t.Name!==e))},contains:e=>c.find((t=>t.Name===e)),getTask:e=>c.find((t=>t.Name===e)),renameTask:(e,t)=>{c.map((n=>n.Name===t?(n.Name=e,n):n))},getTasksToday:()=>c.filter((e=>function(e){return t(1,arguments),function(e,n){t(2,arguments);var a=o(e),r=o(n);return a.getTime()===r.getTime()}(e,Date.now())}(a(new Date(e.Date))))),getTasksWeek:()=>c.filter((e=>function(e,n){return t(1,arguments),function(e,n,a){t(2,arguments);var o=i(e,a),r=i(n,a);return o.getTime()===r.getTime()}(e,Date.now(),n)}(function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var o=a(e),c=r(n);return isNaN(c)?new Date(NaN):c?(o.setDate(o.getDate()+c),o):o}(e,-r(n))}(a(new Date(e.Date)),1))))}};(()=>{const t=(()=>{let e=[d("Inbox"),d("Today"),d("This Week")];const t=t=>e.find((e=>e.Name===t));return{get ProjectList(){return e},addProject:t=>{e.find((e=>e.Name===t))||e.push(d(t))},removeProject:t=>{e=e.filter((e=>e.Name!==t))},getProject:t,contains:t=>e.find((e=>e.Name===t)),updateTodayProject:()=>{t("Today").TaskList=[],e.forEach((e=>{"This Week"!==e.getName()&&"Today"!==e.getName()&&d.getTasksToday().forEach((n=>{const a=`${n.getName()} (${e.getName()})`;t("Today").addTask(a,n.getDate())}))}))},updateWeekProject:()=>{t("This Week").TaskList=[],e.forEach((e=>{"This Week"!==e.getName()&&"Today"!==e.getName()&&d.getTasksWeek().forEach((n=>{const a=`${n.getName()} (${e.getName()})`;t("This Week").addTask(a,n.getDate())}))}))}}})(),n=e("T1"),a=e("T2"),o=d("P1");t.addProject(o.Name),t.getProject(o.Name).addTask(n.Name),t.getProject(o.Name).addTask(a.Name);const r=(e,n)=>{l(),p(),v(),f(),console.log("Opening",e),[...document.querySelectorAll(".nav-default-button"),...document.querySelectorAll(".nav-user-button")].forEach((e=>e.classList.remove("active"))),n.classList.add("active");const a=t.ProjectList.find((t=>t.Name===e));document.querySelector(".task-list").innerHTML="",document.querySelector("#project-title").textContent=e,a.TaskList.forEach((e=>{E(e.Name,e.Date)}))},c=e=>{L(),v(),f();const t=e.target,n=t.textContent,a=e.target.parentNode.childNodes[5];a.value=n,g(t),b(a)},s=e=>{if("Enter"==e.key){const n=e.target,a=e.target.parentNode.childNodes[3],o=a.textContent,r=n.value,c=a.parentNode.parentNode.parentNode.parentNode.childNodes[1].textContent,s=t.getProject(c);if(""===r)return void alert("Task Name cannot be empty!");if(s.contains(r))return void alert("Task Name cannot be the same!");a.textContent=r,s.getTask(o).Name=r,s.renameTask(r,o),N(a),S(n)}},i=e=>{L(),T(e),h(e)},l=()=>{document.querySelector(".button-add-project").classList.remove("invisible")},u=()=>{document.querySelector(".button-add-project").classList.add("invisible")},m=()=>{document.querySelector(".add-project-input").value="",document.querySelector(".add-project-popup").classList.add("active")},p=()=>{document.querySelector(".add-project-popup").classList.remove("active")},v=()=>{document.querySelector(".button-add-task").classList.remove("invisible")},k=()=>{document.querySelector(".button-add-task").classList.add("invisible")},y=()=>{document.querySelector(".input-add-task-popup").value="",document.querySelector(".add-task-popup").classList.add("active")},f=()=>{document.querySelector(".add-task-popup").classList.remove("active")},N=e=>{e.classList.remove("invisible")},g=e=>{e.classList.add("invisible")},b=e=>{e.classList.add("active")},S=e=>{e.value="",e.classList.remove("active")},T=e=>{e.target.classList.add("invisible")},h=e=>{e.target.parentNode.childNodes[3].classList.add("active")},L=()=>{l(),p(),v(),f(),(()=>{const e=document.querySelectorAll(".task-content");console.log(e),e.forEach((e=>{N(e),S(e.parentNode.childNodes[5])}))})(),document.querySelectorAll(".input-task-name").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".due-date").forEach((e=>{e.classList.remove("invisible")})),document.querySelectorAll(".input-due-date").forEach((e=>{e.classList.remove("active")}))},q=e=>{console.log("creating",e),document.querySelector(".projects-list").innerHTML+=`\n            <button class="nav-user-button" id=${e}>\n                <div class="left-task-panel">\n                    <i class="fa fa-list-check" aria-hidden="true"></i>\n                    <p aria-hidden="true">${e}</p>\n                </div>\n                <div class="right-task-panel">\n                    <i class="fas fa-times"  id="remove-project-icon"></i>\n                </div>\n            </button>\n        `,(()=>{const e=document.querySelectorAll(".nav-user-button"),t=document.querySelectorAll("#remove-project-icon");e.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",(e=>{e.target===e.currentTarget&&(r(e.target.id,e.target),v())}))})),t.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",(e=>{const t=e.target.parentNode.parentNode.id;j(t),x(t)}))}))})()},E=(e,t)=>{document.querySelector(".task-list").innerHTML+=`\n            <button class="button-task">\n            <div class="left-task-panel">\n                <i class="far fa-circle" aria-hidden="true" id="remove-task-icon"></i>\n                <p class="task-content">${e}</p>\n                <input type="text" class="input-task-name">\n            </div>\n            <div class="right-task-panel">\n                <p class="due-date">${t}</p>\n                <input type="date" class="input-due-date">\n                <i class="fas fa-times" aria-hidden="true"></i>\n            </div>\n            </button>\n        `,(()=>{const e=document.querySelectorAll("#remove-task-icon"),t=document.querySelectorAll(".task-content"),n=document.querySelectorAll(".input-task-name"),a=document.querySelectorAll(".due-date");e.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",(e=>{const t=e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].textContent,n=e.target.parentNode.childNodes[3].textContent,a=e.target.parentNode.parentNode;D(a),A(n,t)}))})),t.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",c)})),n.forEach((e=>{removeEventListener("keypress",e),e.addEventListener("keypress",s)})),a.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",i)}))})()},j=e=>{const t=document.querySelector(".projects-list"),n=document.querySelector(`#${e}`);t.removeChild(n)},D=e=>{document.querySelector(".task-list").removeChild(e)},w=()=>{const e=document.querySelector(".add-project-input").value;""!==e?t.contains(e)?alert("Project Name already taken!"):(t.addProject(e),q(e),l(),p()):alert("Project Name cannot be Empty!")},P=()=>{const n=document.querySelector(".input-add-task-popup").value;if(""==n)return void alert("Task Name cannot be Blank!");const a=document.querySelector("#project-title").innerHTML,o=t.getProject(a);if(o.contains(n))return void alert("Task Name already taken!");const r=e(n);o.addTask(r.Name),E(r.Name,r.Date),v(),f()},x=e=>{t.removeProject(e)},A=(e,n)=>{t.getProject(n).removeTask(e)};return{loadHomePage:()=>{t.ProjectList.forEach((e=>{"Inbox"!==e.Name&&"Today"!==e.Name&&"This Week"!==e.Name&&q(e.Name)})),(()=>{const e=document.querySelector("#inbox-button"),t=document.querySelector("#today-button"),n=document.querySelector("#this-week-button");e.addEventListener("click",(e=>{r("Inbox",e.target),v()})),t.addEventListener("click",(e=>{r("Today",e.target),k()})),n.addEventListener("click",(e=>{r("This Week",e.target),k()}))})(),r("Inbox",document.querySelector("#inbox-button")),(()=>{const e=document.querySelector("#button-add-project"),t=document.querySelector(".add-project-popup-add-button"),n=document.querySelector(".add-project-popup-cancel-button");e.addEventListener("click",(()=>{L(),u(),m()})),t.addEventListener("click",w),n.addEventListener("click",(()=>{l(),p()}))})(),(()=>{const e=document.querySelector(".button-add-task"),t=document.querySelector(".button-add-task-popup"),n=document.querySelector(".button-cancel-task-popup");e.addEventListener("click",(()=>{L(),k(),y()})),t.addEventListener("click",P),n.addEventListener("click",(()=>{f(),v()}))})()}}})().loadHomePage()})();