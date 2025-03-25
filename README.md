# 📖 Guia de Configuração do Design System

Este documento fornece um passo a passo detalhado para configurar um projeto de Design System do zero, incluindo a instalação de dependências e a configuração do ambiente.

---

## 📁 Criando a Estrutura Básica

### 1️⃣ Inicialização do Projeto
O primeiro passo é criar um arquivo `package.json`, que armazenará informações sobre o projeto e suas dependências.

Execute o seguinte comando para gerar automaticamente um `package.json` com configurações padrão:

```sh
npm init -y
```

---

### 2️⃣ Instalação do TypeScript

O TypeScript é uma ferramenta essencial para um Design System, pois fornece tipagem estática e maior segurança no código. Para instalá-lo como dependência de desenvolvimento, use:

```sh
npm i typescript -D
```

---

### 3️⃣ Configuração do TypeScript

Agora, precisamos configurar o TypeScript. Para isso, gere um arquivo `tsconfig.json` com configurações padrão:

```sh
npx tsc --init
```

Para testar se a compilação de arquivos TypeScript está funcionando corretamente, utilize:

```sh
npx tsc
```

Isso compilará os arquivos `.tsx` e `.mjs` dentro do projeto.

---

### 4️⃣ Instalando o Bundler (Tsup)

O `tsup` é uma ferramenta leve e eficiente para empacotamento de arquivos TypeScript. Ele gera código nos formatos `ESM` e `CJS`, além de criar automaticamente os arquivos de definição `.d.ts`.

Instale o `tsup` com:

```sh
npm i tsup -D
```

---

### 5️⃣ Adicionando Scripts ao `package.json`

Agora, adicionamos scripts no `package.json` para facilitar a execução do bundler:

```json
"scripts": {
  "build": "tsup src/index.ts --format esm,cjs --dts"
}
```

Este comando criará a pasta `dist/` contendo os arquivos gerados a partir do código TypeScript.

---

## ⚙️ Configurando o TypeScript

Para garantir que o TypeScript funcione corretamente no projeto, utilize as seguintes configurações no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "node",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true,
    "jsx": "react-jsx",
    "lib": ["dom", "ES2015"],
    "module": "ESNext",
    "target": "es6"
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

Isso garante compatibilidade com React e ECMAScript moderno.

---

## 🛠 Instalação de Dependências

Como queremos evitar que as dependências do Design System sejam duplicadas no projeto final, devemos instalá-las como `devDependencies`:

```sh
npm i react @types/react @types/react-dom -D
```

Isso impede que o React seja incluído na build final do Design System, evitando conflitos com os projetos que utilizam a biblioteca.

---

## 🔧 Atualização dos Scripts no `package.json`

Para garantir que o `tsup` exclua corretamente o React da build e facilite o desenvolvimento, atualizamos os scripts no `package.json`:

```json
"scripts": {
  "build": "tsup src/index.ts --format esm,cjs --dts --external react",
  "dev": "tsup src/index.ts --format esm,cjs --dts --external react --watch"
}
```

Isso garante que a biblioteca seja gerada corretamente sem incluir dependências desnecessárias na build.

---

## 🔧 Instalação e Configuração do Changeset

O `changeset` é uma ferramenta para gerenciar versões e changelogs de pacotes. Para instalá-lo, utilize:

```sh
npm i @changesets/cli -D
```

Inicialize o sistema de controle de versões:

```sh
npx changeset init
```

Isso criará a pasta `.changeset/`, onde ficarão armazenadas as alterações feitas no projeto.

---

## 🚀 Deploy do Pacote no npm

No arquivo package.json, é necessário indicar quais arquivos serão usados no build final. Adicione as seguintes entradas para garantir que o pacote tenha uma versão adequada para ambientes CommonJS e ES Modules:

```sh
{
  "main": "dist/index.js",
  "module": "dist/index.mjs"
}
```
> "main" aponta para o arquivo gerado no formato CommonJS (.js), usado em ambientes Node.js mais antigos ou projetos que não suportam ES Modules.

> "module" aponta para o arquivo gerado no formato ES Module (.mjs), ideal para projetos que utilizam a sintaxe import/export nativa.

<br>

O `changeset` facilita a publicação de novas versões do Design System no npm. O fluxo de publicação segue os passos:

1. Crie um novo registro de alteração:

   ```sh
   npm run changeset
   ```

   Isso criará um arquivo dentro da pasta `.changeset/` com um resumo das alterações feitas.

2. Atualize a versão do pacote e gere o changelog:

   ```sh
   npm run version-packages
   ```

   Esse comando ajusta a versão do `package.json` e atualiza o changelog do projeto.

3. Publique a nova versão no npm:

   ```sh
   npm run release
   ```

   O pacote será publicado de acordo com a versão especificada.

---

Com esses passos, seu Design System estará configurado e pronto para uso! 🚀

