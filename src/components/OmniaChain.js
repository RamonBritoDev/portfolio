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
              <i className="fa-brands fa-github"></i> {ot.links.github}
            </a>
            <a href="https://www.omniachain.cloud/" target="_blank" rel="noopener noreferrer" className="omnia-btn site-btn">
              <i className="fa-solid fa-globe"></i> {ot.links.site}
            </a>
            <a href="https://pypi.org/project/omniachain/" target="_blank" rel="noopener noreferrer" className="omnia-btn pypi-btn">
              <i className="fa-solid fa-box-open"></i> {ot.links.pypi}
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
            <div className="highlight-icon"><i className="fa-solid fa-bolt"></i></div>
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
            <div className="highlight-icon"><i className="fa-solid fa-network-wired"></i></div>
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
            <div className="highlight-icon"><i className="fa-solid fa-shield-halved"></i></div>
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
            <div className="highlight-icon"><i className="fa-solid fa-eye"></i></div>
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
            <div className="highlight-icon"><i className="fa-solid fa-diagram-project"></i></div>
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
