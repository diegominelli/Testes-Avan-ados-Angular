import { buildPhotoList } from 'src/app/shared/components/like-widget/photo-board/test/build-photos-list';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/like-widget/photo-board/services/photo-board.service';
import { Photo } from '../interfaces/photo';
@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
