function customRender(reactElement,Container){     //customm render function


    /*NOT A SUITABLE CODE AS WE HAVE TO WRITE FOR EVERY ATTRIBUTE

    const domElement = document.createElement(
        reactElement.type
    )
    domElement.innerHTML =reactElement.children  
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    Container.appendChild(domElement)
    */


    //USING LOOP 
    
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML =reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
}

// 1. creating a react element
const reactElement = {
    type: 'a',                  //tyoe -> anchor tag
    props: {
        href: "https://google.com",  //properties
        target: '_blank'
    },
    children: 'click me to visit google'  //content
}

const mainContainer =document.querySelector("#root")   //selecting container whose id is root

//custom render
customRender(reactElement, mainContainer)     // calling custom render function