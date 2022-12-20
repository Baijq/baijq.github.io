(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{439:function(s,t,a){"use strict";a.r(t);var e=a(62),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql误操作delete-from-删数据的后续"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql误操作delete-from-删数据的后续"}},[s._v("#")]),s._v(" MySQL误操作delete from...删数据的后续")]),s._v(" "),a("h2",{attrs:{id:"一、背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、背景"}},[s._v("#")]),s._v(" 一、背景")]),s._v(" "),a("p",[s._v("害，今天写了条非常简单的sql语句 "),a("code",[s._v("delete from t_xxx where id in ('a', 'b')")]),s._v(" ，然后跟往常一样喝了口82年的白开水，就打开navicat去执行这个代码。然鹅...我勒个去，卧槽、尼玛、fk、淦。你猜发生了什么... "),a("code",[s._v("select * from t_xxx")]),s._v(" 竟然没数据，当时血压指数飙升，我就赶紧戴上我的八倍镜，仔细看了看。原因是执行的时候竟然没选中where就执行了...aka 炸了，于是乎就有了这篇文章")]),s._v(" "),a("h2",{attrs:{id:"二、解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、解决"}},[s._v("#")]),s._v(" 二、解决")]),s._v(" "),a("p",[a("strong",[s._v("对于这种十万火急的事情，我直接先说解决办法。我在情急之中突然想起有个binlog")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查看binlog是否开启 "),a("code",[s._v("show variables like '%log_bin%';")])])]),s._v(" "),a("li",[a("p",[s._v("查看数据库文件存放路径，bin-log路径 "),a("code",[s._v("show variables like '%datadir%';")])])]),s._v(" "),a("li",[a("p",[s._v("找到删除时间段的binlog，翻译为sql")])])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqlbinlog "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--base64-output=decode-rows -v --database=base --start-datetime="2022-11-3 14:40:00" --stop-datetime="2022-11-3 14:45:00" "/var/lib/mysql/binlog.000003" > /tmp/mysqllog.sql')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("在生成的 mysqllog.sql 文件同路径下 ，生成将delete翻译为insert的sql文件")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("cat mysqllog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/###/p'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sed "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/### //g;s/\\/\\*.*/,/g;s/DELETE FROM/;INSERT INTO/g;s/WHERE/SELECT/g;'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("sed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/(@17.*),/\\1;/g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sed "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/@1=//g'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sed "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/@[1-9]=/,/g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sed "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/@[1-9][0-9]=/,/g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mysqllogOK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("打开生成的sql文件找到相应的insert，将翻译的insert语句复制到mysql里面执行。")])]),s._v(" "),a("h2",{attrs:{id:"三、拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、拓展"}},[s._v("#")]),s._v(" 三、拓展")]),s._v(" "),a("p",[s._v("bin-log 二进制日志（binnary log）以事件形式记录了对MySQL数据库执行更改的所有操作。")]),s._v(" "),a("ul",[a("li",[s._v("主从复制")]),s._v(" "),a("li",[s._v("数据恢复")])]),s._v(" "),a("h2",{attrs:{id:"四、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[s._v("#")]),s._v(" 四、总结")]),s._v(" "),a("p",[a("code",[s._v("要注意``要小心``要谨慎")]),s._v("哈哈哈哈，切")])])}),[],!1,null,null,null);t.default=r.exports}}]);