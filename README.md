# learning-react
Learning React

Covered topic in this Repo
1. How to use React CDN 
2. How to Install React package and use them into our projects(npm install react and npm install react-dom)
3. Understand how React works behind the Scene
4. How to create dev and prod build using Parcel and how Parcel works behind the scene 
5. 


Some import notes 
1.React.createElement("{tag}",{}, "child element or content") #it will create an simple object with all the params by react
2.ReactDOM.render() # when we render the object is converted to html 
3.#Babel is libraray which converts modern Javascript syntax to older syntax which browser can understand. it's like transpiler. In React it converts JSX to JS or React code like below.
#code 
JSX : <h1 id ="msg">Hello Namsate Javascript</h1> 
#Babel does this behind the scene 
JS : React.createElement("h1",{id:"msg"}, "Hello Namaste Javascript")

#Destructring on the fly : This is concept when we accept the props as destructred object like ({name,image,price})

#Components in React :
There two way to write component in React
1. Class Component 
2. Functional component 

#Config Driven UI 

#Hooks in React
Hooks is simple javascript utility function provided by React library to interact with functional components
Here is widely used 
useState() - Add state to the functional component. means when we want to make some data reactive. means when you update the local state then that componenet re-render
useEffect()
useRef()
useContext()
useMemo()
