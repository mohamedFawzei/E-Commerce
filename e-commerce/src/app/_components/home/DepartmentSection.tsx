import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubCategory {
  _id: string;
  name: string;
  slug?: string;
}

interface Category {
  _id: string;
  name: string;
  image: string;
  slug?: string;
  subcategories?: SubCategory[];
}

interface DepartmentSectionProps {
  category: Category;
  reverse?: boolean; 
}

const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  category,
  reverse = false,
}) => {
  if (!category) return null;

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100`}
        >
          {/* Image Section */}
          <div className="relative lg:w-1/2 min-h-[300px] lg:min-h-[400px]">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {category.name}
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Shop by Category
            </h3>

            {category.subcategories && category.subcategories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {category.subcategories.slice(0, 8).map((sub) => (
                  <Link
                    key={sub._id}
                    href={`/products?category=${sub._id}`}
                    className="group flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-amber-200 hover:bg-amber-50 transition-all duration-200"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-amber-800">
                      {sub.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mb-6">
                Explore our latest collection in {category.name}.
              </p>
            )}

            <Link
              href={`/products?category=${category._id}`}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors w-fit"
            >
              Shop All {category.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
