import { Component } from '@angular/core';
import { HomeDataService } from '../../service/home-data.service';
import { HttpService } from '../../service/http.service';
import { QueryParamsComponent } from '../../ui/query-params/query-params.component';
import { RequestUrlPanelComponent } from '../../ui/request-url-panel/request-url-panel.component';
import { ResponseComponent } from '../../ui/response/response.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RequestUrlPanelComponent, ResponseComponent, QueryParamsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private readonly httpService: HttpService,
    private readonly dataService: HomeDataService
  ) {}

  reponse: Response | undefined;

  async sendRequest() {
    const requestUrlForm = this.dataService.requestUrlForm();
    if (requestUrlForm) {
      this.reponse = await this.httpService.sendRequest(requestUrlForm);
    }
  }
}
