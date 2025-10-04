# Folder Structure

## Root

```bash
/src
├── components/           # Reusable UI components
│   ├── common/          # Shared/generic components (Button, Input, etc.)
│   ├── layout/          # Layout components (Header, Sidebar, Footer)
│   ├── forms/           # Form-related components
│   └── ui/              # UI-specific components
├── pages/               # Page-level components (route components)
├── hooks/               # Custom React hooks
├── services/            # API calls and external services
├── utils/               # Utility functions and helpers
├── constants/           # App constants, enums, configuration
├── types/               # TypeScript type definitions
├── assets/              # Static assets (images, icons, fonts)
├── styles/              # Global styles, themes, CSS modules
├── store/               # State management (Redux, Zustand, etc.)
├── lib/                 # Third-party library configurations
└── App.jsx              # Main App component
```

## Component Structure

```bash
components/
├── common/              # Atomic/reusable components
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   └── index.js
│   ├── Input/
│   ├── Modal/
│   └── Loading/
├── layout/              # Layout structure
│   ├── Header/
│   ├── Sidebar/
│   ├── Footer/
│   └── Layout.jsx
├── forms/               # Form components
│   ├── FormField/
│   ├── FormValidator/
│   └── CustomForm/
└── ui/                  # UI-specific components
    ├── Cards/
    ├── Tables/
    └── Charts/
```

## Pages/Routes Structure

```bash
pages/
├── Home/
│   ├── Home.jsx
│   ├── Home.test.jsx
│   └── components/     # Page-specific components
├── Dashboard/
├── Profile/
├── Settings/
└── NotFound.jsx
```

## Business Login

```bash
services/
├── api/                 # API integration
│   ├── auth.js
│   ├── users.js
│   └── content.js
├── storage/             # Local storage, caching
└── notifications/       # Toast, alerts, etc.

utils/
├── validation.js
├── formatting.js
├── dateUtils.js
└── constants.js

hooks/
├── useAuth.js
├── useApi.js
├── useLocalStorage.js
└── useDebounce.js
```

## Styling Strategy

```bash
/* Global variables */
styles/
├── variables.css      # CSS custom properties
├── base.css          # Reset, typography
├── components.css    # Component styles
└── utilities.css     # Utility classes
```

## (For Future Reference) Advanced Feature-Based Architecture

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── index.js
│   ├── dashboard/
│   └── content/
└── shared/             # Shared across features
    ├── components/
    └── utils/
```