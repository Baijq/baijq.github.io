(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{442:function(a,t,e){"use strict";e.r(t);var _=e(62),s=Object(_.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mysql数据库信息统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库信息统计"}},[a._v("#")]),a._v(" MySQL数据库信息统计")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("information_schema 存放了其他的数据库的信息"),e("br"),a._v(" "),e("code",[a._v("USE information_schema;")])])]),a._v(" "),e("li",[e("p",[a._v("查询所有数据的大小"),e("br"),a._v(" "),e("code",[a._v("SELECT concat(round(sum(data_length/1024/1024),2),'MB') AS data FROM TABLES;")])])]),a._v(" "),e("li",[e("p",[a._v("查询biubiu库的大小"),e("br"),a._v(" "),e("code",[a._v("SELECT concat(round(sum(data_length/1024/1024),2),'MB') AS data FROM TABLES WHERE table_schema='biubiu';")])])]),a._v(" "),e("li",[e("p",[a._v("查看biubiu.tb_user的大小"),e("br"),a._v(" "),e("code",[a._v("SELECT concat(round(sum(data_length/1024/1024),2),'MB') AS data FROM TABLES WHERE table_schema='biubiu' AND table_name='tb_user';")])])]),a._v(" "),e("li",[e("p",[a._v("查询mysql数据库中哪些表的数据量最大"),e("br"),a._v(" "),e("code",[a._v("SELECT table_schema,table_name,table_rows FROM tables ORDER BY table_rows ASC LIMIT 10;")])])]),a._v(" "),e("li",[e("p",[a._v("查询某个表的数据量"),e("br"),a._v(" "),e("code",[a._v("SELECT table_schema,table_name,table_rows FROM tables WHERE table_schema='biubiu' AND table_name='sys_user' ORDER BY table_rows ASC LIMIT 10;")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);