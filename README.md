# KuberneteLanding page untuk komunitas Kubernetes Cloud Native Indonesia yang dibangun dengan [Astro](https://astro.build) dan [Tailwind CSS](https://tailwindcss.com).

## 🚀 Featuresatures

- ⚡ **Super Fast** - Built dengan Astro untuk performa optimal
- 📝 **YAML-based Content** - Semua content disimpan dalam YAML untuk mudah di-maintain
- 📅 **Smart Event Sorting** - Otomatis pisahkan upcoming vs past events berdasarkan tanggal
- 🎨 **Modern Design** - UI yang clean dan responsive dengan Tailwind CSS
- 📱 **Mobile Friendly** - Responsive di semua device
- 🔄 **Auto Deploy** - Otomatis deploy ke GitHub Pages via GitHub ActionsIndonesia - Landing Page

[![Deploy to GitHub Pages](https://github.com/cloudnative-id/landing-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/cloudnative-id/landing-page/actions/workflows/deploy.yml)

Landing page untuk komunitas Kubernetes Cloud Native Indonesia yang dibangun dengan [Astro](https://astro.build) dan [Tailwind CSS](https://tailwindcss.com).

## ✨ Special Features

### � Auto-Sync Events from CNCF Community
**Events otomatis di-fetch dari [CNCF Community](https://community.cncf.io/kubernetes-indonesia/)!**

- ✅ **Automatic daily updates** - Rebuild setiap hari jam 07:00 WIB
- ✅ **No manual YAML needed** - Data langsung dari CNCF Community
- ✅ **Always up-to-date** - Sinkron otomatis dengan event terbaru
- ✅ **Static & Fast** - Build-time fetching, deployed as pure static files

📖 **Detail lengkap**: [CNCF-INTEGRATION.md](./CNCF-INTEGRATION.md)

## �🚀 Features

- ⚡ **Super Fast** - Built dengan Astro untuk performa optimal
- 🔄 **CNCF Integration** - Events otomatis dari CNCF Community
- 📝 **YAML-based Content** - Team, sponsors, community links dalam YAML
- 🎨 **Modern Design** - UI yang clean dan responsive dengan Tailwind CSS
- 📱 **Mobile Friendly** - Responsive di semua device
- 🤖 **Auto Deploy** - Daily rebuild + deploy ke GitHub Pages

## 📁 Project Structure

```
landing-page/
├── src/
│   ├── content/
│   │   ├── events/          # Event data (YAML files)
│   │   ├── team/            # Team members data (YAML files)
│   │   ├── sponsors/        # Sponsors data (YAML files)
│   │   ├── community/       # Community links (YAML files)
│   │   └── config.ts        # Content collections schema
│   ├── components/          # Reusable components
│   ├── layouts/             # Page layouts
│   ├── pages/               # Pages (index.astro, about.astro)
│   └── styles/              # Global styles
├── public/                  # Static assets
└── .github/workflows/       # GitHub Actions
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm atau pnpm

### Local Development

1. Clone repository:
```bash
git clone https://github.com/cloudnative-id/landing-page.git
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start dev server:
```bash
npm run dev
```

4. Buka browser di `http://localhost:4321`

### Build untuk Production

```bash
npm run build
npm run preview
```

## 📝 Menambah Content

### Menambah Event Baru

Buat file YAML baru di `src/content/events/`:

```yaml
# src/content/events/meetup-march-2026.yaml
title: "Kubernetes Cloud Native Online Meetup March 2026"
date: "2026-03-20"
time: "19:00 WIB"
location: "Online Event (Virtual)"
type: "meetup"
speaker: "TBD"
topic: "Cloud Native Topics"
description: |
  Event description here
cncfEventUrl: "https://community.cncf.io/events/details/cncf-kubernetes-indonesia-presents-YOUR-EVENT-URL/"
published: true
```

**Events akan otomatis dipisahkan:**
- **Upcoming Events** - Events dengan tanggal >= hari ini
- **Past Events** - Events dengan tanggal < hari ini (ditampilkan di collapsible section)

**🔗 CNCF Community:** https://community.cncf.io/kubernetes-indonesia/
speaker: "John Doe"
topic: "Advanced Kubernetes Networking"
description: |
  Deep dive into Kubernetes networking concepts including 
  Services, Ingress, and Network Policies.
registrationUrl: "https://example.com/register"
published: true
```

### Menambah Team Member

Buat file YAML baru di `src/content/team/`:

```yaml
# src/content/team/john-doe.yaml
name: "John Doe"
role: "Technical Lead"
bio: "Kubernetes enthusiast and cloud architect"
github: "johndoe"
twitter: "johndoe"
linkedin: "https://linkedin.com/in/johndoe"
order: 2
```

### Menambah Sponsor

Buat file YAML baru di `src/content/sponsors/`:

```yaml
# src/content/sponsors/company-name.yaml
name: "Company Name"
tier: "gold"
logo: "/logos/company-logo.svg"
website: "https://company.com"
description: "Supporting cloud native adoption in Indonesia"
order: 1
```

### Menambah Community Link

Buat file YAML baru di `src/content/community/`:

```yaml
# src/content/community/discord.yaml
title: "Discord Server"
description: "Join our Discord community"
icon: "discord"
link: "https://discord.gg/your-invite"
order: 3
```

## 🚀 Deployment ke GitHub Pages

### Setup GitHub Pages

1. Pergi ke repository Settings → Pages
2. Pada "Build and deployment", pilih "GitHub Actions"
3. Push ke branch `main` untuk trigger deployment

### Custom Domain (Optional)

Jika ingin pakai custom domain:

1. Update `site` di `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://cloudnative.id',
  base: '/',
  // ...
});
```

2. Tambahkan file `public/CNAME` dengan domain Anda:
```
cloudnative.id
```

3. Setup DNS records di domain provider Anda

## 🤝 Contributing

Contributions are welcome! Untuk contribute:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

MIT License - lihat [LICENSE](LICENSE) file untuk details.

## 🙏 Credits

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Heroicons](https://heroicons.com)

## 📧 Contact

Untuk pertanyaan atau saran, silakan:
- Buat issue di repository ini
- Join komunitas di [Telegram](https://t.me/kubernetesindonesia)
- Email: hello@cloudnative.id

---

Made with ❤️ by Kubernetes Cloud Native Indonesia Community
