(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{482:function(s,e,t){"use strict";t.r(e);var a=t(62),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker安装sql-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装sql-server"}},[s._v("#")]),s._v(" Docker安装SQL Server")]),s._v(" "),t("ol",[t("li",[s._v("拉取镜像")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mcr.microsoft.com/mssql/server:2017-latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("运行容器")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name sqlserver2017 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1433")]),s._v(":1433  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ACCEPT_EULA=Y"')]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SA_PASSWORD=sqlserver@2017"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d mcr.microsoft.com/mssql/server:2017-latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("code",[s._v('-e "ACCEPT_EULA=Y"')]),s._v(" 默认选择同意协议许可证")]),s._v(" "),t("li",[t("code",[s._v('-e "SA_PASSWORD=sqlserver@2017"')]),s._v(" 设置连接密码为sqlserver@2017")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("进入容器，连接数据库")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it sqlserver2017 /bin/bash\n/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sqlserver@2017"')]),s._v("\n\n查询数据库\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name from sys.Databases\ngo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据库")]),s._v("\ncreate database sqlserver2017_db\ngo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s1.ax1x.com/2022/05/23/XS2Vvd.png",alt:"XS2Vvd.png"}})]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("远程连接\n"),t("img",{attrs:{src:"https://s1.ax1x.com/2022/05/23/XS2EgH.png",alt:"XS2EgH.png"}})])])])}),[],!1,null,null,null);e.default=n.exports}}]);