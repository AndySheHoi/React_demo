import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Assessment from './components/Assessment';
import { actionCreators } from './store';
import { 
    HomeWrapper,
    HomeLeft, 
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
    
    handleScrollTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-img' src="https://storage.googleapis.com/deepmind-live-cms/documents/sc2-agent-vis%2520%25281%2529.gif" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Assessment />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.updateHomeList();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    updateHomeList() {
        dispatch(actionCreators.getHomeList());
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }    
});

export default connect(mapState, mapDispatch)(Home);