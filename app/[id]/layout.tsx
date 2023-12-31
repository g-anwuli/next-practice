export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-1 py-5">{children}</div>;
}
