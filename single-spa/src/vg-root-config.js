import { registerApplication, start } from "single-spa";

// Registra os micro-frontends
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@vg/navbar",
  app: () => System.import("@vg/navbar"),
  activeWhen: ["/"]
});

// trabalha com os micro-frontends registrados
start({
  urlRerouteOnly: true,
});
