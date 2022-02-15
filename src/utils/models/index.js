export const userDataModel = (apiData) => {
  return {
    id: apiData.id,
    userInfos: {
      firstName: apiData.userInfos.firstName,
      lastName: apiData.userInfos.lastName,
      age: apiData.userInfos.age,
    },
    todayScore: apiData.todayScore ?? apiData.score,
    keyData: {
      calorieCount: apiData.keyData.calorieCount,
      proteinCount: apiData.keyData.proteinCount,
      carbohydrateCount: apiData.keyData.carbohydrateCount,
      lipidCount: apiData.keyData.lipidCount,
    },
  }
}

export const activityDataModel = (apiData) => {
  return {
    userId: apiData.userId,
    sessions: apiData.sessions.map((session) => {
      return {
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      }
    }),
  }
}

export const perfsDataModel = (apiData) => {
  return {
    userId: apiData.userId,
    kind: apiData.kind,
    data: apiData.data.map((d) => {
      return {
        value: d.value,
        kind: d.kind,
      }
    }),
  }
}

export const sessionsDataModel = (apiData) => {
  return {
    userId: apiData.userId,
    sessions: apiData.sessions.map((d) => {
      return {
        day: d.day,
        sessionLength: d.sessionLength,
      }
    }),
  }
}
