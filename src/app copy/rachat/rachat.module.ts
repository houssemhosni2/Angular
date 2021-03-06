import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RachatRoutingModule } from './rachat-routing.module';
import { RachatComponent } from './rachat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditProductsComponent } from './editproduct/editproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { AddfournComponent } from './addfourn/addfourn.component';
import { EditfournComponent } from './editfourn/editfourn.component';
import { FourndetailsComponent } from './fourndetails/fourndetails.component';
import { FacturefComponent } from './facturef/facturef.component';
import { CommfComponent } from './commf/commf.component';
import { AddcommfComponent } from './addcommf/addcommf.component';
import { AddfacturefComponent } from './addfacturef/addfacturef.component';
import { ResacompteComponent } from './resacompte/resacompte.component';
import { StockComponent } from './stock/stock.component';
import { StockprComponent } from './stockpr/stockpr.component';
import { EditfactfComponent } from './editfactf/editfactf.component';
import { FactfdetailsComponent } from './factfdetails/factfdetails.component';


@NgModule({
  declarations: [RachatComponent, SidebarComponent, TopbarComponent, FooterComponent, AsidebarComponent, AccueilComponent,FournisseurComponent,AddproductComponent,EditProductsComponent,ProductDetailsComponent, AddfournComponent, EditfournComponent, FourndetailsComponent, FacturefComponent,CommfComponent, AddcommfComponent,AddfacturefComponent, ResacompteComponent, StockComponent, StockprComponent,EditfactfComponent, FactfdetailsComponent],
  imports: [
    CommonModule,
    RachatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
   // BrowserAnimationsModule
  ]
})
export class RachatModule { }
