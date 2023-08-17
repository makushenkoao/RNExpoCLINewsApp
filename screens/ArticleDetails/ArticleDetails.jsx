import { memo, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Loading } from '../../components/Loading';
import { Alert } from 'react-native';
import { formatDate } from '../../utils/formatDate/formatDate';

const Container = styled.View({
  padding: 15,
  gap: 10,
});

const ArticleImage = styled.Image({
  width: '100%',
  height: 250,
  marginBottom: 20,
});

const ArticleText = styled.Text({
  fontSize: 18,
  lineHeight: '24px',
});

const ArticleTitle = styled.Text({
  fontSize: 22,
  fontWeight: 700,
});

const ArticleDate = styled.Text({
  fontSize: 16,
  color: 'rgba(0, 0, 0, 0.4)',
  textAlign: 'right',
});

export const ArticleDetails = memo(({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { id } = route.params;

  const fetchArticle = () => {
    setIsLoading(true);
    fetch(`https://64de1045825d19d9bfb1f843.mockapi.io/api/v1/articles/${id}`)
      .then((response) => response.json())
      .then(setArticle)
      .catch((e) => {
        console.log('---Error when fetching article---', e);
        Alert.alert('Error', 'Failed to load article. Try refreshing the app');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  useEffect(() => {
    if (article) {
      navigation.setOptions({
        title: article.title || 'Article',
      });
    }
  }, [article]);

  if (isLoading) {
    return <Loading />;
  }

  if (!article) return null;

  return (
    <>
      <ArticleImage
        source={{
          uri: article.imageUrl,
        }}
      />
      <Container>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleText>{article.text}</ArticleText>
        <ArticleDate>{formatDate(article.createdAt)}</ArticleDate>
      </Container>
    </>
  );
});
