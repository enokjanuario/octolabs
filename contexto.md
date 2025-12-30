# 🐙 OCTOLABS - Landing Page Concept & Development Prompt

## 📋 Visão Geral

**Empresa:** Octolabs - Desenvolvimento de Software
**Objetivo:** LP de alta conversão para Google Ads, Instagram e tráfego orgânico
**Diferencial:** Experiência interativa única com animações de polvo/tentáculos
**Meta:** Causar "UAU" instantâneo e gerar leads qualificados

---

## 🎨 DIREÇÃO ESTÉTICA

### Tom Visual
**"Oceano Profundo meets High-Tech"** - Uma fusão de:
- Profundidade oceânica (azuis profundos, gradientes abissais)
- Bioluminescência (glows, partículas flutuantes)
- Tech premium (glass morphism sutil, linhas precisas)
- Movimento orgânico (fluidez, ondulações)

### Paleta de Cores

```css
:root {
  /* Primárias */
  --deep-ocean: #0a0f1c;        /* Background principal */
  --abyss: #060a14;             /* Background mais escuro */
  --octopus-purple: #8b5cf6;    /* Roxo vibrante do polvo */
  --tentacle-cyan: #06b6d4;     /* Cyan bioluminescente */
  
  /* Acentos */
  --glow-purple: #a78bfa;       /* Glow effects */
  --glow-cyan: #22d3ee;         /* Glow secundário */
  --electric-blue: #3b82f6;     /* CTAs e destaques */
  
  /* Neutros */
  --text-primary: #f8fafc;      /* Texto principal */
  --text-secondary: #94a3b8;    /* Texto secundário */
  --glass-white: rgba(255,255,255,0.05); /* Glass elements */
  --glass-border: rgba(255,255,255,0.1); /* Bordas glass */
}
```

### Tipografia

```css
/* Display/Headlines - Font dramática e única */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
/* Alternativas únicas: Clash Display, Cabinet Grotesk, Satoshi */

/* Body - Legível e moderna */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

/* Code/Tech - Para elementos técnicos */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');
```

---

## 🐙 ANIMAÇÕES & INTERATIVIDADE (O DIFERENCIAL)

### 1. Hero - "Tentáculos Emergentes"

**Conceito:** Ao carregar a página, 8 tentáculos emergem suavemente das bordas da tela, convergindo para o centro onde está o logo. Os tentáculos são semi-transparentes com efeito de bioluminescência.

```
Implementação:
- SVG paths animados com stroke-dasharray
- Glow effect com filter: blur() e mix-blend-mode
- Parallax sutil no scroll
- Partículas flutuantes (bolhas bioluminescentes)
```

### 2. Scroll - "Tentáculos Guia"

**Conceito:** Conforme o usuário scrolla, um tentáculo acompanha na lateral da página, "apontando" para a seção atual. Em momentos-chave, o tentáculo "coloca" cards na tela.

```
Implementação:
- SVG path que segue o scroll progress
- Intersection Observer para trigger de animações
- Cards aparecem com motion blur + scale
- Efeito de "soltar" com spring animation
```

### 3. Cards de Serviços - "Entrega por Tentáculo"

**Conceito:** Ao entrar na seção de serviços, tentáculos surgem de diferentes direções, cada um "depositando" um card de serviço no lugar. Após depositar, o tentáculo recua suavemente.

```
Sequência:
1. Scroll trigger ativa animação
2. Tentáculo 1 surge da esquerda com Card "Web Development"
3. Tentáculo 2 surge da direita com Card "Mobile Apps"
4. Tentáculo 3 surge de baixo com Card "Integrações"
5. Tentáculos recuam, cards ficam com hover interativo
```

### 4. Hover Effects - "Ventosas Interativas"

**Conceito:** Elementos interativos têm pequenas "ventosas" que se iluminam no hover, como se o polvo estivesse "segurando" o elemento.

```css
.interactive-element::before {
  /* Ventosas que aparecem no hover */
  content: '';
  position: absolute;
  /* Círculos pequenos nas bordas que glowam */
}
```

