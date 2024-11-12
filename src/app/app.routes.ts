import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { OurServiceComponent } from '../components/our-service/our-service.component';
import { PortfolioComponent } from '../components/porfolio/porfolio.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { CampaignsComponent } from '../components/campaigns/campaigns.component';
import { ForgatePasswordPageComponent } from '../components/forgate-password-page/forgate-password-page.component';
import { EnquiryFormComponent } from '../components/enquiry-form/enquiry-form.component';
import { ViewEnquiryComponent } from '../components/view-enquiry/view-enquiry.component';
import { PortfolioComponent1 } from '../components/portfolio/portfolio.component';
import { PartnersComponent } from '../components/partners/partners.component';
import { ViewUsersComponent } from '../components/AdminPages/view-users/view-users.component';

export const routes: Routes = [
    {   
        path:'',
        component:HomeComponent
    },
    {   
        path:'home',
        component:HomeComponent
    },
    {   
        path:'about',
        component:AboutComponent
    },
    {   
        path:'contact',
        component:ContactComponent
    },
    {   
        path:'our-service',
        component:OurServiceComponent
    },
    {   
        path:'loginPage',
        component:LoginComponent
    },
    {   
        path:'signupPage',
        component:SignupComponent
    },
    {   
        path:'campaignPage',
        component:CampaignsComponent
    },
    {   
        path:'forgatePasswordPage',
        component:ForgatePasswordPageComponent
    },
    {   
        path:'enquiryForm',
        component:EnquiryFormComponent
    },
   
    {   
        path:'portfolio',
        component:PortfolioComponent1
    },
    {   
        path:'ourPartners',
        component:PartnersComponent
    },
    {   
        path:'viewEnquiry',
        component:ViewEnquiryComponent
    }, {   
        path:'viewUsers',
        component:ViewUsersComponent
    },
];
