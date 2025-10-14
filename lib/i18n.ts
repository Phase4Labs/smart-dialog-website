export type Language = 'en' | 'es' | 'pt';

export interface Translation {
  nav: {
    home: string;
    smartAssistant: string;
    services: string;
    contact: string;
    membersArea: string;
  };
  footer: {
    copyright: string;
    termsAndConditions: string;
    privacyPolicy: string;
  };
  home: {
    hero: {
      mainTitle: string;
      tagline: string;
      description: string;
      cta: string;
    };
    about: {
      title: string;
      description: string;
    };
    features: {
      title: string;
      feature1Title: string;
      feature1Description: string;
      feature2Title: string;
      feature2Description: string;
      feature3Title: string;
      feature3Description: string;
    };
  };
  smartAssistant: {
    hero: {
      title: string;
      subtitle: string;
    };
    description: string;
    capabilities: {
      title: string;
      capability1: string;
      capability2: string;
      capability3: string;
      capability4: string;
      capability5: string;
      capability6: string;
    };
    benefits: {
      title: string;
      benefit1Title: string;
      benefit1Description: string;
      benefit2Title: string;
      benefit2Description: string;
      benefit3Title: string;
      benefit3Description: string;
    };
  };
  services: {
    hero: {
      title: string;
      subtitle: string;
    };
    service1: {
      title: string;
      description: string;
    };
    service2: {
      title: string;
      description: string;
    };
    service3: {
      title: string;
      description: string;
    };
    service4: {
      title: string;
      description: string;
    };
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      successMessage: string;
    };
    info: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      smartAssistant: 'Smart Assistant',
      services: 'Services',
      contact: 'Contact Us',
      membersArea: "Members' Area",
    },
    footer: {
      copyright: '© 2025 SmartDialog.ai. All rights reserved.',
      termsAndConditions: 'Terms and Conditions',
      privacyPolicy: 'Privacy Policy',
    },
    home: {
      hero: {
        mainTitle: 'Smart Dialog',
        tagline: 'All Channels, One Voice.\nTotal Connection',
        description: 'From first inquiry to final offer, we connect buyers and sellers through every channel with clarity and ease.',
        cta: 'Get Started',
      },
      about: {
        title: 'About SmartDialog.ai',
        description: 'We are dedicated to transforming the way businesses interact with their customers through cutting-edge AI technology. Our smart assistants provide intelligent, natural, and efficient communication solutions.',
      },
      features: {
        title: 'Why Choose Us',
        feature1Title: 'AI-Powered Intelligence',
        feature1Description: 'Leverage advanced artificial intelligence to provide meaningful and context-aware conversations.',
        feature2Title: '24/7 Availability',
        feature2Description: 'Our smart assistants are always available to serve your customers, any time of day.',
        feature3Title: 'Seamless Integration',
        feature3Description: 'Easy integration with your existing systems and platforms for a smooth workflow.',
      },
    },
    smartAssistant: {
      hero: {
        title: 'Our Smart Assistant',
        subtitle: 'Intelligent conversational AI that understands and responds naturally',
      },
      description: 'Our Smart Assistant is powered by state-of-the-art AI technology, designed to understand context, maintain natural conversations, and provide accurate responses to customer inquiries. It learns and improves over time, becoming more effective with each interaction.',
      capabilities: {
        title: 'Key Capabilities',
        capability1: 'Natural Language Understanding',
        capability2: 'Multi-language Support',
        capability3: 'Context-Aware Responses',
        capability4: 'Continuous Learning',
        capability5: 'Custom Training',
        capability6: 'Analytics & Insights',
      },
      benefits: {
        title: 'Benefits',
        benefit1Title: 'Improved Customer Satisfaction',
        benefit1Description: 'Provide instant, accurate responses that delight your customers.',
        benefit2Title: 'Reduced Operational Costs',
        benefit2Description: 'Automate routine inquiries and free up your team for complex tasks.',
        benefit3Title: 'Scalable Solution',
        benefit3Description: 'Handle thousands of conversations simultaneously without compromising quality.',
      },
    },
    services: {
      hero: {
        title: 'Our Services',
        subtitle: 'Comprehensive AI solutions tailored to your business needs',
      },
      service1: {
        title: 'AI Assistant Implementation',
        description: 'End-to-end implementation of intelligent conversational assistants customized for your business requirements.',
      },
      service2: {
        title: 'Custom AI Training',
        description: 'Train our AI on your specific business data, processes, and terminology to ensure accurate and relevant responses.',
      },
      service3: {
        title: 'Integration Services',
        description: 'Seamlessly integrate our smart assistants with your existing CRM, helpdesk, and business systems.',
      },
      service4: {
        title: 'Consulting & Support',
        description: 'Expert guidance on AI strategy, implementation best practices, and ongoing technical support.',
      },
    },
    contact: {
      hero: {
        title: 'Get in Touch',
        subtitle: 'Have questions? We\'d love to hear from you.',
      },
      form: {
        name: 'Your Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Message',
        submit: 'Send Message',
        successMessage: 'Thank you for your message! We\'ll get back to you soon.',
      },
      info: {
        title: 'Contact Information',
        description: 'Reach out to us to learn how SmartDialog.ai can transform your customer interactions.',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      smartAssistant: 'Asistente Inteligente',
      services: 'Servicios',
      contact: 'Contacto',
      membersArea: 'Área de Miembros',
    },
    footer: {
      copyright: '© 2025 SmartDialog.ai. Todos los derechos reservados.',
      termsAndConditions: 'Términos y Condiciones',
      privacyPolicy: 'Política de Privacidad',
    },
    home: {
      hero: {
        mainTitle: 'Smart Dialog',
        tagline: 'Todos los Canales, Una Voz.\nConexión Total',
        description: 'Desde la primera consulta hasta la oferta final, conectamos compradores y vendedores a través de cada canal con claridad y facilidad.',
        cta: 'Comenzar',
      },
      about: {
        title: 'Acerca de SmartDialog.ai',
        description: 'Nos dedicamos a transformar la forma en que las empresas interactúan con sus clientes a través de tecnología de IA de vanguardia. Nuestros asistentes inteligentes proporcionan soluciones de comunicación inteligentes, naturales y eficientes.',
      },
      features: {
        title: 'Por Qué Elegirnos',
        feature1Title: 'Inteligencia Impulsada por IA',
        feature1Description: 'Aproveche la inteligencia artificial avanzada para proporcionar conversaciones significativas y conscientes del contexto.',
        feature2Title: 'Disponibilidad 24/7',
        feature2Description: 'Nuestros asistentes inteligentes están siempre disponibles para atender a sus clientes, en cualquier momento del día.',
        feature3Title: 'Integración Perfecta',
        feature3Description: 'Fácil integración con sus sistemas y plataformas existentes para un flujo de trabajo fluido.',
      },
    },
    smartAssistant: {
      hero: {
        title: 'Nuestro Asistente Inteligente',
        subtitle: 'IA conversacional inteligente que comprende y responde naturalmente',
      },
      description: 'Nuestro Asistente Inteligente está impulsado por tecnología de IA de última generación, diseñado para comprender el contexto, mantener conversaciones naturales y proporcionar respuestas precisas a las consultas de los clientes. Aprende y mejora con el tiempo, volviéndose más efectivo con cada interacción.',
      capabilities: {
        title: 'Capacidades Clave',
        capability1: 'Comprensión del Lenguaje Natural',
        capability2: 'Soporte Multilingüe',
        capability3: 'Respuestas Conscientes del Contexto',
        capability4: 'Aprendizaje Continuo',
        capability5: 'Entrenamiento Personalizado',
        capability6: 'Análisis e Información',
      },
      benefits: {
        title: 'Beneficios',
        benefit1Title: 'Mejora de la Satisfacción del Cliente',
        benefit1Description: 'Proporcione respuestas instantáneas y precisas que deleiten a sus clientes.',
        benefit2Title: 'Reducción de Costos Operativos',
        benefit2Description: 'Automatice consultas rutinarias y libere a su equipo para tareas complejas.',
        benefit3Title: 'Solución Escalable',
        benefit3Description: 'Maneje miles de conversaciones simultáneamente sin comprometer la calidad.',
      },
    },
    services: {
      hero: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones de IA integrales adaptadas a las necesidades de su negocio',
      },
      service1: {
        title: 'Implementación de Asistente IA',
        description: 'Implementación completa de asistentes conversacionales inteligentes personalizados para los requisitos de su negocio.',
      },
      service2: {
        title: 'Entrenamiento Personalizado de IA',
        description: 'Entrene nuestra IA con sus datos comerciales específicos, procesos y terminología para garantizar respuestas precisas y relevantes.',
      },
      service3: {
        title: 'Servicios de Integración',
        description: 'Integre sin problemas nuestros asistentes inteligentes con su CRM, sistema de soporte y sistemas comerciales existentes.',
      },
      service4: {
        title: 'Consultoría y Soporte',
        description: 'Orientación experta sobre estrategia de IA, mejores prácticas de implementación y soporte técnico continuo.',
      },
    },
    contact: {
      hero: {
        title: 'Póngase en Contacto',
        subtitle: '¿Tiene preguntas? Nos encantaría saber de usted.',
      },
      form: {
        name: 'Su Nombre',
        email: 'Correo Electrónico',
        company: 'Nombre de la Empresa',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        successMessage: '¡Gracias por su mensaje! Nos pondremos en contacto pronto.',
      },
      info: {
        title: 'Información de Contacto',
        description: 'Contáctenos para conocer cómo SmartDialog.ai puede transformar sus interacciones con los clientes.',
      },
    },
  },
  pt: {
    nav: {
      home: 'Início',
      smartAssistant: 'Assistente Inteligente',
      services: 'Serviços',
      contact: 'Contato',
      membersArea: 'Área de Membros',
    },
    footer: {
      copyright: '© 2025 SmartDialog.ai. Todos os direitos reservados.',
      termsAndConditions: 'Termos e Condições',
      privacyPolicy: 'Política de Privacidade',
    },
    home: {
      hero: {
        mainTitle: 'Smart Dialog',
        tagline: 'Todos os Canais, Uma Voz.\nConexão Total',
        description: 'Desde a primeira consulta até a oferta final, conectamos compradores e vendedores através de cada canal com clareza e facilidade.',
        cta: 'Começar',
      },
      about: {
        title: 'Sobre SmartDialog.ai',
        description: 'Dedicamo-nos a transformar a forma como as empresas interagem com seus clientes através de tecnologia de IA de ponta. Nossos assistentes inteligentes fornecem soluções de comunicação inteligentes, naturais e eficientes.',
      },
      features: {
        title: 'Por Que Nos Escolher',
        feature1Title: 'Inteligência Alimentada por IA',
        feature1Description: 'Aproveite a inteligência artificial avançada para fornecer conversas significativas e conscientes do contexto.',
        feature2Title: 'Disponibilidade 24/7',
        feature2Description: 'Nossos assistentes inteligentes estão sempre disponíveis para atender seus clientes, a qualquer hora do dia.',
        feature3Title: 'Integração Perfeita',
        feature3Description: 'Fácil integração com seus sistemas e plataformas existentes para um fluxo de trabalho suave.',
      },
    },
    smartAssistant: {
      hero: {
        title: 'Nosso Assistente Inteligente',
        subtitle: 'IA conversacional inteligente que compreende e responde naturalmente',
      },
      description: 'Nosso Assistente Inteligente é alimentado por tecnologia de IA de última geração, projetado para compreender o contexto, manter conversas naturais e fornecer respostas precisas às consultas dos clientes. Ele aprende e melhora com o tempo, tornando-se mais eficaz a cada interação.',
      capabilities: {
        title: 'Capacidades Principais',
        capability1: 'Compreensão da Linguagem Natural',
        capability2: 'Suporte Multilíngue',
        capability3: 'Respostas Conscientes do Contexto',
        capability4: 'Aprendizagem Contínua',
        capability5: 'Treinamento Personalizado',
        capability6: 'Análise e Insights',
      },
      benefits: {
        title: 'Benefícios',
        benefit1Title: 'Melhoria da Satisfação do Cliente',
        benefit1Description: 'Forneça respostas instantâneas e precisas que encantem seus clientes.',
        benefit2Title: 'Redução de Custos Operacionais',
        benefit2Description: 'Automatize consultas rotineiras e libere sua equipe para tarefas complexas.',
        benefit3Title: 'Solução Escalável',
        benefit3Description: 'Gerencie milhares de conversas simultaneamente sem comprometer a qualidade.',
      },
    },
    services: {
      hero: {
        title: 'Nossos Serviços',
        subtitle: 'Soluções de IA abrangentes adaptadas às necessidades do seu negócio',
      },
      service1: {
        title: 'Implementação de Assistente IA',
        description: 'Implementação completa de assistentes conversacionais inteligentes personalizados para os requisitos do seu negócio.',
      },
      service2: {
        title: 'Treinamento Personalizado de IA',
        description: 'Treine nossa IA com seus dados comerciais específicos, processos e terminologia para garantir respostas precisas e relevantes.',
      },
      service3: {
        title: 'Serviços de Integração',
        description: 'Integre perfeitamente nossos assistentes inteligentes com seu CRM, sistema de suporte e sistemas comerciais existentes.',
      },
      service4: {
        title: 'Consultoria e Suporte',
        description: 'Orientação especializada sobre estratégia de IA, melhores práticas de implementação e suporte técnico contínuo.',
      },
    },
    contact: {
      hero: {
        title: 'Entre em Contato',
        subtitle: 'Tem perguntas? Adoraríamos ouvir de você.',
      },
      form: {
        name: 'Seu Nome',
        email: 'Endereço de Email',
        company: 'Nome da Empresa',
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
        successMessage: 'Obrigado pela sua mensagem! Entraremos em contato em breve.',
      },
      info: {
        title: 'Informações de Contato',
        description: 'Entre em contato conosco para saber como o SmartDialog.ai pode transformar suas interações com os clientes.',
      },
    },
  },
};