### 5. Cursor Personalizado

**Conceito:** Cursor customizado que deixa um "rastro de tinta" sutil ao mover, como se fosse a tinta do polvo se dissipando na água.

```
Implementação:
- Canvas layer para trail effect
- Partículas que fadeout gradualmente
- Cursor principal: pequeno círculo com glow
```

### 6. Background Animado - "Oceano Profundo"

**Conceito:** Background com múltiplas camadas de profundidade oceânica.

```
Layers:
1. Gradient base (deep ocean)
2. Ondulações sutis (CSS animation)
3. Partículas flutuantes (bioluminescência)
4. Raios de luz vindos de cima (god rays)
5. Noise texture sutil (grain)
```

### 7. Seção "Sobre" - "Foto Emergindo"

**Conceito:** A foto do fundador está envolvida por tentáculos estilizados que formam uma moldura orgânica. No hover, os tentáculos se movem sutilmente.

### 8. Formulário - "Abraço do Polvo"

**Conceito:** O formulário de contato é "abraçado" por tentáculos que se movem quando o usuário interage com os campos. Ao enviar, os tentáculos fazem um "squeeze" de celebração.

### 9. Loading State

**Conceito:** Mini polvo animado que "nada" enquanto carrega, com tentáculos ondulando.

---

## 📐 ESTRUTURA DA LP

### Seção 1: HERO (100vh)

```
┌────────────────────────────────────────────────────────────┐
│  [Logo Octolabs - animado]                    [Menu fixo]  │
│                                                            │
│        ╔══════════════════════════════════════╗            │
│   🐙   ║                                      ║   🐙       │
│  ~~~   ║   DESENVOLVEMOS SOFTWARE             ║  ~~~       │
│        ║   QUE ABRAÇA SEU NEGÓCIO             ║            │
│        ║                                      ║            │
│        ║   [CTA: Iniciar Projeto →]           ║            │
│        ╚══════════════════════════════════════╝            │
│                                                            │
│     "8 braços. Zero bugs. Infinite possibilities."         │
│                                                            │
│                    ↓ Scroll indicator                      │
│  ~~~~~~~~~~~~~ ondulações sutis ~~~~~~~~~~~~               │
└────────────────────────────────────────────────────────────┘

Elementos:
- Background: oceano profundo com partículas
- Logo: animação de entrada com glow
- Headline: text reveal com gradient animado
- CTA: botão com efeito de bioluminescência
- Tentáculos: emergem das bordas
- Stats flutuantes: projetos, clientes, anos
```

### Seção 2: PROBLEMA/SOLUÇÃO (Scroll Reveal)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   "Seu projeto está preso em águas rasas?"                 │
│                                                            │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐               │
│   │ Atrasos │ → │ Bugs    │ → │ Custos  │               │
│   │ 🐙~~~   │    │ 🐙~~~   │    │ 🐙~~~   │               │
│   └─────────┘    └─────────┘    └─────────┘               │
│         ↓              ↓              ↓                    │
│   ╔════════════════════════════════════════════╗          │
│   ║  A Octolabs mergulha fundo no seu projeto  ║          │
│   ╚════════════════════════════════════════════╝          │
│                                                            │
└────────────────────────────────────────────────────────────┘

Animação:
- Cards de problema aparecem com shake sutil
- Tentáculo "puxa" os problemas para baixo
- Solução emerge de baixo com glow
```

### Seção 3: SERVIÇOS (Tentáculos Entregando Cards)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│              "O que nossos 8 braços fazem"                 │
│                                                            │
│   🐙~~~~~┐  ┌────────────────┐  ┌~~~~~🐙                  │
│          └→ │  WEB APPS      │ ←┘                         │
│             │  React, Next.js │                           │
│             │  [Ver mais →]   │                           │
│             └────────────────┘                            │
│                                                            │
│   ┌────────────────┐          ┌────────────────┐          │
│   │  MOBILE        │          │  INTEGRAÇÕES   │          │
│   │  iOS & Android │          │  APIs & ERPs   │          │
│   └────────────────┘          └────────────────┘          │
│                                                            │
│   ┌────────────────┐          ┌────────────────┐          │
│   │  E-COMMERCE    │          │  CONSULTORIA   │          │
│   │  Lojas online  │          │  Tech strategy │          │
│   └────────────────┘          └────────────────┘          │
│                                                            │
└────────────────────────────────────────────────────────────┘

Animação:
- Cada card é "trazido" por um tentáculo
- Sequência staggered (0.2s delay entre cards)
- Hover: card levita + glow + ventosas aparecem
```

