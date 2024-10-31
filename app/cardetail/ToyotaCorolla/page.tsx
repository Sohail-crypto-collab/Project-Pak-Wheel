import Link from "next/link";
import Image from "next/image";

export default function ToyotaCorolla() {
  return (
    <div className="bg-gray-200 h-auto mt-10">
      <div>
        <h1 className="text-2xl font-sans font-bold text-black ml-32">
          Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-1   shadow-2xl bg-white rounded w-4/5 h-auto  ml-32 mr-28 mt-4">
        {/* image */}

        <div className="flex justify-end mr-32">
          <Image
            className=" "
            src="/Corolla-banner.jpg"
            width={450}
            height={300}
            alt="corolla"
          />
        </div>

        {/* text */}

        <div className="flex  ml-10  space-x-1 absolute top-64">
          <p className="font-sans text-sm  mt-3 text-green-500">PKR</p>
          <div className="font-sans font-semibold  text-2xl text-green-500 ">
            <p>59.7 - 75.5 lacs</p>
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
            621 Reviews
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
          Toyota Corolla 2024 Pros & Cons
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
              <h6 className="ml-4">Availability of Spare Parts</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">Comfortable Ride Quality</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">User Friendly Infotainment System</h6>
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

        <div className=" absolute right-60  flex  ">
          <ul className="  ml-72 font-sans">
            <li className="flex -ml-64  mt-16 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4  -mb-2">
                12th Generation has been Launched Globally.
              </h6>
            </li>
            <li className="flex -ml-64 mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4 -mb-2 ">
                Same Generation from over 8 Years.
              </h6>
            </li>
            <li className="flex -ml-64 mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4 -mb-2">Poor Road Grip.</h6>
            </li>
            <li className="flex -ml-64 mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4">No Rear AC Vents.</h6>
            </li>
          </ul>
        </div>

        {/* GRID END */}
      </div>

      <div>
        <h1 className="text-2xl font-sans font-bold text-black ml-32 mt-6">
          Toyota Corolla 2024 Overview
        </h1>
      </div>

      {/* grid */}

      <div className=" mt-3 grid grid-cols-1  bg-white rounded-lg shadow-md p-6 ml-32 mr-32 ">
        <h1 className="font-sans text-lg font-bold text-red-700">
          Introduction:
        </h1>
        <p className="font-sans text-sm">
          Toyota Corolla 2024 is a series of compact sedans produced by the
          Japanese manufacturer Toyota. With its comfort, sleek design, and good
          performance, it has gained a huge following around the world.
          Introduced in 1966, it has become one of the best-selling cars
          worldwide.The latest generation available in Pakistan is the 11th
          generation, with the 12th generation being introduced globally but not
          yet available in Pakistan.
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700 mt-6">
          History:
        </h1>
        <p className="font-sans text-sm">
          Toyota came to Pakistan in 1989 as a joint venture company and
          launched the first Toyota Corolla in Pakistan in 1993. It has since
          remained Pakistan favorite car throughout the years. The 7th
          generation Corolla was the first to be locally assembled in Pakistan
          and instantly took over the market. It was produced in Pakistan until
          2002, the longest period for a locally assembled Toyota model in the
          world.In 1995, Toyota introduced the 8th generation Corolla with major
          upgrades, including a brand new four-cylinder 1.8-liter DOHC
          aluminum-body engine and a rounder exterior. The 9th generation
          Corolla was launched in 2000 with advanced security features such as
          anti-lock brakes, stability control, and traction control system, as
          well as a revolutionized sleek design. The 10th generation Corolla was
          introduced in Pakistan in 2009 with a wide variety of engine options
          ranging from 1.3 liters and 1.8 liters for the petrol variant and
          2.0-liter for the diesel variant. Its sales have grown exponentially
          since its introduction, with an increase of 82.51 percent seen in 2021
          alone.
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700 mt-6">
          Features and Specs:
        </h1>
        <p className="font-sans text-sm">
          Toyota Corolla key features include fuel efficiency, comfortable
          ride, and affordability. Its latest generation in Pakistan offers a
          variety of options, including the 1.6-liter Altis, the 1.8-liter Altis
          Grande, and the hybrid variant. The 1.6-liter Altis comes with a
          manual or CVT transmission, while the 1.8-liter Altis Grande comes
          with a CVT transmission. The hybrid variant offers a 1.8-liter engine
          with an electric motor, providing a combined output of 121 horsepower.
          Other notable features include a touchscreen infotainment system,
          keyless entry, push-button start, automatic climate control, and
          advanced safety features such as seven airbags, vehicle stability
          control, and hill-start assist.
        </p>
      </div>

      <div className="flex items-center justify-center bg-white mt-16">
        <Link href="../checkOut">
          <button className="bg-gradient-to-r  from-red-700 to-black  text-white font-extrabold py-7 px-12 rounded-full shadow-md hover:bg-gray-200 transition duration-300 transform hover:scale-105  mt-6 ml-12">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
}
