// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'signup.html'),
        transfer: resolve(__dirname, 'transfer.html'),
        transactions: resolve(__dirname, 'transactions.html')
      }
    }
  }
})