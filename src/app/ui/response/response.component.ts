import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './response.component.html',
  styleUrl: './response.component.scss',
})
export class ResponseComponent {
  @Input()
  set response(response: Response | undefined) {
    this._response = response;
    response?.json().then((json) => (this.responseText = json));
  }

  get response(): Response | undefined {
    return this._response;
  }

  _response: Response | undefined;
  responseText: string | undefined;
}
