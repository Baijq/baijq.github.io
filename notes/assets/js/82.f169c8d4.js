(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{498:function(n,s,a){"use strict";a.r(s);var t=a(62),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"docker-安装-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-nginx"}},[n._v("#")]),n._v(" Docker 安装 nginx")]),n._v(" "),a("h2",{attrs:{id:"一、nginx安装教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、nginx安装教程"}},[n._v("#")]),n._v(" 一、Nginx安装教程")]),n._v(" "),a("ol",[a("li",[a("p",[n._v("拉取镜像")]),n._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#1. 搜索镜像 search 建议大家去docker搜索，可以看到帮助文档")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" search nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" pull nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" images\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])])]),n._v(" "),a("li",[a("p",[n._v("启动容器")]),n._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("80")]),n._v(":80 --name nginx01 -d nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br")])])]),n._v(" "),a("li",[a("p",[n._v("进入容器，拷贝配置文件出去")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("docker exec -it nginx01 /bin/bash\n\n# 找到nginx位置找首页位置\nwhereis nginx \nfind / -name index.html \n\n# 拷贝配置文件出去\ndocker cp nginx01:/etc/nginx/nginx.conf ./\n\n# 退出容器\nexit\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])])]),n._v(" "),a("li",[a("p",[n._v("卸载容器")]),n._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" stop nginx01\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("rm")]),n._v(" nginx01\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br")])])]),n._v(" "),a("li",[a("p",[n._v("一条命令")]),n._v(" "),a("p",[a("code",[n._v("/root/nginx/nginx.conf")]),n._v(" 我们写好的或者复制过来的配置文件，容器创建会自动读取生效")]),n._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("80")]),n._v(":80 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    --name nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -v /root/nginx/nginx.conf:/etc/nginx/nginx.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -d nginx\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("blockquote",[a("ol",[a("li",[a("code",[n._v("-v /root/nginx/nginx.conf:/etc/nginx/nginx.conf")]),n._v(" 配置文件挂载")]),n._v(" "),a("li",[a("code",[n._v("-v /root/nginx/html:/usr/share/nginx/html")]),n._v(" 挂载资源路径")])])])])]),n._v(" "),a("h2",{attrs:{id:"二、nginx详细使用教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、nginx详细使用教程"}},[n._v("#")]),n._v(" "),a("RouterLink",{attrs:{to:"/core/note/tool/nginx/"}},[n._v("二、Nginx详细使用教程")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);