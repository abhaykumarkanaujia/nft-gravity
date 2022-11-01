import styled from "styled-components";
import { NFTs } from "../../Info";
import { Colors, Devices } from "../Theme";
import Grid from "../styled/Grid.styled";
import Link from "next/link";
import NFTCard from "../styled/NFTCard.styled";

const TopCollectiblesEl = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  padding: 1rem;

  @media ${Devices.Tablet} {
    padding: 1rem 3rem;
  }
  @media ${Devices.Laptop} {
    padding: 1rem 5%;
  }
  @media ${Devices.LaptopL} {
    padding: 1rem 10%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Sort = styled.div`
  border-radius: 30px;
  border: 1px solid ${Colors.Background};
  padding: 0.4rem 1rem;
  cursor: pointer;
  font-colour: ${Colors.Background};
`;
const Date = styled.div`
  background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
  border-radius: 30px;
  padding: 0.4rem 2.5rem;
`;
const ShowMore = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  border: 1px solid ${Colors.Primary};
  padding: 1rem 2rem;
  color: ${Colors.White};
  background-color: transparent;
  border-radius: 5px;
  font-size: 1rem;
`;

export default function TopCollectibles() {
  return (
    <TopCollectiblesEl>
      <Title>In-Wallet NFT</Title>
      <TopSection>
        <Sort></Sort>
        <Date>Today</Date>
      </TopSection>
      <Grid>
        {NFTs.map((nft) => {
          return (
            <Link key={nft.Id} href="/asset" passHref>
              <a>
                <NFTCard item={nft} />
              </a>
            </Link>
          );
        })}
      </Grid>
      <ShowMore>Show More</ShowMore>
    </TopCollectiblesEl>
  );
}
