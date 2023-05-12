import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; //setting up the absolute path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //setting up the absolute path
  resolve: {
    //Once it sees "@" it starts looking for the file from the src folder
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
