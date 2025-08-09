import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';


export default function Home() {
  return (
    <main className="bg-gray-700 text-white w-full min-h-screen p-10">
           <Header/>
           < Banner/>
           <Hero/>
          
    </main>
  );
}
