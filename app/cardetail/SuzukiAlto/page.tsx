import Link from "next/link";
import Image from "next/image";

export default function SuzukiAlto() {
  return (
    <div className="bg-gray-200 h-auto mt-10">
      <div>
        <h1 className="text-2xl font-sans font-bold text-black ml-32">
          Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-1   shadow-2xl bg-white rounded w-4/5 h-auto  ml-32 mr-28 mt-4">
        {/* image */}

        <div className="flex justify-end mr-32">
          <Image
            className=" "
            src="/Suzuki_banner.jpg"
            width={450}
            height={300}
            alt="corolla"
          />
        </div>

        {/* text */}

        <div className="flex  ml-10  space-x-1 absolute top-64">
          <p className="font-sans text-sm  mt-3 text-green-500">PKR</p>
          <div className="font-sans font-semibold  text-2xl text-green-500 ">
            <p>23.3 - 30.5 lacs</p>
          </div>
          <p className="text-xs font-sans text-gray-500 mt-3">
            (*Ex-Factory Price)
          </p>
        </div>

        <div className="flex ml-10 text-xs absolute top-72">
          <p className=" font-sans font-medium underline text-gray-500 mt-2">
            Financing starts at PKR 105,280/Month
          </p>
        </div>

        {/* stars */}

        <div className="flex ml-10   fas fa-star text-yellow-500 text-lg absolute top-80 ">
          <p className="star">★</p>
          <p className="star">★</p>
          <p className="star">★</p>
          <p className="star">☆</p>
          <p className="star">☆</p>
          <p className="text-xs font-sans font-semibold  text-gray-600 ml-2 mt-2">
            199 Reviews
          </p>
        </div>

        {/* road price  */}

        <div className=" ml-10 font-sans text-xs -mt-8 text-sky-700 hover:text-sky-400 absolute top-96 ">
          <Link href="">On Road Price</Link>
        </div>

        {/* button */}

        <div>
          <button className=" text-sky-700 font-sans text-xs ml-10  -mt-1  border-sky-400 absolute top-96 ">
            Used Toyota Corolla For Sale
          </button>
        </div>

        {/* grid end   */}
      </div>

      {/* prons */}

      <div>
        <h1 className="text-2xl font-sans font-bold text-black ml-32 mt-10">
          Suzuki Alto 2024 Pros & Cons
        </h1>
      </div>

      <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-6 ml-32 mr-32 ">
        <div className=" mt-2">
          <Image
            className="ml-5"
            src="/green-thumbs-up-11246 (2).png"
            alt="good"
            width={40}
            height={40}
          />

          <h3 className="ml-20 -mt-9 text-2xl font-bold font-sans text-gray-600 ">
            What we like
          </h3>
        </div>

        <div className="-ml-2">
          <ul className=" flex flex-col -ml-96  mt-20 font-sans ">
            <li className="flex -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">Extremely Economical</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">Parts are easily available</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">Strong Dealership Network</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">High Resale Value</h6>
            </li>
          </ul>
        </div>

        {/* cons */}

        <div
          className="absolute right-80 mt-2
              "
        >
          <Image
            className="ml-5"
            src="/thumbs-down-14925 (1).png"
            alt="good"
            width={40}
            height={40}
          />
          <h3 className="ml-20 -mt-9 text-2xl font-bold font-sans text-gray-600 ">
            What we do not like
          </h3>
        </div>

        <div className=" absolute right-64  flex ">
          <ul className="font-sans ">
            <li className="flex   mt-16 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4  -mb-2">
                Feels underpowered especially on Highway.
              </h6>
            </li>
            <li className="flex  mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4 -mb-2 ">
                Same Generation from over 8 Years.
              </h6>
            </li>
            <li className="flex  mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4 -mb-2">Poor Road Grip.</h6>
            </li>
            <li className="flex  mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4">No Rear AC Vents.</h6>
            </li>
          </ul>
        </div>

        {/* GRID END */}
      </div>

      <div>
        <h1 className="text-2xl font-sans font-bold text-black ml-32 mt-6">
          Suzuki Alto 2024 Overview
        </h1>
      </div>

      {/* grid */}

      <div className=" mt-3 grid grid-cols-1  bg-white rounded-lg shadow-md p-6 ml-32 mr-32 ">
        <h1 className="font-sans text-lg font-bold text-red-700">
          Introduction:
        </h1>
        <p className="font-sans text-sm">
          Suzuki Alto 2024 has always enjoyed a healthy market share in
          developing countries, mainly due to its economic price and fuel
          economy. It was introduced in Pakistan in 1979 and instantly became
          popular. Initially known as Suzuki FX, it was the cheapest car in the
          market and came with three engine configurations: 539cc T5B, 543cc
          F5A, and 796cc F8B.
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700 mt-6">
          Suzuki Alto Exterior:
        </h1>
        <p className="font-sans text-sm">
          Suzuki Alto 2024 is a small and economical helps it maneuver through
          urban traffic. The rear lights are integrated into the bumper and the
          headlights and turn signals are integrated into one unit. The size of
          the front grille is small and it is the same on all three models.
          Colored door mirrors and handles are only offered in the VXL variant.
          Moreover, retractable mirrors are also only available in the VXL
          variant..
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700 mt-6">
          Suzuki Alto Interior:
        </h1>
        <p className="font-sans text-sm">
          The interior looks good for the cheapest locally produced car in
          Pakistan. The dashboard is a combination of dark grey and light grey.
          The speedometer has all the necessary information: fuel average,
          instant fuel average, distance to end, and fuel indicator. The
          automatic gear shift is just next to the steering wheel, at arm’s
          length. The car has analog climate control, two cupholders in the
          front and the back, and a console box. Alto VXL has practical
          features, power windows, retractable mirrors, dual airbags, and
          electric power steering.
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700">
          Alto Engine:
        </h1>
        <p className="font-sans text-sm">
          The Alto 2024 comes with a new R06A engine which is more efficient and
          powerful. The new Alto has a 3-cylinder 660cc engine capable of
          producing up to 39 and 56 of torque. Moreover, Alto 2024 has a
          multipoint injection fuel distribution system. The engine is paired
          either a 5-speed manual transmission or AGS (Auto Gear Shift).
        </p>
      </div>

      <div className="flex items-center justify-center bg-white mt-16">
        <Link href="../checkOut">
        <button className="bg-gradient-to-r  from-red-700 to-black text-white font-extrabold py-7 px-12 rounded-full shadow-md hover:bg-gray-200 transition duration-300 transform hover:scale-105  mt-6 ml-12">
          Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
}
