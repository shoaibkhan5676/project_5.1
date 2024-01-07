import React from 'react'
import styled from 'styled-components'

const FoodCard = (props) => {
    return (
        <>
            <FoodyCard>
                <div className="foodImage">
                    <img src={props.image} alt="food image" />
                </div>
                <div className="foodText">
                    <h3>{props.name}</h3>
                    <p>{props.text} </p>
                    <button className='btn2'>${props.price.toFixed(2)}</button>
                </div>

            </FoodyCard>

        </>
    )
}

export default FoodCard



const FoodyCard = styled.div`
   
        width: 340px;
  height: 167px;
  border: 0.66px solid white;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;
    

    .foodText{
        color: white;
        display: flex;
        flex-direction: column;

    }
    .foodText h3{
        font-size: 15px;
        line-height: 20px;
        margin-bottom:5px ;
    }
    .foodText p{
        font-size: 13px;
        line-height: 13px;
        margin-bottom: 10px;
        justify-content: center;
        align-items: center;
    }
    .btn2{
        background-color: #FF4343;
        width: 70px;
        margin-left: auto;
    color: white;
    padding: 9px 10px;
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
    margin-top: 10px;



  }
  .btn2:hover{
    background-color: #d24a4a;

  }




`
