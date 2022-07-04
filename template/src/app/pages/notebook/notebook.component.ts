import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  pageSize: any;
  data: any;
  pageNo: number;
  constructor() { }

  ngOnInit(): void {
    this.pageNo = 1;
    if (sessionStorage.getItem("Page1")) {
      this.data = sessionStorage.getItem("Page1");
    }
  }
  updateTextdata(pageidx: any) {
    if (sessionStorage.getItem("Page" + (pageidx)) != "") {
      this.data = sessionStorage.getItem("Page" + (pageidx));
    } else {
      this.data = ""
    }
  }

  parallel_Update() {
    sessionStorage.setItem("Page" + this.pageNo, this.data);
  }
  _triggerAction(eve: any) {
    if (eve == 'next' && this.pageNo != 5) {
      sessionStorage.setItem("Page" + this.pageNo, this.data);
      this.pageNo += 1;
      this.updateTextdata(this.pageNo);
    } else if (eve == 'previous' && this.pageNo != 1) {
      sessionStorage.setItem("Page" + this.pageNo, this.data);
      this.pageNo -= 1;
      this.updateTextdata(this.pageNo);
    }

  }

}
