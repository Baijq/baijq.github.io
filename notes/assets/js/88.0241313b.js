(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{505:function(a,t,e){"use strict";e.r(t);var r=e(62),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"linux-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-命令"}},[a._v("#")]),a._v(" linux 命令")]),a._v(" "),e("h2",{attrs:{id:"部分操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分操作"}},[a._v("#")]),a._v(" 部分操作")]),a._v(" "),e("h3",{attrs:{id:"一、功能划分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、功能划分"}},[a._v("#")]),a._v(" 一、功能划分")]),a._v(" "),e("h4",{attrs:{id:"_1-防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-防火墙"}},[a._v("#")]),a._v(" 1. 防火墙")]),a._v(" "),e("ol",[e("li",[a._v("检查防火墙是否开放了3306端口")])]),a._v(" "),e("blockquote",[e("ol",[e("li",[e("p",[a._v("查看状态防火墙状态 "),e("code",[a._v("firewall-cmd --state")])])]),a._v(" "),e("li",[e("p",[a._v("启动防火墙 "),e("code",[a._v("systemctl start firewalld.service")])])]),a._v(" "),e("li",[e("p",[a._v("关闭防火墙 "),e("code",[a._v("systemctl stop firewalld.service")])])]),a._v(" "),e("li",[e("p",[a._v("重启防火墙 "),e("code",[a._v("firewall-cmd --reload")])])]),a._v(" "),e("li",[e("p",[a._v("查看端口是否开启 "),e("code",[a._v("firewall-cmd --query-port=80/tcp")])])]),a._v(" "),e("li",[e("p",[a._v("查看防火墙开放的端口 "),e("code",[a._v("firewall-cmd --list-ports")])])]),a._v(" "),e("li",[e("p",[a._v("开放端口")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("firewall-cmd --zone=public --add-port=80/tcp --permanent")])]),a._v(" "),e("li",[e("code",[a._v("firewall-cmd --add-port=8080/tcp")])]),a._v(" "),e("li",[e("code",[a._v("firewall-cmd --add-port=8080/tcp --permanent")])])])]),a._v(" "),e("li",[e("p",[a._v("关闭端口 "),e("code",[a._v("firewall-cmd --zone=public --remove-port=8080/tcp --permanent")])])])])]),a._v(" "),e("h4",{attrs:{id:"_2-java部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-java部署"}},[a._v("#")]),a._v(" 2. java部署")]),a._v(" "),e("h5",{attrs:{id:"linux下java环境变量-linux下jdk配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux下java环境变量-linux下jdk配置"}},[a._v("#")]),a._v(" "),e("RouterLink",{attrs:{to:"/core/note/java/base/java环境变量配置.html"}},[a._v("✔️Linux下Java环境变量")]),a._v(" Linux下JDK配置")],1),a._v(" "),e("ul",[e("li",[a._v("后台启动jar包 "),e("code",[a._v("nohup java -jar demo.jar &")]),a._v(" 会在当前路径下生成一个nohup.out的日志文件")]),a._v(" "),e("li",[a._v("日志文件指定路径 "),e("code",[a._v("nohup java -jar demo.jar >mylog.log 2>&1 &")])]),a._v(" "),e("li",[a._v("不输出日志 "),e("code",[a._v("nohup java -jar demo.jar >/dev/null 2>&1 &")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);