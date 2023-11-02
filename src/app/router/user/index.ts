import { BASE_URL } from '../../config/env.ts'

export const userRoutes = {
  'user-panel': `${BASE_URL}/panel-uzytkownika`,
  'user-panel.dashboard': `${BASE_URL}/panel-uzytkownika/podglad`,
  //CARS
  'user-panel.cars': `${BASE_URL}/panel-uzytkownika/samochody`,
  'user-panel.car': (carId = ':carId') => `${BASE_URL}/panel-uzytkownika/samochody/${carId}`,

  //organizations
  'user-panel.members': `${BASE_URL}/panel-uzytkownika/pracownicy`,
  'user-panel.member': (memberId = ':memberId') =>
    `${BASE_URL}/panel-uzytkownika/pracownicy/${memberId}`,

  //settings
  'user-panel.settings': `${BASE_URL}/panel-uzytkownika/ustawienia`,
}
