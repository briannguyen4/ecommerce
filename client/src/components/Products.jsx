import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    /* justify-content: space-between; */
`

// const Container = styled.div`

// `

// const Container = styled.div`

// `

// const Container = styled.div`

// `

const Products = ({category, filters, sort}) => {
    // console.log(category, filters, sort);
    return (
        <Container>
            {popularProducts.map(item=>(
                <Product item={item} key={item.id}/>
                
            ))}
        </Container>
    )
};

export default Products;
