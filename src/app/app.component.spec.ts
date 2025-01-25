import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostCardComponent } from './post-card/post-card.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, PostFormComponent, PostCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).not.toBeTruthy();
  });

  it('should add post to the list', () => {
    const post = { title: 'Post title', body: 'Post body' };
    component.addPost(post);

    expect(component.posts()).toEqual([post]);
  });
});
