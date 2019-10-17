import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SoapComponent } from './soap/soap.component';
import { SurveyComponent } from './survey/survey.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'soap', component: SoapComponent },
    { path: 'survey', component: SurveyComponent },
    { path: 'products', component: ProductsComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, NavbarComponent, SoapComponent, SurveyComponent, ProductsComponent, NotFoundComponent]
