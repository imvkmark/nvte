"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5107],{8227:(n,e,l)=>{l.r(e),l.d(e,{data:()=>s});const s={key:"v-862636c0",path:"/nginx/example/http-basic-auth.html",title:"[译+] Nginx 使用 HTTP Basic Authentication 来限制访问",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"先决条件",slug:"先决条件",children:[]},{level:2,title:"创建密码文件",slug:"创建密码文件",children:[]},{level:2,title:"配置NGINX和NGINX Plus以进行HTTP基本身份验证",slug:"配置nginx和nginx-plus以进行http基本身份验证",children:[]},{level:2,title:"将基本身份验证与IP地址访问限制相结合",slug:"将基本身份验证与ip地址访问限制相结合",children:[]},{level:2,title:"完整的例子",slug:"完整的例子",children:[]},{level:2,title:"使用 wget/curl 访问",slug:"使用-wget-curl-访问",children:[]}],filePathRelative:"nginx/example/http-basic-auth.md",git:{updatedTime:1629648513e3,contributors:[{name:"duoli",email:"zhaody901@126.com",commits:1}]}}},493:(n,e,l)=>{l.r(e),l.d(e,{default:()=>gn});var s=l(6252),a=l(1111);const r=(0,s._)("h1",{id:"译-nginx-使用-http-basic-authentication-来限制访问",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#译-nginx-使用-http-basic-authentication-来限制访问","aria-hidden":"true"},"#"),(0,s.Uk)(" [译+] Nginx 使用 HTTP Basic Authentication 来限制访问")],-1),t=(0,s.Uk)("原文地址 : "),i={href:"https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/",target:"_blank",rel:"noopener noreferrer"},_=(0,s.Uk)("Restricting Access with HTTP Basic Authentication"),u=(0,s._)("h2",{id:"介绍",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,s.Uk)(" 介绍")],-1),c=(0,s._)("p",null,[(0,s.Uk)("你可以通过使用用户名/密码身份验证来限制对网站或网站某些部分的访问。用户名和密码取自密码文件, 这个文件通常使用密码文件创建工具来生成, 例如: "),(0,s._)("code",null,"apache2-utils"),(0,s.Uk)("。")],-1),b=(0,s.Uk)("HTTP基本身份验证也可以与其他访问限制方法结合使用，例如通过 "),p={href:"https://docs.nginx.com/nginx/admin-guide/security-controls/blacklisting-ip-addresses/",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("IP地址"),o=(0,s.Uk)(" 或 "),h={href:"https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-by-geoip/",target:"_blank",rel:"noopener noreferrer"},m=(0,s.Uk)("地理位置"),g=(0,s.Uk)(" 限制访问。"),x=(0,s._)("h2",{id:"先决条件",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#先决条件","aria-hidden":"true"},"#"),(0,s.Uk)(" 先决条件")],-1),k=(0,s._)("ul",null,[(0,s._)("li",null,"NGINX Plus 或 NGINX"),(0,s._)("li",null,[(0,s.Uk)("密码文件创建程序，例如 "),(0,s._)("code",null,"apache2-utils"),(0,s.Uk)("（Debian，Ubuntu）或 "),(0,s._)("code",null,"httpd-tools"),(0,s.Uk)("（RHEL / CentOS / Oracle Linux）。")])],-1),U=(0,s._)("h2",{id:"创建密码文件",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#创建密码文件","aria-hidden":"true"},"#"),(0,s.Uk)(" 创建密码文件")],-1),f=(0,s._)("p",null,[(0,s.Uk)("要创建用户名-密码对，需要使用密码文件创建工具，例如，"),(0,s._)("code",null,"apache2-utils"),(0,s.Uk)(" 或 "),(0,s._)("code",null,"httpd-tools")],-1),v=(0,s._)("p",null,[(0,s.Uk)("1). 确认已安装 "),(0,s._)("code",null,"apache2-utils"),(0,s.Uk)("（Debian，Ubuntu）或 "),(0,s._)("code",null,"httpd-tools"),(0,s.Uk)("（RHEL / CentOS / Oracle Linux）")],-1),w=(0,s._)("p",null,[(0,s.Uk)("2). 创建密码文件和第一个用户。运行 "),(0,s._)("code",null,"htpasswd"),(0,s.Uk)(" 带有 "),(0,s._)("code",null,"-c"),(0,s.Uk)(" 选项(创建一个新文件)的程序，文件路径名作为第一个参数，用户名作为第二个参数：")],-1),y=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"$ sudo htpasswd -c /etc/apache2/.htpasswd user1 \n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br")])],-1),P=(0,s._)("p",null,[(0,s.Uk)("按Enter，然后在提示时键入 "),(0,s._)("strong",null,"user1"),(0,s.Uk)(" 的密码。")],-1),T=(0,s._)("p",null,[(0,s.Uk)("3). 创建其他用户密码对。省略 "),(0,s._)("code",null,"-c"),(0,s.Uk)("选项，因为该文件已经存在：")],-1),A=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"$ sudo htpasswd /etc/apache2/.htpasswd user2 \n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br")])],-1),N=(0,s._)("p",null,"4). 你可以确认该文件包含的成对的用户名和加密的密码：",-1),I=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"$ cat /etc/apache2/.htpasswd\nuser1:$apr1$/woC1jnP$KAh0SsVn5qeSMjTtn0E9Q0\nuser2:$apr1$QdR8fNLT$vbCEEzDj7LyqCMyNpSoBh/\nuser3:$apr1$Mr5A0e.U$0j39Hp5FfxRkneklXaMrr/\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br")])],-1),H=(0,s._)("h2",{id:"配置nginx和nginx-plus以进行http基本身份验证",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#配置nginx和nginx-plus以进行http基本身份验证","aria-hidden":"true"},"#"),(0,s.Uk)(" 配置NGINX和NGINX Plus以进行HTTP基本身份验证")],-1),$=(0,s.Uk)("在要保护的位置，指定 "),C={href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic",target:"_blank",rel:"noopener noreferrer"},W=(0,s._)("code",null,"auth_basic",-1),L=(0,s.Uk)(" 指令并为密码保护的区域设置标题。要求提供凭证时，该区域的名称将显示在用户名/密码对话框窗口中："),R=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"location /api {\n    auth_basic “Administrator’s Area”;\n    #...\n}\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br")])],-1),X={href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic_user_file",target:"_blank",rel:"noopener noreferrer"},q=(0,s._)("code",null,"auth_basic_user_file",-1),z=(0,s.Uk)(" 设置包含用户/密码对的 "),E=(0,s._)("em",null,".htpasswd",-1),G=(0,s.Uk)(" 文件的路径"),O=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"location /api {\n    auth_basic           “Administrator’s Area”;\n    auth_basic_user_file /etc/apache2/.htpasswd; \n}\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br")])],-1),S=(0,s.Uk)("另外，你可以使用基本身份验证来限制对整个网站的访问，但仍将某些网站区域设为公开。在这种情况下，设置指定目录的 "),j={href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic",target:"_blank",rel:"noopener noreferrer"},B=(0,s._)("code",null,"auth_basic",-1),D=(0,s.Uk)(" 的值设置为 "),M=(0,s._)("code",null,"off",-1),Q=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'server {\n    ...\n    auth_basic           "Administrator’s Area";\n    auth_basic_user_file conf/htpasswd;\n\n    location /public/ {\n        auth_basic off;\n    }\n}\n')]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"7"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"8"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"9"),(0,s._)("br")])],-1),F=(0,s._)("h2",{id:"将基本身份验证与ip地址访问限制相结合",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#将基本身份验证与ip地址访问限制相结合","aria-hidden":"true"},"#"),(0,s.Uk)(" 将基本身份验证与IP地址访问限制相结合")],-1),K=(0,s._)("p",null,"HTTP 基本身份验证可以有效地结合 IP地址的访问限制。可以至少实现两种方案：",-1),V=(0,s._)("ul",null,[(0,s._)("li",null,"用户必须同时经过身份验证并具有有效的IP地址"),(0,s._)("li",null,"用户必须经过身份验证或具有有效的IP地址")],-1),Y=(0,s.Uk)("1). 使用"),J={href:"https://nginx.org/en/docs/http/ngx_http_access_module.html#allow",target:"_blank",rel:"noopener noreferrer"},Z=(0,s._)("code",null,"allow",-1),nn=(0,s.Uk)("和"),en={href:"https://nginx.org/en/docs/http/ngx_http_access_module.html#deny",target:"_blank",rel:"noopener noreferrer"},ln=(0,s._)("code",null,"deny",-1),sn=(0,s.Uk)("指令允许或拒绝来自特定IP地址的访问"),an=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"location /api {\n    #...\n    deny  192.168.1.2;\n    allow 192.168.1.1/24;\n    allow 127.0.0.1;\n    deny  all;\n}\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"7"),(0,s._)("br")])],-1),rn=(0,s._)("p",null,[(0,s.Uk)("仅对 "),(0,s._)("code",null,"192.168.1.1/24"),(0,s.Uk)(" 网络（"),(0,s._)("code",null,"192.168.1.2"),(0,s.Uk)(" 地址除外）授予访问权限。请注意，"),(0,s._)("code",null,"allow"),(0,s.Uk)(" 和 "),(0,s._)("code",null,"deny"),(0,s.Uk)(" 指令将按其定义的顺序应用。")],-1),tn=(0,s._)("p",null,[(0,s.Uk)("2). 将 IP 和 HTTP 身份验证的限制与 "),(0,s._)("code",null,"satisfy"),(0,s.Uk)(" 指令结合使用。如果将指令设置为 "),(0,s._)("code",null,"all"),(0,s.Uk)("，则客户端同时满足两个条件，则将授予访问权限。如果将指令设置为 "),(0,s._)("code",null,"any"),(0,s.Uk)("，如果客户端至少满足至少一个条件，会授予访问权限：")],-1),_n=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'location /api {\n    #...\n    satisfy all;    \n\n    deny  192.168.1.2;\n    allow 192.168.1.1/24;\n    allow 127.0.0.1;\n    deny  all;\n\n    auth_basic           "Administrator’s Area";\n    auth_basic_user_file conf/htpasswd;\n}\n')]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"7"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"8"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"9"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"10"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"11"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"12"),(0,s._)("br")])],-1),un=(0,s._)("h2",{id:"完整的例子",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#完整的例子","aria-hidden":"true"},"#"),(0,s.Uk)(" 完整的例子")],-1),cn=(0,s._)("p",null,"该示例显示了如何通过简单身份验证以及IP地址访问限制来保护您的状态区域：",-1),bn=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'http {\n    server {\n        listen 192.168.1.23:8080;\n        root   /usr/share/nginx/html;\n\n        location /api {\n            api;\n            satisfy all;\n\n            deny  192.168.1.2;\n            allow 192.168.1.1/24;\n            allow 127.0.0.1;\n            deny  all;\n\n            auth_basic           "Administrator’s Area";\n            auth_basic_user_file /etc/apache2/.htpasswd; \n        }\n    }\n}\n')]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"7"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"8"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"9"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"10"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"11"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"12"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"13"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"14"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"15"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"16"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"17"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"18"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"19"),(0,s._)("br")])],-1),pn=(0,s._)("p",null,"当您访问状态页面时，系统会提示您登录：",-1),dn=(0,s._)("p",null,[(0,s._)("a",{href:"./media/15846766188690/auth_required.png"},[(0,s._)("img",{src:a,alt:"auth_required"})])],-1),on=(0,s._)("p",null,[(0,s.Uk)("如果提供的名称和密码与密码文件不匹配，则会出现 "),(0,s._)("code",null,"401 (Authorization Required)"),(0,s.Uk)(" 错误")],-1),hn=(0,s._)("h2",{id:"使用-wget-curl-访问",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#使用-wget-curl-访问","aria-hidden":"true"},"#"),(0,s.Uk)(" 使用 wget/curl 访问")],-1),mn=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"# 浏览器中使用\n直接在浏览器中输入地址, 会弹出用户密码输入框, 输入即可访问\n\n# 使用 wget\nwget --http-user=magina --http-passwd=123456 http://res.yinnote.com/xxx.zip\n\n# 使用 curl\ncurl -u magina:123456 -O http://res.yinnote.com/xxx.zip\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"7"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"8"),(0,s._)("br")])],-1),gn={render:function(n,e){const l=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("p",null,[t,(0,s._)("a",i,[_,(0,s.Wm)(l)])]),u,c,(0,s._)("p",null,[b,(0,s._)("a",p,[d,(0,s.Wm)(l)]),o,(0,s._)("a",h,[m,(0,s.Wm)(l)]),g]),x,k,U,f,v,w,y,P,T,A,N,I,H,(0,s._)("ul",null,[(0,s._)("li",null,[$,(0,s._)("a",C,[W,(0,s.Wm)(l)]),L])]),R,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",X,[q,(0,s.Wm)(l)]),z,E,G])]),O,(0,s._)("p",null,[S,(0,s._)("a",j,[B,(0,s.Wm)(l)]),D,M]),Q,F,K,V,(0,s._)("p",null,[Y,(0,s._)("a",J,[Z,(0,s.Wm)(l)]),nn,(0,s._)("a",en,[ln,(0,s.Wm)(l)]),sn]),an,rn,tn,_n,un,cn,bn,pn,dn,on,hn,mn],64)}}},1111:(n,e,l)=>{n.exports=l.p+"assets/img/auth_required.b2fc7059.png"}}]);