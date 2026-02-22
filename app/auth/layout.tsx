import { ThemeSwitcher } from "@/components/theme-switcher";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-6 right-6 z-50">
        <ThemeSwitcher />
      </div>
      {children}
    </div>
  );
}
