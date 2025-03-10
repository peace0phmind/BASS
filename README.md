# 🎸 BASS - Browser Agent Script System

## Overview

BASS (Browser Agent Script System) is an advanced framework for creating and orchestrating autonomous browser agents. It supports the development of multi-agent systems capable of performing complex web tasks through intelligent automation. **Its core functionality is to allow LLMs to automatically analyze web page structures and generate repeatable scripts based on user instructions.** For security considerations, most features of the initially installed plugin will be disabled, and users can enable them after fully understanding the functionality.

The system starts with a small, self-bootstrapping core that first provides webpage analysis and script generation capabilities, then gradually expands to more complex multi-agent systems. The project combines a shareable script repository, leveraging community power to quickly build a large number of system automation script support. In fully open mode, the system can search for appropriate scripts in the Script Hub and run them automatically. In secure mode, users can work with AI to review each downloaded script for potential security vulnerabilities and decide whether to use the script.

## Key Features

- **LLM Web Page Analysis & Script Generation**: Intelligent analysis of web page structure and content
  - Automatic identification of page elements, forms, and interaction points
  - Script generation based on user intent
  - Support for complex conditional logic and data extraction
  - Visual script editing and debugging

- **Multi-Agent Orchestration**: Coordinate multiple specialized agents to solve complex tasks
  - Create teams of agents with different specialized skills
  - Intelligent task allocation and inter-agent communication
  - Role-based agent behaviors and decision systems
  - Multi-level hierarchical agent organization management

- **Autonomous Web Navigation**: Agents can browse, interact, and extract information from websites
  - Intelligent DOM parsing and element recognition
  - Context-aware clicking, typing, and form interactions
  - Dynamic webpage content handling and waiting strategies
  - Anti-scraping detection avoidance and human-like behavior simulation

- **Intelligent Task Planning**: Advanced planning capabilities for breaking down complex goals
  - LLM-based task decomposition and plan generation
  - Dynamic plan adjustment in response to environmental changes
  - Hierarchical Task Network (HTN) support
  - Exception handling and alternative plan generation

- **Robotic Process Automation (RPA)**: Automate repetitive web-based workflows
  - Visual script creation and editing tools
  - Parameterizable process templates
  - Scheduled and trigger-based task execution
  - Detailed execution logs and error reporting

- **Extensible Architecture**: Build custom agents with specialized capabilities
  - Plugin system for new functionality extensions
  - Custom tool and API integration framework
  - Multi-model support with compatibility for various LLMs
  - Open knowledge base and capability sharing

- **Human-in-the-loop Collaboration**: Seamless handoff between autonomous operation and human guidance
  - Interactive agent monitoring and control interface
  - Real-time human intervention and guidance mechanisms
  - Mixed initiative adjustments allowing varying degrees of autonomy
  - Ability to learn and improve from human feedback

- **Script Hub**: Share and reuse automation scripts
  - Community-driven script repository
  - Script rating and review system
  - Version control and change tracking
  - Security auditing and risk assessment tools

- **Security and Privacy Protection**: Safeguard user data and system integrity
  - Fine-grained permission control systems
  - Script sandbox execution environments
  - Sensitive data handling and privacy protection mechanisms
  - Compliance checking and security auditing tools

## TODO List

- [ ] **Implement LLM Web Page Analysis and Script Generation**
  - Develop webpage structure analysis components
  - Create script generation system based on user instructions
  - Implement basic script execution engine
  - Build a simple user interface for interaction

- [ ] **Add support for MCP (Claude)**
  - Implement Claude API integration interfaces
  - Optimize prompt engineering templates for Claude
  - Build Claude-specific capability assessments and performance benchmarks
  - Develop strategies for hybrid use of Claude with other LLM models

- [ ] **Implement AgentProtocol (agentprotocol.ai) integration**
  - Develop communication interfaces compliant with AgentProtocol standards
  - Create interoperability testing with other AgentProtocol-supporting systems
  - Build agent discovery and registration mechanisms
  - Design cross-system task delegation and reporting workflows

- [ ] **Expand multi-agent orchestration capabilities**
  - Develop advanced agent coordination patterns and communication protocols
  - Implement team structure auto-formation and adaptation algorithms
  - Create agent capability registration and discovery systems
  - Build agent collaboration conflict resolution mechanisms

- [ ] **Improve browser automation performance**
  - Optimize parallel processing and resource utilization
  - Implement intelligent page loading strategies and caching systems
  - Develop adaptive network request throttling and prioritization
  - Build browser fingerprint diversification systems

