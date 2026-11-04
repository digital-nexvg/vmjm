# GUIA RÁPIDO - VMJM SERVIÇOS AUTOMOTIVOS

## ⚡ Comece Aqui

### 1️⃣ Abra o Projeto
```
Pasta: C:\Users\vFrot\OneDrive\portifolio\vmjm
Arquivo principal: index.html
```

### 2️⃣ Visualize o Site
- Abra `index.html` em qualquer navegador
- Ou abra `VERIFICACAO.html` para ver status de implementação

### 3️⃣ Atualize os Dados Críticos (5 minutos)

#### WhatsApp - 4 lugares para atualizar:
1. **index.html** → Procure por `55XXXXXXXXXXX` (mude para seu número com +55)
2. **js/main.js** → Procure por `SITE_CONFIG.whatsappNumber`

**Exemplo:**
```
55XXXXXXXXXXX → 5585999999999 (sem formatação)
```

#### Endereço:
```html
[Endereço completo a confirmar]
→ Rua/Av. Nome, Nº, Bairro, Cidade - Estado
```

#### Telefone:
```html
+55 (XX) XXXX-XXXX
→ +55 (85) 3333-4444
```

#### Horário:
```html
[Horários a confirmar]
→ Seg-Sex: 08:00 - 18:00 | Sab: 08:00 - 13:00
```

#### Instagram:
```html
https://instagram.com/vmjmautomotivos
→ https://instagram.com/seu_instagram_real
```

## 📁 Estrutura de Arquivos

### Arquivos Principais
```
index.html              ← Site principal
css/style.css          ← Estilos (design)
css/responsive.css     ← Estilos mobile
js/main.js            ← Funcionalidades
js/carousel.js        ← Carrossel avaliações
```

### Imagens (substitua por reais)
```
assets/images/placeholder-hero.svg          ← Fachada
assets/images/placeholder-sobre.svg         ← Equipe
assets/images/placeholder-estrutura-*.svg   ← Ambiente (5)
assets/icons/logo-vmjm.svg                  ← Logo colorida
assets/icons/logo-vmjm-white.svg            ← Logo branca
assets/icons/favicon.svg                    ← Icon aba
```

### Documentação
```
README.md              ← Documentação completa
CONFIGURACAO.md        ← Checklist e detalhes
VERIFICACAO.html       ← Página de status
GUIA_RAPIDO.md        ← Este arquivo
```

## 🎨 Substitua Imagens Facilmente

### Formato Correto

**Hero (Fachada):**
- Nome: `placeholder-hero.svg`
- Tamanho recomendado: 1920x1200px
- Máximo: 300KB
- Tipo: JPG ou WebP

**Sobre (Equipe/Ambiente):**
- Nome: `placeholder-sobre.svg`
- Tamanho: 1000x800px
- Máximo: 200KB

**Estrutura (5 fotos):**
- Nomes: `placeholder-estrutura-1.svg` até `5.svg`
- Tamanho: 1000x1000px (quadrada)
- Máximo: 150KB cada

**Logos:**
- Colorida: `logo-vmjm.svg` (50px altura)
- Branca: `logo-vmjm-white.svg` (50px altura)

### Substituir Imagens
1. Coloque nova imagem em `assets/images/`
2. Nomeie como o placeholder (ex: `placeholder-hero.jpg`)
3. Mantenha o nome **exatamente igual**
4. HTML carrega automaticamente

## 🚀 Teste Tudo

### Mobile
- [ ] Abra em celular
- [ ] Menu abre/fecha
- [ ] Scroll funciona
- [ ] Botões são apertáveis
- [ ] Carrossel desliza

### Desktop
- [ ] Navegação responde
- [ ] Hover em botões
- [ ] Imagens carregam
- [ ] Sem erros no console

### Links
- [ ] WhatsApp abre
- [ ] Instagram abre
- [ ] Smooth scroll funciona
- [ ] Seções navegáveis

## 📝 Adicione Novo Serviço

1. Abra `index.html`
2. Procure seção "Serviços"
3. Copie bloco:
```html
<div class="servico-item placeholder" data-service="2">
    <div class="servico-number">02</div>
    <h3>Próximo Serviço</h3>
    <p>Espaço reservado...</p>
</div>
```
4. Cole abaixo e:
   - Remova `placeholder`
   - Mude número: 02 → 03
   - Adicione título
   - Adicione descrição
   - Atualize link WhatsApp

