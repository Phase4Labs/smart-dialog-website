import { useLanguage } from '../lib/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle2, MessageSquare, Globe, Brain, TrendingUp, BarChart3 } from 'lucide-react';

export function SmartAssistant() {
  const { t } = useLanguage();

  const capabilities = [
    { icon: MessageSquare, text: t.smartAssistant.capabilities.capability1 },
    { icon: Globe, text: t.smartAssistant.capabilities.capability2 },
    { icon: Brain, text: t.smartAssistant.capabilities.capability3 },
    { icon: TrendingUp, text: t.smartAssistant.capabilities.capability4 },
    { icon: CheckCircle2, text: t.smartAssistant.capabilities.capability5 },
    { icon: BarChart3, text: t.smartAssistant.capabilities.capability6 },
  ];

  const benefits = [
    {
      title: t.smartAssistant.benefits.benefit1Title,
      description: t.smartAssistant.benefits.benefit1Description,
    },
    {
      title: t.smartAssistant.benefits.benefit2Title,
      description: t.smartAssistant.benefits.benefit2Description,
    },
    {
      title: t.smartAssistant.benefits.benefit3Title,
      description: t.smartAssistant.benefits.benefit3Description,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              {t.smartAssistant.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.smartAssistant.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGFzc2lzdGFudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNDYwNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Smart Assistant Technology"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                {t.smartAssistant.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">{t.smartAssistant.capabilities.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border"
                >
                  <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{capability.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">{t.smartAssistant.benefits.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6 space-y-4">
                  <h3>{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
