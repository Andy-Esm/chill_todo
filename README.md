

# Chill ToDo App 


- [Разработка](#разработка)
  - [Стек технологий](#стек-технологий)
  - [Настройка для разработки](#настройка-для-разработки)
- [Проверка кода перед отправкой](#проверка-кода-перед-отправкой)
  - [Проверка Eslint](#для-проверки-ошибок-в-коде-при-помощи-eslint)
  - [Проверка Stylelint](#для-проверки-ошибок-в-коде-стилей-при-помощи-stylelint)
- [Структура проекта](#структура-проекта)
- [Правила работы с Git](#правила-работы-с-git)
  - [Пишем хорошее сообщение коммита](#пишем-хорошее-сообщение-коммита)
- [Оформление кода](#оформление-кода)
 

## Установка / Начало работы

```shell
npm run install
npm run dev
```
 
## Разработка


 
### Стек технологий

- react: 18.2.0
- typescript: 5.0.4
- sass: 1.62.1
- webpack: 5.85.0
- eslint: 8.41.0

 
### Настройка для разработки

Скопируйте себе проект, затем установите зависимости и запустите командой указанной в конце

```shell
git clone git@github.com:anatoly-ivashov/chill-dev_task-manager.git
cd chill-dev_task-manager
npm install
npm run dev
```
 
## Проверка кода перед отправкой

Перед каждым коммитом и отправкой своей ветки в репозиторий выполняйте проверку на ошибки. Для этого используйте команды указанные ниже


### Для проверки ошибок в коде при помощи *Eslint*

*Только для проверки*
```shell
npm run lint:ts
```
*Для проверки и автоматического исправления некоторых ошибок*
```shell
npm run lint:ts:fix
```

### Для проверки ошибок в коде стилей при помощи *Stylelint*

*Только для проверки*
```shell
npm run lint:scss
```
*Для проверки и автоматического исправления некоторых ошибок*
```shell
npm run lint:scss:fix
```

> Учитывайте что не все ошибки можно исправить автоматически   
 
## Структура проекта

```
Chill Todo

├── src
│   ├── app  
│   │   ├──App.tsx
│   │   ├──styles
│   │   │  ├──global.scss
│   │   │  ├──vars.scss
│   │   │  ├──normalize.scss
│   │   │  ├──index.scss 
│   ├── pages
│   │   ├──home
│   │   │  ├──styles.module.scss
│   │   │  ├──HomePage.tsx
│   │   ├──calendar
│   │   ├──kanban
│   │   ├──todo
│   │   ├──projects
│   │   ├──index.tsx
│   ├── widgets
│   │   ├──header
│   │   │  ├──styles.module.scss
│   │   │  ├──Header.tsx
│   │   ├──index.tsx
│   ├── entities
│   │   ├──index.tsx
│   ├── shared
│   │   ├──index.tsx
│   │──index.html
│   │──index.tsx
├──.eslintrc.js
├──.gitignore
├──.tsconfig.json
├──.stylelintrc.js
├──babel.config.json
├──webpack.config.ts
├──package.json
├──README.md


```

## Правила работы с GIT

* Разрабатывайте в отдельной ветке с названием задачи ветке.

  _Зачем:_
  > Таким образом вся работа выполняется изолированно в отдельной ветке, а не в главной. Это позволит создать множество запросов на слияние (pull requests) без путаницы. Вы можете продолжить разработку без загрязнения `main` ветки потенциально нестабильным и незаконченным кодом.

* Откалывайте ветку от `dev`

  _Зачем:_
  > Чтобы быть уверенным, что код в `main` ветке практически всегда собирается без проблем

* Обновляйте вашу локальную `dev` ветку перед тем как выкладывать (push) свою новую функцию и создавать Запрос на Слияние (Pull Request).

* Никогда не выкладывайте (push) коммиты напрямую в `dev` или `main` ветки. Создавайте Запрос на Слияние (Pull Request).

  _Зачем:_
  > Так члены команды получат оповещение, что работа над новой функцией (feature) завершена. Также это облегчит процесс рецензирования кода (code review) и предоставит площадку для обсуждения предложенной функции.

* При запросе на слияние (Pull Request) не забывайте также сделать запрос на проверку кода (code review)
  * При наличии ошибок в коде после проверки, исправьте их и сделайте коммит в той же ветке
  * После исправления ошибок, дождитесь одобрения на слияние (Approve) и только тогда выполните слияние (merge)

* Удалите локальные и удаленные (remote) ветки после сливания (merge).

  _Зачем:_
  > Чтобы не загромождать ваш список веток мертвыми ветками. Это гарантирует, что вы сольете (merge) вашу ветку обратно в `dev` только один раз. 

* Перед созданием Запроса на Слияние (Pull Request) убедитесь, что ваша ветка успешно собирается, включая проверки на оформление кода.

### Пишем хорошее сообщение коммита



* Ограничьте краткое описание 50 символами, а основное описание - 72 символами.

  _Зачем:_
  > Коммиты должны быть краткими и максимально сфокусированными; это не место для многословия.

* Начните краткое описание с заглавной буквы.

* Не заканчивайте краткое описание точкой.

* В кратком описании старайтесь писать что конкретно было сделано, и желательно в завершенной форме.

  _Пример:_
  > Вместо того чтобы писать в сообщениях "Исправление ошибок". Пишите что-то вроде: "Исправил ошибки в .gitignore Добавил стили для компонента Button"

*  Если нужно более подробно описать изменения, пишите в комментариях к Pull Request.



## Оформление кода

При написании кода придерживайтесь определенных правил.  

В частности:

* Называйте компоненты с большой буквы и используйте *PascalCase*  
  
  > menu-item, menuItem, Menu_Item итд - **Не правильно**

  > MenuItem - **Правильно**
    

* Называйте функции в соответствии с тем что они делают

  > someFunc, getItem, submit - **Не правильно**

  > onInputSubmit, getDateItem, handlerAddTaskClick и подобное - **Правильно**

* Называйте переменные в соответствии с тем что они хранят
  
  > data, a, b итд - **Не правильно**
  
  > menuItems, currentDate, userData - **Правильно**

* Используем вложенность SCSS максимум на 2 ступени, например для состояний и медиа запросов

---


