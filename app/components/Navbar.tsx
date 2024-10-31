import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <nav className=" p-5 bg-gradient-to-t from-red-700 to-black  ">
      <div className="flex justify-end font-sans  bg-gray-900 gap-4 text-sm">
          <div className="absolute left-14 top-[1%]"> 
          <Image src="/mobile-phone-2641.png" alt="good" width={24} height={24} /></div>

          <a href="" className="absolute left-20 top-[1%] text-white">
            Downlaod App Via SMS
          </a>
          <a href="" className="absolute right-60 top-[0.5%] text-red-600">
            اردو
          </a>
          <a href="" className="absolute right-40 top-[0.5%] text-white">
           
            Sign Up
          </a>
          <a href="" className=" absolute right-24 top-[0.5%] text-white">
            Sign In
          </a>
        </div> 


         <div className="absolute left-14 mt-7 bg-transparent">
         <Image src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="good" width={160} height={100} />
        </div> 
        <div>
           
          <ul className="flex  justify-start items-center ml-52 mt-8  font-medium font-sans  text-white   ">
          <li>
          <Link href="/" className="hover:bg-white hover:text-red-500 px-6 py-4  transition duration-300">Used Cars</Link>            
          </li>
          <li>
          <Link href="/" className="hover:bg-white hover:text-red-500 px-6 py-4  transition duration-300"  >New Cars</Link>
          </li>
          <li>
          <Link href="/" className="hover:bg-white hover:text-red-500 px-5 py-4  transition duration-300" >Bikes</Link>
          </li>
          <li>
          <Link href="/" className="hover:bg-white hover:text-red-500 px-5 py-4  transition duration-300">Auto Store</Link>
            
          </li>
          <li>
          <Link href="/" className="hover:bg-white hover:text-red-500 px-5 py-4  transition duration-300">Videos</Link>
          </li>
          <li>
          <Link href="/"className="hover:bg-white hover:text-red-500 px-5 py-4  transition duration-300">Forums</Link>
          </li>
          <li>
          <Link href="/"className="hover:bg-white hover:text-red-500 px-5 py-4  transition duration-300">Blog</Link>
            
          </li>
          <li className="hover:bg-white hover:text-red-500 px-2 py-4  transition duration-300">   
          <Link href="/"className="px-4 py-4 ">More
          <Image className="-mt-9 -mb-2 ml-9  " src="https://wsa1.pakwheels.com/assets/new-tag-banner-c51aecfa51f92e82f4cfcaae2ace6f8b.svg" alt="good" width={40} height={20} /> 
          </Link>
          </li>
          
          <li className="ml-4">
            <button className="bg-red-900 hover:bg-red-600 text-white font-bold py-2 px-8 rounded space-y-2">Post an Ad</button>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
