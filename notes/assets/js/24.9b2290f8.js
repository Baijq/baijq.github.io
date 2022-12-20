(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{438:function(s,a,t){"use strict";t.r(a);var e=t(62),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql数据迁移-数据载入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据迁移-数据载入"}},[s._v("#")]),s._v(" MySQL数据迁移，数据载入")]),s._v(" "),t("h2",{attrs:{id:"一、数据迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、数据迁移"}},[s._v("#")]),s._v(" 一、数据迁移")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("登录到要迁出的机器上，导出数据；登录需要迁入的机器上，导入数据")])]),s._v(" "),t("li",[t("p",[s._v("导出文件，最常用的是导出sql脚本文件；")])]),s._v(" "),t("li",[t("p",[s._v("方式 "),t("kbd",[s._v("Navicat等")]),s._v(" 或者 "),t("kbd",[s._v("mysqldump")])])])]),s._v(" "),t("h3",{attrs:{id:"_1-mysql将数据从一个数据导入到另一个数据库-mysqldump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql将数据从一个数据导入到另一个数据库-mysqldump"}},[s._v("#")]),s._v(" 1.MySQL将数据从一个数据导入到另一个数据库 mysqldump")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("从源头数据库导出数据")]),s._v(" "),t("p",[t("strong",[t("code",[s._v("mysqldump -u 用户名 -p 数据库名 > 文件名称.sql")])])]),s._v(" "),t("p",[s._v("比如我下面这个例子，我是mysql在Docker里：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nmysqldump -u root -p base "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" basedb.sql\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 就能看到basedb.sql文件了，接下来复制到宿主机")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出容器")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" mysql:/basedb.sql ./\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("把basedb.sql复制到需要导入数据的机器上 "),t("code",[s._v("C:\\Users\\biubiu\\Desktop\\basedb.sql")])])]),s._v(" "),t("li",[t("p",[s._v("导入数据，命令行切到桌面文件夹 "),t("code",[s._v("C:\\Users\\biubiu\\Desktop")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql -uroot -p\ncreate database base "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("charset")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nuse base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ./basedb.sql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-数据备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据备份"}},[s._v("#")]),s._v(" 2.数据备份")]),s._v(" "),t("ul",[t("li",[s._v("备份库 "),t("code",[s._v("mysqldump -u root -p -B base > basedb.sql")])]),s._v(" "),t("li",[s._v("备份表 "),t("code",[s._v("mysqldump -u root -p base t_user > base.t_user.sql")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%F_%H-%M-%S"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BACKUP_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/db_backup\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_LIST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("mysql -h$HOST -u"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" -p$PASSWORD -s -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"show databases;"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Datebase|information_schema|mysql|performance_schema|sys"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("DB")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DB_LIST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BACKUP_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BACKUP_DIR")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DB}")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DATE}")]),s._v(".sql\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" mysqldump -h"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOST")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" -p"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PASSWORD")]),s._v(" -B "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DB")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BACKUP_NAME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BACKUP_NAME")]),s._v(' backup fail!"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"二、载入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、载入数据"}},[s._v("#")]),s._v(" 二、载入数据")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("use base;\n#查看是否开启加载本地文件\nshow variables like 'local_infile';\n#开启全局本地文件设置\nset global local_infile=on;\n\nload data local infile './t_user.txt'\ninto table base.t_user \nfields terminated by ','\nlines terminated by '\\n'\nignore 1 lines;\n\nselect * from base.t_user;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);