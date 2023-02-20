const PostItem = (post) => {
  return (`<li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img src="${post.userImage}" class="rounded-circle" width="48px" alt="userImage">
                </div>
                <div class="col-11 ps-4">
                    <div class="row">
                        <div class="col-11 align-items-center">
                            ${post.userName}
                            <span><a class="fas fa-check-circle"></a></span>
                            <span class="text-secondary">@${post.userAlias} &#183 ${post.time}</span>
                        </div>
                        <div class="col-1">
                            <i class="fas fa-ellipsis-h text-secondary float-end"></i>
                        </div>
                    </div>
                    <div class="pb-2">
                        ${post.content}
                    </div>
                    <div class = "border border-light border-2 rounded-4">
                        <img src="${post.postImage}" class="border border-light border-2 w-100 rounded-4" alt="Post Image">
                        <div class="text-secondary">${post.postTitle}</div>
                        <div>${post.postContent}</div>
                        <a href="${post.postLink}" class="text-secondary text-decoration-none"><span><i class="fas fa-link"></i></span>${post.postLinkText}</a>
                    </div>
                </div>
            </div>
            <div class="row justify-content-around ms-3">
                <a href="#" class="col text-secondary text-decoration-none"><i class="far fa-comment"></i>
                    <span>${post.replyCount}</span></a>
                <a href="#" class="col text-secondary text-decoration-none"><i class="fas fa-retweet"></i>
                    <span>${post.retweetCount}</span></a>
                <a href="#" class="col text-secondary text-decoration-none"><i class="far fa-heart"></i>
                    <span>${post.likeCount}</span></a>
                <!--From AwesomeFont 6-->
                <a href="#" class="col text-secondary text-decoration-none"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
            </div>
       </li>`)
}

export default PostItem;