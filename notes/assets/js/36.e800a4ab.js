(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{449:function(v,_,t){"use strict";t.r(_);var e=t(62),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"http协议和网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http协议和网络"}},[v._v("#")]),v._v(" HTTP协议和网络")]),v._v(" "),t("h2",{attrs:{id:"一、网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、网络"}},[v._v("#")]),v._v(" 一、网络")]),v._v(" "),t("p",[v._v("七层网络参考模型-OSI：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("✅应用层（HTTP、FTP、SMTP、TELNET）"),t("code",[v._v("报文")]),v._v(" "),t("code",[v._v("应用数据")])])]),v._v(" "),t("li",[t("p",[v._v("✅表示层（加密，ASCII）"),t("code",[v._v("报文")]),v._v(" "),t("code",[v._v("应用数据")]),v._v("编码解码压缩等")])]),v._v(" "),t("li",[t("p",[v._v("✅会话层（RPC，SQL）"),t("code",[v._v("报文")]),v._v(" "),t("code",[v._v("应用数据")])])]),v._v(" "),t("li",[t("p",[v._v("✅传输层（TCP，UDP）"),t("code",[v._v("段")]),v._v(" "),t("code",[v._v("端口")]),v._v(" "),t("code",[v._v("服务进程到服务进程")]),v._v("流量控制等")])]),v._v(" "),t("li",[t("p",[v._v("✅网络差（IP）"),t("code",[v._v("包")]),v._v(" "),t("code",[v._v("IP")]),v._v(" "),t("code",[v._v("端到端")])])]),v._v(" "),t("li",[t("p",[v._v("✅数据链路层 "),t("code",[v._v("帧")]),v._v(" "),t("code",[v._v("MAC地址")]),v._v(" "),t("code",[v._v("跳到跳")]),v._v("，ARP找到目标地址的MAC 网卡出厂会有全球唯一的MAC地址")])]),v._v(" "),t("li",[t("p",[v._v("✅物理层 "),t("code",[v._v("比特")]),v._v("传输二进制bit 10011000...")])])]),v._v(" "),t("p",[t("kbd",[t("strong",[v._v("应用层")]),v._v("[报文]")]),v._v("-> "),t("kbd",[t("strong",[v._v("传输层")]),v._v("[段=报文+PORT]")]),v._v("-> "),t("kbd",[t("strong",[v._v("网络层")]),v._v("[包=段+IP]")]),v._v("-> "),t("kbd",[t("strong",[v._v("数据链路层")]),v._v("[帧=包+MAC]")])]),v._v(" "),t("ol",[t("li",[t("p",[v._v("socket简单来说是对IP地址与端口的结合协议")])]),v._v(" "),t("li",[t("p",[v._v("IP地址")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("由4组8位（一共32位）的二进制数组成，常以XXX.XXX.XXX.XXX形式表示")])]),v._v(" "),t("li",[t("p",[v._v("每一组XXX表示小于或者等于255的十进制数")])]),v._v(" "),t("li",[t("p",[v._v("网络号+主机号")])]),v._v(" "),t("li",[t("p",[v._v("分类"),t("code",[v._v("A")]),v._v("、"),t("code",[v._v("B")]),v._v("、"),t("code",[v._v("C")]),v._v("、D、E")]),v._v(" "),t("p",[v._v("类|范围|网络数|主机数\n--|---|------|-----\nA|"),t("code",[v._v("0.0.0.0")]),v._v("~"),t("code",[v._v("127.255.255.255")]),v._v("|128|16777216\nB|"),t("code",[v._v("128.0.0.0")]),v._v("~"),t("code",[v._v("191.255.255.255")]),v._v("| 16384   |65536\nC|"),t("code",[v._v("192.0.0.0")]),v._v("~"),t("code",[v._v("223.255.255.255")]),v._v("|2097152|256")])])])]),v._v(" "),t("li",[t("p",[v._v("如果把IP比作一间房子，端口就是出入房子的窗户或者门")])]),v._v(" "),t("li",[t("p",[v._v("端口 "),t("code",[v._v("20、21-FTP")]),v._v(" "),t("code",[v._v("80-HTTP")]),v._v(" "),t("code",[v._v("443-HTTPS")]),v._v(" "),t("code",[v._v("53-DNS")]),v._v("  总数：65536个")])])]),v._v(" "),t("h2",{attrs:{id:"二、http无状态协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、http无状态协议"}},[v._v("#")]),v._v(" 二、HTTP无状态协议")]),v._v(" "),t("h3",{attrs:{id:"_1-http协议是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-http协议是什么"}},[v._v("#")]),v._v(" 1.HTTP协议是什么？")]),v._v(" "),t("p",[v._v("HTTP：超文本传输协议，是网络传输信息的一种规范。是基于TCP协议的"),t("strong",[v._v("应用层")]),v._v("传输协议，无状态的协议，是明文的")]),v._v(" "),t("h3",{attrs:{id:"_2-http协议发展历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-http协议发展历史"}},[v._v("#")]),v._v(" 2.HTTP协议发展历史")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("HTTP/1.0\n1996年，每个TCP连接只能发送一个请求。发送数据完毕，连接就关闭，如果还有请求别的资源，就得新建连接，继续三次握手，性能较差！")])]),v._v(" "),t("li",[t("p",[v._v("HTTP/1.1")]),v._v(" "),t("ol",[t("li",[v._v("1997年，加入了管道机制，在同一个TCP连接里，允许多个请求同时发送，增加了并发性，进一步改善了HTTP协议的效率。")]),v._v(" "),t("li",[v._v("最大改变就是引入持久连接，TCP默认不关闭，可以被多个HTTP复用，不用声明Connection: "),t("code",[v._v("keep-alive")]),v._v("；")]),v._v(" "),t("li",[v._v("Content-Length字段，告诉浏览器本次响应的数据长度是多少字节，后面的字节就是下一个响应的了；")]),v._v(" "),t("li",[v._v("新增了请求方式PUT、PATCH、OPTIONS、DELETE等")]),v._v(" "),t("li",[v._v("报文压缩，但是header不压缩")])])]),v._v(" "),t("li",[t("p",[v._v("HTTP/2")]),v._v(" "),t("ol",[t("li",[v._v("2015年，是二进制协议，不再是文本协议...报文变成了二进制帧")]),v._v(" "),t("li",[v._v("多路复用")]),v._v(" "),t("li",[v._v("header也会压缩，采用HPACK算法")])])]),v._v(" "),t("li",[t("p",[v._v("HTTP/3")]),v._v(" "),t("ol",[t("li",[v._v("2019年，采用"),t("code",[v._v("UDP")]),v._v("协议（快），在这一层上新增了个"),t("code",[v._v("QUIC")])])])])]),v._v(" "),t("h3",{attrs:{id:"_3-常用的http请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用的http请求"}},[v._v("#")]),v._v(" 3.常用的HTTP请求")]),v._v(" "),t("p",[t("strong",[v._v("请求报文")])]),v._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("GET /index.html HTTP/1.1\nHost:127.0.0.1:8080\nConnection: keep-alive\n\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br")])]),t("p",[t("strong",[v._v("响应报文")])]),v._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("HTTP/1.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("200")]),v._v(" OK\nConnection: Keep-Alive\nContent-Encoding: "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("gzip")]),v._v("\nContent-Type: text/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v._v("charset")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("utf-8\nTransfer-Encoding: chunked\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("/html"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br"),t("span",{staticClass:"line-number"},[v._v("7")]),t("br")])]),t("p",[t("strong",[v._v("请求方式")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("HTTP Method")]),v._v(" "),t("th",[v._v("安全/幂等性")]),v._v(" "),t("th",[v._v("用途")]),v._v(" "),t("th",[v._v("备注")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("GET")]),v._v(" "),t("td",[v._v("安全/幂等")]),v._v(" "),t("td",[v._v("从服务器取出资源（一项或多项）")]),v._v(" "),t("td",[v._v("读操作安全，查询一次多次结果一致")])]),v._v(" "),t("tr",[t("td",[v._v("POST")]),v._v(" "),t("td",[v._v("非安全/非幂等")]),v._v(" "),t("td",[v._v("在服务器新建一个资源")]),v._v(" "),t("td",[v._v("写操作非安全，每多插入一次都会出现新结果")])]),v._v(" "),t("tr",[t("td",[v._v("PUT")]),v._v(" "),t("td",[v._v("安全/幂等")]),v._v(" "),t("td",[v._v("在服务器更新资源（客户端提供完整资源数据）")]),v._v(" "),t("td",[v._v("写操作非安全，一次和多次更新结果一致")])]),v._v(" "),t("tr",[t("td",[v._v("DELETE")]),v._v(" "),t("td",[v._v("安全/幂等")]),v._v(" "),t("td",[v._v("从服务器删除资源")]),v._v(" "),t("td",[v._v("写操作非安全，一次和多次删除结果一致")])]),v._v(" "),t("tr",[t("td",[v._v("PATCH")]),v._v(" "),t("td",[v._v("--")]),v._v(" "),t("td",[v._v("在服务器更新资源（客户端提供需要修改的资源数据）")]),v._v(" "),t("td",[v._v("--")])]),v._v(" "),t("tr",[t("td",[v._v("HEAD")]),v._v(" "),t("td",[v._v("--")]),v._v(" "),t("td",[v._v("--")]),v._v(" "),t("td",[v._v("--")])]),v._v(" "),t("tr",[t("td",[v._v("TRACE")]),v._v(" "),t("td",[v._v("--")]),v._v(" "),t("td",[v._v("--")]),v._v(" "),t("td",[v._v("--")])]),v._v(" "),t("tr",[t("td",[v._v("OPTION")]),v._v(" "),t("td",[v._v("--")]),v._v(" "),t("td",[v._v("--")]),v._v(" "),t("td",[v._v("--")])])])]),v._v(" "),t("p",[t("strong",[v._v("请求头")])]),v._v(" "),t("p",[v._v("Content-Type:")]),v._v(" "),t("ul",[t("li",[v._v("application/x-www-form-urlencoded - 表单")]),v._v(" "),t("li",[v._v("multipart/form-data; - 文件上传")])]),v._v(" "),t("p",[v._v("缓存")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Cache-Control: 缓存")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("max-age=31536000 一年")])]),v._v(" "),t("li",[t("p",[v._v("no-cache 可以缓存，但每次要和服务器信息确认")])]),v._v(" "),t("li",[t("p",[v._v("no-store 不缓存")])]),v._v(" "),t("li",[t("p",[v._v("private 资源只给当前浏览器缓存，代理不得缓存")])]),v._v(" "),t("li",[t("p",[v._v("public 代理也能缓存")])])])]),v._v(" "),t("li",[t("p",[v._v("expires: 过期时间")])]),v._v(" "),t("li",[t("p",[v._v("last-modifield：最后修改时间，判断资源是否被修改")])])]),v._v(" "),t("h3",{attrs:{id:"_4-http状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-http状态码"}},[v._v("#")]),v._v(" 4.HTTP状态码")]),v._v(" "),t("ul",[t("li",[v._v("✅200 OK - 客户端请求成功 [GET]")]),v._v(" "),t("li",[v._v("✅201 Created 用户新建或修改数据成功 [POST/PUT/PATCH]")]),v._v(" "),t("li",[v._v("✅202 Accepted  表示一个请求已经进入后台排队（异步任务） [*]")]),v._v(" "),t("li",[v._v("✅204 Not Content 无内容")]),v._v(" "),t("li",[v._v("✅301 Move Permanently - 资源（网页等）被永久转移到其它URL")]),v._v(" "),t("li",[v._v("✅302 Found - 临时跳转，下次还是旧地址")]),v._v(" "),t("li",[v._v("✅304 Not Modified - 可以使用缓存的内容")]),v._v(" "),t("li",[v._v("✅400 Bad Request - 语法错误，不能被服务器所理解 [POST/PUT/PATCH]")]),v._v(" "),t("li",[v._v("✅401 Unauthorized - 请求未经认证，这个状态代码必须和WWW-Authenticate报头域一起使用 表示用户没有权限（令牌、用户名、密码错误）")]),v._v(" "),t("li",[v._v("✅403 Forbidden 表示用户未得到授权")]),v._v(" "),t("li",[v._v("✅404 Not Found - 请求资源不存在，可能是输入了错误的URL")]),v._v(" "),t("li",[v._v("✅500 Internal Server Error - 服务器内部错误")]),v._v(" "),t("li",[v._v("✅502 Bad Gateway - 网关错误，拿不到东西返回给C端")]),v._v(" "),t("li",[v._v("✅503 Server Unavailable - 服务器当前不能处理客户端的请求，一段时间后可能恢复正常。")])]),v._v(" "),t("h3",{attrs:{id:"_5-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-rpc"}},[v._v("#")]),v._v(" 5.RPC")]),v._v(" "),t("p",[v._v("远程过程调用，常见的有gRPC，Dubbo")]),v._v(" "),t("p",[t("strong",[v._v("服务发现")]),v._v("：向某个服务器发送请求，得先建立连接，前提是得知道ip地址和端口，这个找ip和端口得过程就是服务发现")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th"),v._v(" "),t("th",[v._v("HTTP")]),v._v(" "),t("th",[v._v("RPC")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("向服务器发送请求")]),v._v(" "),t("td",[v._v("使用DNS域名解析就可以发现获取地址")]),v._v(" "),t("td",[v._v("会有专门中间键去解决，比如Consul，Nacos，Zookeeper，Redis，DNS")])]),v._v(" "),t("tr",[t("td",[v._v("底层连接形式")]),v._v(" "),t("td",[v._v("HTTP/1.1默认是TCP连接之后，会"),t("font",{attrs:{color:"red"}},[v._v("Keep Alive")])],1),v._v(" "),t("td",[v._v("TCP"),t("font",{attrs:{color:"red"}},[v._v("长连接")]),v._v("数据交互")],1)]),v._v(" "),t("tr",[t("td",[v._v("数据内容")]),v._v(" "),t("td",[v._v("二进制字节流，一般是以字符串内容为主，一般使用JSON序列化数据")]),v._v(" "),t("td",[v._v("序列化协议多种多样，比如protobuf")])])])]),v._v(" "),t("h2",{attrs:{id:"三、tcp-可靠的传输协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、tcp-可靠的传输协议"}},[v._v("#")]),v._v(" 三、TCP-可靠的传输协议")]),v._v(" "),t("h3",{attrs:{id:"_1-tcp三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp三次握手"}},[v._v("#")]),v._v(" 1.TCP三次握手")]),v._v(" "),t("p",[v._v("1 "),t("kbd",[v._v("C")]),v._v(" send "),t("code",[v._v("SYN")]),v._v(" to "),t("kbd",[v._v("S")])]),v._v(" "),t("p",[v._v("2 "),t("kbd",[v._v("S")]),v._v(" reply "),t("code",[v._v("SYN")]),v._v("+"),t("code",[v._v("ACK")]),v._v(" to "),t("kbd",[v._v("C")])]),v._v(" "),t("p",[v._v("3 "),t("kbd",[v._v("C")]),v._v(" send "),t("code",[v._v("ACK")]),v._v(" to "),t("kbd",[v._v("S")])]),v._v(" "),t("h3",{attrs:{id:"_2-四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-四次挥手"}},[v._v("#")]),v._v(" 2.四次挥手")]),v._v(" "),t("p",[v._v("1 "),t("kbd",[v._v("C")]),v._v(" send "),t("code",[v._v("FIN")]),v._v("+"),t("code",[v._v("ACK")]),v._v(" to "),t("kbd",[v._v("S")])]),v._v(" "),t("p",[v._v("2 "),t("kbd",[v._v("S")]),v._v(" reply "),t("code",[v._v("ACK")]),v._v(" to "),t("kbd",[v._v("C")])]),v._v(" "),t("p",[v._v("3 "),t("kbd",[v._v("S")]),v._v(" reply "),t("code",[v._v("FIN")]),v._v(" + "),t("code",[v._v("ACK")]),v._v(" to "),t("kbd",[v._v("C")])]),v._v(" "),t("p",[v._v("4 "),t("kbd",[v._v("C")]),v._v(" send "),t("code",[v._v("ACK")]),v._v(" to "),t("kbd",[v._v("S")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th"),v._v(" "),t("th",[v._v("TCP")]),v._v(" "),t("th",[v._v("UDP")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("可靠性")]),v._v(" "),t("td",[t("font",{attrs:{color:"red"}},[v._v("可靠的")])],1),v._v(" "),t("td",[v._v("不可靠")])]),v._v(" "),t("tr",[t("td",[v._v("连接性")]),v._v(" "),t("td",[t("font",{attrs:{color:"red"}},[v._v("面向连接")]),v._v("，需要三次握手，四次挥手等")],1),v._v(" "),t("td",[v._v("无连接")])]),v._v(" "),t("tr",[t("td",[v._v("报文")]),v._v(" "),t("td",[t("font",{attrs:{color:"red"}},[v._v("基于字节流")])],1),v._v(" "),t("td",[v._v("面向报文")])]),v._v(" "),t("tr",[t("td",[v._v("传输速度")]),v._v(" "),t("td",[v._v("慢")]),v._v(" "),t("td",[v._v("快")])]),v._v(" "),t("tr",[t("td",[v._v("应用场景")]),v._v(" "),t("td",[v._v("对效率要求低，对准确性要求高，有连接的场景")]),v._v(" "),t("td",[v._v("对效率要求高，对准确性要求低")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);