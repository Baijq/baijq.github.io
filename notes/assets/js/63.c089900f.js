(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{481:function(s,a,t){"use strict";t.r(a);var e=t(62),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"win命令行可以打开的工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#win命令行可以打开的工具"}},[s._v("#")]),s._v(" win命令行可以打开的工具")]),s._v(" "),t("ol",[t("li",[s._v("开机的时候 "),t("code",[s._v("shift f10")]),s._v(" 可以打开命令行")]),s._v(" "),t("li",[s._v("任务管理器 "),t("code",[s._v("taskmgr")])]),s._v(" "),t("li",[s._v("查询电脑配置 "),t("code",[s._v("dxdiag")])])]),s._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("禁止命令回显\n"),t("code",[s._v("echo off")]),s._v(" 表示此语句后的所有运行的命令都不显示命令本身（不包括输出结果）\n"),t("code",[s._v("@")]),s._v(" 与 "),t("code",[s._v("echo off")]),s._v(" 相似，但它是加在每个命令的最前面，只作用于当前命令，表示运行时不显示这一命令。")])]),s._v(" "),t("li",[t("p",[s._v("注释\n"),t("code",[s._v("rem")]),s._v(" 用来注释。rem全称remark（不确定），意为注释。\n也可以使用用 "),t("code",[s._v("::")]),s._v(" 注释")])]),s._v(" "),t("li",[t("p",[s._v("输出信息\n"),t("code",[s._v("echo")]),s._v(" 表示显示此命令后的字符，也可以用于将命令后的字符串输出到文件，如下面所示\n"),t("code",[s._v("echo abc to file >> targetfile.txt")]),s._v(" 上面的命令将把abc to file写到targetfile.txt。")])]),s._v(" "),t("li",[t("p",[s._v("暂停\n"),t("code",[s._v("pause")]),s._v(" 暂停执行并在屏幕上显示Press any key to continue...的提示，等待用户按任意键后继续。")])]),s._v(" "),t("li",[t("p",[s._v("退出脚本\n"),t("code",[s._v("exit /b code")]),s._v(" 加上/b选项表示退出当前批处理脚本（b是bat的缩写），而不是cmd.exe，相当于函数的return语句。code是个数字，表示执行结果。")])]),s._v(" "),t("li",[t("p",[s._v("调用其他批处理\n"),t("code",[s._v("call")]),s._v(" 用来调用另一个批处理，就像函数调用（如果不用call而直接调用别的批处理文件，那么执行完成那个批处理文件后将无法返回当前文件后续的命令）\n在被调用的批处理里，"),t("code",[s._v("%[1-9]")]),s._v(" 表示传递进来的参数，参数是指调用者在文件名后加以空格分隔的字符串。 "),t("code",[s._v("%0")]),s._v(" 表示批处理命令本身，其他参数字符串用"),t("code",[s._v("%1")]),s._v(" 到 "),t("code",[s._v("%9")]),s._v(" 表示\n批处理调用示例，不带参数 "),t("code",[s._v("call for.bat firstparamvalue")])])]),s._v(" "),t("li",[t("p",[s._v("输出文件内容\n"),t("code",[s._v("type")]),s._v(" 用来输出文件内容，下面的命令输出subfor.bat文件的内容\n"),t("code",[s._v("type subfor.bat")])])]),s._v(" "),t("li",[t("p",[s._v("定义变量\n"),t("code",[s._v("set")]),s._v(" 用于定义变量。如 "),t("code",[s._v("set x=1")])])]),s._v(" "),t("li",[t("p",[s._v("for 循环\n"),t("code",[s._v("for")]),s._v(" 循环遍历一个集合并执行指定命令： "),t("code",[s._v("FOR %%variable IN (set) DO command [command-parameters]")])])])]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("%%variable")]),s._v(" 指定一个单一字母可替换的参数。（用集合中取出的内容替换）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("(set)")]),s._v(" 指定一个或一组文件。可以使用通配符。（集合）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("command")]),s._v(" 指定对每个文件执行的命令。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("command-parameters")]),s._v(" 为特定命令指定参数或命令行开关。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("ping www.baidu.com")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@echo off")]),s._v(" (关闭回显)")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("echo xxx")]),s._v("（打印xxx，相当于print）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("pause")]),s._v(" (暂停)")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("del")]),s._v(" (删除)")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("del d:\\test.txt")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("del /f /s C:\\test.txt")]),s._v(" (强制删除)")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("cls")]),s._v(" （清屏）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("rem")]),s._v(" 注释")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@rem xxx")]),s._v(" （xxx是注释内容）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("copy D:\\*.* C:\\")]),s._v(" (拷贝D盘下的文件到C)")])])]),s._v(" "),t("p",[s._v("IP地址查看（win） 查看ip配置信息。刷新，清空一下dns缓存 "),t("code",[s._v("ipconfig")]),s._v(" "),t("code",[s._v("ipconfig /all")]),s._v(" "),t("code",[s._v("ipconfig /flushdns")])]),s._v(" "),t("p",[t("strong",[s._v("写bat时等号前后不能有空格")])]),s._v(" "),t("p",[s._v("eg1: for 循环遍历集合")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("items")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("a b c d\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("letters")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x y z\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" %%a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("%items%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" %%b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("%letters%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        call subfor.bat %%a %%b\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# subfor.bat")]),s._v("\n@echo off\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" subfor.bat "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("  %1 %2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("eg2: for循环处理用通配符指定的一组文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" %%a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*.txt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    rem 如果文件名有空格，必须使用"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    rem "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%%a"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("eg3: for 循环处理文件内容")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rem 读取text.txt中的每一行作为参数%%a的值，调用循环体\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /F "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delims="')]),s._v(" %%a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text.txt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" %%a\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("eg4: 数值范围迭代\n格式： "),t("code",[s._v("for /L %%i in (start, step, end) do cmd")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /L %%i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" %%i\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("for 循环命令的使用比较复杂，必须认真阅读使用说明。")]),s._v(" "),t("ol",{attrs:{start:"10"}},[t("li",[s._v("if语句\nif语句有三种格式：")])]),s._v(" "),t("ul",[t("li",[s._v("判定参数是否符合期望值："),t("code",[s._v('if [not] "参数" == "字符串"')]),s._v(" 待执行的命令")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc 123"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" first var"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value is :abc 123\n) else (\n    echo first var'")]),s._v("value not excepted, it is :%1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("判定文件是否存在："),t("code",[s._v("if [not] exist [路径\\文件名]")]),s._v(" 待执行的命令")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" exist "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc 123.txt"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" content of "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" abc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(".txt is "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc 123.txt"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" abc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(".txt is exist "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncall subif.bat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("根据errorlevel来执行命令\n"),t("code",[s._v("if errorlevel <数字>")]),s._v(" 待执行的命令,返回值必须按照从大到小的顺序排列 。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" errorlevel "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" errorlevel is three "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" errorlevel "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" errorlevel is two "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" errorlevel "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" errorlevel is one "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" execute success "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsubif.bat\n@echo off\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    rem 加上/b选项表示退出当前批处理，而不是退出cmd.exe\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" /b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" /b %1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("ol",{attrs:{start:"11"}},[t("li",[s._v("动态环境变量\n|变量|说明|\n|--|--|\n| "),t("code",[s._v("%CD%")]),s._v(" |                           扩充为当前目录（current directory）|\n| "),t("code",[s._v("%DATE%")]),s._v(" |                      扩充为当前日期|\n| "),t("code",[s._v("%TIME%")]),s._v(" |                       扩充为当前时间|\n| "),t("code",[s._v("%RANDOM%")]),s._v(" |                扩充为0到32767的随机数|")])])])}),[],!1,null,null,null);a.default=n.exports}}]);