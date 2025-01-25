import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    fixture.componentRef.setInput('post', {
      title: 'Post title',
      body: 'Post body',
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the post title', () => {
    const title = fixture.nativeElement.querySelector('.post-title');
    expect(title.textContent).toContain('Post title');
  });

  it('should display the post body', () => {
    const body = fixture.nativeElement.querySelector('.post-body');
    expect(body.textContent).toContain('Post body');
  });
});
