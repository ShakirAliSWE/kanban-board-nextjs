import ThemeLayout from "@/layouts/ThemeLayout";
import "./globals.css";

export const metadata = {
  title: "Kanban Board",
  description: "This is the Example of Kanban Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeLayout>{children}</ThemeLayout>
      </body>
    </html>
  );
}
