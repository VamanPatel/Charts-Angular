import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailScreenComponent } from './detail-screen/detail-screen.component';
import { DropdownUiComponent } from './dropdown-ui/dropdown-ui.component';
import { EditorComponent } from './editor/editor.component';
import { Ng2ChartComponent } from './ng2-chart/ng2-chart.component';
import { ScroollComponent } from './scrooll/scrooll.component';
import { SwipeComponent } from './swipe/swipe.component';
import { TableResComponent } from './table-res/table-res.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'res', component: TableResComponent },
  { path: 'table', component: TableComponent },
  { path: 'dropdownui', component: DropdownUiComponent },
  { path: 'tracker', component: DetailScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scroll', component: ScroollComponent },
  { path: 'ng2', component: Ng2ChartComponent },
  { path: 'swipe', component: SwipeComponent },
  { path: 'editor', component: EditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
