import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import { 
    HeaderWrapper, 
    Logo, 
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button
} from './style';

class Header extends Component {

    getListArea() {
        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS(); // list is an immutable object
        const pageList = [];
        
        if (jsList.length){
            for (let i = (page - 1) * 6 ; i < page * 6 ; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>                
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Popular Questions
                        <SearchInfoSwitch 
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}                            
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            Switch
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}                    
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render() {
        const { focused, list, login, logout, handleInputFocus, handleInputBlur } = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <Link to='/'><NavItem className='left active'>Home</NavItem></Link> 
                    <Link to='/chatbot'><NavItem className='left'>Tutor assistant</NavItem></Link>                    
                    {
                        login ? 
                        <NavItem onClick={logout} className='right'>Log out</NavItem> : 
                        <Link to='/login'><NavItem className='right'>Log in</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                            className={focused ? 'focused' : ''} 
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;</i>
                        {this.getListArea()}
                    </SearchWrapper>                    
                </Nav>
                <Addition>
                    <Link to='/ask'>
                        <Button className='com'>
                            <i className="iconfont">&#xe601;</i>
                            New Question
                        </Button>
                    </Link>
                    <Button className='reg'>Sign up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){            
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originDeg = spin.style.transform.replace(/[^0-9]/ig, '')

            if (originDeg) {
                originDeg = parseInt(originDeg, 10);
            }else {
                originDeg = 0;
            }
            spin.style.transform = 'rotate(' + (originDeg + 360) + 'deg)';

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);