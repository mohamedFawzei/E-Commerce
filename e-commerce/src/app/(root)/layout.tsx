import Navbar from "../_components/navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* S Navbar */}
      <Navbar />
      {/* E Navbar */}
      {/* S Children */}
      {children}
      {/* E Children */}
      {/* S Footer */}

      {/* E Footer */}
    </>
  );
}
