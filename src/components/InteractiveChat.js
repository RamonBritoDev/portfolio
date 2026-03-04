import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import './InteractiveChat.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Prompts específicos por idioma
const PROMPTS = {
    en: `# RAMON BRITO FERREIRA - AI CHATBOT PERSONA

## LANGUAGE RULE [CRITICAL]
YOU MUST ALWAYS RESPOND IN ENGLISH, NO EXCEPTIONS.

## WHO I AM
I'm Ramon Brito, a 24-year-old Software Engineering student and AI Developer. I focus on creating AI products, intelligent WhatsApp bots, and CRM integrations using FastAPI and LLMs, with a secondary background in cybersecurity.

## KEY TRAITS
- AI and Automation specialist
- Clear technical communicator
- Practice-oriented problem solver
- Expert in FastAPI and Python
- Innovation-driven developer

## CORE EXPERIENCES
1. AI Developer & Intern:
   - Creating AI-based products
   - WhatsApp customer service bots using FastAPI and LLMs
   - CRM integrations structured with AI

2. Development & Architecture:
   - Deployment of local LLMs for privacy
   - Custom RAG architectures
   - Robust Docker deployments

3. Cybersecurity Background:
   - Former Educational Director at LaSEC
   - Knowledge of secure practices and infrastructure

## TECHNICAL STACK
- Languages: Python, JavaScript, Java, C++
- Tools: FastAPI, React.js, Docker, Git
- Focus: Artificial Intelligence, LLMs, Process Automation, CRM Integrations

## RESPONSE GUIDELINES
1. Keep tech-focused and solution-oriented
2. Highlight your AI Engineering capabilities primarily
3. Share specific, relevant AI and Automation experiences
4. Show enthusiasm while maintaining professionalism
5. Use clear, precise technical language

## CONTACT (when requested)
- **📧 Email:** ramonbritodev@gmail.com
- **💼 LinkedIn:** https://www.linkedin.com/in/ramon-brito-439975279

> ⚠️ **RULE:** Provide contacts ONLY when the conversation is about technology, development, AI, or professional opportunities in the tech field.`,

    pt: `# RAMON BRITO FERREIRA - PERSONA DO CHATBOT

## REGRA DE IDIOMA [CRÍTICA]
VOCÊ DEVE SEMPRE RESPONDER EM PORTUGUÊS, SEM EXCEÇÕES.

## QUEM SOU EU
Sou Ramon Brito, estudante de 24 anos de Engenharia de Software e Desenvolvedor de IA. Meu foco é a criação de produtos de IA, bots inteligentes para WhatsApp e integrações com CRM usando FastAPI e LLMs, possuindo também conhecimentos secundários em cibersegurança.

## CARACTERÍSTICAS PRINCIPAIS
- Especialista em IA e Automação
- Comunicador técnico claro
- Solucionador de problemas orientado à prática
- Especialista em FastAPI e Python
- Desenvolvedor voltado à inovação

## EXPERIÊNCIAS FUNDAMENTAIS
1. Desenvolvedor de IA e Estagiário:
   - Criação de produtos baseados em IA
   - Bots de atendimento via WhatsApp usando FastAPI e LLMs
   - Integrações com CRM estruturação com IA

2. Desenvolvimento & Arquitetura:
   - Implantação de LLMs locais para privacidade
   - Arquiteturas RAG customizadas
   - Implantações robustas com Docker

3. Background em Cibersegurança:
   - Ex-Diretor de Ensino da LaSEC
   - Conhecimento de práticas seguras e infraestrutura

## STACK TÉCNICO
- Linguagens: Python, JavaScript, Java, C++
- Ferramentas: FastAPI, React.js, Docker, Git
- Foco: Inteligência Artificial, LLMs, Automação de Processos, Integrações CRM

## DIRETRIZES DE RESPOSTA
1. Mantenha o foco em tecnologia e soluções
2. Destaque primariamente suas capacidades em Engenharia de IA
3. Compartilhe experiências específicas e relevantes em IA e Automação
4. Mostre entusiasmo mantendo profissionalismo
5. Use linguagem técnica clara e precisa

## CONTATO (quando solicitado)
- **📧 Email:** ramonbritodev@gmail.com
- **💼 LinkedIn:** https://www.linkedin.com/in/ramon-brito-439975279

> ⚠️ **REGRA:** Fornecer contatos APENAS quando a conversa for sobre tecnologia, desenvolvimento, IA ou oportunidades profissionais na área tech.`,

    es: `# RAMON BRITO FERREIRA - PERSONA DEL CHATBOT

## REGLA DE IDIOMA [CRÍTICA]
DEBES SIEMPRE RESPONDER EN ESPAÑOL, SIN EXCEPCIONES.

## QUIÉN SOY
Soy Ramon Brito, estudiante de 24 años de Ingeniería de Software y Desarrollador de IA. Me enfoco en la creación de productos de IA, bots inteligentes para WhatsApp e integraciones con CRM usando FastAPI y LLMs, con conocimientos secundarios en ciberseguridad.

## CARACTERÍSTICAS PRINCIPALES
- Especialista en IA y Automatización
- Comunicador técnico claro
- Solucionador de problemas orientado a la práctica
- Experto en FastAPI y Python
- Desarrollador orientado a la innovación

## EXPERIENCIAS FUNDAMENTALES
1. Desarrollador de IA y Pasante:
   - Creación de productos basados en IA
   - Bots de atención vía WhatsApp usando FastAPI y LLMs
   - Integraciones con CRM estructuradas con IA

2. Desarrollo y Arquitectura:
   - Implementación de LLMs locales para privacidad
   - Arquitecturas RAG personalizadas
   - Implementaciones robustas con Docker

3. Experiencia en Ciberseguridad:
   - Ex Director Educativo en LaSEC
   - Conocimiento de prácticas seguras e infraestructura

## STACK TÉCNICO
- Lenguajes: Python, JavaScript, Java, C++
- Herramientas: FastAPI, React.js, Docker, Git
- Enfoque: Inteligencia Artificial, LLMs, Automatización de Procesos, Integraciones CRM

## DIRECTRICES DE RESPUESTA
1. Mantén el foco en tecnología y soluciones
2. Destaca principalmente tus capacidades en Ingeniería de IA
3. Comparte experiencias específicas y relevantes en IA y Automatización
4. Muestra entusiasmo manteniendo profesionalismo
5. Usa lenguaje técnico claro y preciso

## CONTACTO (cuando se solicite)
- **📧 Email:** ramonbritodev@gmail.com
- **💼 LinkedIn:** https://www.linkedin.com/in/ramon-brito-439975279

> ⚠️ **REGLA:** Proporcionar contactos SOLO cuando la conversación sea sobre tecnología, desarrollo, IA u oportunidades profesionales en el área tech.`
};

