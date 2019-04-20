1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Map, filter and concat are JS array methods that don't produce side-effects. We use Object.assign to extend the properties of another object.

2)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are pretty much just objects that relay information so that reducers can apply changes to state. Which will happen within the store.
    The store is known for being the 'single source of truth', because the store holds the state of the application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state is local while Application state can be accessed from any component easily.
    Application state is good to use over Component when changes must be made to the entire application from within components.

4)  What is middleware?

    Middleware operates between actions and the store. When an action is sent to the store, middleware can enhance or change the properties/function of the actions.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk allows us to make action-creators that return functions instead of just an action. Thunks can help us dispatch functions only if conditions are met.

6)  Which `react-redux` method links up our `components` with our `redux store`?

    .connect() allows us to link components with the store.
