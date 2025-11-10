import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home,
  LucideUserSearch, 
  Cross,
  RussianRuble,
  UserX, 
  Zap, 
  Users, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Жилищные споры",
    description: "",
    items: ["Военная ипотека", "Сертификаты", "Служебное жилье", "Компенсации", "Субсидии"]
  },
  {
    icon: RussianRuble,
    title: "Оспаривание невыплаты денежного довольствия",
    description: "",
    items: ["Невыплата довольствия", "Задержка выплат", "Неправильный расчет", "Компенсации"]
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
    <section id="services" className="py-10 bg-white md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-16">
          <h2 className="font-normal text-3xl md:text-4xl text-gray-900 mb-4">
            Услуги
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="min-h-[220px] flex flex-col justify-center hover:shadow-lg transition-shadow duration-300 border-green-953 hover:border-green-954">
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
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}