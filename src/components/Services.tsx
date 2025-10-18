import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  DollarSign, 
  Umbrella, 
  UserX, 
  MapPin, 
  FileX, 
  Users, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Жилищные споры",
    description: "Военная ипотека, сертификаты, служебное жилье, компенсации, субсидии и иные жилищные вопросы",
    items: ["Военная ипотека", "Сертификаты", "Служебное жилье", "Компенсации", "Субсидии"]
  },
  {
    icon: DollarSign,
    title: "Денежное довольствие",
    description: "Оспаривание невыплаты денежного довольствия и связанных выплат",
    items: ["Невыплата довольствия", "Задержка выплат", "Неправильный расчет", "Компенсации"]
  },
  {
    icon: Umbrella,
    title: "Отпуска и отдых",
    description: "Оспаривание непредоставления отдыха и отпусков военнослужащим",
    items: ["Непредоставление отпуска", "Нарушение графика", "Компенсация за отпуск"]
  },
  {
    icon: UserX,
    title: "Увольнение с службы",
    description: "Оспаривание незаконного увольнения с военной службы",
    items: ["Незаконное увольнение", "Нарушение процедуры", "Восстановление на службе"]
  },
  {
    icon: MapPin,
    title: "Переводы по службе",
    description: "Оспаривание незаконного перевода к новому месту службы",
    items: ["Незаконный перевод", "Нарушение условий", "Компенсации при переводе"]
  },
  {
    icon: FileX,
    title: "Дисциплинарные взыскания",
    description: "Оспаривание незаконных дисциплинарных взысканий",
    items: ["Незаконные взыскания", "Нарушение процедуры", "Снятие взысканий"]
  },
  {
    icon: Users,
    title: "Права семей военнослужащих",
    description: "Защита прав членов семьи военнослужащих",
    items: ["Социальные гарантии", "Жилищные права", "Медицинское обеспечение"]
  },
  {
    icon: Shield,
    title: "Призывники и мобилизованные",
    description: "Защита прав призывников и мобилизованных граждан",
    items: ["Права призывников", "Мобилизация", "Социальные гарантии", "Льготы"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексная юридическая помощь военнослужащим и их семьям по всем вопросам военного права
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-green-100 hover:border-green-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}