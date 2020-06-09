import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemComponent} from './item.component';

const mockProperty = {
  type: null,
  id: null,
  url: null,
  slug: null,
  bitly_gif_url: null,
  bitly_url: null,
  embed_url: null,
  username: null,
  source: null,
  title: null,
  rating: null,
  images: {
    downsized_large: null,
    fixed_height_small_still: null,
    original: null,
    fixed_height_downsampled: null,
    downsized_still: null,
    fixed_height_still: null,
    downsized_medium: null,
    downsized: null,
    preview_webp: null,
    original_mp4: null,
    fixed_height_small: null,
    fixed_height: null,
    downsized_small: null,
    preview: null,
    fixed_width_downsampled: null,
    fixed_width_small_still: null,
    fixed_width_small: null,
  },
};
describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ItemComponent);
      mockProperty.images.downsized_medium = {
        url: 'http:/mock'
      };

      // itemProps
      component = fixture.componentInstance;

      component.itemProps = mockProperty;
      fixture.detectChanges();
    }
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
