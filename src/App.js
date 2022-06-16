// import React from 'react'
// import Product from './screens/Product'

// const App = () => {
//   return (
//     <div>
//       <Product
//         name='Tesla'
//         description='Electric Car'
//         price={89999.99}
//       />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = ({onClickNameChange}) => {

//   const [greeting, setGreeting] = useState('');

//   return (
//     <div>
//       <h1><Parent1 onClickNameChange={() => setGreeting('Hello')}/></h1>
//       <h1><Parent2 greeting={greeting}/></h1>
//     </div>
//   )
// }

// export default App

// const Parent1 = ({onClickNameChange}) => {
//   return (
//     <>
//       Parent1
//       <Child1 onClickNameChange={onClickNameChange}/>
//       <Child2/>
//     </>
//   )
// }

// const Parent2 = ({greeting}) => {
//   return (
//     <>
//       Parent2
//       <Child3/>
//       <Child4 greeting={greeting}/>
//     </>
//   )
// }

// const Child1 = ({onClickNameChange}) => {

//   return (
//     <>
//     <div onClick={() => onClickNameChange()}>
//       C1
//     </div> 
//     </>
//   )
// }

// const Child2 = () => {
//   return (
//     <>
//       C2
//     </>
//   )
// }

// const Child3 = () => {
//   return (
//     <>
//       C3
//     </>
//   )
// }

// const Child4 = ({greeting}) => {
//   return (
//     <>
//       {(greeting)? greeting : "Bonjour" }
//     </>
//   )
// }

import React from 'react'
import { useState } from 'react'

const App = ({}) => {

  const [name, setName] = useState('');

  return (

    <div>
      <P1 onClickFunction={() => setName('YO')}/>
      <P2 name={name}/>
    </div>
  )
}

export default App

const P1 = ({onClickFunction}) => {
  return (
    <div>
      <C1 onClickFunction={onClickFunction}/>
    </div>
  )
}


const P2 = ({name}) => {
  return (
    <div> 
      <C4 name={name}/>
    </div>
  )
}


const C1= ({onClickFunction}) => {
  return (
    <div onClick={() => onClickFunction()}>
      c1
    </div>
  )
}


const C4= ({name}) => {
  return (
    <div>
      {(name)? name : 'Hey'}
    </div>
  )
}






