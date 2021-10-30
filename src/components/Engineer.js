import styled from "styled-components";

const CommentWrapper = styled.div`
  background: white;
  border-radius: 15px;
  width: 230px;
  height: 150px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  
  .comment-container {
    margin: 8px 8px 8px 8px;
  }
`

const Engineer = () => {


  return (
    <CommentWrapper>
      <div className="comment-container">
        <div className="comment-header">
          <span className="nickname">Chief Engineer</span>
        </div>
        <div className="comment-content" >
          This HTML file is a template.
          If you open it directly in the browser, you will see an empty page.

          You can add webfonts, meta tags, or analytics to this file.
          The build step will place the bundled scripts into the tag.

          To begin the development, run `npm start` or `yarn start`.
          To create a production bundle, use `npm run build` or `yarn build`.
        </div>
      </div>
    </CommentWrapper>
  )
}

export default Engineer;