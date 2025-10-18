import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src="/assets/logo.png" 
              alt="Союз Военных Юристов" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">СОЮЗ ВОЕННЫХ ЮРИСТОВ</h1>
              <p className="text-sm text-green-600">Защита прав военнослужащих</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Контакты
            </a>
            <Button className="bg-green-600 hover:bg-green-700">
              Консультация
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
                Услуги
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                О нас
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Контакты
              </a>
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Консультация
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}