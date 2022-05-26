import { PhotoFrameModule } from './photo-frame.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';

describe('PhotoFrameComponent.name', () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
