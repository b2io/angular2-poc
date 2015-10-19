import {bootstrap} from 'angular2/angular2';

import {FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS} from 'angular2/angular2'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {App} from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our services/providers into Angular's dependency injection
 */
bootstrap(
    App,
    [
        FORM_PROVIDERS,
        ELEMENT_PROBE_PROVIDERS,
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS
    ]
);