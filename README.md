# AI-DRIVEN CUSTOMER SERVICE AUTOMATION

## Technologies Used

Salesforce, Apex, Flows, Prompts Builder

## Project Overview

This workspace contains a suite of Salesforce DX projects focused on building a custom AI-powered customer service platform. The solution integrates Salesforce Agentforce and Apex automations, leveraging Prompt Builder templates and Flow-based pipelines for intelligent, context-aware customer interactions. Data Cloud API integration ensures secure data retrieval, while the Einstein Trust Layer provides compliant AI processing. Rigorous unit testing and debugging across sandbox environments guarantee production reliability.

---

## Folders & Their Roles

### agentforcedx/

- **Purpose:** Core AI automation, bots, GenAI plugins, and agent-related flows.
- **Features:** Apex classes, custom bots, Prompt Builder templates, Flow pipelines, GenAI integration.

### bikeCard/

- **Purpose:** Bike card management and custom UI components.
- **Features:** Lightning Web Components (LWC), Apex logic, custom objects, and automation scripts.

### debugger-project/

- **Purpose:** Debugging and testing tools for Salesforce orgs.
- **Features:** Log management, metadata tracking, sandbox testing utilities.

### ModelsAPILWC/

- **Purpose:** API models and advanced LWC components.
- **Features:** Extensive Apex libraries, object definitions, API integrations, and reusable components.

---

## Common Structure

- `force-app/main/default/`: Salesforce metadata (Apex, LWCs, objects, triggers, etc.)
- `config/`: Scratch org definitions and project configuration.
- `scripts/`: Apex and SOQL scripts for automation and data queries.
- `.sfdx/`, `.sf/`, `.vscode/`: Local and project-specific settings.
- `tools/`, `typings/`: Utility libraries, type definitions, and test results.

## Getting Started

1. Install Salesforce CLI and authenticate to your org.
2. Clone the repository and navigate to the desired project folder.
3. Run `sfdx force:org:create -f config/project-scratch-def.json -s -a <alias>` to create a scratch org.
4. Deploy metadata: `sfdx force:source:push`.
5. Assign permissions and run scripts as needed.

## Contribution

This workspace reflects collaborative development and contributions to Salesforce automation, custom UI, and API integrations. Each project is modular, well-documented, and ready for extension.