### Seção 4: PROCESSO (Timeline Tentáculo)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│              "Como abraçamos seu projeto"                  │
│                                                            │
│    ○ Discovery        O tentáculo principal               │
│    │                  forma a linha do tempo,              │
│    │  🐙~~~           conectando todas as etapas           │
│    ↓                                                       │
│    ○ Proposta                                              │
│    │                                                       │
│    │  🐙~~~                                                │
│    ↓                                                       │
│    ○ Desenvolvimento                                       │
│    │                                                       │
│    │  🐙~~~                                                │
│    ↓                                                       │
│    ○ Entrega & Suporte                                     │
│                                                            │
└────────────────────────────────────────────────────────────┘

Animação:
- Tentáculo "desenha" a timeline conforme scroll
- Cada etapa tem um mini tentáculo que aparece
- Ícones pulsam com glow ao passar
```

### Seção 5: SOBRE / FUNDADOR

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│        "O cérebro por trás dos 8 braços"                   │
│                                                            │
│    ┌──────────────────┐                                    │
│    │  ╭────────────╮  │     Enok                           │
│    │ 🐙│   FOTO    │🐙│     Founder & Developer            │
│    │  │  DO ENOK  │  │                                    │
│    │ 🐙│           │🐙│     "Transformo complexidade       │
│    │  ╰────────────╯  │      em soluções elegantes"        │
│    └──────────────────┘                                    │
│                                                            │
│    [LinkedIn] [GitHub] [Email]                             │
│                                                            │
└────────────────────────────────────────────────────────────┘

Animação:
- Tentáculos formam moldura orgânica da foto
- No hover, tentáculos ondulam suavemente
- Social icons têm efeito de bolha ao hover
```

### Seção 6: DEPOIMENTOS (Cards Flutuantes)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│           "O que dizem sobre a Octolabs"                   │
│                                                            │
│    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│    │ ⭐⭐⭐⭐⭐  │  │ ⭐⭐⭐⭐⭐  │  │ ⭐⭐⭐⭐⭐  │      │
│    │ "Excelente  │  │ "Entrega    │  │ "Melhor     │      │
│    │  trabalho"  │  │  no prazo"  │  │  decisão"   │      │
│    │  - Cliente  │  │  - Cliente  │  │  - Cliente  │      │
│    └─────────────┘  └─────────────┘  └─────────────┘      │
│         ~~~~~           ~~~~~           ~~~~~              │
│                                                            │
└────────────────────────────────────────────────────────────┘

Animação:
- Cards flutuam suavemente (como na água)
- Auto-carousel com transição fluid
- Cada card tem "bolhas" saindo
```

### Seção 7: CTA FINAL + FORMULÁRIO

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│         ╔══════════════════════════════════════╗           │
│    🐙   ║   PRONTO PARA MERGULHAR?             ║   🐙      │
│   ~~~   ║                                      ║  ~~~      │
│    🐙   ║   Vamos criar algo incrível juntos   ║   🐙      │
│         ╚══════════════════════════════════════╝           │
│                                                            │
│         ┌────────────────────────────────┐                 │
│    🐙~~~│  Nome: _______________         │~~~🐙            │
│         │  Email: ______________         │                 │
│         │  Projeto: ____________         │                 │
│         │                                │                 │
│         │  [🐙 Enviar Mensagem]          │                 │
│         └────────────────────────────────┘                 │
│                                                            │
└────────────────────────────────────────────────────────────┘

Animação:
- Formulário é "abraçado" por tentáculos
- Focus em input: tentáculo mais próximo brilha
- Submit: tentáculos fazem "squeeze" de celebração
- Success: confetti de bolhas bioluminescentes
```

