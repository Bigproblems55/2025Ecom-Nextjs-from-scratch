export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex h-screen flex-col">
        ROOT
        <main className="flex-1 wrapper">
            {children}
        </main>
    </div>
  );
}