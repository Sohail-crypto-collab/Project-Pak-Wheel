import Link from "next/link";

export default function checkOut() {
  return (
    <div className="  h-auto">
      <div className="flex justify-center">
        <h1 className="mt-14 font-sans text-black shadow-2xl  text-5xl font-bold text-center uppercase">
          enter your details
        </h1>
      </div>

      <div>
        <form className="mt-10 flex gap-5 justify-center items-center flex-col ">
          <input
            type="Name"
            className="shadow-2xl  w-2/5 p-2 border rounded"
            placeholder="Name"
          />

          <input
            type="Email"
            className="shadow-2xl  w-2/5 p-2 border rounded"
            placeholder="Email"
          />

          <input
            type="password"
            className=" shadow-2xl  w-2/5 p-2 border rounded"
            placeholder="Password"
          />

          <input
            type="City"
            className=" shadow-2xl  w-2/5 p-2 border rounded"
            placeholder="City"
          />

          <input
            type="Address"
            className=" shadow-2xl  w-2/5 p-2 border rounded"
            placeholder="Address"
          />

          <div className="flex items-center justify-center  mt-8 mb-32">
            <Link href="../thankYou">
              <button className="bg-gradient-to-r  from-red-700 to-black  text-white font-extrabold py-7 px-12 rounded-full shadow-md hover:bg-gray-200 transition duration-300 transform hover:scale-105  mt-6 ml-12">
                Make Payment
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
