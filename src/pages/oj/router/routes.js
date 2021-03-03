// all routes here.
import {
  About,
  ACMRank,
  Announcements,
  ApplyResetPassword,
  FAQ,
  Java,
  Home,
  Logout,
  NotFound,
  OIRank,
  Problem,
  ProblemList,
  ResetPassword,
  SubmissionDetails,
  SubmissionList,
  UserHome,
  Category
} from '../views'

import Board from '../views/board/Board.vue'
import BoardMiracom from '../views/board/BoardMiracom'
import Read from '../views/board/Read.vue'
import ReadMiracom from '../views/board/ReadMiracom.vue'
import Create from '../views/board/Create.vue'
import CreateMiracom from '../views/board/CreateMiracom.vue'
import Detail from '../views/board/Detail.vue'
import DetailMiracom from '../views/board/DetailMiracom.vue'

import NoticeBoard from '../views/Notice/Board.vue'
import NoticeBoardMiracom from '../views/Notice/BoardMiracom'
import NoticeRead from '../views/Notice/Read.vue'
import NoticeReadMiracom from '../views/Notice/ReadMiracom.vue'
import NoticeCreate from '../views/Notice/Create.vue'
import NoticeCreateMiracom from '../views/Notice/CreateMiracom.vue'
import NoticeDetail from '../views/Notice/Detail.vue'
import NoticeDetailMiracom from '../views/Notice/DetailMiracom.vue'

import Professor from '../views/board/Professor.vue'
import ProfessorRead from '../views/board/ProfessorRead.vue'
import ProfessorCreate from '../views/board/ProfessorCreate.vue'
import ProfessorDetail from '../views/board/ProfessorDetail.vue'



import * as Contest from '@oj/views/contest'
import * as Setting from '@oj/views/setting'

