(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{484:function(s,a,t){"use strict";t.r(a);var n=t(62),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-安装-tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-tomcat"}},[s._v("#")]),s._v(" Docker 安装 Tomcat")]),s._v(" "),t("ol",[t("li",[s._v("拉取镜像")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载 最新版")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull tomcat\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看下载的镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("启动容器")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以后台方式，暴露端口方式，启动运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name tomcat01 tomcat\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试访问有没有问题")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" localhost:8080\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("进入容器")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#根据容器id进入tomcat容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 645596565d3f /bin/bash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看tomcat容器内部内容：")]),s._v("\nroot@645596565d3f:/usr/local/tomcat"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("部署")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入webapps目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发现问题：1、linux命令少了。 2.webapps目录为空 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为了保证最小可运行的环境，其他都删了！")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决方案：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将webapps.dist下的文件都拷贝到webapps下即可")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r webapps.dist/* webapps  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝webapps.dist 内容给webapps")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#再次访问验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" localhost:8080\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);