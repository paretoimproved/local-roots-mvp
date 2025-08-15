# Local-Roots MVP 🌱

> Enterprise-grade Community Supported Agriculture marketplace connecting local farmers with consumers

## Project Overview

Local-Roots is a two-sided marketplace focused initially on the **consumer experience** - allowing people to discover, browse, and subscribe to CSA (Community Supported Agriculture) shares from local farms. Built with modern web technologies and enterprise development practices.

## MVP Scope

### Phase 1: Consumer Discovery & Subscription
- **Farm Discovery**: Browse local farms with beautiful, Airbnb-style cards
- **Farm Details**: View farm information, CSA share options, and pricing
- **Subscription Flow**: Select CSA shares and complete Stripe checkout
- **User Management**: Clerk authentication and consumer accounts
- **Subscription Management**: View and manage active CSA subscriptions

### Future Phases
- Farmer dashboard and farm management
- Advanced search and filtering
- Review and rating system
- Mobile application

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS + Custom Design System
- **Components**: shadcn/ui + Radix primitives
- **State Management**: TanStack Query
- **Authentication**: Clerk

### Backend
- **Runtime**: Bun
- **Framework**: Hono
- **Database**: PostgreSQL + Drizzle ORM
- **Payments**: Stripe
- **Authentication**: Clerk Backend

### Infrastructure
- **Monorepo**: Turborepo
- **Testing**: Vitest + React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (Frontend) + Railway (Backend)
- **Monitoring**: Vercel Analytics + Error tracking

## Project Structure

```
├── apps/
│   ├── web/              # Next.js frontend application
│   └── api/              # Hono backend API
├── packages/
│   ├── ui/               # Shared component library
│   ├── db/               # Database schema and migrations
│   └── config/           # Shared configuration
├── .github/
│   └── workflows/        # CI/CD automation
└── docs/                 # Engineering documentation
```

## Development Workflow

### Definition of Done
✅ **Ticket Requirements**
- Linear ticket created with acceptance criteria
- Story points estimated and sprint assigned

✅ **Code Quality**
- TypeScript strict mode compliance
- Unit tests with >80% coverage
- Code review approved by Engineering Manager

✅ **Deployment Pipeline**
- Deployed to staging environment
- Functional testing completed
- Production deployment approved
- Linear ticket marked as Done

### Branch Strategy
- `main` - Production-ready code, protected branch
- `feature/[ticket-id]-[description]` - Feature development
- `hotfix/[description]` - Critical production fixes

### Commit Convention
```
feat(component): add subscription checkout flow

Implements Stripe integration for CSA share subscriptions
Includes form validation and error handling

Closes LR-123
```

## Getting Started

### Prerequisites
- Node.js 18+
- Bun 1.0+
- pnpm 8+
- PostgreSQL database

### Local Development
```bash
# Clone repository
git clone https://github.com/[username]/local-roots-mvp.git
cd local-roots-mvp

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start development servers
pnpm dev
```

## Environment Variables

### Required
```bash
# Database
DATABASE_URL=postgresql://...

# Clerk Authentication  
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Stripe Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Deployment

### Staging Environment
- **URL**: https://local-roots-mvp-staging.vercel.app
- **Deploy**: Automatic on merge to `main`
- **Purpose**: Pre-production testing and stakeholder review

### Production Environment  
- **URL**: https://local-roots-mvp.vercel.app
- **Deploy**: Manual approval after staging verification
- **Purpose**: Live customer-facing application

## Team & Responsibilities

- **Engineering Manager**: @brandonqueener - Code review, deployment approval, sprint planning
- **Senior Engineer**: @claude - Feature development, technical architecture, testing

## Contributing

1. Create feature branch from `main`
2. Develop feature with tests
3. Create Pull Request with Linear ticket reference
4. Code review and approval required
5. Deploy to staging for testing
6. Production deployment after approval

---

**Status**: 🚧 Initial setup in progress
**Next Sprint**: Infrastructure setup and design system
**Launch Target**: Q1 2025