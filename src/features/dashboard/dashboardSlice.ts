import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Student } from 'models';

export interface DashboardStatistics {
    maleCount: number;
    female: number;
    highMarkCount: number;
    lowMarkCount: number;
}

export interface RankingByCity {
    cityId: string;
    rankingList: Student[];
}

export interface DashboardState{
    loading: boolean;
    statistic: DashboardStatistics;
    highestStudentList: Student[];
    lowestStudentList: Student[];
    rankingByCityList: RankingByCity[];
}

const initialState: DashboardState = {
    loading: false,
    statistic: {
        maleCount: 0,
        female: 0,
        highMarkCount: 0,
        lowMarkCount: 0,
    },
    highestStudentList: [],
    lowestStudentList: [],
    rankingByCityList: [],
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        fetchData: (state) => {
            state.loading = true;
        },

        fetchDataSuccess: (state) => {
            state.loading = false;
        },

        fetchDataFaild: (state) => {
            state.loading = false;
        },

        setStatistics: (state, action: PayloadAction<DashboardStatistics>) => {
            state.statistic = action.payload
        },

        setHighestStudentList: (state, action: PayloadAction<Student[]>) => {
            state.highestStudentList = action.payload
        },

        setLowestStudentList: (state, action: PayloadAction<Student[]>) => {
            state.lowestStudentList = action.payload
        },

        setRankingByCityList: (state, action: PayloadAction<RankingByCity[]>) => {
            state.rankingByCityList = action.payload
        },
    }
});

//Actions
export const dashboardActions = dashboardSlice.actions;
//Selectors
export const selectDashboardStatistics = (state: RootState) => state.dashboard.statistic;
export const selectDashboardLoading = (state: RootState) => state.dashboard.loading;
export const selectDashboardHighestStudentList = (state: RootState) => state.dashboard.highestStudentList;
export const selectDashboardLowestStudentList = (state: RootState) => state.dashboard.lowestStudentList;
export const selectDashboardRankingByCityList = (state: RootState) => state.dashboard.rankingByCityList;
//Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;