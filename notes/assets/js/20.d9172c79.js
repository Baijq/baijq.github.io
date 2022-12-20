(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{436:function(t,s,a){"use strict";a.r(s);var r=a(62),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库技术"}},[t._v("#")]),t._v(" 数据库技术")]),t._v(" "),a("ul",[a("li",[t._v("关系型数据库")]),t._v(" "),a("li",[t._v("非关系型数据库")]),t._v(" "),a("li",[t._v("搜索数据库")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("分类")]),t._v(" "),a("th",[t._v("举例")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("关系型数据库 RDBMS")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/core/note/db/oracle.html"}},[t._v("Oracle")]),t._v("、"),a("RouterLink",{attrs:{to:"/core/note/db/mysql/mysql.html"}},[t._v("MySQL")]),t._v("、"),a("RouterLink",{attrs:{to:"/core/note/db/mssql.html"}},[t._v("SqlServer")]),t._v("、"),a("RouterLink",{attrs:{to:"/core/note/db/pgsql.html"}},[t._v("pgSQL")])],1),t._v(" "),a("td",[t._v("主要是表存储，行列，SQL查询")])]),t._v(" "),a("tr",[a("td",[t._v("非关系型数据库 NoSQL")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/core/note/db/redis.html"}},[t._v("Redis")]),t._v("、"),a("a",{attrs:{href:""}},[t._v("MongoDB")])],1),t._v(" "),a("td",[t._v("存文档，存键值对等")])]),t._v(" "),a("tr",[a("td",[t._v("搜索数据库，也是非关系型")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/core/note/db/elasticsearch.html"}},[t._v("ES")])],1),t._v(" "),a("td",[t._v("文档存储，搜索贼快")])]),t._v(" "),a("tr",[a("td",[t._v("消息中间件")]),t._v(" "),a("td",[a("a",{attrs:{href:""}},[t._v("RabbitMQ")]),t._v("、"),a("a",{attrs:{href:""}},[t._v("Kafka")])]),t._v(" "),a("td",[t._v("消息队列，高吞吐量 QPS")])])])]),t._v(" "),a("h2",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),a("p",[t._v("事务的ACID特性："),a("code",[t._v("原子性")]),t._v("、 "),a("code",[t._v("一致性")]),t._v("、 "),a("code",[t._v("隔离性")]),t._v("、 "),a("code",[t._v("持久性")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("脏读")]),t._v(" "),a("th",[t._v("不可重复读")]),t._v(" "),a("th",[t._v("幻读")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("读未提交")]),t._v(" "),a("td",[t._v("❌")]),t._v(" "),a("td",[t._v("❌")]),t._v(" "),a("td",[t._v("❌")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("读已提交")]),t._v(" "),a("td",[t._v("✔️")]),t._v(" "),a("td",[t._v("❌")]),t._v(" "),a("td",[t._v("❌")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("可重复读")]),t._v(" "),a("td",[t._v("✔️")]),t._v(" "),a("td",[t._v("✔️")]),t._v(" "),a("td",[t._v("❌")]),t._v(" "),a("td",[t._v("gap锁，MySQL默认级别")])]),t._v(" "),a("tr",[a("td",[t._v("串行化")]),t._v(" "),a("td",[t._v("✔️")]),t._v(" "),a("td",[t._v("✔️")]),t._v(" "),a("td",[t._v("✔️")]),t._v(" "),a("td",[t._v("读锁")])])])]),t._v(" "),a("h2",{attrs:{id:"sql部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql部分"}},[t._v("#")]),t._v(" SQL部分")]),t._v(" "),a("p",[t._v("如图，我们想实现这个数据查询，怎么做？\n"),a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/08/O3E0F1.png",alt:"O3E0F1.png"}})]),t._v(" "),a("p",[t._v("解决思路，"),a("code",[t._v("CASE WHEN")]),t._v(" 实现")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" tb_stu_cause"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" 姓名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" 课程 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'语文'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" 分数 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'语文'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" 课程 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数学'")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" 分数 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数学'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" tb_stu_cause"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" 姓名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" 课程 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'语文'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" 分数 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'语文'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" 课程 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数学'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" 分数 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数学'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" tb_stu_cause\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" 姓名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/08/O3EBJx.png",alt:"O3EBJx.png"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);