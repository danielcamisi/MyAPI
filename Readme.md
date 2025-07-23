# Instalei o prettier no projeto para formatação

# npm install --save-dev prettier

# Adicionei o Script para execução no package.json

# Agora para formatar o projeto inteiro, você so digita:

# npm run format

# Pronto =D

## Mudanças na estrutura do projeto

- **Padronização RESTful:**
- **Validação centralizada:**
  - Toda validação de dados de entrada é feita com Joi, separada no arquivo `validations/servValidations.js`.
  - O middleware de validação é aplicado apenas nas rotas que recebem dados do usuário (POST).
- **Tratamento de erros centralizado:**
  - Todos os erros, inclusive de validação, são tratados por um middleware global em `middlewares/servMiddlewares.js`.
- **Separação de responsabilidades:**
  - Controllers cuidam apenas da lógica de negócio.
  - Middlewares cuidam de validação e erros.
  - Rotas apenas direcionam as requisições.
- **Padronização de código:**
  - Adicionado Prettier.
