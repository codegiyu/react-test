import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const Header = () => {
  return (
    <div className="header py-5">
      <h1 className="text-5xl font-bold text-center mb-4">30 Days Of React</h1>
      <h2 className="text-3xl font-semibold text-center">Number Generator</h2>
    </div>
  )
}

const Box = ({ array }) => {
  let classStyles = "w-full aspect-square flex items-center justify-center " + array[1]
  let Styles = {
    borderRadius: "5px"
  }
  return (
    <div className={ classStyles } style={ Styles }>
      <p className="text-xl font-bold text-white">{ array[0] }</p>
    </div>
  )
}

let numArr = Array(32).fill(0).map((item, idx) => {
  if ([2,3,5,7,11,13,17,19,23,29,31].includes(idx)) return [idx, 'bg-red-500']
  if (idx % 2 === 0) return [idx, 'bg-green-500']
  else return [idx, 'bg-yellow-500']
})
console.log(numArr)

const BoxSet = ({ array }) => {
  let boxset = array.map(item => <Box key = { item[0] } array={item} />)
  return (
    <div className="boxset grid grid-cols-8 gap-[1px] w-full">
      { boxset }
    </div>
  )
}

const Main = () => {
  return (
    <div className="main w-full mx-auto mt-4">
      <BoxSet array = {numArr} />
    </div>
  )
}

const App = () => {
  return (
    <div className="body bg-white font-mono min-h-screen px-48">
      <Header />
      <Main />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);