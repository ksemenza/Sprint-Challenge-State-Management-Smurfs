1. What problem does the context API help solve?


It provides an alternative to prop-drilling, where state that is needed by child components has to be passed down as props to each child component along the path to the child component that needs the state data. So some components receive props that they don’t even use! (except to pass along). With context API, the components that are nested inside the Provider have access to state data if they need it, without worrying about a direct line of passing props.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?


Actions: They are objects with one required parameter of type, and an optional parameter called payload. The type describes the interaction/event that took place, and the payload is the data that the reducer will need. Actions are sent to the reducer. Actions are made by action creators.

Reducers: They are pure functions that take in actions and return new state. The action type determines which code inside the reducer is run, to update a copy of the state and then return that new, updated copy. Given the same input, a reducer will return the same output each time.

Store: It is a JavaScript object that stores the state of an application. You can connect components to it in order for the components to receive the store data as props. The store is not reshaped, that is, the number of its properties doesn’t change, and it is not mutated. Therefore, it’s easier to maintain a clean structure for the state, and the store’s data is easily accessed.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the data that is needed throughout an application. If set up correctly, any component in an application can access it. It can be considered ‘global’. Component state is data that is local to a single component; it can’t be seen outside of the component, unless the component passes down state as props. To decide which to use, you should consider where the data will be needed. If it is needed in multiple cases, it would be a good candidate for application state, such as in a redux store. If it is only used in one component, or maybe a component and its child, putting that data in a global state could unnecessarily complicate things.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware node package that lets us write thunks, which are functions that return another function, in our action creators. This handy for async operations, and other things that can be considered side effects. Thunks can delay the dispatch of an action or dispatch only under certain conditions. Reducers are pure functions, so they can’t do async operations. Side effects are run at the middleware level instead, when thunks are invoked by middleware. 

What redux-thunk middleware does:
actionOrThunk =>
typeof actionOrThunk === 'function'
? actionOrThunk(dispatch, getState)
: passAlong(actionOrThunk);

If a normal action object is dispatched, redux-thunk passes it along to the reducer. But if a function (a thunk) is dispatched, redux-thunk calls the function, passing in dispatch and getState. When an async effect is complete, the callback can dispatch a normal action to the store.

I found it interesting that the creator of Redux wrote redux-thunk as part of Redux before it was split into its own package.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is redux, as opposed to Context API, because it seems to be more complete. It seems more structured, especially for how state is modified, and therefore more like a finite state machine. And therefore, more easily maintained and tested. However, I might change my mind once I learn more about Context API.
