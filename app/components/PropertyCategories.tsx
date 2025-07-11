import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyCategories = () => {
  return (
    <section>
      <div className="container mx-auto my-100 px-4">
        <h4 className="mb-5">Property Categories</h4>
        <h2 className="text-center mb-12">Find by Property Type</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <PropertyCard
            title="Apartments"
            imageUrl="/assets/images/apartments.jpg"
          />

          <PropertyCard
            title="Commercial"
            imageUrl="/assets/images/commercial.jpg"
          />

          <PropertyCard
            title="Luxury Villas"
            imageUrl="/assets/images/villas.jpg"
          />

          <PropertyCard title="Plots" imageUrl="/assets/images/plots.jpg" />
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
