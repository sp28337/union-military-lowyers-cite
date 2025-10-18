import { Shield, Scale, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Shield className="h-8 w-8 text-green-400" />
                <Scale className="h-4 w-4 text-green-300 absolute top-2 left-2" />
              </div>
              <div>
                <h3 className="text-xl font-bold">СОЮЗ ВОЕННЫХ ЮРИСТОВ</h3>
                <p className="text-green-400 text-sm">Защита прав военнослужащих</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Профессиональная юридическая помощь военнослужащим, членам их семей, 
              призывникам и мобилизованным гражданам.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                <span>info@military-lawyers.ru</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-green-400" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Жилищные споры</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Денежное довольствие</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Отпуска и отдых</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Увольнение с службы</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Дисциплинарные взыскания</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Права семей</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-green-400 transition-colors">О нас</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Услуги</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Пользовательское соглашение</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Союз Военных Юристов. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}