import { Component, ViewChild } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { RequestUrlPanelComponent } from '../../ui/request-url-panel/request-url-panel.component';
import { ResponseComponent } from '../../ui/response/response.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RequestUrlPanelComponent, ResponseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private readonly httpService: HttpService) {}

  @ViewChild(RequestUrlPanelComponent)
  requestUrlPanelComponent: RequestUrlPanelComponent | undefined;

  reponse: Response | undefined;

  async sendRequest() {
    if (this.requestUrlPanelComponent?.urlForm.getRawValue()) {
      this.reponse = await this.httpService.sendRequest(
        this.requestUrlPanelComponent?.urlForm.getRawValue()
      );
    }
  }
}
