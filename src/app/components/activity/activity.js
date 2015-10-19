import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {} from 'angular2/angular2';

@Component({
    directives: [CORE_DIRECTIVES],
    properties: ['activity'],
    selector: 'activity',
    templateUrl: 'app/components/activity/activity.html'
})
export class Activity {
    constructor() {
    }
}