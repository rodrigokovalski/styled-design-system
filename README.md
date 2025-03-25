# Configuração do Design system

Este guia descreve os passos para configurar um projeto de design system do zero, incluindo a instalação de dependências e a configuração do ambiente.

---

## 📁 Criando Estrutura Básica


### 1️⃣ Inicialização do Projeto
Crie um arquivo `package.json` com configurações padrão:
```sh
npm init -y
```

### 2️⃣ Instalação do TypeScript
Adicione o TypeScript como dependência de desenvolvimento:
```sh
npm i typescript -D
```

### 3️⃣ Configuração do TypeScript
Gere um arquivo `tsconfig.json` com configurações padrão:
```sh
npx tsc --init
```

Para testar a compilação dos arquivos `.tsx` e `.mjs`, execute:
```sh
npx tsc
```

### 4️⃣ Instalando o Bundler (Tsup)
O `tsup` é uma ferramenta de empacotamento que converte TypeScript em diferentes formatos de JavaScript, incluindo a geração de arquivos de definição `.d.ts`:
```sh
npm i tsup -D
```

### 5️⃣ Adicionando Scripts ao `package.json`
Para rodar o `tsup` automaticamente nos modos de build e desenvolvimento, adicione os seguintes scripts ao `package.json`:
```json
"scripts": {
  "build": "tsup src/index.ts --format esm,cjs --dts"
}
```

Isso criará a pasta `dist/` contendo os arquivos gerados.

---

## ⚙️ Configurando o TypeScript

Copie e utilize as configurações do arquivo `tsconfig.json` deste projeto:

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
    "lib": [
      "dom",
      "ES2015"
    ],
    "module": "ESNext",
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "src"
  ]
}
```

---