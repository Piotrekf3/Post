import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { HttpMethod } from '../../util/http-method';
import { UrlForm } from '../../util/url-form';
@Component({
  selector: 'app-request-url-panel',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './request-url-panel.component.html',
  styleUrl: './request-url-panel.component.scss',
})
export class RequestUrlPanelComponent {
  @Output()
  sendClick = new EventEmitter();

  urlForm: FormGroup<UrlForm> = new FormGroup({
    method: new FormControl<HttpMethod>('GET', { nonNullable: true }),
    url: new FormControl('', { nonNullable: true }),
  });

  readonly httpMethods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];
}
