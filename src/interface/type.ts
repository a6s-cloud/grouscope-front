export interface IAnalysisResult {
  analysisEndDate: string
  analysisStartDate: string
  analysisWord: string
  deleteFlag: number
  favoriteCount: number
  id: number
  image: string
  insertDate: string
  retweetCount: number
  status: number
  tweetCount: number
  updateDate: string
  url: string
  userCount: number
  userRanking: IUserRanking[]
}

interface IUserRanking {
  tweetCount: number;
  userAccount: string;
  userName: string;
}
