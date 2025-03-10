# 🎸 BASS - 浏览器代理脚本系统

## 概述

BASS（浏览器代理脚本系统）是一个用于创建和编排自主浏览器代理的高级框架。它支持开发能够通过智能自动化执行复杂网络任务的多代理系统。**核心功能是让LLM自动识别网页结构，并能够根据用户指令自动生成可重复执行的脚本**。为了安全考虑，初始安装的插件大部分特性都会处于关闭状态，用户在充分了解功能特性后可自行开启。

系统以一个小型、自举的核心开始，首先提供网页分析和脚本生成能力，然后逐步扩展到更复杂的多代理系统。该项目结合了一个可共享的脚本仓库，利用社区力量快速构建大量系统自动化脚本支持。在完全开放模式下，系统可以自行在脚本仓库（Script Hub）中查找合适的脚本并自动运行。在安全模式下，用户可以配合 AI 对下载的每个脚本进行代码审查，发现代码中潜在的安全隐患，并自行决定是否使用该脚本。

## 主要特点

- **LLM网页分析与脚本生成**: 智能分析网页结构和内容
  - 自动识别网页元素、表单和交互点
  - 根据用户意图生成执行脚本
  - 支持复杂的条件逻辑和数据提取
  - 脚本可视化编辑和调试

- **多代理编排**：协调多个专业代理解决复杂任务
  - 创建具有不同专业技能的代理团队
  - 智能任务分配和代理间通信
  - 基于角色的代理行为和决策系统
  - 多级层次结构的代理组织管理

- **自主网络导航**：代理能够浏览、交互并从网站提取信息
  - 智能DOM解析和元素识别
  - 上下文感知点击、输入和表单交互
  - 动态网页内容处理和等待策略
  - 反爬虫检测规避和模拟人类行为

- **智能任务规划**：具备分解复杂目标的高级规划能力
  - 基于LLM的任务分解和规划生成
  - 动态调整计划以应对环境变化
  - 层次任务网络（HTN）支持
  - 异常处理和备选计划生成

- **机器人流程自动化（RPA）**：自动化重复性网络工作流程
  - 可视化脚本创建和编辑工具
  - 可参数化的流程模板
  - 定时和触发式任务执行
  - 详细的执行日志和错误报告

- **可扩展架构**：构建具有专业能力的自定义代理
  - 插件系统支持新功能扩展
  - 自定义工具和API集成框架
  - 多模型支持，兼容多种LLM
  - 开放式知识库和功能共享

- **人机协作**：在自主操作和人工指导之间无缝切换
  - 交互式代理监控和控制界面
  - 实时人工干预和指导机制
  - 混合主动性调整，允许不同程度的自主性
  - 学习从人类反馈中改进的能力

- **脚本仓库（Script Hub）**：共享和重用自动化脚本
  - 社区驱动的脚本库
  - 脚本评级和评论系统
  - 版本控制和变更跟踪
  - 安全审计和风险评估工具

- **安全与隐私保护**：保障用户数据和系统安全
  - 细粒度权限控制系统
  - 脚本沙箱执行环境
  - 敏感数据处理和隐私保护机制
  - 合规性检查和安全审计工具

## 待办事项

- [ ] **实现LLM网页分析和脚本生成功能**
  - 开发网页结构分析组件
  - 创建基于用户指令的脚本生成系统
  - 实现基础的脚本执行引擎
  - 构建简易的用户界面用于交互

- [ ] **添加MCP（Claude）支持**
  - 实现Claude API的集成接口
  - 为Claude优化提示工程模板
  - 构建Claude特定的能力评估和性能基准
  - 开发Claude与其他LLM模型的混合使用策略

- [ ] **实现AgentProtocol（agentprotocol.ai）集成**
  - 开发符合AgentProtocol标准的通信接口
  - 创建与其他支持AgentProtocol的系统的互操作性测试
  - 构建代理发现和注册机制
  - 设计跨系统的任务委派和结果汇报流程

- [ ] **扩展多代理编排能力**
  - 开发高级代理协调模式和通信协议
  - 实现团队结构自动形成和适应算法
  - 创建代理能力注册和发现系统
  - 构建代理协作冲突解决机制

- [ ] **提高浏览器自动化性能**
  - 优化并行处理和资源利用
  - 实现智能页面加载策略和缓存系统
  - 开发自适应网络请求节流和优先级机制
  - 构建浏览器指纹多样化系统

- [ ] **通过示例增强文档**
  - 创建入门教程和交互式学习材料
  - 开发各行业的应用案例研究
  - 构建视频演示和实时示例
  - 完善API参考和开发指南

