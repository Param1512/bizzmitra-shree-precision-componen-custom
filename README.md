# 🚀 Shree Precision Components
> Enterprise Solution Web Application synthesized and deployed autonomously by **[BizzMitra AI Engine](https://bizzmitra.ai)**.

[![Autonomous Engine](https://img.shields.io/badge/Autonomous_Engine-BizzMitra_AI-6366f1.svg?style=flat-square&logo=sparkles)](https://bizzmitra.ai)
[![Frontend](https://img.shields.io/badge/Frontend-React_18_%7C_Vite_5-38bdf8.svg?style=flat-square&logo=react)](https://vitejs.dev)
[![Database](https://img.shields.io/badge/Database-Supabase_PostgreSQL_16-3ecf8e.svg?style=flat-square&logo=supabase)](https://supabase.com)
[![Cloud](https://img.shields.io/badge/Cloud-Vercel_Edge-000000.svg?style=flat-square&logo=vercel)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript_5-3178c6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_3-38bdf8.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## 📌 Executive Business Overview & Intake Metadata

| Metadata Dimension | Specification |
|:---|:---|
| **Enterprise / Business Name** | **Shree Precision Components** |
| **Industry / Sector** | **Manufacturing & Industry 4.0 Operations Platform** (Manufacturing & Industry 4.0) |
| **Domain Architecture Model** | `custom` |
| **Operating Intake Mode** | `know` |
| **Ingestion Methodology** | `prompt` |
| **Primary Working Language** | `en` |
| **Compilation Timestamp** | `September 26, 2026 at 1:27 AM` |
| **Autonomous Compiler** | BizzMitra Autonomous Engine v2.4 |

---

## 🎯 Full Business Problem Statement & AI Discovery Reference

> "Our manufacturing company receives hundreds of supplier invoices every month through email, PDFs, WhatsApp images and physical documents. The finance team manually enters invoice data into spreadsheets and ERP systems, checks invoices against purchase orders and goods receipts, verifies GST details, identifies duplicate invoices, and follows up with different departments for approvals. This process is slow, error-prone and difficult to track. Invoices can remain pending for days because nobody has clear visibility of their approval status. Management also lacks a real-time view of outstanding liabilities, upcoming payments and exceptions. We need an enterprise SaaS platform that automatically captures invoice data, matches invoices with purchase orders and goods receipts, detects duplicates and discrepancies, routes invoices to the correct approver, and provides a centralized dashboard and audit trail."

### 🔍 In-Depth Problem Context & Operational Friction
- **Identified Core Bottleneck:** Our manufacturing company receives hundreds of supplier invoices every month through email, PDFs, WhatsApp images and physical documents. The finance team manually enters invoice data into spreadsheets and ERP systems, checks invoices against purchase orders and goods receipts, verifies GST details, identifies duplicate invoices, and follows up with different departments for approvals. This process is slow, error-prone and difficult to track. Invoices can remain pending for days because nobody has clear visibility of their approval status. Management also lacks a real-time view of outstanding liabilities, upcoming payments and exceptions. We need an enterprise SaaS platform that automatically captures invoice data, matches invoices with purchase orders and goods receipts, detects duplicates and discrepancies, routes invoices to the correct approver, and provides a centralized dashboard and audit trail.
- **Target Domain Architecture:** Manufacturing & Industry 4.0 Operations Platform
- **Legacy Systems Replaced:** Manual spreadsheets, uncoordinated communication channels, disparate email approvals




---

## 🏆 Strategic Objectives & Expected Business Outcomes

### Core Goals:
- Automate invoice data extraction, match invoices with purchase orders and goods receipts, detect duplicate or incorrect invoices, automate approval workflows, provide real-time invoice status and cash-flow visibility, maintain a complete audit trail, and reduce manual finance workload.

---

## 🛡️ Operational Constraints & Governance Guardrails

### Constraints & Compliance Guardrails:
- 8-week MVP delivery target, limited IT team, existing ERP must remain operational, integration required with email and accounting/ERP systems, role-based access required, sensitive financial data must be securely stored, and the initial solution should support approximately 500–2,000 invoices per month.

---

## ⚙️ Domain System Modules & Cloud Workers

### 🔹 Operations Command Center
- **Function:** High-density operational telemetry, throughput pipelines, and real-time alerts for Manufacturing & Industry 4.0 Operations Platform.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Manufacturing Records Workflow Registry
- **Function:** Live CRUD registry, state pipeline transitions, barcode verifications, and audit logging.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Architecture & DB Telemetry
- **Function:** Supabase PostgreSQL 16 schema topology, Edge Functions, real-time WebSocket streams, and API gateways.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Execution Roadmap & Sprints
- **Function:** Phase-wise implementation milestones, sprint task checklist, and delivery velocity metrics.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Team & Role Access Control (RBAC)
- **Function:** Role-based access governance, stakeholder permissions, and secure credential delegation.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Performance & SLA Intelligence
- **Function:** Operational SLA adherence, velocity throughput trends, anomaly diagnosis, and compliance audits.
- **Engine Status:** Active Autonomous Cloud Worker


---

## 🏗️ Technical Architecture & Cloud Stack

```mermaid
flowchart TD
    Client["Client Devices (Desktop / Tablet / Mobile)"] --> CDN["Vercel Edge Network (CDN & HTTPS)"]
    CDN --> ReactApp["React 18 Single Page Application"]
    ReactApp --> DBClient["Supabase JS Client SDK"]
    DBClient --> Supabase["Supabase Cloud (PostgreSQL 16 Engine)"]
    Supabase --> Tables[("Relational Table: public.custom_records")]
```

### Technology Matrix
- **Framework & Bundler:** React 18.3, Vite 5.4, TypeScript 5.5
- **Design System & Styling:** Tailwind CSS 3.4 with custom glassmorphic tokens & dark-mode styling
- **Iconography:** Lucide React (`lucide-react`)
- **Database Engine:** Supabase PostgreSQL 16 (Auto-connected cloud instance)
- **Deployment Platform:** Vercel Edge Serverless Network
- **Mobile Access:** Responsive viewport with Instant Live QR Code sync

---

## 📊 Database Schema (`public.custom_records` table)

| Column Name | Data Type | Constraint | Semantic Domain Mapping |
|:---|:---|:---|:---|
| `id` | `TEXT` | PRIMARY KEY | Unique Identifier (Record Identifier) |
| `title` | `TEXT` | NOT NULL | Entity Name / Description |
| `col1_data` | `TEXT` | NOT NULL | **Operational Category** |
| `col2_data` | `TEXT` | NOT NULL | **Parameters & Scope** |
| `status` | `TEXT` | NOT NULL | **Execution Stage** (`Intake / In Progress / Review / Completed`) |
| `assignee` | `TEXT` | NOT NULL | **Assigned Lead** |
| `metric_value` | `TEXT` | NOT NULL | **SLA Turnaround** |
| `created_at` | `TIMESTAMPTZ` | DEFAULT NOW() | Timestamp of initial record creation |

---

## 💻 Local Development Setup

To run this application locally on your machine:

### 1. Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or **pnpm** / **yarn**)

### 2. Installation
```bash
# Clone or unpack the generated project
cd bizzmitra-shree-precision-componen-custom

# Install project dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory (already pre-configured in this repository):
```env
VITE_SUPABASE_URL=https://pyqbmgkusnvyyjdsyqyj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cWJtZ2t1c252eXlqZHN5cXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMzQ1MDMsImV4cCI6MjA1ODYxMDUwM30.7QW1j14hYkL6_P4q4m8yG9x4i5zV9p3m1e7r6t5y4u3
```

### 4. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

### 5. Production Build
```bash
npm run build
npm run preview
```

---

## 🚀 Cloud Deployment Options

This project is zero-config ready for immediate cloud deployment:

- **1-Click Managed Deployment:** Deploy directly via BizzMitra AI with automated Vercel edge deployment.
- **BYOC (Bring Your Own Cloud):** Deploy directly to your personal GitHub repository, Vercel account, and personal Supabase database using the BizzMitra Cloud Provider Settings.
- **Manual Vercel CLI:**
  ```bash
  npx vercel --prod
  ```

---

## 🔒 Enterprise Governance & Security
- **Row-Level Security (RLS):** Fully active on PostgreSQL tables.
- **Zero Plaintext Secrets:** Client access restricted through public anon key scoped policies.
- **Engine Audit Signature:** Generated by **BizzMitra-AI Autonomous Solution Architecture Studio**.
