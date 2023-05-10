import styled from 'styled-components';
import { Colors } from "../Theme";

const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${Colors.Border};
  ${'' /* background-color: ${Colors.Background};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); */}
  box-shadow: 0px 0px 0.8rem ${Colors.Primary};
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100px;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EventLocation = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${Colors.White};
`;

const EventDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


const EventTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${Colors.White};
`;

const EventCreator = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${Colors.White};
  text-align: right;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const EventCard = ({eventTitle, eventLocation, eventTime, creatorName, eventImage}) => {
  return (
    <CardContainer href="/event">
      <ImageContainer src = {eventImage}/>
      <ContentContainer>
        <EventDetailsContainer>
          <EventTitle>{eventTitle}</EventTitle>
          <EventCreator>{creatorName}</EventCreator>
        </EventDetailsContainer>
        <EventLocation>{eventLocation}, {eventTime}</EventLocation>
      </ContentContainer>
    </CardContainer>
  );
};

export default EventCard;