### Seção 8: FOOTER

```
┌────────────────────────────────────────────────────────────┐
│  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│
│                                                            │
│  [Logo]    Serviços | Sobre | Contato | Blog              │
│                                                            │
│  contato@octolabs.com.br                                   │
│  São Paulo, Brasil                                         │
│                                                            │
│  [Instagram] [LinkedIn] [GitHub] [WhatsApp]               │
│                                                            │
│  © 2025 Octolabs. Todos os direitos reservados.           │
│  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│
└────────────────────────────────────────────────────────────┘
```

---

## 📝 COPY OTIMIZADA

### Headlines

```
HERO:
"Desenvolvemos software que abraça seu negócio"
ou
"8 braços trabalhando no seu projeto"
ou
"Do conceito ao deploy, abraçamos cada detalhe"

SUBHEAD:
"Soluções digitais que envolvem seu negócio por completo.
Web, mobile, integrações - tudo com precisão cirúrgica e zero bugs."
```

### CTAs

```
Primário: "Iniciar Projeto" / "Vamos Conversar" / "Mergulhe Conosco"
Secundário: "Ver Portfólio" / "Conhecer Serviços"
Formulário: "Enviar Mensagem" / "Solicitar Orçamento"
```

### Microcopy

```
- Loading: "Emergindo das profundezas..."
- Form success: "Mensagem recebida! Em breve um tentáculo entrará em contato 🐙"
- Form error: "Ops! Algo deu errado nas profundezas. Tente novamente."
- Empty state: "Nenhum resultado encontrado nas águas"
```

---

## 🔍 SEO & PERFORMANCE

### Meta Tags

```html
<title>Octolabs | Desenvolvimento de Software em São Paulo</title>
<meta name="description" content="Desenvolvimento de software personalizado: aplicações web, mobile, integrações e consultoria tech. Soluções digitais que abraçam seu negócio por completo.">
<meta name="keywords" content="desenvolvimento software, aplicativo mobile, sistema web, react, next.js, são paulo, consultoria tech">

<!-- Open Graph -->
<meta property="og:title" content="Octolabs - Software que abraça seu negócio">
<meta property="og:description" content="Desenvolvimento web, mobile e integrações com qualidade e precisão.">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Octolabs - Desenvolvimento de Software">
<meta name="twitter:description" content="8 braços trabalhando no seu projeto. Zero bugs.">
```

### Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Octolabs",
  "description": "Desenvolvimento de software personalizado",
  "url": "https://octolabs.com.br",
  "logo": "https://octolabs.com.br/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-XX-XXXXX-XXXX",
    "contactType": "sales"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://instagram.com/octolabs",
    "https://linkedin.com/company/octolabs",
    "https://github.com/octolabs"
  ]
}
```

### Performance Checklist

```
□ Lazy load de imagens e animações pesadas
□ Preload de fonts críticas
□ Animações em GPU (transform, opacity)
□ Intersection Observer para trigger de animações
□ WebP/AVIF para imagens
□ Critical CSS inline
□ Defer scripts não críticos
□ Service Worker para cache
□ Lighthouse score > 90
```

---

## 📱 RESPONSIVIDADE

### Mobile Adaptations

```
HERO:
- Tentáculos simplificados (4 ao invés de 8)
- Partículas reduzidas
- Logo menor, headline em 2 linhas

SERVIÇOS:
- Cards em coluna única
- Animação de tentáculo simplificada ou removida
- Swipe horizontal opcional

FORMULÁRIO:
- Tentáculos apenas nas bordas top/bottom
- Campos full-width
- Teclado-friendly

