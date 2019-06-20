import React from 'react'
import {formatThousand} from '../../../helpers/format'

import {
  MainContainer,
  TitleContainer,
  TextsContainer,
  CardText,
} from './styled'

class Card extends React.Component {

  render() {
    return (
      <MainContainer className={this.props.className}>
        <TitleContainer>
          <h1>{this.props.planetName}</h1>
        </TitleContainer>
        <TextsContainer>
          {this.props.planetAttributes.map((item, key) => {
            if(item.attribute === "population") {
              return (
                <div key={key}>
                  <CardText>{item.attribute}: </CardText>
                  <CardText>{formatThousand(this.props.population)}</CardText>
                </div>
              )
            }
            if(item.attribute === "climate") {
              return (
                <div key={key}>
                  <CardText>{item.attribute}: </CardText>
                  <CardText>{this.props.climate}</CardText>
                </div>
              )
            }
            if(item.attribute === "terrain") {
              return (
                <div key={key} >
                  <CardText>{item.attribute}: </CardText>
                  <CardText>{this.props.terrain}</CardText>
                </div>
              )
            }
          })
          }
        </TextsContainer>
        <CardText>Featured in {this.props.films} films</CardText>
      </MainContainer>
    );
  }
}

export default Card;