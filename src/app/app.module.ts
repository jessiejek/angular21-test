import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { DoctorDetailsComponent } from './components/pages/doctor-details/doctor-details.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { ServicesStyleOneComponent } from './components/pages/services-style-one/services-style-one.component';
import { ServicesStyleTwoComponent } from './components/pages/services-style-two/services-style-two.component';
import { ServicesStyleThreeComponent } from './components/pages/services-style-three/services-style-three.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { DepartmentsComponent } from './components/pages/departments/departments.component';
import { DepartmentDetailsComponent } from './components/pages/department-details/department-details.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { RecoverPasswordComponent } from './components/pages/recover-password/recover-password.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PortfolioTwoColumnComponent } from './components/pages/portfolio-two-column/portfolio-two-column.component';
import { PortfolioThreeColumnComponent } from './components/pages/portfolio-three-column/portfolio-three-column.component';
import { PortfolioFourColumnComponent } from './components/pages/portfolio-four-column/portfolio-four-column.component';
import { PortfolioFilterComponent } from './components/pages/portfolio-filter/portfolio-filter.component';
import { PortfolioDetailsComponent } from './components/pages/portfolio-details/portfolio-details.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { BlogOneColumnComponent } from './components/pages/blog-one-column/blog-one-column.component';
import { BlogTwoColumnComponent } from './components/pages/blog-two-column/blog-two-column.component';
import { BlogThreeColumnComponent } from './components/pages/blog-three-column/blog-three-column.component';
import { BlogLeftSidebarComponent } from './components/pages/blog-left-sidebar/blog-left-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    PreloaderComponent,
    NavbarStyleOneComponent,
    FooterStyleOneComponent,
    NavbarStyleTwoComponent,
    FooterStyleTwoComponent,
    NavbarStyleThreeComponent,
    AboutComponent,
    DoctorsComponent,
    DoctorDetailsComponent,
    AppointmentComponent,
    ServicesStyleOneComponent,
    ServicesStyleTwoComponent,
    ServicesStyleThreeComponent,
    ServicesDetailsComponent,
    TestimonialsComponent,
    DepartmentsComponent,
    DepartmentDetailsComponent,
    PricingComponent,
    MyAccountComponent,
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ComingSoonComponent,
    ErrorComponent,
    PortfolioTwoColumnComponent,
    PortfolioThreeColumnComponent,
    PortfolioFourColumnComponent,
    PortfolioFilterComponent,
    PortfolioDetailsComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    CartComponent,
    CheckoutComponent,
    BlogOneColumnComponent,
    BlogTwoColumnComponent,
    BlogThreeColumnComponent,
    BlogLeftSidebarComponent,
    BlogDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
