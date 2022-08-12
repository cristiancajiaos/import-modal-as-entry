import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-something-modal',
  templateUrl: './something-modal.component.html',
  styleUrls: ['./something-modal.component.scss']
})
export class SomethingModalComponent implements OnInit {

  @Input() isModal = true;
  
  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  public close(): void {
    this.activeModal.close('');
  }

  public dismiss(): void {
    this.activeModal.dismiss('');
  }

}
