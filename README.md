# This is a simple lab of node.js. And the express lab in the expressDemo.zip
# (node.js crash course and express crash coursh by Traversy Media).
这个是适合初学者的教学实验，用的是油管教学博主的code.
link：https://www.youtube.com/watch?v=32M1al-Y6Ag

Introduction and Overview

Brief introduction to the session's objectives and an outline of the topics covered.
Setting Up the Environment

Installing Node.js and verifying the installation.
Introduction to Node.js REPL (Read-Eval-Print Loop).
Project Initialization

Setting up a new project.
Initializing a package.json file and understanding its structure.
Running JavaScript with Node.js

Executing JavaScript files directly in Node.js.
Differences between running scripts and REPL usage.
Modules in Node.js

Working with CommonJS modules (require and module.exports).
Understanding and using ES Modules (import and export).
Building a Server

Using the HTTP module to create a basic server.
Handling incoming requests and sending responses.
Managing Dependencies with NPM

Writing and running NPM scripts.
Installing and managing NPM modules.
Using nodemon for auto-restarting development servers.
Working with Configurations

Setting up a .gitignore file.
Managing environment variables using .env files.
Request Handling

Exploring the req object to understand HTTP requests.
Using Postman to simulate and test requests.
Implementing simple routing to handle different endpoints.
File and API Handling

Loading and serving files.
Building a simple API for basic operations.
Middleware in Node.js

Creating and using middleware for request handling.
Cleaning up middleware and handlers for better organization.
Working with Request Bodies

Parsing and handling request bodies for POST requests.
Node.js Built-in Modules

File System module: Reading and writing files.
Path module: Working with file and directory paths.
OS module: Accessing system-related information.
URL module: Parsing and working with URLs.
Crypto module: Performing cryptographic operations.
Event-Driven Programming

Understanding and using the EventEmitter class to emit and handle events.
The Process Object

Exploring the process object for runtime information and control.

介绍和概述

简要介绍课程目标，并概述将要学习的主题。
环境搭建

安装 Node.js 并验证安装是否成功。
了解 Node.js REPL（交互式命令行工具）的使用。
项目初始化

设置新项目。
初始化 package.json 文件，并了解其结构和用途。
运行 JavaScript 文件

使用 Node.js 直接执行 JavaScript 文件。
介绍脚本运行与 REPL 使用的区别。
Node.js 模块

学习 CommonJS 模块（require 和 module.exports 的使用）。
理解并使用 ES 模块（import 和 export 的语法）。
构建服务器

使用 HTTP 模块创建基础服务器。
处理传入的请求并返回响应。
依赖管理和 NPM

编写和运行 NPM 脚本。
安装和管理 NPM 模块。
使用 nodemon 自动重启开发服务器。
配置管理

设置 .gitignore 文件以忽略不需要的文件。
使用 .env 文件管理环境变量。
请求处理

探索 req 对象，了解 HTTP 请求。
使用 Postman 模拟和测试请求。
实现简单的路由以处理不同的端点。
文件和 API 操作

加载和提供文件服务。
构建一个简单的 API 来处理基本操作。
Node.js 中间件

创建并使用中间件处理请求。
优化中间件和处理函数以实现更好的组织结构。
处理请求体

解析和处理 POST 请求的请求体。
Node.js 内置模块

文件系统模块：读取和写入文件。
路径模块：处理文件和目录路径。
操作系统模块：获取系统相关信息。
URL 模块：解析和处理 URL。
加密模块：执行加密操作。
事件驱动编程

理解并使用 EventEmitter 类来发出和处理事件。
进程对象

探索 process 对象，了解运行时信息和控制方法。

in the expressDeome.zip:
Basic Concepts

What is Express.js: A web application framework for Node.js.
Opinionated vs. Unopinionated: Understanding the flexibility of the framework.
Environment Setup

Prerequisites: Knowledge of Node.js and basic JavaScript.
Setting up the environment: Installing Express and dependencies.
Core Features

Building a basic server: Quickly start a web application.
Serving static files: Host HTML, CSS, and JavaScript files.
Sending files with res.sendFile().
Requests and Responses

Handling JSON data.
Testing APIs with Postman.
Extracting route parameters using req.params.
Handling query strings with req.query.
Setting response status codes.
Routing and Modularization

Organizing routes in separate files.
Using ES Modules for cleaner code structure.
HTTP Methods

Implementing GET, POST, PUT, and DELETE.
Accessing request data through req.body.
Middleware and Error Handling

Using built-in and custom middleware.
Implementing global error-handling middleware.
Advanced Features

Utilizing environment variables (.env files).
Interacting between frontend and backend.
Submitting forms to APIs.
Enhancing debugging with the Colors package.
EJS Template Engine

Setting up EJS for dynamic HTML rendering.
Passing data to views and looping through arrays.
Using template partials for reusable components.
基础概念

什么是 Express.js：Node.js 的 Web 应用框架。
"Opinionated vs Unopinionated"：框架的灵活性比较。
环境准备

必要的知识：Node.js、JavaScript 基础。
设置开发环境：安装 Express 和依赖。
核心功能

创建基本服务器：快速启动 Web 应用程序。
设置静态文件服务器：提供 HTML/CSS/JS 文件。
使用 res.sendFile() 方法发送文件。
请求与响应

处理 JSON 数据。
通过 Postman 测试 API。
使用 req.params 获取路径参数。
使用 req.query 处理查询字符串。
设置响应状态码。
路由与模块化

将路由拆分到单独的文件。
使用 ES Modules 更清晰的代码组织。
请求方法

GET、POST、PUT、DELETE 的实现。
通过 req.body 获取请求数据。
中间件与错误处理

内置与自定义中间件的使用。
处理错误的全局中间件。
高级功能

使用环境变量（.env 文件）。
前端与后端的请求交互。
提交表单到 API。
使用 Colors 包改善调试输出。
EJS 模板引擎

设置 EJS 模板引擎。
将数据传递到视图。
遍历数组并生成动态内容。
使用模板部分（Partials）提高代码复用。

