// This is just to demonstrate the folder structure
export default function FolderStructure() {
	return (
		<pre className='text-sm'>
			{`
├── app/
│   ├── (portal)/             # Portal routes (domain.com)
│   │   ├── page.tsx          # Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── dashboard/            # Dashboard routes (app.domain.com)
│   │   ├── page.tsx          # Dashboard home
│   │   ├── users/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   │
│   ├── api/                  # API routes
│   │   └── [...]/
│   │
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/               # Shared components
│   ├── ui/                   # UI components
│   ├── portal/               # Portal-specific components
│   └── dashboard/            # Dashboard-specific components
│
├── lib/                      # Shared utilities
│   └── utils.ts
│
├── hooks/                    # Custom hooks
│   └── use-toast.ts
│
├── store/                    # Zustand stores
│   ├── auth-store.ts         # Authentication store
│   ├── user-store.ts         # User data store
│   └── ui-store.ts           # UI state store
│
├── services/                 # API services
│   ├── api-client.ts         # Axios instance setup
│   ├── auth-service.ts       # Authentication API
│   └── user-service.ts       # User data API
│
├── types/                    # TypeScript types
│   └── index.ts
│
├── middleware.ts             # Domain routing middleware
├── tailwind.config.ts
└── next.config.mjs
      `}
		</pre>
	)
}
