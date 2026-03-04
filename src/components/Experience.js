import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { language } = useLanguage();

  const experienceData = {
    pt: [
      {
        title: 'Estagiário em Desenvolvimento de IA',
        company: 'Wiser Tecnologia',
        period: 'Nov 2025 - Atual',
        description: [
          'Desenvolvimento e treinamento de LLMs para criação de soluções e produtos',
          'Utilização de LLMs open-source e proprietários, além de tecnologias STT e TTS',
          'Integrações com CRM, WhatsApp e sistema de calling com IA',
          'Criação de agentes, superagentes e uso de MCP e LangChain',
        ],
      },
      {
        title: 'Estagiário de Dados com Foco em IA e Automação',
        company: 'Colmeia Soluções em Tecnologia — Fortaleza/CE (Remoto)',
        period: 'Ago 2025 - Out 2025',
        description: [
          'Desenvolvimento de produtos baseados em IA',
          'Integrações com CRM estruturadas com Inteligência Artificial',
          'Criação de bots de atendimento via WhatsApp usando FastAPI e LLMs',
          'Análise, tratamento e extração de dados',
        ],
      },
      {
        title: 'Estagiário de TI',
        company: 'Conselho Regional de Corretores de Imóveis 15ª Região - Ceará',
        period: 'Jun 2025 - Ago 2025',
        description: [
          'Atendimento de chamados N1 e suporte técnico',
          'Análise de infraestrutura e desenvolvimento de soluções',
        ],
      },
      {
        title: 'Diretor de Educação',
        company: 'LaSEC',
        period: '2024 - Presente',
        description: [
          'Criação de materiais didáticos e cursos em cibersegurança',
          'Coordenação de workshops e palestras',
          'Desenvolvimento de conteúdo educacional',
        ],
      },
      {
        title: 'Operador de Telemarketing',
        company: 'Corpvs Segurança',
        period: 'Jul 2023 - Maio 2025',
        description: [
          'Atendimento ao cliente oferecendo soluções personalizadas em serviços de segurança',
          'Fornecimento de informações precisas e auxílio na resolução de solicitações',
        ],
      },
      {
        title: 'Suporte Técnico Autônomo',
        company: 'Freelancer',
        period: '2021 - 2023',
        description: [
          'Manutenção de computadores e celulares',
          'Instalação de sistemas e softwares',
          'Venda de produtos importados',
        ],
      },
    ],
    en: [
      {
        title: 'AI Development Intern',
        company: 'Wiser Tecnologia',
        period: 'Nov 2025 - Present',
        description: [
          'Development and training of LLMs to create solutions and products',
          'Utilization of open-source and proprietary LLMs, along with STT and TTS technologies',
          'Integrations with CRM, WhatsApp, and AI calling systems',
          'Creation of agents, superagents, and use of MCP and LangChain',
        ],
      },
      {
        title: 'Data Intern with focus on AI and Automation',
        company: 'Colmeia Soluções em Tecnologia — Fortaleza/CE (Remote)',
        period: 'Aug 2025 - Oct 2025',
        description: [
          'Development of AI-based products',
          'CRM integrations structured with Artificial Intelligence',
          'Creation of WhatsApp customer service bots using FastAPI and LLMs',
          'Data analysis, processing, and extraction',
        ],
      },
      {
        title: 'IT Intern',
        company: 'Regional Council of Real Estate Brokers 15th Region - Ceará',
        period: 'Jun 2025 - Aug 2025',
        description: [
          'N1 ticket handling and technical support',
          'Infrastructure analysis and solution development',
        ],
      },
      {
        title: 'Education Director',
        company: 'LaSEC',
        period: '2024 - Present',
        description: [
          'Creation of educational materials and cybersecurity courses',
          'Workshop and lecture coordination',
          'Educational content development',
        ],
      },
      {
        title: 'Telemarketing Operator',
        company: 'Corpvs Segurança',
        period: 'Jul 2023 - May 2025',
        description: [
          'Customer service offering personalized security solutions',
          'Providing accurate information and assistance in resolving requests',
        ],
      },
      {
        title: 'Freelance Technical Support',
        company: 'Freelancer',
        period: '2021 - 2023',
        description: [
          'Computer and mobile device maintenance',
          'System and software installation',
          'Imported products sales',
        ],
      },
    ],
    es: [
      {
        title: 'Pasante en Desarrollo de IA',
        company: 'Wiser Tecnologia',
        period: 'Nov 2025 - Actual',
        description: [
          'Desarrollo y entrenamiento de LLMs para la creación de soluciones y productos',
          'Uso de LLMs de código abierto y propietarios, junto con tecnologías de STT y TTS',
          'Integraciones con CRM, WhatsApp y sistemas de llamadas con IA',
          'Creación de agentes, superagentes y uso de MCP y LangChain',
        ],
      },
      {
        title: 'Pasante de Datos con enfoque en IA y Automatización',
        company: 'Colmeia Soluções em Tecnologia — Fortaleza/CE (Remoto)',
        period: 'Ago 2025 - Oct 2025',
        description: [
          'Desarrollo de productos basados en IA',
          'Integraciones con CRM estructuradas con Inteligencia Artificial',
          'Creación de bots de atención vía WhatsApp usando FastAPI y LLMs',
          'Análisis, procesamiento y extracción de datos',
        ],
      },
      {
        title: 'Pasante de TI',
        company: 'Consejo Regional de Corredores Inmobiliarios 15ª Región - Ceará',
        period: 'Jun 2025 - Jul 2025',
        description: [
          'Atención de tickets N1 y soporte técnico',
          'Análisis de infraestructura y desarrollo de soluciones',
        ],
      },
      {
        title: 'Director de Educación',
        company: 'LaSEC',
        period: '2024 - Presente',
        description: [
          'Creación de materiales didácticos y cursos de ciberseguridad',
          'Coordinación de talleres y conferencias',
          'Desarrollo de contenido educativo',
        ],
      },
      {
        title: 'Operador de Telemarketing',
        company: 'Corpvs Segurança',
        period: 'Jul 2023 - Mayo 2025',
        description: [
          'Atención al cliente ofreciendo soluciones de seguridad personalizadas',
          'Proporcionar información precisa y asistencia en la resolución de solicitudes',
        ],
      },
      {
        title: 'Soporte Técnico Freelance',
        company: 'Freelancer',
        period: '2021 - 2023',
        description: [
          'Mantenimiento de computadoras y dispositivos móviles',
          'Instalación de sistemas y software',
          'Venta de productos importados',
        ],
      },
    ],
  };

  const experiences = experienceData[language];
  const titles = {
    pt: 'Experiência Profissional',
    en: 'Professional Experience',
    es: 'Experiencia Profesional'
  };

  return (
    <section id="experience" className="experience-section">
      <h2>{titles[language]}</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 