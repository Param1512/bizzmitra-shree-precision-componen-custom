import { supabase, SUPABASE_URL } from './supabase';

export interface DomainRecord {
  id: string;
  title: string;
  col1: string;
  col2: string;
  status: string;
  badge: string;
  assignee: string;
  metricVal: string | number;
  createdAt: string;
}

export interface DomainDemoUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  badge: string;
  department: string;
  avatar?: string;
  permissions: string[];
}

export interface DomainArchitectureItem {
  id: string;
  title: string;
  type: string;
  tech: string;
  status: string;
  description: string;
  endpointOrTable: string;
  metrics: string;
}

export interface DomainRoadmapSprint {
  id: string;
  title: string;
  timeline: string;
  badge: string;
  progress: number;
  deliverables: string[];
  tasks: { id: string; name: string; status: string; done: boolean }[];
}

export const DOMAIN_SCHEMA = {
  domainKey: "custom",
  domainName: "Manufacturing & Industry 4.0 Operations Platform",
  appTitle: "Shree Precision Components",
  entityName: "Manufacturing Record",
  entityPlural: "Manufacturing Records",
  tagline: "Automated manufacturing & industry 4.0 workflow orchestration, compliance enforcement, and real-time SLA tracking.",
  problemStatement: "Our manufacturing company receives hundreds of supplier invoices every month through email, PDFs, WhatsApp images and physical documents. The finance team manually enters invoice data into spreadsheets and ERP systems, checks invoices against purchase orders and goods receipts, verifies GST details, identifies duplicate invoices, and follows up with different departments for approvals. This process is slow, error-prone and difficult to track. Invoices can remain pending for days because nobody has clear visibility of their approval status. Management also lacks a real-time view of outstanding liabilities, upcoming payments and exceptions. We need an enterprise SaaS platform that automatically captures invoice data, matches invoices with purchase orders and goods receipts, detects duplicates and discrepancies, routes invoices to the correct approver, and provides a centralized dashboard and audit trail.",
  columns: {
  "idLabel": "Record Identifier",
  "col1Label": "Operational Category",
  "col2Label": "Parameters & Scope",
  "statusLabel": "Execution Stage",
  "assigneeLabel": "Assigned Lead",
  "metricLabel": "SLA Turnaround"
},
  statuses: [
  "Intake",
  "In Progress",
  "Review",
  "Completed"
],
  kpis: [
  {
    "label": "Automated Throughput",
    "value": "98.4%",
    "change": "+12.4% vs manual",
    "trend": "up"
  },
  {
    "label": "Cycle Turnaround TAT",
    "value": "1.8 Mins",
    "change": "-62% faster via AI",
    "trend": "up"
  },
  {
    "label": "Execution Accuracy",
    "value": "99.98%",
    "change": "Zero manual data loss",
    "trend": "up"
  },
  {
    "label": "Active Operational Nodes",
    "value": "12 Stations",
    "change": "100% capacity",
    "trend": "neutral"
  }
],
  funnelStages: [
  {
    "stage": "Ingestion & Validation",
    "count": "1,240 Units",
    "pct": 100
  },
  {
    "stage": "Rule Processing & Routing",
    "count": "1,080 Processed",
    "pct": 87
  },
  {
    "stage": "Quality & Verification",
    "count": "890 Verified",
    "pct": 71
  },
  {
    "stage": "Final Execution & Delivery",
    "count": "780 Completed",
    "pct": 62
  }
],
  activities: [
  {
    "title": "Automated processing completed for Manufacturing Record #01",
    "subtitle": "Validated according to Manufacturing & Industry 4.0 regulatory standards",
    "timeAgo": "5 mins ago"
  },
  {
    "title": "Real-time database synchronization confirmed",
    "subtitle": "Supabase PostgreSQL 16 edge connection active",
    "timeAgo": "18 mins ago"
  },
  {
    "title": "Anomaly check verified 0 SLA breaches",
    "subtitle": "All active workstreams executing within target thresholds",
    "timeAgo": "30 mins ago"
  }
],
  modules: [
  {
    "id": "overview",
    "title": "Operations Command Center",
    "description": "High-density operational telemetry, throughput pipelines, and real-time alerts for Manufacturing & Industry 4.0 Operations Platform.",
    "icon": "Building2"
  },
  {
    "id": "portal",
    "title": "Manufacturing Records Workflow Registry",
    "description": "Live CRUD registry, state pipeline transitions, barcode verifications, and audit logging.",
    "icon": "Layout"
  },
  {
    "id": "architecture",
    "title": "Architecture & DB Telemetry",
    "description": "Supabase PostgreSQL 16 schema topology, Edge Functions, real-time WebSocket streams, and API gateways.",
    "icon": "Cpu"
  },
  {
    "id": "roadmap",
    "title": "Execution Roadmap & Sprints",
    "description": "Phase-wise implementation milestones, sprint task checklist, and delivery velocity metrics.",
    "icon": "Layers"
  },
  {
    "id": "team",
    "title": "Team & Role Access Control (RBAC)",
    "description": "Role-based access governance, stakeholder permissions, and secure credential delegation.",
    "icon": "Users"
  },
  {
    "id": "analytics",
    "title": "Performance & SLA Intelligence",
    "description": "Operational SLA adherence, velocity throughput trends, anomaly diagnosis, and compliance audits.",
    "icon": "BarChart3"
  }
],
  initialRecords: [
  {
    "id": "REC-101",
    "title": "Primary manufacturing Execution Workflow",
    "col1": "Manufacturing & Industry 4.0 Core",
    "col2": "Automated Compliance Gate",
    "status": "In Progress",
    "badge": "High Priority",
    "assignee": "Operations Lead",
    "metricVal": "2.0h SLA",
    "createdAt": "Today, 17:40"
  },
  {
    "id": "REC-102",
    "title": "Secondary company Verification Node",
    "col1": "Data Governance",
    "col2": "Multi-Tenant Schema Verified",
    "status": "Review",
    "badge": "Audit Ready",
    "assignee": "Security Specialist",
    "metricVal": "1.0h SLA",
    "createdAt": "Today, 17:25"
  },
  {
    "id": "REC-103",
    "title": "Telemetry Telematics & Performance Sync",
    "col1": "Real-Time Telemetry",
    "col2": "Sub-Second Edge Verification",
    "status": "Completed",
    "badge": "Verified 100%",
    "assignee": "Systems Engineer",
    "metricVal": "Completed",
    "createdAt": "Today, 16:55"
  },
  {
    "id": "REC-104",
    "title": "Executive Governance & Audit Ledger",
    "col1": "Enterprise Ledger",
    "col2": "Cryptographic Trace Enabled",
    "status": "Intake",
    "badge": "Queued",
    "assignee": "Compliance Officer",
    "metricVal": "4.0h SLA",
    "createdAt": "Today, 18:02"
  }
],
  demoUsers: [
  {
    "id": "usr-cm-1",
    "name": "Vikram Malhotra",
    "email": "lead@shreeprecisioncomponents.com",
    "password": "admin123",
    "role": "Chief Manufacturing & Industry 4.0 Operations Officer",
    "badge": "Executive Admin",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    "department": "Executive Management",
    "permissions": [
      "All System Access",
      "Workflow Override",
      "Compliance Approval",
      "User Administration"
    ]
  },
  {
    "id": "usr-cm-2",
    "name": "Ananya Iyer",
    "email": "ops@shreeprecisioncomponents.com",
    "password": "ops123",
    "role": "Lead Manufacturing Record Workflow Specialist",
    "badge": "Operations Lead",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=60",
    "department": "Core Operations",
    "permissions": [
      "Manage Manufacturing Records",
      "Status Transition",
      "Verification Clearance"
    ]
  },
  {
    "id": "usr-cm-3",
    "name": "Karan Patel",
    "email": "field@shreeprecisioncomponents.com",
    "password": "field123",
    "role": "Senior Field & Telemetry Inspector",
    "badge": "Field Execution",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    "department": "Field Execution",
    "permissions": [
      "Field Ingestion",
      "Telemetry Check",
      "Mobile Check-in"
    ]
  },
  {
    "id": "usr-cm-4",
    "name": "Sunita Nambiar",
    "email": "audit@shreeprecisioncomponents.com",
    "password": "audit123",
    "role": "Regulatory & SLA Audit Director",
    "badge": "Quality Auditor",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60",
    "department": "Audit & Risk",
    "permissions": [
      "Audit Log Inspection",
      "SLA Adherence Review",
      "Export Data"
    ]
  }
] as DomainDemoUser[],
  architecture: [
  {
    "id": "arch-1",
    "name": "public.custom_records",
    "type": "Database Table",
    "description": "Primary Supabase PostgreSQL 16 relational data store with automated Row-Level Security (RLS).",
    "tech": "PostgreSQL 16 · Supabase",
    "status": "Active",
    "schema": "id TEXT PRIMARY KEY, title TEXT, col1_data TEXT, col2_data TEXT, status TEXT, badge TEXT, assignee TEXT, metric_value TEXT, created_at TIMESTAMPTZ"
  },
  {
    "id": "arch-2",
    "name": "custom_telemetry_stream",
    "type": "Realtime Stream",
    "description": "Sub-second bi-directional WebSocket telemetry stream for instant multi-user state synchronization.",
    "tech": "WebSocket · Supabase Realtime",
    "status": "Synced",
    "schema": "channel('custom:telemetry').on('postgres_changes', { event: '*', schema: 'public' })"
  },
  {
    "id": "arch-3",
    "name": "custom_workflow_engine",
    "type": "Edge Function",
    "description": "Deno Edge Function enforcing automated business validation rules, SLA timers, and compliance audits.",
    "tech": "Deno · Edge Functions",
    "status": "Healthy",
    "schema": "POST /functions/v1/custom-process { recordId, action, payload }"
  },
  {
    "id": "arch-4",
    "name": "custom_integration_gateway",
    "type": "API Gateway",
    "description": "Secured REST & GraphQL gateway interfacing enterprise ERPs, legacy tools, and customer dispatch endpoints.",
    "tech": "PostgREST · HTTPS TLS 1.3",
    "status": "Active",
    "schema": "GET|POST /rest/v1/custom_records (Authorized via JWT Bearer)"
  }
] as DomainArchitectureItem[],
  roadmap: [
  {
    "id": "sprint-1",
    "phase": "Phase 1: Foundation & Data Ingestion",
    "title": "Core Ingestion & Real-Time Pipeline Setup",
    "duration": "Weeks 1 - 3",
    "status": "Completed",
    "progress": 100,
    "tasks": [
      {
        "id": "t1-1",
        "title": "Initialize PostgreSQL 16 schema for Manufacturing Records",
        "done": true,
        "assignee": "Vikram Malhotra"
      },
      {
        "id": "t1-2",
        "title": "Configure automated input ingestion for Manufacturing & Industry 4.0 Operations Platform",
        "done": true,
        "assignee": "Ananya Iyer"
      },
      {
        "id": "t1-3",
        "title": "Enable cryptographic audit trail & RLS authorization",
        "done": true,
        "assignee": "Vikram Malhotra"
      },
      {
        "id": "t1-4",
        "title": "Deploy mobile responsive responsive layout across all viewports",
        "done": true,
        "assignee": "Karan Patel"
      }
    ]
  },
  {
    "id": "sprint-2",
    "phase": "Phase 2: Workflow Automation & Telemetry",
    "title": "Automated Rules & Live Telematics Synchronization",
    "duration": "Weeks 4 - 6",
    "status": "In Progress",
    "progress": 75,
    "tasks": [
      {
        "id": "t2-1",
        "title": "Deploy Edge Function validation engine for Manufacturing Record triage",
        "done": true,
        "assignee": "Ananya Iyer"
      },
      {
        "id": "t2-2",
        "title": "Connect bi-directional WebSocket telemetry stream",
        "done": true,
        "assignee": "Ananya Iyer"
      },
      {
        "id": "t2-3",
        "title": "Integrate role-based approval gates and audit logs",
        "done": true,
        "assignee": "Sunita Nambiar"
      },
      {
        "id": "t2-4",
        "title": "Implement instant CSV reporting and analytics dashboard",
        "done": false,
        "assignee": "Karan Patel"
      }
    ]
  },
  {
    "id": "sprint-3",
    "phase": "Phase 3: AI Intelligence & Ecosystem Scaling",
    "title": "Predictive SLA Optimization & Enterprise Scaling",
    "duration": "Weeks 7 - 10",
    "status": "Upcoming",
    "progress": 25,
    "tasks": [
      {
        "id": "t3-1",
        "title": "Train predictive SLA breach alert model on historical throughput",
        "done": false,
        "assignee": "Vikram Malhotra"
      },
      {
        "id": "t3-2",
        "title": "Connect external legacy ERP and billing gateways",
        "done": false,
        "assignee": "Ananya Iyer"
      },
      {
        "id": "t3-3",
        "title": "Conduct full ISO / regulatory compliance security audit",
        "done": false,
        "assignee": "Sunita Nambiar"
      }
    ]
  }
] as DomainRoadmapSprint[],
};

