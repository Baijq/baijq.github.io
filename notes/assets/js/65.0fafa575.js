(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{480:function(s,a,t){"use strict";t.r(a);var e=t(62),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-安装-es、kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-es、kibana"}},[s._v("#")]),s._v(" Docker 安装 ES、Kibana")]),s._v(" "),t("h2",{attrs:{id:"安装-elasticsearch-7-12-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-elasticsearch-7-12-0"}},[s._v("#")]),s._v(" 安装 ElasticSearch 7.12.0")]),s._v(" "),t("ol",[t("li",[s._v("拉取镜像")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull elasticsearch:7.12.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("创建docker容器挂在的目录")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/elasticsearch/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/elasticsearch/data\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/elasticsearch/plugins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("配置文件")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http.host: 0.0.0.0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /opt/elasticsearch/config/elasticsearch.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("创建容器")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name elasticsearch -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200  -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ES_JAVA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xms84m -Xmx512m"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v /opt/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v /opt/elasticsearch/data:/usr/share/elasticsearch/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v /opt/elasticsearch/plugins:/usr/share/elasticsearch/plugins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -d elasticsearch:7.12.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v('-p 端口映射\n-e discovery.type=single-node 单点模式启动\n-e ES_JAVA_OPTS="-Xms84m -Xmx512m"：设置启动占用的内存范围\n-v 目录挂载\n-d 后台运行')]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[s._v("查看启动详情\n"),t("code",[s._v("docker ps")]),s._v("  查看是否启动"),t("br"),s._v(" "),t("code",[s._v("docker logs elasticsearch")]),s._v("  启动日志查询"),t("br"),s._v(" "),t("code",[s._v("docker restart elasticsearch")]),s._v("   重启"),t("br"),s._v(" "),t("code",[s._v("docker exec -it elasticsearch bash")]),s._v(" 进入")])]),s._v(" "),t("li",[t("p",[s._v("测试正常启动页面"),t("br"),s._v(" "),t("code",[s._v("localhost:9200")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OSZ8C4.png",alt:"es"}})]),s._v(" "),t("h2",{attrs:{id:"安装-es-head-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-es-head-插件"}},[s._v("#")]),s._v(" 安装 es-head 插件")]),s._v(" "),t("p",[t("strong",[s._v("使用 es-head 插件")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("下载 https://github.com/mobz/elasticsearch-head")])]),s._v(" "),t("li",[t("p",[s._v("解压安装")])])]),s._v(" "),t("div",{staticClass:"language-npm line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install\nnpm run start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[s._v("浏览器中访问 http://localhost:9100/ 连接，发现存在跨域问题")])]),s._v(" "),t("li",[t("p",[s._v("修改es配置,支持跨域 /opt/elasticsearch/config/elasticsearch.yml")])])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http.cors.enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http.cors.allow-origin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("重启 es 再次尝试连接")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OSZy2d.png",alt:"es-head"}})]),s._v(" "),t("h2",{attrs:{id:"安装-kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-kibana"}},[s._v("#")]),s._v(" 安装 Kibana")]),s._v(" "),t("ol",[t("li",[s._v("拉取镜像")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull kibana:7.12.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("创建docker容器挂在的目录")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/kibana/config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("配置文件 /opt/kibana/config/kibana.yml")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server.name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server.host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch.hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.88.131:9200'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("xpack.monitoring.ui.container.elasticsearch.enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("启动 kibana")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name kibana "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v(":5601 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ELASTICSEARCH_URL=http://192.168.88.131:9200"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d kibana:7.12.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("访问地址"),t("br"),s._v("\nhttp://192.168.88.131:5601/")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OSZT2j.png",alt:"kibana"}})]),s._v(" "),t("h2",{attrs:{id:"安装-ik-分词器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-ik-分词器"}},[s._v("#")]),s._v(" 安装 ik 分词器")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("进入容器\n"),t("code",[s._v("docker exec -it elasticsearch bash")])])]),s._v(" "),t("li",[t("p",[s._v("安装插件\n"),t("code",[s._v("./bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.12.0/elasticsearch-analysis-ik-7.12.0.zip")])])]),s._v(" "),t("li",[t("p",[s._v("重启es")])]),s._v(" "),t("li",[t("p",[s._v("查看是否成功安装")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it elasticsearch "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n./bin/elasticsearch-plugin list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);