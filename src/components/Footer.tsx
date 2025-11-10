import { 
  TelegramLogoSVG, 
  MaxLogoSVG, 
  VKLogoSVG, 
  LocationLogoSVG 
} from '@/components/ui/vectors';

export default function Footer() {
  return (
    <footer id="footer" className="bg-green-952 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="md:col-span-2">
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-8 justify-center text-md text-gray-100 md:grid-cols-4">
                <div className="flex items-center">
                  <TelegramLogoSVG />
                  <a href="https://t.me/SVJurist" className="hover:underline">
                    канал в Telegram
                  </a>
                </div>
                <div className="flex items-center">
                  <MaxLogoSVG />
                  <a href="https://max.ru/join/MykMI8H9N1NaK_fRDN7mUf1-exMeH2OcxnrFEdjdkE8" className="hover:underline">
                    чат в Max
                  </a>
                </div>
                <div className="flex items-center">
                  <VKLogoSVG/>
                  <a href="https://vk.com/svjurist" className="hover:underline">
                    группа Вконтакте
                  </a>
                </div>
                <div className="flex items-center">
                  <LocationLogoSVG />
                  <span>г. Нижний Новгород,<br/>ул. Примерная, д. 1</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <img 
              src="/assets/logo-white.png" 
              alt="Союз Военных Юристов" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <h3 className="text-xl font-medium">СОЮЗ ВОЕННЫХ ЮРИСТОВ</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}