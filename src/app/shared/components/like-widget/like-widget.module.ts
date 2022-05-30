import { ActionDirectiveModule } from './../../directives/action/action.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { PhotoBoardComponent } from './photo-board/photo-board/photo-board.component';

@NgModule({
  declarations: [LikeWidgetComponent, PhotoBoardComponent],
  imports: [CommonModule, FontAwesomeModule, ActionDirectiveModule],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {}
