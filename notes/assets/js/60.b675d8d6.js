(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{473:function(a,t,s){"use strict";s.r(t);var e=s(62),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"工作遇到错误汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作遇到错误汇总"}},[a._v("#")]),a._v(" 工作遇到错误汇总")]),a._v(" "),s("h2",{attrs:{id:"nginx配置tomcat9反向代理报错-java-lang-illegalargumentexception-the-character-is-never-valid-in-a-domain-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置tomcat9反向代理报错-java-lang-illegalargumentexception-the-character-is-never-valid-in-a-domain-name"}},[a._v("#")]),a._v(" nginx配置Tomcat9反向代理报错 java.lang.IllegalArgumentException: The character [_] is never valid in a domain name.")]),a._v(" "),s("ol",[s("li",[a._v("配置完nginx,访问反向代理的路径时报异常，异常信息如下：")])]),a._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[a._v("java.lang.IllegalArgumentException: The character [_] is never valid in a domain name.\n                at org.apache.tomcat.util.http.parser.HttpParser$DomainParseState.next(HttpParser.java:963)\n                at org.apache.tomcat.util.http.parser.HttpParser.readHostDomainName(HttpParser.java:859)\n                at org.apache.tomcat.util.http.parser.Host.parse(Host.java:71)\n                at org.apache.tomcat.util.http.parser.Host.parse(Host.java:45)\n                at org.apache.coyote.AbstractProcessor.parseHost(AbstractProcessor.java:288)\n                at org.apache.coyote.http11.Http11Processor.prepareRequest(Http11Processor.java:810)\n                at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:384)\n                at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:66)\n                at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:853)\n                at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1587)\n                at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)\n                at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\n                at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("经过仔细排查和上网查询，是配置时负载均衡配置出了问题")])]),a._v(" "),s("blockquote",[s("p",[a._v("原因是在nginx配置文件中配置upstream时用了“_”字符！！")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("//报错时候是这样的\nupstream tomcat_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    server  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n//修改后\nupstream tomcatServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    server  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("参考：https://www.cnblogs.com/arebirth/p/nginxerror_.html")])])}),[],!1,null,null,null);t.default=r.exports}}]);