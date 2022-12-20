(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{507:function(s,t,a){"use strict";a.r(t);var n=a(62),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-高性能服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-高性能服务器"}},[s._v("#")]),s._v(" Nginx-高性能服务器")]),s._v(" "),a("p",[s._v("Nginx是一款轻量级的 Web 服务器 、高性能反向代理服务器。")]),s._v(" "),a("p",[a("strong",[s._v("应用场景")])]),s._v(" "),a("ol",[a("li",[s._v("http服务器，nginx可以独立提供http服务。例如静态资源服务器")]),s._v(" "),a("li",[s._v("反向代理，负载均衡")]),s._v(" "),a("li",[s._v("虚拟主机，也就是说一台服务器可以启动多个网站")])]),s._v(" "),a("h2",{attrs:{id:"基础命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[s._v("#")]),s._v(" 基础命令")]),s._v(" "),a("h3",{attrs:{id:"命令介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令介绍"}},[s._v("#")]),s._v(" 命令介绍")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("nginx -v")])]),s._v(" "),a("td",[s._v("查看Nginx的版本号")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("start nginx")])]),s._v(" "),a("td",[s._v("启动Nginx服务器")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("nginx -t")])]),s._v(" "),a("td",[s._v("将检查配置文件的语法的正确性")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("nginx -s stop")])]),s._v(" "),a("td",[s._v("快速关闭,可能不保存相关信息，并迅速终止web服务")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("nginx -s quit")])]),s._v(" "),a("td",[s._v("平稳关闭,保存相关信息，有安排的结束web服务")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("taskkill /f /t /im nginx.exe")])]),s._v(" "),a("td",[s._v("win鲨进程关闭Nginx")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("nginx -s reload")])]),s._v(" "),a("td",[s._v("加载配置(不需重启Nginx)")])])])]),s._v(" "),a("h3",{attrs:{id:"重启脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启脚本"}},[s._v("#")]),s._v(" 重启脚本")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意,win下新建批处理命令 restartnginx.bat")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀nginx进程")]),s._v("\ntaskkill /F /IM nginx.exe\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动nginx")]),s._v("\nD:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx-1.11.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx.exe\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出 cmd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"配置文件描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件描述"}},[s._v("#")]),s._v(" 配置文件描述")]),s._v(" "),a("h3",{attrs:{id:"_0-跨域、开启gzip压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-跨域、开启gzip压缩"}},[s._v("#")]),s._v(" 0.跨域、开启gzip压缩")]),s._v(" "),a("blockquote",[a("ol",[a("li",[a("p",[s._v("对于上传文件，Nginx默认最大为1M "),a("code",[s._v("client_max_body_size 50m;")]),s._v(" # 这里修改为50M")])]),s._v(" "),a("li",[a("p",[s._v("nginx放开跨域，可以在 server location等都可以")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("add_header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Origin'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nadd_header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Credentials'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nadd_header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Methods'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET, POST, OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nadd_header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Headers'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://www.cnblogs.com/Renyi-Fan/p/11047490.html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngzip_buffers "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" 4K"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngzip_comp_level "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngzip_min_length "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngzip_types application/javascript text/css text/xml application/json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#gzip_disable "MSIE [1-6]\\."; #配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）')]),s._v("\ngzip_vary on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_1-loaction配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-loaction配置"}},[s._v("#")]),s._v(" 1. loaction配置")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("精确匹配，最高优先级")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /abc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只能匹配到 http://localhost/abc 得请求")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=/abc"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("以什么开头 startWith")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("location ^~ /api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#匹配以/api开头得请求，http://localhost/api/xxxRequest")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^~ /api"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("正则匹配")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("location ~ ^/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a-z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#匹配以`/\\w{4}\\d{2}[a-z]`这个正则开头得请求")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"正则匹配"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("最低优先级")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#匹配所有请求")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-文件-资源管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件-资源管理器"}},[s._v("#")]),s._v(" 2. 文件/资源管理器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    autoindex   on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示目录")]),s._v("\n    root   E:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("biubiu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://note.youdao.com/yws/api/personal/file/83520E58D29841A8A4D1134963B8FEE7?method=download&shareKey=9aa00bd9c239e0cc41165134f3c5db9f",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_2-静态资源服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-静态资源服务器"}},[s._v("#")]),s._v(" 2. 静态资源服务器")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Nginx中root和alias配置区别")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("root")]),s._v(" 是把location后面的直接拼接到root代理的后面")]),s._v(" "),a("li",[a("code",[s._v("alias")]),s._v(" 是把location后面的去掉后拼接到root代理的后面")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("location /pics/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\troot  D:/upload/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# localhost/pics/1223/java.png -> D:/upload/pics/1223/java.png")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" D:/upload/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# localhost/pics/1223/java.png -> D:/upload/1223/java.png")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("把静态文件放到指定路径下，直接通过 http://localhost:9001/访问静态文件夹中得index.html")]),s._v(" "),a("div",{staticClass:"language-she line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen       9001;\n    server_name  localhost;\n    \n    location / {\n        root   D:\\\\root\\\\web; # 静态资源位置\n        index  index.html index.htm;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("图片、视频静态资源服务配置")]),s._v(" "),a("p",[s._v("在D:\\root下新建了resource资源目录,下面放了两个资源文件夹")]),s._v(" "),a("ul",[a("li",[s._v("图片资源 D:\\root\\resource\\img\\a.jpg")]),s._v(" "),a("li",[s._v("视频资源 D:\\root\\resource\\audio\\abc.mp4")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问 http://localhost/img/a.jpg 相当于访问 D:\\\\root\\\\resource\\\\img\\\\a.jpg")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以看成访问root(D:\\\\root\\\\resource)下的/img文件夹里的资源")]),s._v("\n    location  /img "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        root  D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#~*正则不区分大小写,去掉*则区分")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#映射的是 D:\\\\root\\\\resource目录里所有jpg和mp4资源")]),s._v("\n    location ~* ."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("mp4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root  D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#正则表示D:\\\\root\\\\resource目录里以括号里xx结尾的")]),s._v("\n    location ~ .*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \troot  D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"_4-反向代理-负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-反向代理-负载均衡"}},[s._v("#")]),s._v(" 4. 反向代理，负载均衡")]),s._v(" "),a("h4",{attrs:{id:"_4-1-反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-反向代理"}},[s._v("#")]),s._v(" 4.1 反向代理")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("反向代理")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示tomcat开头的请求转发到指定机器上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://localhost/tomcat => http://192.168.0.14:8080/tomcat")]),s._v("\nlocation /tomcat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http://192.168.0.14:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_set_header Host\t\t\t\t$host;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_set_header X-Real-IP\t\t\t$remote_addr;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_set_header X-Forwarded-For\t$proxy_add_x_forwarded_for;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_set_header X-Forwarded-Proto\t$scheme;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://localhost/tomcat => http://192.168.0.14:8080/ 访问到8080的根路径上")]),s._v("\nlocation /tomcat/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http://192.168.0.15:8080/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_set_header Host\t\t\t\t$host;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_set_header X-Real-IP\t\t\t$remote_addr;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_set_header X-Forwarded-For\t$proxy_add_x_forwarded_for;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_set_header X-Forwarded-Proto\t$scheme;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])]),s._v(" "),a("h4",{attrs:{id:"_4-2-负载均衡方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-负载均衡方式"}},[s._v("#")]),s._v(" 4.2 负载均衡方式")]),s._v(" "),a("p",[s._v("1、轮询（默认）\n每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("upstream backserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("2、加权轮询（weight）\n指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况，权重越高，在被访问的概率越大，如下例，分别是30%，70%。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("upstream backserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("上述方式存在一个问题就是说，在负载均衡系统中，假如用户在某台服务器上登录了，那么该用户第二次请求的时候，因为我们是负载均衡系统，每次请求都会重新定位到服务器集群中的某一个，那么已经登录某一个服务器的用户再重新定位到另一个服务器，其登录信息将会丢失，这样显然是不妥的。\n我们可以采用ip_hash指令解决这个问题，如果客户已经访问了某个服务器，当用户再次访问时，会将该请求通过哈希算法，自动定位到该服务器。")]),s._v(" "),a("p",[s._v("每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。")]),s._v(" "),a("p",[s._v("3、ip_hash")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("upstream backserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ip_hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14:88"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15:80"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("4、fair（第三方） 按后端服务器的响应时间来分配请求，响应时间短的优先分配。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("upstream backserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    server server1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server server2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("upstream myproject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ip_hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip_hash指令，将同一用户引入同一服务器。")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("60s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# max_fails次失败后，暂停的时间")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http://myproject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择哪个服务器列表")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h4",{attrs:{id:"测试负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试负载均衡"}},[s._v("#")]),s._v(" 测试负载均衡")]),s._v(" "),a("ol",[a("li",[s._v("准备一个SpringBoot项目，通过不同端口启动，并且测试通过")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://z3.ax1x.com/2021/12/03/oaVsmQ.png",alt:"oaVsmQ.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://z3.ax1x.com/2021/12/03/oaVB6S.png",alt:"oaVB6S.png"}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("下载好的nginx先启动。"),a("code",[s._v("http://localhost:80")]),s._v(" 测试通")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://z3.ax1x.com/2021/12/03/oaVgkn.png",alt:"oaVgkn.png"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("开始配置负载均衡")])]),s._v(" "),a("p",[s._v("配置完后可以重启nginx，鲨掉nginx "),a("code",[s._v("taskkill /F /IM nginx.exe")]),s._v("，或者重新加载配置 "),a("code",[s._v("nginx -s reload")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("    upstream myserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9003"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http://myserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://z3.ax1x.com/2021/12/03/oaV2Yq.png",alt:"oaV2Yq.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://z3.ax1x.com/2021/12/03/oaVRf0.png",alt:"oaVRf0.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://z3.ax1x.com/2021/12/03/oaVfpV.png",alt:"oaVfpV.png"}})]),s._v(" "),a("p",[a("strong",[s._v("win nginx注册为windos服务，设置开机自启")])]),s._v(" "),a("blockquote",[a("p",[s._v("需要下载一个软件 "),a("code",[s._v("WinSW.NET4.exe")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("复制WinSW.NET4.exe到nginx目录下，重命名为 "),a("code",[s._v("nginx-server.exe")])])]),s._v(" "),a("li",[a("p",[s._v("在nginx目录下新增nginx-server.xml配置文件")])])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("nginx 反向代理"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("D:\\software\\nginx-1.20.2\\nginx.exe"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("开启管理员cmd")])]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd D:\\software\\nginx-1.20.2\nnginx-server.exe install\n# 卸载服务\nnginx-server.exe uninstall\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"附上默认配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附上默认配置文件"}},[s._v("#")]),s._v(" "),a("RouterLink",{attrs:{to:"/core/note/tool/nginx/base/nginx-conf.html"}},[s._v("附上默认配置文件")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);