import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home,
  LucideUserSearch, 
  Cross,
  RussianRuble,
  Umbrella, 
  UserX, 
  MapPin, 
  Zap, 
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
    icon: RussianRuble,
    title: "Оспаривание невыплаты денежного довольствия",
    description: "",
    items: ["Невыплата довольствия", "Задержка выплат", "Неправильный расчет", "Компенсации"]
  },
  {
    icon: Umbrella,
    title: "Оспаривание непредоставления отдыха(отпуска)",
    description: "",
    items: ["Непредоставление отпуска", "Нарушение графика", "Компенсация за отпуск"]
  },
  {
    icon: UserX,
    title: "Увольнение с военной службы",
    description: "",
    items: ["Незаконное увольнение", "Нарушение процедуры", "Восстановление на службе"]
  },
  {
    icon: Zap,
    title: "Обжалование действий/бездействия командования",
    description: "",
    items: ["Незаконный перевод", "Нарушение условий", "Компенсации при переводе"]
  },
  {
    icon: Cross,
    title: "Обжалование ВВК и получение выплат за ранение",
    description: "",
    items: ["Незаконные взыскания", "Нарушение процедуры", "Снятие взысканий"]
  },
  {
    icon: Users,
    title: "Защита прав членов семьи военнослужащих, лишение/признание права на выплаты в связи с гибелью военнослужащего",
    description: "",
    items: ["Социальные гарантии", "Жилищные права", "Медицинское обеспечение"]
  },
  {
    icon: Shield,
    title: "Защита прав призывников и мобилизованных",
    description: "",
    items: ["Права призывников", "Мобилизация", "Социальные гарантии", "Льготы"]
  },
  {
    icon: LucideUserSearch,
    title: "Помощь в поисках пропавших военнослужащих",
    description: "",
    items: ["Права призывников", "Мобилизация", "Социальные гарантии", "Льготы"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-normal text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-green-953 hover:border-green-954">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-950 rounded-full">
                      <IconComponent className="h-8 w-8 text-green-952" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-medium text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  {/* <ul className="text-xs text-gray-500 space-y-1">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-green-950 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul> */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}