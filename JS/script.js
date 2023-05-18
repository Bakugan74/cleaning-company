window.addEventListener('load', function () {
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
    var form = document.getElementById('myForm')


    submitButton.addEventListener('click', function () {
        var manager = managerSelect.value;
        var surname = surnameInput.value;
        var name = nameInput.value;
        var patronymic = patronymicInput.value;
        var cleaningType = cleaningTypeSelect.value;
        var date = dateInput.value;
        var comment = commentTextarea.value;

        if (!manager || !surname || !name || !cleaningType || !date) {
            alert('Пожалуйста, заполните все обязательные поля!');
            return;
        }
        document.querySelector('form').style.display = 'none';
        document.querySelector('.order-preview').style.display = 'block';
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
    confirmButton.addEventListener('click', function (event) {
        var orderInfo = orderDetails.innerHTML;
        event.preventDefault()
        form.reset();
        document.querySelector('form').style.display = 'block';
        document.querySelector('.order-preview').style.display = 'none';

        if (!orderInfo) {
            alert('Пожалуйста, сформируйте заказ!');
            return;
        }

        console.log(orderInfo);
        alert('Заказ успешно оформлен!')
    });
});
