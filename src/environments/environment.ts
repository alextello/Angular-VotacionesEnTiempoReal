// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/firegraficos/us-central1',
  firebaseConfig: {
    apiKey: 'AIzaSyAFCxit7KeGlkjVsi5fRZIkGyNOQmll7A4',
    authDomain: 'firegraficos.firebaseapp.com',
    databaseURL: 'https://firegraficos.firebaseio.com',
    projectId: 'firegraficos',
    storageBucket: 'firegraficos.appspot.com',
    messagingSenderId: '122083205098',
    appId: '1:122083205098:web:2743f8e0281641d5e79c93',
    measurementId: 'G-4VNK04RJ8X',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