const InteractiveChat = () => {
    // Estados sempre começam vazios/limpos a cada montagem do componente
    const [messages, setMessages] = useState([]);
    const [conversationHistory, setConversationHistory] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');
    const messagesEndRef = useRef(null);
    const { t, language } = useLanguage();

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Sempre reinicia a conversa quando o componente é montado
        const welcomeMessage = {
            id: `welcome-${Date.now()}`, // ID único para cada reinicialização
            text: t.chat.welcome,
            isBot: true,
            options: Object.values(t.chat.options),
        };

        // Limpa estados e reinicia a conversa
        setMessages([welcomeMessage]);
        setConversationHistory([
            {
                role: 'assistant',
                content: t.chat.welcome
            }
        ]);
        setIsTyping(false);
        setUserInput('');

        scrollToBottom();
    }, [t]); // Remove 'messages' da dependência para forçar reinicialização

    const buildContextualPrompt = (newMessage) => {
        // Detecta se é a primeira mensagem real (após welcome)
        const isFirstUserMessage = conversationHistory.length <= 1;

        let contextPrompt = `Você é Ramon Brito Ferreira. Use as informações abaixo como sua base de conhecimento e personalidade:\n\n${PROMPTS[language]}\n\n`;

        if (!isFirstUserMessage) {
            // Para mensagens subsequentes, inclui TODO o histórico
            contextPrompt += "HISTÓRICO COMPLETO DESTA CONVERSA:\n";
            conversationHistory.forEach((message, index) => {
                if (index === 0) {
                    // Pula apenas a primeira mensagem de boas-vindas genérica
                    return;
                }
                const speaker = message.role === 'user' ? 'Usuário' : 'Ramon';
                contextPrompt += `${speaker}: ${message.content}\n`;
            });
            contextPrompt += `Usuário: ${newMessage}\n\n`;

            contextPrompt += `INSTRUÇÕES CRÍTICAS:
- ESTA NÃO É A PRIMEIRA MENSAGEM - você já está conversando com esta pessoa
- NÃO cumprimente novamente, NÃO se apresente novamente
- Continue a conversa naturalmente baseado no histórico acima
- Mantenha total consistência com suas respostas anteriores
- Responda diretamente à nova mensagem considerando todo o contexto`;
        } else {
            // Primeira mensagem real do usuário
            contextPrompt += `PRIMEIRA MENSAGEM DO USUÁRIO: ${newMessage}\n\n`;
            contextPrompt += `INSTRUÇÕES:
- Esta é a primeira interação real após sua apresentação inicial
- Responda naturalmente como Ramon, sem repetir sua apresentação
- Seja autêntico e mostre interesse genuíno na conversa`;
        }

        return contextPrompt;
    };

    const handleSendMessage = async (message) => {
        if (!message.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: message,
            isBot: false,
        };

        setMessages((prev) => [...prev, userMessage]);

        // Adiciona mensagem do usuário ao histórico
        const updatedHistory = [...conversationHistory, {
            role: 'user',
            content: message
        }];
        setConversationHistory(updatedHistory);

        setIsTyping(true);
        setUserInput('');

        try {
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.5-flash-lite',
                generationConfig: {
                    temperature: 0.9, // Mais alto para evitar respostas robóticas repetitivas
                    topP: 0.95,
                    topK: 60,
                    maxOutputTokens: 1024,
                }
            });

            const contextualPrompt = buildContextualPrompt(message);
            console.log("=== PROMPT COMPLETO ENVIADO PARA API ===");
            console.log(contextualPrompt);
            console.log("=== FIM DO PROMPT ===");

            const result = await model.generateContent(contextualPrompt);
            const response = await result.response;
            let text = response.text();

            // Filtro para evitar saudações repetitivas
            const isSubsequentMessage = conversationHistory.length > 1;
            if (isSubsequentMessage) {
                // Remove saudações comuns se aparecerem em mensagens subsequentes
                const greetingPatterns = [
                    /^(Olá[!.]?\s)/i,
                    /^(Oi[!.]?\s)/i,
                    /^(Opa[!.]?\s)/i,
                    /^(E aí[!.]?\s)/i,
                    /Sou Ramon/i,
                    /Meu nome é Ramon/i
                ];

                greetingPatterns.forEach(pattern => {
                    text = text.replace(pattern, '');
                });

                // Remove espaços extras no início
                text = text.trim();

                // Se sobrou muito pouco texto após filtrar, regenera uma resposta mais natural
                if (text.length < 20) {
                    text = "Claro! Como posso te ajudar?";
                }
            }

            console.log("=== RESPOSTA DA API (pós-filtro) ===");
            console.log(text);
            console.log("=== FIM DA RESPOSTA ===");

            const botResponse = {
                id: Date.now() + 1,
                text: text,
                isBot: true,
                options: [], // Pode ser expandido para gerar opções dinâmicas
            };

            setMessages((prev) => [...prev, botResponse]);

            // Adiciona resposta do bot ao histórico
            setConversationHistory(prev => [...prev, {
                role: 'assistant',
                content: text
            }]);

        } catch (error) {
            console.error('Error generating content:', error);
            const errorMessage = {
                id: Date.now() + 1,
                text: 'Desculpe, tive um problema técnico aqui. Como desenvolvedor, sei que bugs acontecem! Pode tentar novamente?',
                isBot: true,
                options: [],
            };
            setMessages((prev) => [...prev, errorMessage]);

            // Adiciona mensagem de erro ao histórico também
            setConversationHistory(prev => [...prev, {
                role: 'assistant',
                content: errorMessage.text
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleOptionClick = (option) => {
        handleSendMessage(option);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(userInput);
    };

    // Função para limpar o histórico da conversa (mantida funcionando mas não visível)
    const clearConversation = () => {
        const welcomeMessage = {
            id: `welcome-${Date.now()}`,
            text: t.chat.welcome,
            isBot: true,
            options: Object.values(t.chat.options),
        };

        setMessages([welcomeMessage]);
        setConversationHistory([{
            role: 'assistant',
            content: t.chat.welcome
        }]);
        setIsTyping(false);
        setUserInput('');
    };

    return (
        <section className="chat-section">
            <motion.div
                className="chat-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="chat-header">
                    <h2>{t.chat.title}</h2>
                    <p>{t.chat.subtitle}</p>
                </div>

                <div className="messages-container">
                    <AnimatePresence>
                        {messages.map((message) => (
                            <Message
                                key={message.id}
                                text={message.text}
                                isBot={message.isBot}
                                options={message.options}
                                onOptionClick={handleOptionClick}
                            />
                        ))}
                        {isTyping && <TypingIndicator />}
                    </AnimatePresence>
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="chat-input-form">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={t.chat.inputPlaceholder}
                        className="chat-input"
                        disabled={isTyping}
                    />
                    <button
                        type="submit"
                        className="chat-submit"
                        aria-label="Enviar mensagem"
                        disabled={isTyping || !userInput.trim()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default InteractiveChat;
