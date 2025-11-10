import { Button } from '@/components/ui/button';
import e from 'cors';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-green-100 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src="/assets/logo-original.png" 
              alt="Союз Военных Юристов" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-medium text-gray-900">СОЮЗ ВОЕННЫХ ЮРИСТОВ</h1>
              <p className="text-sm text-green-950 -mt-[5px]">Защита ваших прав - наш приоритет</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-green-950 transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-950 transition-colors">
              О нас
            </a>
            <a href="#footer" className="text-gray-700 hover:text-green-950 transition-colors">
              Контакты
            </a>
            <a href="#contact" >
              <Button className="bg-green-951 hover:bg-green-955">
                Консультация
              </Button>
            </a>
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
              <a 
                href="#services" 
                className="text-gray-700 hover:text-green-950 transition-colors"
                onClick={(e) => setIsMenuOpen(!isMenuOpen)}
              >
                Услуги
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-green-950 transition-colors" 
                onClick={(e) => setIsMenuOpen(!isMenuOpen)}
              >
                О нас
              </a>
              <a 
                href="#footer" 
                className="text-gray-700 hover:text-green-950 transition-colors"
                onClick={(e) => setIsMenuOpen(!isMenuOpen)}
              >
                Контакты
              </a>
              <a href="#contact">
                <Button 
                  className="bg-green-951 hover:bg-green-955 w-full" 
                  onClick={(e) => setIsMenuOpen(!isMenuOpen)}
                >
                  Консультация
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}