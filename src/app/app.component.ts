import { AfterViewInit, Component } from '@angular/core';

declare var luckysheet: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  title = 'luckysheet';

  ngAfterViewInit(): void {
    //配置项
    var options = {
      container: 'luckysheet' //luckysheet为容器id
    }
    luckysheet.create(options)
  }

}
