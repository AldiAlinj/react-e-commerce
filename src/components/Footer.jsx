import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display : flex;
    ${mobile({ flexDirection: "column" })};

`
const Left = styled.div`
flex : 1;
display : flex;
flex-direction: column;
padding : 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
    margin : 20px 0px;
`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.div`
width : 40px;
height : 40px;
border-radius : 50%;
color : white;
background-color : #${props => props.color};
display: flex; 
align-items: center;
justify-content: center;
margin-right: 20px; 

`

const Center = styled.div`
flex : 1;
padding: 20px; 
${mobile({ display: "none" })};

`

const Title = styled.h3`
margin-bottom : 30px;

`



const List = styled.ul`
margin : 0;
padding : 0;
list-style : none;
display : flex;
flex-wrap : wrap;
`

const ListItem = styled.li`
width : 50%;
margin-bottom: 10px;

`



const Right = styled.div`
flex : 1;
padding : 20px;

`

const ContactItem = styled.div`
margin-bottom : 20px;
display : flex;
align-items : center;

`
const Payment = styled.img`
`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SLARK</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, reprehenderit, eius corrupti maxime deleniti dignissimos in laborum est unde inventore aliquid quibusdam sit ratione. Aut eligendi suscipit velit quo delectus.</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} /> Rruga Mine Peza, Prokuroria e Tiranës</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} />+355 69 83 76 822</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: "10px" }} />contact@slark.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer