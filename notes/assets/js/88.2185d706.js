(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{499:function(s,a,n){"use strict";n.r(a);var t=n(62),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"docker-部署运行-springboot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署运行-springboot"}},[s._v("#")]),s._v(" Docker 部署运行 SpringBoot")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("拉取项目打包镜像")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/baijq/my-admin.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-admin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打包")]),s._v("\nmvn clean package -Dmaven.test.skip"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("上传jar包到linux，编写 Dockerfile")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("FROM openjdk:8-jre\nCOPY *.jar /app.jar\nCMD "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--server.port=8848"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nEXPOSE "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\nENTRYPOINT "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app.jar"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/Oxc3ZT.png",alt:"Oxc3ZT.png"}})])]),s._v(" "),n("li",[n("p",[s._v("构建镜像，会自动执行 "),n("code",[s._v("Dockerfile")]),s._v(" 文件")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建镜像，注意最后有个点 docker build -t [镜像名:Tag] .")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t my-admin:1.0 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/OxcYi4.png",alt:"OxcYi4.png"}})])]),s._v(" "),n("li",[n("p",[s._v("启动容器")]),s._v(" "),n("div",{staticClass:"language-shelll line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run --name my-admin \\ \n-p 8848:8848  \\\n--link mysql  \\\n-d my-admin:1.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Docker容器和容器之间访问，可以使用 "),n("code",[s._v("--link")]),s._v(" 关联docker容器，如my-admin要连接redis：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#jdbc:mysql://mysql:3306/my_admin?useUnicode=true&useSSL=false&characterEncoding=utf8&serverTimezone=UTC")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#jdbc:mysql://mysqldb:3306/my_admin?useUnicode=true&useSSL=false&characterEncoding=utf8&serverTimezone=UTC")]),s._v("\n\n--link mysql \n--link mysql:mysqldb  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/OxclLV.png",alt:"OxclLV.png"}})])]),s._v(" "),n("li",[n("p",[s._v("查看日志")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看日志")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs my-admin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看实时日志")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -f my-admin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/OxctJJ.png",alt:"OxctJJ.png"}})])]),s._v(" "),n("li",[n("p",[s._v("测试系统")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/Oxc8dU.png",alt:"Oxc8dU.png"}})])])]),s._v(" "),n("p",[n("strong",[s._v("总结")]),s._v(" 使用 "),n("code",[s._v("docker compose")]),s._v(" 构建镜像会更简单")])])}),[],!1,null,null,null);a.default=e.exports}}]);