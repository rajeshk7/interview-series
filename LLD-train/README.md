# LLDTraining

To run TypeScript code in your project, follow these steps:

### Step-by-Step Instructions
1. Install TypeScript: Ensure you have TypeScript installed globally. If not, you can install it using npm:
```
npm install -g typescript
```
2. Compile TypeScript to JavaScript: Use the TypeScript compiler (tsc) to compile your TypeScript files to JavaScript. Navigate to your project directory and run:
```
tsc
```
This will compile all .ts files in your project according to the tsconfig.json configuration.
3. Run the Compiled JavaScript: After compiling, you can run the resulting JavaScript files using Node.js. For example, if your entry point is TicTacToeGame.js, you can run:
```
node FileName.js
```

### Example Commands
Assuming your entry point is TicTacToeGame.ts:

Compile the TypeScript file:

```
node TicTacToeGame.ts
```

Run the compiled JavaScript file:

```
node TicTacToeGame.js
```

### Running Directly with ts-node
Alternatively, you can use ts-node to run TypeScript files directly without needing to compile them first:

1. Install `ts-node`:
```
npm install -g ts-node
```

2. Run the TypeScript file directly:
```
ts-node TicTacToeGame.ts
```

This approach is convenient for development and testing purposes.

### Summary
- Install TypeScript: `npm install -g typescript`
- Compile TypeScript: `tsc`
- Run JavaScript: `node <compiled-file>.js`
- Optional (ts-node): `npm install -g ts-node and ts-node <file>.ts`
- These steps will help you compile and run your TypeScript code effectively.
