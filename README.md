
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: It selects a single element by its unique ID. It is the fastest way to find an element.
​getElementsByClassName: It selects all elements that have a specific Class name. It returns a collection of elements.
​querySelector: It is very flexible. To get all matching elements, we use querySelectorAll.


### 2. How do you create and insert a new element into the DOM?
To add a new element, we follow three simple steps:
Create: Use document.createElement('tagname') (ex : div or p).
Content: Add some text or HTML using .innerText or .innerHTML.
Insert: Use .appendChild() or .append() to attach it to a parent element.

### 3. What is Event Bubbling? And how does it work?
Event bubbling is a type of event propagation where an event happens on an element , it does not stay there. It bubbles up through it's ancestors in the DOM tree untill it reaches top.

The event starts at an element, then reaches from the child element to parent element to the root.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a process where we don't need to set EventListener() for each child element and add EventListener() for their parent elemnt only.
we can handle a click on any li by added EventListener() to the ul.

useful: save memory, automatically handles elements added to the DOM after initial page load., the code will be clean.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): It stops the default action of the browser. For example, it stops a link from opening a URL or a form from refreshing the page when submitted.
stopPropagation(): It stops Event Bubbling. It prevents the event from traveling up to the parent elements. It ensures that only the clicked element's function runs.

