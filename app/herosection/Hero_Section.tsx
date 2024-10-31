import Image from "next/image";
export default function Hero_Section() {
  return (
    <div >
      <h1 className="text-2xl font-bold text-center font-sans text-gray-600 mt-28">
        Sell Your Car on PakWheels and Get the Best Price
      </h1>

      <div className="flex  justify-center" >
        <div className="grid grid-cols-1 gap-4 w-10/12 p-4 ">
          {/* grid coulume 1 */}

          <div className="bg-white h-56 flex justify-between ">
            <div className="mt-4 ml-10">
              <h1 className="text-xl font-bold   font-sans   text-blue-900 mb-4">
                Post your Ad on PakWheels
              </h1>
              <ul className=" font-sans text-sm ">
                <li className="flex mb-2">
                  <Image
                    src="/green-check-mark-hero.png"
                    width={20}
                    height={16}
                    alt="Picture of the author"
                  />
                  Post your Ad for Free in 3 Easy Steps
                </li>
                <li className="flex mb-2">
                  <Image
                    src="/green-check-mark-hero.png"
                    width={20}
                    height={16}
                    alt="Picture of the author"
                  />
                  Get Genuine offers from Verified Buyers
                </li>
                <li className="flex mb-0">
                  <Image
                    src="/green-check-mark-hero.png"
                    width={20}
                    height={16}
                    alt="Picture of the author"
                  />
                  Sell your car Fast at the Best Price
                </li>
              </ul>

              <button
                className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 
                  px-12 rounded  mt-6 "
              >
                Post Your Ad
              </button>
            </div>
            
            <div className="bg-gray-200 w-0.5 h-16 mt-8">
              <h1 className="text-gray-400 mt-14 -ml-4 text-2xl font-sans font-bold">OR</h1>
              <div className="bg-gray-200 w-0.5 h-16 ">

              </div>
            </div>
            

            <div className="mt-4 mr-32">
              <h1 className="text-xl font-bold   font-sans   text-blue-900 mb-4">
                Try PakWheels Sell It For Me
              </h1>
              <ul className=" font-sans text-sm ">
                <li className="flex mb-2">
                  <Image
                    src="/green-check-mark-hero.png"
                    width={20}
                    height={16}
                    alt="Picture of the author"
                  />
                  Dedicated Sales Expert to Sell your Car
                </li>
                <li className="flex mb-2">
                  <Image
                    src="/green-check-mark-hero.png"
                    width={20}
                    height={16}
                    alt="Picture of the author"
                  />
                  We Bargain for you and share the Best Offer
                </li>
                <li className="flex mb-0">
                  <Image
                    src="/green-check-mark-hero.png"
                    width={20}
                    height={16}
                    alt="Picture of the author"
                  />
                  We ensure Safe & Secure Transaction
                </li>
              </ul>

              <button
                className="bg-black hover:bg-gray-700 text-white font-bold py-2 
                  px-11 rounded  mt-6 "
              >
                Register Your Car
              </button>
            </div>
           

          </div>

        </div>
      </div>
    </div>
  );
}
