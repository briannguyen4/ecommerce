import styled from "styled-components"
import { Send } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: peachpuff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 72px;
    margin-bottom: 16px;
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})};
`

const InputContainer = styled.div`
    background-color: white;
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({width: "85%"})};
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    
`

const Button = styled.button`
    border: none;
    background-color: lightblue;
    color: white;
    flex: 1;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Be the first to know about new releases and sales!</Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
