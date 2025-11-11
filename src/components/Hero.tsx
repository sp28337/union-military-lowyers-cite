import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-957 to-white pt-[10rem] pb-[5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
             <img 
              src="/assets/logo-original.png" 
              alt="Союз Военных Юристов" 
              className="h-40 w-40 object-contain"
            />
          </div>
          
          <h1 className="font-normal text-4xl md:text-6xl text-gray-800 mb-6">
            СОЮЗ ВОЕННЫХ
            <span className="block">ЮРИСТОВ</span>
          </h1>
          
          <p className="text-xl text-green-951 mb-8 max-w-3xl mx-auto">
            Квалифицированная юридическая помощь призывникам, военнослужащим и членам их семей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" >
              <Button size="lg" className="bg-green-956 hover:bg-green-955 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}