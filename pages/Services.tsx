import { useLanguage } from '../lib/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Bot, GraduationCap, Plug, HeadphonesIcon } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      title: t.services.service1.title,
      description: t.services.service1.description,
    },
    {
      icon: GraduationCap,
      title: t.services.service2.title,
      description: t.services.service2.description,
    },
    {
      icon: Plug,
      title: t.services.service3.title,
      description: t.services.service3.description,
    },
    {
      icon: HeadphonesIcon,
      title: t.services.service4.title,
      description: t.services.service4.description,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              {t.services.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.services.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Image Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative h-64 md:h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738817628138-b794ed944ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlcnZpY2VzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDQ2MDUwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Services"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
