import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  
import cesium from 'vite-plugin-cesium';//这个插件专们解决cesium的一些 css ，图片，json 啥的引入问题
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),cesium()],
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, './src')  
    }  
  }  
})



