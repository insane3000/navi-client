import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    /* overscroll-behavior: contain; */
    margin:0;
    padding:0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    /* user-select: none; */
    scroll-behavior: smooth;
}
body{
  background: rgb(0, 0, 0);
 
}
#root{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #070707;
   
}
// !Media query a partir de 568px  
@media only screen and (min-width: 568px) {
  html{
    font-size: 8px;
  }
  *{
   
  }
}
// !Media query a partir de 768px  
@media only screen and (min-width: 768px) {
  html{
    font-size: 10px;
  }
}
// !Media query a partir de 1024px  
@media only screen and (min-width: 1024px) {
  html{
    font-size: 12px;
  }
}
// !Media query a partir de 1280 * 720 720p
@media only screen and (min-width: 1280px) {
  html{
    font-size: 16px;
    
  }
  }
// !Media query a partir de 1920 * 1080  
@media only screen and (min-width: 1920px) {
  html{
    font-size: 20px;
  }
}
// !Media query a partir de (Lg-Ultrawide-2560*1080) + (2K-2560*1440) 
@media only screen and (min-width: 2560px) {
  html{
    font-size: 28px;
  }
}
 // !Media query a partir de 3840 * 2160 4K 
 @media only screen and (min-width: 3840px) {
  html{
    font-size:32px;
  }
} 
// !Media query a partir de 5120 * 1440 px Odyssey G9
@media only screen and (min-width: 5120px) {
  html{
    font-size:60px;
  }
} 
 // !Media query a partir de 7680 * 4320 8K
 @media only screen and (min-width: 7680px) {
  html{
    font-size:80px;
  }
} 
`;
export default GlobalStyle;
