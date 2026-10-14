"use client";

import Link from "next/link";
import React from "react";
import { Rating } from "react-simple-star-rating";

const ProductCard = ({ item }) => {
    return (
        <Link href={"/products/1"}>
        <div>
            {/* Product Image */}
            <img
                className="w-full h-90 object-cover rounded-xl"
                src={item.imageUrl}
                alt={item.title}
            />

            {/* Product Name */}
            <h2 className="text-lg font-bold mt-2">
                {item.title}
            </h2>

            {/* Rating */}
            <div className="flex mt-2 items-end">
                <Rating
                    readonly
                    initialValue={item.rating}
                    allowFraction={true}
                    emptyColor="#ddd"
                    size={22}
                />

                <span className="ml-1">
                    {item.rating}/5
                </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold mt-2">
                    ${item.price}
                </h3>

                {item.originalPrice && (
                    <span className="text-black/60 line-through text-xl">
                        ${item.originalPrice}
                    </span>
                )}

                {item.discountPercent && (
                    <span className="text-sm text-red-600 bg-red-500/15 rounded-full px-2 py-1">
                        -{item.discountPercent}%
                    </span>
                )}
            </div>
            

          
        </div>
        </Link>
    );
};

export default ProductCard;