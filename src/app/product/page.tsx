import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <>
      {/* Main Product Banner */}
      <div>
        <Image
          src={"/images/product.png"}
          alt="product"
          width={1440}
          height={316}
          className="w-full h-auto mt-20"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between mt-8 px-4">
        {/* Text Section */}
        <div className="flex flex-col mb-6 sm:mb-0 w-full sm:w-1/2">
          <h1 className="text-[24px] sm:text-[28px] font-semibold">Go to Product page for more Products</h1>
          <span className="text-[#727272] mt-4 sm:mt-6 underline text-[18px] sm:text-[20px]">
            View More
          </span>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap w-full sm:w-1/2 justify-between">
          {/* Product Card 1 */}
          <div className="flex flex-col gap-2 mb-6 sm:mb-0 w-full sm:w-1/2">
            <Image
              src="/images/one.png"
              alt="sec1"
              width={280}
              height={177}
              className="w-full"
            />
            <h1 className="text-[20px] sm:text-[24px] font-semibold">Asgaard Sofa</h1>
            <span>Rs. 250,000.00</span>
            <div className="flex items-center justify-start gap-3 sm:gap-5 mt-2">
              <span>4.7</span>
              <Image
                src="/images/five-star.png"
                alt="star"
                width={124}
                height={20}
              />
              <div className="border-l border-[#727272] h-[30px]"></div>
              <span className="text-[#727272]">204 Review</span>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="flex flex-col gap-2 mb-6 sm:mb-0 w-full sm:w-1/2">
            <Image
              src="/images/two.png"
              alt="sec2"
              width={283}
              height={211}
              className="w-full"
            />
            <h1 className="text-[20px] sm:text-[24px] font-semibold">Outdoor Sofa Set</h1>
            <span>Rs. 224,000.00</span>
            <div className="flex items-center justify-start gap-3 sm:gap-5 mt-2">
              <span>4.2</span>
              <Image
                src="/images/five-star.png"
                alt="star"
                width={124}
                height={20}
              />
              <div className="border-l border-[#727272] h-[30px]"></div>
              <span className="text-[#727272]">145 Review</span>
            </div>
          </div>
        </div>

        {/* Add Product Section */}
        <div className="flex flex-col w-full sm:w-1/2 mt-8 sm:mt-0">
          <h1 className="text-[20px] sm:text-[24px] font-semibold">Add A Product</h1>
          <div className="flex items-center justify-around w-full sm:w-[242px] h-[39px] text-white bg-[#B88E2F] mt-4 sm:mt-6">
            <button className="w-full sm:w-auto">Choose a Product</button>
            <Image
              src="/images/white-arr.png"
              alt="white-arrow"
              height={18}
              width={8.5}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-[#E8E8E8] w-full mt-16"></div>

      {/* Specifications Section */}
      <div className="flex flex-wrap items-start justify-between mt-14 w-full px-4">
        {/* General Details */}
        <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
          <h1 className="text-[24px] sm:text-[28px] font-semibold">General</h1>
          <h4>Sales Package</h4>
          <h4>Model Number</h4>
          <h4>Secondary Material</h4>
          <h4>Configuration</h4>
          <h4>Upholstery Material</h4>
          <h4>Upholstery Color</h4>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>1 sectional sofa</h4>
          <h4>TFCBLIGRBL6SRHS</h4>
          <h4>Solid Wood</h4>
          <h4>L-shaped</h4>
          <h4>Fabric + Cotton</h4>
          <h4>Bright Grey & Lion</h4>
        </div>

        {/* Product Info for Second Item */}
        <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>1 Three Seater, 2 Single Seater</h4>
          <h4>DTUBLIGRBL568</h4>
          <h4>Solid Wood</h4>
          <h4>L-shaped</h4>
          <h4>Fabric + Cotton</h4>
          <h4>Bright Grey & Lion</h4>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-wrap items-start justify-between mt-14 w-full px-4">
        {/* Labels */}
        <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
          <h1 className="text-[24px] sm:text-[28px] font-semibold">Product</h1>
          <h4>Filling Material</h4>
          <h4>Finish Type</h4>
          <h4>Adjustable Headrest</h4>
          <h4>Maximum Load Capacity</h4>
          <h4>Origin of Manufacture</h4>
        </div>

        {/* Product Info Column 1 */}
        <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>Foam</h4>
          <h4>Bright Grey & Lion</h4>
          <h4>No</h4>
          <h4>280 KG</h4>
          <h4>India</h4>
        </div>

        {/* Product Info Column 2 */}
        <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>Matte</h4>
          <h4>Bright Grey & Lion</h4>
          <h4>Yes</h4>
          <h4>300 KG</h4>
          <h4>India</h4>
        </div>
      </div>

     {/* Warranty Details */}
<div className="flex flex-wrap items-start justify-between mt-14 sm:text-[20px] text-[18px] sm:px-6 px-4">
  {/* Column 1 - Warranty Labels */}
  <div className="flex flex-col gap-6 mb-6 sm:mb-0 sm:mx-auto w-full sm:w-1/3">
    <h1 className="text-[24px] sm:text-[28px] font-semibold">Warranty</h1>
    <h4>Warranty Summary</h4>
    <h4>Warranty Service Type</h4>
    <h4>Covered in Warranty</h4>
    <h4>Not Covered in Warranty</h4>
    <h4>Domestic Warranty</h4>
  </div>

  {/* Column 2 - Warranty Details for Product 1 */}
  <div className="flex flex-col gap-6 sm:mt-0 sm:mx-auto w-full sm:w-1/3">
    <h4 className="w-full sm:w-[226px]">1 Year Manufacturing Warranty</h4>
    <h4 className="w-full sm:w-[241px] ">
      For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com
    </h4>
    <h4 className="w-full sm:w-[241px] ">Warranty Against Manufacturing Defect</h4>
    <h4 className="w-full sm:w-[241px] ">
      The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear.
    </h4>
    <h4>1 Year</h4>
    <button className="w-full sm:w-[215px] h-[50px] bg-[#B88E2F] text-white mt-6 sm:mt-10 rounded-lg shadow-lg mb-6">
      Add To Cart
    </button>
  </div>

  {/* Column 3 - Warranty Details for Product 2 */}
  <div className="flex flex-col gap-6 sm:mt-0 sm:mx-auto w-full sm:w-1/3">
    <h4 className="w-full sm:w-[226px]">1.2 Year Manufacturing Warranty</h4>
    <h4 className="w-full sm:w-[241px] ">
      For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com
    </h4>
    <h4 className="w-full sm:w-[241px] ">Warranty of the product is limited to manufacturing defects only.</h4>
    <h4 className="w-full sm:w-[241px] ">
      The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use.
    </h4>
    <h4>3 Months</h4>
    <button className="w-full sm:w-[215px] h-[50px] bg-[#B88E2F] text-white mt-6 sm:mt-10 rounded-lg shadow-lg">
      Add To Cart
    </button>
    
    
  </div>
</div>


    </>
  );
};

export default ProductPage;
