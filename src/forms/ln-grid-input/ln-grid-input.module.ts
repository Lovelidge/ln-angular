import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LnInputModule } from '@lernender/common/ln-input';

import { LnGridInput } from './ln-grid-input';

@NgModule({
  imports: [CommonModule, FormsModule, LnInputModule],
  declarations: [LnGridInput],
  exports: [LnGridInput]
})
export class LnGridInputModule {}
