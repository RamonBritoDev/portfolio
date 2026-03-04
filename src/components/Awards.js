import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Awards.css';

const Awards = () => {
    const { language } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(null);

    const content = {
        pt: {
            sectionTitle: '🏆 Premiações',
            sectionSubtitle: 'Reconhecimentos e conquistas em competições de tecnologia e inovação',
            title: '1º Lugar — NASA Space Apps Challenge Fortaleza 2025',
            team: 'Equipe Galileo',
            certificate: 'Certificado NASA — Galactic Problem Solver',
            date: 'Outubro 2025',
            description: 'Responsável por criar um protocolo inovador para processamento de dados seguros utilizando Inteligência Artificial, voltado ao processamento multifatorial de dados e satélites em órbita baixa (LEO). O projeto LEO Compute Secure combina IA com computação segura para otimizar o processamento de dados em satélites de baixa órbita terrestre.',
            highlights: [
                'Criação de protocolo de processamento seguro de dados com IA',
                'Processamento multifatorial de dados de satélites LEO',
                'Integração de Inteligência Artificial com computação espacial',
                'Plataforma de visualização e análise de dados orbitais',
            ],
            viewProject: 'Ver Projeto na NASA',
        },
        en: {
            sectionTitle: '🏆 Awards',
            sectionSubtitle: 'Recognitions and achievements in technology and innovation competitions',
            title: '1st Place — NASA Space Apps Challenge Fortaleza 2025',
            team: 'Team Galileo',
            certificate: 'NASA Certificate — Galactic Problem Solver',
            date: 'October 2025',
            description: 'Responsible for creating an innovative protocol for secure data processing using Artificial Intelligence, focused on multifactorial data processing and Low Earth Orbit (LEO) satellites. The LEO Compute Secure project combines AI with secure computing to optimize data processing on low Earth orbit satellites.',
            highlights: [
                'Creation of secure data processing protocol with AI',
                'Multifactorial processing of LEO satellite data',
                'Integration of Artificial Intelligence with space computing',
                'Orbital data visualization and analysis platform',
            ],
            viewProject: 'View Project at NASA',
        },
        es: {
            sectionTitle: '🏆 Premios',
            sectionSubtitle: 'Reconocimientos y logros en competencias de tecnología e innovación',
            title: '1er Lugar — NASA Space Apps Challenge Fortaleza 2025',
            team: 'Equipo Galileo',
            certificate: 'Certificado NASA — Galactic Problem Solver',
            date: 'Octubre 2025',
            description: 'Responsable de crear un protocolo innovador para el procesamiento seguro de datos utilizando Inteligencia Artificial, enfocado en el procesamiento multifactorial de datos y satélites en órbita baja terrestre (LEO). El proyecto LEO Compute Secure combina IA con computación segura para optimizar el procesamiento de datos en satélites de órbita baja.',
            highlights: [
                'Creación de protocolo de procesamiento seguro de datos con IA',
                'Procesamiento multifactorial de datos de satélites LEO',
                'Integración de Inteligencia Artificial con computación espacial',
                'Plataforma de visualización y análisis de datos orbitales',
            ],
            viewProject: 'Ver Proyecto en la NASA',
        },
    };

    const t = content[language];

    const images = [
        {
            src: '/nasaspaceapps/WhatsApp Image 2026-03-04 at 10.18.24.jpeg',
            alt: { pt: 'Equipes Vencedoras — 1º Lugar', en: 'Winning Teams — 1st Place', es: 'Equipos Ganadores — 1er Lugar' },
        },
        {
            src: '/nasaspaceapps/WhatsApp Image 2026-03-04 at 10.18.32.jpeg',
            alt: { pt: 'Certificado NASA — Galactic Problem Solver', en: 'NASA Certificate — Galactic Problem Solver', es: 'Certificado NASA — Galactic Problem Solver' },
        },
        {
            src: '/nasaspaceapps/WhatsApp Image 2026-03-04 at 10.18.49.jpeg',
            alt: { pt: 'Projeto LEO Compute Secure em desenvolvimento', en: 'LEO Compute Secure project in development', es: 'Proyecto LEO Compute Secure en desarrollo' },
        },
    ];

    return (
        <section id="awards" className="awards-section">
            <div className="awards-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="awards-header"
                >
                    <h2>{t.sectionTitle}</h2>
                    <p className="awards-subtitle">{t.sectionSubtitle}</p>
                </motion.div>

                <motion.div
                    className="award-card-featured"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="award-badge">
                        <span className="badge-icon">🥇</span>
                        <span className="badge-text">1st Place</span>
                    </div>

                    <div className="award-content-wrapper">
                        <div className="award-info">
                            <div className="award-title-row">
                                <h3>{t.title}</h3>
                                <span className="award-date">{t.date}</span>
                            </div>
                            <p className="award-team">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                {t.team}
                            </p>
                            <p className="award-certificate">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18" />
                                    <path d="M9 21V9" />
                                </svg>
                                {t.certificate}
                            </p>
                            <p className="award-description">{t.description}</p>

                            <div className="award-highlights">
                                {t.highlights.map((item, i) => (
                                    <div key={i} className="highlight-item">
                                        <span className="highlight-dot" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://www.spaceappschallenge.org/2025/find-a-team/galileo-nasa-space-apps/?tab=project"
                                className="award-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.viewProject}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        </div>

                        <div className="award-gallery">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className="gallery-item"
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => setSelectedImage(img)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt[language]}
                                        loading="lazy"
                                    />
                                    <div className="gallery-overlay">
                                        <span>{img.alt[language]}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
                            <img src={selectedImage.src} alt={selectedImage.alt[language]} />
                            <p className="lightbox-caption">{selectedImage.alt[language]}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Awards;
