import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-957 to-green-950 p-6 text-center">
      <div className="space-y-6 max-w-md">
        <div className="space-y-3">
          <h1 className="text-8xl font-bold text-green-952">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Страница не найдена</h2>
          <p className="text-green-952">Страница, которую вы ищете, не существует или, возможно, была перемещена.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <a href="/">На главную</a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Назад
          </Button>
        </div>
      </div>
    </div>
  );
}
