import Banner from "@/components/Home/Banner";
import Brand from "@/components/Home/Brand";
import CustomersReview from "@/components/Home/CustomersReview";
import DressStyle from "@/components/Home/DressStyle";
import { newArrivalData } from "@/data/newArrivals";
import { topSellingProducts } from "@/data/topSelling";
import ProductSection from "@/shared/ProductSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Brand />
      <ProductSection
        title={"New Arrival"}
        productData={newArrivalData}
      />
      <ProductSection
        title={"Top Sellings"}
        productData={topSellingProducts}
      />
      <DressStyle/>
      <CustomersReview/>
    </div>
  );
}

