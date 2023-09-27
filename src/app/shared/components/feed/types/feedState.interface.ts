import { getFeedResponseInterface } from './getFeedResponse.interace'

export interface FeedStateInterface { 
 isLoading: boolean
 error: string | null
 data: getFeedResponseInterface | null
}