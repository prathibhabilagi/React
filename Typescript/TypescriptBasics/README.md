# TYPESCRIPT

## Install
  -> npm install -g typescript 
  -> npm i tsc

## Compile (typescript to javascript)
 => Single file :
    -> tsc filename
    <br/>
 => Mutiple files in a folder (create tsconfig.json file) :
    -> tsc -w
 
## tsconfig.json
  -> "rootDir": "./src" => contain .ts (typescript) file.
  -> "outDir": "./dist" => contain generted .js (javascript) file after compilation.
  -> "noEmitOnError": true => If any compiler error in typescript file it doesn’t generate javascript file.
  -> "target": "es6" => Typescript file is converted into es6 synatx js file.
 
  ### Create tsconfig.json
    -> tsc --init
 
 
