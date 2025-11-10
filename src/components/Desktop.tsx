import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { X, FileText, Image, Folder, Download } from 'lucide-react';

interface DesktopItem {
  id: string;
  name: string;
  type: 'document' | 'image' | 'folder';
  icon: any;
  content?: string;
  imageUrl?: string;
  items?: DesktopItem[];
}

const desktopItems: DesktopItem[] = [
  {
    id: '1',
    name: 'Жилищные споры.pdf',
    type: 'document',
    icon: FileText,
    content: `ЖИЛИЩНЫЕ СПОРЫ

Наши услуги по жилищным спорам включают:

• Военная ипотека
  - Консультации по получению военной ипотеки
  - Помощь в оформлении документов
  - Решение спорных вопросов с банками

• Сертификаты на жилье
  - Получение жилищных сертификатов
  - Обжалование отказов в предоставлении
  - Консультации по использованию сертификатов

• Служебное жилье
  - Предоставление служебного жилья
  - Споры о выселении
  - Приватизация служебного жилья

• Компенсации и субсидии
  - Получение компенсаций за наем жилья
  - Жилищные субсидии
  - Обжалование размера компенсаций`
  },
  {
    id: '2',
    name: 'Денежное довольствие.pdf',
    type: 'document',
    icon: FileText,
    content: `ДЕНЕЖНОЕ ДОВОЛЬСТВИЕ

Защита прав по денежному довольствию:

• Невыплата денежного довольствия
  - Обжалование задержек выплат
  - Взыскание задолженности
  - Начисление процентов за просрочку

• Неправильный расчет довольствия
  - Проверка правильности начислений
  - Доначисление положенных выплат
  - Перерасчет за прошлые периоды

• Премии и надбавки
  - Получение положенных премий
  - Надбавки за особые условия службы
  - Компенсационные выплаты`
  },
  {
    id: '3',
    name: 'Отпуска и отдых.pdf',
    type: 'document',
    icon: FileText,
    content: `ОТПУСКА И ОТДЫХ

Защита права на отдых военнослужащих:

• Основной отпуск
  - Предоставление ежегодного отпуска
  - Перенос отпуска по служебной необходимости
  - Компенсация за неиспользованный отпуск

• Дополнительные отпуска
  - Отпуск по учебе
  - Отпуск по семейным обстоятельствам
  - Творческий отпуск

• Санаторно-курортное лечение
  - Получение путевок в санатории
  - Компенсация стоимости лечения
  - Обжалование отказов в предоставлении`
  },
  {
    id: '4',
    name: 'Увольнение с службы.pdf',
    type: 'document',
    icon: FileText,
    content: `УВОЛЬНЕНИЕ С ВОЕННОЙ СЛУЖБЫ

Защита при увольнении с военной службы:

• Незаконное увольнение
  - Обжалование приказов об увольнении
  - Восстановление на военной службе
  - Взыскание компенсаций

• Нарушение процедуры увольнения
  - Проверка соблюдения процедур
  - Обжалование в вышестоящих инстанциях
  - Судебная защита

• Социальные гарантии при увольнении
  - Получение выходного пособия
  - Сохранение льгот и компенсаций
  - Трудоустройство после службы`
  },
  {
    id: '5',
    name: 'Логотип организации.jpg',
    type: 'image',
    icon: Image,
    imageUrl: '/assets/logo.jpg'
  },
  {
    id: '6',
    name: 'Документы',
    type: 'folder',
    icon: Folder,
    items: [
      {
        id: '6-1',
        name: 'Устав организации.pdf',
        type: 'document',
        icon: FileText,
        content: 'УСТАВ СОЮЗА ВОЕННЫХ ЮРИСТОВ\n\nОсновные положения устава организации...'
      },
      {
        id: '6-2',
        name: 'Лицензии.pdf',
        type: 'document',
        icon: FileText,
        content: 'ЛИЦЕНЗИИ И СЕРТИФИКАТЫ\n\nДокументы, подтверждающие право на оказание юридических услуг...'
      }
    ]
  },
  {
    id: '7',
    name: 'Переводы по службе.pdf',
    type: 'document',
    icon: FileText,
    content: `ПЕРЕВОДЫ ПО СЛУЖБЕ

Помощь при переводах по службе:

• Незаконный перевод
  - Обжалование приказов о переводе
  - Проверка законности оснований
  - Судебная защита прав

• Компенсации при переводе
  - Получение подъемных
  - Компенсация расходов на переезд
  - Обеспечение жильем на новом месте

• Социальные гарантии семьи
  - Трудоустройство супруга
  - Перевод детей в учебные заведения
  - Медицинское обеспечение`
  },
  {
    id: '8',
    name: 'Дисциплинарные взыскания.pdf',
    type: 'document',
    icon: FileText,
    content: `ДИСЦИПЛИНАРНЫЕ ВЗЫСКАНИЯ

Защита от незаконных дисциплинарных взысканий:

• Обжалование взысканий
  - Проверка законности наложения
  - Обжалование в вышестоящих инстанциях
  - Судебное обжалование

• Снятие взысканий
  - Досрочное снятие взысканий
  - Реабилитация военнослужащего
  - Восстановление в правах

• Процедурные нарушения
  - Нарушение сроков наложения
  - Отсутствие объяснений
  - Превышение полномочий`
  }
];

export default function Desktop() {
  const [openItem, setOpenItem] = useState<DesktopItem | null>(null);
  const [currentFolder, setCurrentFolder] = useState<DesktopItem | null>(null);

  const handleDoubleClick = (item: DesktopItem) => {
    if (item.type === 'folder') {
      setCurrentFolder(item);
    } else {
      setOpenItem(item);
    }
  };

  const handleClose = () => {
    setOpenItem(null);
  };

  const handleBackToDesktop = () => {
    setCurrentFolder(null);
  };

  const currentItems = currentFolder ? currentFolder.items || [] : desktopItems;

  return (
    <section id="desktop" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Документы и материалы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Двойной клик для открытия документов и изображений
          </p>
        </div>

        {/* Desktop Area */}
        <Card className="min-h-[600px] p-8 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
          {/* Folder Navigation */}
          {currentFolder && (
            <div className="mb-6">
              <button
                onClick={handleBackToDesktop}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                ← Назад к рабочему столу
              </button>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                Папка: {currentFolder.name}
              </h3>
            </div>
          )}

          {/* Desktop Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {currentItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-white/50 cursor-pointer transition-all duration-200 hover:shadow-md"
                  onDoubleClick={() => handleDoubleClick(item)}
                >
                  <div className="p-3 bg-white rounded-lg shadow-sm mb-2">
                    <IconComponent 
                      className={`h-8 w-8 ${
                        item.type === 'document' ? 'text-red-500' :
                        item.type === 'image' ? 'text-blue-500' :
                        'text-yellow-500'
                      }`} 
                    />
                  </div>
                  <span className="text-sm text-center text-gray-700 font-medium break-words">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Modal for opened items */}
        {openItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {openItem.name}
                </h3>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download className="h-4 w-4 text-gray-500" />
                  </button>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {openItem.type === 'document' && (
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                      {openItem.content}
                    </pre>
                  </div>
                )}
                {openItem.type === 'image' && (
                  <div className="flex justify-center">
                    <img
                      src={openItem.imageUrl}
                      alt={openItem.name}
                      className="max-w-full max-h-[60vh] object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}