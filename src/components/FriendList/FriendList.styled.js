import styled from "@emotion/styled";

export const FriendCatalogue = styled.ul`
  width: 320px;
  margin: 30px auto 30px auto;
  padding: 0;
  list-style: none;
`; 

export const Friend = styled.li`
    display: flex;    
    width: 100%;
    padding: 15px;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 10px;
    margin-bottom: 30px;
`;

export const OnlineStatus = styled.span`
display: block;
width: 20px;
height: 20px;
border: 1px solid #000000;
border-radius: 50%;
margin-right: 30px;
background-color: ${setBgColor};
`;

export const FriendAvatar = styled.img`
  display: block;
  margin-right: 30px;
`;

function setBgColor ({ isOnline }) {
    switch(isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'yellow';
    }
};