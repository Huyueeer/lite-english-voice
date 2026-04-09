# English Study

## 目标

实现一个可以输入格式化文本后产出每一条英文的语音的web网页应用；

## 架构

- 使用node进行开发；

## 功能

- 简单的一个文本解析框，等待粘贴文本信息到其中；
- 粘贴进去后解析文本中的内容并进行结构化处理

```shell
mode，n. 模式/方法，切换状态，I need to switch to silent mode.，我需要切换到静音模式。

selection，n. 选择，评价选择，The shop has a large selection of shoes.，这家店有很多鞋子可供选择

# 结构化后
单词、含义、场景、例句、例句翻译
```

- 然后对例句需要调用text to speed来进行语音化；

## UI要求

- 页面元素简单；
- 输入多个文本短后，输出的结构要求是多列。

## 注意

- 我本机的node路径是`D:\node\`如果你需要执行命令安装，你需要使用`.\命令`因为我是windows系统；