import styled from 'styled-components';
import { Colors } from "../Theme";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${Colors.Border};
  background-color: ${Colors.White};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100px;
  background-image: url('https://images2.alphacoders.com/649/649995.jpg');
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EventName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${Colors.Black};
`;

const EventLocation = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${Colors.Gray};
`;

const EventDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${Colors.Gray};
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const EventCard = () => {
  return (
    <CardContainer>
      <ImageContainer />
      <ContentContainer>
        <EventName>Event n</EventName>
        <EventLocation>New York City, NT = Wed, 02 Nov 2022</EventLocation>
        <EventDescription>
          NFT.NYC brings the Non-Fungible Token community together in NYC for debates, talks and workshops
        </EventDescription>
      </ContentContainer>
    </CardContainer>
  );
};

export default EventCard;