GERAL:
- Reduzir/desabilitar parallax
- Cursor customizado desabilitado
- Animações mais sutis (prefers-reduced-motion)
```

---

## 🛠️ STACK TÉCNICO RECOMENDADO

```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS + CSS Variables
Animations: 
  - Framer Motion (React)
  - GSAP (animações complexas)
  - Lottie (micro-animações)
SVG Animations: SVG.js ou anime.js
3D (opcional): Three.js para background
State: React hooks (formulário)
Forms: React Hook Form + Zod
Analytics: Google Analytics 4 + Meta Pixel
Deploy: Vercel
```

---

## 🎬 PROMPT PARA DESENVOLVIMENTO

### Prompt Completo para Claude/AI

```
Crie uma Landing Page premium para a empresa "Octolabs" - uma agência de desenvolvimento de software.

CONCEITO VISUAL:
- Tema: "Oceano Profundo meets High-Tech"
- Cores: deep ocean (#0a0f1c), roxo vibrante (#8b5cf6), cyan bioluminescente (#06b6d4)
- Estética: dark mode, glass morphism sutil, efeitos de bioluminescência
- Diferencial: animações de polvo/tentáculos interativos

ANIMAÇÕES OBRIGATÓRIAS:
1. Background com partículas flutuantes (bolhas bioluminescentes)
2. Tentáculos SVG animados que emergem das bordas no hero
3. Cards de serviços que são "entregues" por tentáculos animados
4. Hover effects com glow e "ventosas" nos elementos interativos
5. Scroll progress indicator como tentáculo na lateral
6. Formulário "abraçado" por tentáculos que reagem ao input

SEÇÕES:
1. Hero (100vh) - Logo, headline "Desenvolvemos software que abraça seu negócio", CTA, stats flutuantes
2. Problema/Solução - Cards com problemas que são "resolvidos"
3. Serviços - 6 cards (Web, Mobile, E-commerce, Integrações, Consultoria, Suporte)
4. Processo - Timeline vertical com tentáculo conectando etapas
5. Sobre - Espaço para foto do fundador com moldura de tentáculos
6. Depoimentos - Cards flutuantes com efeito de água
7. CTA + Formulário - Form abraçado por tentáculos
8. Footer - Links e redes sociais

REQUISITOS TÉCNICOS:
- React/Next.js com Tailwind CSS
- Framer Motion para animações
- 100% responsivo
- Performance otimizada (lazy load, GPU animations)
- SEO completo com meta tags e schema markup
- Acessibilidade (ARIA labels, keyboard navigation)

ESPAÇOS RESERVADOS:
- [LOGO_PLACEHOLDER] para logo Octolabs
- [PHOTO_PLACEHOLDER] para foto do fundador
- [VIDEO_PLACEHOLDER] para possível vídeo de background

COPY:
- Tom: profissional mas criativo, confiante, com trocadilhos sutis de polvo/oceano
- CTAs: "Iniciar Projeto", "Mergulhe Conosco", "Vamos Conversar"
- Tagline: "8 braços. Zero bugs. Infinite possibilities."

INTERATIVIDADE:
- Cursor customizado com trail de "tinta"
- Hover effects elaborados em todos elementos clicáveis
- Scroll-triggered animations
- Formulário com validação e feedback visual

Crie o código completo, produção-ready, com comentários explicando as animações principais.
```

---

## 📊 MÉTRICAS DE SUCESSO

```
Conversão:
- Taxa de scroll até o formulário: > 40%
- Taxa de preenchimento do form: > 5%
- Bounce rate: < 40%
- Tempo na página: > 2 min

Engajamento:
- Interações com animações
- Clicks em CTAs
- Scroll depth

Performance:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Lighthouse > 90
```

---

## 🚀 PRÓXIMOS PASSOS

2. [x] Definir foto do fundador
3. [x] Criar/finalizar logo Octolabs
4. [ ] Desenvolver LP
5. [ ] Testar em múltiplos devices
6. [ ] Configurar analytics
7. [ ] Deploy em produção
8. [ ] Configurar Google Ads
9. [ ] Criar assets para Instagram

---

*Documento criado para Octolabs - Versão 1.0*