export default [
  {
    name: 'home',
    path: '/',
    meta: {title: 'Home'},
    component: Home
  },
  {name: 'category',
    path: '/category',
    meta: {title: 'Category'},
    component: Category
  },
  {
    name: 'logout',
    path: '/logout',
    meta: {title: 'Logout'},
    component: Logout
  },
  {
    name: 'apply-reset-password',
    path: '/apply-reset-password',
    meta: {title: 'Apply Reset Password'},
    component: ApplyResetPassword
  },
  {
    name: 'reset-password',
    path: '/reset-password/:token',
    meta: {title: 'Reset Password'},
    component: ResetPassword
  },
  {
    name: 'problem-list',
    path: '/problem',
    meta: {title: 'Problem List'},
    component: ProblemList
  },
  {
    name: 'problem-details',
    path: '/problem/:problemID',
    meta: {title: 'Problem Details'},
    component: Problem
  },
  {
    name: 'submission-list',
    path: '/status',
    meta: {title: 'Submission List'},
    component: SubmissionList
  },
  {
    name: 'submission-details',
    path: '/status/:id/',
    meta: {title: 'Submission Details'},
    component: SubmissionDetails
  },
  {
    name: 'contest-list',
    path: '/contest',
    meta: {title: 'Contest List'},
    component: Contest.ContestList
  },
  {
    name: 'contest-details',
    path: '/contest/:contestID/',
    component: Contest.ContestDetails,
    meta: {title: 'Contest Details'},
    children: [
      {
        name: 'contest-submission-list',
        path: 'submissions',
        component: SubmissionList
      },
      {
        name: 'contest-problem-list',
        path: 'problems',
        component: Contest.ContestProblemList
      },
      {
        name: 'contest-problem-details',
        path: 'problem/:problemID/',
        component: Problem
      },
      {
        name: 'contest-announcement-list',
        path: 'announcements',
        component: Announcements
      },
      {
        name: 'contest-rank',
        path: 'rank',
        component: Contest.ContestRank
      },
      {
        name: 'acm-helper',
        path: 'helper',
        component: Contest.ACMContestHelper
      }
    ]
  },
  {
    name: 'acm-rank',
    path: '/acm-rank',
    meta: {title: 'ACM Rankings'},
    component: ACMRank
  },
  {
    name: 'oi-rank',
    path: '/oi-rank',
    meta: {title: 'OI Rankings'},
    component: OIRank
  },
  {
    name: 'user-home',
    path: '/user-home',
    component: UserHome,
    meta: {requiresAuth: true, title: 'User Home'}
  },
  {
    path: '/setting',
    component: Setting.Settings,
    children: [
      {
        name: 'default-setting',
        path: '',
        meta: {requiresAuth: true, title: 'Default Settings'},
        component: Setting.ProfileSetting
      },
      {
        name: 'profile-setting',
        path: 'profile',
        meta: {requiresAuth: true, title: 'Profile Settings'},
        component: Setting.ProfileSetting
      },
      {
        name: 'account-setting',
        path: 'account',
        meta: {requiresAuth: true, title: 'Account Settings'},
        component: Setting.AccountSetting
      },
      {
        name: 'security-setting',
        path: 'security',
        meta: {requiresAuth: true, title: 'Security Settings'},
        component: Setting.SecuritySetting
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: {title: 'About'},
    component: About
  },
  {
    path: '/board/:board_id',
    name: 'Detail',
    meta: {requiresAuth: true, title: 'Detail'},
    component: Detail
  },
  {
    path: '/board',
    name: 'Board',
    meta: {requiresAuth: true, title: 'Board'},
    component: Board
  },
  {
    path: '/board-miracom/:board_id',
    name: 'Board_miracom_detail',
    meta: {requiresAuth: true, title: 'miacom_Detail'},
    component: DetailMiracom
  },
  {
    path: '/board-miracom',
    name: 'Board-miracom',
    meta: {requiresAuth: true, title: 'Board-miracom'},
    component: BoardMiracom
  },

  {
    path: '/read',
    name: 'Read',
    meta: {title: 'Read'},
    component: Read
  },
  {
    path: '/read_miracom',
    name: 'Read_miracom',
    meta: {title: 'Read_miracom'},
    component: ReadMiracom
  },
  {
    path: '/create/:board_id?',
    name: 'Create',
    meta: {title: 'Create'},
    component: Create
  },
  {
    path: '/create-miracom/:board_id?',
    name: 'Create-miracom',
    meta: {title: 'Create_miracom'},
    component: CreateMiracom
  },
  {
    path: '/faq',
    name: 'faq',
    meta: {title: 'FAQ'},
    component: FAQ
  },
  {
    path: '/java',
    name: 'java',
    meta: {title: 'Java'},
    component: Java
  },
  // 공지사항
  {
    path: '/notice/:board_id',
    name: 'Detail',
    meta: {requiresAuth: true, title: 'Detail'},
    component: NoticeDetail
  },
  {
    path: '/notice',
    name: 'Board',
    meta: {requiresAuth: true, title: 'Board'},
    component: NoticeBoard
  },
  {
    path: '/notice-miracom/:board_id',
    name: 'Notice-miracom_detail',
    meta: {requiresAuth: true, title: 'miacom_Detail'},
    component: NoticeDetailMiracom
  },
  {
    path: '/notice-miracom',
    name: 'Notice-miracom',
    meta: {requiresAuth: true, title: 'Notice-miracom'},
    component: NoticeBoardMiracom
  },

  {
    path: '/notice/read',
    name: 'Read',
    meta: {title: 'Read'},
    component: NoticeRead
  },
  {
    path: '/notice/read_miracom',
    name: 'Read_miracom',
    meta: {title: 'Read_miracom'},
    component: NoticeReadMiracom
  },
  {
    path: '/notice-create/:board_id?',
    name: 'NoticeCreate',
    meta: {title: 'NoticeCreate'},
    component: NoticeCreate
  },
  {
    path: '/notice-create-miracom/:board_id?',
    name: 'Create-miracom',
    meta: {title: 'Create_miracom'},
    component: NoticeCreateMiracom
  },
  // 강사전용게시판
  {
    path: '/professor/:board_id',
    name: 'ProfessorDetail',
    meta: {requiresAuth: true, title: 'ProfessorDetail'},
    component: ProfessorDetail
  },
  {
    path: '/professor',
    name: 'Professor',
    meta: {requiresAuth: true, title: 'Professor'},
    component: Professor
  },
  {
    path: '/professor/read',
    name: 'ProfessorRead',
    meta: {title: 'ProfessorRead'},
    component: ProfessorRead
  },
  {
    path: '/professor-create/:board_id?',
    name: 'ProfessorCreate',
    meta: {title: 'ProfessorCreate'},
    component: ProfessorCreate
  },
  {
    path: '*',
    meta: {title: '404'},
    component: NotFound
  }
]
