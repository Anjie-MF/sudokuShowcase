## Table of contents

- [Overview](#overview)
- [Link](#link)
- [My process](#my-process)
- [Built with](#built-with)
- [What I'm Proud Of](#what-I'm-Proud-Of)
- [Boilerplate](#boilerplate)
- [Useful sites](#useful-sites)
- [Author](#author)
- [AI prompts ](#ai-prompts)
- [Acknowledgments](#acknowledgments)


## Overview
This project was developed as part of my developer portfolio to showcase problem-solving, JavaScript, and user interface design skills. The project incorporates functionality such as modal dialog boxes, displayDate, intro welcome messages, and content blur effects—originally created as part of an earlier crossword puzzle project (feel free to ask me about that!).

                                    💡💡Lessons Learned 💡💡

 I learned A LOT through this experience. The journey reinforced that done is better than perfect. It showed me the value of project management, foundational development, and iterative problem-solving.

Starting with Foundations 📚📚

* I initially jumped straight into JavaScript logic without focusing on the foundational HTML and CSS. This experience taught me the importance of having a strong base before building on it—You can’t decorate a house without first building its foundation.

Trial, Error, Debugging, and Problem-Solving 🤔🤔

* Through trial and error, I developed two critical skills: debugging and problem-solving. Development isn’t just about memorization; it’s about actively engaging with problems. Writing a flowchart significantly improved my critical thinking and allowed me to approach problems methodically. This has already improved how I search for solutions when coding.

New Skills Learned 🎓🎓

This project taught me concepts and skills that independent study outside of coding bootcamp can teach you, such as:

* Working with character entities

* Using onclick functions effectively

* Creating and implementing a dropdown menu that includes modal dialog boxes

* Creating a dynamic timer that pauses, resets, and starts

Although I didn’t finish the crossword logic or fully implement out the Sudoku game, the knowledge and skills gained from this project have fundamentally changed the way I will approach future projects.

                              Key Takeaways, or TL;DR

* Developed problem-solving strategies using flowcharts and iterative debugging

* Learned foundational JS skills and new practical features, like modal dialog boxes, timers, and dynamic event handling

* Improved my ability to map logical workflows from concept to execution

* Improved my CSS skills by making the grid responsive to tablet and desktop screens

This project represents a significant milestone in my journey as a developer

### Link

- Live Site Link: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I'm Proud Of

You can add code snippets using the syntax:

```js
function closeBlurb() {
    document.getElementById("sud-section").style.display = "none";
    document.querySelector(".content-to-blur").style.filter = "none";
    document.querySelector(".content-to-blur").style.webkitFilter = "none";
};
```
```js
const modal = document.getElementById("howToPlay");
const icon = document.getElementById("howToPlayIcon");
const closeBtn = document.querySelector(".close");

icon.onclick = function () {
    modal.style.display = "block";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};
```
```js
function displayDate() {
    const now = new Date();
    const format = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDayDate = now.toLocaleString('en-US', format);
    document.getElementById("date").textContent = currentDayDate;
}
displayDate();
```

### Boilerplate

- [Piccalil CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/) - My go-to CSS Reset tool
- [Dinson Kadudhus](https://responsivetesttool.com/) - Website Responsive Testing

### Useful Sites

- [geeksforgeeks](https://www.geeksforgeeks.org/create-a-sudoku-puzzle-using-html-css-javascript/) - Provided the JavaScript logic and puzzle regeneration mechanics for the Sudoku game. I focused on showcasing how I customized these features using JavaScript.

- [Stack Overflow](https://stackoverflow.com/)- A go-to resource for troubleshooting code-related questions. It’s incredibly reassuring to know that countless others have faced similar challenges, making problem-solving feel less isolating.

- [mdn-web_docs](https://developer.mozilla.org/en-US/)- A fantastic resource with clear explanations and visual examples. MDN has been invaluable for understanding web development concepts and honing my skills through hands-on learning.

- [geeksforgeeks](https://www.geeksforgeeks.org/)-  I adapted and customized their examples for my own projects, and their clear explanations made the learning process much smoother.



## Author

- LinkedIn - [Anjie M.F.](https://www.linkedin.com/in/anjiemay23/)
- Frontend Mentor - [Anjie-MF](https://www.frontendmentor.io/profile/Anjie-MF)


## AI prompt

- OpenAI - [ChatGPT](chat.openai.com) - I used ChatGPT as an AI companion to create a personal Q&A framework. This helped me better understand the new concepts I encountered while building this project. The prompt I used to guide the discussion was:

```Ok, I tried to google this answer and got a multitude of solutions. How do I learn what to google? I don't want to copy and paste. I want to learn the fundamentals behind it. Like, what articles do I need to read to come to the answer you did?```

This process helped me deepen my understanding and learn to independently explore related topics effectively.

## Acknowledgments

- Skillcrush -  [Skillcrush](https://www.skillcrush.com) - More than just a coding academy. It is a supportive community with a rigorous curriculum that fostered my growth as a developer, enabling me to tackle this project with unwavering determination. 🖤 🖤 

- GeeksforGeeks - [geeksforgeeks]()- The core JavaScript logic for Sudoku generation and solving is from GeeksforGeeks.Thanks for doing the heavy lifting so I can showcase the JS I learned. 