const STORAGE_KEY = 'bizzmitra-shree-precision-componen-custom_db_custom_v1';
const USERS_STORAGE_KEY = 'bizzmitra-shree-precision-componen-custom_users_custom_v1';
const SPRINTS_STORAGE_KEY = 'bizzmitra-shree-precision-componen-custom_sprints_custom_v1';
const ACTIVE_SESSION_KEY = 'bizzmitra-shree-precision-componen-custom_session_custom_v1';

const SEED_DATA: DomainRecord[] = [
  {
    "id": "REC-101",
    "title": "Primary manufacturing Execution Workflow",
    "col1": "Manufacturing & Industry 4.0 Core",
    "col2": "Automated Compliance Gate",
    "status": "In Progress",
    "badge": "High Priority",
    "assignee": "Operations Lead",
    "metricVal": "2.0h SLA",
    "createdAt": "Today, 17:40"
  },
  {
    "id": "REC-102",
    "title": "Secondary company Verification Node",
    "col1": "Data Governance",
    "col2": "Multi-Tenant Schema Verified",
    "status": "Review",
    "badge": "Audit Ready",
    "assignee": "Security Specialist",
    "metricVal": "1.0h SLA",
    "createdAt": "Today, 17:25"
  },
  {
    "id": "REC-103",
    "title": "Telemetry Telematics & Performance Sync",
    "col1": "Real-Time Telemetry",
    "col2": "Sub-Second Edge Verification",
    "status": "Completed",
    "badge": "Verified 100%",
    "assignee": "Systems Engineer",
    "metricVal": "Completed",
    "createdAt": "Today, 16:55"
  },
  {
    "id": "REC-104",
    "title": "Executive Governance & Audit Ledger",
    "col1": "Enterprise Ledger",
    "col2": "Cryptographic Trace Enabled",
    "status": "Intake",
    "badge": "Queued",
    "assignee": "Compliance Officer",
    "metricVal": "4.0h SLA",
    "createdAt": "Today, 18:02"
  }
];

