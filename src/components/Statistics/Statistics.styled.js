import styled from '@emotion/styled';

export const StatBox = styled.section`
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #cccccc;
    margin: 30px auto 30px auto;
`;

export const StatTitle = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: space-evenly;

    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const StatItem = styled.li`
    flex-basis: calc(100% / 5);
    text-align: center;
    padding: 10px;
    border: 1px solid #9c9c9c;
`;

export const ItemLabel = styled.span`
    display: block;
    color: #000000;
`;

export const Itempercantage = styled.span`
    display: block;
    color: #000000;

font-weight: 700;
`;