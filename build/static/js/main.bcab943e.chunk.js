(this["webpackJsonpone-react-app"]=this["webpackJsonpone-react-app"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),o=n(9),s=n.n(o),i=(n(17),n(11)),d=n(6),l=n(2),u=n.n(l),f=n(4),b=n(3),j=function(e){var t=e.color,n=void 0===t?"":t,a=e.text,c=void 0===a?"":a,o=e.onClick,s=void 0===o?function(){}:o;return Object(r.jsx)("button",{className:"justify-end w-1/5 h-10 font-semibold text-center text-white bg-black rounded border-transparent hover:border-gray-900 border-2 "+n,onClick:s,children:c})},x=function(e){var t=e.title,n=void 0===t?"Reminder":t,a=e.hideAddTask,c=void 0===a?function(){}:a,o=e.showaddtask,s=void 0!==o&&o;return Object(r.jsxs)("header",{className:"flex flex-row w-full h-16",children:[Object(r.jsx)("h1",{className:"w-4/5 text-4xl font-medium align-middle",children:n}),Object(r.jsx)(j,{color:s?"bg-red-500":"bg-green-500",text:s?"Cancel":"Add Tasks",onClick:c})]})},p=n(10),h=function(e){var t=e.task,n=void 0===t?[]:t,a=e.onDelete,c=void 0===a?function(){}:a,o=e.onToggle,s=void 0===o?function(){}:o;return Object(r.jsxs)("div",{className:"w-full border-l-8 p-4 my-2 bg-yellow-100 rounded-md hover:bg-yellow-200 select-none ".concat(n.reminder?"border-green-500":"border-transparent"),onDoubleClick:function(){s(n.id)},children:[Object(r.jsxs)("h3",{className:"flex flex-row justify-between w-full text-xl font-semibold",children:[n.text,Object(r.jsx)(p.a,{className:"self-center text-red-300 rounded-full cursor-pointer hover:text-red-600",onClick:function(){return c(n.id)}})]}),Object(r.jsx)("p",{children:n.day})]})},m=function(e){var t=e.tasks,n=void 0===t?[]:t,a=e.onDelete,c=void 0===a?function(){}:a,o=e.onToggle,s=void 0===o?function(){}:o;return Object(r.jsx)(r.Fragment,{children:n.map((function(e){return Object(r.jsx)(h,{task:e,onDelete:c,onToggle:s},e.id)}))})},v=function(e){var t=e.onAdd,n=void 0===t?function(){}:t,c=Object(a.useState)(""),o=Object(b.a)(c,2),s=o[0],i=o[1],d=Object(a.useState)(""),l=Object(b.a)(d,2),u=l[0],f=l[1],j=Object(a.useState)(!1),x=Object(b.a)(j,2),p=x[0],h=x[1];return Object(r.jsxs)("form",{className:"absolute flex flex-col flex-wrap self-end p-5 mb-4 duration-200 transform translate-y-16 border-2 border-gray-500 shadow-2xl w-96 bg-gray-50 rounded-xl add-form",onSubmit:function(e){e.preventDefault(),s?u?(n({text:s,day:u,reminder:p}),i(""),f(""),h(!1)):alert("Please Add Date and Time :)"):alert("Please Add Tasks :)")},children:[Object(r.jsxs)("div",{className:"py-4 form-control",children:[Object(r.jsx)("label",{className:"text-xl font-semibold pr-28",children:"Task"}),Object(r.jsx)("input",{className:"px-2 py-1 font-semibold border-2 border-black rounded-md text-md",type:"text",placeholder:"Add New Task",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(r.jsxs)("div",{className:"py-4 form-control",children:[Object(r.jsx)("label",{className:"pr-5 text-xl font-semibold",children:"Day and Time"}),Object(r.jsx)("input",{className:"px-2 py-1 font-semibold border-2 border-black rounded-md text-md",type:"text",placeholder:"Add Day and Time",value:u,onChange:function(e){return f(e.target.value)}})]}),Object(r.jsxs)("div",{className:"py-3 text-xl font-semibold form-control",children:[Object(r.jsx)("label",{className:"pr-3",children:"Set Reminder?"}),Object(r.jsx)("input",{type:"checkbox",checked:p,value:p.toString(),onChange:function(e){return h(e.currentTarget.checked)}})]}),Object(r.jsx)("input",{className:"py-2 my-4",type:"submit",value:"Save Task"})]})},O=function(){var e=Object(a.useState)([{id:0,text:"",day:"",reminder:!1}]),t=Object(b.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){(function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=function(){var e=Object(f.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(f.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/tasks/".concat(t),{method:"DELETE"});case 2:c(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(u.a.mark((function e(t){var r,a,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:return r=e.sent,a=Object(d.a)(Object(d.a)({},r),{},{reminder:!r.reminder}),e.next=6,fetch("http://localhost:8000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return o=e.sent,e.next=9,o.json();case 9:i=e.sent,c(n.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{reminder:i.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(f.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,c([].concat(Object(i.a)(n),[a])),y(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(a.useState)(Boolean),O=Object(b.a)(h,2),g=O[0],y=O[1];return Object(r.jsx)("div",{className:"flex items-center justify-center w-screen h-screen p-8 m-0 bg-gradient-to-tr from-yellow-500 to-red-300",children:Object(r.jsxs)("div",{className:"flex flex-col w-2/3 h-auto max-w-screen-sm p-12 m-0 bg-white shadow-2xl rounded-xl",children:[Object(r.jsx)(x,{title:"Reminder",hideAddTask:function(){y(!g)},showaddtask:g}),g&&Object(r.jsx)(v,{onAdd:p}),n.length?Object(r.jsx)(m,{tasks:n,onDelete:l,onToggle:j}):"No Tasks Added"]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.bcab943e.chunk.js.map