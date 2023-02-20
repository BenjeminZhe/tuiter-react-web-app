function WhoToFollowListItem(who) {
  return (`<li class="list-group-item">
              <div class="row align-items-center justify-content-xl-around">
                  <div class="col-lg-2">
                      <img class="w-100 rounded-circle" src="${who.avatarIcon}" alt="relativity-space">
                  </div>
                  <div class="col-lg-7">
                      <div class="fw-bolder">
                          ${who.userName}
                          <span><i class="fas fa-check-circle"></i></span>
                      </div>
                      <div>@${who.handle}</div>
                  </div>
                  <div class="col-lg-3">
                      <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                  </div>
              </div>
          </li>`);
}

export default WhoToFollowListItem;