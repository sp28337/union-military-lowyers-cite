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
            <h2 className="text-center text-3xl md:text-4xl font-normal text-gray-900 mb-6">
              О Нас
            </h2>
            <p className="text-gray-600 mb-6">
              Союз военных юристов — команда специалистов в области военного права.
            </p>
            <p className="text-gray-600 mb-6">
              Мы применяем нормы военного законодательства на практике, защищая права призывников, военнослужащих и членов их семей.
            </p>
            <p className="text-gray-600 mb-6">
              Каждое решение основано на опыте и точной юридической оценке ситуации без лишних обещаний и навязывания услуг.
            </p>
            <p className="text-gray-600 mb-6">
              Если ваши права нарушены, вы столкнулись с несправедливостью или нужна консультация по вопросам призыва, службы или защиты семьи — мы найдём решение.
            </p>
            <p className="text-gray-600 mb-6">
              Мы гарантируем профессиональный и ответственный подход, обеспечивая надёжную защиту Ваших прав.
            </p>
          </div>

          <div className="gap-6 h-full">
            <Card className="text-center p-6 border-green-953 h-full">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                </div>
                <div className="text-3xl font-normal text-gray-900 mb-2">
                </div>
                <div className="text-gray-600 text-sm">
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}