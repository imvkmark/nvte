"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8066],{4664:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-05cfbca6",path:"/nginx/guide/dir.html",title:"Nginx 目录建议",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"nginx/guide/dir.md",git:{updatedTime:1629648513e3,contributors:[{name:"duoli",email:"zhaody901@126.com",commits:1}]}}},889:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});var e=a(6252);const l=(0,e._)("h1",{id:"nginx-目录建议",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#nginx-目录建议","aria-hidden":"true"},"#"),(0,e.Uk)(" Nginx 目录建议")],-1),i=(0,e.Uk)("安装 Nginx"),r=(0,e.Uk)(" 时可以选择配置文件的路径，由于 Nginx 程序后续可能会升级版本，但配置基本上就是一份，那么推荐使用配置和程序分离的方式，遵循："),c=(0,e.uE)('<ol><li>配置文件独立管理, 不存放在nginx程序目录内</li><li>每个站点独立一个配置文件</li><li>每个站点独立的日志文件</li><li>提取公用的配置文件</li></ol><p>如:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$dir/wwwroot/                           - 网站根目录，以域名为文件夹名称\n    ./xuexb.com/\n    ./static.xuexb.com/\n\n$dir/src/                               - 安装源包\n\n$dir/local/nginx/                       - nginx相关根目录\n    ./conf/                             - 配置文件\n        ./nginx.conf                    - 配置主入口\n        ./inc                           - 通用配置\n        ./vhost/                        - 各站点的配置，以 `域名.conf` 命名\n            ./xuexb.com.conf\n            ./static.xuexb.com.conf\n\n    ./1.11.1/                           - 各个版本的nginx\n    ./1.11.2/\n\n$dir/logs/                              - 日志相关目录，内以 `域名.type.log` 命名\n        ./last/                         - 最新的日志\n            ./xuexb.com.error.log\n            ./xuexb.com.access.log\n        ./back/                         - 天级备份日志\n            ./20170908/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>这样分离之后不管是 Nginx 主程序版本升级，还是修改某个站点配置，还是快速查找某个站点日志都是得心应手~</p>',4),p={render:function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("p",null,[(0,e.Wm)(a,{to:"/nginx/guide/linux-make.html"},{default:(0,e.w5)((()=>[i])),_:1}),r]),c],64)}}}}]);