# Сайт-портфолио
Это репозиторий с клиентской частью моего сайта-портфолио. Впрочем, это всё, что вам нужно знать :)

## Стек технологий
[![My Skills](https://skillicons.dev/icons?i=ts,react,nextjs,sass,vite,yarn,vercel)](https://skillicons.dev)

## Запуск проекта
Для запуска проекта необходимо установить:
- Node.js &geqslant; 18.17.0
- Git

В терминале git пропишите команды:
```bash
git clone git@github.com:tolstovr/portfolio.git frontend
cd frontend
npm install
npm run dev
```
В браузере перейдите на URL `http://localhost:8000`.

## Структура проекта
Проект использует микросервисную архитектуру. Минимальные единицы (кнопки, чекбоксы и т.п.) расположены в `src/components`, отдельные микросервисы (навигация, футер и т.п.) в `src/modules`. Основная логика и разметка описана в `src/app`. Цветовая палитра и вспомогательные функции в папках `src/utils` и `src/hooks`. Статические файлы (изображения, видео и т.п.) находятся в `public`.

## Структура коммитов
В проекте используются принципы conventional commits. Структура коммита: `Prefix: Description`.

Список доступных префиксов:
| Префикс    | Описание                             | Пример                                        |
|------------|--------------------------------------|-----------------------------------------------|
| `Feat`     | Новая функциональность               | `Feat: Added Button component`                |
| `Fix`      | Исправление ошибки                   | `Fix: Fixed form validation`                  |
| `Chore`    | Коммит напрямую не связанный с кодом | `Chore: Added someLib dependency`             |
| `Refactor` | Чистка существующего кода            | `Refactor: Deleted unused sum() function`     |
| `Markup`   | Изменение разметки                   | `Markup: Added gap to flexbox in Form module` |
| `Docs`     | Изменение документации               | `Docs: Updated README.md`                     |
| `Utils`    | Изменение утилиты                    | `Utils: Added projects in projects.ts`        |
| `Hooks`    | Изменение кастомных хуков            | `Hooks: Added useResize hook`                 |

Важно, что префиксы `Feat` и `Fix` могут идти с пояснением контекста. Например, `Fix (Hooks): Fixed bug in useResize hook` или `Feat (Navbar): Initial commit`.