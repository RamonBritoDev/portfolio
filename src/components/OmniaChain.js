import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './OmniaChain.css';

const OmniaChain = () => {
  const { t } = useLanguage();
  const ot = t.omniachain;

  return (
    <section id="omniachain" className="omniachain-section">
      <div className="omniachain-container">
        
        {/* Header Section */}
        <motion.div 
          className="omniachain-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            ✨ <span className="text-gradient-purple">OmniaChain</span>
          </h2>
          <p className="omniachain-subtitle">
            {ot.subtitle}
          </p>
          <p className="omniachain-description">
            {ot.description}
          </p>
          <div className="omniachain-links">
            <a href="https://github.com/RamonBritoDev/omniachain" target="_blank" rel="noopener noreferrer" className="omnia-btn github-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> 
              {ot.links.github}
            </a>
            <a href="https://www.omniachain.cloud/" target="_blank" rel="noopener noreferrer" className="omnia-btn site-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              {ot.links.site}
            </a>
            <a href="https://pypi.org/project/omniachain/" target="_blank" rel="noopener noreferrer" className="omnia-btn pypi-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
              {ot.links.pypi}
            </a>
          </div>
        </motion.div>

        {/* Code Block Section */}
        <motion.div 
          className="omniachain-code-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-title">quickstart.py</span>
            </div>
            <pre className="code-content">
              <code>
                <span className="keyword">import</span> <span className="variable">asyncio</span>{'\n'}
                <span className="keyword">from</span> <span className="entity">omniachain</span> <span className="keyword">import</span> <span className="variable">Agent</span>, <span className="variable">OpenAI</span>, <span className="variable">calculator</span>, <span className="variable">web_search</span>{'\n'}
                {'\n'}
                <span className="variable">agent</span> <span className="operator">=</span> <span className="entity">Agent</span>(provider<span className="operator">=</span><span className="entity">OpenAI</span>(<span className="string">"gpt-4o"</span>), tools<span className="operator">=</span>[calculator, web_search]){'\n'}
                <span className="keyword">await</span> <span className="variable">agent</span>.<span className="function">run</span>(<span className="string">"What is the square root of 144 times distance to the moon?"</span>)
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <div className="omniachain-highlights">
          <motion.div 
            className="highlight-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            </div>
            <h3>{ot.highlights.blocking.title}</h3>
            <p>{ot.highlights.blocking.desc}</p>
          </motion.div>

          <motion.div 
            className="highlight-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"></path><path d="M12 11V8"></path></svg>
            </div>
            <h3>{ot.highlights.mcp.title}</h3>
            <p>{ot.highlights.mcp.desc}</p>
          </motion.div>

          <motion.div 
            className="highlight-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>{ot.highlights.security.title}</h3>
            <p>{ot.highlights.security.desc}</p>
          </motion.div>

          <motion.div 
            className="highlight-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <h3>{ot.highlights.multimodal.title}</h3>
            <p>{ot.highlights.multimodal.desc}</p>
          </motion.div>

          <motion.div 
            className="highlight-card full-width"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M3 3l6.39 6.39"></path><path d="M21 3l-6.39 6.39"></path><path d="M3 21l6.39-6.39"></path><path d="M21 21l-6.39-6.39"></path></svg>
            </div>
            <h3>{ot.highlights.orchestration.title}</h3>
            <p>{ot.highlights.orchestration.desc}</p>
          </motion.div>
        </div>

        {/* Stack Technologies */}
        <motion.div 
          className="omniachain-stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>{ot.stack}</h3>
          <div className="stack-tags">
            <span>Python 3.11+</span>
            <span>Asyncio</span>
            <span>OpenAI</span>
            <span>Anthropic</span>
            <span>Gemini API</span>
            <span>Groq</span>
            <span>PostgreSQL</span>
            <span>pgvector</span>
            <span>MCP</span>
            <span>PGP Cryptography</span>
            <span>Whisper</span>
            <span>Playwright</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OmniaChain;
