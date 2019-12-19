import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } =this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem>
                                <img alt='' className='pic' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='question'>{item.get('question')}</h3>
                                    <p className='description'>{item.get('description')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>More</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'questionList']),
    page: state.getIn(['home', 'questionPage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List);