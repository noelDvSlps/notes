[GO BACK](../index.md)

# TYPESCRIPT-IFY JS file

## TODO

1. ### Install Typescript

   > npm i --save-dev typescript

2. ### Install express types

   > npm i @types/express

3. ### Initialize Typescript

   > npx tsc --init

   this command will create tsconfig.json

4. ### Change require to import express

   before:

   ```javascript
   const express = require("express");
   ```

   after:

   ```javascript
   import express from "express";
   ```

5. ### Make sure app.ts is in SRC folder

6. ### Modify tsconfig.json

   ```javascript
   {
       sourceMap: true,
       "lib": ["ESnext", "dom"],
        "outDir": "./build",
   }
   ```

7. ### Convert ts to js and run js

   > npx tsc

   > node build/app.js

8. ### Install ts-node

   > npm i --save-dev ts-node

   to run:

   > npx ts-node src/app.ts

9. ### nodemon for ts

   -create nodemon.json

   -inside the file

   ```javascript
   {
    "watch": ["src"],
    "ext": "ts",
    "exec": "ts-node ./src/app.ts"
   }

   ```

10. ### Run nodemon for ts

    > npx nodemon

```

```
