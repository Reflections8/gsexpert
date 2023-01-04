const path = $('path')
const indicator = $('.indicator')


const allCitiesNodeList = document.querySelectorAll('.map-wrapper svg path')
const allCities = Array.from(allCitiesNodeList)

const citiesWithRO = document.querySelectorAll('.hasOffice')
Array.from(citiesWithRO).map(item => {
  item.addEventListener('mouseover', () => {
    item.style.fill = 'red'
  })
  item.addEventListener('mouseleave', () => {
    item.style.fill = '#1F3355'
  })
})


// const citiesWithRO = ['#RU-KGD', '#RU-ARK', '#RU-MUR', '#RU-LEN', '#RU-TVE', '#RU-MOS', '#RU-TUL', '#RU-RYA', '#RU-VLA', '#RU-IVA', '#RU-KRS', '#RU-BEL', '#RU-KDA', '#RU-ROS', '#RU-VGG', '#RU-STA', '#RU-NIZ', '#RU-CU', '#RU-ME', '#RU-TA', '#RU-SAM', '#RU-ORE', '#RU-UD', '#RU-CHE', '#RU-PER', '#RU-SVE', '#RU-TYU', '#RU-OMS', '#RU-NVS', '#RU-ARK', '#RU-KO', '#RU-KHM', '#RU-YAN', '#RU-KK', '#RU-KYA', '#RU-BU']


const idAarr = ["RU-MOW", "RU-SPE", "RU-NEN", "RU-YAR", "RU-CHE", "RU-ULY", "RU-TYU", "RU-TUL", "RU-SVE", "RU-RYA", "RU-ORL", "RU-OMS", "RU-NGR", "RU-LIP", "RU-KRS", "RU-KGN", "RU-KGD", "RU-IVA", "RU-BRY", "RU-AST", "RU-KHA", "RU-CE", "RU-UD", "RU-SE", "RU-MO", "RU-KR", "RU-KL", "RU-IN", "RU-AL", "RU-BA", "RU-AD", "RU-CR", "RU-SEV", "RU-KO", "RU-KIR", "RU-PNZ", "RU-TAM", "RU-MUR", "RU-LEN", "RU-VLG", "RU-KOS", "RU-PSK", "RU-ARK", "RU-YAN", "RU-CHU", "RU-YEV", "RU-TY", "RU-SAK", "RU-AMU", "RU-BU", "RU-KK", "RU-KEM", "RU-NVS", "RU-ALT", "RU-DA", "RU-STA", "RU-KB", "RU-KC", "RU-KDA", "RU-ROS", "RU-SAM", "RU-TA", "RU-ME", "RU-CU", "RU-NIZ", "RU-VLA", "RU-MOS", "RU-KLU", "RU-BEL", "RU-ZAB", "RU-PRI", "RU-KAM", "RU-MAG", "RU-SA", "RU-KYA", "RU-ORE", "RU-SAR", "RU-VGG", "RU-VOR", "RU-SMO", "RU-TVE", "RU-PER", "RU-KHM", "RU-TOM", "RU-IRK"];

