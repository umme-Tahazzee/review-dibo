
import Image from 'next/image';

const Header = () => {
return (
  <div className="flex items-center gap-3 md:gap-4 font-serif">
    {/* logo  */}
    <div className="cursor-pointer p-2 rounded-full bg-white/10
      hover:bg-white/20 transition-all duration-300 flex items-center
      justify-center shadow-md hover:shadow-lg
      w-10 h-10 md:w-12 md:h-12">
      <Image
        src="/img/logo.png"
        width={40}
        height={40}
        alt="Logo"
        className="animate-pulse"
      />
    </div>

    <h1 className="text-xl md:text-3xl font-bold mt-1 md:mt-2">
      Review Dibo
    </h1>
  </div>
)

}

export default Header