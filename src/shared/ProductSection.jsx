import React from "react";
import Link from "next/link";
import ProductCard from "@/shared/ProductCard";

const ProductSection = ({ productData = [], title }) => {
  return (
    <div className="my-10 container mx-auto px-5">

      <h2 className="text-5xl font-anton text-center">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {productData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      
      {/* View All button */}
      <div className="flex justify-center mt-8">
        <Link
        href="/products">
        <button className="w-[150px] h-[45px] rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
          View All →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;