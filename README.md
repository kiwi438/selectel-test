# Selectel — Тестовое задание (Frontend)

Angular 19 мини-приложение с двумя страницами.

## Быстрый старт

```bash
npm install
ng serve
```

Открыть http://localhost:4200

## Деплой на GitHub Pages

1. Создать репозиторий на GitHub, например `selectel-test`
2. Инициализировать git и запушить:

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/<USERNAME>/selectel-test.git
git push -u origin main
```

3. Задеплоить:

```bash
npx ng deploy --base-href=/selectel-test/
```

Приложение будет доступно по адресу:
`https://<USERNAME>.github.io/selectel-test/`

## Структура

- `/` — страница приветствия со ссылкой на меню
- `/#/menu` — страница меню с чекбоксами, боковой навигацией и подсчётом значений

## Стек

- Angular 19 (standalone components, signals, new control flow)
- TypeScript
- CSS
