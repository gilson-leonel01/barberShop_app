# ✂️ Barbershop App - Gestão Completa para Barbearias

![Barbershop App](https://)

## 📌 Visão Geral

**Barbershop App** é um aplicativo móvel desenvolvido em **React Native (TypeScript/JavaScript)** para otimizar a gestão de barbearias. Com uma interface intuitiva, permite gerenciar clientes, barbeiros, agendamentos e finanças, integrando Firebase e React Navigation para uma experiência fluida e eficiente.

## 🚀 Executando o Projeto

Siga as instruções abaixo para configurar e rodar o projeto localmente.

### 1️⃣ Clonando o Repositório

```sh
git clone https://github.com/gilson-leonel01/barberShop_app.git
cd barberShop_app
```

### 2️⃣ Configuração do Ambiente

#### 📌 Pré-requisitos:
- Node.js instalado (versão 16+ recomendada).
- Yarn ou npm como gerenciador de pacotes.
- Firebase configurado (para autenticação e banco de dados).
- Emulador Android/iOS ou dispositivo físico para testes.
- Criar um arquivo `.env` com as credenciais do Firebase.

#### 📌 Configuração:

1. Instalar as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```
2. Configurar o Firebase:
   - Adicione as credenciais do Firebase no arquivo `.env` (ex.: `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, etc.).
3. Iniciar o Metro Bundler:
   ```sh
   npm start
   # ou
   yarn start
   ```
4. Rodar o aplicativo no emulador ou dispositivo:
   ```sh
   npm run android
   # ou
   npm run ios
   ```

A aplicação estará disponível no emulador ou dispositivo conectado.

## 📝 Funcionalidades

- 📌 Cadastro e gerenciamento de clientes e barbeiros.
- 📌 Agendamento de cortes com integração de calendário.
- 📌 Gestão financeira (registro de pagamentos e relatórios).
- 📌 Notificações para lembretes de agendamentos.
- 📌 Autenticação de usuários via Firebase.

## 🛠️ Tecnologias Utilizadas

### 🔹 Frontend:
- React Native
- TypeScript/JavaScript
- React Navigation
- Firebase (Authentication, Firestore)
- React Native Calendars
- Styled Components
- React Native Vector Icons

### 🔹 Backend:
- Firebase (Firestore para banco de dados, Authentication para login)

## 📌 Links Úteis

- [Documentação do React Native](https://reactnative.dev/docs)
- [Firebase](https://firebase.google.com/docs)
- [React Navigation](https://reactnavigation.org/docs)
- [React Native Calendars](https://github.com/wix/react-native-calendars)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b minha-feature`).
3. Faça as alterações e commite (`git commit -m 'Minha nova feature'`).
4. Envie um pull request.

---

Desenvolvido com 💙 por [Gilson Leonel a.k.a G!](https://github.com/gilson-leonel01)
