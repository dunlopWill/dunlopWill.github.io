---
layout: page
title: MCP Servers
description: Python, FastMCP, Docker, AI, LLMs
img: assets/img/fastaccountant-mcp.png
importance: 4
category: web
related_publications: false
---

## Model Context Protocol (MCP)

The Model Context Protocol (MCP) is an open that standard that allows AI models to connect to external data sources and tools through a standardized interface.

### FastAccountant MCP

I build and deploy MCP servers. For example the FastAccountant MCP server, which provides tools to help speed up accounting tasks like converting currencies.

Below is an example of using the FastAccountant MCP server in Claude Desktop.

#### Claude Desktop

<img width="560" height="315" src="/assets/img/fastaccountant-mcp.png"/>

#### Server address

The server address is `https://fastaccountant.fastmcp.app/mcp`

#### Connecting

The server address can be used to connect with various clients. Examples are shown below.

##### Claude Code

To connect with Claude Code, use:

```bash
claude mcp add --scope local --transport http fastaccountant https://fastaccountant.fastmcp.app/mcp
```

##### VS Code

```bash
code --add-mcp "{\"name\":\"fastaccountant\",\"type\":\"http\",\"url\":\"https://fastaccountant.fastmcp.app/mcp\"}"
```
