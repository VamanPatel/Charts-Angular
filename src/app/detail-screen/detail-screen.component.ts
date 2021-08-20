import { Component, OnInit } from '@angular/core';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.scss'],
})
export class DetailScreenComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  OnSave() {
    this.dialogService
      .openConfirmDialog('Are you sure to Save this record ?')
      .afterClosed()
      .subscribe((res) => {
        console.log(res);
        if (res) {
          console.log('true he');
        }
      });
  }
}
