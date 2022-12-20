(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{449:function(_,v,t){"use strict";t.r(v);var e=t(62),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"http协议和网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http协议和网络"}},[_._v("#")]),_._v(" Http协议和网络")]),_._v(" "),t("h2",{attrs:{id:"一、网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、网络"}},[_._v("#")]),_._v(" 一、网络")]),_._v(" "),t("p",[_._v("七层网络参考模型-OSI：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("✅应用层（HTTP、FTP、SMTP、TELNET）"),t("code",[_._v("报文")]),_._v(" "),t("code",[_._v("应用数据")])])]),_._v(" "),t("li",[t("p",[_._v("✅表示层（加密，ASCII）"),t("code",[_._v("报文")]),_._v(" "),t("code",[_._v("应用数据")]),_._v("编码解码压缩等")])]),_._v(" "),t("li",[t("p",[_._v("✅会话层（RPC，SQL）"),t("code",[_._v("报文")]),_._v(" "),t("code",[_._v("应用数据")])])]),_._v(" "),t("li",[t("p",[_._v("✅传输层（TCP，UDP）"),t("code",[_._v("段")]),_._v(" "),t("code",[_._v("端口")]),_._v(" "),t("code",[_._v("服务进程到服务进程")]),_._v("流量控制等")])]),_._v(" "),t("li",[t("p",[_._v("✅网络差（IP）"),t("code",[_._v("包")]),_._v(" "),t("code",[_._v("IP")]),_._v(" "),t("code",[_._v("端到端")])])]),_._v(" "),t("li",[t("p",[_._v("✅数据链路层 "),t("code",[_._v("帧")]),_._v(" "),t("code",[_._v("MAC地址")]),_._v(" "),t("code",[_._v("跳到跳")]),_._v("，ARP找到目标地址的MAC 网卡出厂会有全球唯一的MAC地址")])]),_._v(" "),t("li",[t("p",[_._v("✅物理层 "),t("code",[_._v("比特")]),_._v("传输二进制bit 10011000...")])])]),_._v(" "),t("p",[t("kbd",[t("strong",[_._v("应用层")]),_._v("[报文]")]),_._v("-> "),t("kbd",[t("strong",[_._v("传输层")]),_._v("[段=报文+PORT]")]),_._v("-> "),t("kbd",[t("strong",[_._v("网络层")]),_._v("[包=段+IP]")]),_._v("-> "),t("kbd",[t("strong",[_._v("数据链路层")]),_._v("[帧=包+MAC]")])]),_._v(" "),t("ol",[t("li",[t("p",[_._v("socket简单来说是对IP地址与端口的结合协议")])]),_._v(" "),t("li",[t("p",[_._v("IP地址")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("由4组8位（一共32位）的二进制数组成，常以XXX.XXX.XXX.XXX形式表示")])]),_._v(" "),t("li",[t("p",[_._v("每一组XXX表示小于或者等于255的十进制数")])]),_._v(" "),t("li",[t("p",[_._v("网络号+主机号")])]),_._v(" "),t("li",[t("p",[_._v("分类"),t("code",[_._v("A")]),_._v("、"),t("code",[_._v("B")]),_._v("、"),t("code",[_._v("C")]),_._v("、D、E")]),_._v(" "),t("p",[_._v("类|范围|网络数|主机数\n--|---|------|-----\nA|"),t("code",[_._v("0.0.0.0")]),_._v("~"),t("code",[_._v("127.255.255.255")]),_._v("|128|16777216\nB|"),t("code",[_._v("128.0.0.0")]),_._v("~"),t("code",[_._v("191.255.255.255")]),_._v("| 16384   |65536\nC|"),t("code",[_._v("192.0.0.0")]),_._v("~"),t("code",[_._v("223.255.255.255")]),_._v("|2097152|256")])])])]),_._v(" "),t("li",[t("p",[_._v("如果把IP比作一间房子，端口就是出入房子的窗户或者门")])]),_._v(" "),t("li",[t("p",[_._v("端口 "),t("code",[_._v("20、21-FTP")]),_._v(" "),t("code",[_._v("80-HTTP")]),_._v(" "),t("code",[_._v("443-HTTPS")]),_._v(" "),t("code",[_._v("53-DNS")]),_._v("  总数：65536个")])])]),_._v(" "),t("h2",{attrs:{id:"二、http无状态协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、http无状态协议"}},[_._v("#")]),_._v(" 二、HTTP无状态协议")]),_._v(" "),t("h3",{attrs:{id:"_1-http协议是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-http协议是什么"}},[_._v("#")]),_._v(" 1.HTTP协议是什么？")]),_._v(" "),t("p",[_._v("HTTP：超文本传输协议，是网络传输信息的一种规范。是基于 TCP 协议的"),t("strong",[_._v("应用层")]),_._v("传输协议，无状态的协议，是明文的")]),_._v(" "),t("h3",{attrs:{id:"_2-http协议发展历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-http协议发展历史"}},[_._v("#")]),_._v(" 2.HTTP协议发展历史")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("HTTP/1.0\n1996年，每个TCP连接只能发送一个请求。发送数据完毕，连接就关闭，如果还有请求别的资源，就得新建连接，继续三次握手，性能较差！")])]),_._v(" "),t("li",[t("p",[_._v("HTTP/1.1")]),_._v(" "),t("ol",[t("li",[_._v("1997年，加入了管道机制，在同一个TCP连接里，允许多个请求同时发送，增加了并发性，进一步改善了HTTP协议的效率。")]),_._v(" "),t("li",[_._v("最大改变就是引入持久连接，TCP默认不关闭，可以被多个HTTP复用，不用声明Connection: "),t("code",[_._v("keep-alive")]),_._v("；")]),_._v(" "),t("li",[_._v("Content-Length字段，告诉浏览器本次响应的数据长度是多少字节，后面的字节就是下一个响应的了；")]),_._v(" "),t("li",[_._v("新增了请求方式PUT、PATCH、OPTIONS、DELETE等")]),_._v(" "),t("li",[_._v("报文压缩，但是header不压缩")])])]),_._v(" "),t("li",[t("p",[_._v("HTTP/2")]),_._v(" "),t("ol",[t("li",[_._v("2015年，是二进制协议，不再是文本协议...报文变成了二进制帧")]),_._v(" "),t("li",[_._v("多路复用")]),_._v(" "),t("li",[_._v("header也会压缩，采用HPACK算法")])])]),_._v(" "),t("li",[t("p",[_._v("HTTP/3")]),_._v(" "),t("ol",[t("li",[_._v("2019年，采用"),t("code",[_._v("UDP")]),_._v("协议（快），在这一层上新增了个"),t("code",[_._v("QUIC")])])])])]),_._v(" "),t("h3",{attrs:{id:"_3-常用的http请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用的http请求"}},[_._v("#")]),_._v(" 3.常用的HTTP请求")]),_._v(" "),t("p",[t("strong",[_._v("请求报文")])]),_._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[_._v("GET /index.html HTTP/1.1\nHost:127.0.0.1:8080\nCookie:xxxxxxx\n\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br")])]),t("p",[t("strong",[_._v("响应报文")])]),_._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[_._v("HTTP/1.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("200")]),_._v("\nContent-Type:application/json\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br")])]),t("p",[t("strong",[_._v("请求方式")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("HTTP Method")]),_._v(" "),t("th",[_._v("安全/幂等性")]),_._v(" "),t("th",[_._v("用途")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("GET")]),_._v(" "),t("td",[_._v("安全/幂等")]),_._v(" "),t("td",[_._v("从服务器取出资源（一项或多项）")]),_._v(" "),t("td",[_._v("读操作安全，查询一次多次结果一致")])]),_._v(" "),t("tr",[t("td",[_._v("POST")]),_._v(" "),t("td",[_._v("非安全/非幂等")]),_._v(" "),t("td",[_._v("在服务器新建一个资源")]),_._v(" "),t("td",[_._v("写操作非安全，每多插入一次都会出现新结果")])]),_._v(" "),t("tr",[t("td",[_._v("PUT")]),_._v(" "),t("td",[_._v("安全/幂等")]),_._v(" "),t("td",[_._v("在服务器更新资源（客户端提供完整资源数据）")]),_._v(" "),t("td",[_._v("写操作非安全，一次和多次更新结果一致")])]),_._v(" "),t("tr",[t("td",[_._v("DELETE")]),_._v(" "),t("td",[_._v("安全/幂等")]),_._v(" "),t("td",[_._v("从服务器删除资源")]),_._v(" "),t("td",[_._v("写操作非安全，一次和多次删除结果一致")])]),_._v(" "),t("tr",[t("td",[_._v("PATCH")]),_._v(" "),t("td",[_._v("--")]),_._v(" "),t("td",[_._v("在服务器更新资源（客户端提供需要修改的资源数据）")]),_._v(" "),t("td",[_._v("--")])]),_._v(" "),t("tr",[t("td",[_._v("HEAD")]),_._v(" "),t("td",[_._v("--")]),_._v(" "),t("td",[_._v("--")]),_._v(" "),t("td",[_._v("--")])]),_._v(" "),t("tr",[t("td",[_._v("TRACE")]),_._v(" "),t("td",[_._v("--")]),_._v(" "),t("td",[_._v("--")]),_._v(" "),t("td",[_._v("--")])]),_._v(" "),t("tr",[t("td",[_._v("OPTION")]),_._v(" "),t("td",[_._v("--")]),_._v(" "),t("td",[_._v("--")]),_._v(" "),t("td",[_._v("--")])])])]),_._v(" "),t("p",[t("strong",[_._v("请求头")])]),_._v(" "),t("p",[_._v("Content-Type:")]),_._v(" "),t("ul",[t("li",[_._v("application/x-www-form-urlencoded - 表单")]),_._v(" "),t("li",[_._v("multipart/form-data; - 文件上传")])]),_._v(" "),t("p",[_._v("缓存")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("Cache-Control: 缓存")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("max-age=31536000 一年")])]),_._v(" "),t("li",[t("p",[_._v("no-cache 可以缓存，但每次要和服务器信息确认")])]),_._v(" "),t("li",[t("p",[_._v("no-store 不缓存")])]),_._v(" "),t("li",[t("p",[_._v("private 资源只给当前浏览器缓存，代理不得缓存")])]),_._v(" "),t("li",[t("p",[_._v("public 代理也能缓存")])])])]),_._v(" "),t("li",[t("p",[_._v("expires: 过期时间")])]),_._v(" "),t("li",[t("p",[_._v("last-modifield：最后修改时间，判断资源是否被修改")])])]),_._v(" "),t("h3",{attrs:{id:"_4-http状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-http状态码"}},[_._v("#")]),_._v(" 4.HTTP状态码")]),_._v(" "),t("ul",[t("li",[_._v("✅200 OK - 客户端请求成功 [GET]")]),_._v(" "),t("li",[_._v("✅201 Created 用户新建或修改数据成功 [POST/PUT/PATCH]")]),_._v(" "),t("li",[_._v("✅202 Accepted  表示一个请求已经进入后台排队（异步任务） [*]")]),_._v(" "),t("li",[_._v("✅204 Not Content 无内容")]),_._v(" "),t("li",[_._v("✅301 Move Permanently - 资源（网页等）被永久转移到其它URL")]),_._v(" "),t("li",[_._v("✅302 Found - 临时跳转，下次还是旧地址")]),_._v(" "),t("li",[_._v("✅304 Not Modified - 可以使用缓存的内容")]),_._v(" "),t("li",[_._v("✅400 Bad Request - 语法错误，不能被服务器所理解 [POST/PUT/PATCH]")]),_._v(" "),t("li",[_._v("✅401 Unauthorized - 请求未经认证，这个状态代码必须和WWW-Authenticate报头域一起使用 表示用户没有权限（令牌、用户名、密码错误）")]),_._v(" "),t("li",[_._v("✅403 Forbidden 表示用户未得到授权")]),_._v(" "),t("li",[_._v("✅404 Not Found - 请求资源不存在，可能是输入了错误的URL")]),_._v(" "),t("li",[_._v("✅500 Internal Server Error - 服务器内部错误")]),_._v(" "),t("li",[_._v("✅502 Bad Gateway - 网关错误，拿不到东西返回给C端")]),_._v(" "),t("li",[_._v("✅503 Server Unavailable - 服务器当前不能处理客户端的请求，一段时间后可能恢复正常。")])]),_._v(" "),t("h2",{attrs:{id:"三、tcp-可靠的传输协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、tcp-可靠的传输协议"}},[_._v("#")]),_._v(" 三、TCP-可靠的传输协议")]),_._v(" "),t("h3",{attrs:{id:"_1-tcp三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp三次握手"}},[_._v("#")]),_._v(" 1.TCP三次握手")]),_._v(" "),t("p",[_._v("1 "),t("kbd",[_._v("C")]),_._v(" send "),t("code",[_._v("SYN")]),_._v(" to "),t("kbd",[_._v("S")])]),_._v(" "),t("p",[_._v("2 "),t("kbd",[_._v("S")]),_._v(" reply "),t("code",[_._v("SYN")]),_._v("+"),t("code",[_._v("ACK")]),_._v(" to "),t("kbd",[_._v("C")])]),_._v(" "),t("p",[_._v("3 "),t("kbd",[_._v("C")]),_._v(" send "),t("code",[_._v("ACK")]),_._v(" to "),t("kbd",[_._v("S")])]),_._v(" "),t("h3",{attrs:{id:"_2-四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-四次挥手"}},[_._v("#")]),_._v(" 2.四次挥手")]),_._v(" "),t("p",[_._v("1 "),t("kbd",[_._v("C")]),_._v(" send "),t("code",[_._v("FIN")]),_._v("+"),t("code",[_._v("ACK")]),_._v(" to "),t("kbd",[_._v("S")])]),_._v(" "),t("p",[_._v("2 "),t("kbd",[_._v("S")]),_._v(" reply "),t("code",[_._v("ACK")]),_._v(" to "),t("kbd",[_._v("C")])]),_._v(" "),t("p",[_._v("3 "),t("kbd",[_._v("S")]),_._v(" reply "),t("code",[_._v("FIN")]),_._v(" + "),t("code",[_._v("ACK")]),_._v(" to "),t("kbd",[_._v("C")])]),_._v(" "),t("p",[_._v("4 "),t("kbd",[_._v("C")]),_._v(" send "),t("code",[_._v("ACK")]),_._v(" to "),t("kbd",[_._v("S")])])])}),[],!1,null,null,null);v.default=a.exports}}]);