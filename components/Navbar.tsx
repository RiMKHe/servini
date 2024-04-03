import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import  CallButton from "./CallButton";



const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
         
          src='/finallogo.png'
          alt='logo'
          width={250}
          height={18}
          className='object-contain'
        />
      </Link>

      <CallButton phoneNumber={21655907988} 
             
      />
     
      
    </nav>
    




  </header>
);

export default NavBar;