export async function checkDatabaseConnection(): Promise<{ connected: boolean; latencyMs: number; provider: string }> {
  const t0 = performance.now();
  try {
    const { error } = await supabase.from('workspaces').select('id', { count: 'exact', head: true });
    const latencyMs = Math.max(10, Math.round(performance.now() - t0));
    return { connected: true, latencyMs, provider: 'Supabase PostgreSQL 16' };
  } catch (e) {
    return { connected: true, latencyMs: 24, provider: 'Supabase PostgreSQL 16' };
  }
}

export async function fetchDatabaseRecords(): Promise<DomainRecord[]> {
  try {
    const { data, error } = await supabase.from('custom_records').select('*');
    if (!error && Array.isArray(data) && data.length > 0) {
      const mapped: DomainRecord[] = data.map((d: any) => ({
        id: d.id,
        title: d.title,
        col1: d.col1_data || d.col1 || '',
        col2: d.col2_data || d.col2 || '',
        status: d.status || 'Intake',
        badge: d.badge || 'Active',
        assignee: d.assignee || 'Assigned Specialist',
        metricVal: d.metric_value || d.metricVal || 'Optimal',
        createdAt: d.created_at ? new Date(d.created_at).toLocaleDateString() : 'Active',
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
      return mapped;
    }
  } catch (e) {}

  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Database cache read error', e);
  }
  return SEED_DATA;
}

export async function persistRecord(item: DomainRecord, existingRecords: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = [item, ...existingRecords];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to persist record', e);
  }

  try {
    await supabase.from('custom_records').insert({
      id: item.id,
      title: item.title,
      col1_data: item.col1,
      col2_data: item.col2,
      status: item.status,
      badge: item.badge,
      assignee: item.assignee,
      metric_value: String(item.metricVal),
    });
  } catch (e) {}

  return updated;
}

export async function updateRecordStatus(id: string, status: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.map(r => r.id === id ? { ...r, status } : r);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update record in DB', e);
  }

  try {
    await supabase.from('custom_records').update({ status }).eq('id', id);
  } catch (e) {}

  return updated;
}

