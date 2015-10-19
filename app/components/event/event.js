import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Activity} from '../activity/activity';

@Component({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, Activity],
    selector: 'event-component',
    styleUrls: ['app/components/event/event.css'],
    templateUrl: 'app/components/event/event.html'
})
export class EventComponent {
    
    constructor() {
        this.title = "Marathon Event";
        this.activities = [
            {title: 'Water Stop', id: 1, description: 'Hand out water at various points along the race', hidden: false},
            {title: 'Expo', id: 2, description: 'Help the athletes pick up their bibs and shirts', hidden: false},
            {title: 'Medical', id: 3, description: 'Only for qualified volunteers', hidden: true},
            {title: 'Medal Distribution', id: 4, description: 'Hand out medals at the end of the marathon', hidden: false},
            {title: 'Elite Athlete Support', id: 4, description: 'Hidden Activity', hidden: true},
            {title: 'Saturday Race Prep', id: 4, description: 'Help prepare the day before the race', hidden: false}
        ];
    }
}