# Kubernetes Cloud Native Indonesia

[![Deploy to GitHub Pages](https://github.com/cloudnative-id/landing-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/cloudnative-id/landing-page/actions/workflows/deploy.yml)

Official landing page for the Kubernetes Cloud Native Indonesia community.

🌐 **Live Site**: [cncf-id.org](https://cncf-id.org)

## ✨ Features

- ⚡ **Framework** - Built with Astro
- 📝 **YAML-based Content** - Easy content management
- 🖼️ **Event Banners** - Image lightbox for event posters
- 🎯 **Masonry Layout** - Pinterest-style event cards
- 🔍 **Event Filter** - Search by type, location, and time
- 🤖 **Auto Deploy** - GitHub Actions to GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm or pnpm

### Development

```bash
# Clone repository
git clone https://github.com/cloudnative-id/landing-page.git
cd landing-page

# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:4321
```

### Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
landing-page/
├── src/
│   ├── content/
│   │   ├── events/          # Event YAML files
│   │   ├── team/            # Team member YAML files
│   │   ├── community/       # Community links YAML
│   │   └── config.ts        # Content schema
│   ├── components/          # Reusable components
│   ├── layouts/             # Page layouts
│   └── pages/               # Routes
├── public/
│   └── events/              # Event banner images
└── .github/workflows/       # CI/CD
```

## 📝 Adding Content

### Add Event

Create a YAML file in `src/content/events/`:

```yaml
# example-event.yaml
title: "Kubernetes Meetup March 2026"
date: "2026-03-20"
time: "19:00 WIB"
location: "Online Event (Virtual)"
type: "meetup"
speaker: "John Doe"
topic: "Advanced Kubernetes Networking"
description: |
  Deep dive into Kubernetes networking.
cncfEventUrl: "https://community.cncf.io/events/details/..."
banner: "meetup-march-2026.jpg"
published: true
```

Events are automatically sorted:
- **Upcoming** - Events with date >= today
- **Past** - Events with date < today

### Add Team Member

```yaml
# john-doe.yaml
name: "John Doe"
role: "Technical Lead"
bio: "Kubernetes enthusiast"
github: "johndoe"
twitter: "johndoe"
linkedin: "https://linkedin.com/in/johndoe"
order: 1
```

### Add Community Link

```yaml
# discord.yaml
title: "Discord Server"
description: "Join our Discord community"
icon: "discord"
link: "https://discord.gg/your-invite"
order: 3
```

## 📧 Contact

- **Website**: [cncf-id.org](https://cncf-id.org)
- **CNCF Community**: [community.cncf.io/kubernetes-indonesia](https://community.cncf.io/kubernetes-indonesia/)
- **Telegram**: [t.me/kubernetesindonesia](https://t.me/kubernetesindonesia)

---

Made with ❤️ by Kubernetes Cloud Native Indonesia Community