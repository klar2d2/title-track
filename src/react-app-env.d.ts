/// <reference types="react-scripts" />
export interface IAppProps {
  recentTitles?: any[],
}

export interface IReview {
  reviewTitle: string,
  reviewContent: string,
  author: string,
  label: string,
  album: string,
  albumCover: string
}
