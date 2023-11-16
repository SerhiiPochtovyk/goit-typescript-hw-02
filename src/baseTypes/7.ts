/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}


function isWeekend(day: DaysOfWeek): boolean {
  // Використовуємо оператор switch для визначення, чи це вихідний чи робочий день
  switch (day) {
    case DaysOfWeek.Saturday:
    case DaysOfWeek.Sunday:
      return true; 
    default:
      return false; 
  }
}