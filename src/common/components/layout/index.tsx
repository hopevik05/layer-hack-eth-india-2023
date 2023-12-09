import { ReactNode, useState } from "react";
import Footer from "./footer"
import Header from "./header";
import '../../../assets/css/layout.css'

export default function AppLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-white">
      <Header setMobileMenuOpen={setSidebarOpen} mobileMenuOpen={sidebarOpen} />
      <main className="isolate">
        {children}
        <Footer />
      </main>
    </div>
  );
}
