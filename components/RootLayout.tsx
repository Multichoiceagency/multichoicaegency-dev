// RootLayout.tsx
export default function RootLayout({
    children,
    session,
  }: {
    children: React.ReactNode;
    session: never;
  }) {
    return <>{children}</>;
  }
  