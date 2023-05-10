import styled from "styled-components";
import Image from "next/image";
import { Colors, Devices } from "./Theme";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillCaretLeft } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { BsHeart, BsFillEyeFill, BsThreeDots } from "react-icons/bs";
import Tab from "./styled/Tab.styled";
import Tabs from "./styled/Tabs.styled";
import Head from "next/head";
import EditionSelector from "./Asset/EditionSelector";
import WarrantyTime from "./Asset/WarrantyTime";
import OwnershipItem from "./Asset/OwnershipItem";
import BidSticky from "./Asset/BidSticky";
import { useRouter } from "next/router";

const AssetEl = styled.article`
  background-color: ${Colors.White};
  color: ${Colors.Black};
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media ${Devices.Laptop} {
    padding: 1rem 15%;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  @media ${Devices.Laptop} {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex: 0.7rem;
  flex-direction: column;
  gap: 1rem;
`;
const ImageEl = styled.div`
  border-radius: 30px;
  overflow: hidden;
`;
const ChainLink = styled.a`
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  align-items: center;
  border: 1px solid ${Colors.Border};
  padding: 1.5rem 1rem;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex: 0.95;
`;
const BackBtn = styled.span`
  color: ${Colors.Primary};
  display: flex;
  width: max-content;
  cursor: pointer;
  align-items: center;
`;
const TopBtns = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }
`;

const LikesBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ViewsEl = styled(LikesBtn)``;
const ShareBtn = styled(LikesBtn)``;
const MoreBtn = styled(LikesBtn)`
  margin-left: auto;
`;

const AuthorContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  span {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;
const AvatarEl = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
`;
const CreatorLabel = styled.label`
  color: ${Colors.Gray};
  font-size: 0.9rem;
`;
const UsernameEl = styled.span``;
const EditionEl = styled.span`
  font-weight: 500;
`;
const Title = styled.h1`
  font-size: 1.7rem;
  display: inline-block;
  margin-right: 1rem;
`;
const MarketPlace = styled.span`
  border: 1px solid ${Colors.Gray};
  border-radius: 50px;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${Colors.Gray};
`;
const AcOfferLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${Colors.Gray};
`;
const Des = styled.p`
  white-space: pre-wrap;
`;
const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Tag = styled.span`
  border: 1px solid ${Colors.Black};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
`;

const AllTabs = [
  { Id: 1, Title: "Ownership", Content: <OwnershipItem /> },
  { Id: 2, Title: "History", Content: <Tab /> },
  { Id: 3, Title: "Bids", Content: <Tab /> },
  { Id: 4, Title: "Offers", Content: <Tab /> },
];

export default function Asset() {
  const router = useRouter();
  const data = router.query;
  
  return (
    <AssetEl>
      <Head>Just There</Head>
      <SectionContainer>
        <LeftSection>
          <ImageEl>
            <img
              src={data.image}
              alt="/images/newraw/1.jpeg"
              layout="responsive"
              width="400px"
              height="400px"
            />
          </ImageEl>
          <ChainLink>
            Wait Out <HiOutlineExternalLink />
          </ChainLink>
        </LeftSection>
        <RightSection>
          <BackBtn>
            <AiFillCaretLeft />
            Back
          </BackBtn>
          <TopBtns>
            <LikesBtn>
              <BsHeart />
              710
            </LikesBtn>
            <ViewsEl>
              <BsFillEyeFill />
              16177
            </ViewsEl>
            <ShareBtn>
              <IoMdShareAlt />
              Share
            </ShareBtn>
            <MoreBtn>
              <BsThreeDots />
            </MoreBtn>
          </TopBtns>
          <AuthorContainer>
            <AvatarEl>
              <Image src="/images/newraw/luffy.jpeg" width="50" height="50" />
            </AvatarEl>
            <span>
              <CreatorLabel>Creator</CreatorLabel>
              <UsernameEl>luffy</UsernameEl>
            </span>
          </AuthorContainer>
          <EditionEl>371 Editions Minted</EditionEl>
          <span>
            <Title>KING BITCOIN</Title>
            <MarketPlace>Marketplace</MarketPlace>
          </span>
          <AcOfferLabel>Accepting Offers</AcOfferLabel>
          <Des>
            King Bitcoin is the oldest and wisest of the cryptoskeletons. When
            all hope is lost the others look to him for guidance into the lands
            of unlimited profit.
          </Des>
          <TagContainer>
            <Tag>Crypto</Tag>
          </TagContainer>
          <EditionSelector />
          <WarrantyTime fromtime = {12334321} totime = {123241434522}/>
          <Tabs mt="1rem" data={AllTabs} />
        </RightSection>
      </SectionContainer>
      <BidSticky data = {data} />
    </AssetEl>
  );
}

