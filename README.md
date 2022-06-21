**Problems** - Some time we have write some logic in many components, also in fetching data we have to fetch in eatch componets if we  do'nt pass props
 
 **Solution** - A higher order components (HOC) is an advanced technique in React for reusing components logic . HOC is a function that takes a components and return a                   new components.
 **Syntax:      HOCS are not part of ReactAPI. They are pattern that emerges from React compositional nature
 
           
                      
                           const EnhancedComponent = higherOrderComponent(WrappedComponent)
                           
   Where, **higherOrderCompnet** is **HOC** Components that some additional functionalty to original component. Which is Which is WrappedComponent and returnd an                 **EnhancedComponent **
 
 
 
