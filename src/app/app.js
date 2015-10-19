import {Component} from 'angular2/angular2';
import {EventComponent} from './components/event/event';

@Component({
    selector: 'app',
    directives: [EventComponent],
    template: '<event-component></event-component>'
})
export class App {
    constructor() {
    }
}
