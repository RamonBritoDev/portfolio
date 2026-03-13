import React, { createContext, useState, useContext } from 'react';

const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      education: 'Educação',
      experience: 'Experiência',
      chat: 'Vamos Conversar',
      talks: 'Palestras',
      awards: 'Premiações'
    },
    hero: {
      title: 'Ramon Brito',
      role: 'Desenvolvedor focado em Inteligência Artificial & Automação',
      description: 'Estudante de Engenharia de Software e desenvolvedor com foco na criação de produtos de IA, integrações com WhatsApp e FastAPI. Experiência na criação de soluções automatizadas, com conhecimentos adicionais em cibersegurança.',
      buttons: {
        projects: 'Ver Projetos',
        chat: 'Fale Comigo'
      }
    },
    projects: {
      title: 'Projetos em Destaque',
      description: 'Conheça alguns dos meus principais projetos focados em Criação de Soluções com IA e Automação.',
      viewProject: 'Ver Projeto'
    },
    chat: {
      title: 'Vamos Conversar! 👋',
      subtitle: 'Escolha um tópico ou me faça uma pergunta',
      inputPlaceholder: 'Digite sua mensagem aqui...',
      welcome: 'Oi! Que bom ter você por aqui! 😊\nComo posso ajudar hoje?',
      options: {
        about: '👨‍💻 Quem é você?',
        experience: '💼 Conte sobre sua experiência',
        projects: '🚀 Quais são seus projetos?',
        skills: '💡 Quais suas habilidades?',
        education: '📚 Qual sua formação?',
        contact: '📱 Como posso te contatar?'
      },
      responses: {
        about: '🎯 Prazer em conhecer você! Sou Ramon Brito, 24 anos, estudante de Engenharia de Software e apaixonado por tecnologia e Inteligência Artificial:\n\n• Desenvolvedor focado em produtos baseados em IA\n• Criador de bots inteligentes para WhatsApp (FastAPI, Qwen, APIs)\n• Especialista em integrações com CRM e automações\n• Com background em análise de infraestrutura e cibersegurança\n\nQuer saber mais sobre alguma área específica?',
        experience: '💼 Que legal seu interesse! Aqui está minha experiência profissional focada em tecnologia e IA:\n\n• Estagiário de Dados e IA - Colmeia Tech (Atual)\n  - Criação de bots de atendimento via WhatsApp usando FastAPI\n  - Integrações com CRM estruturadas com Inteligência Artificial\n  - Extração e análise de dados para tomada de decisões\n\n• Estagiário de TI - CRECI-CE\n  - Manutenção e otimização de infraestrutura tecnológica\n\n• Projetos Independentes e Pesquisa\n  - Implantação de LLMs locais e integração de fluxos inteligentes\n  - Desenvolvimento de projetos voltados à inovação (IoT, Chatbots)\n\nQuer saber mais detalhes sobre alguma dessas experiências?',
        projects: '🚀 Ótima pergunta! Aqui estão meus principais projetos no mundo da IA e automação:\n\n• IA Local para Atendimento Automático\n  - Integração nativa com WhatsApp via Waha API\n  - Motor baseado em LLMs locais para privacidade do cliente\n  - Arquitetura robusta com Docker\n\n• Portfolio com Assistente Virtual Integrado\n  - Assistente inteligente em tempo real\n  - React.js e integração avançada com GenAI\n\n• Extratores de Dados e Integrações CRM\n  - Fluxos automáticos utilizando Python e FastAPI\n  - Scripts para ganho de produtividade corporativa\n\nGostaria de conhecer mais sobre algum desses projetos?',
        skills: '💻 Que bom que perguntou! Minhas ferramentas e conhecimentos principais estão focados em escalabilidade e IA:\n\n• Inteligência Artificial e Automação\n  - Integração com LLMs (Gemini, Claude, Qwen local)\n  - Criação de arquiteturas RAG e fluxos de atendimento (WhatsApp)\n\n• Tecnologias Web e Backend\n  - Python (FastAPI, Flask) e Node.js\n  - React.js e interfaces dinâmicas\n  - Integrações REST \n\n• Infraestrutura e DevOps\n  - Docker, Git, Linux estruturado\n  - Banco de dados relacional e não relacional\n\n• Outros conhecimentos\n  - Boas práticas de Segurança (background em Cibersegurança)\n  - Java e C++\n\nQuer saber mais sobre alguma dessas tecnologias?',
        education: '📚 Que bom seu interesse! Aqui está minha base acadêmica:\n\n• Graduação em Engenharia de Software\n  - Centro Universitário Ateneu\n  - Estudando (2024-2027)\n\n• Ensino Médio Técnico\n  - EEEP Juarez Távora\n  - Concluído em 2021\n\n• Outras atuações\n  - Pesquisas autônomas e contínuas sobre aplicações práticas de LLMs\n  - Atuação passada como Diretor de Educação na LaSEC (Cibersegurança)\n\nGostaria de saber mais sobre alguma área específica?',
        contact: '📱 Fico feliz com seu interesse! Aqui estão as melhores formas de conversar comigo sobre projetos de IA e Automação:\n\n• Telefone/WhatsApp\n  - (85) 99253-9800\n\n• Email\n  - ramonbritodev@gmail.com\n\n• LinkedIn\n  - linkedin.com/in/ramon-brito-439975279\n\nFicarei muito feliz em conversar sobre novos projetos de IA, bots para sua empresa ou integrações incríveis! 😊',
        default: 'Hmm, não entendi muito bem. 🤔\nQue tal me perguntar sobre:\n• Minha experiência profissional\n• Projetos que desenvolvi\n• Habilidades técnicas\n• Formação acadêmica\n• Como entrar em contato\n\nOu escolha uma das opções abaixo! 👇'
      }
    },
    omniachain: {
      subtitle: 'O motor definitivo para agentes de Inteligência Artificial.',
      description: 'Framework Python assíncrono para orquestração de IAs multimodais com integração nativa ao Model Context Protocol (MCP) e segurança militar.',
      highlights: {
        blocking: {
          title: 'Zero Blocking',
          desc: 'Todo o core foi construído sobre asyncio. Permite que o agente consulte vetores, pesquise na web e chame APIs simultaneamente.'
        },
        mcp: {
          title: 'Suporte Nativo MCP',
          desc: 'Integração pioneira com o Model Context Protocol. Consuma servidores MCP ou transforme ferramentas em servidores em 10 linhas.'
        },
        security: {
          title: 'Segurança Nível Militar',
          desc: 'Sistema de permissões atrelado a Fingerprints PGP. Garante que ferramentas críticas só rodem com a assinatura correta.'
        },
        multimodal: {
          title: 'Multimodalidade Verdadeira',
          desc: 'Ingere e entende dinamicamente PDFs, imagens, vídeos, planilhas CSV e áudios diretamente no contexto.'
        },
        orchestration: {
          title: 'Orquestração Avançada',
          desc: 'Suporte a ReAct, Supervisor e Planner estruturados em grafos, com memórias vetoriais no PostgreSQL (pgvector).'
        }
      },
      stack: '🛠️ Stack Tecnológico',
      links: {
        github: 'Ver repositório no GitHub',
        site: 'Site Oficial',
        pypi: 'Ver no PyPI'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      education: 'Education',
      experience: 'Experience',
      chat: "Let's Talk",
      talks: 'Talks',
      awards: 'Awards'
    },
    hero: {
      title: 'Ramon Brito',
      role: 'Developer focused on Artificial Intelligence & Automation',
      description: 'Software Engineering student and developer focused on creating AI products, WhatsApp integrations, and FastAPI. Experienced in creating automated solutions, with additional background in cybersecurity.',
      buttons: {
        projects: 'View Projects',
        chat: 'Chat with Me'
      }
    },
    projects: {
      title: 'Featured Projects',
      description: 'Explore some of my main projects focused on building AI and Automation Solutions.',
      viewProject: 'View Project'
    },
    chat: {
      title: "Let's Chat! 👋",
      subtitle: 'Choose a topic or ask me anything',
      inputPlaceholder: 'Type your message here...',
      welcome: "Hi! Great to have you here! 😊\nHow can I help you today?",
      options: {
        about: '👨‍💻 Who are you?',
        experience: '💼 Tell me about your experience',
        projects: '🚀 What are your projects?',
        skills: '💡 What are your skills?',
        education: '📚 What\'s your education?',
        contact: '📱 How can I contact you?'
      },
      responses: {
        about: "🎯 Nice to meet you! I'm Ramon Brito, 24 years old, Software Engineering student and passionate about technology and Artificial Intelligence:\n\n• Developer focused on AI-based products\n• Creator of intelligent WhatsApp bots (FastAPI, Qwen, APIs)\n• Specialist in CRM integrations and automations\n• With additional background in infrastructure and cybersecurity\n\nWould you like to know more about any specific area?",
        experience: "💼 Great interest! Here's my professional experience focused on tech and AI:\n\n• Data and AI Intern - Colmeia Tech (Present)\n  - Creation of WhatsApp customer service bots using FastAPI\n  - CRM integrations structured with Artificial Intelligence\n  - Data extraction and analysis for decision making\n\n• IT Intern - CRECI-CE\n  - Technology infrastructure maintenance and optimization\n\n• Independent Projects and Research\n  - Deployment of local LLMs and integration of smart workflows\n  - Development of innovation-driven projects (IoT, Chatbots)\n\nWould you like to know more details about any of these experiences?",
        projects: "🚀 Great question! Here are my main projects in the AI and automation world:\n\n• Local AI for Automated Support\n  - Native WhatsApp integration via Waha API\n  - Engine based on local LLMs for client privacy\n  - Robust architecture using Docker\n\n• Portfolio with Integrated Virtual Assistant\n  - Real-time intelligent bot assistant\n  - React.js and advanced GenAI integration\n\n• Data Extractors and CRM Integrations\n  - Automatic workflows using Python and FastAPI\n  - Scripts for corporate productivity gains\n\nWould you like to learn more about any of these projects?",
        skills: "💻 I'm glad you asked! My main tools and knowledge focus on scalability and AI:\n\n• Artificial Intelligence and Automation\n  - Integration with LLMs (Gemini, Claude, local Qwen)\n  - RAG architectures and automated messaging flows (WhatsApp)\n\n• Web and Backend Technologies\n  - Python (FastAPI, Flask) and Node.js\n  - React.js and dynamic interfaces\n  - REST integrations\n\n• Infrastructure and DevOps\n  - Docker, Git, structured Linux environments\n  - Relational and non-relational databases\n\n• Additional Knowledge\n  - Good Security practices (Cybersecurity background)\n  - Java and C++\n\nWould you like to know more about any of these technologies?",
        education: "📚 Thanks for asking! Here's my academic foundation:\n\n• Software Engineering Degree\n  - Centro Universitário Ateneu\n  - Studying (2024-2027)\n\n• Technical High School\n  - EEEP Juarez Távora\n  - Completed in 2021\n\n• Additional Engagements\n  - Independent and continuous research on LLM practical applications\n  - Past role as Education Director at LaSEC (Cybersecurity)\n\nWould you like to know more about any specific area?",
        contact: "📱 I'm happy you're interested! Here are the best ways to reach me regarding AI and Automation projects:\n\n• Phone/WhatsApp\n  - +55 (85) 99253-9800\n\n• Email\n  - ramonbritodev@gmail.com\n\n• LinkedIn\n  - linkedin.com/in/ramon-brito-439975279\n\nI'll be very happy to discuss new AI projects, bots for your business, or amazing integrations! 😊",
        default: "Hmm, I didn't quite get that. 🤔\nHow about asking me about:\n• My professional experience\n• Projects I've developed\n• Technical skills\n• Academic background\n• How to get in touch\n\nOr choose one of the options below! 👇"
      }
    },
    omniachain: {
      subtitle: 'The ultimate engine for Artificial Intelligence agents.',
      description: 'Asynchronous Python framework for multimodal AI orchestration with native Model Context Protocol (MCP) integration and military-grade security.',
      highlights: {
        blocking: {
          title: 'Zero Blocking',
          desc: 'The entire core is built on asyncio. Allows agents to query vector databases, search the web, and call APIs simultaneously.'
        },
        mcp: {
          title: 'Native MCP Support',
          desc: 'Pioneering integration with the Model Context Protocol. Consume MCP servers or turn tools into servers in under 10 lines.'
        },
        security: {
          title: 'Military-Grade Security',
          desc: 'Permission system tied to PGP Fingerprints. Ensures critical tools only run with the correct cryptographic signature.'
        },
        multimodal: {
          title: 'True Multimodality',
          desc: 'Dynamically ingests and understands PDFs, images, videos, CSVs, and audio directly within the request context.'
        },
        orchestration: {
          title: 'Advanced Orchestration',
          desc: 'Native support for ReAct, Supervisor, and Planner architectures in execution graphs with pgvector memory.'
        }
      },
      stack: '🛠️ Tech Stack',
      links: {
        github: 'View on GitHub',
        site: 'Official Site',
        pypi: 'View on PyPI'
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      education: 'Educación',
      experience: 'Experiencia',
      chat: 'Hablemos',
      talks: 'Charlas',
      awards: 'Premios'
    },
    hero: {
      title: 'Ramon Brito',
      role: 'Desarrollador enfocado en Inteligencia Artificial y Automatización',
      description: 'Estudiante de Ingeniería de Software y desarrollador enfocado en la creación de productos de IA, integraciones con WhatsApp y FastAPI. Experiencia en la creación de soluciones automatizadas, con conocimientos adicionales en ciberseguridad.',
      buttons: {
        projects: 'Ver Proyectos',
        chat: 'Habla Conmigo'
      }
    },
    projects: {
      title: 'Proyectos Destacados',
      description: 'Conoce algunos de mis principales proyectos enfocados en la Creación de Soluciones con IA y Automatización.',
      viewProject: 'Ver Projeto'
    },
    chat: {
      title: '¡Hablemos! 👋',
      subtitle: 'Elige un tema o hazme una pregunta',
      inputPlaceholder: 'Escribe tu mensaje aquí...',
      welcome: '¡Hola! ¡Me alegro de tenerte aquí! 😊\n¿Cómo puedo ayudarte hoy?',
      options: {
        about: '👨‍💻 ¿Quién eres?',
        experience: '💼 Cuéntame sobre tu experiencia',
        projects: '🚀 ¿Cuáles son tus proyectos?',
        skills: '💡 ¿Cuáles son tus habilidades?',
        education: '📚 ¿Cuál es tu formación?',
        contact: '📱 ¿Cómo puedo contactarte?'
      },
      responses: {
        about: '🎯 ¡Encantado de conocerte! Soy Ramon Brito, 24 años, estudiante de Ingeniería de Software y apasionado por la tecnología y la Inteligencia Artificial:\n\n• Desarrollador enfocado en productos basados en IA\n• Creador de bots inteligentes para WhatsApp (FastAPI, Qwen, APIs)\n• Especialista en integraciones con CRM y automatizaciones\n• Con conocimientos adicionales en infraestructura y ciberseguridad\n\n¿Te gustaría saber más sobre algún área específica?',
        experience: '💼 ¡Qué bueno tu interés! Aquí está mi experiencia profesional enfocada en tecnología e IA:\n\n• Pasante de Datos e IA - Colmeia Tech (Presente)\n  - Creación de bots de atención vía WhatsApp usando FastAPI\n  - Integraciones con CRM estructuradas con Inteligencia Artificial\n  - Extracción y análisis de datos para la toma de decisiones\n\n• Pasante de TI - CRECI-CE\n  - Mantenimiento y optimización de infraestructura tecnológica\n\n• Proyectos Independientes e Investigación\n  - Implementación de LLMs locales e integración de flujos inteligentes\n  - Desarrollo de proyectos orientados a la innovación (IoT, Chatbots)\n\n¿Te gustaría saber más detalles sobre alguna de estas experiencias?',
        projects: '🚀 ¡Excelente pregunta! Aquí están mis principales proyectos en el mundo de la IA y automatización:\n\n• IA Local para Atención Automática\n  - Integración nativa con WhatsApp vía Waha API\n  - Motor basado en LLMs locales para la privacidad del cliente\n  - Arquitectura robusta usando Docker\n\n• Portfolio con Asistente Virtual Integrado\n  - Asistente inteligente en tiempo real\n  - React.js e integración avanzada de GenAI\n\n• Extractores de Datos e Integraciones CRM\n  - Flujos automáticos utilizando Python y FastAPI\n  - Scripts para mejorar la productividad corporativa\n\n¿Te gustaría conocer más sobre alguno de estos projetos?',
        skills: '💻 ¡Me alegro que preguntes! Mis herramientas y conocimientos principales se enfocan en escalabilidad e IA:\n\n• Inteligencia Artificial y Automatización\n  - Integración con LLMs (Gemini, Claude, Qwen local)\n  - Creación de arquitecturas RAG y flujos de atención (WhatsApp)\n\n• Tecnologías Web y Backend\n  - Python (FastAPI, Flask) y Node.js\n  - React.js e interfaces dinámicas\n  - Integraciones REST\n\n• Infraestructura y DevOps\n  - Docker, Git, entornos Linux estructurados\n  - Base de datos relacional y no relacional\n\n• Conocimientos adicionales\n  - Buenas prácticas de Seguridad (conocimientos de Ciberseguridad)\n  - Java y C++\n\n¿Te gustaría saber más sobre alguna de estas tecnologías?',
        education: '📚 ¡Gracias por preguntar! Aquí está mi formación académica:\n\n• Grado en Ingeniería de Software\n  - Centro Universitário Ateneu\n  - Estudiando (2024-2027)\n\n• Escuela Secundaria Técnica\n  - EEEP Juarez Távora\n  - Completado en 2021\n\n• Actividades Adicionales\n  - Invesigación independiente sobre aplicaciones prácticas de LLMs\n  - Rol anterior como Director de Educación en LaSEC (Ciberseguridad)\n\n¿Te gustaría saber más sobre algún área específica?',
        contact: '📱 ¡Me alegro que estés interesado! Aquí están las mejores formas de hablar conmigo sobre proyectos de IA y Automatización:\n\n• Teléfono/WhatsApp\n  - +55 (85) 99253-9800\n\n• Email\n  - ramonbritodev@gmail.com\n\n• LinkedIn\n  - linkedin.com/in/ramon-brito-439975279\n\n¡Estaré encantado de hablar sobre nuevos proyectos de IA, bots para tu negocio o integraciones! 😊',
        default: 'Hmm, no entendí muy bien. 🤔\n¿Qué tal si me preguntas sobre:\n• Mi experiencia profesional\n• Proyectos que he desarrollado\n• Habilidades técnicas\n• Formación académica\n• Cómo contactarme\n\n¡O elige una de las opciones abajo! 👇'
      }
    },
    omniachain: {
      subtitle: 'El motor definitivo para agentes de Inteligencia Artificial.',
      description: 'Framework Python asíncrono para orquestración de IAs multimodales con integración nativa al Model Context Protocol (MCP) y seguridad militar.',
      highlights: {
        blocking: {
          title: 'Zero Blocking',
          desc: 'Todo el núcleo está construido sobre asyncio. Permite que el agente consulte vectores, busque en la web y llame APIs simultáneamente.'
        },
        mcp: {
          title: 'Soporte Nativo MCP',
          desc: 'Integración pionera con el Model Context Protocol. Consuma servidores MCP o transforme herramientas en servidores en 10 líneas.'
        },
        security: {
          title: 'Seguridad Nivel Militar',
          desc: 'Sistema de permisos vinculado a Fingerprints PGP. Garantiza que las herramientas críticas solo se ejecuten con la firma correcta.'
        },
        multimodal: {
          title: 'Multimodalidad Verdadera',
          desc: 'Ingiere y entiende dinámicamente PDFs, imágenes, videos, hojas CSV y audios directamente en el contexto.'
        },
        orchestration: {
          title: 'Orquestación Avanzada',
          desc: 'Soporte para ReAct, Supervisor y Planner estructurados en grafos, con memorias vectoriales en PostgreSQL (pgvector).'
        }
      },
      stack: '🛠️ Stack Tecnológico',
      links: {
        github: 'Ver repositorio en GitHub',
        site: 'Sitio Oficial',
        pypi: 'Ver en PyPI'
      }
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = (langCode) => {
    setLanguage(langCode || 'pt');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
