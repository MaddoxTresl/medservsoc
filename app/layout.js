export const metadata = {
  title: "Medical Service Society",
  description: "Saugus High School Medical Service Society Club Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
