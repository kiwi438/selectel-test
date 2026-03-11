import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="home">
      <h1>Добро пожаловать!</h1>
      <p>Тестовое приложение для Selectel</p>
      <a routerLink="/menu" class="link">Перейти к меню</a>
    </div>
  `,
  styles: `
    .home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: sans-serif;
    }

    h1 {
      margin-bottom: 8px;
    }

    p {
      color: #666;
      margin-bottom: 24px;
    }

    .link {
      padding: 10px 24px;
      background: #1a73e8;
      color: #fff;
      text-decoration: none;
      border-radius: 6px;
      font-size: 16px;
    }

    .link:hover {
      background: #1557b0;
    }
  `,
})
export class HomeComponent {}
