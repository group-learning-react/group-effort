import React from 'react'
import styled from 'styled-components';
import $ from 'jquery';
const Container = styled.div`
margin-top:1rem;
background:transparent;
display:flex;
flex-direction:column;
width:100%;
height:45rem;
align-items:center;
justify-content:center;
summary {
    font-size: 1.25rem;
    font-weight: 600;
    background-color: #00DBDE;
    background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);

    color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    outline: none;
    border-radius: 0.25rem;
    text-align: left;
    cursor: pointer;
    position: relative;
    width:100rem;
  }
  details[open] summary ~ * {
    animation: sweep .5s ease-in-out;
  }
  @keyframes sweep {
    0%    {opacity: 0; margin-top: -10px}
    100%  {opacity: 1; margin-top: 0px}
  }
  details > summary::after {
    position: absolute;
    content: "+";
    right: 20px;
  }
  details[open] > summary::after {
    position: absolute;
    content: "-";
    right: 20px;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  .faq__content p{
      font-weight:700;

  } 

`;



function About() {
  return (
    <Container>
        <h1>About Us</h1>
        <main>
  <details open>
    <summary>How I solve this issue?</summary>
    <div class="faq__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor suscipit, iure tenetur eveniet, vero tempore delectus? Perferendis, quisquam ullam consequuntur?</p>
    </div>
  </details>

    <details>
    <summary>How to input your data on this board?</summary>
    <div class="faq__content">
      <p>Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
    </div>
  </details>
   </main>
    </Container>
  )
}

export default About