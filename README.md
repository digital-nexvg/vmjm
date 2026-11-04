# VMJM Serviços Automotivos - Site Institucional

Um website profissional, moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript puro para a empresa VMJM Serviços Automotivos.

## 📋 Características

- ✅ **Design Premium**: Identidade visual sofisticada com cores institucionais
- ✅ **100% Responsivo**: Funciona perfeitamente em celulares, tablets e desktops
- ✅ **Vanilla JavaScript**: Sem dependências de frameworks
- ✅ **Performance Otimizada**: Carregamento rápido e eficiente
- ✅ **SEO Completo**: Estrutura semântica e metadados
- ✅ **Acessibilidade**: Navegação por teclado e suporte a leitores de tela
- ✅ **Animações Elegantes**: Transições suaves e efeitos profissionais
- ✅ **Menu Mobile**: Navegação funcional e responsiva
- ✅ **Carrossel de Avaliações**: Componente interativo com controles
- ✅ **Integração WhatsApp**: Botões e links diretos

## 🎨 Identidade Visual

### Cores Institucionais
- **Amarelo Principal**: `#FFD000` - Chamadas e destaques estratégicos
- **Preto**: `#171717` - Sofisticação e força visual
- **Branco**: `#FFFFFF` - Fundo principal e contraste
- **Cinza Claro**: `#F3F3F3` - Seções alternadas
- **Cinza**: `#666666` - Textos secundários

### Tipografia
- **Display/Títulos**: Syne (Sans-serif, 600-800 weight)
- **Corpo/Conteúdo**: Inter (Sans-serif, 300-700 weight)

## 📁 Estrutura de Arquivos

```
vmjm-site/
├── index.html              # HTML principal
├── css/
│   ├── style.css           # Estilos principais
│   └── responsive.css      # Media queries e responsividade
├── js/
│   ├── main.js            # JavaScript principal
│   └── carousel.js        # Componente carrossel
├── assets/
│   ├── images/            # Imagens do site
│   │   ├── placeholder-hero.jpg
│   │   ├── placeholder-sobre.jpg
│   │   ├── placeholder-estrutura-1.jpg
│   │   ├── placeholder-estrutura-2.jpg
│   │   ├── placeholder-estrutura-3.jpg
│   │   ├── placeholder-estrutura-4.jpg
│   │   └── placeholder-estrutura-5.jpg
│   └── icons/             # Logo e ícones
│       ├── logo-vmjm.png
│       ├── logo-vmjm-white.png
│       ├── favicon.ico
│       └── apple-touch-icon.png
└── README.md              # Este arquivo
```

## 🚀 Implementação e Configuração

### 1. Substituir Placeholders de Imagens

Todas as imagens devem ser colocadas em `assets/images/`:

- `placeholder-hero.jpg` → Fachada da oficina (horizontal, 1920x1200px recomendado)
- `placeholder-sobre.jpg` → Foto da equipe/ambiente (1000x800px)
- `placeholder-estrutura-*.jpg` → Fotos internas (1000x1000px)

**Dica**: Use imagens otimizadas para web (máx 500KB por imagem)

### 2. Configurar Logos

Coloque os logos em `assets/icons/`:

- `logo-vmjm.png` → Logo em cores (50px altura)
- `logo-vmjm-white.png` → Logo branca para footer (50px altura)

### 3. Atualizar Dados da Empresa

No arquivo `index.html`, procure e substitua:

```html
<!-- Números de WhatsApp -->
https://wa.me/55XXXXXXXXXXX
→ https://wa.me/55XXXXXXXXXXX (substitua com o real)

<!-- Endereço completo -->
[Endereço completo a confirmar]
→ Rua ABC, 123, Bairro, Cidade - Estado

<!-- Telefone -->
+55 (XX) XXXX-XXXX
→ +55 (00) 1234-5678

<!-- Horário de Funcionamento -->
[Horários a confirmar]
→ Seg-Sex: 8h-18h | Sábado: 8h-13h

<!-- Instagram -->
@vmjmautomotivos
→ Seu Instagram real
```

### 4. Configurar WhatsApp no JavaScript

No arquivo `js/main.js`, altere:

```javascript
const SITE_CONFIG = {
    whatsappNumber: '+55XXXXXXXXXXX', // Atualizar aqui
    // ...
};
```

### 5. Meta Tags e SEO

Atualize no `index.html` (seção `<head>`):

