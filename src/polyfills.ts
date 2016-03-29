// Polyfills
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)

// import 'ie-shim'; // Internet Explorer

//import 'es6-shim';
//import 'es6-promise';
//import 'es7-reflect-metadata';

// Prefer `CoreJS` over the polyfills commented out above
import 'core-js';
import 'zone.js';
//import 'zone.js/dist/zone-microtask'; Angular 2 beta.10 problem

if ('production' === ENV) {
  // Production


} else {
  // Development

  Error.stackTraceLimit = Infinity;

  require('zone.js/dist/long-stack-trace-zone');

}
