export type PhaseStatus = 'completed' | 'pending';

export interface Phase {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyActivities: string[];
  status: PhaseStatus;
}

export const phases: Phase[] = [
  {
    id: 1,
    title: 'Requirements Confirmation & Project Initiation',
    shortDescription:
      'Gathering business requirements and confirming project scope with Tang Tech & Engineering Ltd.',
    fullDescription:
      'This foundational phase focused on aligning all stakeholders on the vision, scope, and success criteria for the Digitalized Electrical Meter System. Detailed workshops were held with Tang Tech & Engineering Ltd to capture functional and non-functional requirements, identify key user personas (tenants and landlords), and establish the project charter, timeline, and governance model.',
    keyActivities: [
      'Stakeholder interviews and requirement workshops',
      'Definition of tenant self-service purchase flow',
      'Clarification of landlord admin responsibilities',
      'Risk assessment and mitigation planning',
      'Project charter and scope baseline approval',
    ],
    status: 'completed',
  },
  {
    id: 2,
    title: 'Technical Discovery',
    shortDescription:
      'Investigation of the meter manufacturer’s API, GPRS communication protocol and existing vending infrastructure.',
    fullDescription:
      'A deep technical investigation into the existing submeter ecosystem. This included reverse-engineering and documenting the manufacturer’s Head-End System APIs, understanding GPRS modem behavior, credit token formats, offline queuing strategies, and the current vending process used by landlords. The findings directly informed architecture decisions for the automation layer.',
    keyActivities: [
      'Manufacturer API documentation and sandbox testing',
      'GPRS communication protocol analysis',
      'Study of existing vending and token delivery flows',
      'Identification of idempotency and retry requirements',
      'Mapping of Internal Meter ID ↔ Manufacturer Meter ID',
    ],
    status: 'completed',
  },
  {
    id: 3,
    title: 'System Design',
    shortDescription:
      'Architecture design, database schema, UI/UX design for mobile app and admin console.',
    fullDescription:
      'End-to-end system architecture was designed covering the React Native mobile app, Node.js/Express backend services, PostgreSQL data model, payment gateway integration patterns, and the transaction state machine. High-fidelity UI/UX designs for both the tenant mobile experience and the landlord admin console were produced and validated.',
    keyActivities: [
      'Overall system architecture (mobile → backend → manufacturer)',
      'PostgreSQL schema for tenants, meters, transactions & audit logs',
      'Transaction state machine design (CREATED → COMPLETED)',
      'Mobile app information architecture and screen flows',
      'Security model (server-side secrets, access control, webhooks)',
    ],
    status: 'completed',
  },
  {
    id: 4,
    title: 'Mobile Application & Backend Development',
    shortDescription:
      'Building the React Native/Expo tenant mobile app and the Node.js/Express backend services.',
    fullDescription:
      'This is the current active development phase. The tenant-facing React Native (Expo) application and the supporting Node.js/Express backend are being built in parallel. Core features include authentication, meter selection, electricity purchase flow, transaction tracking, and dual-mode support (Utility + Generator). The backend implements the full transaction state machine, access control, and service layer separation.',
    keyActivities: [
      'React Native / Expo app scaffolding with TypeScript & Expo Router',
      'Authentication flows (login, register, OTP)',
      'Dashboard, My Meter, Buy Electricity screens',
      'Backend services: Auth, Tenant, Meter, Transaction, Payment, Vending',
      'Transaction state machine implementation with idempotency',
    ],
    status: 'completed',
  },
  {
    id: 5,
    title: 'Payment Gateway Integration',
    shortDescription:
      'Integration with mobile money payment providers and independent payment verification.',
    fullDescription:
      'Secure integration with Tanzania’s major mobile money providers (M-Pesa, Airtel Money, Tigo Pesa). The system will initiate payments, receive and verify webhooks, and only advance the transaction state after confirmed successful payment. Full support for payment failure handling, timeouts, and reconciliation.',
    keyActivities: [
      'Mobile money provider account setup and credentials management',
      'Payment initiation APIs and unique transaction references',
      'Webhook signature verification and processing',
      'Payment status polling / fallback mechanisms',
      'Reconciliation jobs for orphaned or delayed payments',
    ],
    status: 'pending',
  },
  {
    id: 6,
    title: 'Manufacturer API & GPRS Integration',
    shortDescription:
      'Connecting the vending engine to the meter manufacturer’s platform for remote credit delivery and relay activation.',
    fullDescription:
      'The critical bridge between confirmed payments and physical meter credit. After payment confirmation the vending engine calls the manufacturer Head-End API to generate and deliver credit tokens over GPRS. Support for offline meters, delivery status tracking, retries, and relay activation commands is implemented here.',
    keyActivities: [
      'Secure manufacturer API client implementation',
      'Credit token generation and delivery requests',
      'GPRS delivery status tracking and callbacks',
      'Retry policies for transient network failures',
      'Support for dual-mode (Utility / Generator) credit delivery',
    ],
    status: 'pending',
  },
  {
    id: 7,
    title: 'Testing & Quality Assurance',
    shortDescription:
      'Unit, integration and end-to-end testing with strong focus on failure handling and transaction reconciliation.',
    fullDescription:
      'Comprehensive test coverage across the entire stack. Special emphasis is placed on the multi-stage transaction lifecycle, failure modes (payment failed, vending failed, delivery failed), idempotency, concurrent purchases, offline meter scenarios, and full end-to-end reconciliation between payment providers, backend ledger, and manufacturer system.',
    keyActivities: [
      'Unit tests for services and state machine transitions',
      'Integration tests with mocked payment & manufacturer APIs',
      'End-to-end tests covering happy path and failure paths',
      'Load and concurrency testing for purchase flows',
      'Reconciliation and audit log verification',
    ],
    status: 'pending',
  },
  {
    id: 8,
    title: 'Pilot Deployment, UAT & Full Rollout',
    shortDescription:
      'Limited pilot with real tenants, user acceptance testing, full deployment and handover.',
    fullDescription:
      'Controlled pilot deployment with a selected set of real multi-tenant buildings and tenants. Feedback from landlords and end-users is collected during UAT. After successful validation the system is rolled out fully, documentation and training are delivered, and formal handover to Tang Tech & Engineering Ltd operations is completed.',
    keyActivities: [
      'Pilot site selection and onboarding',
      'User Acceptance Testing with real tenants & landlords',
      'Monitoring, support, and iterative fixes during pilot',
      'Full production deployment and go-live',
      'Training, documentation and formal handover',
    ],
    status: 'pending',
  },
];

export const completedCount = phases.filter((p) => p.status === 'completed').length;
export const totalPhases = phases.length;
