"use client";

export default function ConfiguratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* This layout removes header/footer padding since configurator has its own nav */}
      <style jsx global>{`
        header[role="banner"] {
          display: none !important;
        }
        footer {
          display: none !important;
        }
        main {
          padding-top: 0 !important;
        }
      `}</style>
      {children}
    </>
  );
}
