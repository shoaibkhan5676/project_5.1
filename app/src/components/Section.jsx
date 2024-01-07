import React from 'react'
import styled from 'styled-components'
import FoodCard from './FoodCard'

const Section = (props) => {
  return (
    <>
    <SectionContainer>


        <div className="cardContainer">
          {props.foodydata?.map((element,index)=>{
            return(
              <FoodCard key={index} image={element.image} text={element.text} price={element.price} type={element.type} name={element.name} />

            )

          })}
        

        </div>


    </SectionContainer>
      
    </>
  )
}

export default Section



const SectionContainer=styled.div`
background-image: url("src/Images/bg.png");
background-size: cover;
min-height: 100vh;
padding-top: 30px;


    .cardContainer{
        width: 90%;
        margin: 0 auto;
        min-height: 400px;
        display: flex;
        row-gap: 20px;
        column-gap: 20px;
        justify-content: center;
        flex-wrap: wrap;

    }
 
  
    


`