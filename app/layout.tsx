import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Profile Pulse",
  description:
    "Profile Pulse is a dynamic and intuitive app powered by the GitHub API. Seamlessly search and explore GitHub user profiles with ease. Discover developers, their repositories, and key details that matter to you. Whether you're a coding enthusiast or a tech recruiter, Profile Pulse provides valuable insights, making it a go-to tool for exploring the vast world of GitHub. Built with Next.js for a smooth and responsive experience. Elevate your GitHub user search with Profile Pulse today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
