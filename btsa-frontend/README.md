# Build To Shelter Africa (BTSA) Website

**Empowering Communities, Building Homes, Protecting the Planet**

A modern, immersive website for Build To Shelter Africa - a pan-African NGO addressing housing poverty, youth empowerment, and environmental sustainability through sustainable construction and skills training.

## 🚀 Quick Start

### Prerequisites

You need one of the following package managers installed:
- [Node.js](https://nodejs.org/) (v18+) with npm
- [Bun](https://bun.sh/) (recommended for faster installs)

### Installation

1. **Install dependencies:**

```bash
# Using npm
npm install

# OR using bun (faster)
bun install
```

2. **Install additional required packages:**

```bash
# Using npm
npm install framer-motion react-intersection-observer react-hook-form zod @hookform/resolvers @tanstack/react-query date-fns react-countup embla-carousel-react react-player @radix-ui/react-slot @radix-ui/react-progress tailwindcss-animate

# OR using bun
bun add framer-motion react-intersection-observer react-hook-form zod @hookform/resolvers @tanstack/react-query date-fns react-countup embla-carousel-react react-player @radix-ui/react-slot @radix-ui/react-progress tailwindcss-animate
```

3. **Run the development server:**

```bash
# Using npm
npm run dev

# OR using bun
bun dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Brand Colors

- **Earth Brown** (#8B4513) - Primary color, represents stability and foundation
- **Forest Green** (#228B22) - Environmental sustainability
- **Sky Blue** (#4A90E2) - Hope and water
- **Sunset Orange** (#FF6B35) - CTAs and energy

### Typography

- **Headings**: Montserrat (bold, clean)
- **Body**: Open Sans (readable)
- **Accent**: Dancing Script (handwritten, for quotes)

## 📁 Project Structure

```
btsa-frontend/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles with BTSA brand colors
├── components/
│   ├── btsa/                # BTSA-specific components
│   │   ├── Header.tsx       # Main navigation
│   │   └── Footer.tsx       # Footer with contact info
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx       # Button with BTSA variants
│       ├── card.tsx         # Card component
│       └── progress.tsx     # Progress bar for funding
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── logo.png             # BTSA logo
└── tailwind.config.ts       # Tailwind with BTSA colors
```

## 🌟 Features Implemented

### Phase 1: Foundation ✅
- ✅ BTSA brand color system
- ✅ Custom typography (Montserrat, Open Sans, Dancing Script)
- ✅ Tailwind CSS configuration
- ✅ shadcn/ui components with BTSA variants
- ✅ Responsive header and footer

### Phase 2: Homepage (In Progress)
- ✅ Hero section with mission statement
- ✅ Impact counters (homes, youth, trees, team)
- ✅ Project spotlight (Liberia Initiative)
- ✅ Funding thermometer
- ✅ "How You Can Help" cards
- ✅ Three-pillar approach preview
- ⏳ Interactive animations (next step)
- ⏳ Crisis statistics dashboard (next step)

## 🎯 Next Steps

1. **Add animations** with Framer Motion for immersive experience
2. **Build additional pages**:
   - About section (Our Story, Team, Impact Dashboard)
   - Projects hub (Liberia project detail page)
   - Get Involved pages (Donate, Volunteer, Partner, Share)
   - Learn section (Blog, Resources)
3. **Backend integration** (Laravel API for donations, applications)
4. **Mobile optimization** for 3G/4G African networks
5. **Performance optimization** (<3 second load time target)

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion (to be added)
- **Forms**: React Hook Form + Zod (to be added)
- **Deployment**: Vercel (planned)

## 📝 Development Notes

### Custom Button Variants

The Button component includes BTSA-specific variants:

```tsx
<Button variant="sunset">Donate Now</Button>  // Sunset Orange
<Button variant="earth">Learn More</Button>   // Earth Brown
<Button variant="forest">Get Involved</Button> // Forest Green
```

### Color Usage Guidelines

- **Primary (Earth Brown)**: Main branding, primary actions
- **Accent (Forest Green)**: Environmental features, success states
- **Sky Blue**: Hope, water-related content
- **Sunset Orange**: CTAs, urgent actions, active states

## 🌍 About BTSA

Build To Shelter Africa is a pan-African NGO uniting professionals across the continent to address:
- 🏠 **Housing Poverty** - Sustainable, affordable homes
- 👥 **Youth Empowerment** - Skills training and job creation
- 🌳 **Environmental Sustainability** - Eco-friendly construction

**First Project**: Liberia Youth Empowerment & Housing Initiative
- Training 20 Zoko youth in hydrofoam brick technology
- $26,000 funding goal
- 6-month duration (Jan-Jun 2026)
- Led by Engr. Geitodyu Henrique Crusoe

## 📧 Contact

- **Email**: africabuildtoshelter@gmail.com
- **Phone**: +256 761 070710
- **Location**: Kampala, Uganda 🇺🇬

## 📄 License

© 2025 Build To Shelter Africa. All rights reserved.

---

**Built with ❤️ for Africa's future**
