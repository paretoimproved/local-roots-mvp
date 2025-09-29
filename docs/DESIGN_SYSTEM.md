# Local-Roots Design System & User Experience

## Design Vision
**"The Airbnb of Local Agriculture"** - Beautiful, trusted marketplace that connects consumers with local farms through Community Supported Agriculture subscriptions.

## Target Users

### Primary: Urban/Suburban Consumers (80% of revenue focus)
- **Demographics**: 25-45, household income $75k+, health/environment conscious
- **Pain Points**: Hard to find quality local produce, complicated farm websites, no standardized pricing/delivery
- **Goals**: Convenient access to fresh, local produce with transparent pricing and easy subscription management

### Secondary: Local Farms (Revenue partners)
- **Demographics**: Small-medium farms (1-50 acres), tech-savvy farmers
- **Pain Points**: Customer acquisition costs, subscription management complexity, payment processing
- **Goals**: Steady revenue through CSA subscribers, reduced admin overhead, professional online presence

## Core User Journey (Consumer Focus)

### 1. Discovery 🔍
**"I want fresh, local produce but don't know which farms to choose"**
- Beautiful homepage with featured farms and clear value proposition
- Category browsing (vegetables, fruits, dairy, meat, mixed CSA)
- Location-based search with map integration
- Social proof (reviews, ratings, "Customer Favorites")

### 2. Exploration 📱
**"I want to understand what I'm getting and how much it costs"**
- Airbnb-style farm cards with high-quality photos
- Detailed farm profiles with story, farming practices, location
- Clear CSA share options with pricing, frequency, duration
- Photo galleries of typical weekly boxes
- Transparent delivery/pickup options

### 3. Decision 💳
**"I want to easily subscribe and know exactly what to expect"**
- Simple share selection (size, frequency, start date)
- Clear pricing breakdown (per week, total commitment, delivery fees)
- Stripe-powered checkout with subscription management
- Email confirmation with delivery schedule and farm contact info

### 4. Experience 📦
**"I want to manage my subscription and connect with my farm"**
- Consumer dashboard showing active subscriptions
- Delivery schedule and pickup location information
- Communication channel with farm (messages, updates)
- Easy subscription pausing/modification
- Payment history and receipts

## Visual Design Language

### Color Palette (Farm-Inspired)
```
Primary Green: #39B54A (trust, growth, nature)
Earth Brown: #8B7355 (authenticity, soil, grounding)
Harvest Gold: #FFD700 (abundance, quality, premium)
Fresh White: #FFFFFF (clean, modern, trustworthy)
Stone Gray: #6B7280 (neutral, professional, readable)
```

### Typography
- **Headers**: Inter/SF Pro (modern, readable, tech-forward)
- **Body**: Inter (clean, accessible, web-optimized)
- **Accent**: Custom farm script for emotional touches

### Visual Style
- **Photography-First**: High-quality farm and produce images as hero elements
- **Card-Based Layout**: Clean cards with rounded corners, subtle shadows
- **Whitespace**: Generous spacing for premium, uncluttered feel
- **Icons**: Custom illustrated icons (tractor, vegetables, delivery truck)

## Component Architecture

### Homepage
```
Hero Section
├── Value Proposition (headline, subtext)
├── Search Bar (location-based)
└── CTA (Browse Farms)

Farm Categories
├── Scrollable Category Icons
├── Popular Categories (Vegetables, Fruits, CSA Boxes)
└── "View All" Link

Featured Farms (Airbnb-style)
├── 2x2 or 3x3 Grid Layout
├── Farm Cards (image, name, rating, price)
├── "Customer Favorite" Badges
└── Heart Icons (favorites)

How It Works
├── 3-Step Process (Find, Subscribe, Enjoy)
├── Illustrated Icons
└── Clear, Simple Copy

Social Proof
├── Customer Reviews/Testimonials
├── Farm Partner Count
└── Subscription Statistics

CTA Section
├── Email Signup
├── Download App (future)
└── Get Started Button
```

