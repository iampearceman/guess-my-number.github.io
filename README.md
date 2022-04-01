## Guess My Number Game

[PLAY NOW](https://pearceman.github.io/guess-my-number.github.io/)

### Welcome to my first public GitHub project.

#### It a huge step for me as I was struggeling actually finishing anything.


> I would be happy to hear / see / read your thoughts about the
> javascript part 

(I was working on top of a ready design)
Maybe in the future I will also edit the design.

###I've learn few things in this project:
- The way you naming variables and functions should be consistent. 

##### example: 
```javascript
//camelCase
function myFirstFunction (a,b) {
	return a+b;
   }
   
//Underscores
function my_second_function (c,d) {
	return c+d;
   }

//No matter what you feel more comfartable with - just be consistent 
//for your sake and others who will read your code
```
- A function should have only **one** job
##### example: 
```javascript

//Not good 👎

function get_visitor_name () {
	let visitor = prompt("Please enter your name");
	let visitor_age = prompt("Please enter your age");
   }
   
//Good 👍

function get_visitor_name () {
	let visitor = prompt("Please enter your name");
   }
function get_visitor_age () {
		let visitor_age = prompt("Please enter your age");
   }

```

To quote [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) by [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) on the page 36, it says:

> So, another way to know that a function is doing more than "one thing" is if you can extract another function from it with a name that is not merely a restatement of its implementation.

- I also learn how to deploy my project to [GitHub Pages](https://pages.github.com/)
