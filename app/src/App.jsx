import styled from "styled-components"
import React,{useEffect,useState} from "react";
import Logo from "./Images/Logo.svg"
import Section from "./components/Section";

let BASE_URL='http://localhost:9000/'


const App = () => {
  const [data,setdata]=useState(null)
  const [searchfood,setsearchfood]=useState(null)

  const buttons=[
    {
      "name":"All",
      "type":"all",
    },
    {
      "name":"Break Fast",
      "type":"breakfast",
    },
    {
      "name":"Lunch",
      "type":"lunch",
    },
    {
      "name":"Dinner",
      "type":"dinner",
    },
  ]
  


  useEffect(()=>{
    
    fetch(BASE_URL)
    .then((response)=>{
      if(!response.ok){
        throw new Error("Network was not ok")
      }
      return response.json()

    })
    .then(data => {
      const formattedData = data.map(item => ({
        ...item,
        image: `http://localhost:9000${item.image}`,
      }));
      setdata(formattedData);
      setsearchfood(formattedData)
    })
    .catch((err)=>{
      console.error('There was a problem with the fetch operation:', err);

    })
  
  },[])


  const handleChange=(event)=>{
    let searchValue=event.target.value;

    if (searchValue===""){
      setsearchfood(data)
      return 
    }
    const filter_out_searched_data=data?.filter((element)=>{
      return(
        element.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
    setsearchfood(filter_out_searched_data)

  }


  const handleClick=(type)=>{
    if (type==="all"){
      setsearchfood(data)
      return
    }

    const filter_With_Button=data.filter((element,index)=>{
      return(
        element.type==type

      )
    })
    setsearchfood(filter_With_Button)
  

  }




  return <>
  <Container>
    <TopContainer>
      <div className="upper">


      <div className="image_div">
        <img src={Logo} alt="" />

      </div>
      <input type="text" onChange={handleChange} placeholder="Search Food..." name="" id="" />

      </div>


    <ButtonContainer>
      {buttons.map((element,index)=>{
        return(
          <button key={index} onClick={()=>{handleClick(element.type)}} className="btn1" >{element.name}</button>

        )

      })}
 

    </ButtonContainer>

    </TopContainer>
    <Section foodydata={searchfood} />


    
    



  </Container>

  
  
  </>;
};

export default App;


const Container=styled.div`
height: 100vh ;
width: 100vw;

`

const TopContainer=styled.div`
height: 180px;


  .upper{
    width: 90%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;


  }
  .upper input{
    width: 260px;
    background-color: transparent;
    border: 1px solid #FF4343 ;
    outline: none;
    border-radius: 5px;
    padding: 2px 7px;
    color: white;
  }
  .upper input::placeholder{
    color: white;
  }


  @media screen and (max-width:555px){
  .upper{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
    
  }
  .upper input{
  height: 40px;
  }
}
  


`

const ButtonContainer=styled.div`
display: flex;
justify-content: center;
gap: 12px;

  .btn1{
    background-color: #FF4343;
    color: white;
    padding: 9px 10px;
    min-width: 100px;
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;



  }
  .btn1:hover{
    background-color: #d24a4a;

  }

  
`

