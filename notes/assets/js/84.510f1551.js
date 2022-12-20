(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{499:function(s,a,t){"use strict";t.r(a);var n=t(62),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-pgsql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-pgsql"}},[s._v("#")]),s._v(" Docker pgsql")]),s._v(" "),t("ol",[t("li",[s._v("拉取镜像并且启动容器")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull postgres:12\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建挂载目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/pgsql/data\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name pgsql12 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POSTGRES_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("postgres "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v(":5432 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/pgsql/data:/var/lib/postgresql/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d postgres:12 \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -e POSTGRES_PASSWORD=postgres 设置环境变量，指定数据库的用户名和密码，用户名为postgres，密码为：postgres")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /home/pgsql/data:/var/lib/postgresql/data 指定宿主机的目录和原数据目录")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("修改配置文件")])]),s._v(" "),t("blockquote",[t("p",[s._v("注意，修改文件的时候可能没有vi/vim命令，可以拷贝到宿主机器在修改\ndocker容器拷贝文件到宿主机：[docker cp 1a1a8a3f3484:/var/lib/postgresql/data/pg_hba.conf /root]\n宿主机拷贝文件到docker容器：[docker cp /root/pg_hba.conf 1a1a8a3f3484:/var/lib/postgresql/data/]")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it pgsql12 /bin/bash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要修改配置文件pg_hba.conf 加上这个配置 `host all all 0.0.0.0/0 password`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /var/lib/postgresql/data/pg_hba.conf \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host all all "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0 password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再修改postgresql.conf 把端口注释去掉 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /var/lib/postgresql/data/postgresql.conf \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("重启容器，查看日志")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart pgsql12\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs pgsql12\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);