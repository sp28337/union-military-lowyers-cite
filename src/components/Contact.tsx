import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получите профессиональную консультацию по вашему вопросу. 
            Мы готовы помочь защитить ваши права.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-green-953">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-950 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-green-952" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-953">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-950 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-green-952" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@military-lawyers.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-953">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-950 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-green-952" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес</h3>
                    <p className="text-gray-600">г. Нижний Новгород, ул. Примерная, д. 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-953">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-950 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-green-952" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                    <p className="text-gray-600">Сб-Вс: по договоренности</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-green-953">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Получить консультацию
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <Input placeholder="Ваше имя" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input placeholder="+7 (XXX) XXX-XX-XX" className="border-gray-300" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input placeholder="your@email.com" className="border-gray-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема обращения *
                  </label>
                  <Input placeholder="Кратко опишите суть вопроса" className="border-gray-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <Textarea 
                    placeholder="Подробно опишите вашу ситуацию..." 
                    rows={5}
                    className="border-gray-300"
                  />
                </div>

                <Button className="w-full bg-green-951 hover:bg-green-955 text-lg py-3">
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}