export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-20 px-8 lg:px-20">
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  );
}
