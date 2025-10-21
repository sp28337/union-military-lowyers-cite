import { Button } from '@/components/ui/button';
import { Shield, Scale, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-957 to-green-950 pt-[10rem] pb-[5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
             <img 
              src="/assets/logo-original.png" 
              alt="Союз Военных Юристов" 
              className="h-40 w-40 object-contain"
            />
            {/* <div className="relative">
              <Shield className="h-24 w-24 text-green-600" />
              <Scale className="h-12 w-12 text-green-700 absolute top-6 left-6" />
            </div> */}
          </div>
          
          <h1 className="font-normal text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            СОЮЗ ВОЕННЫХ
            <span className="block">ЮРИСТОВ</span>
          </h1>
          
          <p className="text-xl text-green-951 mb-8 max-w-3xl mx-auto">
            Профессиональная защита прав военнослужащих, членов их семей, 
            призывников и мобилизованных. Опыт, знания и результат.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-956 hover:bg-green-955 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
            {/* <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
              Наши услуги
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}