import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizData from './quiz-data.json';

interface QuizOption {
  id: string;
  label: string;
  message: string;
  isCorrect: boolean;
}

interface QuizQuestion {
  id: string;
  prompt: string;
  image?: string;
  options: QuizOption[];
}

interface QuizFinal {
  title: string;
  text: string;
}

interface QuizData {
  introTitle: string;
  questions: QuizQuestion[];
  final: QuizFinal;
}

const appQuizData = quizData as QuizData;

@Component({
  selector: 'app-felicitacion-marco',
  imports: [CommonModule],
  templateUrl: './felicitacion-marco.component.html',
  styleUrl: './felicitacion-marco.component.css',
})
export class FelicitacionMarcoComponent {
  readonly quizData: QuizData = appQuizData;
  currentQuestionIndex = 0;
  feedbackMessage = '';
  lastAnswerCorrect: boolean | null = null;

  get currentQuestion(): QuizQuestion {
    return this.quizData.questions[this.currentQuestionIndex];
  }

  get isComplete(): boolean {
    return this.currentQuestionIndex >= this.quizData.questions.length;
  }

  get currentStepNumber(): number {
    return this.currentQuestionIndex + 1;
  }

  get totalQuestions(): number {
    return this.quizData.questions.length;
  }

  handleAnswer(option: QuizOption): void {
    this.feedbackMessage = option.message;
    this.lastAnswerCorrect = option.isCorrect;

    if (!option.isCorrect) {
      return;
    }

    const isLastQuestion = this.currentQuestionIndex === this.quizData.questions.length - 1;

    window.setTimeout(() => {
      if (isLastQuestion) {
        this.currentQuestionIndex = this.quizData.questions.length;
      } else {
        this.currentQuestionIndex += 1;
      }

      this.feedbackMessage = '';
      this.lastAnswerCorrect = null;
    }, 4000);
  }
}
