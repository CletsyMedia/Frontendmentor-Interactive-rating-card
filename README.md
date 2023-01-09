# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](.images/screenshot.jpg). 

### Links

- Solution URL: [Add solution URL here](https://github.com/Azn4n6el/interactive-rating-component-main)
- Live Site URL: [Add live site URL here](https://azn4n6el.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Javascript
### What I learned

I have learned the pseudo-class :where (used in the radio section) and on how to create a custom radio button.

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
input[type="radio"]:checked~:where(.custom-radio, label) {
    color: var(--white);
    background-color: var(--orange);
}

```

### Continued development

Accesibility, Javascript code structure, css best practices.

### Useful resources

- [Example resource 1](https://www.w3schools.com/) - This helped me create my custom radio button.
- [Example resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) - This helped me understand pseudo-class :where better.

## Author

- Frontend Mentor - [@Azn4n6el](https://www.frontendmentor.io/profile/Azn4n6el)
