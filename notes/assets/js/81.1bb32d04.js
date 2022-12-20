(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{499:function(n,s,e){"use strict";e.r(s);var t=e(62),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"docker安装jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装jenkins"}},[n._v("#")]),n._v(" Docker安装Jenkins")]),n._v(" "),e("ol",[e("li",[n._v("拉取Jenkins镜像 "),e("code",[n._v("docker pull jenkins/jenkins:lts")])]),n._v(" "),e("li",[n._v("新建挂载目录 "),e("code",[n._v("mkdir -p ~/jenkins_home")])]),n._v(" "),e("li",[n._v("修改权限 "),e("code",[n._v("chown -R 1000 /root/jenkins_home")])]),n._v(" "),e("li",[n._v("启动容器"),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" run -di "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n--name"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("jenkins "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n-p "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("8080")]),n._v(":8080 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n-v /root/jenkins_home/:/var/jenkins_home "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n-v /opt/software/jdk1.8.0_181:/opt/software/jdk1.8.0_181 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n-v /opt/software/apache-maven-3.8.6:/opt/software/apache-maven-3.8.6 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n-v "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("which")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v(")")])]),n._v(":/usr/bin/docker "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n-v /var/run/docker.sock:/var/run/docker.sock "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\njenkins/jenkins:lts\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br")])])])]),n._v(" "),e("blockquote",[e("p",[n._v("挂载jenkins_home "),e("code",[n._v("-v /root/jenkins_home/:/var/jenkins_home")]),e("br"),n._v("\n挂载宿主机的java环境 "),e("code",[n._v("/opt/software/jdk1.8.0_181:/opt/software/jdk1.8.0_181")]),e("br"),n._v("\n挂载宿主机的maven环境 "),e("code",[n._v("-v /opt/software/apache-maven-3.8.6:/opt/software/apache-maven-3.8.6")]),e("br"),n._v("\n挂载宿主机的Docker，Jenkis可以使用Docker了  "),e("code",[n._v("-v $(which docker):/usr/bin/docker")]),n._v(" "),e("code",[n._v("-v /var/run/docker.sock:/var/run/docker.sock")])])]),n._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[n._v("页面初始化，插件安装等等")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/2045678?from=15425",target:"_blank",rel:"noopener noreferrer"}},[n._v("参考，不得不说，人家写的真好，必须点赞"),e("OutboundLink")],1)]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("Jenkins")]),n._v(" "),e("p",[e("code",[n._v("持续集成")]),n._v(" "),e("code",[n._v("自动化打包、部署、发布")])])]),n._v(" "),e("p",[n._v("✔️开发本地开发完成"),e("br"),n._v("\n✔️提交代码到Git仓库(gitlab、gitee、github)"),e("br"),n._v("\n✔️Jenkins监听是否有提交"),e("br"),n._v("\n✔️Jenkins拉取Git仓库代码到Jenkins工作目录"),e("br"),n._v("\n✔️Jenkins调用Maven打包，编译等"),e("br"),n._v("\n✔️Jenkins制作Docker镜像"),e("br"),n._v("\n✔️Jenkins上传镜像到镜像库，如Harbor"),e("br"),n._v("\n✔️Jenkins通过SSH登录应用服务器"),e("br"),n._v("\n✔️Jenkins拉取镜像"),e("br"),n._v("\n✔️Jenkins通过运行镜像"),e("br"),n._v("\n✔️Jenkins控制每个应用服务器都启动容器"),e("br"),n._v("\n✔️Jenkins发布完成")]),n._v(" "),e("p",[n._v("所以有了jenkins之后，开发只需要关注开发代码，然后提交就行了。剩下的操作全都交给jenkins处理")])])}),[],!1,null,null,null);s.default=a.exports}}]);