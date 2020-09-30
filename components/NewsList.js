import React, { Component } from 'react';
import { FlatList } from 'react-native';
import News from "./News";
import Header from "./Header";

import axiosService from '../utils/lib/axiosService';

class NewsList extends Component {
  state = {
    data: [],
    page: 1,
    refreshing: false,
    loadingMore: false,
    error: null,
    query: 'nasa',
    country: 'it'
  };

  componentDidMount() {
    console.log('MOUNT');
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

    console.log(URL);
    console.log(params);

    axiosService
      .request({
        url: URL,
        method: 'GET',
        params: params
      })
      .then(response => {
        console.log(response.status);
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
    console.log('END');
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
    console.log('REFRESH');
    this.setState(
      {
        page: 1,
        refreshing: true
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
        ListHeaderComponent={Header}
        renderItem={({ item }) => (
          <News news={item} />
        )} />
    );
  }
}

export default NewsList;