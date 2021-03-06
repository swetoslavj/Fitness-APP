export const baseUrl: string = 'http://localhost:5000';
export const apiUrls: any = {
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  user: '/user',
  getRoutine: '/user/getRoutine',
  addRoutine: '/user/addRoutine',
  sampleRoutines: '/sampleRoutines',
  editRoutine: '/editRoutine',
  deleteRoutine: '/deleteRoutine',
  getAllUsers: '/getAllUsers',
  changeRole: '/changeRole',
  articles: '/articles',
  getArticle: '/articles/getArticle',
  editArticle: '/articles/editArticle',
  deleteAticle: '/articles/deleteArticle',
  workoutExercise: '/workout/addExercise',
  workoutExerciseNames: '/workout/exerciseNames',
  workoutGetRoutine: '/workout/getRoutine',
  workoutPostWorkout: '/workout/postWorkout',
  workoutHistory: '/workout/history',
  workoutExerciseHistory: '/workout/exerciseHistory',
  workoutGetWorkout: '/workout/getWorkout',
  workoutDeleteWorkout: '/workout/deleteWorkout'
}

export const homeImagesUrls: string[] = [
  '../../../assets/wallpaper_1.jpg',
  '../../../assets/wallpaper_2.jpg',
  '../../../assets/wallpaper_3.jpg'
];

export const exerciseLevel = {
  "none": 1,
  "sedentary": 1.2,
  "light": 1.375,
  "moderate": 1.55,
  "hard": 1.725,
  "non-stop": 1.9
};