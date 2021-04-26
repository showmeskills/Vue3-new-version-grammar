import {State} from '../state'
export type Getters = {
    completedCount(state:State):number,
    totalCount(state:State):number
}