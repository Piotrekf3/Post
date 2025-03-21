import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { HomeDataService } from '../../service/home-data.service';
import { HttpMethod } from '../../util/http-method';
import { UrlForm } from '../../util/url-form';
@Component({
  selector: 'app-request-url-panel',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './request-url-panel.component.html',
  styleUrl: './request-url-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestUrlPanelComponent implements OnDestroy {
  @Output()
  sendClick = new EventEmitter();

  urlForm: FormGroup<UrlForm> = new FormGroup({
    method: new FormControl<HttpMethod>('GET', { nonNullable: true }),
    url: new FormControl('', { nonNullable: true }),
  });

  readonly httpMethods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];

  readonly formValueChangeSubscription;

  constructor(private readonly dataService: HomeDataService) {
    this.formValueChangeSubscription = this.urlForm.valueChanges.subscribe(
      () => {
        const formValue = this.urlForm.getRawValue();
        this.dataService.requestUrlForm.set(formValue);
      }
    );
    effect(() => {
      this.updateUrlWithParams();
    });
  }

  ngOnDestroy(): void {
    this.formValueChangeSubscription.unsubscribe();
  }

  updateUrlWithParams() {
    const requestUrlForm = this.dataService.requestUrlForm();
    if (requestUrlForm) {
      const updatedUrl = requestUrlForm.url;
      if (updatedUrl !== this.urlForm.get('url')?.value) {
        this.urlForm.get('url')?.setValue(updatedUrl, { emitEvent: false });
      }
    }
  }
}
