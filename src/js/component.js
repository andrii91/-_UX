$(document).ready(function($) {
    var y = $(document).scrollTop();
    $("body,html").animate({
        scrollTop: y - 100
    }, 500);
    $('#two').hide();
    $('#three').hide();


    var scalePosition, 
        liActive = 56, 
        half = 52.5, 
        scaleInterval = 104, 
        scaleHeight = $('.scale-line').height() / 2 - half,
        arrowPosition = $('.scale-line').height() / 2 - 46;

    
    if ($(window).width() < 750) {
      half = 42.5;
      scaleInterval = 30;
      liActive = 20;
      scaleHeight = $('.scale-line').height() / 2 - half;
      arrowPosition = $('.scale-line').height() / 2 - 28;

            if (y < 300) {}
            if (y > 300 && y < 600) {}
            if (y > 600 && y < 900) {}
            if (y > 900 && y < 1200) {}
            if (y > 1200 && y < 1500) {}
            if (y > 1500 && y < 1800) {}
            if (y > 1800 && y < 2100) {}
            if (y > 2100 && y < 2400) {}
            if (y > 2400 && y < 2700) {}
            if (y > 2700 && y < 3000) {}
            if (y > 3000 && y < 3300) {}
            if (y > 3300 && y < 3600) {}
            if (y > 3600 && y < 3900) {}
            if (y > 3900 && y < 4200) {}
            if (y > 4200 && y < 4500) {}
        }

$('.scale .scale-line').css({
        'background-position-y': scaleHeight + 'px',
        'transition': '1s'
    });
    $('.arrow').css({
        'top': arrowPosition + 'px'
    });


    $(document).scroll(function() {
        y = $(this).scrollTop();

        if (y < 300) {
          scaleHeight = $('.scale-line').height() / 2 - half;
          arrowPosition = $('.scale-line').height() / 2 - 46;

            $('.hide').show(400);
            $('.header-box').hide(400);
            $('.header-info').hide(400);
            $('.header-title').text('').append('<p style="font-size: 24px;">Вся правда про опыт и достижения</p> <span>Дамира Халилова</span>');
           
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.registration-btn').show(400);
        }
        if (y > 300 && y < 600) {

            scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 1);
            arrowPosition = $('.scale-line').height() / 2 - 46;

            

             $('.hide').show(400);
            $('.header-box').show(400);
            $(' .header-info').text('').append('История становления лучшего в СНГ <br><span>эксперта по SMM</span> на фоне зарождения <br>современного Интернета').show(400);
            $('.header-title').text('').append('Кто такой  <span>Дамир Халилов</span>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.damir').css({
                'opacity': '1',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.registration-btn').show(400);
        }

        if (y > 600 && y < 900) {
            scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 2);
            arrowPosition = $('.scale-line').height() / 2 - 46;

            $('.hide').show(400);
            $('.header-title').text('').append('<span>1996</span>');
            $(' .header-info').text('').append('<span>Первый раз зашел в Интернет</span><br> <br>Дамиру было 14 лет. Начиналась новая информационная эпоха для всего мира.').show(400);

            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.registration-btn').hide();
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
        }
        if (y > 900 && y < 1200) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 3);
          arrowPosition = $('.scale-line').height() / 2 - 46;

            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>1998</span>');
            $(' .header-info').text('').append('<span>Создал свой первый сайт  </span><br> <br>Делал первые шаги в программировании <br>Жадно разбирался в новых технологиях<br> Переехал в Санкт-Петербург');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 1200 && y < 1500) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 4);
          arrowPosition = $('.scale-line').height() / 2 - 46;

            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>1998</span>');
            $(' .header-info').text('').append('<span>в это же время... </span><br> <br> <img src="images/googlelogo_color_272x92dp.png" style="float:left; max-width: 200px; margin: 0 30px 0 0;">Лари Пейдж и Сергей Брин создают Google');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(1)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 1500 && y < 1800) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 5 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>2000</span>');
            $(' .header-info').text('').append('<span>Становление специалиста  </span><br> <br>Работал PHP-программистом <br>Одним из первых начал осваивать SEO-продвижение');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 1800 && y < 2100) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 6 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $(' .header-info').text('').append('<span>в это же время... </span><br> <br> <img src="images/logo_yandex-brauzer.png" style="float:left; max-width: 200px; margin: 0 30px 0 0;">Аркадий Волж <br>создает Яндекс');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 2100 && y < 2400) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 7 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>2003</span>');
            $(' .header-info').text('').append('<span>Становление интернет-маркетолога  </span><br> <br>Работал интернет-маркетологом <br>Провел первую кампанию в Яндекс.Директ');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 2400 && y < 2700) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 8 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>2004</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Провел первую кампанию вирусного маркетинга</li> <li>Работал руководителем отдела интернет-маркетинга</li> <li>Первый раз выступает на конференции</li> </ul>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 2700 && y < 3000) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 9 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $(' .header-info').text('').append('<span>в это же время... </span><br> <br> <img src="images/facebook-clipart-transparent-background-4.jpg" style="float:left; max-width: 200px; margin: 0 30px 0 0;">Марк Цукерберг<br> создает Facebook');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 3000 && y < 3300) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 10 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>2005</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Руководил интернет-агентством Волекс</li> <li>Провел первую SMM-кампанию в MySpace и Digg</li> <li>Опубликовал первую статью</li> </ul>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 3300 && y < 3600) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 11 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>2006</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Основал первое в СНГ SMM-агентство GreenPR</li> <li>Первое интервью для федерального канала</li> <li>9 активных SMM-проектов</li> <li>Первый проект для Universal Pictures</li> </ul>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 3600 && y < 3900) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 12 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>2007</span>');
            $(' .header-info').text('').append('<span>в это же время... </span><br> <br> <img src="images/Russian-Social-Network-VKontakte-Cracks-Down-on-ISIS-Accounts-and-Pages-458887-2.png" style="float:left; max-width: 200px; margin: 0 30px 0 0;">Павел Дуров <br>запускает ВКонтакте');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 3900 && y < 4200) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 13 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>2007</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Первое выступление на Российском Интернет Форуме</li> <li>Команда GreenPR - 12 человек  </li> <li>28 активных SMM-проектов</li> <li>Начало работы с «Балтикой», «Стокгольмской Школой Экономики», «Миэль»  </li> </ul>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 4200 && y < 4500) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 14 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('.header-title').text('').append('<span>2008</span>');
            $(' .header-info').text('').append('<span>Первый тренинг по SMM </span><br> <br> Провел первый тренинг «Маркетинг в социальных сетях» <br>Старт работы GreenPR с Pepsi, ISIC, Евросеть  ');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
            $('.header-box').hide(400);
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 0 && y < 4500) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 15 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').show(200);
        }
        if (y > 4500 && y < 4800) {
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2008</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">37</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">10</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">340</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
        }
        if (y > 4800 && y < 5100) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 16 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2009</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Консультировал стартапы на Harvest, Startup Weekend</li> <li>Начал преподавать в Государственный Университет Управления</li> <li>Первый проект для SonyPictures</li> </ul>');
            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
        }
        if (y > 5100 && y < 5400) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 17 - liActive);
          arrowPosition = $('.scale-line').height() / 2 + 10;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2009</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">39</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">17</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">670</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(2)').addClass('active');
        }
        if (y > 5400 && y < 5700) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 18 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2010</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Открытие филиалов GreenPR в Казахстане и Украине  </li> <li>Визит в составе российской делегации в Кремниевую долину (визиты в Google, Facebook, Wikipedia, Yahoo и 12 других ключевых компаний)</li> <li>Переезд офиса из Санкт-Петербурга в Москву  </li> </ul>');
            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 5700 && y < 6000) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 19 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2010</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">49</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">21</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1087</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 6000 && y < 6300) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 20 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2011</span>');
            $(' .header-info').text('').append('<span>Выход на рынок Америки </span><br> <br> Открытие филиала GreenPR в Лос-Анджелесе <br>Вторая стажировка в Кремниевой долине');

            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 6300 & y < 6600) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 21 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2011</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">71</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">19</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1150</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 6600 && y < 6900) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 22 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2012</span>');
            $(' .header-info').text('').append('<span>Запуск легендарного курса <br>"SMM для бизнеса" </span>');

            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 6900 && y < 7200) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 23 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2012</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">76</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">26</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1290</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 7200 && y < 7500) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 24 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2013</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Выход книги «Маркетинг в социальных сетях» («Манн, Иванов и Фербер»)</li> <li>Победа в конкурсе SMM-баттл от Одноклассников (проект с Мегафоном <a href="http://www.cossa.ru/ok/" target=_blank>http://www.cossa.ru/ok/</a>)  </li> </ul>');
            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 7500 && y < 7800) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 25 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2013</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">82</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">26</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1315</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 7800 && y < 8100) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 26 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2014</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Развитие агентской активности на Европу</li> <li>Начало преподавательской деятельности в Высшей Школе Экономики</li> <li>Получение премии «Книга года» от Ozon.ru </li> <li>Свадьба с прекрасной Елена Халилова  </li> </ul>');
            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 8100 && y < 8400) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 27 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2015</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Начало работы с Технопарком Сколково</li>  <li>Консультирование стартапов ФРИИ</li>  <li>Тренинги в России, Турции, Казахстане, Азербайджане, Грузии  </li> </ul>');
            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 8400 && y < 8700) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 28 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2015</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">98</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">37</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1990</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 8700 && y < 9000) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 29 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2016</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Организация большого образовательного проекта Everycamp в Барселоне (с Дарией Бикбаевой)</li>  <li>Вошел в топ-50 рейтинга Tagline - персоны Digital-индустрии</li>  <li>Старт ежегодного тренинга #SMM2017</li><li> Выход художественной книги «Ловзар»</li>  <li>Тренинги в России, Израиле, Испании, Греции, Турции, Беларуси, Украине, Узбекистане</li> </ul>');
            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 9000 && y < 9300) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 30 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2016</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">109</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">49</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">3125</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 9300 && y < 9600) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 31 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#two').hide(200);
            $('#one').show(200);
            $('.header-title').text('').append('<span>2017</span>');
            $(' .header-info').text('').append('<ul class="head-list"> <li>Запуск курса SMM для бизнеса 3.0</li>  <li>Запуск тренинга "Контент-маркетинг"</li>  <li>Выступление на Олимпийском стадионе в Сочи</li>  <li>Выход книги «Продвижение в Instagram» (ожидается в сентябре)  </li> </ul>');
            $('.header-box').hide(400);
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
        }
        if (y > 9600 && y < 9900) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 32 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.hide').show(400);
            $('.registration-btn').hide();
            $('#one').hide(200);
            $('#three').hide(200);
            $('#two').show(200);
            $('#two .header-title').text('').append('<span>2017</span>');
            $('#two .row').text('').append('<div class="col-4"> <h2 class="two-title">47</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">31</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">2112</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>');
            $('.scale .scale-line').css({
                'background-position-y': scaleHeight + 'px',
                'transition': '1s'
            });
            $('.arrow').css({
                'top': arrowPosition + 'px'
            });
            $('.damir').css({
                'opacity': '0.6',
                'transition': '1s'
            });
            $('.label li').removeClass('active');
            $('.label li:nth-child(3)').addClass('active');
            $('header').removeClass('flex');

        }
        if (y > 9900) {
          scaleHeight = $('.scale-line').height() / 2 - (half + scaleInterval * 33 - liActive * 2);
          arrowPosition = $('.scale-line').height() / 2 + 66;
            $('.registration-btn').show(400);
            $('#three').show(200);
            $('#two').hide(200);
            $('#one').hide(200);
            $('.damir').css({
                'opacity': '1',
                'transition': '1s'
            });
            $('.hide').hide(400);
            $('header').addClass('flex');
        }

        /* iPhone */

        if ($(window).width() < 750) {

            if (y < 300) {
                arrowPosition = $('.scale-line').height() / 2 - 28;
                 $('.arrow').css({
                  'top': arrowPosition + 'px'
                  });
                console.log("iPhone 5 46");

            }

            if (y > 300 && y < 1500) {
                arrowPosition = $('.scale-line').height() / 2 - 28;
                 $('.arrow').css({
                  'top': arrowPosition + 'px'
                  });
                console.log("iPhone 5 46");

            }

            if (y > 1500 && y < 5400) {
              arrowPosition = $('.scale-line').height() / 2 - 7;
                 $('.arrow').css({
                  'top': arrowPosition + 'px'
                  });
                console.log("iPhone 5 58");

            }

            if (y > 5400) {
              arrowPosition = $('.scale-line').height() / 2 + 14;
                 $('.arrow').css({
                  'top': arrowPosition + 'px'
                  });
                console.log("iPhone 5 71");

            }

        }

        /* iPhone 6+*/

        if ($(window).width() < 750 && $(window).width() > 568 && $(window).width() > 700) {
            $('.damir').css({
                'max-width': '640px'
            });



        }

        /* 1280  1920*/

        if ($(window).width() < 1290 && $(window).width() > 570 && $(window).width() > 700 && $(window).width() > 740 || $(window).width() > 1900) {

            if (y > 5400) {

               

            }

        }


    });
    /*$('.oneclick').click(function () {
      y = $(document).scrollTop(301);


    });*/
    $(window).keydown(function(event) {
        switch (event.keyCode) {
            case 38:
                var d = $(document).scrollTop();


                if (d > 300) {
                    $(document).scrollTop(0);
                }
                if (d > 600) {
                    $(document).scrollTop(401);
                }
                if (d > 900) {
                    $(document).scrollTop(701);
                }
                if (d > 1200) {
                    $(document).scrollTop(1001);
                }
                if (d > 1500) {
                    $(document).scrollTop(1301);
                }
                if (d > 1800) {
                    $(document).scrollTop(1601);
                }

                if (d > 2100) {
                    $(document).scrollTop(1901);
                }
                if (d > 2400) {
                    $(document).scrollTop(2201);
                }
                if (d > 2700) {
                    $(document).scrollTop(2501);
                }
                if (d > 3000) {
                    $(document).scrollTop(2801);
                }
                if (d > 3300) {
                    $(document).scrollTop(3101);
                }
                if (d > 3600) {
                    $(document).scrollTop(3401);
                }
                if (d > 3900) {
                    $(document).scrollTop(3701);
                }
                if (d > 4200) {
                    $(document).scrollTop(4001);
                }
                if (d > 4500) {
                    $(document).scrollTop(4301);
                }
                if (d > 4800) {
                    $(document).scrollTop(4601);
                }
                if (d > 5100) {
                    $(document).scrollTop(4901);
                }
                if (d > 5400) {
                    $(document).scrollTop(5201);
                }
                if (d > 5700) {
                    $(document).scrollTop(5501);
                }
                if (d > 6000) {
                    $(document).scrollTop(5801);
                }
                if (d > 6300) {
                    $(document).scrollTop(6100);
                }
                if (d > 6600) {
                    $(document).scrollTop(6400);
                }
                if (d > 6900) {
                    $(document).scrollTop(6700);
                }
                if (d > 7200) {
                    $(document).scrollTop(7000);
                }
                if (d > 7500) {
                    $(document).scrollTop(7300);
                }
                if (d > 7800) {
                    $(document).scrollTop(7600);
                }
                if (d > 8100) {
                    $(document).scrollTop(7900);
                }
                if (d > 8400) {
                    $(document).scrollTop(8200);
                }
                if (d > 8700) {
                    $(document).scrollTop(8500);
                }
                if (d > 9000) {
                    $(document).scrollTop(8800);
                }
                if (d > 9300) {
                    $(document).scrollTop(9100);
                }
                if (d > 9600) {
                    $(document).scrollTop(9400);
                }
                if (d > 9900) {
                    $(document).scrollTop(9700);
                }
                if (d > 10200) {
                    $(document).scrollTop(10000);
                }
                break;
            case 40:
                var d = $(document).scrollTop();
                if (d < 300) {
                    $(document).scrollTop(301);
                }
                if (d > 300) {
                    $(document).scrollTop(601);
                }
                if (d > 600) {
                    $(document).scrollTop(901);
                }
                if (d > 900) {
                    $(document).scrollTop(1201);
                }
                if (d > 1200) {
                    $(document).scrollTop(1501);
                }

                if (d > 1500) {
                    $(document).scrollTop(1801);
                }
                if (d > 1800) {
                    $(document).scrollTop(2101);
                }
                if (d > 2100) {
                    $(document).scrollTop(2401);
                }
                if (d > 2400) {
                    $(document).scrollTop(2701);
                }
                if (d > 2700) {
                    $(document).scrollTop(3001);
                }
                if (d > 3000) {
                    $(document).scrollTop(3301);
                }
                if (d > 3300) {
                    $(document).scrollTop(3601);
                }
                if (d > 3600) {
                    $(document).scrollTop(3901);
                }
                if (d > 3900) {
                    $(document).scrollTop(4201);
                }
                if (d > 4200) {
                    $(document).scrollTop(4501);
                }
                if (d > 4500) {
                    $(document).scrollTop(4801);
                }
                if (d > 4800) {
                    $(document).scrollTop(5101);
                }
                if (d > 5100) {
                    $(document).scrollTop(5401);
                }
                if (d > 5400) {
                    $(document).scrollTop(5701);
                }
                if (d > 5700) {
                    $(document).scrollTop(6001);
                }
                if (d > 6000) {
                    $(document).scrollTop(6301);
                }
                if (d > 6300) {
                    $(document).scrollTop(6601);
                }
                if (d > 6600) {
                    $(document).scrollTop(6901);
                }
                if (d > 6900) {
                    $(document).scrollTop(7201);
                }
                if (d > 7200) {
                    $(document).scrollTop(7501);
                }
                if (d > 7500) {
                    $(document).scrollTop(7801);
                }
                if (d > 7800) {
                    $(document).scrollTop(8101);
                }
                if (d > 8100) {
                    $(document).scrollTop(8401);
                }
                if (d > 8400) {
                    $(document).scrollTop(8701);
                }
                if (d > 8700) {
                    $(document).scrollTop(9001);
                }
                if (d > 9000) {
                    $(document).scrollTop(9301);
                }
                if (d > 9300) {
                    $(document).scrollTop(9601);
                }
                if (d > 9600) {
                    $(document).scrollTop(9901);
                }
                if (d > 9900) {
                    $(document).scrollTop(10201);
                }
                if (d > 10200) {
                    $(document).scrollTop(10601);
                }





                break;
        }
    });
    $('.up').click(function() {
        var d = $(document).scrollTop();

        if (d > 300) {
            $(document).scrollTop(0);
        }
        if (d > 600) {
            $(document).scrollTop(401);
        }
        if (d > 900) {
            $(document).scrollTop(701);
        }
        if (d > 1200) {
            $(document).scrollTop(1001);
        }
        if (d > 1500) {
            $(document).scrollTop(1301);
        }
        if (d > 1800) {
            $(document).scrollTop(1601);
        }

        if (d > 2100) {
            $(document).scrollTop(1901);
        }
        if (d > 2400) {
            $(document).scrollTop(2201);
        }
        if (d > 2700) {
            $(document).scrollTop(2501);
        }
        if (d > 3000) {
            $(document).scrollTop(2801);
        }
        if (d > 3300) {
            $(document).scrollTop(3101);
        }
        if (d > 3600) {
            $(document).scrollTop(3401);
        }
        if (d > 3900) {
            $(document).scrollTop(3701);
        }
        if (d > 4200) {
            $(document).scrollTop(4001);
        }
        if (d > 4500) {
            $(document).scrollTop(4301);
        }
        if (d > 4800) {
            $(document).scrollTop(4601);
        }
        if (d > 5100) {
            $(document).scrollTop(4901);
        }
        if (d > 5400) {
            $(document).scrollTop(5201);
        }
        if (d > 5700) {
            $(document).scrollTop(5501);
        }
        if (d > 6000) {
            $(document).scrollTop(5801);
        }
        if (d > 6300) {
            $(document).scrollTop(6100);
        }
        if (d > 6600) {
            $(document).scrollTop(6400);
        }
        if (d > 6900) {
            $(document).scrollTop(6700);
        }
        if (d > 7200) {
            $(document).scrollTop(7000);
        }
        if (d > 7500) {
            $(document).scrollTop(7300);
        }
        if (d > 7800) {
            $(document).scrollTop(7600);
        }
        if (d > 8100) {
            $(document).scrollTop(7900);
        }
        if (d > 8400) {
            $(document).scrollTop(8200);
        }
        if (d > 8700) {
            $(document).scrollTop(8500);
        }
        if (d > 9000) {
            $(document).scrollTop(8800);
        }
        if (d > 9300) {
            $(document).scrollTop(9100);
        }
        if (d > 9600) {
            $(document).scrollTop(9400);
        }
        if (d > 9900) {
            $(document).scrollTop(9700);
        }
        if (d > 10200) {
            $(document).scrollTop(10000);
        }
    });
    $('.down').click(function() {
        var d = $(document).scrollTop();
        if (d < 300) {
            $(document).scrollTop(301);
        }
        if (d > 300) {
            $(document).scrollTop(601);
        }
        if (d > 600) {
            $(document).scrollTop(901);
        }
        if (d > 900) {
            $(document).scrollTop(1201);
        }
        if (d > 1200) {
            $(document).scrollTop(1501);
        }

        if (d > 1500) {
            $(document).scrollTop(1801);
        }
        if (d > 1800) {
            $(document).scrollTop(2101);
        }
        if (d > 2100) {
            $(document).scrollTop(2401);
        }
        if (d > 2400) {
            $(document).scrollTop(2701);
        }
        if (d > 2700) {
            $(document).scrollTop(3001);
        }
        if (d > 3000) {
            $(document).scrollTop(3301);
        }
        if (d > 3300) {
            $(document).scrollTop(3601);
        }
        if (d > 3600) {
            $(document).scrollTop(3901);
        }
        if (d > 3900) {
            $(document).scrollTop(4201);
        }
        if (d > 4200) {
            $(document).scrollTop(4501);
        }
        if (d > 4500) {
            $(document).scrollTop(4801);
        }
        if (d > 4800) {
            $(document).scrollTop(5101);
        }
        if (d > 5100) {
            $(document).scrollTop(5401);
        }
        if (d > 5400) {
            $(document).scrollTop(5701);
        }
        if (d > 5700) {
            $(document).scrollTop(6001);
        }
        if (d > 6000) {
            $(document).scrollTop(6301);
        }
        if (d > 6300) {
            $(document).scrollTop(6601);
        }
        if (d > 6600) {
            $(document).scrollTop(6901);
        }
        if (d > 6900) {
            $(document).scrollTop(7201);
        }
        if (d > 7200) {
            $(document).scrollTop(7501);
        }
        if (d > 7500) {
            $(document).scrollTop(7801);
        }
        if (d > 7800) {
            $(document).scrollTop(8101);
        }
        if (d > 8100) {
            $(document).scrollTop(8401);
        }
        if (d > 8400) {
            $(document).scrollTop(8701);
        }
        if (d > 8700) {
            $(document).scrollTop(9001);
        }
        if (d > 9000) {
            $(document).scrollTop(9301);
        }
        if (d > 9300) {
            $(document).scrollTop(9601);
        }
        if (d > 9600) {
            $(document).scrollTop(9901);
        }
        if (d > 9900) {
            $(document).scrollTop(10201);
        }
        if (d > 10200) {
            $(document).scrollTop(10601);
        }

    });
});