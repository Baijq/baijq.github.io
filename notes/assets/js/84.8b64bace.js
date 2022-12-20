(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{499:function(l,e,o){"use strict";o.r(e);var t=o(62),r=Object(t.a)({},(function(){var l=this,e=l.$createElement,o=l._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[o("h1",{attrs:{id:"apollo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#apollo"}},[l._v("#")]),l._v(" Apollo")]),l._v(" "),o("p",[o("img",{attrs:{src:"https://s1.ax1x.com/2022/06/28/jZXzdA.png",alt:"jZXzdA.png"}})]),l._v(" "),o("p",[l._v("上图简要描述了Apollo的总体设计，我们可以从下往上看：")]),l._v(" "),o("ul",[o("li",[l._v("Config Service提供配置的读取、推送等功能，服务对象是Apollo客户端")]),l._v(" "),o("li",[l._v("Admin Service提供配置的修改、发布等功能，服务对象是Apollo Portal（管理界面）")]),l._v(" "),o("li",[l._v("Config Service和Admin Service都是多实例、无状态部署，所以需要将自己注册到Eureka中并保持心跳")]),l._v(" "),o("li",[l._v("在Eureka之上我们架了一层Meta Server用于封装Eureka的服务发现接口")]),l._v(" "),o("li",[l._v("Client通过域名访问Meta Server获取Config Service服务列表（IP+Port），而后直接通过IP+Port访问服务，同时在Client侧会做load balance、错误重试")]),l._v(" "),o("li",[l._v("Portal通过域名访问Meta Server获取Admin Service服务列表（IP+Port），而后直接通过IP+Port访问服务，同时在Portal侧会做load balance、错误重试")]),l._v(" "),o("li",[l._v("为了简化部署，我们实际上会把Config Service、Eureka和Meta Server三个逻辑角色部署在同一个JVM进程中")])]),l._v(" "),o("p",[l._v("Apollo客户端")]),l._v(" "),o("ol",[o("li",[l._v("客户端和服务端直接保持了一个长连接（Http Long Polling，服务端我们使用了async servlet(Spring DeferredResult)来服务Http Long Polling请求），从而能第一时间获得配置更新的推送")]),l._v(" "),o("li",[l._v("客户端还会定时从Apollo配置中心服务端拉取应用的最新配置\n"),o("ul",[o("li",[l._v("这是一个fallback机制，为了防止推送机制失效导致配置不更新")]),l._v(" "),o("li",[l._v("客户端定时拉取会上报本地版本，所以一般情况下，对于定时拉取的操作，服务端都会返回304 - Not Modified")]),l._v(" "),o("li",[l._v("定时频率默认为每5分钟拉取一次，客户端也可以通过在运行时指定System Property: "),o("code",[l._v("apollo.refreshInterval")]),l._v("来覆盖，单位为分钟")])])]),l._v(" "),o("li",[l._v("客户端从Apollo配置中心服务端获取到应用的最新配置后，会保存在内存中")]),l._v(" "),o("li",[l._v("客户端会把从服务端获取到的配置在本地文件系统缓存一份\n"),o("ul",[o("li",[l._v("在遇到服务不可用，或网络不通的时候，依然能从本地恢复配置")])])]),l._v(" "),o("li",[l._v("应用程序从Apollo客户端获取最新的配置、订阅配置更新通知")])])])}),[],!1,null,null,null);e.default=r.exports}}]);