(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{498:function(s,e,n){"use strict";n.r(e);var t=n(62),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker-安装-redis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-redis"}},[s._v("#")]),s._v(" Docker 安装 Redis")]),s._v(" "),n("ol",[n("li",[s._v("拉取镜像")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("创建挂载目录")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建挂载目录 数据和配置文件两个目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/redis/data /opt/redis/conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("编写redis.conf文件")])]),s._v(" "),n("blockquote",[n("p",[s._v("redis配置文件可去"),n("a",{attrs:{href:"http://redis.cn/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),n("OutboundLink")],1),s._v("下载对应的版本\n或者"),n("RouterLink",{attrs:{to:"/core/note/tool/base/redis-conf.html"}},[s._v("我这里")]),s._v("有个示例\n或者"),n("a",{attrs:{href:"https://www.cnblogs.com/kreo/p/4423362.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考这个博客"),n("OutboundLink")],1)],1)]),s._v(" "),n("p",[n("code",[s._v("vi /opt/redis/conf/redis.conf")])]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#允许远程连接, 保证可以从远程访问到该Redis\nbind 0.0.0.0  \n#守护线程启动，默认是no，Docker里可不管这项\ndaemonize no\n#密码\nrequirepass 123456\n#开启数据持久化到磁盘, 由于开启磁盘挂载，数据会洛到 /opt/redis/data\nappendonly yes\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("启动容器")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name redis "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10086")]),s._v(":6379 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/redis/data:/data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/redis/conf/redis.conf:/etc/redis/redis.conf "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d redis redis-server /etc/redis/redis.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("strong",[s._v("注意事项")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("-v /opt/redis/conf/redis.conf")]),s._v(" 准备好的配置文件，容器启动会映射在到容器内部 "),n("code",[s._v("/etc/redis/redis.conf")])]),s._v(" "),n("li",[n("code",[s._v("-d redis /etc/redis/redis.conf")]),s._v(" 表示后台运行redis，并且指定配置文件位置（也就是我们编写好的那个） "),n("code",[s._v("/etc/redis/redis.conf")])]),s._v(" "),n("li",[n("code",[s._v("redis-server /etc/redis/redis.conf")]),s._v(" 让redis按照这个redis.conf的配置启动")])]),s._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[s._v("进入容器")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs redis\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nredis-cli -h "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有密码，需认证")]),s._v("\nauth "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);