## 📊 Seções do Site

### ✓ Implementadas
- [x] Header com navegação
- [x] Hero impactante
- [x] Sobre empresa
- [x] Serviços
- [x] Galeria estrutura
- [x] Diferenciais
- [x] Carrossel avaliações
- [x] Chamada ação
- [x] Contato completo
- [x] Footer profissional

### ⚠️ Aguardando Dados
- [ ] Imagens reais (fachada, ambiente, fotos)
- [ ] Logos oficiais
- [ ] Avaliações de clientes
- [ ] Informações completas da empresa
- [ ] Dados de contato confirmados

## 🎯 Checklist Final

Antes de publicar:
- [ ] WhatsApp atualizado
- [ ] Telefone/email corretos
- [ ] Endereço completo
- [ ] Horário correto
- [ ] Redes sociais linkadas
- [ ] Logo colorida inserida
- [ ] Logo branca inserida
- [ ] Fachada inserida
- [ ] Foto equipe inserida
- [ ] 5 fotos estrutura inseridas
- [ ] Avaliações reais adicionadas
- [ ] Serviços completos adicionados
- [ ] Descrições preenchidas
- [ ] Google Maps configurado
- [ ] Favicon personalizado
- [ ] Testado em mobile
- [ ] Testado em desktop
- [ ] Todos links funcionando

## 🔧 Encontrar e Substituir

### WhatsApp (4 lugares)
**Procure por:** `55XXXXXXXXXXX`
**Substitua por:** `5585999999999` (seu número)

**Onde:**
1. `index.html` - linha ~67 (hero botão)
2. `index.html` - linha ~93 (mobile menu)
3. `index.html` - linha ~129 (serviços)
4. `js/main.js` - linha ~33 (config)

### Email
**Procure por:** `contato@vmjmautomotivos.com.br`
**Onde:** `index.html` linha ~397

### Redes Sociais
**Instagram:** `instagram.com/vmjmautomotivos`
**Facebook:** `facebook.com/vmjmautomotivos`

## 💡 Dicas Profissionais

### Imagens
- Use imagens em JPG/WebP (mais leves)
- Comprima em tinypng.com antes
- Use dimensões exatas recomendadas
- Sempre backup original

### Cores
Se quiser ajustar cores (não recomendado):
```css
/* Em css/style.css, procure por :root */
--color-primary: #FFD000;  /* Amarelo */
--color-dark: #171717;     /* Preto */
```

### Fonte
As fontes carregam do Google Fonts (Inter e Syne).
Sem internet, usará fallbacks do sistema.

### Performance
- Imagens carregam com Lazy Load
- CSS crítico inline-ready
- JS é vanilla (leve)
- Sem dependências externas

## ⚙️ Configurações Avançadas

### Google Analytics
Adicione no `<head>` do `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-ID');
</script>
```

### Google Maps
Na seção contato, altere o `src`:
```html
<iframe src="https://www.google.com/maps/embed?pb=[SUAS_COORDENADAS]">
```
Obtenha em: google.com/maps → Seu local → Compartilhar → Embed

## 📞 Suporte Rápido

### Problema: Imagens não aparecem
- Verifique o caminho em `assets/images/`
- Teste renomear com underscore: `placeholder_hero.jpg`

### Problema: WhatsApp não abre
- Verifique formato: `5585999999999` (15 dígitos com +55)
- Teste link direto: `https://wa.me/5585999999999`

### Problema: Menu mobile não funciona
- Verifique console (F12)
- Limpe cache (Ctrl+Shift+Delete)

### Problema: Estilos estranhos
- Limpe cache do navegador
- Force reload (Ctrl+F5)

## 🎓 Documentação Completa

Para mais detalhes, consulte:
- **README.md** - Documentação técnica completa
- **CONFIGURACAO.md** - Checklist detalhado
- **Comments no código** - Explicações inline

---

**Versão**: 1.0  
**Última atualização**: 2024  
**Status**: ✓ Pronto para uso
