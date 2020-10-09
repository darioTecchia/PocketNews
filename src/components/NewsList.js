import React from 'react';
import { FlatList, Text } from 'react-native';
import News from "./News";
import Header from "./Header";

import axiosService from '../../utils/lib/axiosService';

class NewsList extends React.Component {
  state = {
    data: [],
    page: 1,
    refreshing: false,
    loadingMore: false,
    allLoaded: false,
    error: null,
    query: 'nasa',
    country: 'us'
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    const { page, query, country } = this.state;
    const URL = `/top-headlines`;

    const params = {
      country: country,
      page: page,
      pageSize: 20
    }

    axiosService
      .request({
        url: URL,
        method: 'GET',
        params: params
      })
      .then(response => {
        if(response.data.articles.length == 0) {
          this.setState((prevState, nextProps) => ({
            allLoaded: true
          }));
          return;
        }
        this.setState((prevState, nextProps) => ({
          data:
            page === 1
              ? Array.from(response.data.articles)
              : [...this.state.data, ...response.data.articles],
          loading: false,
          refreshing: false
        }));
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleScrollEnd = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true
      }),
      () => {
        this.fetchNews();
      }
    );
  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
        allLoaded: false
      },
      () => {
        this.fetchNews();
      }
    );
  }

  render() {
    return (
      <FlatList
        numColumns={1}
        data={this.state.data}
        onEndReached={this.handleScrollEnd}
        onEndReachedThreshold={0.5}
        initialNumToRender={20}
        onRefresh={this.handleRefresh}
        keyExtractor={(item, index) => item.title.toString() + index.toString()}
        refreshing={this.state.refreshing}
        ListHeaderComponent={() => <Header navigation={this.props.navigation} />}
        ListFooterComponent={() => <Text></Text>}
        renderItem={({ item }) => (
          <News news={item} />
        )} />
    );
  }
}

export default NewsList;