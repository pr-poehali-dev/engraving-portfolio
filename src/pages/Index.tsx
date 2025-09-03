import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Brush",
      title: "Декоративная гравировка",
      description: "Художественные узоры и орнаменты на любых поверхностях",
      items: ["Металл", "Дерево", "Стекло", "Камень"]
    },
    {
      icon: "FileText",
      title: "Текстовая гравировка", 
      description: "Надписи, имена, даты, логотипы любой сложности",
      items: ["Награды", "Таблички", "Сувениры", "Украшения"]
    },
    {
      icon: "Trophy",
      title: "Наградная продукция",
      description: "Кубки, медали, дипломы с персональной гравировкой",
      items: ["Спорт", "Корпоратив", "Школа", "Конкурсы"]
    },
    {
      icon: "Palette",
      title: "Художественные работы",
      description: "Уникальные авторские композиции и сложные проекты",
      items: ["Портреты", "Пейзажи", "Логотипы", "Эмблемы"]
    }
  ];

  const advantages = [
    { number: "11+", text: "лет опыта в граверном деле" },
    { number: "5", text: "минут — минимальный срок выполнения" },
    { number: "100%", text: "принимаем заказы любой сложности" },
    { number: "24/7", text: "быстрая разработка макета" }
  ];

  const portfolio = [
    {
      title: "Наградная продукция",
      count: "120+ работ",
      image: "img/b3d7efad-b4aa-499a-bf74-c0b0f0a0bef1.jpg"
    },
    {
      title: "Декоративные изделия", 
      count: "80+ работ",
      image: "img/af732f9b-2d69-49c9-8521-8d3e8b706ddd.jpg"
    },
    {
      title: "Персональная гравировка",
      count: "200+ работ", 
      image: "img/b3d7efad-b4aa-499a-bf74-c0b0f0a0bef1.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gold-dark to-gold text-white py-4 px-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Brush" size={32} className="text-white" />
            <h1 className="text-2xl font-bold font-['Cormorant_Garamond']">Мастерская Гравировки</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gold-light transition-colors">Главная</a>
            <a href="#services" className="hover:text-gold-light transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-gold-light transition-colors">Портфолио</a>
            <a href="#contact" className="hover:text-gold-light transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Cormorant_Garamond'] text-gray-800">
            Граверное Искусство
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 font-['Montserrat'] max-w-3xl mx-auto">
            Превращаем обычные предметы в произведения искусства с помощью точной гравировки любой сложности
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gold-dark font-['Montserrat']">{advantage.number}</div>
                <div className="text-sm text-gray-600">{advantage.text}</div>
              </div>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-gold-dark to-gold hover:from-gold to-gold-light text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Заказать гравировку
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 font-['Cormorant_Garamond'] text-gray-800">
            Наши Услуги
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gold-light hover:border-gold transition-colors hover:shadow-lg group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-light to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-['Montserrat'] text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="border-gold text-gold-dark hover:bg-gold-light hover:text-white transition-colors">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 font-['Cormorant_Garamond'] text-gray-800">
            Портфолио Работ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold font-['Montserrat']">{item.title}</h4>
                      <p className="text-gold-light">{item.count}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gold text-gold-dark hover:bg-gold hover:text-white px-8 py-3 font-semibold rounded-full">
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 font-['Cormorant_Garamond'] text-gray-800">
            Процесс Работы
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Консультация", desc: "Обсуждаем детали заказа и выбираем подходящий материал" },
              { step: "02", title: "Макет", desc: "Создаем точный макет будущей гравировки за считанные минуты" },
              { step: "03", title: "Гравировка", desc: "Выполняем работу с высочайшей точностью и вниманием к деталям" },
              { step: "04", title: "Результат", desc: "Получаете готовое изделие в оговоренные сроки" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold-dark to-gold rounded-full flex items-center justify-center text-white text-2xl font-bold font-['Montserrat']">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold mb-3 font-['Montserrat'] text-gray-800">{process.title}</h4>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-gold-dark to-gold text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-8 font-['Cormorant_Garamond']">
            Готовы к Сотрудничеству?
          </h3>
          <p className="text-xl mb-8 font-['Montserrat'] opacity-90">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={20} />
              <span>+7 (XXX) XXX-XX-XX</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={20} />
              <span>info@engraving.ru</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>г. Москва, ул. Мастерская, 1</span>
            </div>
          </div>
          <Button className="bg-white text-gold-dark hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Связаться с нами
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Brush" size={24} className="text-gold" />
            <span className="text-xl font-bold font-['Cormorant_Garamond']">Мастерская Гравировки</span>
          </div>
          <p className="text-gray-400">© 2024 Все права защищены. Более 11 лет создаем произведения искусства.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;