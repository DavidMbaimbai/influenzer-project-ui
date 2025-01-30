import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyDataService {
  menuList: { id: number; name: string; url: string }[];
  statsList: { id: number; name: string; count: string; iconCss: string }[];
  categoryFilterList: { id: number; name: string }[];
  timeRangeList: { id: number; name: string }[];
  influencerSettingOptionList: {
    id: number;
    name: string;
    description: string;
  }[];
  scientificJournalList: { name: string; selected: boolean; }[];

  constructor() {
    this.menuList = [
    
      {
        id: 1,
        name: 'Leaderborad',
        url: '/leaderborad',
      },
      {
        id: 2,
        name: 'Research Tasks',
        url: '/research-tasks',
      },
      {
        id: 3,
        name: 'Products',
        url: '/products',
      },
      {
        id: 4,
        name: 'Monetization',
        url: '/monetization',
      },
      {
        id: 5,
        name: 'About',
        url: '/about',
      },
      {
        id: 6,
        name: 'Contact',
        url: '/contact',
      },
      {
        id: 7,
        name: 'Admin',
        url: '/admin',
      },
    ];
    this.statsList = [
      {
        id: 1,
        name: 'Active Influencers',
        count: '1,234',
        iconCss: 'fa-solid fa-users',
      },
      {
        id: 2,
        name: 'Claims Verified',
        count: '25,431',
        iconCss: 'fa-solid fa-certificate',
      },
      {
        id: 3,
        name: 'Average Trust Score',
        count: '85.7%',
        iconCss: 'fa-solid fa-signal',
      },
    ];
    this.categoryFilterList = [
      {
        id: 1,
        name: 'All',
      },
      {
        id: 2,
        name: 'Nutrition',
      },
      {
        id: 3,
        name: 'Fitness',
      },
      {
        id: 4,
        name: 'Medicine',
      },
      {
        id: 5,
        name: 'Mental Health',
      },
    ];
    this.timeRangeList = [
      {
        id: 1,
        name: 'Last week',
      },
      {
        id: 2,
        name: 'Last Month',
      },
      {
        id: 3,
        name: 'Last year',
      },
      {
        id: 4,
        name: 'All time',
      },
    ];
    this.scientificJournalList = [
      { name: 'pubMed Centeral', selected: false },
      { name: 'Science', selected: false },
      { name: 'Item 1', selected: false },
      { name: 'Nature', selected: false },
      { name: 'The Lancet', selected: false },
      { name: 'Cell', selected: false },
      { name: 'New England Journal of Medicine', selected: false },
      { name: 'JAMA Network', selected: false },
    ];
    this.influencerSettingOptionList = [
      {
        id: 1,
        name: 'Include Revenue Analysis',
        description: 'Analyze monetization methods and exstimate earnings',
      },
      {
        id: 2,
        name: 'Verify with scientific Journals',
        description: 'Cross reference claims with scientific ileterate',
      },
    ];
  }
}
