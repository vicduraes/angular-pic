import { switchMap } from "rxjs/operators";
import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd } from "@angular/router";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .pipe(switchMap((route) => route.data))
      .subscribe((event) => this.titleService.setTitle(event.title));
  }
}
