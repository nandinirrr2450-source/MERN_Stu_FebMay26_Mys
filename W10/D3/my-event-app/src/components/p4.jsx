// Synthetic event vs Native DOM events
// Synthetic Events
// => a wrapper created by React around the browser's native event
// =>Gives a consistent API across browsers meaning irrespective of users used any kind of browsers o/p should remain same
// =>works similarly to native DOM events
// =>still allows access to the original browser events via event.nativeEvent

// Why does react use it?
// =>to make event handling behave consistently
// => to simplify cross-browser differences
// => to integrate smoothly with React's event system

// How Synthetic events works?
// =>Component renders:- A button appears on the screen and then handleClick is defined but it is not executed
// =>User clicks the button:- browser creates a native click event
// 												:- React wraps that native event in a SyntheticEvent
// 												:- react passes the syntheticEvent to handleClick
												
// 												:- event refers to the syntheticEvent
// 												:- event.target gives us the HTML elements	