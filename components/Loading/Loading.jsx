import { ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';

const LoadingContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
});

const LoadingText = styled.Text({
  fontSize: 18,
  fontWeight: 700,
});

export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator
        size="large"
        color="#000"
      />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};
