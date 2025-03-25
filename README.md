## Criando estrutura básica

Inicia o projeto com um arquivo package.json com configurações iniciais
> npm init -y

Instala como dependencia de desenvolvimento o typescript
> npm i typescript -D

Cria um arquivo de tsconfig.json com configurações básicas
> npx tsc --init

(Comando para testar a criação dos nossos arquivos jsx e mjs)
> npx tsc

Instalar ferramenta de bundle do nosso typescript. Converte nosso typescript para vários tipos de javascript. E também cria arquivos de definição dts.
> npm i tsup -D

Adicionar os scripts aos package.json, que irão rodar o tsup pra gente no build e no dev. Cria um arquivo dist.
> "build": "tsup src/index.ts --format esm,cjs --dts"

## Configurando typescript

> tsconfig.json com pre-configurações [ COPIAR AS DEFINIÇÕES DESSE PROJETO ]