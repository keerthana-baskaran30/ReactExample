import React from 'react'


export default function Greet(value){
    const id = "greet"
    return (<div>
                <h1 id = {id} className = "greet class">Hi {value.name}</h1>
                <Address/>
            </div>     
        );
}

// export default function Greet(value){
//     return (<div>
//                 <h1>Hi {value.name}</h1>
//                 <Address/>
//             </div>   
//             <h1>qwert</h1> 
//         ); Cant return values like this put h1 inside a div or send it as array with a key attribute
// }

export function Home(){
    const jsx = <h1 id ="jsx">Hello</h1>;
    console.log(jsx)
    return jsx
}

// using React Fragment to send multiple elements
export function Address(){
    return (
        // <React.Fragment>
        //     <h1>wedrftgvdk</h1>
        //     <h2>dertgfrtgvc</h2>
        // </React.Fragment>
        <>
            <h1>wedrftgvdk</h1>
            <h2>dertgfrtgvc</h2>
        </>
    )
}


export class ExpenseEntryItem extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
       return (
          <div>
             <div><b>Item:</b> <em>{this.props.item.name}</em></div>
             <div><b>Amount:</b> <em>{this.props.item.amount}</em></div>
             <div><b>Spend Date:</b> <em>{this.props.item.spendDate.toString()}</em></div>
             <div><b>Category:</b> <em>{this.props.item.category}</em></div>
          </div>
       );
    }
}
ExpenseEntryItem.defaultProps = {
    name:"qaz",
    amount:"ygd",
};

let counter = 0;
export function Counter(){
    counter++;
    console.log("counter", counter);
    return <h1>{counter}</h1>;
}
// export default Greet

