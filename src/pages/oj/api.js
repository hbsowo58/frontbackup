import Vue from 'vue'
import store from '@/store'
import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

export default {
  getWebsiteConf (params) {
    return ajax('website', 'get', {
      params
    })
  },
  getAnnouncementList (offset, limit) {
    let params = {
      offset: offset,
      limit: limit
    }
    return ajax('announcement', 'get', {
      params
    })
  },
  login (data) {
    return ajax('login', 'post', {
      data
    })
  },
  checkUsernameOrEmail (username, email) {
    return ajax('check_username_or_email', 'post', {
      data: {
        username,
        email
      }
    })
  },
  // 注册
  register (data) {
    return ajax('register', 'post', {
      data
    })
  },
  logout () {
    return ajax('logout', 'get')
  },
  getCaptcha () {
    return ajax('captcha', 'get')
  },
  getUserInfo (username = undefined) {
    return ajax('profile', 'get', {
      params: {
        username
      }
    })
  },
  updateProfile (profile) {
    return ajax('profile', 'put', {
      data: profile
    })
  },
  freshDisplayID (userID) {
    return ajax('profile/fresh_display_id', 'get', {
      params: {
        user_id: userID
      }
    })
  },
  twoFactorAuth (method, data) {
    return ajax('two_factor_auth', method, {
      data
    })
  },
  tfaRequiredCheck (username) {
    return ajax('tfa_required', 'post', {
      data: {
        username
      }
    })
  },
  getSessions () {
    return ajax('sessions', 'get')
  },
  deleteSession (sessionKey) {
    return ajax('sessions', 'delete', {
      params: {
        session_key: sessionKey
      }
    })
  },
  applyResetPassword (data) {
    return ajax('apply_reset_password', 'post', {
      data
    })
  },
  resetPassword (data) {
    return ajax('reset_password', 'post', {
      data
    })
  },
  changePassword (data) {
    return ajax('change_password', 'post', {
      data
    })
  },
  changeEmail (data) {
    return ajax('change_email', 'post', {
      data
    })
  },
  getLanguages () {
    return ajax('languages', 'get')
  },
  getProblemTagList () {
    return ajax('problem/tags', 'get')
  },
  getProblemList (offset, limit, searchParams) {
    let params = {
      paging: true,
      offset,
      limit
    }
    Object.keys(searchParams).forEach((element) => {
      if (searchParams[element]) {
        params[element] = searchParams[element]
      }
    })
    return ajax('problem', 'get', {
      params: params
    })
  },
  pickone () {
    return ajax('pickone', 'get')
  },
  getProblem (problemID) {
    return ajax('problem', 'get', {
      params: {
        problem_id: problemID
      }
    })
  },
  getContestList (offset, limit, searchParams) {
    let params = {
      offset,
      limit
    }
    if (searchParams !== undefined) {
      Object.keys(searchParams).forEach((element) => {
        if (searchParams[element]) {
          params[element] = searchParams[element]
        }
      })
    }
    return ajax('contests', 'get', {
      params
    })
  },
  getContest (id) {
    return ajax('contest', 'get', {
      params: {
        id
      }
    })
  },
  getContestAccess (contestID) {
    return ajax('contest/access', 'get', {
      params: {
        contest_id: contestID
      }
    })
  },
  checkContestPassword (contestID, password) {
    return ajax('contest/password', 'post', {
      data: {
        contest_id: contestID,
        password
      }
    })
  },
  getContestAnnouncementList (contestId) {
    return ajax('contest/announcement', 'get', {
      params: {
        contest_id: contestId
      }
    })
  },
  getContestProblemList (contestId) {
    return ajax('contest/problem', 'get', {
      params: {
        contest_id: contestId
      }
    })
  },
  getContestProblem (problemID, contestID) {
    return ajax('contest/problem', 'get', {
      params: {
        contest_id: contestID,
        problem_id: problemID
      }
    })
  },
  submitCode (data) {
    return ajax('submission', 'post', {
      data
    })
  },
  getSubmissionList (offset, limit, params) {
    params.limit = limit
    params.offset = offset
    return ajax('submissions', 'get', {
      params
    })
  },
  getContestSubmissionList (offset, limit, params) {
    params.limit = limit
    params.offset = offset
    return ajax('contest_submissions', 'get', {
      params
    })
  },
  getSubmission (id) {
    return ajax('submission', 'get', {
      params: {
        id
      }
    })
  },
  submissionExists (problemID) {
    return ajax('submission_exists', 'get', {
      params: {
        problem_id: problemID
      }
    })
  },
  submissionRejudge (id) {
    return ajax('admin/submission/rejudge', 'get', {
      params: {
        id
      }
    })
  },
  updateSubmission (data) {
    return ajax('submission', 'put', {
      data
    })
  },
  getUserRank (offset, limit, rule = 'acm') {
    let params = {
      offset,
      limit,
      rule
    }
    return ajax('user_rank', 'get', {
      params
    })
  },
  getContestRank (params) {
    return ajax('contest_rank', 'get', {
      params
    })
  },
  getACMACInfo (params) {
    return ajax('admin/contest/acm_helper', 'get', {
      params
    })
  },
  updateACInfoCheckedStatus (data) {
    return ajax('admin/contest/acm_helper', 'put', {
      data
    })
  },
  getBoardList (params) {
    // params.limit = limit
    // params.offset = offset
    return ajax('board-list', 'get', {
      params
    })
  },
  // 210302추가
  getNoticeList (params) {
    // params.limit = limit
    // params.offset = offset
    return ajax('notice-list', 'get', {
      params
    })
  },
  
  getBoardDetail(params){
    return ajax('board', 'get', {
      params: {
        board_id: params
      }
    })
  },

  // 0302추가
  getNoticeDetail(params){
    return ajax('notice', 'get', {
      params: {
        board_id: params
      }
    })
  },
  postBoard(title, content, created_by_id, type, company){
    return ajax('board', 'post',{
      data:{
        title,
        content,
        created_by_id,
        type,
        company
      }
    })
  },
  // 0303추가
  postNotice(title, content, created_by_id, type, company){
    return ajax('notice', 'post',{
      data:{
        title,
        content,
        created_by_id,
        type,
        company
      }
    })
  },
  putBoard(title, content, parameter){
    return ajax('board', 'put', {
      data: {
        title,
        content,
        board_id: parameter
      }
    })
  },
  // 0303추가
  putNotice(title, content, parameter){
    return ajax('notice', 'put', {
      data: {
        title,
        content,
        board_id: parameter
      }
    })
  },
  // 0303추가
  deleteNotice(parameter){
    return ajax('notice', 'delete', {
      params: {
        board_id: parameter
      }
    })
  },
  deleteBoard(parameter){
    return ajax('board', 'delete', {
      params: {
        board_id: parameter
      }
    })
  },
  // 210302추가
  deleteNotice(parameter){
    return ajax('notice', 'delete', {
      params: {
        board_id: parameter
      }
    })
  },
  postComment(comment, board_id, created_by_id, type){
    return ajax('comment', 'post',{
      data:{
        comment,
        board_id,
        created_by_id,
        type
      }
    })
  },
  // 210302 추가
  noticepostComment(comment, board_id, created_by_id, type){
    return ajax('notice-comment', 'post',{
      data:{
        comment,
        board_id,
        created_by_id,
        type
      }
    })
  },
  putComment(comment_id,comment){
    return ajax('comment', 'put', {
      data: {
        comment_id,
        comment
      }
    })
  },
  // 210303추가
  putNoticeComment(comment_id,comment){
    return ajax('notice-comment', 'put', {
      data: {
        comment_id,
        comment
      }
    })
  },
  deleteComment(comment_id){
    return ajax('comment', 'delete', {
      params: {
        comment_id
      }
    })
  },
  // 210303 추가
  deleteNoticeComment(comment_id){
    return ajax('notice-comment', 'delete', {
      params: {
        comment_id
      }
    })
  },
  // 0303 추가
  deleteNoitceComment(comment_id){
    return ajax('notice-comment', 'delete', {
      params: {
        comment_id
      }
    })
  },

  // 비밀글 처리 
  secretBoard(board_id, type){
    return ajax('board-secret', 'put', {
      data:{
        board_id,
        type
      }
    })
  },

  // 210303 추가
  secretNotice(board_id, type){
    return ajax('notice-secret', 'put', {
      data:{
        board_id,
        type
      }
    })
  },

  secretComment(comment_id, type){
    return ajax('comment-secret', 'put', {
      data:{
        comment_id,
        type
      }
    })
  },
  // 210303추가
  secretNoticeComment(comment_id, type){
    return ajax('notice-comment-secret', 'put', {
      data:{
        comment_id,
        type
      }
    })
  }
}

/**
 * @param url
 * @param method get|post|put|delete...
 * @param params like queryString. if a url is index?a=1&b=2, params = {a: '1', b: '2'}
 * @param data post data, use for method put|post
 * @returns {Promise}
 */
function ajax (url, method, options) {
  if (options !== undefined) {
    var {params = {}, data = {}} = options
  } else {
    params = data = {}
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    }).then(res => {
      // API正常返回(status=20x), 是否错误通过有无error判断
      if (res.data.error !== null) {
        Vue.prototype.$error(res.data.data)
        reject(res)
        // 若后端返回为登录，则为session失效，应退出当前登录用户
        if (res.data.data.startsWith('Please login')) {
          store.dispatch('changeModalStatus', {'mode': 'login', 'visible': true})
        }
      } else {
        resolve(res)
        // if (method !== 'get') {
        //   Vue.prototype.$success('Succeeded')
        // }
      }
    }, res => {
      // API请求异常，一般为Server error 或 network error
      reject(res)
      Vue.prototype.$error(res.data.data)
    })
  })
}
