# VMJM - Configuração e Checklist de Implementação

## 🔧 CONFIGURAÇÕES NECESSÁRIAS

### 1. DADOS DA EMPRESA
- [ ] WhatsApp: +55 (XX) XXXXX-XXXX
- [ ] Telefone: +55 (XX) XXXX-XXXX
- [ ] Email: contato@vmjmautomotivos.com.br
- [ ] Endereço: [Completo]
- [ ] Horário: [Dias e horas]
- [ ] Instagram: @vmjmautomotivos
- [ ] Facebook: vmjmautomotivos

### 2. IMAGENS NECESSÁRIAS

#### Hero Section
- **Arquivo**: `assets/images/placeholder-hero.jpg`
- **Dimensão**: 1920x1200px ou 1600x1000px
- **Descrição**: Fachada da oficina (foto horizontal, em destaque)
- **Tamanho máximo**: 300KB
- [ ] Imagem fornecida
- [ ] Imagem otimizada
- [ ] Imagem inserida

#### Sobre VMJM
- **Arquivo**: `assets/images/placeholder-sobre.jpg`
- **Dimensão**: 1000x800px
- **Descrição**: Equipe ou ambiente interno
- **Tamanho máximo**: 200KB
- [ ] Imagem fornecida
- [ ] Imagem otimizada
- [ ] Imagem inserida

#### Galeria Estrutura (5 imagens)
- **Arquivo**: `assets/images/placeholder-estrutura-1.jpg` até `placeholder-estrutura-5.jpg`
- **Dimensão**: 1000x1000px (quadrada)
- **Descrição**: Ambiente, serviços, equipamentos, fachada
- **Tamanho máximo**: 150KB cada
- [ ] 5 Imagens fornecidas
- [ ] Imagens otimizadas
- [ ] Imagens inseridas

### 3. LOGOS E ÍCONES

#### Logo Colorida
- **Arquivo**: `assets/icons/logo-vmjm.png`
- **Dimensão**: 200x50px (proporção mantida)
- **Fundo**: Transparente
- **Uso**: Header desktop e mobile
- [ ] Logo fornecida
- [ ] Logo otimizada
- [ ] Logo inserida

#### Logo Branca
- **Arquivo**: `assets/icons/logo-vmjm-white.png`
- **Dimensão**: 200x50px
- **Fundo**: Transparente
- **Uso**: Footer
- [ ] Logo branca fornecida
- [ ] Logo branca otimizada
- [ ] Logo branca inserida

#### Favicon
- **Arquivo**: `assets/icons/favicon.ico`
- **Dimensão**: 32x32px
- **Formato**: .ico
- [ ] Favicon fornecido
- [ ] Favicon inserido

#### Apple Touch Icon
- **Arquivo**: `assets/icons/apple-touch-icon.png`
- **Dimensão**: 180x180px
- **Formato**: .png
- [ ] Apple icon fornecido
- [ ] Apple icon inserido

### 4. AVALIAÇÕES

Formato padrão para cada avaliação:
```
Nome do Cliente
Nota: ★★★★★ (5 estrelas)
Comentário: "Texto da avaliação"
Fonte: Google
```

Avaliações provisórias estão no site. Substitua quando disponível.
- [ ] Avaliação 1 confirmada
- [ ] Avaliação 2 confirmada
- [ ] Avaliação 3 confirmada
- [ ] Mais avaliações coletadas

### 5. CONTEÚDO TEXTUAL

#### Hero Section
- [ ] Título: "Cuidado e confiança para manter seu veículo em movimento"
- [ ] Descrição: "Soluções em mecânica automotiva com estrutura, qualidade e compromisso em cada atendimento."
- [ ] Botões: "CONHEÇA NOSSOS SERVIÇOS" e "FALE COM NOSSA EQUIPE"

#### Sobre VMJM
- [ ] Título: "Uma estrutura preparada para cuidar do seu veículo"
- [ ] Descrição: [Texto sobre a empresa - 2-3 parágrafos]

#### Serviços
- [ ] Título Geral: "Soluções completas em mecânica automotiva"
- [ ] Descrição Geral: "Da manutenção preventiva aos cuidados com o funcionamento do veículo..."
- [ ] Serviços: [Lista completa quando disponível]

#### Estrutura
- [ ] Título: "Uma estrutura que faz a diferença"
- [ ] Descrição: [Sobre infraestrutura]

#### Diferenciais
- [ ] Título: "Mais do que manutenção. Compromisso com seu veículo."
- [ ] 4 pilares de diferenciais

## 📝 INSTRUÇÕES DE ATUALIZAÇÃO

### Alterar WhatsApp
1. Abra `index.html`
2. Procure por `55XXXXXXXXXXX` (5 ocorrências)
3. Substitua pelo número real: `5585XXXXXXXXX` (sem formatação)
4. Teste clicando nos botões WhatsApp

