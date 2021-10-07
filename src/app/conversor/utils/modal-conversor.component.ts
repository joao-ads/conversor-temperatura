import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-conversor',
  templateUrl: './modal-conversor.component.html',
  styleUrls: ['./modal-conversor.component.css']
})
export class ModalConversorComponent implements OnInit {

  @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