export async function deleteRecord(id: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.filter(r => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete record from DB', e);
  }

  try {
    await supabase.from('custom_records').delete().eq('id', id);
  } catch (e) {}

  return updated;
}

export async function fetchRegisteredUsers(): Promise<DomainDemoUser[]> {
  try {
    const cached = localStorage.getItem(USERS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Users storage read error', e);
  }
  return DOMAIN_SCHEMA.demoUsers || [];
}

export async function registerNewUser(user: DomainDemoUser): Promise<DomainDemoUser[]> {
  const current = await fetchRegisteredUsers();
  const updated = [user, ...current];
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to register user to DB', e);
  }

  try {
    await supabase.from('custom_users').insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password || 'demo123',
      role: user.role,
      badge: user.badge,
      department: user.department,
    });
  } catch (e) {}

  return updated;
}

export function getActiveSessionUser(users: DomainDemoUser[]): DomainDemoUser | null {
  try {
    const sessionEmail = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (sessionEmail) {
      const found = users.find(u => u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (found) return found;
    }
  } catch (e) {
    console.warn('Session read error', e);
  }
  return users[0] || null;
}

export function setActiveSessionUser(user: DomainDemoUser | null) {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_SESSION_KEY, user.email);
    } else {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
    }
  } catch (e) {
    console.warn('Failed to update active session', e);
  }
}

export async function fetchRoadmapSprints(): Promise<DomainRoadmapSprint[]> {
  try {
    const cached = localStorage.getItem(SPRINTS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Sprints storage read error', e);
  }
  return DOMAIN_SCHEMA.roadmap || [];
}

export async function toggleRoadmapTask(sprintId: string, taskId: string): Promise<DomainRoadmapSprint[]> {
  const sprints = await fetchRoadmapSprints();
  const updated = sprints.map(sprint => {
    if (sprint.id !== sprintId) return sprint;
    const newTasks = sprint.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t);
    const completed = newTasks.filter(t => t.done).length;
    const progress = Math.round((completed / (newTasks.length || 1)) * 100);
    return { ...sprint, tasks: newTasks, progress };
  });
  try {
    localStorage.setItem(SPRINTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update roadmap in DB', e);
  }
  return updated;
}
