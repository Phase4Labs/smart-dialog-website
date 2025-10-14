import { useLanguage } from '../lib/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Brain, Clock, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t.home.features.feature1Title,
      description: t.home.features.feature1Description,
    },
    {
      icon: Clock,
      title: t.home.features.feature2Title,
      description: t.home.features.feature2Description,
    },
    {
      icon: Zap,
      title: t.home.features.feature3Title,
      description: t.home.features.feature3Description,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-primary">
                {t.home.hero.mainTitle}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {t.home.hero.tagline}
              </p>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
                {t.home.hero.description}
              </p>
              <Button
                size="lg"
                onClick={() => onNavigate('contact')}
              >
                {t.home.hero.cta}
              </Button>
            </div>
            <div className="relative h-64 md:h-96">
              <ImageWithFallback
                src="public/001.png"
                alt="AI Technology"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2>{t.home.about.title}</h2>
            <p className="text-lg text-muted-foreground">
              {t.home.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">{t.home.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3>{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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
