export interface IAnalysisResult {
  analysisEndDate: string;
  analysisStartDate: string;
  analysisWord: string;
  deleteFlag: number;
  favoriteCount: number;
  id: number;
  image: string;
  insertDate: string;
  retweetCount: number;
  status: number;
  tweetCount: number;
  updateDate: string;
  url: string;
  userCount: number;
  userRanking: IUserRanking[];
}

// AnalysisResultの初期化処理
export const initAnalysisResult: IAnalysisResult = {
  analysisEndDate: '',
  analysisStartDate: '',
  analysisWord: '',
  deleteFlag: 0,
  favoriteCount: 0,
  id: 0,
  image: '',
  insertDate: '',
  retweetCount: 0,
  status: 0,
  tweetCount: 0,
  updateDate: '',
  url: '',
  userCount: 0,
  userRanking: []
};

export interface IUserRanking {
  tweetCount: number;
  userAccount: string;
  userName: string;
}

export interface IAnalysisRequest {
  startDate: string;
  analysisWord: string;
  url: string;
  analysisTiming: number[];
  autoTweet: number;
}

// AnalysisRequestの初期化処理
export const initAnalysisRequest: IAnalysisRequest = {
  startDate: '',
  analysisWord: '',
  url: '',
  analysisTiming: [],
  autoTweet: 0
};
