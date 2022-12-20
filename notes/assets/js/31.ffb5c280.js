(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{447:function(s,t,a){"use strict";a.r(t);var n=a(62),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[s._v("#")]),s._v(" Oracle")]),s._v(" "),a("ul",[a("li",[s._v("查询一个表中的总数据条数")])]),s._v(" "),a("p",[s._v("如果没有数据，说明该表没有被分析过（可以执行下面的手动分析）")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" nvl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NUM_ROWS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_tables t\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" upper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tb_tag_marketSearch_Phone'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("分析表")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("analyze")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" crmdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_tag_marketSearch_Phone "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("compute")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("statistics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询更新状态")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t_aswitch_canceloverdueorder t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10260922")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t_aswitch_canceloverdueorder t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10260922")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",[a("li",[s._v("消息查询")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t_message_type\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t_message_bind\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t_message_template\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("新建模板")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t_message_type\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MESSAGE_CODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MESSAGE_DES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" seq_message_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MESSAGE_71'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'定制服务提交成功通知'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t_message_type\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MESSAGE_CODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MESSAGE_DES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" PARENT_CODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seq_message_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MESSAGE_71_01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'定制服务提交成功通知'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MESSAGE_71'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("T_MESSAGE_TEMPLATE\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" TEMPLATE_CODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" TEMPLATE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" TEMPLATE_CONTENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seq_message_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TEMPLATE_112'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'定制服务提交成功通知'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'客人提交定制需求啦！$需求ID demandId，$人均预算：budget'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" orderdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("T_MESSAGE_BIND\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MESSAGE_CODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" CHANNEL_CODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" TEMPLATE_CODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seq_message_bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MESSAGE_71_01'")]),s._v(" ， "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'WECHAT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TEMPLATE_112'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("新增字段")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" auditstatus number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auditstatus "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1:已审核，0未审核'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" grouptype number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("grouptype "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'分组类型'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" companyId number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("companyId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'分社Id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" departmentid number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'部门Id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("合并数据")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("merge")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group g\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("companyid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" onlinedb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_auth_user u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" u1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("createuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" u1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("matched")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("companyid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" u1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("companyid\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("merge")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" productdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_product_group g\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" onlinedb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tb_auth_user u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" u1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("createuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" u1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("matched")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" u1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("departmentid\n\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);