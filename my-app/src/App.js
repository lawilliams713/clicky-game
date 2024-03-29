
import React, { Component } from 'react';
import './App.css';
import dogs from './dogs.json'
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Title from './components/Title'
import DogPic from './components/DogPic'

class App extends Component {
  state = {
      message: "Click an image to begin!",
      topScore: 0,
      curScore: 0,
      dogs: dogs,
      unselectedDogs: dogs
  }

  componentDidMount() {
  }

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  selectDog = breed => {
      const findDog = this.state.unselectedDogs.find(item => item.breed === breed);

      if(findDog === undefined) {

          this.setState({ 
              message: "You guessed incorrectly!",
              topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
              curScore: 0,
              dogs: dogs,
              unselectedDogs: dogs
          });
      }
      else {

          const newDogs = this.state.unselectedDogs.filter(item => item.breed !== breed);
          
          this.setState({ 
              message: "You guessed correctly!",
              curScore: this.state.curScore + 1,
              dogs: dogs,
              unselectedDogs: newDogs
          });
      }

      this.shuffleArray(dogs);
  };

  render() {
      return (
          <Wrapper>
              <Nav
                  message={this.state.message}
                  curScore={this.state.curScore}
                  topScore={this.state.topScore}
              />
              <Title />
              {
                  this.state.dogs.map(dog => (
                      <DogPic
                          breed={dog.breed}
                          image={dog.image}
                          selectDog={this.selectDog} 
                          curScore={this.state.curScore}
                      />
                  ))
              }
          </Wrapper>
      );
  }
}

export default App;
