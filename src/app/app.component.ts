import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: any[] = [
  {
    id: 1,
    productName: 'Product 1',
    price: '$100 g',
    quantity: 4,
    action: 'Edit',
    itemTotal: '$100',
    isEdit: false,
  },
  {
    id: 2,
    productName: 'Product 1',
    price: '$100 g',
    quantity: 4,
    action: 'Edit',
    isEdit: false,
    itemTotal: '$100',
  },
  {
    id: 3,
    productName: 'Product 1',
    price: '$100 g',
    quantity: 4,
    action: 'Edit',
    isEdit: true,
    itemTotal: '$100',
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayedColumns: string[] = [
    'id',
    'productName',
    'price',
    'quantity',
    'action',
    'ItemTotal',
  ];
  dataSource = ELEMENT_DATA;
  title = 'mui-table-fluffy';
  onClicAction(element: any) {
    alert(JSON.stringify(element));
  }
  onQtyEdit(element: any) {
    this.dataSource = this.dataSource.map((item) => {
      if (item.id === element.id) {
        item.isEdit = true;
      }
      return item;
    });
  }
}
