import Header from '@/tempcomponents/Header';
import Hero from '@/tempcomponents/Hero';
import Banner from '@/tempcomponents/Banner';


export default function Home() {
  return (
    <main className="bg-gray-700 text-white w-full min-h-screen p-10">
           <Header/>
           < Banner/>
           <Hero/>
          
    </main>
  );
}
