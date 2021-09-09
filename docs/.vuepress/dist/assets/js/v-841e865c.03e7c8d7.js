"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7791],{4548:(e,n,i)=>{i.r(n),i.d(n,{data:()=>a});const a={key:"v-841e865c",path:"/nginx/guide/error.html",title:"常见错误",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"配置不生效",slug:"配置不生效",children:[]},{level:3,title:'nginx: [emerg] getpwnam("nginx") failed',slug:"nginx-emerg-getpwnam-nginx-failed",children:[]},{level:3,title:'nginx: [emerg] getgrnam("xiaowu") failed',slug:"nginx-emerg-getgrnam-xiaowu-failed",children:[]},{level:3,title:'nginx: [alert] could not open error log file: open() "/logs/error.log" failed (13: Permission denied)',slug:"nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied",children:[]},{level:3,title:"nginx: [emerg] bind() to 0.0.0.0:80 failed (48: Address already in use)",slug:"nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use",children:[]},{level:3,title:'nginx: [error] open() "nginx.pid" failed (2: No such file or directory)',slug:"nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory",children:[]},{level:3,title:'nginx: [emerg] unknown "realpath_roots_xxx" variable',slug:"nginx-emerg-unknown-realpath-roots-xxx-variable",children:[]},{level:3,title:'nginx: [emerg] "add_header" directive is not allowed here in xx',slug:"nginx-emerg-add-header-directive-is-not-allowed-here-in-xx",children:[]},{level:3,title:'nginx: [emerg] "proxy_pass" cannot have URI part in location given by regular expression, or inside named location, or inside "if" statement, or inside "limit_except" block in xx',slug:"nginx-emerg-proxy-pass-cannot-have-uri-part-in-location-given-by-regular-expression-or-inside-named-location-or-inside-if-statement-or-inside-limit-except-block-in-xx",children:[]}],filePathRelative:"nginx/guide/error.md",git:{updatedTime:1629648513e3,contributors:[{name:"duoli",email:"zhaody901@126.com",commits:1}]}}},7518:(e,n,i)=>{i.r(n),i.d(n,{default:()=>x});var a=i(6252);const r=(0,a.uE)('<h1 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误" aria-hidden="true">#</a> 常见错误</h1><h3 id="配置不生效" tabindex="-1"><a class="header-anchor" href="#配置不生效" aria-hidden="true">#</a> 配置不生效</h3><p>更新配置后使用 <code>[sudo] /your/path/nginx -s reload</code> 热重载服务。</p><h3 id="nginx-emerg-getpwnam-nginx-failed" tabindex="-1"><a class="header-anchor" href="#nginx-emerg-getpwnam-nginx-failed" aria-hidden="true">#</a> nginx: [emerg] getpwnam(&quot;nginx&quot;) failed</h3><p>表示该用户 <code>nginx</code> 不存在， 解决方法:</p><ol><li>在 <code>nginx.conf</code> 里添加 <code>user nobody;</code></li><li>创建用户和用户对应的分组</li></ol><h3 id="nginx-emerg-getgrnam-xiaowu-failed" tabindex="-1"><a class="header-anchor" href="#nginx-emerg-getgrnam-xiaowu-failed" aria-hidden="true">#</a> nginx: [emerg] getgrnam(&quot;xiaowu&quot;) failed</h3><p>表示用户分组不存在，解决方法:</p><ol><li>在 <code>nginx.conf</code> 里添加 <code>user nobody;</code></li><li>创建用户对应的分组</li></ol><h3 id="nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied" tabindex="-1"><a class="header-anchor" href="#nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied" aria-hidden="true">#</a> nginx: [alert] could not open error log file: open() &quot;/logs/error.log&quot; failed (13: Permission denied)</h3><p>启动 Nginx 的用户权限不够导致无法写入日志文件，常见于非 <code>root</code> 用户启动报错。</p><h3 id="nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use" tabindex="-1"><a class="header-anchor" href="#nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use" aria-hidden="true">#</a> nginx: [emerg] bind() to 0.0.0.0:80 failed (48: Address already in use)</h3><p>80端口被占用启动失败，修改端口或者杀死占用者再启动即可。</p><h3 id="nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory" tabindex="-1"><a class="header-anchor" href="#nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory" aria-hidden="true">#</a> nginx: [error] open() &quot;nginx.pid&quot; failed (2: No such file or directory)</h3><p>pid 进程 id 文件不存在，可能文件被删除或者已经停止，在停止 Nginx 时会使用该进程id，如果不存在将失败，可以手动 kill 掉。</p><h3 id="nginx-emerg-unknown-realpath-roots-xxx-variable" tabindex="-1"><a class="header-anchor" href="#nginx-emerg-unknown-realpath-roots-xxx-variable" aria-hidden="true">#</a> nginx: [emerg] unknown &quot;realpath_roots_xxx&quot; variable</h3><p>变量 <code>$realpath_roots_xxx</code> 不存在</p><h3 id="nginx-emerg-add-header-directive-is-not-allowed-here-in-xx" tabindex="-1"><a class="header-anchor" href="#nginx-emerg-add-header-directive-is-not-allowed-here-in-xx" aria-hidden="true">#</a> nginx: [emerg] &quot;add_header&quot; directive is not allowed here in xx</h3><p><code>add_header</code> 指令不能直接在 <code>if</code> 判断内，可以在 <code>http</code>、<code>server</code>、<code>server.location</code>、<code>server.location.if</code> 下。</p><h3 id="nginx-emerg-proxy-pass-cannot-have-uri-part-in-location-given-by-regular-expression-or-inside-named-location-or-inside-if-statement-or-inside-limit-except-block-in-xx" tabindex="-1"><a class="header-anchor" href="#nginx-emerg-proxy-pass-cannot-have-uri-part-in-location-given-by-regular-expression-or-inside-named-location-or-inside-if-statement-or-inside-limit-except-block-in-xx" aria-hidden="true">#</a> nginx: [emerg] &quot;proxy_pass&quot; cannot have URI part in location given by regular expression, or inside named location, or inside &quot;if&quot; statement, or inside &quot;limit_except&quot; block in xx</h3><p>这是 <code>proxy_pass</code> 指令在正则匹配时不能使用包含路径的链接，如以下都会报错：</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ~* ^/api/</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">proxy_pass</span> http://host/</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$uri</span> ~* ^/api/)</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">proxy_pass</span> http://host/</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',22),o=(0,a.Uk)("解决办法就是把 "),s=(0,a._)("code",null,"/",-1),l=(0,a.Uk)(" 去掉，更多关于 "),d=(0,a._)("code",null,"proxy_pass",-1),t=(0,a.Uk)(" 请看："),c=(0,a._)("code",null,"proxy_pass",-1),p=(0,a.Uk)(" 技巧"),g=(0,a.Uk)(" 。"),x={render:function(e,n){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[o,s,l,d,t,(0,a.Wm)(i,{to:"/example/proxy_pass.html"},{default:(0,a.w5)((()=>[c,p])),_:1}),g])],64)}}}}]);