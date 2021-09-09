"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7078],{9584:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-27159aa2",path:"/nginx/example/domain.html",title:"配置泛域名转发",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"子域名转发到子目录",slug:"子域名转发到子目录",children:[]},{level:2,title:"子域名配置不同的目录",slug:"子域名配置不同的目录",children:[]}],filePathRelative:"nginx/example/domain.md",git:{updatedTime:1629648513e3,contributors:[{name:"duoli",email:"zhaody901@126.com",commits:1}]}}},8504:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="配置泛域名转发" tabindex="-1"><a class="header-anchor" href="#配置泛域名转发" aria-hidden="true">#</a> 配置泛域名转发</h1><p>有的时候，我们需要配置一些自定义的子域名，如：</p><ul><li><code>xuexb.user.demo.com</code></li><li><code>a01.user.demo.com</code></li></ul><p>这时候就需要域名的 DNS 解析一个泛域名 <code>*.user.demo.com</code> 到服务器，Nginx 可以配置如下：</p><h2 id="子域名转发到子目录" tabindex="-1"><a class="header-anchor" href="#子域名转发到子目录" aria-hidden="true">#</a> 子域名转发到子目录</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">server_name</span> ~^([\\w-]+)\\.user\\.demo\\.com$</span><span class="token punctuation">;</span>\n\n    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">proxy_set_header</span>        X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_set_header</span>        X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_set_header</span>        Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_set_header</span>        X-NginX-Proxy true</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_pass</span>              http://127.0.0.1:8080/<span class="token variable">$1</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>以上配置表示：</p><ul><li><code>xuexb.user.demo.com/path?a=1</code> -&gt; <code>127.0.0.1:8080/xuexb/path?a=1</code></li><li><code>a01.user.demo.com/path?a=1</code> -&gt; <code>127.0.0.1:8080/a01/path?a=1</code></li></ul><p>这样后端就可以根据子目录解析不同的规则，甚至 Nginx 可以再进行链接重写。</p><h2 id="子域名配置不同的目录" tabindex="-1"><a class="header-anchor" href="#子域名配置不同的目录" aria-hidden="true">#</a> 子域名配置不同的目录</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">server_name</span> ~^([\\w-]+)\\.user\\.demo\\.com$</span><span class="token punctuation">;</span>\n\n    <span class="token directive"><span class="token keyword">root</span> /home/user/wwwroot/user/<span class="token variable">$1</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>以上配置可以把不同的子域名分发到不同的目录中，做到路径分离的功能，如：</p><ul><li><code>xuexb.user.demo.com</code> -&gt; <code>/home/user/wwwroot/user/xuexb</code>;</li><li><code>a01.user.demo.com</code> -&gt; <code>/home/user/wwwroot/user/a01</code>;</li></ul>',13),p={render:function(s,n){return e}}}}]);