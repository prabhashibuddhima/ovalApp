# ovalApp
copyright by prabhashi

This is a test app for ionuic calendar using customized scss

this app made for ovaluation cycle dates.

first you have to install ionic2-calendar using following link 
https://www.npmjs.com/package/ionic2-calendar

then you will needed to add 
import { NgCalendarModule  } from 'ionic2-calendar';

to your page module and add NgCalendarModule to imports in the page module.ts file

then you can add your html and all as the above code. 
make sure you add <ng-template> and mention it in <calendar>
  <ng-template #template let-view="view" let-row="row" let-col="col">
                    <div class="calendar-day {{ view.dates[row*7+col].events[0]?.color }}">
                        {{view.dates[row*7+col].label}}
                    </div>
                </ng-template>
                <!-- 
//copyrights by prabhashibuddhima -->
                <calendar [monthviewDisplayEventTemplate]="template" [eventSource]="eventSource" [calendarMode]="calendar.mode"
                    [currentDate]="calendar.currentDate" [showEventDetail]="false" (onTitleChanged)="onViewTitleChanged($event)">
                </calendar>


make sure you add your scsss to your global.scss file

cheers!!

-Prabhashi
(please note that this one is made by me for testing purposes of ionic calendar for all the ionic developers struggling with calendar css)
