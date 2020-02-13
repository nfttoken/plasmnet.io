import React from "react";
import styled from "styled-components";
import { Card, Icon } from "semantic-ui-react";
import { customMedia } from "../styles/globalStyle";
import { theme } from "../styles/theme";
import { IRoadmap } from "../type/types";

interface Props {
  list: IRoadmap;
}

const RoadmapCard: React.FC<Props> = (props: Props) => {
  const { list } = props;
  return (
    <RoadmapCardContainer>
      <Card className={`${list.id % 2 === 0 ? "card-down" : "card"}`}>
        <Card.Content>
          <div className="header">
            <Icon name="calendar check outline" className="icon" />
            <h3>{list.month}</h3>
          </div>
          <ul>
            {list.task.map((task: any) => (
              <li>{task}</li>
            ))}
          </ul>
        </Card.Content>
      </Card>
    </RoadmapCardContainer>
  );
};

export default RoadmapCard;

const RoadmapCardContainer = styled.div`
  .card {
    width: 440px;
    height: 260px;
    box-shadow: 0 20px 60px rgba(1,50,204,.1);
    border-radius: 10px;
    ${customMedia.lessThan("laptop")`
      width: 600px;
      `}
    ${customMedia.lessThan("tabletSmall")`
      width: 334px;
      `}
  }
  .content {
    padding:0 !important;
    display: grid;
  }
  .card-down {
    border-radius: 10px;
    width: 440px;
    height: 260px;
    box-shadow: 0 20px 60px rgba(1,50,204,.1);
    ${customMedia.greaterThan("laptop")`
    margin-top: 94px !important;
    `}
    ${customMedia.lessThan("laptop")`
    width: 600px;
    `}
    ${customMedia.lessThan("tabletSmall")`
    width: 334px;
    `}
  }
  
  
  .header{
    height: 100px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    display: grid !important;
    grid-template-columns: 1 1;
    align-items: end;
    padding: 20px;
    background-color: ${theme.colors.blue};
    ${customMedia.lessThan("tabletSmall")`
      height: 90px;
    `}
  }
    .icon {
      font-size: 40px;
      grid-column: 1/2;
      ${customMedia.lessThan("tabletSmall")`
        font-size: 30px;
      `}
    }


    h3 {
      font-size: 28px;
      color: ${theme.colors.black};
      margin: 0;
      padding-bottom: 12px;
      grid-column: 4/8;
      ${customMedia.lessThan("tabletSmall")`
        font-size: 26px;
        padding-bottom: 8px;
      `}
    }

    p {
      font-size: 18px;
      line-height: 26px;
    }

    ul{
      display: grid;
      align-items: center;
    }

    li{
      font-size: 22px;
      line-height:38px;
      ${customMedia.lessThan("tabletSmall")`
        font-size: 18px;
      `}
    }
`;
