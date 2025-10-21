import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Довольных клиентов"
  },
  {
    icon: Award,
    number: "5+",
    label: "Лет опыта"
  },
  {
    icon: CheckCircle,
    number: "95%",
    label: "Выигранных дел"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Поддержка клиентов"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              О Нас
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы — профессиональное объединение юристов, специализирующихся на защите прав 
              военнослужащих, членов их семей, призывников и мобилизованных граждан.
            </p>
            <p className="text-gray-600 mb-6">
              Наша команда обладает глубокими знаниями военного права и многолетним опытом 
              успешного решения сложных правовых вопросов. Мы понимаем специфику военной 
              службы и готовы защитить ваши интересы на всех уровнях.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-957 mr-3" />
                <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-957 mr-3" />
                <span className="text-gray-700">Конфиденциальность и профессионализм</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-957 mr-3" />
                <span className="text-gray-700">Работа на результат</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 border-green-953">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-950 rounded-full">
                        <IconComponent className="h-8 w-8 text-green-952" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}