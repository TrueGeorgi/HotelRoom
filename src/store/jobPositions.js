import { defineStore } from "pinia";

export const useJobPositions = defineStore('jobPositions', {
  state: () => ({
    openPostions: [
      {
        name: 'Web-Developer with Vue 3',
        location: 'Sofia, Bulgaria',
      },
      {
        name: 'Account Manager',
        location: 'Ruse, Bulgaria',
      },
      {
        name: 'Intern Data Quality Analyst',
        location: 'Obzor, Bulgaria',
      },
      {
        name: 'Full Stack Software Engineer',
        location: 'Plovdiv, Bulgaria',
      }
        ],
      }
    ) 
  } 
)