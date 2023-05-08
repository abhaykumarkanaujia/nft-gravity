import { useState } from 'react';
import styled from 'styled-components';
import { Colors, Devices } from '../src/components/Theme';

const CreateEventWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: none;
  justify-content: space-between;
  align-items: center;
`;

const MainHeading = styled.div`
  flex-basis:  70%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
    flex-basis: 0%;
  }
`;

const FormWrapper = styled.div`
  flex-basis: 30%;
  max-width: auto;
  margin: 40px 50px;
  padding: 20px;
  background-color: ${Colors.Background};
  color: ${Colors.White};
  border-radius: 5px;
  box-shadow: 0px 0px 3rem ${Colors.Primary};
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    margin: 10px;
    padding: 20px;
    box-shadow: none;
  }
`;

const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid ${Colors.Gray};
  background-color: ${Colors.GrayBG}; /* add white background color */
  color: ${Colors.Black}; /* add black text color */
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid ${Colors.Gray};
  background-color: ${Colors.White}; /* add white background color */
  color: ${Colors.Black}; /* add black text color */
`;

const FileInputLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
  font-weight: 500;
  text-align: center;
  font-size: 1.7rem;
  color: ${Colors.White}; 
  @media ${Devices.Laptop} {
    font-size: 2.7rem;
  }
`;
const Heading = styled.span``;

const Sub = styled.span`
  font-size: 1.5rem;
  display: block;
`;

const FormHeading = styled.h2`
text-align: center;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
  color: ${Colors.White};
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
`;

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [timing, setTiming] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <CreateEventWrapper>
      <MainHeading>
        <Title>
          <Heading>Event MarketPlace</Heading>
          <Sub>Create NFT Events</Sub>
        </Title>
      </MainHeading>
      <FormWrapper>
      <FormHeading>Create Event</FormHeading>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor='eventName'>Event Name</InputLabel>
        <InputField
          type='text'
          id='eventName'
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
        />

        <InputLabel htmlFor='venue'>Venue</InputLabel>
        <InputField
          type='text'
          id='venue'
          value={venue}
          onChange={(event) => setVenue(event.target.value)}
        />

        <InputLabel htmlFor='timing'>Timing</InputLabel>
        <InputField
          type='text'
          id='timing'
          value={timing}
          onChange={(event) => setTiming(event.target.value)}
        />

        <FileInputLabel htmlFor='image'>Image</FileInputLabel>
        <InputField
          type='file'
          id='image'
          onChange={handleImageChange}
        />

        {image && <img src={URL.createObjectURL(image)} alt='Event' style={{ marginBottom: '20px', maxWidth: '100%' }} />}

        <InputLabel htmlFor='description'>Description</InputLabel>
        <TextArea
          id='description'
          rows='5'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <SubmitButton type='submit'>Submit</SubmitButton>
      </form>
      </FormWrapper>
    </CreateEventWrapper>
    
  );
};

export default EventForm;
