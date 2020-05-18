// function greeter(person) {
//     return "Hello, " + person;
// }
// var user = "Jane User";
// console.log(document);
// document.body.innerHTML = greeter(user);

import React from "react"
import { render } from "react-dom"
import ReactDOM from "react-dom"

class Main extends React.Component{
    render() {
        return (
            <div>hello world</div>
        )
    }
}

render(
    <Main/>,
    document.getElementById("root")
) 

// const divVD = React.createElement('div', {
//     title: 'hello react'
//   }, 'Hello React！！！！！！')
  
//   // 3. 渲染
//   // 参数1：虚拟dom对象  参数2：dom对象表示渲染到哪个元素内 参数3：回调函数
//   ReactDOM.render(divVD, document.getElementById('root'))
