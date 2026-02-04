import Footer from "../_components/footer/footer";
import Navbar from "../_components/navbar/Navbar";
import { getCategories, getSubCategories } from "../api/getCategories";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categoryData = getCategories();
  const subCategoryData = getSubCategories();

  const [
    { data: categories } = { data: [] },
    { data: subCategories } = { data: [] },
  ] = await Promise.all([categoryData, subCategoryData]);

  return (
    <>
      {/* S Navbar */}
      <Navbar categories={categories} subCategories={subCategories} />
      {/* E Navbar */}
      {/* S Children */}
      {children}
      {/* E Children */}
      {/* S Footer */}
      <Footer />
      {/* E Footer */}
    </>
  );
}
