(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{455:function(t,a,s){"use strict";s.r(a);var n=s(62),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"bigdecimal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bigdecimal"}},[t._v("#")]),t._v(" BigDecimal")]),t._v(" "),s("p",[t._v("学一个东西，必须带着问题去学习...【为什么？】【是什么？】【怎么用？】")]),t._v(" "),s("h3",{attrs:{id:"为什么要用bigdecimal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用bigdecimal"}},[t._v("#")]),t._v(" 为什么要用BigDecimal?")]),t._v(" "),s("p",[t._v("首先，看一个现象")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://z3.ax1x.com/2021/11/25/okAFr8.png",alt:"okAFr8.png"}})]),t._v(" "),s("p",[t._v("为啥会出现这种情况呢？")]),t._v(" "),s("blockquote",[s("p",[t._v("不论是float还是double在计算机中都是二进制的，浮点数会失去一定的精度（十进制数的二进制表示形式可能不精确，只能无限接近于那个值）")])]),t._v(" "),s("p",[t._v("但是，在项目中，我们不可能让这种情况出现，特别是金融项目，因为涉及金额的计算都必须十分精确，你想想，如果你的支付宝账户余额显示193.99999999999998，那是一种怎么样的体验？")]),t._v(" "),s("h3",{attrs:{id:"bigdecimal是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bigdecimal是什么"}},[t._v("#")]),t._v(" BigDecimal是什么?")]),t._v(" "),s("p",[t._v("Java在java.math包中提供的API类BigDecimal，用来对超过16位有效位的数进行精确的运算")]),t._v(" "),s("ol",[s("li",[t._v("构造器推荐使用 BigDecimal(String)")]),t._v(" "),s("li",[t._v("方法：")])]),t._v(" "),s("ul",[s("li",[t._v("add(BigDecimal)")]),t._v(" "),s("li",[t._v("subtract(BigDecimal)")]),t._v(" "),s("li",[t._v("multiply(BigDecimal)")]),t._v(" "),s("li",[t._v("divide(BigDecimal)")]),t._v(" "),s("li",[t._v("toString()")]),t._v(" "),s("li",[t._v("doubleValue()")]),t._v(" "),s("li",[t._v("intValue()")])]),t._v(" "),s("h3",{attrs:{id:"怎么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么用"}},[t._v("#")]),t._v(" 怎么用？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://z3.ax1x.com/2021/11/25/okAEVg.md.png",alt:"okAEVg.md.png"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://z3.ax1x.com/2021/11/25/okAkqS.md.png",alt:"okAkqS.md.png"}})]),t._v(" "),s("p",[t._v("再进行除法运算的时候，暴怒能整除（有余数）会报错java.lang.ArithmeticException，避免报错，需要多传两个参数")]),t._v(" "),s("p",[s("code",[t._v("divide(BigDecimal，保留小数点后几位小数，舍入模式)")])]),t._v(" "),s("p",[s("strong",[t._v("舍入模式")])]),t._v(" "),s("ul",[s("li",[t._v("ROUND_UP\n在丢弃非零部分之前始终增加数字(始终对非零舍弃部分前面的数字加1)")]),t._v(" "),s("li",[t._v("ROUND_DOWN\n在丢弃某部分之前始终不增加数字(从不对舍弃部分前面的数字加1，即截断)。")]),t._v(" "),s("li",[t._v("ROUND_CEILING\n如果 BigDecimal 为正，则舍入行为与 ROUND_UP 相同,如果为负，则舍入行为与 ROUND_DOWN 相同")]),t._v(" "),s("li",[t._v("ROUND_FLOOR\n如果 BigDecimal 为正，则舍入行为与 ROUND_DOWN 相同;如果为负，则舍入行为与 ROUND_UP 相同")]),t._v(" "),s("li",[t._v("ROUND_HALF_UP\n在小学时就学过的舍入模式(四舍五入)")]),t._v(" "),s("li",[t._v("ROUND_HALF_DOWN\n五舍六入")]),t._v(" "),s("li",[t._v("ROUND_HALF_EVEN\n1.15>1.2 1.25>1.2")]),t._v(" "),s("li",[t._v("ROUND_UNNECESSARY")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://z3.ax1x.com/2021/11/25/okAiKf.md.png",alt:"okAiKf.md.png"}})]),t._v(" "),s("ol",[s("li",[t._v("举个例子：\n一套房子由于各种原因现在只卖156w，比以前降价14w，计算降幅？")])]),t._v(" "),s("p",[t._v("现在卖：1560000，以前卖：1560000+140000，降价140000\n降幅 = 降价 / 以前卖 = 140000 / (1560000+140000) * 100%")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),t._v(" price_now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1560000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),t._v(" price_jiang "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"140000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),t._v(" price_before "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" price_now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price_jiang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" rs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" price_jiang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("divide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price_before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RoundingMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DOWN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("参考：https://blog.csdn.net/qq_35868412/article/details/89029288")])])}),[],!1,null,null,null);a.default=e.exports}}]);