import React from 'react'
import styled from 'styled-components'

const InfoCardComponent = ({ info, infoBold, photo, isLeft, isRight, max }) => {
  console.log(isLeft)
  console.log(isRight)
  return (
    <Container>
      {isLeft && (
        <Photo isLeft={isLeft}>
          <img src={photo} alt="" />
        </Photo>
      )}
      <ContainerInfo isLeft={isLeft}>
        <Info isLeft={isLeft} max={max}>
          {info}
        </Info>
        {infoBold && (
          <InfoBold isLeft={isLeft} max={max}>
            {infoBold}
          </InfoBold>
        )}
      </ContainerInfo>
      {isRight && (
        <Photo isRight={isRight}>
          <img src={photo} alt="" />
        </Photo>
      )}
    </Container>
  )
}

export default InfoCardComponent

const Container = styled.div`
  background-color: #ffffff;
  width: 844px;
  height: 346px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

const Photo = styled.div`
  display: flex;
  width: 302px;
  overflow: hidden;
  margin-right: ${(props) => props.isRight && '25px'};
  margin-left: ${(props) => props.isLeft && '25px'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ContainerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: ${(props) => props.isLeft && 'end'};
`

const Info = styled.p`
  max-width: ${(props) => props.max};
  font-size: 16px;
  line-height: 19.5px;
  color: #272727;
  font-family: 'fuenteRegularMont';
  text-align: ${(props) => props.isLeft && 'right'};
`

const InfoBold = styled(Info)`
  font-family: 'fuenteSemiMont';
`
