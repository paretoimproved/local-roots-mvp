# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm dev` - Start development servers for all apps
- `pnpm build` - Build all applications and packages
- `pnpm test` - Run all tests across the monorepo
- `pnpm test:coverage` - Run tests with coverage reports
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm typecheck` - TypeScript type checking
- `pnpm lint` - Lint all code
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm format` - Format code

### Database Operations
- `pnpm db:generate` - Generate database types from schema
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio for database management
- `pnpm db:seed` - Seed database with initial data

### Prerequisites
- Node.js 18+
- Bun 1.0+
- pnpm 8+
- PostgreSQL database

## Architecture Overview

This is a **Turborepo monorepo** for a Community Supported Agriculture (CSA) marketplace MVP focused on consumer discovery and subscription to local farm shares.

### Project Structure
- `apps/web/` - Next.js 14 frontend (App Router, TailwindCSS, shadcn/ui, Clerk auth)
- `apps/api/` - Hono backend API (Bun runtime, PostgreSQL, Drizzle ORM, Stripe)
- `packages/ui/` - Shared component library
- `packages/db/` - Database schema and migrations (Drizzle ORM)
- `packages/config/` - Shared configuration

### Tech Stack
- **Frontend**: Next.js 14, TailwindCSS, shadcn/ui, TanStack Query, Clerk
- **Backend**: Bun, Hono, PostgreSQL, Drizzle ORM, Stripe
- **Monorepo**: Turborepo with pnpm workspaces
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel (frontend) + Railway (backend)

### Required Environment Variables
```bash
DATABASE_URL=postgresql://...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Development Standards

### Definition of Done
- TypeScript strict mode compliance
- Unit tests with >80% coverage
- Code review approved
- Deployed to staging and tested

### Branch Strategy
- `main` - Production-ready code (protected)
- `feature/[ticket-id]-[description]` - Feature development
- `hotfix/[description]` - Critical fixes

### Commit Convention
```
feat(component): brief description

Detailed explanation of changes
Includes context and reasoning

Closes LR-123
```

## Key Development Notes

- **Monorepo Management**: All commands run through Turborepo with proper dependency orchestration
- **Database First**: Schema changes require `db:generate` before development
- **Authentication**: Clerk handles both frontend and backend auth
- **Payments**: Stripe integration for CSA subscription checkout
- **Testing**: Coverage requirement of >80% for all new code
- **TypeScript**: Strict mode enabled across all packages

## Deployment & UAT Process

### **Linear Ticket Status Workflow**
1. **In Progress** → Development work begins
2. **PR Review** → Pull request created and under review
3. **Ready for Staging** → PR merged, deployed to staging automatically
4. **UAT Testing** → User Acceptance Testing in staging environment
5. **Done** → UAT passed, feature verified in staging, ready for production

### **Staging Environment Testing (Required)**
- **URL**: Vercel automatic staging deployments
- **Process**: All PRs merged to `main` automatically deploy to staging
- **UAT Requirement**: Every ticket MUST be tested in staging before marking as "Done"
- **Testing Checklist**:
  - [ ] Feature functionality works as expected
  - [ ] Mobile responsiveness verified on real devices/browsers
  - [ ] Performance meets requirements (<2s page load)
  - [ ] Error handling works correctly
  - [ ] Design matches mockups and design system
  - [ ] Accessibility standards met
- **Sign-off**: Engineering Manager approval required for UAT completion

## Project Documentation

**ALWAYS refer to these documentation files when making design, engineering, or implementation decisions:**

### Design & User Experience
- `docs/DESIGN_SYSTEM.md` - Complete design system, color palette, typography, component architecture, and user journey specifications. Reference this for all UI/UX decisions.
- `docs/MOCKUPS.md` - Detailed visual mockups and user flows for all key pages (homepage, farm discovery, farm details, checkout, dashboard). Use these as implementation guides.

### Engineering Standards
- `docs/ENGINEERING.md` - Comprehensive engineering guidelines including Definition of Done, code quality standards, testing requirements, branch strategy, and deployment processes. Follow these standards for all development work.

**Key Integration Points:**
- **Design System**: Use the defined color palette (Primary Green #39B54A, Earth Brown #8B7355, Harvest Gold #FFD700), Inter typography, and card-based layouts
- **User Flows**: Follow the mobile-first approach with critical path of Discovery → Exploration → Decision → Experience
- **Code Quality**: Maintain >80% test coverage, TypeScript strict mode, and proper error handling
- **Performance**: Target <2s page loads, Core Web Vitals optimization, and mobile-first responsive design