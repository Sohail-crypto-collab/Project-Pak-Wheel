
import Link from "next/link";

export default function thankYou() {
  return (
    <div className="mt-20 mb-44 flex items-center flex-col gap-3 justify-center">
     

      <div className=" bg-gradient-to-r  from-red-700 to-black text-white py-32 px-32 shadow-lg rounded-lg overflow-hidden">
        {/* Decorative Border */}
        

        <div className=" mx-auto text-center  z-10">
          <h1 className="text-7xl font-extrabold mb-4 ">
            Thank You for Shopping!
          </h1>
          <p className="text-2xl mb-6 font-semibold">
            We appreciate your business and hope to see you again soon!
          </p>

          <Link href="../">
          <button className="bg-white text-2xl text-red-500 font-extrabold py-7 px-12 rounded-full shadow-md hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            Continue Shopping
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
