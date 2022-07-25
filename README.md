# Портфолио

**Ссылка на сайт: [GitHubPages][GitHubPages]** 

*Оглавление*
- [Портфолио](#портфолио)
  - [Описание](#описание)
  - [Особенности](#особенности)
  - [Плагины](#плагины)
  - [Установка](#установка)
  
[![Build status](https://ci.appveyor.com/api/projects/status/n1u5nli4jj7wqkqo?svg=true)](https://ci.appveyor.com/project/KirillKazakoff/portfolio)

## Описание
Портфолио представляет собой SPA на TypeScript, React, и Redux, в котором собраны мои главные работы. Верстка адаптивная, с применением SCSS и БЭМ-методологии.

</br>

## Особенности
- Для того, чтобы страница не вызывала отторжения у пользователя при загрузке, было принято решение использовать технологию LazyLoad. Контент догружается по мере c🐇а (скролла) странницы. 
- Чтобы анимация при входе прошла красиво, было принято решение добавить обработчик onload на картинку кота...
- Для того, чтобы портфолио выгядело мощно, было принято решение добавить возможность смены языка. Она была реализована с помощью Redux: по клику на один из языков он диспатчится в store. В store лежит словарь со всем текстовым контентом. Через селектор, по индексу языка, в компонентах достается нужный словарь.

</br>

## Плагины
| Plugin          | README                                               |
| --------------- | ---------------------------------------------------- |
| React           | [plugins/react/README.md][PlReact]                   |
| Redux           | [plugins/redux/README.md][PlRedux]                   |
| Redux-toolkit   | [plugins/redux-toolkit/README.md][PlReduxToolkit]    |
| TypeScript      | [plugins/typeScript/README.md][PlTypeScript]         |
| React-router    | [plugins/react-router/README.md][PlReactRouter]      |
| Webpack         | [plugins/webpack/README.md][PlWebpack]               |
| React-lazy-load | [plugins/react-lazy-load/README.md][PlReactLazyLoad] |

</br>

## Установка
Если вы хотите запустить приложение, клонируйте репозиторий, затем установите зависимости

```sh
yarn
```
И запустите webpack-dev-server:
```sh
yarn start
```

<!-- Table  -->
 [PlReact]: <https://github.com/facebook/react/blob/main/README.md>
 [PlRedux]: <https://github.com/reduxjs/redux/blob/master/README.md>
 [PlReduxToolkit]: <https://github.com/reduxjs/redux-toolkit#readme>
 [PlTypeScript]: <https://github.com/microsoft/TypeScript/blob/main/README.md>
 [PlReactRouter]: <https://github.com/remix-run/react-router#readme>
 [PlWebpack]: <https://github.com/webpack/webpack/blob/main/README.md>
 [PlReactLazyLoad]: https://github.com/Aljullu/react-lazy-load-image-component/blob/master/README.md

[GitHubPages]:https://kirillkazakoff.github.io/portfolio/
