import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HomeDataService } from '../../service/home-data.service';
import { QueryParam } from '../../util/query-param';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-query-params',
  standalone: true,
  imports: [TableModule, CommonModule, FormsModule, InputTextModule],
  templateUrl: './query-params.component.html',
  styleUrl: './query-params.component.scss',
})
export class QueryParamsComponent {
  cols: Column[] = [
    { field: 'key', header: 'Key' },
    { field: 'value', header: 'Value' },
    { field: 'description', header: 'Description' },
  ];

  queryParams: QueryParam[] = [{ key: '', value: '', description: '' }];

  constructor(private readonly dataService: HomeDataService) {
    effect(() => {
      this.queryParams = this.dataService.queryParams();
    });
  }

  onFieldChange() {
    const lastRow = this.queryParams[this.queryParams.length - 1];
    if (lastRow.key || lastRow.value || lastRow.description) {
      this.queryParams = [
        ...this.queryParams,
        { key: '', value: '', description: '' },
      ];
    }
    this.dataService.setQueryParams([...this.queryParams]);
  }

  trackByFunction = (index: number) => {
    return index;
  };
}
