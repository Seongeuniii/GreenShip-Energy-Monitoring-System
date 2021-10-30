import styled from 'styled-components';
import Engineer from './Engineer';

const FooterWrapper = styled.div`
  height: 200px;

  .footerheader {
    font-size: 15px;
    color: rgb(184, 177, 177);
    font-weight: bold;
    margin: 10px 10px 10px 5px;
   }

  ul {
    margin: 0;
    padding: 0;
    list-style:none;
    white-space:nowrap; 
    overflow-x: auto;
  }
  li{
    margin-right: 20px;
    display:inline-block;
  }
  
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footerheader">
        <span>Comment</span>
      </div>
      <ul>
        <li><Engineer/></li>
        <li><Engineer/></li>
        <li><Engineer/></li>
      </ul>
    </FooterWrapper>  
  )
}

export default Footer;