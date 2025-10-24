# Admin Platform Scaffold (Future)

The admin panel at `platform.doma-si.com` is intentionally left as a placeholder for future development. Here's the planned architecture:

## 🎯 Planned Features

### Content Management
- **Program Editor**: Add/edit weekly events
- **Menu Manager**: CRUD for menu items, prices, and categories
- **Pages Editor**: Update hero copy, about section, venue info

### User Management
- Authentication with NextAuth.js or Clerk
- Role-based access (Admin, Editor, Viewer)

### Analytics
- Form submissions dashboard
- Page view statistics (via Vercel Analytics)

## 🏗️ Implementation Plan

### Phase 1: Authentication

```bash
npm install next-auth
```

Create `/app/admin` route with middleware:

```typescript
// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/admin/login",
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
```

### Phase 2: Database Setup

Replace JSON files with Supabase or PostgreSQL:

```bash
npm install @supabase/supabase-js
```

Or use Vercel Postgres:

```bash
npm install @vercel/postgres
```

Schema example:
```sql
CREATE TABLE program_events (
  id SERIAL PRIMARY KEY,
  day VARCHAR(20),
  title VARCHAR(100),
  description TEXT,
  icon VARCHAR(10),
  locale VARCHAR(5),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50),
  name VARCHAR(100),
  description TEXT,
  price DECIMAL(5,2),
  tags TEXT[],
  locale VARCHAR(5),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Phase 3: Admin UI

Build simple CRUD interfaces:

```typescript
// app/admin/program/page.tsx
export default function AdminProgram() {
  // Fetch events from DB
  // Display table with edit/delete actions
  // Add "New Event" button
}
```

Use minimal UI library:
- Shadcn/ui
- Headless UI + Tailwind
- React Hook Form for validation

### Phase 4: Content API

Create protected API routes:

```typescript
// app/api/admin/program/route.ts
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();
  if (!session) return new Response("Unauthorized", { status: 401 });
  
  // Fetch from DB
  // Return JSON
}

export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session) return new Response("Unauthorized", { status: 401 });
  
  // Validate input
  // Insert to DB
  // Return success
}
```

## 🚀 Deployment

Deploy admin as separate Vercel project:

1. Create `/admin` directory with isolated Next.js app
2. Deploy to Vercel
3. Attach custom domain: `platform.doma-si.com`
4. Set environment variables (DB, auth secrets)

## 📝 Current State

For now, content is managed via JSON files in `/content`. This is:
- ✅ Simple to edit
- ✅ Version controlled (Git)
- ✅ No database overhead
- ✅ Fast builds

To update content:
1. Edit JSON files directly
2. Commit to Git
3. Push to GitHub
4. Vercel auto-deploys

## 🔗 Resources

- [NextAuth.js Docs](https://next-auth.js.org/)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Shadcn/ui Components](https://ui.shadcn.com/)

---

When ready to build the admin, start with Phase 1 (authentication) and iterate from there.