### Farm Discovery Page
```
Search & Filters
├── Location Search (ZIP/City)
├── Category Filters
├── Price Range Slider
├── Delivery Options
└── Rating Filter

Farm Grid
├── Responsive Grid (1-4 columns)
├── Farm Cards with Photos
├── Quick Info (rating, price, location)
├── Favorite Hearts
└── Infinite Scroll Loading

Map Integration (Phase 2)
├── Farm Locations
├── Cluster View
└── Map/List Toggle
```

### Farm Detail Page
```
Farm Gallery
├── Hero Image Carousel
├── Professional Farm Photos
├── Produce Photos
└── Behind-the-Scenes Images

Farm Information
├── Farm Story & Philosophy
├── Farming Practices (organic, sustainable)
├── Location & Delivery Areas
├── Contact Information
└── Social Media Links

CSA Share Options
├── Share Size Options (Small, Medium, Large)
├── Frequency (Weekly, Bi-weekly, Monthly)
├── Duration (8 weeks, 16 weeks, Full Season)
├── Pricing Breakdown
└── What's Included Preview

Reviews & Ratings
├── Overall Rating Score
├── Individual Reviews
├── Photo Reviews from Customers
└── Farm Response to Reviews

Subscription CTA
├── Share Selection Form
├── Delivery Preference
├── Start Date Selection
└── "Subscribe Now" Button
```

## Business Model & Revenue Strategy

### Revenue Streams
1. **Commission per Subscription** (8-12% of subscription value)
2. **Premium Farm Listings** ($50-200/month for featured placement)
3. **Payment Processing** (standard Stripe fees passed through)
4. **Future**: Delivery logistics fee, advertising, premium consumer features

### Pricing Strategy
- **Consumer**: No membership fees, transparent pricing
- **Farms**: Commission-based, no upfront costs, simple onboarding
- **Value Proposition**: We handle payments, customer acquisition, and tech - farms focus on farming

## Technical Architecture Decisions

### Performance Requirements
- **Page Load**: <2s on mobile, <1.5s on desktop
- **Search Results**: <500ms response time
- **Image Loading**: Progressive loading with lazy loading
- **Mobile-First**: 80% of traffic expected on mobile

### Accessibility Standards
- **WCAG 2.1 AA Compliance**
- **Screen Reader Support**
- **Keyboard Navigation**
- **High Contrast Mode Support**

### SEO Strategy
- **Local SEO**: Location-based farm discovery
- **Content Marketing**: Farm stories, seasonal guides
- **Structured Data**: Rich snippets for farms and reviews
- **Page Speed**: Core Web Vitals optimization

## Competitive Analysis

### Direct Competitors
- **Farmbox Direct**: More corporate, less local focus
- **Harvie**: B2B focused, complex interface
- **LocalHarvest**: Outdated design, poor mobile experience

### Indirect Competitors
- **Farmers Markets**: In-person, limited hours
- **Grocery Stores**: Convenient but not local/seasonal
- **CSA Direct**: Individual farm websites, fragmented experience

### Our Competitive Advantages
1. **Modern UX**: Airbnb-level design and usability
2. **Local Focus**: Hyperlocal farm discovery
3. **Simplified Onboarding**: Easy for both farmers and consumers
4. **Mobile-First**: Optimized for how people actually shop
5. **Trust & Safety**: Reviews, verified farms, secure payments

## Success Metrics

### Consumer Metrics
- **Conversion Rate**: Discovery → Subscription (target: 8-12%)
- **Retention Rate**: Subscription renewals (target: 70% after first season)
- **Customer Lifetime Value**: Average subscription duration and value
- **Net Promoter Score**: Customer satisfaction and referrals

### Farm Partner Metrics
- **Onboarding Time**: Time from signup to first subscription sale
- **Revenue Growth**: Increase in CSA sales through platform
- **Customer Acquisition Cost**: Cost per new subscriber vs. direct marketing

### Platform Metrics
- **Monthly Active Users**: Unique visitors and return rate
- **Search Success Rate**: Searches leading to farm visits
- **Mobile Conversion**: Mobile vs. desktop performance
- **Geographic Expansion**: Markets served and farm density

---

**Next Steps:**
1. Create wireframes and visual mockups
2. Define specific user flows and interactions
3. Plan technical implementation architecture
4. Create Linear tickets for development sprints