"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5970],{2579:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-e3fe3d4a",path:"/nginx/example/add_header.html",title:"add_header 指令技巧",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用 include 语法",slug:"使用-include-语法",children:[]}],filePathRelative:"nginx/example/add_header.md",git:{updatedTime:1629648513e3,contributors:[{name:"duoli",email:"zhaody901@126.com",commits:1}]}}},5214:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="add-header-指令技巧" tabindex="-1"><a class="header-anchor" href="#add-header-指令技巧" aria-hidden="true">#</a> add_header 指令技巧</h1><p>官方的介绍：</p><blockquote><p>Adds the specified field to a response header provided that the response code equals 200, 201 (1.3.10), 204, 206, 301, 302, 303, 304, 307 (1.1.16, 1.0.13), or 308 (1.13.0). The value can contain variables.</p><p>There could be several add_header directives. These directives are inherited from the previous level if and only if there are no add_header directives defined on the current level.</p><p>If the always parameter is specified (1.7.5), the header field will be added regardless of the response code.</p></blockquote><p>意思也就是说话在响应状态码<strong>成功</strong>时，<code>add_header</code> 指令才生效，并且当前《作用域》下没有 <code>add_header</code> 指令时，会向上层继承。</p><p>在使用过程中难免会遇到上级指令被覆盖的情况，如：</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">add_header</span> x-name nginx</span><span class="token punctuation">;</span>\n\n    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">root</span> /path</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token directive"><span class="token keyword">location</span> /static/</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">add_header</span> x-name2 nginx2</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>当匹配到 <code>/</code> 时，由于 <code>location /</code> 中没有 <code>add_header</code> 指令，所以会继承 <code>server</code> 中的 <code>x-name</code> ，而当匹配到 <code>/static/</code> 时，由于内容已经有 <code>add_header</code> 指令，则上层的 <code>x-name</code> 不会被继承，导致只会输出 <code>x-name2</code> 。</p><h2 id="使用-include-语法" tabindex="-1"><a class="header-anchor" href="#使用-include-语法" aria-hidden="true">#</a> 使用 include 语法</h2><p>因为项目中的应用往往配置会有很多，我们可以把具体的功能拆分成独立的配置文件，使用 <code>include</code> 引用进来，如：</p><ul><li><code>inc/no-cache.conf</code> - 无缓存</li><li><code>inc/cache-max.conf</code> - 缓存最大</li><li><code>inc/sts.conf</code> - STS</li><li><code>inc/xss.conf</code> - XSS 安全过滤</li><li><code>inc/php.conf</code> - PHP FastCGI</li><li>...</li></ul><p>这样就可以按需引用了，如：</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/sts.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/security.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> vhost/xiaoshuo.io/no-cache.conf</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># png,jpg 转 webp</span>\n<span class="token directive"><span class="token keyword">location</span> ~* \\.(jpg|png|meibanfawojiuxiangchangdianyirangquanzhongdadian)$</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/sts.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/security.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> vhost/xiaoshuo.io/cache-max.conf</span><span class="token punctuation">;</span>\n\n    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$cookie_webp</span> = <span class="token string">&#39;1&#39;</span>)</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">rewrite</span> ^/(.*)$ /<span class="token variable">$1</span>.webp last</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token directive"><span class="token keyword">location</span> ~* \\.webp$</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/sts.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/security.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> vhost/xiaoshuo.io/cache-max.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ @webp</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token directive"><span class="token keyword">location</span> @webp</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">content_by_lua_file</span> <span class="token string">&#39;lua/webp.lua&#39;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># http-concat + max cache</span>\n<span class="token directive"><span class="token keyword">location</span> /style/js/</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/sts.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/security.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> vhost/xiaoshuo.io/cache-max.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">concat</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">concat_types</span> application/javascript</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">concat_max_files</span> <span class="token number">30</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">default_type</span> application/javascript</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token directive"><span class="token keyword">location</span> /style/css/</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/sts.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/security.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> vhost/xiaoshuo.io/cache-max.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">concat</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">concat_types</span> text/css</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">concat_max_files</span> <span class="token number">30</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">default_type</span> text/css</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># 时效性高的接口</span>\n<span class="token directive"><span class="token keyword">location</span> ~* ^/((so\\/(.+))||ajax)\\.php$</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/sts.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/security.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> vhost/xiaoshuo.io/php.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">add_header</span> cache-control <span class="token string">&#39;private, max-age=0, no-cache&#39;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># 其实所有的 php</span>\n<span class="token directive"><span class="token keyword">location</span> ~* \\.php$</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$skip_cache</span> <span class="token number">0</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_method</span> = POST)</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$skip_cache</span> <span class="token number">1</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$arg_nocache</span> = <span class="token string">&quot;1&quot;</span>)</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$skip_cache</span> <span class="token number">1</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token directive"><span class="token keyword">fastcgi_cache_key</span> <span class="token variable">$scheme</span><span class="token variable">$request_method</span><span class="token variable">$host</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_cache_use_stale</span>\n        error\n        timeout\n        invalid_header\n        updating\n        http_500\n        http_503</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_cache_bypass</span> <span class="token variable">$skip_cache</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_no_cache</span> <span class="token variable">$skip_cache</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_cache_valid</span> <span class="token number">200</span> <span class="token number">5m</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_cache_valid</span> any <span class="token number">1m</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_cache</span> m_xiaoshuo_php_cache</span><span class="token punctuation">;</span>\n\n    <span class="token directive"><span class="token keyword">add_header</span> x-php-cache-status <span class="token variable">$upstream_cache_status</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/sts.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> inc/security.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> vhost/xiaoshuo.io/cache-small.conf</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span> vhost/xiaoshuo.io/php.conf</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div>',12),p={render:function(n,s){return e}}}}]);