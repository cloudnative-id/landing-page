# 🚀 Quick Start Guide

Panduan cepat untuk mulai menggunakan dan mengembangkan landing page ini.

## ⚡ 5 Menit Setup

```bash
# 1. Clone repository
git clone https://github.com/cloudnative-id/landing-page.git
cd landing-page

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Buka browser
# http://localhost:4321/landing-page
```

## 📝 Tambah Event Baru (30 detik)

1. Buat file di `src/content/events/`:
```bash
touch src/content/events/my-event.yaml
```

2. Isi content:
```yaml
title: "Kubernetes Meetup"
date: "2025-04-15"
time: "14:00 WIB"
location: "Jakarta"
type: "meetup"
topic: "Introduction to K8s"
description: "Learn Kubernetes basics"
published: true
```

3. Save & refresh browser - Done! ✅

## 👥 Tambah Team Member (30 detik)

```yaml
# src/content/team/john-doe.yaml
name: "John Doe"
role: "Organizer"
bio: "Cloud enthusiast"
github: "johndoe"
order: 1
```

## 🏢 Tambah Sponsor (30 detik)

```yaml
# src/content/sponsors/acme-corp.yaml
name: "ACME Corp"
tier: "gold"
logo: "/logos/acme.svg"
website: "https://acme.com"
order: 1
```

Upload logo ke `public/logos/acme.svg`

## 🔗 Tambah Social Link (30 detik)

```yaml
# src/content/community/discord.yaml
title: "Discord"
description: "Join our Discord server"
icon: "discord"
link: "https://discord.gg/invite"
order: 4
```

## 🚀 Deploy ke GitHub Pages (3 menit)

```bash
# 1. Push ke GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Enable GitHub Pages
# - Pergi ke Settings → Pages
# - Source: GitHub Actions

# 3. Wait for deployment
# - Check tab Actions
# - Site akan tersedia di: https://USERNAME.github.io/landing-page
```

## 🛠️ Commands Penting

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build untuk production
npm run preview      # Preview production build

# Content validation
npm run astro check  # Check untuk errors
```

## 📋 Project Structure

```
landing-page/
├── src/
│   ├── content/         # 📝 EDIT FILES HERE
│   │   ├── events/      # Event YAML files
│   │   ├── team/        # Team YAML files
│   │   ├── sponsors/    # Sponsor YAML files
│   │   └── community/   # Social links YAML
│   ├── components/      # React/Astro components
│   ├── layouts/         # Page layouts
│   └── pages/           # Routes
├── public/              # Static files (logos, images)
└── .github/workflows/   # Auto-deploy configuration
```

## 🎯 Next Steps

1. ✅ Customize content YAML files
2. ✅ Add your team members
3. ✅ Add upcoming events
4. ✅ Configure GitHub Pages
5. ✅ Share dengan komunitas!

## 📚 Full Documentation

- [README.md](README.md) - Complete documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

## ❓ Need Help?

- 📖 [Astro Docs](https://docs.astro.build)
- 💬 [Telegram Community](https://t.me/kubernetesindonesia)
- 🐛 [Report Issues](https://github.com/cloudnative-id/landing-page/issues)

---

Happy coding! 🎉
