import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SearchInput } from '../components/Navigation/SearchInput';
import SideNavigationBar from '../components/Navigation/SideNavigationBar';
import SearchSuggestions from '../components/Navigation/SearchSuggestions';
import NavigationBar from '../components/Navigation/NavigationBar';

class NavigationBarContainer extends Component {
  state = {
    searchInputOpen: false,
    sideNavCollapsed: false,
    searchSuggestionBox: true,
    searchQuery: '',
    dark_theme: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.setState({
      dark_theme: localStorage.dark_theme === 'true' ? true : false,
    });
  }

  UNSAFE_componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleSearchInput = () => {
    this.setState({
      searchInputOpen: !this.state.searchInputOpen,
      searchSuggestionBox: false,
      searchQuery: '',
    });
  };

  toggleSideNav = () => {
    this.setState({
      sideNavCollapsed: !this.state.sideNavCollapsed,
    });
  };

  componentDidUpdate(prevState) {
    if (
      this.state.searchInputOpen !== prevState.searchInputOpen &&
      document.getElementById('search__search-focus')
    ) {
      document.getElementById('search__search-focus').focus();
    }

    this.toggleBodyClass();
  }

  toggleBodyClass = () => {
    if (localStorage.dark_theme === 'true') {
      document.body.classList.add('dark-theme');
    } else if (localStorage.dark_theme === 'false') {
      document.body.classList.remove('dark-theme');
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery !== '') {
      document.location.href(
        `/search/query=${this.state.searchQuery}&type=movie`
      );
    }
  };

  handleChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
      searchSuggestionBox: true,
    });
    if (e.target.value !== '') {
      console.log(e.target.value);
    }
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (
      this.wrapperRef &&
      (!this.wrapperRef.contains(event.target) ||
        event.target.innerText === 'close')
    ) {
      this.setState({
        sideNavCollapsed: false,
        searchSuggestionBox: false,
      });
    }
  };

  handleThemeChange = () => {
    this.setState({
      dark_theme: !this.state.dark_theme,
    });
    localStorage.setItem('dark_theme', !this.state.dark_theme);
  };
  render() {
    const {
      searchInputOpen,
      searchSuggestionBox,
      sideNavCollapsed,
      searchQuery,
    } = this.state;
    return (
      <>
        <NavigationBar
          searchInputOpen={searchInputOpen}
          toggleSideNav={this.toggleSideNav}
          toggleSearchInput={this.toggleSearchInput}
        />
        <SearchInput
          searchInputOpen={searchInputOpen}
          value={searchQuery}
          toggleSearchInput={this.toggleSearchInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <SearchSuggestions
          query={searchQuery}
          setWrapperRef={this.setWrapperRef}
          searchSuggestionOpen={searchSuggestionBox}
        />
        <SideNavigationBar
          collapsed={sideNavCollapsed}
          setWrapperRef={this.setWrapperRef}
          handleThemeChange={this.handleThemeChange}
        />
      </>
    );
  }
}

export default withRouter(NavigationBarContainer);
