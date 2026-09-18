import Header from "@/components/shared/header";
import Footer from "@/components/footer";
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex-center min-h-scree w-full">
        {children}
    </div>
  );
}