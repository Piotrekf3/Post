import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
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

  queryParams: QueryParam[] = [{ description: 'asdds' }];
}
