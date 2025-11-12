'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// 📱 Функция для форматирования номера телефона
const formatPhoneNumber = (value: string): string => {
  // Оставляем только цифры
  const digits = value.replace(/\D/g, '');
  
  if (digits.length === 0) {
    return '+7 ';
  }
  
  // Берём максимум 11 цифр (7 + 10 цифр номера)
  const limitedDigits = digits.slice(0, 11);
  
  // Форматируем: +7 (XXX) XXX-XX-XX
  if (limitedDigits.length <= 1) {
    return '+7 ';
  } else if (limitedDigits.length <= 4) {
    return `+7 (${limitedDigits.slice(1)}`;
  } else if (limitedDigits.length <= 7) {
    return `+7 (${limitedDigits.slice(1, 4)}) ${limitedDigits.slice(4)}`;
  } else if (limitedDigits.length <= 9) {
    return `+7 (${limitedDigits.slice(1, 4)}) ${limitedDigits.slice(4, 7)}-${limitedDigits.slice(7)}`;
  } else {
    return `+7 (${limitedDigits.slice(1, 4)}) ${limitedDigits.slice(4, 7)}-${limitedDigits.slice(7, 9)}-${limitedDigits.slice(9, 11)}`;
  }
};

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
  const [errors, setErrors] = useState<FormErrors>({});

  // Валидация формы
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Проверка имени
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите Ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    // Проверка телефона (формат: +7 (XXX) XXX-XX-XX)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите номер телефона';
    } else if (!/^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
      newErrors.phone = 'Неверный формат. Используйте: +7 (XXX) XXX-XX-XX';
    }

    // Проверка email (если заполнен)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }

    // Проверка темы обращения
    if (!formData.subject.trim()) {
      newErrors.subject = 'Пожалуйста, укажите тему обращения';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Тема должна содержать минимум 5 символов';
    }

    // Проверка сообщения
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, опишите свою проблему';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработка изменения полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Специальная обработка для телефона - форматируем при вводе
    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        phone: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Очищаем ошибку для этого поля при изменении
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Отправка формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageStatus('');

    // Проверяем валидность формы
    if (!validateForm()) {
      setMessageStatus('Пожалуйста, исправьте ошибки в форме');
      setMessageType('error');
      return;
    }

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

      const response = await fetch(
        `${apiUrl}/api/contact`, 
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
        setErrors({});
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
            Получите бесплатную консультацию по вашему вопросу.
          </p>
        </div>

        <div className="lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-green-953">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 font-medium">
                  Получить консультацию
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Поле имени */}
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
                        className={`border-gray-300 ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    {/* Поле телефона */}
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
                        className={`border-gray-300 ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Поле email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email:
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.ru"
                      className={`border-gray-300 ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Поле темы обращения */}
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
                      className={`border-gray-300 ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  {/* Поле сообщения */}
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
                      className={`border-gray-300 ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Кнопка отправки */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-951 hover:bg-green-955 text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Отправляется...' : 'Отправить заявку'}
                  </Button>

                  {/* Сообщение статуса */}
                  {messageStatus && (
                    <div
                      className={`p-4 rounded-lg text-center text-sm font-medium ${
                        messageType === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
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

      <div className="flex flex-col mt-10 justify-center max-w-[1000px] m-auto sm:flex-row">
        <img className="m-auto rounded-xl max-w-56 md:max-w-40" src="/assets/telegram-qr.jpg" alt="QR код телеграм канала" />
        <img className="m-auto rounded-xl max-w-56 md:max-w-40" src="/assets/max-qr-small.png" alt="QR код max чата" />
      </div>
    </section>
  );
}
