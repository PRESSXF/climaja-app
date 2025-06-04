// Este arquivo pode ser substituído durante o build usando o `fileReplacements` array.
// `ng build` substitui `environment.ts` com `environment.prod.ts`.
// A lista de substituições de arquivos pode ser encontrada em `angular.json`.

export const environment = {
  production: false,
  openWeatherMapApiKey: '50493ba0aca663cf9a780f6bf65b6af69', // Chave da API OpenWeatherMap
  openWeatherMapUrl: 'https://api.openweathermap.org/data/2.5' // URL base da API
};

/*
 * Para facilitar a depuração em modo de desenvolvimento, você pode importar o seguinte arquivo
 * para ignorar frames de pilha de erro relacionados à zona.
 *
 * Este import deve ser comentado em produção porque terá um impacto negativo
 * no desempenho se um erro for lançado.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
