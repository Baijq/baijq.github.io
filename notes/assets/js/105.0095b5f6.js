(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{519:function(s,t,a){"use strict";a.r(t);var n=a(62),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"整合定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整合定时任务"}},[s._v("#")]),s._v(" 整合定时任务")]),s._v(" "),a("p",[s._v("创建一个web项目，引入web,mysql,mybatis-plus框架，作为基础实例项目")]),s._v(" "),a("h2",{attrs:{id:"静态定时任务-基于注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态定时任务-基于注解"}},[s._v("#")]),s._v(" 静态定时任务，基于注解")]),s._v(" "),a("p",[a("strong",[s._v("@Scheduled")])]),s._v(" "),a("ol",[a("li",[s._v("cron: 表达式，指定任务在特定时间执行")]),s._v(" "),a("li",[s._v("fixedDelay：表示上一次任务执行完成后多久再次执行，参数类型为long，单位ms；")]),s._v(" "),a("li",[s._v("fixedDelayString：与fixedDelay含义一样，只是参数类型变为String；")]),s._v(" "),a("li",[s._v("fixedRate：表示按一定的频率执行任务，即每次开始执行的时间间隔一致，参数类型为long，单位ms；")]),s._v(" "),a("li",[s._v("fixedRateString: 与fixedRate的含义一样，只是将参数类型变为String；")]),s._v(" "),a("li",[s._v("initialDelay：表示延迟多久再第一次执行任务，参数类型为long，单位ms；")]),s._v(" "),a("li",[s._v("initialDelayString：与initialDelay的含义一样，只是将参数类型变为String；")]),s._v(" "),a("li",[s._v("zone：时区，默认为当前时区。")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableScheduling")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScheduleConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Scheduled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cron "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0/5 * * * * ?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"执行定时任务1："')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LocalDateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 下面是效果 @Scheduled(cron = "0/5 * * * * ?")')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行定时任务1：2022-02-27T15:53:30.001983400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行定时任务1：2022-02-27T15:53:35.004437600")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行定时任务1：2022-02-27T15:53:40.001887600")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行定时任务1：2022-02-27T15:53:45.002347900")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[a("strong",[s._v("cron表达式")])]),s._v(" "),a("p",[s._v("cron表达式是一个字符串，以空格分开共6个域")]),s._v(" "),a("ol",[a("li",[s._v("结构：")])]),s._v(" "),a("ul",[a("li",[s._v("标准的corn从左到右（用空格隔开）："),a("code",[s._v("秒")]),s._v(" "),a("code",[s._v("分")]),s._v(" "),a("code",[s._v("小时")]),s._v(" "),a("code",[s._v("月份中的日期")]),s._v(" "),a("code",[s._v("月份")]),s._v(" "),a("code",[s._v("星期中的日期")]),s._v(" "),a("code",[s._v("年份")])]),s._v(" "),a("li",[s._v('spring自带的定时任务cron表达式不支持年，如@Scheduled(cron = "0/5 * * * * ?") 每隔5s')]),s._v(" "),a("li",[a("code",[s._v("[秒] [分] [时] [日] [月] [周]")])])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("各字段含义")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("域")]),s._v(" "),a("th",[s._v("必填")]),s._v(" "),a("th",[s._v("允许值")]),s._v(" "),a("th",[s._v("允许的特殊字符")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("秒（seconds）")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("0-59整数")]),s._v(" "),a("td",[s._v(", - * /    四个字符")])]),s._v(" "),a("tr",[a("td",[s._v("分（minutes）")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("0-59整数")]),s._v(" "),a("td",[s._v(", - * /    四个字符")])]),s._v(" "),a("tr",[a("td",[s._v("时（hours）")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("0-23整数")]),s._v(" "),a("td",[s._v(", - * /    四个字符")])]),s._v(" "),a("tr",[a("td",[s._v("日（daysOfMonth）")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("1-31整数（需要考虑月的天数）")]),s._v(" "),a("td",[s._v(",- * ? / L W C     八个字符")])]),s._v(" "),a("tr",[a("td",[s._v("月（months））")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("1-12整数 或 JAN-DEC")]),s._v(" "),a("td",[s._v(", - * ? / L C #     八个字符")])]),s._v(" "),a("tr",[a("td",[s._v("周 （daysOfWeek）")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("1-7整数 或 SUN-SAT")]),s._v(" "),a("td",[s._v(", - * /    四个字符")])]),s._v(" "),a("tr",[a("td",[s._v("年 （Year） Spring不支持")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("1970~2099 Spring不支持")]),s._v(" "),a("td",[s._v(", - * /    四个字符 Spring不支持")])])])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("通配符说明")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("*")]),s._v(" 表示匹配该域的任意值。在minutes域使用 * 表示每分钟。在months里表示每个月。在daysOfWeek域表示一周的每一天")]),s._v(" "),a("li",[a("code",[s._v("?")]),s._v(" 只能用在daysofMonth和daysofWeek两个域，表示不指定值，当两个子表达式其中之一被指定了值以后，为了避免冲突，需要将另一个子表达式的值设为 ？。因为daysofMonth和daysofWeek会相互影响。例如想在每月的2号触发调度，不管2号是周几，则只能使用如下写法：0 0 0 2 * ?, 其中最后一位只能用?，而不能使用*，如果使用*表示不管周几都会触发。")]),s._v(" "),a("li",[a("code",[s._v("-")]),s._v(" 表示范围。例如在minutes域使用5-20，表示从5分到20分钟每分钟触发一次")]),s._v(" "),a("li",[a("code",[s._v("/")]),s._v(" 表示起始时间开始触发，然后每隔固定时间触发一次。例如在minutes域使用5/20，则意味着从当前小时的第5分钟开每20分钟触发一次")]),s._v(" "),a("li",[a("code",[s._v(",")]),s._v(" 表示列出枚举值。例如：在minutes域使用5,20，则意味着在5分和20分时各触发一次")]),s._v(" "),a("li",[a("code",[s._v("L")]),s._v(" 表示最后，是单词“last”的缩写，只能出现在daysofWeek和dayofMonth域。在daysofWeek域使用5L意思是在指定月的最后的一个星期四触发。在dayofMonth域使用5L或者FRIL意思是在指定月的倒数第5天触发。在使用L参数时，不要指定列表或范围。")]),s._v(" "),a("li",[a("code",[s._v("W")]),s._v(" 表示有效工作日(周一到周五),只能出现在daysofMonth域，系统将在离指定日期的最近的有效工作日触发事件。例如：在daysofMonth使用5W，如果5号是周六，则将在最近的工作日周五，即4号触发。如果5号是周日，则在6日(周一)触发。如果5日在星期一到星期五中的一天，则就在5日触发。另外，W的最近寻找不会跨过月份")]),s._v(" "),a("li",[a("code",[s._v("LW")]),s._v(" 这两个字符可以连用，表示指定月的最后一个工作日。")]),s._v(" "),a("li",[a("code",[s._v("#")]),s._v(" 用于确定每个月第几个周几，只能出现在daysofMonth域。例如在4#2，表示某月的第二个周三")])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("常用表达式实例")])]),s._v(" "),a("ul",[a("li",[s._v("0 0 2 1 * ? *   表示在每月的1日的凌晨2点调整任务")]),s._v(" "),a("li",[s._v("0/2 * * * * ?   表示每2秒 执行任务")]),s._v(" "),a("li",[s._v("0 0/2 * * * ?   表示每2分钟 执行任务")]),s._v(" "),a("li",[s._v("0 15 10 ? * MON-FRI   表示周一到周五每天上午10:15执行作业")]),s._v(" "),a("li",[s._v("0 0 10,14,16 * * ?   每天上午10点，下午2点，4点")]),s._v(" "),a("li",[s._v("0 0 12 ? * WED    表示每个星期三中午12点")]),s._v(" "),a("li",[s._v("0 0 12 * * ?     每天中午12点触发")]),s._v(" "),a("li",[s._v("0 15 10 ? * *    每天上午10:15触发")]),s._v(" "),a("li",[s._v("0 15 10 * * ?    每天上午10:15触发")]),s._v(" "),a("li",[s._v("0 15 10 * * ? *  每天上午10:15触发")]),s._v(" "),a("li",[s._v("0 15 10 ? * MON-WED,SAT 周一至周三和周六的上午10:15触发")])]),s._v(" "),a("h2",{attrs:{id:"动态定时任务-基于接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态定时任务-基于接口"}},[s._v("#")]),s._v(" 动态定时任务，基于接口")]),s._v(" "),a("ol",[a("li",[s._v("准备好web项目")]),s._v(" "),a("li",[s._v("准备数据库")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("tb_cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("tb_cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("cron_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("tb_cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0/5 * * * * ?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("配置数据库")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" com.mysql.cj.jdbc.Driver\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3306/biubiu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("useUnicode=true"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&characterEncoding=UTF-8&useSSL=true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mybatis-plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mapper-locations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" classpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mapper/"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*Mapper.xml")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log-impl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" org.apache.ibatis.logging.stdout.StdOutImpl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("创建定时器\n数据库准备好数据之后，我们编写定时任务，注意这里添加的是TriggerTask，目的是循环读取我们在数据库设置好的执行周期，以及执行相关定时任务的内容。具体代码如下：")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableScheduling")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyScheduleConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SchedulingConfigurer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CronMapper")]),s._v(" cronMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 执行定时任务.\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("configureTasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScheduledTaskRegistrar")]),s._v(" taskRegistrar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        taskRegistrar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTriggerTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1.添加任务内容(Runnable)")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"执行定时任务2: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LocalDateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toLocalTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2.设置执行周期(Trigger)")]),s._v("\n                triggerContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2.1 从数据库获取执行周期")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" cron "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cronMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2.2 参数校验.")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Omitted Code ..")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2.3 返回执行周期(Date)")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CronTrigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nextExecutionTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("triggerContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * mybatis不想分包了，就写在这里了\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Mapper")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CronMapper")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select cron from tb_cron limit 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("启动项目查看控制台，修改数据库cron表达式再看看控制台")])]),s._v(" "),a("blockquote",[a("p",[s._v("MySQl数据库可以换成配置中心，例如Apollo，nacos等")])])])}),[],!1,null,null,null);t.default=e.exports}}]);