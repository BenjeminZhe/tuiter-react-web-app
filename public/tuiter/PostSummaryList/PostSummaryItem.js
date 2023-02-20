function PostSummaryItem(post) {
  return (`<li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="text-secondary">${post.topic}</div>
                    <div>
                        <span class="fw-bolder">${post.userName}</span>
                        <span>
                            <i class="fas fa-check-circle"></i>
                        </span>
                        <span class="text-secondary">- ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                    <div class="text-secondary">${post.tweets ? post.tweets + ' Tweets' : ''}</div>
                </div>
                <div class="col-2">
                    <img class="w-100 rounded-2" src="${post.image}">
                </div>
            </div>
        </li>`)
}

export default PostSummaryItem;