import { memo, useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import { Loading } from '../../components/Loading';
import { Post } from '../../components/Post';

export const Home = memo(({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticles = () => {
    setIsLoading(true);
    fetch('https://64de1045825d19d9bfb1f843.mockapi.io/api/v1/articles')
      .then((response) => response.json())
      .then(setArticles)
      .catch((e) => {
        console.log('---Error when fetching articles---', e);
        Alert.alert('Error', 'Failed to load articles. Try refreshing the app');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => fetchArticles, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchArticles}
          />
        }
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ArticleDetails', { id: item.id })
            }
          >
            <Post
              title={item.title}
              createdAt={item.createdAt}
              image={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
});
