/* Angular Imports */
import { CommonModule } from '@angular/common'
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

/* Material */
import { MatSliderModule } from '@angular/material/slider';

/* ECharts */
import { NgxEchartsModule } from 'ngx-echarts';

/* Component Imports */
import { MortgageComponent } from './components/mortgage/mortgage.component';

/* Service Imports */

/* Router Imports */
import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageStepperComponent } from './components/mortgage-stepper/mortgage-stepper/mortgage-stepper.component';
import { MortgageStepComponent } from './components/mortgage-stepper/mortgage-step/mortgage-step.component';
import { MortgageLineComponent } from './components/mortgage-stepper/mortgage-line/mortgage-line.component';
import { MortgageLabelComponent } from './components/mortgage-stepper/mortgage-label/mortgage-label.component';
;


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSliderModule,
        AlertModule,
        NgxEchartsModule,
        MortgageRoutingModule
    ],
    declarations: [
        MortgageComponent,
        MortgageStepperComponent,
        MortgageStepComponent,
        MortgageLineComponent,
        MortgageLabelComponent,
    ],
    exports: [
        CommonModule,
        MortgageComponent
    ],
    providers: [
        
    ],
    entryComponents: [
        
    ],
})
export class MortgageModule {

    constructor(@Optional() @SkipSelf() parentModule: MortgageModule) {
        if (parentModule) throw new Error('MortgageModule is already loaded.')
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MortgageModule,
            providers: []
        }
    }

}