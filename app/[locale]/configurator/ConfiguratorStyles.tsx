"use client";

export default function ConfiguratorStyles({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
