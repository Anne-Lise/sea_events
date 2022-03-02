import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
App = express();
App.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 3000;
App.listen(port);
