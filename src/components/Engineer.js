import styled from "styled-components";
import engineer from '../img/engineer.png'
const CommentWrapper = styled.div`
  background: white;
  border-radius: 15px;
  width: 230px;
  height: 145px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  
  .comment-container {
    margin: 8px 8px 8px 8px;
  }

  .comment-header {
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-size: 14px;
    border-bottom: solid rgb(201, 200, 200) 1px;
    img {
      width: 33px;
      height: 28px;
      margin-right: 5px;
    }
    .nickname {
      margin-top: 8px;
    }

  }
  .comment-content {
    font-size: 12px;
  }
`

const Engineer = ({comment}) => {

  return (
    <CommentWrapper>
      <div className="comment-container">
        <div className="comment-header">
          <img src={engineer} alt='engineer'/>
          <div className="nickname"><span >{comment.nickname}</span></div>
        </div>
        <div className="comment-content" >
          {comment.content}
        </div>
      </div>
    </CommentWrapper>
  )
}

export default Engineer;