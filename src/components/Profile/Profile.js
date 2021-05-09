import React from 'react';
import styled from  'styled-components';
import SingleImage from '../Image/Image';

const feedsource =  [
    {
        source: 'https://images.unsplash.com/photo-1610138744455-b8b12579bbee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
        likes: '43',
        comments: '3',
        isVideo: false,
        id: 0,
    },
    {
        source:
      'https://images.unsplash.com/photo-1590314900766-2977a0abcd28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1408&q=80',
        likes: '313',
        comments: '10',
        isVideo: true,
        id: 1,
    },
    {
      source:
        'https://images.unsplash.com/photo-1590954661624-9fc611a35ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1408&q=80',
      likes: '29',
      comments: '2',
      isVideo: false,
      id: 2,
    },
    {
      source:
        'https://images.unsplash.com/photo-1587128359627-407386073e2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1408&q=80',
      likes: '18',
      comments: '2',
      isVideo: false,
      id: 3,
    },
    {
      source:
        'https://images.unsplash.com/photo-1586430456905-be267908d9d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      likes: '30',
      comments: '4',
      isVideo: false,
      id: 4,
    },
];

const ProfileContainer = styled.div`
    max-width: 1010px;
    width: 100%
    margin: 20px auto;
`;

const ProfileDetails = styled.div`
    margin: 50px auto;
    display: flex;
`;

const ProfileDetailsLeft = styled.div`
    margin-right: 40px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;
 
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;
 
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
 
const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;
 
const HeadingThreeText = styled.h3``;
 
const ParagraphText = styled.p`
  margin-right: 25px;
`;
 
const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;
 
const ProfileDetailsName = styled.div`
  text-align: left;
`;
 
const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;


function Profile() {
    return (
        <ProfileContainer>
            <ProfileDetails>
                <ProfileDetailsLeft>
                    <ProfileImage src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg" />
                </ProfileDetailsLeft>

                <ProfileDetailsRight>
                    <ProfileDetailsUsername>
                        <HeadingThreeText>akhilnewman</HeadingThreeText>
                        <EditProfileButton>Edit profile</EditProfileButton>
                    </ProfileDetailsUsername>

                    <ProfileDetailsMeta>
                        <ParagraphText>
                            <strong>5</strong> posts
                        </ParagraphText>
                        <ParagraphText>
                            <strong>2296</strong> followers
                        </ParagraphText>
                         <ParagraphText>
                             <strong>1269</strong> following
                        </ParagraphText>
                    </ProfileDetailsMeta>

                    <ProfileDetailsName>
                        <ParagraphText>
                            <strong>Akhil Newman</strong>
                        </ParagraphText>
                    </ProfileDetailsName>
                </ProfileDetailsRight>
            </ProfileDetails>
            <ImagesWrapper>
            {feedsource.map(item => (
          <SingleImage image={item} key={item.id} />
        ))}
            </ImagesWrapper>
        </ProfileContainer>
    );
};

export default Profile;
