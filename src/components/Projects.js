import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t, language } = useLanguage();

  const projectsData = {
    pt: [
      {
        title: '🏆 LEO Compute Secure — NASA Space Apps',
        description: '1º Lugar no NASA Space Apps Challenge Fortaleza 2025. Protocolo inovador para processamento de dados seguros com IA, voltado ao processamento multifatorial de dados e satélites em órbita baixa (LEO).',
        tags: ['IA', 'Satélites LEO', 'Dados Seguros', 'NASA', '1º Lugar'],
        link: 'https://www.spaceappschallenge.org/2025/find-a-team/galileo-nasa-space-apps/?tab=project',
        icon: '🛰️'
      },
      {
        title: 'IA Local para Atendimento',
        description: 'Sistema de atendimento via WhatsApp usando LLMs locais e FastAPI, com motor de decisões para integrações em CRM e foco em segurança.',
        tags: ['FastAPI', 'Docker', 'Qwen', 'Waha API', 'CRM'],
        link: 'https://github.com/RamonBritoDev/IA-Local-Com-Whatsapp',
        icon: '🤖'
      },
      {
        title: 'Galeteria Skina do Frango — Sistema de Delivery',
        description: 'Sistema fullstack completo de gerenciamento de delivery com painel administrativo de produtos, pedidos em tempo real, integração com impressoras em rede e deploy em nuvem.',
        tags: ['React.js', 'FastAPI', 'Docker', 'Cloud', 'Impressoras em Rede', 'Fullstack'],
        link: 'https://galeteriaskinadofrango.site/',
        icon: '🍗'
      },
      {
        title: 'Galeteria Aguiar — Sistema de Delivery',
        description: 'Plataforma fullstack de delivery com administração completa de cardápio, gestão de pedidos, integração com impressoras térmicas em rede e infraestrutura em nuvem com Docker.',
        tags: ['React.js', 'FastAPI', 'Docker', 'Cloud', 'Impressoras em Rede', 'Fullstack'],
        link: 'https://galeteriaaguiar.site/',
        icon: '🍗'
      }
    ],
    en: [
      {
        title: '🏆 LEO Compute Secure — NASA Space Apps',
        description: '1st Place at NASA Space Apps Challenge Fortaleza 2025. Innovative protocol for secure data processing with AI, focused on multifactorial data processing and Low Earth Orbit (LEO) satellites.',
        tags: ['AI', 'LEO Satellites', 'Secure Data', 'NASA', '1st Place'],
        link: 'https://www.spaceappschallenge.org/2025/find-a-team/galileo-nasa-space-apps/?tab=project',
        icon: '🛰️'
      },
      {
        title: 'Local AI for Support',
        description: 'WhatsApp support system using local LLMs and FastAPI, featuring a decision engine for CRM integrations.',
        tags: ['FastAPI', 'Docker', 'Qwen', 'Waha API', 'CRM'],
        link: 'https://github.com/RamonBritoDev/IA-Local-Com-Whatsapp',
        icon: '🤖'
      },
      {
        title: 'Galeteria Skina do Frango — Delivery System',
        description: 'Complete fullstack delivery management system with product admin panel, real-time orders, network printer integration, and cloud deployment.',
        tags: ['React.js', 'FastAPI', 'Docker', 'Cloud', 'Network Printers', 'Fullstack'],
        link: 'https://galeteriaskinadofrango.site/',
        icon: '🍗'
      },
      {
        title: 'Galeteria Aguiar — Delivery System',
        description: 'Fullstack delivery platform with complete menu management, order handling, thermal network printer integration, and Docker-based cloud infrastructure.',
        tags: ['React.js', 'FastAPI', 'Docker', 'Cloud', 'Network Printers', 'Fullstack'],
        link: 'https://galeteriaaguiar.site/',
        icon: '🍗'
      }
    ],
    es: [
      {
        title: '🏆 LEO Compute Secure — NASA Space Apps',
        description: '1er Lugar en NASA Space Apps Challenge Fortaleza 2025. Protocolo innovador para procesamiento seguro de datos con IA, enfocado en procesamiento multifactorial de datos y satélites en órbita baja (LEO).',
        tags: ['IA', 'Satélites LEO', 'Datos Seguros', 'NASA', '1er Lugar'],
        link: 'https://www.spaceappschallenge.org/2025/find-a-team/galileo-nasa-space-apps/?tab=project',
        icon: '🛰️'
      },
      {
        title: 'IA Local para Atención',
        description: 'Sistema de atención vía WhatsApp usando LLMs locales y FastAPI, con motor de decisiones para integraciones en CRM.',
        tags: ['FastAPI', 'Docker', 'Qwen', 'Waha API', 'CRM'],
        link: 'https://github.com/RamonBritoDev/IA-Local-Com-Whatsapp',
        icon: '🤖'
      },
      {
        title: 'Galeteria Skina do Frango — Sistema de Delivery',
        description: 'Sistema fullstack completo de gestión de delivery con panel de administración de productos, pedidos en tiempo real, integración con impresoras en red y despliegue en la nube.',
        tags: ['React.js', 'FastAPI', 'Docker', 'Cloud', 'Impresoras en Red', 'Fullstack'],
        link: 'https://galeteriaskinadofrango.site/',
        icon: '🍗'
      },
      {
        title: 'Galeteria Aguiar — Sistema de Delivery',
        description: 'Plataforma fullstack de delivery con gestión completa de menú, manejo de pedidos, integración con impresoras térmicas en red e infraestructura en la nube con Docker.',
        tags: ['React.js', 'FastAPI', 'Docker', 'Cloud', 'Impresoras en Red', 'Fullstack'],
        link: 'https://galeteriaaguiar.site/',
        icon: '🍗'
      }
    ]
  };

  const projects = projectsData[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>
            <span className="text-gradient">{t.projects.title.split(' ')[0]}</span>{' '}
            {t.projects.title.split(' ').slice(1).join(' ')}
          </h2>
          <p className="section-description">
            {t.projects.description}
          </p>
        </motion.div>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="button secondary project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.projects.viewProject}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
