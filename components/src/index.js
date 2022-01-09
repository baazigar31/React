import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App=()=>{
    return (
        <div className="ui container comments">

            <ApprovalCard>Are you sure you want to this?</ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Shubham" timeAgo="Today at 6:00PM"avatar={faker.image.image()} content="Wow Nice blog!!"/>
            </ApprovalCard>
          
           <ApprovalCard>
           <CommentDetail author="Anand" timeAgo="Today at 4:00PM" avatar={faker.image.image()} content="You are the best Shubham Anand!!"/>
           </ApprovalCard>

            


            
        </div>
    );
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
);