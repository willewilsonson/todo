# &lt;/salt&gt;

## Salt ToDo React

This is the new classic Todo app exercise. Your task is to create a simple todo app - no backend required.
Exactly how you implement and design this is up to you - but you need to implement it using React and you need to follow the specifications as detailed below. You may use the screenshot at the bottom of this page as inspiration.

Nothing is set up for you, and we recommend that your first command is:

`npx create-react-app todoreact`

Then use this .eslintrc.json
`{
    "extends": "salt"
}`

and this .eslintignore.
`src/serviceWorker.js`

Now you should be all set to conquer the world!

Take care reading the UI and Technical specifications below as they are in a different format to before, they follow the [RFC2119]
(https://www.ietf.org/rfc/rfc2119.txt) specification.

>There are many guides out there for building react todo apps, feel free to take inspiration from these but make sure to not copy-paste solutions as that would be considered cheating.

### UI specifications
* There MUST be a form input where the user can add a new todo.
* On first load the list of todos MUST be empty.
* When the user submits a new todo from the form the todo card MUST appear in the list.
* Each todo card MUST be toggleable between 'done' and 'not done'.
* There MUST be a remove-button on cards that are 'done' and when the user clicks the button it will be removed from the list completely.
* Todo cards which are set to 'done' MUST appear on the bottom of the list, and they SHOULD be easy to visually separate.
* The original order of the cards MUST be maintained if you toggle a card to 'done' and then back again.
* It SHOULD be easy to add, toggle and remove todo's. For example adding a new card by hitting 'enter'

### Technical specifications
* You MUST keep the todo-list in a state object, you can choose yourself where this should reside.
* You MUST use at least 3 levels of components. In the simplest case this would be an App component in which you have a TodoList component containing TodoCard components.
* You MUST use `props` for passing the necessary information to the todo components.
* You MUST use Semantic html elements.
* You MUST use a clear naming strategy for your css and class names.
* You SHOULD use BEM.
* You SHOULD have a mobile first approach.
* You SHOULD have suitable tests.
* You MUST NOT use React Router nor Redux.

### Handing in!
* Check that you have no console errors.
* Make sure it runs from a clean `npm i && npm start`.
* Hand in the entire project except for the node_modules.
* Upload this to your weekend test folder in a folder named 'todoreact'.

Make it work, and then if you have time, make it great!

| ![Todo](todo.png) |
|:---:|
| Example of a todo app |

## FAQ

We have not gone through how to handle form and input in React, where can I get started?
> A great place to start is [React.org/docs/forms](https://reactjs.org/docs/forms.html), but there are tons of guides out there, so use whichever you like.

Can we ignore Internet Explorer?
> Yes, you do not have to consider compatibility with Internet Explorer.

I'm so stuck, and I don't know how to get started!
> Take a break, you have all the information and skills you need to solve this. Go through one of the many guides out there until you understand how to make it work, then write your own solution. Once you understand how it goes together it will be fast to write it.

How will you judge our solutions?
> We are going to judge them based on functionality (50%), and a code review where we confirm that the technical specification has been followed (50%). We will not judge the design.
