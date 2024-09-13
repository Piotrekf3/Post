import { Component, ViewChild } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { RequestUrlPanelComponent } from '../../ui/request-url-panel/request-url-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RequestUrlPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private readonly httpService: HttpService) {}

  @ViewChild(RequestUrlPanelComponent)
  requestUrlPanelComponent: RequestUrlPanelComponent | undefined;

  async sendRequest() {
    if (this.requestUrlPanelComponent?.urlForm.getRawValue()) {
      const response = await this.httpService.sendRequest(
        this.requestUrlPanelComponent?.urlForm.getRawValue()
      );
    }
  }
}
