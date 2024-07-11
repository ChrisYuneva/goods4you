# Интернет-магазин Goods4you

Проект создан на основе задач, поставленных при участии в Открытых школах Холдинга Т1.

## [Посмотреть демо](https://chrisyuneva.github.io/goods4you/)

## Реализовано:

- Развертывание и настройка проекта;
- Верстка адаптивного интерфейса с подддержкой доступности;
- Pixel perfect для разрешения экрана 1440px;
- Авторизация с токеном, полученным с [API](https://dummyjson.com/docs/auth) и хранимым в localStorage;
- Получение товаров и корзины с [API](https://dummyjson.com/docs);
- Пагинация и оптимизация отправки запросов на сервер при поиске товара;
- Управление состоянием корзины;
- Обработка загрузок и ошибок;
- Документирование интерфейса;
- Тестирование.

## Используемые технологии:

- Vite;
- React;
- TypeScript;
- React router dom;
- Redux Toolkit + RTK Query;
- Storybook;
- Jest.

## Запуск приложения

1. Установка зависимостей:
```sh
 npm install
```
2. Запуск проекта:
```sh
npm run dev
```
3. Запуск тестов: 
```sh
 npm run test
```
4. Запуск Storybook: 
```sh
 npm run storybook
```