# 🐑 Rebanho - Portfólio Pessoal

Um site de portfólio responsivo e moderno criado com HTML, CSS e JavaScript puro.

## 📋 Características

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação intuitiva com menu hambúrguer
- ✅ 4 páginas principais: Home, Sobre, Projetos, Contato
- ✅ Formulário de contato funcional
- ✅ Animações suaves ao scroll
- ✅ Paleta de cores moderna (roxo e rosa)
- ✅ Código limpo e bem organizado
- ✅ Sem dependências externas (vanilla JavaScript)

## 🚀 Primeiros Passos

### Pré-requisitos
- Um navegador web moderno
- Um editor de código (VS Code recomendado)
- Git (opcional, para versionamento)

### Instalação Local

1. **Clone o repositório**
```bash
git clone https://github.com/luisqa2/Rebanho.git
cd Rebanho
```

2. **Abra o arquivo index.html**
   - Clique duplo em `index.html`, ou
   - Use um servidor local (recomendado):
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js (http-server)
     npx http-server
     ```
   - Acesse `http://localhost:8000` no navegador

## 📁 Estrutura do Projeto

```
Rebanho/
├── index.html          # Página inicial
├── sobre.html          # Página sobre você
├── projetos.html       # Seu portfólio de projetos
├── contato.html        # Formulário de contato
├── style.css           # Estilos globais
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🎨 Personalizando seu Site

### 1. **Trocar as Cores**
Abra `style.css` e modifique as variáveis:
```css
:root {
    --primary-color: #6366f1;    /* Roxo */
    --secondary-color: #ec4899;  /* Rosa */
    --dark-bg: #1f2937;
    --light-bg: #f9fafb;
}
```

### 2. **Atualizar Informações Pessoais**

**Em `index.html`:**
```html
<h1>Bem-vindo ao Rebanho</h1>  <!-- Mude o título -->
<p>Descubra meus projetos e experiências</p>  <!-- Mude a descrição -->
```

**Em `sobre.html`:**
```html
<h2>Quem sou eu?</h2>
<p>Atualize com sua biografia...</p>

<ul class="skills-list">
    <li>Sua Habilidade 1</li>
    <li>Sua Habilidade 2</li>
    <!-- Adicione suas habilidades -->
</ul>
```

**Em `projetos.html`:**
```html
<h3>Projeto Exemplo 1</h3>
<p>Descrição do seu projeto...</p>
<span class="tag">Tecnologia 1</span>
<span class="tag">Tecnologia 2</span>
```

**Em `contato.html`:**
```html
<p><a href="mailto:seu@email.com">seu@email.com</a></p>
<p><a href="tel:+5511999999999">(11) 99999-9999</a></p>
<p>São Paulo, SP - Brasil</p>
```

### 3. **Adicionar Foto de Perfil**
Substitua o placeholder em `sobre.html`:
```html
<!-- Remova: -->
<div class="placeholder-image">Sua Foto</div>

<!-- Adicione: -->
<img src="sua-foto.jpg" alt="Sua Foto" style="width: 300px; height: 300px; border-radius: 10px;">
```

### 4. **Atualizar Links Sociais**
Em todas as páginas, atualize os links do footer:
```html
<div class="social-links">
    <a href="https://github.com/seu-usuario" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/seu-usuario" target="_blank">LinkedIn</a>
    <a href="https://twitter.com/seu-usuario" target="_blank">Twitter</a>
</div>
```

## 🚀 Deploy (Hospedagem)

### GitHub Pages (Gratuito)

1. **Commit e push para GitHub:**
```bash
git add .
git commit -m "Inicializar site Rebanho"
git push origin main
```

2. **Ativar GitHub Pages:**
   - Vá para `Settings` do repositório
   - Procure por `Pages`
   - Selecione `Deploy from a branch`
   - Escolha branch `main`
   - Salve

3. **Seu site estará em:**
   ```
   https://luisqa2.github.io/Rebanho
   ```

### Outras Alternativas
- [Netlify](https://netlify.com) - Deploy automático com Git
- [Vercel](https://vercel.com) - Otimizado para aplicações web
- [000webhost](https://www.000webhost.com/) - Hospedagem gratuita

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** Menos de 768px

Menu hambúrguer aparece automaticamente em dispositivos menores.

## ⚙️ Funcionalidades JavaScript

- **Menu Mobile:** Menu hambúrguer com animações
- **Link Ativo:** Marca o link da página atual
- **Formulário de Contato:** Validação básica e feedback
- **Animações ao Scroll:** Elementos aparecem com animação
- **Scroll Suave:** Links âncora com scroll suavizado
- **Detecção de Dispositivo:** Identifica se é mobile

## 🔧 Troubleshooting

### O site não abre
- Certifique-se de que todos os arquivos estão no mesmo diretório
- Use um servidor local em vez de abrir o arquivo diretamente

### CSS não está funcionando
- Verifique se o caminho em `<link rel="stylesheet" href="style.css">` está correto
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### JavaScript não funciona
- Verifique se o arquivo `script.js` existe no mesmo diretório
- Abra o console do navegador (F12) para verificar erros

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript Info](https://javascript.info/)
- [Can I Use](https://caniuse.com/) - Compatibilidade de navegadores

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 💡 Próximos Passos

Depois de personalizar seu site:

1. ✅ Adicione seu conteúdo e fotos
2. ✅ Teste em diferentes dispositivos
3. ✅ Deploy no GitHub Pages ou outro serviço
4. ✅ Compartilhe seu portfólio!

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript**

Dúvidas? Abra uma issue ou entre em contato!
