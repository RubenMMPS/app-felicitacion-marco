import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelicitacionMarcoComponent } from './felicitacion-marco.component';

describe('FelicitacionMarcoComponent', () => {
  let component: FelicitacionMarcoComponent;
  let fixture: ComponentFixture<FelicitacionMarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FelicitacionMarcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelicitacionMarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the first question and advance when selecting the correct option', () => {
    expect(component.currentQuestionIndex).toBe(0);
    expect(component.currentQuestion.prompt).toContain('¿Cuál es la mejor forma');

    const correctOption = component.currentQuestion.options.find((option) => option.isCorrect)!;
    component.handleAnswer(correctOption);

    expect(component.feedbackMessage).toBe(correctOption.message);
    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should show a custom message when a wrong option is clicked', () => {
    const wrongOption = component.currentQuestion.options.find((option) => !option.isCorrect)!;

    component.handleAnswer(wrongOption);

    expect(component.feedbackMessage).toBe(wrongOption.message);
  });

  it('should allow selecting another option after a wrong answer', () => {
    const wrongOption = component.currentQuestion.options.find((option) => !option.isCorrect)!;
    const correctOption = component.currentQuestion.options.find((option) => option.isCorrect)!;

    component.handleAnswer(wrongOption);
    component.handleAnswer(correctOption);

    expect(component.feedbackMessage).toBe(correctOption.message);
    expect(component.lastAnswerCorrect).toBeTrue();
  });
});