```html
<meta property="og:image" content="/assets/images/hero-vmjm.jpg">
<meta property="og:url" content="https://vmjmautomotivos.com.br">
```

## 🔧 Seções do Site

### Hero Section
Seção de impacto visual com:
- Título principal e descrição
- Dois botões de ação
- Imagem grande da fachada
- Elementos gráficos decorativos

### Sobre a VMJM
- Apresentação da empresa
- Foto de apoio
- Estrutura e valores

### Serviços
- Serviço principal: Mecânica em Geral
- Estrutura preparada para adicionar novos serviços
- Design não genérico com números e descrições

### Nossa Estrutura
- Galeria editorial com imagens em tamanhos diferentes
- Espaços reservados para novas fotos
- Layout responsivo

### Diferenciais
Seção com 4 pilares:
- Estrutura Ampla
- Atendimento Profissional
- Qualidade Garantida
- Atenção Especializada

### Avaliações
- Carrossel interativo
- Estrelas e comentários
- Navegação por setas, indicadores e teclado
- Suporte a touch (swipe)

### Chamada para Ação (CTA)
- Fundo destacado
- Botão WhatsApp direto

### Contato e Localização
- Informações completas
- Google Maps integrado
- Links de contato

### Footer
- Logo e descrição
- Links de navegação
- Redes sociais
- Informações de contato

## 🎯 Funcionalidades JavaScript

### Menu Mobile
- Toggle smoothly com clique
- Fecha ao selecionar link
- Responsivo e acessível

### Smooth Scroll
- Navegação suave entre seções
- Ajusta altura do header
- Suporta links internos

### Animações ao Scroll
- Fade-in ao entrar na viewport
- Efeito cascata em elementos
- Usa Intersection Observer

### Carrossel de Avaliações
- Navegação por setas
- Indicadores de posição
- Auto-play com pausa ao hover
- Swipe para mobile
- Navegação por teclado

### WhatsApp Flutuante
- Botão fixo no canto inferior
- Abre conversa pré-preenchida
- Desaparece em impressão

## 📱 Breakpoints Responsivos

- **Desktop**: > 1024px (3 colunas, navegação desktop)
- **Tablet**: 768px - 1024px (2 colunas)
- **Mobile**: 480px - 768px (1 coluna, menu toggle)
- **Mobile Small**: < 480px (ajustes finos)

## ♿ Acessibilidade

- ✅ Hierarquia de headings correta (H1 → H2 → H3)
- ✅ Skip link para conteúdo principal
- ✅ Navegação por teclado completa
- ✅ Aria-labels em botões
- ✅ Contraste de cores adequado
- ✅ Textos alternativos em imagens
- ✅ Focus visível em elementos interativos

## 🔍 SEO

- ✅ Title único e descritivo
- ✅ Meta description (160 caracteres)
- ✅ Open Graph completo
- ✅ Estrutura semântica HTML5
- ✅ Imagens com alt text
- ✅ URLs amigáveis
- ✅ Mobile-first indexing
- ✅ Schema.org (pronto para dados locais)

## ⚡ Performance

- ✅ CSS crítico inline ready
- ✅ Imagens otimizadas
- ✅ JavaScript assíncrono onde possível
- ✅ Sem dependências externas (exceto fonts)
- ✅ Compressão GZIP pronta
- ✅ Cache-friendly

## 🛠️ Customizações Futuras

### Adicionar Novos Serviços
1. Abra `index.html`
2. Procure a seção "Serviços"
3. Copie a estrutura de um `.servico-item`
4. Altere número, título e descrição
5. Remova a classe `placeholder`

### Atualizar Avaliações
1. Mantenha o conteúdo provisório inicial
2. Substitua quando as reais estiverem disponíveis
3. Formato: Nome, Nota (5 estrelas), Comentário

### Adicionar Fotos Galeria
1. Coloque imagens em `assets/images/`
2. Substitua `placeholder-estrutura-*.jpg`
3. Mantenha proporções (1000x1000px ideal)

### Integrar Analytics
Adicione Google Analytics no `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 📞 Contato e Suporte

Para ajustes no design ou funcionalidades específicas, consulte os comments no código ou abra uma issue.

## 📄 Licença

Este projeto foi desenvolvido especificamente para VMJM Serviços Automotivos.

---

**Versão**: 1.0  
**Data**: 2024  
**Atualizado**: Dezembro 2024
