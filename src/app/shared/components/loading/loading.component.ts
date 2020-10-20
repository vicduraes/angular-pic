import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';
import { LoadingType } from './loading-type';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading$: Observable<string>

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loading$ = this.loadingService.getLoading().pipe(map(loadingType => loadingType.valueOf()))
  }

}