### Alterar Dados de Contato
1. Abra `index.html`
2. Seção "Contato e Localização"
3. Atualize:
   - Endereço
   - Telefone
   - WhatsApp (já feito acima)
   - Horário
   - Instagram

### Atualizar Mapa
1. Abra `index.html`
2. Procure por `<iframe` na seção contato
3. Substitua o `src` do embed do Google Maps:
   ```
   https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d[COORDENADAS]
   ```
4. Obtenha o novo código em google.com/maps

### Adicionar Novo Serviço
1. Abra `index.html`
2. Seção "Serviços"
3. Copie:
   ```html
   <div class="servico-item placeholder" data-service="2">
   ```
4. Remova a classe `placeholder`
5. Altere:
   - Número (02 → 03)
   - Título
   - Descrição
   - Link WhatsApp

### Substituir Imagens
1. Coloque nova imagem em `assets/images/`
2. Use nome compatível com placeholders
3. Otimize para web (máx 300KB)
4. Mantenha proporções originais

### Atualizar Avaliações
1. Abra `index.html`
2. Seção "Avaliações"
3. Substitua um card:
   ```html
   <div class="avaliacao-card">
       <div class="avaliacao-stars">
           <!-- 5x: <i class="fas fa-star"></i> -->
       </div>
       <p class="avaliacao-texto">"Seu comentário"</p>
       <p class="avaliacao-autor">Nome do Cliente</p>
       <span class="avaliacao-fonte">
           <i class="fab fa-google"></i> Google
       </span>
   </div>
   ```

## 🎨 CUSTOMIZAÇÕES CSS

### Alterar Cores
Abra `css/style.css` e procure por `:root`:
```css
:root {
    --color-primary: #FFD000;    /* Amarelo */
    --color-dark: #171717;       /* Preto */
    --color-white: #FFFFFF;      /* Branco */
    --color-light-gray: #F3F3F3; /* Cinza claro */
}
```

### Alterar Espaçamentos
Procure por `padding:` e `gap:` nos arquivos CSS

### Alterar Tipografia
Modifique no `<head>` do `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=[FONT_NAME]" rel="stylesheet">
```

## 🧪 TESTES

### Verificação Mobile
- [ ] Testar em iPhone (375px)
- [ ] Testar em Android (360px - 540px)
- [ ] Testar em Tablet (768px)
- [ ] Menu mobile funciona
- [ ] Imagens responsivas
- [ ] Botões acessíveis

### Verificação Desktop
- [ ] Layout correto em 1920x1080
- [ ] Navegação funciona
- [ ] Hover effects funcionam
- [ ] Carrossel responde bem

### Verificação de Links
- [ ] Todos os links internos funcionam
- [ ] WhatsApp abre corretamente
- [ ] Instagram abre em nova aba
- [ ] Telefone abre discagem

### Verificação de Performance
- [ ] PageSpeed Insights > 80
- [ ] Imagens otimizadas
- [ ] CSS minificado (opcional)
- [ ] JavaScript funciona sem erros

### Verificação de SEO
- [ ] Title e Meta Description preenchidos
- [ ] Open Graph configurado
- [ ] Favicon aparece na aba
- [ ] Mobile-friendly no Google Search Console

### Verificação de Acessibilidade
- [ ] Navegação por TAB funciona
- [ ] Contraste suficiente
- [ ] Imagens têm alt text
- [ ] Leitura por screen reader (testar)

## 🚀 DEPLOY

### Antes do Publish
- [ ] Todas as imagens substituídas
- [ ] Todos os dados atualizados
- [ ] Números WhatsApp corretos
- [ ] Links testados
- [ ] Mobile testado
- [ ] SEO completo

### Hosting Recomendado
- Vercel (melhor performance)
- Netlify (fácil deploy)
- GitHub Pages (gratuito)
- Seu servidor próprio

### Arquivos Para Upload
```
index.html
css/style.css
css/responsive.css
js/main.js
js/carousel.js
assets/images/* (todas as imagens)
assets/icons/* (todos os ícones)
```

### DNS e CNAME
- Apontardominio para o servidor
- Configurar SSL (HTTPS)

## 📊 ANALYTICS

Adicione Google Analytics:
1. Crie conta em google.com/analytics
2. Copie ID (GA-XXXXXXXXX)
3. Adicione no `<head>` do HTML:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXXXXXXX');
</script>
```

## 🔐 SEGURANÇA

- [ ] Remover informações sensíveis do código
- [ ] Usar HTTPS em produção
- [ ] Configurar CSP headers
- [ ] Manter dependências atualizadas
- [ ] Monitorar erros (opcional)

## 📞 SUPORTE

Para dúvidas ou problemas, consulte:
- README.md (documentação completa)
- Comments no código
- Documentação de cada seção

---

**Último update**: 2024  
**Responsável**: Equipe VMJM
