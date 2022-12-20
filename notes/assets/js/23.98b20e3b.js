(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{438:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-小白教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-小白教程"}},[t._v("#")]),t._v(" MySQL 小白教程")]),t._v(" "),a("p",[t._v("MySQL是一个开源免费的数据库系统")]),t._v(" "),a("h2",{attrs:{id:"安装mysql-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql-server"}},[t._v("#")]),t._v(" 安装MySQL Server")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("官网下载 "),a("a",{attrs:{href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.mysql.com/downloads/"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVcUx.png",alt:"OwVcUx.png"}})])]),t._v(" "),a("li",[a("p",[t._v("解压，移动到要安装的文件夹下，如我的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVsbR.png",alt:"OwVsbR.png"}})])]),t._v(" "),a("li",[a("p",[t._v("配置文件 "),a("code",[t._v("my.ini")])]),t._v(" "),a("p",[t._v("新建 "),a("code",[t._v("Data")]),t._v(" 文件夹，新建  "),a("code",[t._v("my.ini")]),t._v(" 配置文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVg56.png",alt:"OwVg56.png"}})]),t._v(" "),a("p",[t._v("如下配置文件复制即可，需修改两处 "),a("code",[t._v("basedir")]),t._v(" 和 "),a("code",[t._v("datadir")]),t._v(" 改成自己对应的路径即可，注意使用  "),a("code",[t._v("\\\\")])]),t._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("mysqld")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置端口号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3306")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置mysql的安装目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("basedir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("D:\\\\software\\\\mysql-8.0.29-winx64")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置mysql数据库的数据的存放目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("datadir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("D:\\\\software\\\\mysql-8.0.29-winx64\\\\Data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许最大连接数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("max_connections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("max_connect_errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务端使用的字符集默认为UTF8/utf8mb4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("character-set-server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("utf8mb4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新表时将使用的默认存储引擎")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("default-storage-engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("INNODB")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认使用“mysql_native_password”插件认证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("default_authentication_plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql_native_password")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置mysql客户端默认字符集/utf8mb4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("default-character-set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("utf8mb4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置mysql客户端连接服务端时默认使用的端口/utf8mb4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3306")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("default-character-set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("utf8mb4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("配置环境变量")]),t._v(" "),a("p",[t._v("编辑 "),a("code",[t._v("Path")]),t._v(" 新增 "),a("code",[t._v("MySQL")]),t._v(" 的安装目录的bin目录，我的是 "),a("code",[t._v("D:\\software\\mysql-8.0.29-winx64\\bin")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVW8O.png",alt:"OwVW8O.png"}})])]),t._v(" "),a("li",[a("p",[t._v("初始化数据库，安装服务，启动服务")]),t._v(" "),a("p",[t._v("打开cmd命令行，必须以管理员方式运行，按顺序执行如下命令")]),t._v(" "),a("p",[a("code",[t._v("mysqld --initialize --console")]),t._v("   初始化命令，这里务必记住初始密码，修改密码会用到")]),t._v(" "),a("p",[a("code",[t._v("mysqld --install")]),t._v(" 安装服务，成功后出现Service successfully installed")]),t._v(" "),a("p",[a("code",[t._v("net start mysql")]),t._v(" 启动服务")]),t._v(" "),a("blockquote",[a("p",[t._v("如果密码没记住，可以删除初始化的 datadir 目录，重新执行以上命令")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwV5KH.png",alt:"OwV5KH.png"}})])]),t._v(" "),a("li",[a("p",[t._v("修改密码")]),t._v(" "),a("p",[t._v("登录MySQL "),a("code",[t._v("mysql -uroot -p")]),t._v(" 输入上面那个初始密码")]),t._v(" "),a("p",[t._v("执行修改密码 "),a("code",[t._v("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVIrd.png",alt:"OwVIrd.png"}})])])]),t._v(" "),a("p",[t._v("至此MySQL已经安装完成，如果之前安装过，没卸载完全，可能会报错注意完全卸载以前的")]),t._v(" "),a("h2",{attrs:{id:"卸载mysql-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载mysql-server"}},[t._v("#")]),t._v(" 卸载MySQL Server")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("停止MySQL服务")])]),t._v(" "),a("li",[a("p",[t._v("如果是安装版，去控制面板卸载，解压版直接删除安装目录")])]),t._v(" "),a("li",[a("p",[t._v("残余文件夹清理。服务目录（就是安装目录）和数据目录（默认在C:\\ProgramData\\MySQL）")])]),t._v(" "),a("li",[a("p",[t._v("清理注册表")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在系统的搜索框中输入 regedit，打开注册表编辑器")]),t._v("\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ControlSet001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eventlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MySQL服务 目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ControlSet001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MySQL服务 目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ControlSet002"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eventlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MySQL服务 目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ControlSet002"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MySQL服务 目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CurrentControlSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eventlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MySQL服务目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CurrentControlSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MySQL服务删除\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);