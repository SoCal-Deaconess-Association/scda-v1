// vite.config.ts
import react from "file:///C:/Users/Tristan%20Chilvers/Documents/SoCalDeoconessAssociation/scda-story/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Tristan%20Chilvers/Documents/SoCalDeoconessAssociation/scda-story/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: "/scda-story/",
  resolve: {
    alias: {
      "@api": "/src/api",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@contexts": "/src/contexts",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@slices": "/src/slices",
      "@models": "/src/models"
    }
  },
  assetsInclude: ["**/*.zip"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUcmlzdGFuIENoaWx2ZXJzXFxcXERvY3VtZW50c1xcXFxTb0NhbERlb2NvbmVzc0Fzc29jaWF0aW9uXFxcXHNjZGEtc3RvcnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFRyaXN0YW4gQ2hpbHZlcnNcXFxcRG9jdW1lbnRzXFxcXFNvQ2FsRGVvY29uZXNzQXNzb2NpYXRpb25cXFxcc2NkYS1zdG9yeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVHJpc3RhbiUyMENoaWx2ZXJzL0RvY3VtZW50cy9Tb0NhbERlb2NvbmVzc0Fzc29jaWF0aW9uL3NjZGEtc3Rvcnkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgYmFzZTogJy9zY2RhLXN0b3J5LycsXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0BhcGknOiAnL3NyYy9hcGknLFxyXG4gICAgICAnQGFzc2V0cyc6ICcvc3JjL2Fzc2V0cycsXHJcbiAgICAgICdAY29tcG9uZW50cyc6ICcvc3JjL2NvbXBvbmVudHMnLFxyXG4gICAgICAnQGNvbnRleHRzJzogJy9zcmMvY29udGV4dHMnLFxyXG4gICAgICAnQGhvb2tzJzogJy9zcmMvaG9va3MnLFxyXG4gICAgICAnQHBhZ2VzJzogJy9zcmMvcGFnZXMnLFxyXG4gICAgICAnQHNsaWNlcyc6ICcvc3JjL3NsaWNlcycsXHJcbiAgICAgICdAbW9kZWxzJzogJy9zcmMvbW9kZWxzJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouemlwJ10sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdaLE9BQU8sV0FBVztBQUMxYSxTQUFTLG9CQUFvQjtBQUk3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlLENBQUMsVUFBVTtBQUM1QixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
