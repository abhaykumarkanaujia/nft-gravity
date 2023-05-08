import EventCard from './EventCard';
import styled from 'styled-components';
import { Colors, Devices } from '../Theme';

const DiscoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 25px;
  margin: 0 auto;
`;

const NftList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NftListItem = styled.li`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 4%;

  @media screen and (min-width: 768px) {
    padding-bottom: 1%;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    max-width: none;
    padding-bottom: 1%;
  }

  @media screen and (min-width: 1200px) {
    padding-bottom: 1%;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding-top: 20px;
  border-top: 2px solid ${Colors.Border};
`;


const PageHeading = styled.h2`
  font-size: 1.5rem;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  color: ${Colors.White};
  @media ${Devices.Laptop} {
    font-size: 2rem;
  }
`;

const CreateEventLink = styled.a`
  font-size: 16px;
  color: ${Colors.White};
  text-decoration: none;
  margin-top: 20px;
  align-self: flex-end;
  margin-bottom: 20px;
`;

const Discover = () => {
  const nftEvents = Array.from({ length: 12 }).map((_, i) => (
    <NftListItem key={i}>
      <EventCard />
    </NftListItem>
  ));

  return (
    <DiscoverWrapper style={{ backgroundColor: Colors.Background }}>
      <PageHeading>ALL Events</PageHeading>
      <CreateEventLink href="/CreateEvent">Create Event</CreateEventLink>
      <Container>
      <NftList>{nftEvents}</NftList>
      </Container>
      
    </DiscoverWrapper>
  );
};

export default Discover;
