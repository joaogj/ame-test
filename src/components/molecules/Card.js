import React from 'react'
import axios from 'axios'

import {
  MainContainer,
  TitleContainer,
  TextsContainer,
  CardText,
} from './styled'

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      planetName: "clique aqui",
      population: "",
      climate: "",
      terrain: ""
    }
    this.handleChangePlanet = this.handleChangePlanet.bind(this);
  };

  handleChangePlanet(id){
    id = Math.floor((Math.random() * 61) + 1);
    axios.get("https://swapi.co/api/planets/" + id)
      .then(response => {
        this.setState({planetName: response.data.name})
        this.setState({population: response.data.population})
        this.setState({climate: response.data.climate})
        this.setState({terrain: response.data.terrain})
        console.log(response.data.name);
      })
      console.log(id)
  }

  render() {
    return (
      <MainContainer>
        <TitleContainer onClick={this.handleChangePlanet}>{this.state.planetName}</TitleContainer>
        <TextsContainer>
          {this.props.planetAttributes.map((item, key) => {
            if(item.attribute === "population") {
              return (
                <div>
                  <CardText key={key}>{item.attribute}: </CardText>
                  <CardText>{this.state.population}</CardText>
                </div>
              )
            }
            if(item.attribute === "climate") {
              return (
                <div>
                  <CardText key={key}>{item.attribute}: </CardText>
                  <CardText>{this.state.climate}</CardText>
                </div>
              )
            }
            if(item.attribute === "terrain") {
              return (
                <div>
                  <CardText key={key}>{item.attribute}: </CardText>
                  <CardText>{this.state.terrain}</CardText>
                </div>
              )
            }
          })
          }
        </TextsContainer>
      </MainContainer>
    );
  }
}

export default Card;