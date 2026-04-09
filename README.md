# LiteEnglish Voice

[中文文档](#中文文档) | [English Documentation](#english-documentation)

---

<h2 id="english-documentation">English Documentation</h2>

A lightweight web application that parses formatted text into structured English learning materials and provides Text-to-Speech (TTS) functionality for example sentences.

### Features
- 📝 Parses structured text (Word, Meaning, Context, Sentence, Translation)
- 📊 Displays parsed content in a clean, multi-column table format
- 🔊 Built-in Text-to-Speech (TTS) for reading example sentences aloud
- 🗣️ Voice selection support (uses native browser and OS voices)
- 🚀 Ready for Vercel deployment

### Input Format
The application expects text input in the following format (separated by Chinese commas `，`):
`Word，Meaning，Context，Sentence，Translation`

**Example:**
```
mode，n. 模式/方法，切换状态，I need to switch to silent mode.，我需要切换到静音模式。
selection，n. 选择，评价选择，The shop has a large selection of shoes.，这家店有很多鞋子可供选择
```

### Local Development

1. **Prerequisites**: Node.js installed
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   npm start
   # or
   node index.js
   ```
4. **Access the app**: Open `http://localhost:3000` in your browser.

### Deploy to Vercel

This project is configured out-of-the-box for Vercel deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fenglish-study)

**Manual Deployment Steps:**
1. Push this code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/), log in with GitHub.
3. Click **"Add New..."** -> **"Project"**.
4. Import your GitHub repository.
5. Leave all settings as default (Framework Preset: Other).
6. Click **Deploy**. Vercel will automatically detect the `vercel.json` configuration and deploy your Express backend and static frontend.

---

<h2 id="中文文档">中文文档</h2>

一个轻量级的网页应用，它可以将特定格式的文本解析为结构化的英语学习材料，并为英文例句提供语音朗读功能。

### 功能特点
- 📝 解析结构化文本（单词、含义、场景、例句、例句翻译）
- 📊 使用干净的多列格形式展示解析后的内容
- 🔊 内置语音合成 (TTS) 功能，可朗读英文例句
- 🗣️ 支持音色选择（调用浏览器和操作系统原生语音库）
- 🚀 已配置好 Vercel 部署环境

### 输入格式要求
应用需要按照以下格式输入文本（使用中文逗号 `，` 分隔）：
`单词，含义，场景，例句，例句翻译`

**示例：**
```
mode，n. 模式/方法，切换状态，I need to switch to silent mode.，我需要切换到静音模式。
selection，n. 选择，评价选择，The shop has a large selection of shoes.，这家店有很多鞋子可供选择
```

### 本地运行

1. **环境要求**: 已安装 Node.js
2. **安装依赖**:
   ```bash
   npm install
   ```
3. **启动服务**:
   ```bash
   npm start
   # 或
   node index.js
   ```
4. **访问应用**: 在浏览器中打开 `http://localhost:3000`。

### 部署到 Vercel

本项目已经配置好 Vercel 相关的环境（包含 `vercel.json` 及入口代码调整），可以直接部署。

**手动部署步骤：**
1. 将此代码推送到您的 GitHub 仓库。
2. 前往 [Vercel](https://vercel.com/)，使用 GitHub 登录。
3. 点击 **"Add New..."** -> **"Project"**。
4. 导入您刚刚创建的 GitHub 仓库。
5. 保持所有默认设置（Framework Preset 为 Other）。
6. 点击 **Deploy（部署）**。Vercel 会自动读取 `vercel.json` 配置，为您部署 Express 后端和静态前端页面。
