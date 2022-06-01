import { PhotoBoardMockService } from './../../shared/components/like-widget/photo-board/services/photo-board-mock.service';
import { Photo } from './../../shared/components/like-widget/photo-board/interfaces/photo';
import { buildPhotoList } from 'src/app/shared/components/like-widget/photo-board/test/build-photos-list';
import { of, Observable } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/like-widget/photo-board/services/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name + 'Mock Provider', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`(D) Should display board when data arrives`, () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should not display board').not.toBeNull();
    expect(loader).withContext('Should display loader').toBeNull();
  });
});
