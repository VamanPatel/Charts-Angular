import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailScreenComponent } from './detail-screen/detail-screen.component';
import { DropdownUiComponent } from './dropdown-ui/dropdown-ui.component';
import { TableResComponent } from './table-res/table-res.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'res', component: TableResComponent },
  { path: 'table', component: TableComponent },
  { path: 'dropdownui', component: DropdownUiComponent },
  { path: 'tracker', component: DetailScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
