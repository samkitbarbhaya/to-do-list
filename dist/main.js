(()=>{"use strict";const e=(e,t)=>{let n=t;return{get Name(){return e},set Name(t){e=t},get Date(){return n},set Date(e){n=e}}};function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){t(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===a?new Date(e.getTime()):"number"==typeof e||"[object Number]"===a?new Date(e):("string"!=typeof e&&"[object String]"!==a||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){t(1,arguments);var n=a(e);return n.setHours(0,0,0,0),n}var r={};function c(){return r}function s(e,n){var o,r,s,d,i,l,u,m;t(1,arguments);var p=c(),v=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(null!==(o=null!==(r=null!==(s=null!==(d=null==n?void 0:n.weekStartsOn)&&void 0!==d?d:null==n||null===(i=n.locale)||void 0===i||null===(l=i.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==s?s:p.weekStartsOn)&&void 0!==r?r:null===(u=p.locale)||void 0===u||null===(m=u.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==o?o:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var k=a(e),N=k.getDay(),y=(N<v?7:0)+N-v;return k.setDate(k.getDate()-y),k.setHours(0,0,0,0),k}const d=n=>{let r=[];return{get Name(){return n},set Name(e){n=e},get TaskList(){return r},set TaskList(e){r=e},addTask:(t,n)=>{if(r.find((e=>{e.Name})))return;let a=e(t,n);r.push(a)},removeTask:e=>{r=r.filter((t=>t.Name!==e))},contains:e=>r.find((t=>t.Name===e)),getTask:e=>r.find((t=>t.Name===e)),renameTask:(e,t)=>{r.map((n=>n.Name===t?(n.Name=e,n):n))},getTasksToday:()=>r.filter((e=>{if(null==e.Date)return!1;const n=e.Date.split("-")[0],r=e.Date.split("-")[1],c=e.Date.split("-")[2];return function(e){return t(1,arguments),function(e,n){t(2,arguments);var a=o(e),r=o(n);return a.getTime()===r.getTime()}(e,Date.now())}(a(new Date(n,r-1,c)))})),getTasksWeek:()=>r.filter((e=>{if(null==e.Date)return!1;const n=e.Date.split("-")[0],o=e.Date.split("-")[1],r=e.Date.split("-")[2];return function(e,n){return t(1,arguments),function(e,n,a){t(2,arguments);var o=s(e,a),r=s(n,a);return o.getTime()===r.getTime()}(e,Date.now(),n)}(a(new Date(n,o-1,r)))}))}};(()=>{const t=(()=>{let e=[d("Inbox"),d("Today"),d("This Week")];const t=t=>e.find((e=>e.Name===t));return{get ProjectList(){return e},addProject:t=>{e.find((e=>e.Name===t))||e.push(d(t))},removeProject:t=>{e=e.filter((e=>e.Name!==t))},getProject:t,contains:t=>e.find((e=>e.Name===t)),updateTodayProject:()=>{t("Today").TaskList=[],e.forEach((e=>{"This Week"!==e.Name&&"Today"!==e.Name&&e.getTasksToday().forEach((n=>{const a=`${n.Name} (${e.Name})`;t("Today").addTask(a,n.Date)}))}))},updateWeekProject:()=>{t("This Week").TaskList=[],e.forEach((e=>{"This Week"!==e.Name&&"Today"!==e.Name&&e.getTasksWeek().forEach((n=>{const a=`${n.Name} (${e.Name})`;t("This Week").addTask(a,n.Date)}))}))}}})(),n=e("T1","No Date"),a=e("T2","No Date"),o=d("P1");t.addProject(o.Name),t.getProject(o.Name).addTask(n.Name,"No Date"),t.getProject(o.Name).addTask(a.Name,"No Date");const r=(e,n)=>{u(),v(),k(),f(),"Today"!==e&&"This Week"!=e||(t.updateTodayProject(),t.updateWeekProject()),[...document.querySelectorAll(".nav-default-button"),...document.querySelectorAll(".nav-user-button")].forEach((e=>e.classList.remove("active"))),n.classList.add("active");const a=t.ProjectList.find((t=>t.Name===e));document.querySelector(".task-list").innerHTML="",document.querySelector("#project-title").textContent=e,a.TaskList.forEach((e=>{j(e.Name,e.Date)}))},c=e=>{E(),k(),f();const t=e.target,n=t.textContent,a=e.target.parentNode.childNodes[5];a.value=n,b(t),h(a)},s=e=>{if("Enter"==e.key){const n=e.target,a=e.target.parentNode.childNodes[3],o=a.textContent,r=n.value,c=a.parentNode.parentNode.parentNode.parentNode.childNodes[1].textContent,s=t.getProject(c);if(""===r)return void alert("Task Name cannot be empty!");if(s.contains(r))return void alert("Task Name cannot be the same!");a.textContent=r,s.getTask(o).Name=r,s.renameTask(r,o),g(a),T(n)}},i=e=>{E(),S(e),L(e)},l=e=>{const t=e.target.value;e.target.parentNode.childNodes[1].textContent=t;const n=e.target.parentNode.parentNode.childNodes[1].childNodes[3].textContent,a=e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].textContent;W(a,n,t),E()},u=()=>{document.querySelector(".button-add-project").classList.remove("invisible")},m=()=>{document.querySelector(".button-add-project").classList.add("invisible")},p=()=>{document.querySelector(".add-project-input").value="",document.querySelector(".add-project-popup").classList.add("active")},v=()=>{document.querySelector(".add-project-popup").classList.remove("active")},k=()=>{const e=document.querySelector(".button-add-task"),t=e.parentNode.childNodes[1].textContent;"Today"!=t&&"This Week"!=t&&e.classList.remove("invisible")},N=()=>{document.querySelector(".button-add-task").classList.add("invisible")},y=()=>{document.querySelector(".input-add-task-popup").value="",document.querySelector(".add-task-popup").classList.add("active")},f=()=>{document.querySelector(".add-task-popup").classList.remove("active")},g=e=>{e.classList.remove("invisible")},b=e=>{e.classList.add("invisible")},h=e=>{e.classList.add("active")},T=e=>{e.value="",e.classList.remove("active")},S=e=>{e.target.classList.add("invisible")},L=e=>{e.target.parentNode.childNodes[3].classList.add("active")},E=()=>{u(),v(),k(),f(),(()=>{const e=document.querySelectorAll(".task-content");console.log(e),e.forEach((e=>{g(e),T(e.parentNode.childNodes[5])}))})(),document.querySelectorAll(".input-task-name").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".due-date").forEach((e=>{e.classList.remove("invisible")})),document.querySelectorAll(".input-due-date").forEach((e=>{e.classList.remove("active")}))},q=e=>{console.log("creating",e),document.querySelector(".projects-list").innerHTML+=`\n            <button class="nav-user-button" id=${e}>\n                <div class="left-task-panel">\n                    <i class="fa fa-list-check" aria-hidden="true"></i>\n                    <p aria-hidden="true">${e}</p>\n                </div>\n                <div class="right-task-panel">\n                    <i class="fas fa-times"  id="remove-project-icon"></i>\n                </div>\n            </button>\n        `,(()=>{const e=document.querySelectorAll(".nav-user-button"),t=document.querySelectorAll("#remove-project-icon");e.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",(e=>{e.target===e.currentTarget&&(r(e.target.id,e.target),k())}))})),t.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",(e=>{const t=e.target.parentNode.parentNode.id;D(t),A(t)}))}))})()},j=(e,t)=>{document.querySelector(".task-list").innerHTML+=`\n            <button class="button-task">\n            <div class="left-task-panel">\n                <i class="far fa-circle" aria-hidden="true" id="remove-task-icon"></i>\n                <p class="task-content">${e}</p>\n                <input type="text" class="input-task-name">\n            </div>\n            <div class="right-task-panel">\n                <p class="due-date">${t}</p>\n                <input type="date" class="input-due-date">\n                <i class="fas fa-times" aria-hidden="true"></i>\n            </div>\n            </button>\n        `,(()=>{const e=document.querySelectorAll("#remove-task-icon"),t=document.querySelectorAll(".task-content"),n=document.querySelectorAll(".input-task-name"),a=document.querySelectorAll(".due-date"),o=document.querySelectorAll(".input-due-date");e.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",(e=>{const t=e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].textContent,n=e.target.parentNode.childNodes[3].textContent,a=e.target.parentNode.parentNode;P(a),C(n,t)}))})),t.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",c)})),n.forEach((e=>{removeEventListener("keypress",e),e.addEventListener("keypress",s)})),a.forEach((e=>{removeEventListener("click",e),e.addEventListener("click",i)})),o.forEach((e=>{removeEventListener("input",e),e.addEventListener("input",l)}))})()},D=e=>{const t=document.querySelector(".projects-list"),n=document.querySelector(`#${e}`);t.removeChild(n)},P=e=>{document.querySelector(".task-list").removeChild(e)},w=()=>{const e=document.querySelector(".add-project-input").value;""!==e?t.contains(e)?alert("Project Name already taken!"):(t.addProject(e),q(e),u(),v()):alert("Project Name cannot be Empty!")},x=()=>{const n=document.querySelector(".input-add-task-popup").value;if(""==n)return void alert("Task Name cannot be Blank!");const a=document.querySelector("#project-title").innerHTML,o=t.getProject(a);if(o.contains(n))return void alert("Task Name already taken!");const r=e(n,"No Date");o.addTask(r.Name,r.Date),j(r.Name,r.Date),k(),f()},A=e=>{t.removeProject(e)},C=(e,n)=>{t.getProject(n).removeTask(e)},W=(e,n,a)=>{t.getProject(e).getTask(n).Date=a};return{loadHomePage:()=>{t.ProjectList.forEach((e=>{"Inbox"!==e.Name&&"Today"!==e.Name&&"This Week"!==e.Name&&q(e.Name)})),(()=>{const e=document.querySelector("#inbox-button"),t=document.querySelector("#today-button"),n=document.querySelector("#this-week-button");e.addEventListener("click",(e=>{r("Inbox",e.target),k()})),t.addEventListener("click",(e=>{r("Today",e.target),N()})),n.addEventListener("click",(e=>{r("This Week",e.target),N()}))})(),r("Inbox",document.querySelector("#inbox-button")),(()=>{const e=document.querySelector("#button-add-project"),t=document.querySelector(".add-project-popup-add-button"),n=document.querySelector(".add-project-popup-cancel-button");e.addEventListener("click",(()=>{E(),m(),p()})),t.addEventListener("click",w),n.addEventListener("click",(()=>{u(),v()}))})(),(()=>{const e=document.querySelector(".button-add-task"),t=document.querySelector(".button-add-task-popup"),n=document.querySelector(".button-cancel-task-popup");e.addEventListener("click",(()=>{E(),N(),y()})),t.addEventListener("click",x),n.addEventListener("click",(()=>{f(),k()}))})()}}})().loadHomePage()})();