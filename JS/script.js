window.addEventListener('load', function () {
    // Получаем элементы формы
    var managerSelect = document.getElementById('manager');
    var surnameInput = document.getElementById('surname');
    var nameInput = document.getElementById('name');
    var patronymicInput = document.getElementById('patronymic');
    var cleaningTypeSelect = document.getElementById('cleaning-type');
    var dateInput = document.getElementById('date');
    var commentTextarea = document.getElementById('comment');
    var submitButton = document.getElementById('submit');
    var orderDetails = document.getElementById('order-details');
    var confirmButton = document.getElementById('confirm');
    var confirmButtonBack = document.getElementById('confirm-back');


    // Обработчик нажатия кнопки "Сформировать заказ"
    submitButton.addEventListener('click', function () {
        // Собираем данные из полей формы
        var manager = managerSelect.value;
        var surname = surnameInput.value;
        var name = nameInput.value;
        var patronymic = patronymicInput.value;
        var cleaningType = cleaningTypeSelect.value;
        var date = dateInput.value;
        var comment = commentTextarea.value;

        // Если какое-то поле не заполнено, выводим сообщение и не формируем заказ
        if (!manager || !surname || !name || !cleaningType || !date) {
            alert('Пожалуйста, заполните все обязательные поля!');
            return;
        }
        document.querySelector('form').style.display = 'none';
        document.querySelector('.order-preview').style.display = 'block';
        //Собираем информацию о заказе и выводим ее в поле предварительного заказа
        var orderInfo = 'Менеджер: ' + manager + '<br>' +
            'Фамилия: ' + surname + '<br>' +
            'Имя: ' + name + '<br>' +
            'Отчество: ' + patronymic + '<br>' +
            'Тип уборки: ' + cleaningType + '<br>' +
            'Дата: ' + date + '<br>' +
            'Комментарий: ' + comment;
        orderDetails.innerHTML = orderInfo;

    });

    confirmButtonBack.addEventListener('click', function () {
        document.querySelector('form').style.display = 'block';
        document.querySelector('.order-preview').style.display = 'none';
    });
    // Обработчик нажатия кнопки "Подтвердить"
    confirmButton.addEventListener('click', function () {
        // Получаем информацию о заказе из поля предварительного заказа
        var orderInfo = orderDetails.innerHTML;
        window.location.reload();
        // Проверяем, что предварительный заказ не пустой
        if (!orderInfo) {
            alert('Пожалуйста, сформируйте заказ!');
            return;
        }

        // Выводим информацию о заказе в консоль браузера
        console.log(orderInfo);
        alert('Заказ успешно оформлен!')
    });
});
