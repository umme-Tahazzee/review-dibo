import Header from '@/Components/Header';
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'

export default function Home() {
  return (
    <main className="bg-gray-700 text-white w-full min-h-screen p-10">
          <Header/>
          < Banner/>
         <Hero/>
    </main>
  );
}
