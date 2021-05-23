import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@HostListener('scroll', ['$event'])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _templateHeight: object = {
    homeContentHeight: 0,
    homeContentWidth: 0,
    blobSmallHeight: 0,
    blobSmallWidth: 0,
    accountDotsHeight: 0,
    logoWidth: 0,
    circleWidth: 0,
    navIntialHeight: 0,
    navFinalHeight: 0,
    collectImageHeight: 0,
    collectImageWidth: 0,
    calHeight: 0,
    emiHeight: 0,
    emiWidth: 0,
    blobSmallTemplate: 0,
    tilesContainerWidth: 0,
    tilesWidth: 0,
    tilesHeight: 0
  }
  _incomeValue: number = 0;
  _incomeStep = 10096
  _expenseValue: number = 0;
  _expenseStep = 1009600;
  _tenureselect = '6month'
  @ViewChild('homeContainerRef') private _homeContainerRef: ElementRef;
  @ViewChild('blobSmallRef') private _blobSmallRef: ElementRef;
  @ViewChild('circleRef') private _circleRef: ElementRef;
  @ViewChild('scrollRef') private _scrollRef: ElementRef;
  @ViewChild('simpleTitleRef') private _simpleTitleRef: ElementRef;
  @ViewChild('bottomRef') private _bottomRef: ElementRef;
  @ViewChild('tileRef') private _tileRef: ElementRef;


  constructor() { }

  ngOnInit(): void {
    this.calculateHomePageLayout();
  }


  private calculateHomePageLayout(): void {
    if (this._homeContainerRef && this._blobSmallRef && this._circleRef && this._simpleTitleRef && this._bottomRef && this._tileRef) {
      this._templateHeight['homeContentHeight'] = this._homeContainerRef.nativeElement.offsetHeight;
      this._templateHeight['homeContentWidth'] = this._homeContainerRef.nativeElement.offsetWidth;
      this._templateHeight['blobSmallHeight'] = this._templateHeight['homeContentHeight'] / 2;
      this._templateHeight['blobSmallWidth'] = this._blobSmallRef.nativeElement.offsetWidth;
      this._templateHeight['accountDotsHeight'] = this._templateHeight['homeContentHeight'] / 10;
      this._templateHeight['circleWidth'] = this._circleRef.nativeElement.offsetWidth;
      this._templateHeight['logoWidth'] = this._templateHeight['homeContentHeight'] / 10;
      this._templateHeight['navIntialHeight'] = this._templateHeight['homeContentHeight'] / 5;
      this._templateHeight['navFinalHeight'] = this._templateHeight['homeContentHeight'] / 8;
      this._templateHeight['collectImageHeight'] = this._templateHeight['homeContentHeight'] / 2;
      this._templateHeight['collectImageWidth'] = this._templateHeight['homeContentWidth'] - this._templateHeight['circleWidth'] - 100;
      this._templateHeight['calHeight'] = this._templateHeight['homeContentHeight'] - this._templateHeight['navIntialHeight'] + 40;
      this._templateHeight['emiHeight'] = this._templateHeight['calHeight'] / 2 + 30;
      this._templateHeight['emiWidth'] = this._templateHeight['collectImageWidth'] / 2 - 20;
      this._templateHeight['tilesContainerWidth'] = this._homeContainerRef.nativeElement.offsetWidth / 2;
      this._templateHeight['tilesWidth'] = this._templateHeight['tilesContainerWidth'] / 2 - 20;
      this._templateHeight['tilesHeight'] = this._templateHeight['homeContentHeight'] / 3 + 30;
      this._templateHeight['bottomRightWidth'] = this._bottomRef.nativeElement.offsetWidth - this._tileRef.nativeElement.offsetWidth;

      if (this._templateHeight['blobSmallHeight'] > this._templateHeight['blobSmallWidth']) {
        this._templateHeight['blobSmallTemplate'] = this._templateHeight['blobSmallHeight'];
      } else if (this._templateHeight['blobSmallHeight'] < this._templateHeight['blobSmallWidth']) {
        this._templateHeight['blobSmallTemplate'] = this._templateHeight['blobSmallWidth'];
      }
    } else {
      setTimeout(() => {
        this.calculateHomePageLayout()
      }, 100);
    }
  }

  onResized(event: ResizedEvent) {
    this.calculateHomePageLayout()
  }

  scrollHandler(event: Event): void {
    var el = document.querySelector('.scrollRef');
    el.classList.add('scroll');
    setTimeout(function () {
      el.classList.remove('scroll');
    }, 100);

    if (this._scrollRef.nativeElement.scrollTop > 40) {
      document.getElementById("navbar").style.backgroundColor = "#ffffff";
      document.getElementById("navbar").style.height = this._templateHeight['navFinalHeight'] + 'px';
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.height = this._templateHeight['navIntialHeight'] + 'px';
    }
  }
}