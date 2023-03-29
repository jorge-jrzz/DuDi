
import styled from "styled-components";

const Footter = () => {
    return ( 
        <TheFooter>
            <h2>&#169;DuDi</h2>
        </TheFooter>
     );
}
 
const TheFooter = styled.footer`
    width: 53%;
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;

    h2 {
        text-align: right;
        font-size: 15px;
        color: #fff;  
        font-weight: bold;
    }

    @media(max-width: 60rem){ /* 950px */
        width: 70%;
        max-height: none;
    }
`;

export default Footter;