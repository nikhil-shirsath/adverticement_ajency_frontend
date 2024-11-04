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

export const routes: Routes = [
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
        path:'portfolio',
        component:PortfolioComponent
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
];