- [ ] **Enhance documentation with examples**
  - Create getting started tutorials and interactive learning materials
  - Develop industry-specific application case studies
  - Build video demonstrations and live examples
  - Complete API references and developer guides

- [ ] **Develop visual script editor**
  - Design intuitive drag-and-drop interface
  - Implement script debugging and testing tools
  - Create script template library and building blocks system
  - Develop script version comparison and merging functionality

- [ ] **Enhance security auditing system**
  - Develop automated code security scanning tools
  - Implement behavioral pattern analysis and anomaly detection
  - Create fine-grained permission management interface
  - Build compliance report generators

- [ ] **Implement advanced data extraction and processing**
  - Develop structured data recognition and classification systems
  - Implement cross-site data merging and consistency checking
  - Create data cleaning and transformation tools
  - Build data visualization and report generators

## Getting Started

```bash
# Clone the repository
git clone https://github.com/peace0phmind/BASS.git

# Navigate to the project directory
cd bass

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Documentation

For detailed documentation, visit our [Documentation Site](https://docs.bass-agi.com).

## Use Cases

- **Web Research**: Autonomous collection and synthesis of information from multiple sources
- **Data Extraction**: Intelligent scraping and structuring of web data
- **Workflow Automation**: Automating complex sequences of web-based tasks
- **Testing & QA**: Automated testing of web applications with intelligent error handling
- **Customer Service**: Autonomous agents for handling routine customer inquiries

## Architecture

BASS is built on a modern, modular tech stack:

- **Frontend**: 
  - React 19 + TypeScript for the user interface
  - TailwindCSS for styling
  - Vite for fast development and optimized builds

- **Extension Architecture**:
  - Chrome Extension Manifest V3 compatible
  - Firefox compatibility support
  - Modular structure with separate pages for different extension views:
    - Popup
    - Options
    - Side Panel
    - Content Scripts
    - DevTools integration

- **Project Structure**:
  - Monorepo architecture using pnpm workspaces
  - TurboRepo for efficient build pipeline and task orchestration
  - Shared packages for common functionality:
    - UI components
    - i18n (internationalization)
    - Storage utilities
    - Environment configuration

- **Development Tools**:
  - ESLint and Prettier for code quality
  - TypeScript for type safety
  - Husky for Git hooks
  - Automated build and packaging scripts

- **AI Integration**:
  - State-of-the-art AI models for agent intelligence
  - Browser automation libraries for web interaction

**Special Thanks**: This project utilizes the [chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite) by Jonghakseo as the foundation for its Chrome extension implementation.

## Acknowledgments

We would like to express our gratitude to the following projects and contributors:

- [chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite) by Jonghakseo for providing an excellent boilerplate for Chrome extension development with React and Vite.

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Tags

`#multi-agent` `#agi` `#rpa` `#browser-automation` `#autonomous-agents` `#web-agents` `#intelligent-automation`


## Pages

Code that is transpiled to be part of the extension lives in the pages directory.

* content - content scripts (content_scripts in manifest.json)
* content-ui - React UI rendered in the current page (you can see it at the very * bottom when you get started) (content_scripts in manifest.json)
* content-runtime - injected content scripts; this can be injected from popup like standard content
* devtools - extend the browser DevTools (devtools_page in manifest.json)
* devtools-panel - DevTools panel for devtools
* new-tab - override the default New Tab page (chrome_url_overrides.newtab in manifest.json)
* options - options page (options_page in manifest.json)
* popup - popup shown when clicking the extension in the toolbar (action.default_popup in manifest.json)
* side-panel - sidepanel (Chrome 114+) (side_panel.default_path in manifest.json)


## Packages

Some shared packages:

* dev-utils - utilities for Chrome extension development (manifest-parser, logger)
* env - exports object which contain all environment variables from .env and dynamically declared
* hmr - custom HMR plugin for Vite, injection script for reload/refresh, HMR dev-server
* i18n - custom internationalization package; provides i18n function with type safety and other validation
* shared - shared code for the entire project (types, constants, custom hooks, components etc.)
* storage - helpers for easier integration with storage, e.g. local/session storages
* tailwind-config - shared Tailwind config for entire project
* tsconfig - shared tsconfig for the entire project
* ui - function to merge your Tailwind config with the global one; you can save components here
* vite-config - shared Vite config for the entire project

### Other useful packages:

* zipper - run pnpm zip to pack the dist folder into extension-YYYYMMDD-HHmmss.zip inside the newly created dist-zip
* module-manager - run pnpm module-manager to enable/disable modules
* e2e - run pnpm e2e for end-to-end tests of your zipped extension on different browsers
