const statusMessage = {
  200: {message: 'успешное выполнение запроса', theme: 'success'},
  201: {message: 'успешно создан новый сотрудник', theme: 'success'},
  400: {message: 'неверный запрос', theme: 'danger'},
  404: {message: 'сотрудник не найден в системе', theme: 'danger'},
  500: {message: 'серверная ошибка', theme: 'danger'}
};

export default statusMessage;