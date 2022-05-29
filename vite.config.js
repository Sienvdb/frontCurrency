// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'login.html'),
        nested: resolve(__dirname, 'signup.html'),
        nested: resolve(__dirname, 'transfer.html'),
        nested: resolve(__dirname, 'transaction.html'),
        nested: resolve(__dirname, 'leaderboard.html')
      }
    }
  }
})