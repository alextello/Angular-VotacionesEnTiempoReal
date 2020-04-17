import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent {
  results: any[] = [
    {
      name: 'Juego 1',
      value: 8940000,
    },
    {
      name: 'Juego 2',
      value: 5000000,
    },
    {
      name: 'Juego 3',
      value: 7200000,
    },
    {
      name: 'Juego 4',
      value: 5200000,
    },
  ];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {}

  onSelect(event) {
    console.log(event);
  }
}
