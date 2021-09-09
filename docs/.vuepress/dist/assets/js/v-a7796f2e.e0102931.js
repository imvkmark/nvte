"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8657],{8145:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-a7796f2e",path:"/mysql/6_group.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"8.1 各种统计函数",slug:"_8-1-各种统计函数",children:[]},{level:3,title:"8.2 With RollUp 进行汇总统计",slug:"_8-2-with-rollup-进行汇总统计",children:[]},{level:3,title:"9.1 如何正确的使用元数据",slug:"_9-1-如何正确的使用元数据",children:[]},{level:3,title:"9.2 显示创建数据表结构",slug:"_9-2-显示创建数据表结构",children:[]},{level:3,title:"9.3 获取服务器元数据",slug:"_9-3-获取服务器元数据",children:[]},{level:3,title:"9.4 确定服务器支持的存储引擎",slug:"_9-4-确定服务器支持的存储引擎",children:[]}],filePathRelative:"mysql/6_group.md",git:{updatedTime:162981392e4,contributors:[{name:"duoli",email:"zhaody901@126.com",commits:1}]}}},953:(n,e,a)=>{a.r(e),a.d(e,{default:()=>l});const s=(0,a(6252).uE)('<h3 id="_8-1-各种统计函数" tabindex="-1"><a class="header-anchor" href="#_8-1-各种统计函数" aria-hidden="true">#</a> 8.1 各种统计函数</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># 总数\nCount(*)      \n\n# Count + If 组合\nCount(If(DayOfWeek(trav_date) In (1, 7), 1, Null))\n\n# 最小\nMin()\n\n# 最大\nMax()\n\n# 总数\nSum()\n\n# 平均\nAvg()\n\n# 唯一值\nDistinct()\n\n# 子群/分组/聚类函数\n# 聚类函数会忽略 Null 值\n... Group By trav_date\n\n# 子群/分组/聚类函数选择\n# Having 的操作是在已经做好分组的基础上进行的筛选\n... Group By trav_date Having Count(*) &gt; 3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_8-2-with-rollup-进行汇总统计" tabindex="-1"><a class="header-anchor" href="#_8-2-with-rollup-进行汇总统计" aria-hidden="true">#</a> 8.2 With RollUp 进行汇总统计</h3><p>在分组统计数据的基础上再进行统计汇总，即用来得到group by的汇总信息</p><p>数据表操作对应信息</p><table><thead><tr><th>Information_Schema 表</th><th>Show</th></tr></thead><tbody><tr><td>Schemata</td><td>Show Database</td></tr><tr><td>Tables</td><td>Show Tables</td></tr><tr><td>Columns</td><td>Show Columns</td></tr></tbody></table><h3 id="_9-1-如何正确的使用元数据" tabindex="-1"><a class="header-anchor" href="#_9-1-如何正确的使用元数据" aria-hidden="true">#</a> 9.1 如何正确的使用元数据</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 确定数据库是否存在\nSelect Schema_Name \n    From Information_Schema.Schemata\n    Where Schema_Name = ?\n\n# 确定数据表是否存在\nSelect Table_Name \n    From Information_Schema.Tables \n    Where Schema_Name = ? and Table_Name = ?\n    \n# 列信息\nSelect * \n    From Information_Schema.Columns \n    Where Table_Schema = ? and Table_Name = ?\n        And Column_Name = ?\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_9-2-显示创建数据表结构" tabindex="-1"><a class="header-anchor" href="#_9-2-显示创建数据表结构" aria-hidden="true">#</a> 9.2 显示创建数据表结构</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 显示创建数据表结构\nShow Create Table tbl_name;\n\n# 显示列\nShow Columns From tbl_name;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_9-3-获取服务器元数据" tabindex="-1"><a class="header-anchor" href="#_9-3-获取服务器元数据" aria-hidden="true">#</a> 9.3 获取服务器元数据</h3><table><thead><tr><th>语句</th><th>语句生成的信息</th></tr></thead><tbody><tr><td><code>Select Version()</code></td><td>服务器版本</td></tr><tr><td><code>Select Database()</code></td><td>默认的数据库名称</td></tr><tr><td><code>Select User()</code></td><td>客户端连接时候给出的当前用户</td></tr><tr><td><code>Select Current_User()</code></td><td>用来检查客户端权限</td></tr><tr><td><code>Show [Global] Status</code></td><td>服务器的全局状态指示器, 没有 Global 显示当前</td></tr><tr><td><code>Show Variables</code></td><td>服务器配置变量</td></tr></tbody></table><h3 id="_9-4-确定服务器支持的存储引擎" tabindex="-1"><a class="header-anchor" href="#_9-4-确定服务器支持的存储引擎" aria-hidden="true">#</a> 9.4 确定服务器支持的存储引擎</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Show Engines;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',14),l={render:function(n,e){return s}}}}]);