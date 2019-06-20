import React from 'react'
import axios from 'axios'

import Button from '../atoms/Button'
import Card from '../molecules/Card'

import {
  MainContainer
} from './styled'

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      planetName: "",
      population: "",
      climate: "",
      terrain: "",
      films: [],
    }
    this.handleChangePlanet = this.handleChangePlanet.bind(this);
  };

  componentWillMount(){
    this.handleChangePlanet()
  }

  handleChangePlanet(id){
    id = Math.floor((Math.random() * 61) + 1);
    axios.get("https://swapi.co/api/planets/" + id)
      .then(response => {
        if(response.data.films.length != 0 && response.data.climate != "unknown" && response.data.terrain != "unknown") {
          this.setState({planetName: response.data.name})
          this.setState({population: response.data.population})
          this.setState({climate: response.data.climate})
          this.setState({terrain: response.data.terrain})
          this.setState({films: response.data.films})
        }
        else
          this.handleChangePlanet()
        console.log(response.data);
        console.log(response.data.films)
      })
  }


  render () {
    return (
      <MainContainer>
        <Card 
          planetAttributes={this.props.planetAttributes}
          planetName={this.state.planetName}
          population={this.state.population}
          climate={this.state.climate}
          terrain={this.state.terrain}
          films={this.state.films.length}
        />
        <Button onClick={this.handleChangePlanet} />
      </MainContainer>
    )
  }
}

export default Page