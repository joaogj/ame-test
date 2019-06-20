import React from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'
import Button from '../../atoms/Button'
import Card from '../../molecules/Card'

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
      class: "card-hide",
      loading: true,
    }
    this.handleChangePlanet = this.handleChangePlanet.bind(this);
  };

  componentDidMount(){
    this.handleChangePlanet()
  }

  handleChangePlanet(id){
    id = Math.floor((Math.random() * 61) + 1);
    axios.get("https://swapi.co/api/planets/" + id)
      .then(response => {
        if(response.data.films.length !== 0 && response.data.climate !== "unknown" && response.data.terrain !== "unknown") {
          this.setState({planetName: response.data.name})
          this.setState({population: response.data.population})
          this.setState({climate: response.data.climate})
          this.setState({terrain: response.data.terrain})
          this.setState({films: response.data.films})
          this.setState({loading: false})
          this.setState({class: "card"})
        }
        else {
          this.handleChangePlanet()
          this.setState({class: "card-hide"})
          this.setState({loading: true})
        }
        console.log(response.data);
        console.log(response.data.films)
      })
  }


  render () {
    return (
      <MainContainer>
        {this.state.loading ? <ReactLoading type={"spin"} color={"white"} height={'20%'} width={'20%'} /> : 
        <Card
          className={this.state.class}
          planetAttributes={this.props.planetAttributes}
          planetName={this.state.planetName}
          population={this.state.population}
          climate={this.state.climate}
          terrain={this.state.terrain}
          films={this.state.films.length}
        />
        }
        <Button onClick={this.handleChangePlanet} />
      </MainContainer>
    )
  }
}

export default Page