import React from 'react'
import Image from 'next/image'

const CheckOutPage = () => {
    return (
        <>
            <div>
        <Image
          src={"/images/checkout.png"}
          alt="checkout"
          width={1440}
          height={316}
          className="w-full h-auto mt-20"
        />
      </div>
            <div className="container mx-auto px-4 lg:px-12 mt-16">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                    {/* Left Side: Billing Form */}
                    <div className="w-full lg:w-[60%]">
                        <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
                        <div className="flex flex-wrap items-center justify-start gap-6">
    <div className="w-full sm:w-auto">
        <label>
            First Name
            <br />
            <input
                type="text"
                className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
            />
        </label>
    </div>
    <div className="w-full sm:w-auto">
        <label>
            Last Name
            <br />
            <input
                type="text"
                className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
            />
        </label>
    </div>
</div>

                        <br />
                        Company Name (Optional)
                        <br />
                        <br />
                        <input
                            type="text"
                            className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
                        />
                        <br />
                        <br />
                        Country / Region
                        <br />
                        <br />
                        <div className="relative w-full lg:w-[453px] h-[75px]">
                            <input
                                type="text"
                                className="w-full h-full border border-black rounded-md pl-4 pr-10"
                            />
                            <Image
                                src={"/images/arr-ico.png"}
                                alt="arrow-icon"
                                width={20}
                                height={20}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            />
                        </div>
                        <br />
                        Street address
                        <br />
                        <br />
                        <input
                            type="text"
                            className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
                        />
                        <br />
                        <br />
                        Town / City
                        <br />
                        <br />
                        <input
                            type="text"
                            className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
                        />
                        <br />
                        <br />
                        Province
                        <br />
                        <br />
                        <div className="relative w-full lg:w-[453px] h-[75px]">
                            <input
                                placeholder="Western Province"
                                type="text"
                                className="w-full h-full border border-black rounded-md pl-4 pr-10 text-[#9F9F9F]"
                            />
                            <Image
                                src={"/images/arr-ico.png"}
                                alt="arrow-icon"
                                width={20}
                                height={20}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            />
                        </div>
                        <br />
                        ZIP code
                        <br />
                        <br />
                        <input
                            type="text"
                            className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
                        />
                        <br />
                        <br />
                        Phone
                        <br />
                        <br />
                        <input
                            type="text"
                            className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
                        />
                        <br />
                        <br />
                        Email address
                        <br />
                        <br />
                        <input
                            type="text"
                            className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
                        />
                        <br />
                        <br />
                        Additional information
                        <br />
                        <br />
                        <input
                            placeholder="Additional information"
                            type="text"
                            className="w-full lg:w-[453px] h-[75px] border border-black rounded-md text-[#9F9F9F] pl-4"
                        />
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="w-full lg:w-[35%]">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-[24px] font-semibold">Product</h2>
                                <p className="text-[#9F9F9F]">Asgaard sofa <span className="text-black">X 1</span></p>
                                <span className="font-semibold">Subtotal</span>
                                <span className="font-semibold">Total</span>
                            </div>
                            <div className="flex flex-col gap-3 text-right">
                                <h2 className="text-[24px] font-semibold">Subtotal</h2>
                                <span>Rs. 250,000.00</span>
                                <span>Rs. 250,000.00</span>
                                <span className="text-[#B88E2F] text-[24px] font-semibold">Rs. 250,000.00</span>
                            </div>
                        </div>
                        <div className="border-b border-[#D9D9D9] w-full mt-6"></div>
                        <div className="mt-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-black rounded-full w-[14px] h-[14px]"></div>
                                <h1 className="text-[20px] font-semibold">Direct Bank Transfer</h1>
                            </div>
                            <p className="text-[#9F9F9F] mt-2">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                            <div className="flex items-center gap-3 mt-6">
                                <div className="border border-[#9F9F9F] rounded-full w-[14px] h-[14px]"></div>
                                <h1 className="text-[18px] font-semibold text-[#9F9F9F]">Cash On Delivery</h1>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button className="w-full lg:w-[318px] h-[64px] border border-black rounded-2xl">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutPage
