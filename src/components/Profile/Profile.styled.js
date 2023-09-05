import styled from "@emotion/styled";

export const ProfileBox = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #cccccc;
    margin: 0 auto;
`;

export const ProfileDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
`;

export const UserAvatar = styled.img`
    display: block;
    width: 100px;
    max-width: 100%;
`;

export const UserName = styled.p`
    font-size: 24px;
    margin: 0;
    margin-bottom: 15px;
    color: #000000;
`;

export const UserTag = styled.p`
    font-size: 16px;
    color: #cccccc;
    margin: 0;
`;

export const UserLocation = styled.p`
    font-size: 16px;
    color: #cccccc;
    margin: 0;
`;

export const UserStats = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const StatsItems = styled.li`
    flex-basis: calc(100% / 3);
    text-align: center;
    padding: 10px;
    border: 1px solid #9c9c9c;
    background-color: #cccccc;
`;

export const UserLabel = styled.span`
    display: block;
    color: #000000;
`;

export const UserQuantity = styled.span`
    font-weight: 700;
    display: block;
    color: #000000;
`;