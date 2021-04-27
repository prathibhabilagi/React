# TYPESCRIPT

## Install
  -> npm install -g typescript 
  <br/>
  -> npm i tsc

## Compile (typescript to javascript)
 => Single file :
    -> tsc filename
    <br/>
 => Mutiple files in a folder (create tsconfig.json file) :
    -> tsc -w
 
## tsconfig.json
  -> "rootDir": "./src" => contain .ts (typescript) file.
  <br/>
  -> "outDir": "./dist" => contain generted .js (javascript) file after compilation.
  <br/>
  -> "noEmitOnError": true => If any compiler error in typescript file it doesn’t generate javascript file.
  <br/>
  -> "target": "es6" => Typescript file is converted into es6 synatx js file.
 
  ### Create tsconfig.json
    -> tsc --init
    
## Run typescript file
  -> ts-node filename.ts
 
 
