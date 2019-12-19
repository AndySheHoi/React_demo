import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AssessmentWrapper, AssessmentItem } from '../style';

class Assessment extends PureComponent {
    render() {
        const { list } =this.props;
        return (
            <AssessmentWrapper>
                {
                    list.map((item) => {
                        return <AssessmentItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
                    })
                }
            </AssessmentWrapper>            
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'assessmentList'])
})

export default connect(mapState, null)(Assessment);