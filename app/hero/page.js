import React from "react";

export default function Hero() {
  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
            <div className="max-[991px]:max-w-[720px]">
              <h1 className="mb-6 font-bold text-4xl md:text-6xl pb-4">
                Fast,Reliable and Secure
              </h1>
              <div className="max-w-[528px] mb-6 md:mb-10 lg:mb-12">
                <p className="text-[#636262]">
                  Say goodbye to payment headaches with SecurePay! Our
                  easy-to-use payment platform makes it simple for businesses
                  and individuals to send and receive payments
                </p>
              </div>
              <div className="flex items-center mb-5 md:mb-6 lg:mb-8">
                <a
                  href="#"
                  className="inline-block cursor-pointer border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white rounded-full mr-5 md:mr-6 lg:mr-8"
                >
                  Open Account
                </a>
              </div>
              <div className="w-full max-w-xs">
                <div className="[border-left:2px_solid_rgb(201,_253,_2)] mb-4 py-1.5 pl-4">
                  <p className="text-sm text-[#636262]">
                    A secure and convenient payment app that makes transactions
                    a breeze, offering a seamless way to manage finances on the
                    go.
                  </p>
                </div>

                <div className="flex items-center">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c349_Ellipse%2020%20(1).png"
                    alt=""
                    className="inline-block h-7 w-7 max-w-full mr-2"
                  />

                  <p className="text-sm font-bold">Jessica Smith</p>
                  <div className="ml-4 mr-4 h-full px-0 [border-right-style:solid] py-3"></div>
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c347_Vector.svg"
                    alt=""
                    className="inline-block max-w-full flex-none mr-1 w-3.5"
                  />

                  <p className="text-sm text-[#636262]">5 stars</p>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c34b_Rectangle%2094.svg"
                alt=""
                className="mx-auto inline-block h-full w-full max-w-[640px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