const idAarr2 = [["RU-MOW", "Москва", "moscow.gif"],
  ["RU-CHE", "Челябинская область", "chelyabinskaya_flag.png"],
  ["RU-ORL", "Орловская область"],
  ["RU-OMS", "Омская область", "flag_omskoj_oblasti.png"],
  ["RU-LIP", "Липецкая область", "lipeckya.jpg"],
  ["RU-KRS", "Курская область", "flag_of_kursk_oblast.png"],
  ["RU-RYA", "Рязанская область", "ryazan.png"],
  ["RU-BRY", "Брянская область", "bryanskaya_flag.png"],
  ["RU-KIR", "Кировская область", "flag_kirovskoy_oblasti.png"],
  ["RU-ARK", "Архангельская область", ""],
  ["RU-MUR", "Мурманская область", ""],
  ["RU-SPE", "Санкт-Петербург", ""],
  ["RU-YAR", "Ярославская область", ""],
  ["RU-ULY", "Ульяновская область", ""],
  ["RU-NVS", "Новосибирская область", ""],
  ["RU-TYU", "Тюменская область", ""],
  ["RU-SVE", "Свердловская область", ""],
  ["RU-NGR", "Новгородская область", ""],
  ["RU-KGN", "Курганская область", ""],
  ["RU-KGD", "Калининградская область", ""],
  ["RU-IVA", "Ивановская область", ""],
  ["RU-AST", "Астраханская область", ""],
  ["RU-KHA", "Хабаровский край", ""],
  ["RU-CE", "Чеченская республика", ""],
  ["RU-UD", "Удмуртская республика", ""],
  ["RU-SE", "Республика Северная Осетия", ""],
  ["RU-MO", "Республика Мордовия", ""],
  ["RU-KR", "Республика  Карелия", ""],
  ["RU-KL", "Республика  Калмыкия", ""],
  ["RU-IN", "Республика  Ингушетия", ""],
  ["RU-AL", "Республика Алтай", ""],
  ["RU-BA", "Республика Башкортостан", ""],
  ["RU-AD", "Республика Адыгея", ""],
  ["RU-CR", "Республика Крым", ""],
  ["RU-SEV", "Севастополь", ""],
  ["RU-KO", "Республика Коми", ""],
  ["RU-PNZ", "Пензенская область", ""],
  ["RU-TAM", "Тамбовская область", ""],
  ["RU-LEN", "Ленинградская область", ""],
  ["RU-VLG", "Вологодская область", ""],
  ["RU-KOS", "Костромская область", ""],
  ["RU-PSK", "Псковская область", ""],
  ["RU-YAN", "Ямало-Ненецкий АО", ""],
  ["RU-CHU", "Чукотский АО", ""],
  ["RU-YEV", "Еврейская автономская область", ""],
  ["RU-TY", "Республика Тыва", ""],
  ["RU-SAK", "Сахалинская область", ""],
  ["RU-AMU", "Амурская область", ""],
  ["RU-BU", "Республика Бурятия", ""],
  ["RU-KK", "Республика Хакасия", ""],
  ["RU-KEM", "Кемеровская область", ""],
  ["RU-ALT", "Алтайский край", ""],
  ["RU-DA", "Республика Дагестан", ""],
  ["RU-KB", "Кабардино-Балкарская республика", ""],
  ["RU-KC", "Карачаевая-Черкесская республика", ""],
  ["RU-KDA", "Краснодарский край", ""],
  ["RU-ROS", "Ростовская область", ""],
  ["RU-SAM", "Самарская область", ""],
  ["RU-TA", "Республика Татарстан", ""],
  ["RU-ME", "Республика Марий Эл", ""],
  ["RU-CU", "Чувашская республика", ""],
  ["RU-NIZ", "Нижегородская край", ""],
  ["RU-VLA", "Владимировская область", ""],
  ["RU-MOS", "Московская область", ""],
  ["RU-KLU", "Калужская область", ""],
  ["RU-BEL", "Белгородская область", ""],
  ["RU-ZAB", "Забайкальский край", ""],
  ["RU-PRI", "Приморский край", ""],
  ["RU-KAM", "Камачатский край", ""],
  ["RU-MAG", "Магаданская область", ""],
  ["RU-SA", "Республика Саха", ""],
  ["RU-KYA", "Красноярский край", ""],
  ["RU-ORE", "Оренбургская область", ""],
  ["RU-SAR", "Саратовская область", ""],
  ["RU-VGG", "Волгоградская область", ""],
  ["RU-VOR", "Ставропольский край", ""],
  ["RU-SMO", "Смоленская область", ""],
  ["RU-TVE", "Тверская область", ""],
  ["RU-PER", "Пермская область", ""],
  ["RU-KHM", "Ханты-Мансийский АО", ""],
  ["RU-KHM", "Ханты-Мансийский АО", ""],
  ["RU-TOM", "Томская область", ""],
  ["RU-IRK", "Иркутская область", ""],
  ["RU-NEN", "Ненецскй АО", ""],
  ["RU-STA", "Ставропольский край", ""],
  ["RU-TUL", "Тульская область", "tulskaya_flag.png"]];

path.hover(function (e) {
  indicator.html('');
  console.log(e)
  if ($(this).attr('name')) {
    const name = $(this).attr('name');
    $(`<div>
        <div class="indicator-flex">
            <img src="src/icons/map/red-logo.svg" class="indicator-img">
            <div>${Math.floor(Math.random() * 100)} проекта</div>
        </div>
        <div class="indicator-name">
        ` + name + `
        </div> 
       </div>`).appendTo('.indicator');
  }

  if ($(this).hasClass('hasOffice')) {
    indicator.css({'top': e.clientY - 50, 'left': e.clientX + 10}).show();
  }
})

path.mouseleave(function (e) {
  indicator.css({'top': e.pageY, 'left': e.pageX + 30}).hide();
})

path.each(function () {
  const regId = $(this).attr('id');
  let flag = '';
  let name = '';
  for (const element of idAarr2) {

    if (regId == element[0]) {
      name = element[1];
      flag = 'flags/' + element[2];

      $(this).attr('name', name);
      $(this).attr('flag', flag);
    }
  }

  const regIdDiv = '<div class="reg" >' + '[' + '<span>' + regId + '</span>' + ']' + ' ' + name + '</div>'
  $(regIdDiv).appendTo('.regs');
})