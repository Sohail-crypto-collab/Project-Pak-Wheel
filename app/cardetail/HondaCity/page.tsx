import Link from "next/link";
import Image from "next/image";

export default function HondaCity() {
  return (
    <div className="bg-gray-200 h-auto mt-10">
      <div>
        <h1 className="text-2xl font-sans font-bold text-black uppercase ml-32">
          Honda City 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-1   shadow-2xl bg-white rounded w-4/5 h-auto  ml-32 mr-28 mt-4">
        {/* image */}

        <div className="flex justify-end mr-32">
        
          <Image
            className=" "
            src="/Honda_City_banner.jpg"
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
          Honda City 2024 Pros & Cons
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

          <h3 className="ml-20 -mt-8 text-2xl font-bold font-sans text-gray-600 ">
            What we like
          </h3>
        </div>

        <div className="-ml-2">
          <ul className="  flex flex-col -ml-96  mt-20 font-sans ">
            <li className="flex -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">Availability of Parts</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">After-sales Service</h6>
            </li>
            <li className="flex mt-2 -ml-20">
              <Image
                src="/check-mark-10126.png"
                alt="tick"
                width={24}
                height={24}
              />
              <h6 className="ml-4">Good Resale Value</h6>
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

        <div className=" absolute right-64 mr-2 mt-3  flex ">
          <ul className="font-sans ">
            <li className="flex   mt-16 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4  -mb-2">Much Expensive Compared to Yaris.</h6>
            </li>
            <li className="flex  mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4 -mb-2 ">Poor Build Quality.</h6>
            </li>
            <li className="flex  mt-4 ">
              <Image src="/x-10366.png" alt="cross" width={20} height={20} />
              <h6 className="ml-4 -mb-2">
                Slightly Expensive Parts over Competitors.
              </h6>
            </li>
          </ul>
        </div>

        {/* GRID END */}
      </div>

      <div>
        <h1 className="text-2xl font-sans font-bold text-black uppercase ml-32 mt-6">
          Honda City 2024 Overview
        </h1>
      </div>

      {/* grid */}

      <div className=" mt-3 grid grid-cols-1  bg-white rounded-lg shadow-md p-6 ml-32 mr-32 ">
        <h1 className="font-sans text-lg font-bold text-red-700">
          History of Honda City in Pakistan:
        </h1>
        <p className="font-sans text-sm">
          The Honda City 2024 is a subcompact sedan that has been manufactured
          by the Japanese automobile manufacturer Honda since 1981. Initially,
          it was a 3-door hatchback/2-door convertible launched only in selected
          markets. The second-generation Honda City was launched in 1986, but
          the City nameplate was discontinued in 1994 and replaced by another
          model.The Honda City was reintroduced in 1996 as a series of
          subcompact four-door sedans. This third-generation City was built on
          Honda Global Small Car platform in which the location of the fuel
          tank is under the front seats rather than rear seats. The third
          generation of Honda City gained its name among the consumers as it hit
          back the sales of Suzuki Margalla in its early days. The company also
          introduced a facelift version of the third-gen Honda City in 2000 and
          continued its production for another three years before introducing
          the next generation in Pakistan.The fourth-generation Honda City was
          launched globally in 2002 and later received a facelift in 2005. Honda
          City was reintroduced in the Pakistani market when Honda introduced
          the fourth generation of the popular compact sedan in 2003. The level
          of fuel economy was brought to another level with the introduction of
          the twin-spark i-DSI engine-based City. It became immensely popular in
          the local market and is still considered as one of the most
          fuel-efficient cars in its league. Owing to its popularity, the
          company also launched a facelift version in 2005 which continued till
          2008. Some major changes were made in the exterior of the car while
          slight changes in the interior were also observed. It is worth
          mentioning here that the steermatic version of the third generation
          did not go too well in the local auto market.The fifth generation of
          Honda City Pakistan was launched back in 2009, and since then, we have
          seen many facelift versions of the car. The company is yet to give up
          on this particular model, and it has passed a decade of production.
          The popularity of Honda’s compact sedan still prevails owing to its
          fuel economy and smooth drive, although there are still no airbags at
          any trim level. It is available in 1.3L and 1.5L variants in the
          country. Since 2009, it has received plenty of cosmetic changes,
          including the new design of the front radiator grille, headlights, and
          tail lights.The sixth generation City debuted in the international
          market in 2014 and was replaced by the next seventh generation last
          year, in 2020, but arrived in Pakistan in 2021.
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700 mt-6">
          Honda City Exterior:
        </h1>
        <p className="font-sans text-sm">
          The new Honda City has a bold design. Its front is embellished with a
          honeycomb grille which gives it a striking appearance. Premium
          dual-barrel halogen headlamps and integrated LED daytime running
          lights (DRLs) adorn the front of all five variants. The 1.5 Aspire
          variants come with front fog lights while it is an option in the rest
          of the variants. A micropole antenna is available in the 1.2 LS
          variants and a shark fin antenna is available in the rest of the
          variants. Advanced wrap-around bulb rear lights are a standard in all
          the variants.
        </p>

        <h1 className="font-sans text-lg font-bold text-red-700 mt-6">
          Honda City Interior:
        </h1>
        <p className="font-sans text-sm">
          The Honda City is a spacious sedan that comes with a comfortable
          interior. Available with the push-button start technology in the
          Aspire variants, the new Honda City has a hi-grade fabric wrapped
          steering wheel which can be adjusted in tilt as well as telescopic
          adjustment. The seats, armrests, and door linings materials also vary
          in different variants. In the 1.2 LS variants and 1.5 CVT variant, the
          interior is wrapped in fabric while the 1.5 Aspire variants have the
          interior wrapped in hi-grade fabric. ECON mode is only available in
          the 1.5L CVT and 1.5L Aspire CVT variant while dust and pollen air
          filter, steering audio switches, one-touch lane indicator, digital
          clock, and outside temp display are available in all five variants.
          The seats are comfortable and the whole interior comes in ivory color.
          The driver’s seat height can be adjusted in all the variants and
          impact mitigating headrests are also available in all the variants.
          The Honda City 1.2 LS variants and the 1.5 CVT variant have a 7-inch
          capacitive touchscreen which has integrated MP%, BlueTooth, mic, rear
          camera ready, radio, mirror link for android as well as USB and AUX
          cable support. On the other hand, the 1.5 Aspire variants have a
          9-inch android based capacitive touchscreen including navigation,
          built-in sim slot, Wi-fi, and smartphone easy connect along with other
          features. The 1.2 LS and 1.5 CVT variants have 2 speakers in the front
          while the Aspire variants have 4 speakers with 2 in the front and 2 in
          the rear area. Keyless entry with keyless trunk opening facility is
          available in the LS variants while the smart entry feature is
          available in the Aspire variants. The Aspire variants also have an
          auto air conditioner, rear ventilation, and electric plus
          auto-retractable door mirrors as standard features. On the other hand,
          cruise control is available in all the 1.5 Aspire and 1.5 CVT variants
          as standard. Anti-lock braking system (ABS) and electronic brake
          distribution (EBD) are standard features in all five variants.
        </p>

        <h1 className="font-sans text-lg font-bold mt-6 text-red-700">
          Honda City Engine:
        </h1>
        <p className="font-sans text-sm">
          All five variants of the new Honda City come with the water-cooled,
          4-stroke, SOHC i-VTEC, 16-valves, four-cylinder engine. The 1.2 LS
          variants have a 1199cc engine which generates a power of 88/6000
          hp/rpm at a torque of 110/4800 Nm/rpm. On the other hand, the 1.5 CVT
          and 1.5 Aspire variants have a 1497cc engine which generates a power
          of 118/6600 hp/rpm at a max torque of 145/4600 Nm/rpm.
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
