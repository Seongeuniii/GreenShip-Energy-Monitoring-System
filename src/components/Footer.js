import styled from 'styled-components';
import Engineer from './Engineer';

const FooterWrapper = styled.div`
  height: 200px;

  .footerheader {
    font-size: 15px;
    color: rgb(184, 177, 177);
    font-weight: bold;
    margin: 10px 10px 10px 5px;
   }

  ul {
    margin: 0;
    padding: 0;
    list-style:none;
    white-space:nowrap; 
    overflow-x: auto;
  }
  li{
    margin-right: 20px;
    display:inline-block;
  }
  
`

const comments = [
  {
    id: 1,
    nickname: 'Chief Engineer',
    content: '현재 No. 6 실린더에서의 연소 압력이 다소 낮아 에너지 효율이 저하하고 있음. 지난 No.6 실린더 피스톤링 정비 시 이슈가 발생된 것으로 보임. 다음 정박시 No.6 실린더의 재정비가 필요함.'
  },
  {
    id: 1,
    nickname: '1st Engineer',
    content: '4번 실린더에서 정상적인 사이클과 비교해 폭발 행정 이전 비정상적인 압력 상승이 발생함. 이는 피스톤 헤드 상부에 카본 퇴적에 의한 압축비 상승으로 자연발화에 의한 폭발이 의심됨.'
  },
  {
    id: 1,
    nickname: '2nd Engineer',
    content: '금주 수급받은 연료유의 점도가 다소 높은 것으로 보임 preheater 스팀밸브 개도 조절이 필요할 것으로 사료됨'
  }
]

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footerheader">
        <span>Comment</span>
      </div>
      <ul>
        {comments && comments.map( comment => <li><Engineer key={comment.id} comment={comment}/></li>)}
      </ul>
    </FooterWrapper>  
  )
}

export default Footer;