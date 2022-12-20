(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{514:function(a,s,t){"use strict";t.r(s);var n=t(62),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"springcloud-各组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-各组件"}},[a._v("#")]),a._v(" SpringCloud 各组件")]),a._v(" "),t("p",[a._v("微服务：一系列围绕业务开发的可独立运行的小服务，一个服务通常实现了一组特性或功能，各个服务之间通过暴露出来的api连接交互。\n优缺点：")]),a._v(" "),t("ul",[t("li",[a._v("将单体应用架构拆分为多个单一职责的微服务，单独部署，服务之间通过网络通信")]),a._v(" "),t("li",[a._v("每个服务可以有自己的团队负责，高度自治理")]),a._v(" "),t("li",[a._v("松耦合，避免一个服务奔溃导致整个系统无法使用")]),a._v(" "),t("li",[a._v("要开发人员处理分布式系统复杂性")]),a._v(" "),t("li",[a._v("运维难度增加")]),a._v(" "),t("li",[a._v("服务治理服务监控变得重要复杂")])]),a._v(" "),t("p",[a._v("SpringCloud：当前最火的微服务架构")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("项目")]),a._v(" "),t("th",[a._v("名称")]),a._v(" "),t("th",[a._v("备注")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("注册中心")]),a._v(" "),t("td",[a._v("Eureka-Server、Consul、Nacos")]),a._v(" "),t("td",[a._v("Nacos是阿里开源的集注册和配置中心为一体")])]),a._v(" "),t("tr",[t("td",[a._v("负载均衡 & 服务调用")]),a._v(" "),t("td",[a._v("Ribbion、OpenFeign")]),a._v(" "),t("td",[a._v("服务直接通过Http调用")])]),a._v(" "),t("tr",[t("td",[a._v("网关")]),a._v(" "),t("td",[a._v("Zuul、GateWay")]),a._v(" "),t("td",[a._v("路由，检验，过滤请求")])]),a._v(" "),t("tr",[t("td",[a._v("配置中心")]),a._v(" "),t("td",[a._v("Config、Nacos")]),a._v(" "),t("td",[a._v("统一的配置")])]),a._v(" "),t("tr",[t("td",[a._v("熔断 服务监控")]),a._v(" "),t("td",[a._v("hystrix、hystrix dashboard")]),a._v(" "),t("td",[a._v("监控和熔断")])])])]),a._v(" "),t("p",[a._v("SpringCloud版本号：是根据伦敦地铁站字母命名的\n"),t("code",[a._v("Angel、Brixton、Camden、Dalston、Edgware、Finchley、Greenwich、Hoxton")])]),a._v(" "),t("h2",{attrs:{id:"一、注册中心eureka"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、注册中心eureka"}},[a._v("#")]),a._v(" 一、注册中心Eureka")]),a._v(" "),t("p",[a._v("Eureka包含两个组件，Eureka Client和Eureka Server")]),a._v(" "),t("ul",[t("li",[a._v("Eureka Server\n提供服务注册的服务，各节点启动之后会在Eureka Server进行注册，Eureka Server通过Register、Get、Renew等接口提供服务的注册、发现和心跳检测等服务！\n里面有一个注册表，保存了各个服务所在的机器和端口号")])]),a._v(" "),t("p",[a._v("Eureka Server主要有服务提供者和服务消费者；客户端同时也具备一个内置的、使用轮询(round-robin)负载算法的负载均衡器。在应用启动后，将会向Eureka Server发送心跳,默认周期为30秒，如果Eureka Server在多个心跳周期内没有接收到某个节点的心跳，Eureka Server将会从服务注册表中把这个服务节点移除(默认90秒)。")]),a._v(" "),t("ul",[t("li",[a._v("Register:服务注册，把自己的IP和端口注册给Eureka")]),a._v(" "),t("li",[a._v("Renew:服务续约，发送心跳包，每30秒发送一次。告诉Eureka自己还活着")]),a._v(" "),t("li",[a._v("Cancel:服务下线，当provider关闭时会向Eureka发送消息，把自己从服务列表中删除。防止consumer调用到不存在的服务")]),a._v(" "),t("li",[a._v("Get Registry:获取服务注册列表，获取其他服务列表")]),a._v(" "),t("li",[a._v("Replicate:集群中数据同步，eureka集群中的数据复制与同步。")]),a._v(" "),t("li",[a._v("Make Remote Call:远程调用，完成服务的远程调用。")])]),a._v(" "),t("p",[a._v("搭建EurekaServer步骤")]),a._v(" "),t("ol",[t("li",[a._v("引入依赖")])]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-netflix-eureka-server"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("配置Eureka")])]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7001")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("application")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" eureka"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("eureka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("instance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hostname")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Eureka服务端实例名")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("client")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("register-with-eureka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 是否将自己注册到EurekaServer中，默认的为true")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fetch-registry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 是否从EurekaServer中获取服务注册信息，默认的为true")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("service-url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("defaultZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("eureka.instance.hostname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("server.port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("/eureka/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置与EurekaServer交互的地址和注册服务都需要依赖这个地址")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("启动类加上注解 "),t("code",[a._v("@EnableEurekaServer")])]),a._v(" "),t("li",[a._v("查看Eureka 访问EurekaServer http://{ip}:{port}/")])]),a._v(" "),t("p",[a._v("Eureka客户端-服务提供者搭建步骤")]),a._v(" "),t("ol",[t("li",[a._v("引入依赖")])]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.boot"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-boot-starter-web"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-netflix-eureka-client"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("新增配置")])]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("application")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("provider\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("eureka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("client")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("register-with-eureka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将自己注册进EurekaServer 默认true")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fetch-registry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 从EurekaServer中抓取已有的注册信息，默认为true")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("service-url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("defaultZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("7001/eureka\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("添加注解 "),t("code",[a._v("@EnableEurekaClient")])])]),a._v(" "),t("p",[a._v("Eureka客户端-服务消费者搭建步骤（同上）")]),a._v(" "),t("p",[a._v("Eureka自我保护机制：\n当我们关掉Client的时候，理论上注册中心不会有这个Client的注册信息了，但是实际会保留Client的注册信息，这是因为EurekaServer开启了自我保护机制")]),a._v(" "),t("p",[a._v('默认情况下，如果Eureka Server在一定时间内（默认90秒）没有接收到某个微服务实例的心跳，Eureka Server将会移除该实例。但是当网络分区故障发生时，微服务与Eureka Server之间无法正常通信，而微服务本身是正常运行的，此时不应该移除这个微服务，所以引入了自我保护机制。Eureka Server在运行期间会去统计心跳失败比例在 15 分钟之内是否低于 85%，如果低于 85%，Eureka Server 会将这些实例保护起来，让这些实例不会过期。这种设计的哲学原理就是"宁可信其有不可信其无!"。自我保护模式正是一种针对网络异常波动的安全保护措施，使用自我保护模式能使Eureka集群更加的健壮、稳定的运行')]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# eureka server")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 关闭自我保护")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("eureka.server.enable-self-preservation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("false")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 超时3s自动清除 60*1000  1分钟")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("eureka.server.eviction-interval-timer-in-ms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("3000")]),a._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# eureka client")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 用来修改eureka server默认接受心跳的最大时间 默认是90s")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("eureka.instance.lease-expiration-duration-in-seconds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("10")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定客户端多久向eureka server发送一次心跳 默认是30s")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("eureka.instance.lease-renewal-interval-in-seconds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("5")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("p",[a._v("Eureka 2.0 (Discontinued) 已经停止更新了")]),a._v(" "),t("h2",{attrs:{id:"二、负载均衡-ribbon、feign-openfeign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、负载均衡-ribbon、feign-openfeign"}},[a._v("#")]),a._v(" 二、负载均衡 Ribbon、Feign(OpenFeign)")]),a._v(" "),t("p",[a._v("负载均衡就是吧客户端请求均匀分配到各负载上（服务提供者机器上）,Ribbon是在客户端进行负载均衡的")]),a._v(" "),t("ul",[t("li",[a._v("Ribbon：面向服务的")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RestTemplateConfig")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@LoadBalanced")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Ribbon负载均衡 默认是轮询")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RestTemplate")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("restTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RestTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("p",[a._v("配置负载均衡规则：注意千万不要建在主启动类同一级目录下，不然会有问题。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyRule")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//切换负载均衡算法为随机")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IRule")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyRule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RandomRule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("启动类去配置 "),t("code",[a._v('@RibbonClient(name = "SPRING-CLOUD-PROVIDER", configuration = RibbonRuleConfig.class)')])]),a._v(" "),t("ul",[t("li",[a._v("Feign：面向对象的，类似接口方式，封装了Ribbon\n引入依赖")])]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[a._v("        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-openfeign"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("feign客户端")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@FeignClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"SPRING-CLOUD-PROVIDER"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FeignService")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/provider/list"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("list")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RequestParam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("客户端启动类新增注解 "),t("code",[a._v('@EnableFeignClients(basePackages = "com.biubiu")')])]),a._v(" "),t("h2",{attrs:{id:"三、服务熔断-服务降级-监控-hustrix、hustrix-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、服务熔断-服务降级-监控-hustrix、hustrix-dashboard"}},[a._v("#")]),a._v(" 三、服务熔断，服务降级，监控 hustrix、hustrix-dashboard")]),a._v(" "),t("p",[a._v("服务雪崩：微服务之间由于某一个服务故障，导致级联故障的现象\n服务熔断：通过断路器(Hystrix)的故障监控，当某个异常条件被触发时直接熔断整个服务。向调用方法返回一个符合预期的、可处理的备选响应(FallBack)，而不是长时间的等待或者抛出调用方法无法处理的异常，就保证了服务调用方的线程不会被长时间占用，避免故障在分布式系统中蔓延，乃至雪崩。服务熔断是解决服务雪崩的重要手段\n服务降级：关闭微服务系统中某些边缘服务以保证系统核心服务正常运行")]),a._v(" "),t("p",[a._v("就是为了保证高可用，不至于崩掉")]),a._v(" "),t("h2",{attrs:{id:"四、网关-路由-zuul-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、网关-路由-zuul-gateway"}},[a._v("#")]),a._v(" 四、网关，路由 zuul Gateway")]),a._v(" "),t("ul",[t("li",[a._v("统一所有服务入口，对外隐藏微服务的ip地址")]),a._v(" "),t("li",[a._v("实现请求路由转发，请求过程负载均衡")]),a._v(" "),t("li",[a._v("身份认证、防报文重发与数据篡改、业务鉴权、响应数据脱敏、流量与并发控制，甚至基于API调用的计量或者计费等")])]),a._v(" "),t("p",[a._v("简单来说：网关 = 路由转发 + 过滤器")]),a._v(" "),t("p",[a._v("微服务常用网关主要有两个：一个是Netflix的zuul和Spring的Gateway")]),a._v(" "),t("h2",{attrs:{id:"五、配置中心-config、nacos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、配置中心-config、nacos"}},[a._v("#")]),a._v(" 五、配置中心 Config、Nacos")])])}),[],!1,null,null,null);s.default=e.exports}}]);