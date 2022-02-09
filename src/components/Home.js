import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section
        heading="Model 3"
        text="Order Online for Touchless Delivery"
        image='/images/model-3.jpg'
        leftButtonText='CUSTOM ORDER'
        rightButtonText ="EXISTING INVENTORY"
         />
         <Section
        heading="Model Y"
        text="Order Online for Touchless Delivery"
        image='/images/model-y.jpg'
        leftButtonText='CUSTOM ORDER'
        rightButtonText ="EXISTING INVENTORY"
         />
         <Section
        heading="Model S"
        text="Order Online for Touchless Delivery"
        image='/images/model-s.jpg'
        leftButtonText='CUSTOM ORDER'
        rightButtonText ="EXISTING INVENTORY"
         />
         <Section
        heading="Model X"
        text="Order Online for Touchless Delivery"
        image='/images/model-x.jpg'
        leftButtonText='CUSTOM ORDER'
        rightButtonText ="EXISTING INVENTORY"
         />
         <Section
        heading="Solar Panels"
        text="Lowest Cost Solar Panels in America"
        image='/images/solar-panel.jpg'
        leftButtonText='ORDER NOW'
        rightButtonText ="LEARN MORE"
         />
         <Section
        heading="Solar Roof"
        text="Produce Clean Energy From Your Roof"
        image='/images/solar-roof.jpg'
        leftButtonText='ORDER NOW'
        rightButtonText ="LEARN MORE"
         />
         <Section
        heading="Accessories"
        
        image='/images/accessories.jpg'
        leftButtonText='SHOP NOW'
         />

    </Container>
  )
}

export default Home;

const Container = styled.div`

`