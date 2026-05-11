import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LicenseGuard – Open Source License Compliance Checker",
  description: "Scan your package.json or requirements.txt for license conflicts and commercial use restrictions. Protect your codebase from legal risk."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a85c01c6-671d-4860-a4fd-caf2c0307f5e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
