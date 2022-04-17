import styled from 'styled-components'
export const SpinnerOverlay=styled.div`
    height: 50vh;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SpinnerContainer=styled.div`
display: inline-block;
width: 50px;
height: 50px;
border:3px solid rgba(195,195,195,0.6);
border-radius: 50%;
border-top-color: #636767;
animation: spin .7s cubic-bezier(0,0,0,0) infinite;

@keyframes spin {
    to{
        transform:rotate(360deg);
    }
}
    
`
