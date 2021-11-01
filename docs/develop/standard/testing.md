## 一、测试流程

### A) 测试前准备

-   准备测试所需要的环境，环境分为：本地、预发、线上。
-   填写文字版测试单，确定要进行测试的版本和所属的项目，计划测试的时间（开始/结束时间），确定服务端的版本和分支以及客户端的版本和操作系统。
-   建立测试单，测试单命名标准：所属产品+操作系统+版本号+测试次数（包含第几轮回归），建立好测试单后关联相关用例。

### B) 确认资料

-   确认后台配置。
-   检查项目相关内容是否正确

### C) 首轮测试

对被测软件进行一次全面的测试，测试用例 100%执行。

### D) 回归测试

对首轮测试提的 BUG 进行回归测试，测试 BUG 内容及其相关联内容，每进行一轮回归测试需由测试组织一次总结会，参与人员包括：测试、相关开发人员，主要内容：大体是对测试中出现的问题进行总结，目的是为了让大家认识到这个问题，在下次的项目中避免再发生同样的问题，提高工作效率，时间在 15 分钟之内。

### E) 回归测试完成时间，并进行确认

#### 1 测试：

每进行一轮测试需等开发修复完 Bug 后再进行下一轮测试，不能尚未修复完 Bug 就进行测试，一定要及时跟踪 Bug 状态。

#### 2 开发：

Bug 修复完成的时间：

测试根据测试的内容确定 Bug 后，需给开发留出 1-1.5 天的时间修复 Bug 并进行确认，根据 Bug 的修复难易程度，修复时间会提前或者延后，延后时间为 3 小时，时间不宜过长。

责任人：

看出现错误的原因，是前端问题还是后端问题还是 UI 问题，相应指派给不同的负责人，由该负责人修复 Bug，修复完 Bug 后一定要及时改变禅道上 Bug 的状态，以便测试进行下一步工作。

### F) 复测

当被测软件符合上线标准，应对其进行一次全面的复测，已保证功能可以正常实现。

### G) 测试总结会

每次测试完一个项目后，该项目已达到上线标准，需在上线前开一个测试总结会，由测试组织开展；
参会人员：产品, UI, 测试、相关开发人员；
内容：大体包括开始、完成、总结这几个部分，测试应当在总结中发现尚未覆盖的用例并进行完善，需总结测试中出现的问题，目的是为了让大家认识到这个问题，在下次的项目中避免再发生同样的问题，提高工作效率，时间在 15 分钟之内。

## 二、上线标准

### A) BUG 占总测试用例的比例

| A 类错误 | B 类错误 | C 类错误 | D 类错误 |
| -------- | -------- | -------- | -------- |
| 无       | 无       | 无       | <4%      |

对于每一次测试，当没有发现致命性错误和严重性错误和一般性错误，轻微性错误数量小于测试用例总数的 4%，功能实现，且可以正确执行，则认为系统通过本次测试。

### B) 缺陷修复率标准

1)  A、B、C 级错误修复率必须达到 100%。
2)  D 级错误修复率应达到 96%以上。
注：项目紧急时，C 级错误修复率应达到 96%以上,D 级错误修复率应达到 90%以上。

### C) 覆盖率标准

测试用例执行覆盖率应达到 100%。
注：如软件发现 Bug，但没有该项测试用例，应及时进行补充。

## 三、上线重点测试

测试把软件当中的重点内容列举出来：

1. 主要功能；
1. 用户用的比较频繁的功能；
1. 一旦出现缺陷可能对用户造成重大影响的功能；

列举出功能点后，执行一遍测试用例。
上线后也可以让非开发测试人员进行测试，收集问题，增加系统的稳定性。

### 快速修复

看出现错误的原因是属于前端还是后端还是 UI 问题，找到相应的负责人进行修复。

## 附录

### A) 里程碑测试

对开发自己制定的阶段性计划进行测试，主要是看开发有没有完成自己制定的阶段性计划，保证开发进度正常进行，帮助开发确定这个阶段完成的标准以及下个新阶段启动的条件或前提，时刻跟进开发的进度。

### B) 自动化测试

了解安装自动化测试所需软件，熟悉软件的使用，制定相应的测试计划。

### C) 测试流程

1. 产品文档(产品经理)
1. 设计文档(开发者)
    - 数据库设计
    - 接口设计
    - 流程及类的设计
1. 整理测试用例
1. 测试
1. 自动化部署/上线

### D) 白盒测试

测试需从接口角度发现问题，并快速定位问题，确定问题是前端还是后端问题，直接指派给相关负责人。