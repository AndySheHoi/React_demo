import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 1100px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 800px;
    .banner-img{
        width: 625px;
        height: 350px;
        margin-left: 70px;
        margin-bottom: 20px;
    }
`;

export const HomeRight = styled.div`
    padding-top: 30px;
    float: right;
    width: 200px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    display: block;
    float: left;
    background: #f7f7f7;
    height: 24px;
    line-heigt: 16px;
    padding: 8px 2px 2px 2px;
    font-size: 15px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 18px;
    margin-bottom: 18px;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 180px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    padding: 20px 0;
    .question {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
    }
    .description {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const AssessmentWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`;

export const AssessmentItem = styled.div`
    display: block;
    width: 200px;
    height: 80px;
    max-width: 100%;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 20px;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 80px;
    bottom: 80px
    width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border 1px solid #ccc;
    font-size: 20px;
`;
