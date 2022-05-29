// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        singup: resolve(__dirname, 'signup.html'),
        transfer: resolve(__dirname, 'transfer.html'),
        transaction: resolve(__dirname, 'transaction.html'),
        leaderboard: resolve(__dirname, 'leaderboard.html')
      }
    }
  }
})