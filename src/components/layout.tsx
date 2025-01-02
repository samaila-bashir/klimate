import { PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-r from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <p className="container mx-auto px-4 text-center text-gray-400">
          Made with ❤️ by SB'Techshare. &copy; 2024
        </p>
      </footer>
    </div>
  );
};

export default Layout;
