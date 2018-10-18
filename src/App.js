import React, { Component } from 'react';
import './App.css';
import { UserCard } from 'react-ui-cards';




class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    deck: [],
  }
  }


  componentWillMount = () => {
    let suits = ['♥︎', '⬥', '♠︎', '♣︎'];
    let values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    for (let i = 0; i < values.length; i++){
      for (let j = 0; j < suits.length; j++){
        this.state.deck.push(values[i] + ' of ' + suits[j]);
      }
    }
  }

  shuffle = (e) => {
    let cards = this.state.deck;
    e.preventDefault();

    for (let i = cards.length - 1; i > 0; i--){
      let randomNum = Math.floor(Math.random() * i);
      let temp = cards[i];
      cards[i] = cards[randomNum];
      cards[randomNum] = temp;
    }
    this.setState({deck: cards})
  }


  


  render() {
    return (
      <div className="App">
        <div className="Title"> 
        <h2>Way2B1 Card Game! </h2> </div>
        <div className="Button"> <button onClick={this.shuffle}> Shuffle Cards!
        </button>
        </div>
        <div className = "cardContainer"> 
        {this.state.deck.map((card) => {
          return (
       <UserCard card={card}
       cardClass='float'
       name={card}
       header='http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-fournier-505-1_grande.jpg?v=1530155575'

              />
            );
          })};
        </div>
      </div>
    );
  }
}




// { props.businesses.map((business)=>{
//   return (
//     <div key={ business.id } className="col-md-5" style={{ marginBottom: "2rem" }}>
//       <div className="business__name">
//           <h5>{ business.name }</h5>
//           <p className="business__address">Address: <span>
//             { business.vicinity }
//           </span></p>
//       </div>
//       <button className="business__button">
//         <Link to={{ 
//         pathname: `/business/${business.reference}`,
//         state: { business: business.place_id }
        
// }) }}}>View Business</Link>
//       </button>
//     </div>
//    )

export default App;



                