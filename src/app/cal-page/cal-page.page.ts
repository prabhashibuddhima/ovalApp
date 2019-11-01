import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-cal-page',
  templateUrl: './cal-page.page.html',
  styleUrls: ['./cal-page.page.scss'],
})
export class CalPagePage implements OnInit {
  periodDay: any;
  cycleDays: any;
  calShow: boolean = false;
  eventSource: any = [];

  
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    currentMonth: new Date().getMonth(),

  };
  monthName: any;
  viewTitle: any;

  constructor() { }

  ngOnInit() {
  }

  openCalendar() {
   
      this.calShow = true;
      let sTime = new Date(this.periodDay);
      let eTime = new Date(this.periodDay);
      let highTime = new Date(this.periodDay);
      let highEnd = new Date(this.periodDay);

      let differentStartDays = this.cycleDays - 18;
      let differentEndDays = this.cycleDays - 16;
      let highDate = this.cycleDays - 15;
      let highEndDate = this.cycleDays - 14;



      sTime.setDate(sTime.getDate() + differentStartDays);
      eTime.setDate(eTime.getDate() + differentEndDays);
      highTime.setDate(highTime.getDate() + highDate);
      highEnd.setDate(highEnd.getDate() + highEndDate);

      
      let eventCopy = {
        title: "Fertile Window Starts",
        startTime: sTime,
        endTime: eTime,
        allDay: true,
        color: 'danger'
       
      }

      this.eventSource.push(eventCopy);

      let highDays = {
        title: "Ovaluation Day",
        startTime: highTime,
        endTime: highTime,
        allDay: true,
        color: 'primary'
      }
      this.eventSource.push(highDays);

      let endDays = {
        title: "Fertile Window Ends",
        startTime: highEnd,
        endTime: highEnd,
        allDay: true,
        color: 'danger'
        
      }

      this.eventSource.push(endDays);
    



    }


    onViewTitleChanged(title) {
      this.viewTitle = title;
  
    }
  
    getMonthName() {
  
      if (this.calendar.currentMonth == 0) {
        this.monthName = "January";
      } else if (this.calendar.currentMonth == 1) {
        this.monthName = "February";
      } else if (this.calendar.currentMonth == 2) {
        this.monthName = "March";
      } else if (this.calendar.currentMonth == 3) {
        this.monthName = "April";
      } else if (this.calendar.currentMonth == 4) {
        this.monthName = "May";
      } else if (this.calendar.currentMonth == 5) {
        this.monthName = "June";
      } else if (this.calendar.currentMonth == 6) {
        this.monthName = "July";
      } else if (this.calendar.currentMonth == 7) {
        this.monthName = "August";
      } else if (this.calendar.currentMonth == 8) {
        this.monthName = "September";
      } else if (this.calendar.currentMonth == 9) {
        this.monthName = "October";
      } else if (this.calendar.currentMonth == 10) {
        this.monthName = "November";
      } else if (this.calendar.currentMonth == 11) {
        this.monthName = "December";
      }
  
    }
  
    next() {
      var swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slideNext();
      this.calendar.currentMonth = this.calendar.currentMonth + 1;
      this.getMonthName();
  
  
    }
  
    back() {
      var swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slidePrev();
      this.calendar.currentMonth = this.calendar.currentMonth - 1;
      this.getMonthName();
  
    }
  
    //month
    month() {
      this.calendar.currentMonth = new Date().getMonth();
    }
  



  
}
