import { memo } from 'react';
import styled from 'styled-components/native';
import { formatDate } from '../../utils/formatDate/formatDate';

const Post = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  padding: 15,
});

const PostImage = styled.Image({
  width: 80,
  height: 80,
  marginRight: 12,
  borderRadius: 12,
});

const PostDetails = styled.View({
  flex: 1,
});

const PostDate = styled.Text({
  fontSize: 12,
  color: 'rgba(0, 0, 0, 0.4)',
  marginTop: 2,
});

const PostTitle = styled.Text({
  fontSize: 16,
  fontWeight: 700,
});

export const PostComponent = memo((props) => {
  const { title, image, createdAt } = props;
  return (
    <Post>
      <PostImage
        source={{
          uri: image,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{formatDate(createdAt)}</PostDate>
      </PostDetails>
    </Post>
  );
});