- [ ] **开发可视化脚本编辑器**
  - 设计直观的拖放式界面
  - 实现脚本调试和测试工具
  - 创建脚本模板库和构建块系统
  - 开发脚本版本比较和合并功能

- [ ] **增强安全审计系统**
  - 开发自动化代码安全扫描工具
  - 实现行为模式分析和异常检测
  - 创建细粒度权限管理界面
  - 构建合规性报告生成器

- [ ] **实现高级数据提取和处理**
  - 开发结构化数据识别和分类系统
  - 实现跨网站数据合并和一致性检查
  - 创建数据清洗和转换工具
  - 构建数据可视化和报告生成器

## 入门指南

```bash
# 克隆仓库
git clone https://github.com/peace0phmind/BASS.git

# 进入项目目录
cd bass

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 文档

有关详细文档，请访问我们的[文档网站](https://docs.bass-agi.com)。

## 使用场景

- **网络研究**：从多个来源自主收集和综合信息
- **数据提取**：智能抓取和结构化网络数据
- **工作流自动化**：自动化复杂的基于网络的任务序列
- **测试与质量保证**：通过智能错误处理自动测试网络应用
- **客户服务**：处理常规客户查询的自主代理

## 架构

BASS基于现代、模块化的技术栈构建：

- **前端**：
  - React 19 + TypeScript用于用户界面
  - TailwindCSS用于样式设计
  - Vite用于快速开发和优化构建

- **扩展架构**：
  - 兼容Chrome扩展Manifest V3
  - 支持Firefox兼容性
  - 模块化结构，为不同的扩展视图提供单独的页面：
    - 弹出窗口
    - 选项
    - 侧边面板
    - 内容脚本
    - DevTools集成

- **项目结构**：
  - 使用pnpm工作区的Monorepo架构
  - TurboRepo用于高效构建流水线和任务编排
  - 共享包用于常见功能：
    - UI组件
    - i18n（国际化）
    - 存储实用工具
    - 环境配置

- **开发工具**：
  - ESLint和Prettier用于代码质量
  - TypeScript用于类型安全
  - Husky用于Git钩子
  - 自动化构建和打包脚本

- **AI集成**：
  - 最先进的AI模型提供代理智能
  - 浏览器自动化库用于网络交互

**特别鸣谢**：本项目使用Jonghakseo的[chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)作为其Chrome扩展实现的基础。

## 致谢

我们要向以下项目和贡献者表示感谢：

- 感谢Jonghakseo的[chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)，为使用React和Vite进行Chrome扩展开发提供了优秀的样板。

## 贡献

我们欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.md)了解更多信息。

## 许可证

本项目采用MIT许可证 - 详情请参阅[LICENSE](LICENSE)文件。

## 标签

`#multi-agent` `#agi` `#rpa` `#browser-automation` `#autonomous-agents` `#web-agents` `#intelligent-automation`

## 页面

转译为扩展一部分的代码位于pages目录中。

* content - 内容脚本（manifest.json中的content_scripts）
* content-ui - 在当前页面中渲染的React UI（开始时可以在最底部看到）（manifest.json中的content_scripts）
* content-runtime - 注入的内容脚本；可以像标准内容一样从弹出窗口注入
* devtools - 扩展浏览器DevTools（manifest.json中的devtools_page）
* devtools-panel - 用于devtools的DevTools面板
* new-tab - 覆盖默认的新标签页（manifest.json中的chrome_url_overrides.newtab）
* options - 选项页面（manifest.json中的options_page）
* popup - 点击工具栏中的扩展时显示的弹出窗口（manifest.json中的action.default_popup）
* side-panel - 侧边面板（Chrome 114+）（manifest.json中的side_panel.default_path）

## 包

一些共享包：

* dev-utils - Chrome扩展开发的实用工具（manifest-parser、logger）
* env - 导出包含.env中所有环境变量和动态声明的对象
* hmr - Vite的自定义HMR插件、用于重新加载/刷新的注入脚本、HMR开发服务器
* i18n - 自定义国际化包；提供具有类型安全和其他验证的i18n函数
* shared - 整个项目的共享代码（类型、常量、自定义钩子、组件等）
* storage - 更容易与存储集成的辅助工具，例如本地/会话存储
* tailwind-config - 整个项目的共享Tailwind配置
* tsconfig - 整个项目的共享tsconfig
* ui - 将您的Tailwind配置与全局配置合并的函数；您可以在这里保存组件
* vite-config - 整个项目的共享Vite配置

### 其他有用的包：

* zipper - 运行pnpm zip将dist文件夹打包成新创建的dist-zip中的extension-YYYYMMDD-HHmmss.zip
* module-manager - 运行pnpm module-manager启用/禁用模块
* e2e - 运行pnpm e2e对不同浏览器上的压缩扩展进行端到端测试
