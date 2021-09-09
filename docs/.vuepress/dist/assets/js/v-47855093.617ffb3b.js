"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1916],{8277:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-47855093",path:"/nginx/example/http-concat.html",title:"使用 nginx-http-concat",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 下载",slug:"_1-下载",children:[]},{level:2,title:"2. 安装",slug:"_2-安装",children:[]},{level:2,title:"3. 配置",slug:"_3-配置",children:[]},{level:2,title:"4. 使用",slug:"_4-使用",children:[]}],filePathRelative:"nginx/example/http-concat.md",git:{updatedTime:1629648513e3,contributors:[{name:"duoli",email:"zhaody901@126.com",commits:1}]}}},7832:(n,a,s)=>{s.r(a),s.d(a,{default:()=>z});var e=s(6252);const t=(0,e._)("h1",{id:"使用-nginx-http-concat",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#使用-nginx-http-concat","aria-hidden":"true"},"#"),(0,e.Uk)(" 使用 nginx-http-concat")],-1),l=(0,e._)("p",null,"nginx-http-concat 是一个 Nginx 扩展模块，用来合并 HTTP 请求。",-1),p=(0,e._)("h2",{id:"_1-下载",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_1-下载","aria-hidden":"true"},"#"),(0,e.Uk)(" 1. 下载")],-1),c=(0,e.Uk)("访问 "),i={href:"https://github.com/alibaba/nginx-http-concat/releases",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("https://github.com/alibaba/nginx-http-concat/releases"),r=(0,e.Uk)(" 官网下载最新的源包，如:"),u=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 下载</span>\n<span class="token function">wget</span> https://github.com/alibaba/nginx-http-concat/archive/1.2.2.tar.gz\n\n<span class="token comment"># 解压并记录解压后的目录</span>\n<span class="token function">tar</span> xzf <span class="token number">1.2</span>.2.tar.gz\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h2>',2),d=(0,e.Uk)("使用 "),b=(0,e.Uk)("编译安装"),k=(0,e.Uk)(" ，在配置 configure 时添加参数:"),m=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 配置</span>\n./configure 其他编译参数 --add-module<span class="token operator">=</span>/刚才解压的目录\n\n<span class="token comment"># 安装</span>\n<span class="token function">make</span>\n<span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> <span class="token function">make</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',1),h=(0,e.Uk)("注意: 如果是重新编译安装时不要运行 "),g=(0,e._)("code",null,"make install",-1),_=(0,e.Uk)("，可参数: "),v=(0,e.Uk)("重新编译安装"),x=(0,e.uE)('<p>如我的配置:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure \n    --<span class="token punctuation">..</span>.\n    --add-module<span class="token operator">=</span>/home/work/src/nginx-http-concat-1.2.2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>如果有多个 <code>--add-module</code> 分别对应写上即可</p></blockquote><h2 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3. 配置</h2><p>使用 location 匹配到你想要匹配的路径，对其设置参数:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">location</span> /static/css/</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">concat</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">concat_types</span> text/css</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">concat_max_files</span> <span class="token number">20</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n        \n    <span class="token directive"><span class="token keyword">location</span> /static/js/</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">concat</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">concat_types</span> application/javascript</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">concat_max_files</span> <span class="token number">30</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>重启服务，如: <code>nginx -s reload</code> 。</p>',7),f=(0,e.Uk)("更新配置项点击: "),U={href:"https://github.com/alibaba/nginx-http-concat#module-directives",target:"_blank",rel:"noopener noreferrer"},w=(0,e.Uk)("https://github.com/alibaba/nginx-http-concat#module-directives"),y=(0,e._)("h2",{id:"_4-使用",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_4-使用","aria-hidden":"true"},"#"),(0,e.Uk)(" 4. 使用")],-1),E=(0,e._)("p",null,[(0,e.Uk)("现在就可以通过url中的"),(0,e._)("code",null,"??"),(0,e.Uk)("来合并了，比如: "),(0,e._)("code",null,"/static/css/??a.css,path/b.css"),(0,e.Uk)(" 。")],-1),z={render:function(n,a){const s=(0,e.up)("OutboundLink"),z=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,l,p,(0,e._)("p",null,[c,(0,e._)("a",i,[o,(0,e.Wm)(s)]),r]),u,(0,e._)("p",null,[d,(0,e.Wm)(z,{to:"/guide/install.html"},{default:(0,e.w5)((()=>[b])),_:1}),k]),m,(0,e._)("p",null,[h,g,_,(0,e.Wm)(z,{to:"/guide/linux-install.html#%E9%87%8D%E6%96%B0%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:(0,e.w5)((()=>[v])),_:1})]),x,(0,e._)("p",null,[f,(0,e._)("a",U,[w,(0,e.Wm)(s)])]),y,E],64)}}}}]);