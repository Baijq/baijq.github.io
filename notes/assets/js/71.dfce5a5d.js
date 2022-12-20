(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{486:function(s,a,e){"use strict";e.r(a);var t=e(62),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-虚拟化容器技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-虚拟化容器技术"}},[s._v("#")]),s._v(" Docker-虚拟化容器技术")]),s._v(" "),e("p",[s._v("Docker是开源的应用容器引擎，Docker改变了虚拟化的方式！")]),s._v(" "),e("p",[e("strong",[s._v("三大概念")])]),s._v(" "),e("ul",[e("li",[s._v("镜像：就像安装包一样的东西")]),s._v(" "),e("li",[s._v("容器：Docker通过安装镜像生成的一个环境，就像应用多开一样，开启的应用环境一样的东西")]),s._v(" "),e("li",[s._v("仓库：应用市场一样的东西")])]),s._v(" "),e("h2",{attrs:{id:"docker基础命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker基础命令"}},[s._v("#")]),s._v(" Docker基础命令")]),s._v(" "),e("h4",{attrs:{id:"docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),e("p",[s._v("docker在Ubuntu或者deepin里都可以采用一条命令安装")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker.io\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker服务")]),s._v("\nsystemctl start "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否成功")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"docker启动停止"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker启动停止"}},[s._v("#")]),s._v(" Docker启动停止")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("启动 Docker")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl start "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("停止 Docker")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl stop "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("重启 Docker")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl restart "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("开机启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Docker状态")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(" systemctl status "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h4",{attrs:{id:"docker常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker常用命令"}},[s._v("#")]),s._v(" Docker常用命令")]),s._v(" "),e("p",[e("strong",[s._v("1.帮助信息")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" version "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 版本信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" info "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" 命令 --help "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 帮助命令")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("2.镜像命令")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看主机上的镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search nginx "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull nginx  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi nginx "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t imageName:Tag "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打镜像")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("strong",[s._v("3.容器命令")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("运行容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name 容器名 -p 主机端口:容器端口  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v 主机目录:容器目录:ro "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d ImageId或者镜像名:TAG\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --name 指定容器名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 以交互模式运行容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -t 分配一个伪终端，通常 -it组合")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 指定映射端口，将主机端口映射到容器端口")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 后台运行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v 指定挂载主机目录到容器目录，默认为rw读写模式，ro表示只读")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看正在运行的容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a 查看所有容器（包括未运行的）")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -q 只查看容器的ID")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("停止容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop 容器ID或容器名\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#强制停止容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 容器ID\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("移除容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f 容器ID或容器名\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-f 表示强制删除")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看日志")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs 容器ID或容器名\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看实时日志")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -f 容器ID或容器名 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("进入正在运行容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器ID或容器名 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入正在运行的容器并且开启交互模式终端")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bash是固有写法，也可以只写 /bin/bash")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#容器直接退出")]),s._v("\nctrl +P +Q  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#容器不停止退出  ---注意：这个很有用的操作")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("容器内和宿主机间拷贝复制文件")]),s._v(" "),e("blockquote",[e("p",[s._v("docker容器拷贝文件到宿主机：[docker cp 1a1a8a3f3484:/var/lib/postgresql/data/pg_hba.conf /root]\n宿主机拷贝文件到docker容器：[docker cp /root/pg_hba.conf 1a1a8a3f3484:/var/lib/postgresql/data/]")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 主机文件路径 容器ID或容器名:容器路径 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主机中文件拷贝到容器中")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器ID或容器名:容器路径 主机文件路径 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#容器中文件拷贝到主机中")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#容器中搜索文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" nginx  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#找到nginx位置")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看容器中进程信息")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看容器中进程信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" 容器id\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取容器元信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect 容器ID或容器名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("创建虚拟网段，同一网段的容器就可以互相访问")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建网段")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network create -d bridge my-bridge\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看网段内容器信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network inspect my-bridge\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" my-bridge\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"docker-部署运行-springboot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署运行-springboot"}},[s._v("#")]),s._v(" Docker 部署运行 SpringBoot")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("拉取项目打包镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/baijq/my-admin.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-admin\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打包")]),s._v("\nmvn clean package -Dmaven.test.skip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("上传jar包到linux，编写 Dockerfile")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("FROM java:8 \nCOPY *.jar /app.jar\nCMD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--server.port=8848"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nEXPOSE "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\nENTRYPOINT "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app.jar"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/Oxc3ZT.png",alt:"Oxc3ZT.png"}})])]),s._v(" "),e("li",[e("p",[s._v("构建镜像，会自动执行 "),e("code",[s._v("Dockerfile")]),s._v(" 文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建镜像，注意最后有个点 docker build -t [镜像名:Tag] .")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t my-admin:1.0 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/OxcYi4.png",alt:"OxcYi4.png"}})])]),s._v(" "),e("li",[e("p",[s._v("启动容器")]),s._v(" "),e("div",{staticClass:"language-shelll line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run --name my-admin \\ \n-p 8848:8848  \\\n--link mysql  \\\n-d my-admin:1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("Docker容器和容器之间访问，可以使用 "),e("code",[s._v("--link")]),s._v(" 关联docker容器，如my-admin要连接redis：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#jdbc:mysql://mysql:3306/my_admin?useUnicode=true&useSSL=false&characterEncoding=utf8&serverTimezone=UTC")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#jdbc:mysql://mysqldb:3306/my_admin?useUnicode=true&useSSL=false&characterEncoding=utf8&serverTimezone=UTC")]),s._v("\n\n--link mysql \n--link mysql:mysqldb  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/OxclLV.png",alt:"OxclLV.png"}})])]),s._v(" "),e("li",[e("p",[s._v("查看日志")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看日志")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs my-admin\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看实时日志")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -f my-admin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/OxctJJ.png",alt:"OxctJJ.png"}})])]),s._v(" "),e("li",[e("p",[s._v("测试系统")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/05/22/Oxc8dU.png",alt:"Oxc8dU.png"}})])])]),s._v(" "),e("p",[e("strong",[s._v("总结")]),s._v(" 使用 "),e("code",[s._v("docker compose")]),s._v(" 构建镜像会更简单")]),s._v(" "),e("h2",{attrs:{id:"docker-安装-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-nginx"}},[s._v("#")]),s._v(" "),e("RouterLink",{attrs:{to:"/core/note/tool/docker/docker-nginx.html"}},[s._v("Docker 安装 Nginx")])],1),s._v(" "),e("h2",{attrs:{id:"docker-安装-tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-tomcat"}},[s._v("#")]),s._v(" "),e("RouterLink",{attrs:{to:"/core/note/tool/docker/docker-tomcat.html"}},[s._v("Docker 安装 Tomcat")])],1),s._v(" "),e("h2",{attrs:{id:"docker-安装-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-mysql"}},[s._v("#")]),s._v(" "),e("RouterLink",{attrs:{to:"/core/note/tool/docker/docker-mysql.html"}},[s._v("Docker 安装 MySQL")])],1),s._v(" "),e("h2",{attrs:{id:"docker-安装-sql-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-sql-server"}},[s._v("#")]),s._v(" "),e("RouterLink",{attrs:{to:"/core/note/tool/docker/docker-mssql.html"}},[s._v("Docker 安装 SQL Server")])],1),s._v(" "),e("h2",{attrs:{id:"docker-安装-pgsql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-pgsql"}},[s._v("#")]),s._v(" "),e("RouterLink",{attrs:{to:"/core/note/tool/docker/docker-pgsql.html"}},[s._v("Docker 安装 PGSQL")])],1),s._v(" "),e("h2",{attrs:{id:"docker-安装-redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-redis"}},[s._v("#")]),s._v(" "),e("RouterLink",{attrs:{to:"/core/note/tool/docker/docker-redis.html"}},[s._v("Docker 安装 Redis")])],1),s._v(" "),e("h2",{attrs:{id:"docker-安装-es和kibana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-es和kibana"}},[s._v("#")]),s._v(" "),e("RouterLink",{attrs:{to:"/core/note/tool/docker/docker-es.html"}},[s._v("Docker 安装 ES和Kibana")])],1),s._v(" "),e("h2",{attrs:{id:"docker-安装-rabbitmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-rabbitmq"}},[s._v("#")]),s._v(" "),e("RouterLink",{attrs:{to:"/core/note/tool/docker/docker-mq.html"}},[s._v("Docker 安装 RabbitMQ")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);