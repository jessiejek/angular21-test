import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogLeftSidebarComponent } from './components/pages/blog-left-sidebar/blog-left-sidebar.component';
import { BlogOneColumnComponent } from './components/pages/blog-one-column/blog-one-column.component';
import { BlogThreeColumnComponent } from './components/pages/blog-three-column/blog-three-column.component';
import { BlogTwoColumnComponent } from './components/pages/blog-two-column/blog-two-column.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DepartmentDetailsComponent } from './components/pages/department-details/department-details.component';
import { DepartmentsComponent } from './components/pages/departments/departments.component';
import { DoctorDetailsComponent } from './components/pages/doctor-details/doctor-details.component';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { PortfolioDetailsComponent } from './components/pages/portfolio-details/portfolio-details.component';
import { PortfolioFilterComponent } from './components/pages/portfolio-filter/portfolio-filter.component';
import { PortfolioFourColumnComponent } from './components/pages/portfolio-four-column/portfolio-four-column.component';
import { PortfolioThreeColumnComponent } from './components/pages/portfolio-three-column/portfolio-three-column.component';
import { PortfolioTwoColumnComponent } from './components/pages/portfolio-two-column/portfolio-two-column.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { RecoverPasswordComponent } from './components/pages/recover-password/recover-password.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesStyleOneComponent } from './components/pages/services-style-one/services-style-one.component';
import { ServicesStyleThreeComponent } from './components/pages/services-style-three/services-style-three.component';
import { ServicesStyleTwoComponent } from './components/pages/services-style-two/services-style-two.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'doctors', component: DoctorsComponent},
    {path: 'doctor-details', component: DoctorDetailsComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'services-style-one', component: ServicesStyleOneComponent},
    {path: 'services-style-two', component: ServicesStyleTwoComponent},
    {path: 'services-style-three', component: ServicesStyleThreeComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'departments', component: DepartmentsComponent},
    {path: 'department-details', component: DepartmentDetailsComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'my-account', component: MyAccountComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'recover-password', component: RecoverPasswordComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'portfolio-two-column', component: PortfolioTwoColumnComponent},
    {path: 'portfolio-three-column', component: PortfolioThreeColumnComponent},
    {path: 'portfolio-four-column', component: PortfolioFourColumnComponent},
    {path: 'portfolio-filter', component: PortfolioFilterComponent},
    {path: 'portfolio-details', component: PortfolioDetailsComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'single-products', component: ProductsDetailsComponent},
    {path: 'blog-one-column', component: BlogOneColumnComponent},
    {path: 'blog-two-column', component: BlogTwoColumnComponent},
    {path: 'blog-three-column', component: BlogThreeColumnComponent},
    {path: 'blog-left-sidebar', component: BlogLeftSidebarComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},

    // Here add new component
    
    {path: '**', component: ErrorComponent} // This line will remain down from the whole component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }