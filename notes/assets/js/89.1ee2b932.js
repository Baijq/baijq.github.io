(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{509:function(s,a,n){"use strict";n.r(a);var t=n(62),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"linux-centos7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-centos7"}},[s._v("#")]),s._v(" Linux Centos7")]),s._v(" "),n("p",[s._v("✔️"),n("RouterLink",{attrs:{to:"/core/note/tool/linux/linux.html"}},[s._v("Linux其他命令")])],1),s._v(" "),n("p",[s._v("✔️"),n("RouterLink",{attrs:{to:"/core/note/tool/linux/vim.html"}},[s._v("Vim编辑器")])],1),s._v(" "),n("p",[s._v("远程服务器复制目录到当前路径")]),s._v(" "),n("p",[n("code",[s._v("scp -r root@192.168.1.222:/opt/my.cnf ./")])]),s._v(" "),n("p",[s._v("查看端口是否被占用")]),s._v(" "),n("p",[n("code",[s._v("netstat -tunlp |grep 22")])]),s._v(" "),n("h2",{attrs:{id:"一、安装jdk和maven"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、安装jdk和maven"}},[s._v("#")]),s._v(" 一、安装JDK和Maven")]),s._v(" "),n("h3",{attrs:{id:"_1-下载tar包离线安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载tar包离线安装"}},[s._v("#")]),s._v(" 1.下载tar包离线安装")]),s._v(" "),n("h4",{attrs:{id:"_1-准备工作下载安装包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作下载安装包"}},[s._v("#")]),s._v(" 1. 准备工作下载安装包")]),s._v(" "),n("ol",[n("li",[s._v("jdk-8u181-linux-x64.tar.gz")]),s._v(" "),n("li",[s._v("apache-maven-3.8.6-bin.tar.gz")])]),s._v(" "),n("h4",{attrs:{id:"_2-步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-步骤"}},[s._v("#")]),s._v(" 2. 步骤")]),s._v(" "),n("ol",[n("li",[s._v("创建目录 "),n("code",[s._v("mkdir -p /opt/app /opt/software")])])]),s._v(" "),n("blockquote",[n("p",[s._v("/opt/app 存放安装包")]),s._v(" "),n("p",[s._v("/opt/software 存放解压后的")])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[s._v("上传安装包到 /opt/app下")])]),s._v(" "),n("li",[n("p",[s._v("解压"),n("br"),s._v(" "),n("code",[s._v("tar -xvzf jdk-8u181-linux-x64.tar.gz -C /opt/software")]),s._v(" "),n("code",[s._v("tar -xvzf apache-maven-3.8.6-bin.tar.gz -C /opt/software")])])]),s._v(" "),n("li",[n("p",[s._v("配置maven"),n("br"),s._v("\n创建仓库本地仓库 /opt/software/apache-maven-3.8.6/ck"),n("br"),s._v("\n配置阿里云仓库")])]),s._v(" "),n("li",[n("p",[s._v("配置jdk,maven环境变量\n"),n("code",[s._v("vi /etc/profile")]),s._v(" "),n("code",[s._v("source /etc/profile")])])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Maven Environment Config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("M2_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/software/apache-maven-3.8.6\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$M2_HOME")]),s._v("/bin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Java Environment Config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/software/jdk1.8.0_181\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JRE_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/jre\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/lib:"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JRE_HOME}")]),s._v("/lib\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/bin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ol",{attrs:{start:"6"}},[n("li",[s._v("验证\n"),n("code",[s._v("java -version")]),s._v(" "),n("code",[s._v("mvn -v")])])]),s._v(" "),n("h3",{attrs:{id:"_2-yum安装jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-yum安装jdk"}},[s._v("#")]),s._v(" 2. yum安装jdk")]),s._v(" "),n("ol",[n("li",[s._v("检索可用包 "),n("code",[s._v("yum search java | grep jdk")])]),s._v(" "),n("li",[s._v("安装 "),n("code",[s._v("yum install -y java-1.8.0-openjdk")])])]),s._v(" "),n("h2",{attrs:{id:"二、docker部署jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、docker部署jenkins"}},[s._v("#")]),s._v(" 二、Docker部署Jenkins")]),s._v(" "),n("h3",{attrs:{id:"_1-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1. 安装")]),s._v(" "),n("ol",[n("li",[s._v("启动容器\ndocker run -di "),n("br"),s._v("\n--name=jenkins "),n("br"),s._v("\n-p 8080:8080 "),n("br"),s._v("\n-v /root/jenkins_home/:/var/jenkins_home "),n("br"),s._v("\n-v /opt/software/jdk1.8.0_181:/opt/software/jdk1.8.0_181 "),n("br"),s._v("\n-v /opt/software/apache-maven-3.8.6:/opt/software/apache-maven-3.8.6 "),n("br"),s._v("\n-v $(which docker):/usr/bin/docker "),n("br"),s._v("\n-v /var/run/docker.sock:/var/run/docker.sock "),n("br"),s._v("\njenkins/jenkins:lts")]),s._v(" "),n("li",[s._v("进入页面\nhttp://192.168.198.128:8080\ndocker logs jenkins 可以看到密码，输入密码 103031818d754c2897739d6010c0448d\n安装推荐的插件\n创建第一个管理员用户，一路保存完成即可\n开始使用Jenkins")]),s._v(" "),n("li",[s._v("插件配置\nManage Jekins > 插件管理 可选插件 搜索即可")]),s._v(" "),n("li",[s._v("安装SSH插件\ndocker restart jenkins 重启jenkins")]),s._v(" "),n("li",[s._v("添加ssh登录账号凭据\n系统管理 > Manage Credentials > Stores scoped to Jenkins 点全局 添加凭据 输入用户名、密码、ID、描述（Linux服务器账号密码）")]),s._v(" "),n("li",[s._v("配置全局SSH\n系统管理 > 系统配置 >  SSH remote hosts 点击新增 输入 Hostname Port=22 选择 Credentials=我们刚新增的linux服务器账号密码 点击保存")]),s._v(" "),n("li",[s._v("配置jdk和maven （我们-v挂载过）这里需要的是Docekr里的路径\n点击系统管理，找到全局工具配置\njdk1.8         /opt/software/jdk1.8.0_181\nmaven3.8.6     /opt/software/apache-maven-3.8.6")])]),s._v(" "),n("h3",{attrs:{id:"_2-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-插件"}},[s._v("#")]),s._v(" 2. 插件")]),s._v(" "),n("ol",[n("li",[n("p",[n("code",[s._v("publish over ssh")])]),s._v(" "),n("p",[s._v("配置应用器服务器 ip+账户")]),s._v(" "),n("p",[s._v("可以传jar包到指定的服务器，并启动jar")])])]),s._v(" "),n("h2",{attrs:{id:"三、准备springboot项目到git"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、准备springboot项目到git"}},[s._v("#")]),s._v(" 三、准备Springboot项目到git")]),s._v(" "),n("p",[s._v("https://gitee.com/baijq/jenkins-test.git")]),s._v(" "),n("h2",{attrs:{id:"四、使用jenkins部署项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、使用jenkins部署项目"}},[s._v("#")]),s._v(" 四、使用Jenkins部署项目")]),s._v(" "),n("ol",[n("li",[s._v("新建任务 创建一个自由风格项目")]),s._v(" "),n("li",[s._v("添加git凭据 url Credentials(和添加服务器账号一样)")]),s._v(" "),n("li",[s._v("Build Steps 选择调用顶层Maven  Maven 版本选择我们配置的那个  目标=clean package  POM=pom.xml(点击高级出现)")]),s._v(" "),n("li",[s._v("增加构建执行shell")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SERVER_NAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jenkins\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源jar名称，mvn打包之后，target目录下的jar包名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAR_NAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("demo-0.0.1-SNAPSHOT\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jenkins下的目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/jenkins_home/workspace/jenkins\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等待三秒")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" 3s\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" 2s\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" 1s\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      \n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"结束进程完成"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JENKINS_HOME")]),s._v("/target\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JENKINS_HOME")]),s._v("/Dockerfile "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JENKINS_HOME")]),s._v("/target\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改文件权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAR_NAME")]),s._v(".jar\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"看看docker能不能用"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" -v\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"停止容器"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop springboot\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"删除容器"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" springboot\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"删除镜像"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi springboot\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"打包镜像"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t springboot "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"运行镜像"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":8081 --name springboot springboot\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[s._v("立即构建 可以查看控制台")])]),s._v(" "),n("h3",{attrs:{id:"报错信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#报错信息"}},[s._v("#")]),s._v(" 报错信息")]),s._v(" "),n("p",[s._v("[INFO] Scanning for projects...\nDownloading from aliyunmaven: https://maven.aliyun.com/repository/public/org/springframework/boot/spring-boot-starter-parent/2.3.2.RELEASE/spring-boot-starter-parent-2.3.2.RELEASE.pom\n[WARNING] Failed to create parent directories for tracking file /opt/software/apache-maven-3.8.6/ck/org/springframework/boot/spring-boot-starter-parent/2.3.2.RELEASE/spring-boot-starter-parent-2.3.2.RELEASE.pom.lastUpdated\n[ERROR] [ERROR] Some problems were encountered while processing the POMs:\n[FATAL] Non-resolvable parent POM for com.example:jenkins-test:0.0.1-SNAPSHOT: Could not transfer artifact org.springframework.boot:spring-boot-starter-parent:pom:2.3.2.RELEASE from/to aliyunmaven (https://maven.aliyun.com/repository/public): /opt/software/apache-maven-3.8.6/ck/org/springframework/boot/spring-boot-starter-parent/2.3.2.RELEASE/spring-boot-starter-parent-2.3.2.RELEASE.pom.part.lock (No such file or directory) and 'parent.relativePath' points at no local POM @ line 6, column 13\n@\n[ERROR] The build could not read 1 project -> [Help 1]\n[ERROR]"),n("br"),s._v("\n[ERROR]   The project com.example:jenkins-test:0.0.1-SNAPSHOT (/var/jenkins_home/workspace/jenkins-test/pom.xml) has 1 error\n[ERROR]     Non-resolvable parent POM for com.example:jenkins-test:0.0.1-SNAPSHOT: Could not transfer artifact org.springframework.boot:spring-boot-starter-parent:pom:2.3.2.RELEASE from/to aliyunmaven (https://maven.aliyun.com/repository/public): /opt/software/apache-maven-3.8.6/ck/org/springframework/boot/spring-boot-starter-parent/2.3.2.RELEASE/spring-boot-starter-parent-2.3.2.RELEASE.pom.part.lock (No such file or directory) and 'parent.relativePath' points at no local POM @ line 6, column 13 -> [Help 2]\n[ERROR]\n[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.\n[ERROR] Re-run Maven using the -X switch to enable full debug logging.\n[ERROR]\n[ERROR] For more information about the errors and possible solutions, please read the following articles:\n[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/ProjectBuildingException\n[ERROR] [Help 2] http://cwiki.apache.org/confluence/display/MAVEN/UnresolvableModelException\nBuild step 'Invoke top-level Maven targets' marked build as failure\nFinished: FAILURE")]),s._v(" "),n("p",[s._v('解决方案\n#递归修改文件的权限必须要加参数"-R"\n'),n("code",[s._v("sudo chmod -R 777 /opt/software/apache-maven-3.8.6")])]),s._v(" "),n("h3",{attrs:{id:"报错信息-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#报错信息-2"}},[s._v("#")]),s._v(" 报错信息")]),s._v(" "),n("p",[s._v('Got permission denied while trying to connect to the Docker daemon socket at\nunix:///var/run/docker.sock: Post\n"http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/springboot/stop": dial unix\n/var/run/docker.sock: connect: permission denied')]),s._v(" "),n("p",[s._v("解决方案\n"),n("code",[s._v("chmod a+rw /var/run/docker.sock")])]),s._v(" "),n("h2",{attrs:{id:"五、安装mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、安装mysql"}},[s._v("#")]),s._v(" 五、安装MySQL")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name mysql "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v ~/mysql/data:/var/lib/mysql "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d mysql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);