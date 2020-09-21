import React from 'react';
import Image from './Image';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background: #eeeeee;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Karma', serif;
  letter-spacing: 4px;
`;

function Profile() {
  return (
    <ProfileContainer>
      <Image />
      <Title>Software Engineer</Title>
    </ProfileContainer>
  );
}
export default Profile;
