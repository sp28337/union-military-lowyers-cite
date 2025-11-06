'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  // Обработка изменения полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Отправка формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus('');

    // Валидация обязательных полей
    if (!formData.name || !formData.phone || !formData.subject || !formData.message) {
      setMessageStatus('Пожалуйста, заполните все обязательные поля (отмечены *)');
      setMessageType('error');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
      'http://localhost:3001/api/contact', 
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }
    );

      if (response.ok) {
        setMessageStatus('✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        setMessageType('success');
        // Очищаем форму
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const error = await response.json();
        setMessageStatus(`❌ Ошибка: ${error.error || 'Не удалось отправить заявку'}`);
        setMessageType('error');
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setMessageStatus('❌ Ошибка подключения к серверу. Попробуйте позже.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
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
                    <p className="text-gray-600">sp28337@yandex.ru</p>
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
                <CardTitle className="text-2xl text-gray-900 font-medium">
                  Получить консультацию
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Имя: *
                      </label>
                      <Input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя" 
                        className="border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Телефон: *
                      </label>
                      <Input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (XXX) XXX-XX-XX" 
                        className="border-gray-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email:
                    </label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      className="border-gray-300"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Тема обращения: *
                    </label>
                    <Input 
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Кратко опишите суть вопроса" 
                      className="border-gray-300"
                      required
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Сообщение: *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Подробно опишите вашу ситуацию..." 
                      rows={5}
                      className="border-gray-300"
                      required
                    />
                  </div>


                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-951 hover:bg-green-955 text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Отправляется...' : 'Отправить заявку'}
                  </Button>

                  {/* Сообщение статуса */}
                  {messageStatus && (
                    <div className={`p-4 rounded-lg text-center text-sm font-medium ${
                      messageType === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {messageStatus}
                    </div>
                  )}

                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}