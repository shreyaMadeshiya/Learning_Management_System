# LMS Frontend

### Setup instruction 

1. Clone the project

```
   git clone
```

2. Move into the directory

```
   cd client
```

3. Install dependencies

```
   npm i
```

4. Run the server

```
   npm run dev
```

### Setup instructions for Tailwind version 4

[Tailwind official instruction doc](https://tailwindcss.com/docs/installation/using-vite)

1. Install Tailwind and Vite plugin

```
   npm install tailwindcss @tailwindcss/vite
```

2. Add the following import in `vite.config.js`

```
   import tailwindcss from '@tailwindcss/vite';
```

3. Add plugin to the Vite plugins array in `vite.config.js`

```
   plugins: [tailwindcss()],
```

4. Add Tailwind import in `index.css`

```
  @import "tailwindcss";
```

5. Restart the dev server

```
  npm run dev
  
```

6. Add Daisyui import in `index.css`
``` 
   @plugin "daisyui"

```

### Adding plugins and dependencies

```
   npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort ESLint

1. Install ESLint and plugin

```
   npm install  eslint-plugin-simple-import-sort
```

2. Add the following to `.eslintrc.json`

```
   plugins: {
      "simple-import-sort" : simpleImportSort,
   },

```

3. Add the following to `.vscode/settings.json`

```
   {
      "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
      }
   }

```

4. To enable auto import sort on file save in vscode
   
   ~ Open `settings.json`
   
```

