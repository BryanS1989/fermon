import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LegalComponent } from './components/legal/legal.component';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { BannerFlipComponent } from './components/banner-flip/banner-flip.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RateProductComponent } from './components/rate-product/rate-product.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductCategoryNodeComponent } from './components/product-category-node/product-category-node.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AsideComponent,
    HomeComponent,
    LegalComponent,
    BannerSliderComponent,
    SearchBarComponent,
    ProductThumbnailComponent,
    ProductSliderComponent,
    BannerFlipComponent,
    ContactComponent,
    ScrollToTopComponent,
    ProductDetailComponent,
    RateProductComponent,
    QuantitySelectorComponent,
    AddToCartButtonComponent,
    ProductReviewsComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductCategoriesComponent,
    ProductCategoryNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
