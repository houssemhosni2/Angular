import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddcommfComponent } from './addcommf/addcommf.component';
import { AddfacturefComponent } from './addfacturef/addfacturef.component';
import { AddfournComponent } from './addfourn/addfourn.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CommfComponent } from './commf/commf.component';
import { EditfactfComponent } from './editfactf/editfactf.component';
import { EditfournComponent } from './editfourn/editfourn.component';
import { EditProductsComponent } from './editproduct/editproduct.component';
import { FactfdetailsComponent } from './factfdetails/factfdetails.component';
import { FacturefComponent } from './facturef/facturef.component';
import { FourndetailsComponent } from './fourndetails/fourndetails.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { RachatComponent } from './rachat.component';
import { ResacompteComponent } from './resacompte/resacompte.component';
import { StockComponent } from './stock/stock.component';
import { StockprComponent } from './stockpr/stockpr.component';

const routes: Routes = [
  {path:'',component:RachatComponent,
  children:[
    {path:'',component:AccueilComponent},
   {path:'Products',loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)},
   {path:'Products/Addproduct',component:AddproductComponent},
   {path:'Products/Editproduct/:id',component:EditProductsComponent},
   {path:'Products/ProductDetails/:id',component:ProductDetailsComponent},
   {path:'resacom',component:ResacompteComponent},
   {path:'stock',component:StockComponent},
   {path:'stock/stockpr',component:StockprComponent},
   {path:'fournisseur',component:FournisseurComponent},
   {path:'fournisseur/addfourn',component:AddfournComponent},
   {path:'fournisseur/editfourn/:id',component:EditfournComponent},
   {path:'fournisseur/fourndetails/:id',component:FourndetailsComponent},
   {path:'achat/facturef',component:FacturefComponent},
   {path:'achat/facturef/addfacf',component:AddfacturefComponent},
   {path:'achat/facturef/editfacf/:id',component:EditfactfComponent},
   {path:'achat/facturef/facfdetails/:id',component:FactfdetailsComponent},
   {path:'achat/commf',component:CommfComponent},
   {path:'achat/commf/addcommf',component:AddcommfComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RachatRoutingModule { }
