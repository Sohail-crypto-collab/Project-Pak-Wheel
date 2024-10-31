import Link from "next/link";
import Image from "next/image";

export default function FeaturingCar() {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-1  w-3/4 ">
          <div className="flex justify-between">
            <h1 className="text-2xl mt-6 font-bold font-sans  ">
              Featured New Cars
            </h1>
            <h1 className="text-sm mt-8  font-sans text-sky-700 hover:text-sky-400  hover:underline ">
              View All New Car
            </h1>
          </div>
        </div>
      </div>

      <div className=" flex justify-start gap-8 text-lg mt-6 font-medium font-sans ml-40 text-gray-600 ">
        <h3 className="hover:text-gray-800 hover:border-b-2 hover:border-b-red-400 text-red-700">Popular</h3>
        <h3 className="hover:text-gray-800 hover:border-b-2 hover:border-b-red-400 text-red-700 ">Upcoming</h3>
        <h3 className="hover:text-gray-800 hover:border-b-2 hover:border-b-red-400 text-red-700 ">Newly Launched</h3>
      </div>

      {/* image 1 */}
      <div className=" flex items-center justify-center mt-5">
        <div className="grid grid-cols-4 gap-4 w-auto p-4">
          <div className="bg-white h-64  rounded-md shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            <Link href="../cardetail/ToyotaCorolla">
              <Image
                className=""
                src="/Corolla-X-Cars-Cropped-Pictures.jpg"
                alt="Toyota Corolla"
                width={220}
                height={100}
              />
            </Link>
            <h2 className="text-base font-sans mt-3 font-semibold  text-sky-700 hover:text-sky-400 text-center">
              Toyota Corolla
            </h2>
            <p className="text-base font-sans font-semibold text-center text-green-500">
              PKR 59.7 - 75.5 lacs
            </p>

            <div className="flex justify-center  fas fa-star text-yellow-500 text-lg ">
              <p className="star">★</p>
              <p className="star">★</p>
              <p className="star">★</p>
              <p className="star">☆</p>
              <p className="star">☆</p>
              <p className="text-xs font-sans font-semibold  text-gray-600 ml-2 mt-1">
                621 Reviews
              </p>
            </div>
          </div>

          {/* imgae 2 */}
          <div className="bg-white h-64  rounded-md shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            <Link href="../cardetail/SuzukiAlto">
              <Image
                className=""
                src="/Suzuki_Alto_-_PNG.jpg"
                alt="Toyota Corolla"
                width={220}
                height={100}
              />
            </Link>
            <h2 className="text-base font-sans mt-3 font-semibold  text-sky-700 hover:text-sky-400 text-center">
              Suzuki Alto
            </h2>
            <p className="text-base font-sans font-semibold text-center text-green-500">
              PKR 23.3 - 30.5 lacs
            </p>

            <div className="flex justify-center  fas fa-star text-yellow-500 text-lg ">
              <p className="star">★</p>
              <p className="star">★</p>
              <p className="star">★</p>
              <p className="star">☆</p>
              <p className="star">☆</p>
              <p className="text-xs font-sans font-semibold  text-gray-600 ml-2 mt-1">
                200 Reviews
              </p>
            </div>
          </div>

          {/* image 3 */}
          <div className="bg-white h-64  rounded-md shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            <Link href="../cardetail/HondaCity">
              <Image
                className=""
                src="/Honda_City_Front.jpg"
                alt="Toyota Corolla"
                width={220}
                height={100}
              />
            </Link>
            <h2 className="text-base font-sans mt-3 font-semibold  text-sky-700 hover:text-sky-400 text-center">
              Honda City
            </h2>
            <p className="text-base font-sans font-semibold text-center text-green-500">
              PKR 46.5 - 58.5 lacs
            </p>

            <div className="flex justify-center  fas fa-star text-yellow-500 text-lg ">
              <p className="star">★</p>
              <p className="star">★</p>
              <p className="star">★</p>
              <p className="star">☆</p>
              <p className="star">☆</p>
              <p className="text-xs font-sans font-semibold  text-gray-600 ml-2 mt-1">
                458 Reviews
              </p>
            </div>
          </div>

          {/* image 4 */}
          <div className="bg-white h-64  rounded-md shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            <Link href="../cardetail/HondaCivic">
              <Image
                className=""
                src="/honda civic.jpg"
                alt="Toyota Corolla"
                width={220}
                height={100}
              />
            </Link>
            <h2 className="text-base font-sans mt-3 font-semibold  text-sky-700 hover:text-sky-400 text-center">
              Honda Civic
            </h2>
            <p className="text-base font-sans font-semibold text-center text-green-500">
              PKR 46.6 - 99.0 lacs
            </p>

            <div className="flex justify-center  fas fa-star text-yellow-500 text-lg ">
              <p className="star">★</p>
              <p className="star">★</p>
              <p className="star">★</p>
              <p className="star">☆</p>
              <p className="star">☆</p>
              <p className="text-xs font-sans font-semibold  text-gray-600 ml-2 mt-1">
                358 Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
