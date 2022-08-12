import { SomethingModalComponent } from './../something/something-modal/something-modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit() {
  }

  public openModal(): void {
    this.modal.open(SomethingModalComponent, { size: 'sm' })
      .result
      .then((res) => {
        console.log(res);
      }, (rej) => {
        console.log(rej);
      });
  }

}
