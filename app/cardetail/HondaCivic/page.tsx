import Link from "next/link";
import Image from "next/image";

export default function HondaCivic() {
  return (
    <div className="bg-gray-200 h-auto mt-10">
      <div>
        <h1 className="text-2xl font-sans font-bold text-black ml-32">
          Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-1   shadow-2xl bg-white rounded w-4/5 h-auto  ml-32 mr-28 mt-4">
        {/* image */}

        <div className="flex justify-end mr-32">
          <Image
            className=" "
            src="/honda_civic_banner.jpg"
            width={450}
            height={300}
            alt="corolla"
          />
        </div>

        {/* text */}

        <div className="flex  ml-10  space-x-1 absolute top-64">
          <p className="font-sans text-sm  mt-3 text-green-500">PKR</p>
          <div className="font-sans font-semibold  text-2xl text-green-500 ">
            <p>86.6 - 99 lacs</p>
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
            359 Reviews
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
        <h1 className="text-2xl font-sans font-bold text-black uppercase ml-32 mt-10">
          Honda Civic 2024 Pros & Cons
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
              <h6 className="ml-4">Turbo Engine Options Across all Variants</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">
                Build Quality is improved from previous Generations
              </h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">Longest Car in C-Segment</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">Fuel Efficient</h6>
            </li>
          </ul>
        </div>

        {/* cons */}

        <div
          className="absolute right-72 mt-2
              "
        >
          <Image
            className="ml-4"
            src="/thumbs-down-14925 (1).png"
            alt="good"
            width={40}
            height={40}
          />
          <h3 className="ml-20 -mt-9 text-2xl font-bold font-sans text-gray-600 ">
            What we do not like
          </h3>
        </div>

        <div className=" absolute right-48 mt-3  flex ">
          <ul className="font-sans ">
            <li className="flex   mt-16 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4  -mb-2">Overpriced.</h6>
            </li>
            <li className="flex  mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4 -mb-2 ">
                Relatively Subdued Styling Compared to Civic X.
              </h6>
            </li>
            <li className="flex  mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4 -mb-2">
                Only 2 Airbags, even in top of the line RS Variant.
              </h6>
            </li>
          </ul>
        </div>

        {/* GRID END */}
      </div>

      <div>
        <h1 className="text-2xl font-sans font-bold text-black uppercase ml-32 mt-6">
          Honda Ciciv 2024 Overview
        </h1>
      </div>

      {/* grid */}

      <div className=" mt-3 grid grid-cols-1  bg-white rounded-lg shadow-md p-6 ml-32 mr-32 ">
        <p className="font-sans text-sm">
          The Honda Civic 2024 is a popular car model in Pakistan, manufactured
          by the local automobile manufacturer and Honda subsidiary Atlas Honda.
          The car has gone through several generations since its global launch
          in 1972, with each iteration featuring various upgrades and
          improvements. The second-generation Honda Civic was launched in 1979
          and had more interior space and better engine power than its
          predecessor. The third-generation was launched globally in 1983 and
          won the “1983 Car of the Year Japan Award” due to its better build
          quality and comfortable interior. The fifth-generation Honda Civic,
          introduced in 1991, was Honda most fuel-efficient model sold at the
          time and won the Japan Car of the Year award. The 6th generation
          Honda Civic, commonly referred to as “EK”, was the first Honda to be
          locally assembled in Pakistan. It came with different suspension and
          engine options and was available in different body styles and engine
          configurations internationally but only the sedan was available in the
          Pakistani market. The 8th generation Honda Civic, launched globally in
          September 2005 but came to Pakistan in 2006, was known as “Reborn” in
          the Pakistani market and had an impressive 1.8-litre 140bhp engine.
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700 mt-6">
          Honda Civic Exterior:
        </h1>
        <p className="font-sans text-sm mt-3">
          The all-new Honda Civic 2024 showcases an attractive design language,
          featuring a modern front grille that embodies the essence of a new
          generation style. At the front, the car is equipped with daytime
          running lights that have an auto-off timer for convenience. The
          Standard and Oriel variants are equipped with Halogen projector
          headlamps, while the RS variant boasts stylish LED headlamps.
          Furthermore, the Civic RS offers additional features such as auto
          headlights, auto headlight adjustment, and auto high beam
          functionality. Moreover, the RS variant stands out with its front fog
          lights and a panoramic sunroof, providing an enhanced driving
          experience that is not available in the base variants. Other
          noteworthy standard features across all the variants include a
          one-touch lane winker, side mirrors with integrated turn signals,
          lens-type tail lamps, electrically adjustable door mirrors, and remote
          retractable mirrors.
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700 mt-6">
          Honda City Interior:
        </h1>
        <p className="font-sans text-sm mt-3">
          The Honda Civic 2024 offers a range of comfortable and convenient
          features to enhance the driving experience. The Standard and Oriel
          variants come with an electric power steering wrapped in urethane,
          while the RS variant boasts a luxurious leather-wrapped steering
          wheel. All variants are equipped with a steering wheel that offers
          tilt and telescopic adjustment and convenient steering switches for
          easy control. Behind the steering wheel, you will find a 7-inch TFT
          multi-information instrument display that provides essential vehicle
          information. The seats in the Civic are wrapped in high-grade fabric
          and offer height adjustment, ensuring optimal comfort for all
          occupants. The front and rear armrests come with cup holders,
          providing convenient storage for beverages. Additionally, the Civic
          offers power windows, power door locks, and interior lighting for
          added convenience. Other notable features include a front USB port,
          trunk lid lining, self-opening trunk, and trunk hinge cover. In terms
          of entertainment, the Standard and Oriel variants are equipped with a
          7-inch MP5 touch screen and four speakers, while the RS variant boasts
          a larger 9-inch Android-based entertainment system with navigation.
          The RS variant entertainment system supports a front camera, a
          dynamic rear camera, and a webcam for enhanced visibility and
          convenience. Finally, all variants of the Civic feature dual-zone
          automatic air conditioning with rear ventilation, ensuring a
          comfortable cabin environment for all passengers.
        </p>

        <h1 className="font-sans text-lg font-bold mt-6 text-red-700">
          Civic 2024 Safety:
        </h1>
        <p className="font-sans text-sm mt-3">
          The Honda Civic 2024 prioritizes safety with its comprehensive range
          of advanced features. It is equipped with an Anti-lock Braking System
          (ABS) and Electronic Brakeforce Distribution (EBD) to ensure stable
          and controlled braking. The Vehicle Stability Assist with Traction
          Control enhances vehicle stability, especially in challenging road
          conditions. Additionally, the Hill Start Assist prevents the vehicle
          from rolling backward on inclines. In case of emergency braking, the
          Civic features an Emergency Stop Signal that activates the hazard
          lights to alert other drivers. The Driver Attention Monitor helps
          maintain focus by providing alerts if signs of driver fatigue are
          detected. The Civic also includes the convenience of Auto-door Lock by
          Speed, automatically locking the doors when the vehicle reaches a
          certain speed. The RS variant offers additional safety features under
          the Honda Sensing suite, such as the Collision Mitigation Braking
          System, Adaptive Cruise Control, Lane Keep Assist System, Road
          Departure Mitigation System, Auto High Beam, Lead Car Departure
          Notification System, and Walk Away Auto-Locking. These features
          enhance collision avoidance, assist in maintaining a safe distance,
          and provide lane-keeping assistance. The Civic is equipped with SRS
          Airbags (2 Airbags) for occupant protection, and a Driver Seatbelt
          Reminder ensures that occupants are safely restrained. The Smart
          Buzzer, Child Lock, Safety Alarm, and Immobilizer further contribute
          to the overall safety of the vehicle.
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
