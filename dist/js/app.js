$(document).ready(function(e){var s=e(document).scrollTop();e("body,html").animate({scrollTop:s-100},500),e("#two").hide(),e("#three").hide();var o=56,l=52.5,i=104,t=e(".scale-line").height()/2-l,a=e(".scale-line").height()/2-46;e(window).width()<750&&(l=42.5,i=30,o=20,t=e(".scale-line").height()/2-l,a=e(".scale-line").height()/2-28),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(document).scroll(function(){s=e(this).scrollTop(),s<300&&(t=e(".scale-line").height()/2-l,a=e(".scale-line").height()/2-46,e(".hide").show(400),e(".header-box").hide(400),e(".header-info").hide(400),e(".header-title").text("").append('<p style="font-size: 24px;">Вся правда про опыт и достижения</p> <span>Дамира Халилова</span>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".registration-btn").show(400)),s>300&&s<600&&(t=e(".scale-line").height()/2-(l+1*i),a=e(".scale-line").height()/2-46,e(".hide").show(400),e(".header-box").show(400),e(" .header-info").text("").append("История становления лучшего в СНГ <br><span>эксперта по SMM</span> на фоне зарождения <br>современного Интернета").show(400),e(".header-title").text("").append("Кто такой  <span>Дамир Халилов</span>"),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".damir").css({opacity:"1",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".registration-btn").show(400)),s>600&&s<900&&(t=e(".scale-line").height()/2-(l+2*i),a=e(".scale-line").height()/2-46,e(".hide").show(400),e(".header-title").text("").append("<span>1996</span>"),e(" .header-info").text("").append("<span>Первый раз зашел в Интернет</span><br> <br>Дамиру было 14 лет. Начиналась новая информационная эпоха для всего мира.").show(400),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".registration-btn").hide(),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".header-box").hide(400),e(".arrow").css({top:a+"px"})),s>900&&s<1200&&(t=e(".scale-line").height()/2-(l+3*i),a=e(".scale-line").height()/2-46,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>1998</span>"),e(" .header-info").text("").append("<span>Создал свой первый сайт  </span><br> <br>Делал первые шаги в программировании <br>Жадно разбирался в новых технологиях<br> Переехал в Санкт-Петербург").show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>1200&&s<1500&&(t=e(".scale-line").height()/2-(l+4*i),a=e(".scale-line").height()/2-46,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>1998</span>"),e(" .header-info").text("").append('<span>в это же время... </span><br> <br> <img src="images/googlelogo_color_272x92dp.png" style="float:left; max-width: 200px; margin: 0 30px 0 0;">Лари Пейдж и Сергей Брин создают Google').show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(1)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>1500&&s<1800&&(t=e(".scale-line").height()/2-(l+5*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>2000</span>"),e(" .header-info").text("").append("<span>Становление специалиста  </span><br> <br>Работал PHP-программистом <br>Одним из первых начал осваивать SEO-продвижение").show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>1800&&s<2100&&(t=e(".scale-line").height()/2-(l+6*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(" .header-info").text("").append('<span>в это же время... </span><br> <br> <img src="images/logo_yandex-brauzer.png" style="float:left; max-width: 200px; margin: 0 30px 0 0;">Аркадий Волж <br>создает Яндекс').show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>2100&&s<2400&&(t=e(".scale-line").height()/2-(l+7*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>2003</span>"),e(" .header-info").text("").append("<span>Становление интернет-маркетолога  </span><br> <br>Работал интернет-маркетологом <br>Провел первую кампанию в Яндекс.Директ").show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>2400&&s<2700&&(t=e(".scale-line").height()/2-(l+8*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>2004</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Провел первую кампанию вирусного маркетинга</li> <li>Работал руководителем отдела интернет-маркетинга</li> <li>Первый раз выступает на конференции</li> </ul>').show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>2700&&s<3e3&&(t=e(".scale-line").height()/2-(l+9*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(" .header-info").text("").append('<span>в это же время... </span><br> <br> <img src="images/facebook-clipart-transparent-background-4.jpg" style="float:left; max-width: 200px; margin: 0 30px 0 0;">Марк Цукерберг<br> создает Facebook').show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>3e3&&s<3300&&(t=e(".scale-line").height()/2-(l+10*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>2005</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Руководил интернет-агентством Волекс</li> <li>Провел первую SMM-кампанию в MySpace и Digg</li> <li>Опубликовал первую статью</li> </ul>').show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>3300&&s<3600&&(t=e(".scale-line").height()/2-(l+11*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>2006</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Основал первое в СНГ SMM-агентство GreenPR</li> <li>Первое интервью для федерального канала</li> <li>9 активных SMM-проектов</li> <li>Первый проект для Universal Pictures</li> </ul>').show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>3600&&s<3900&&(t=e(".scale-line").height()/2-(l+12*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>2007</span>"),e(" .header-info").text("").append('<span>в это же время... </span><br> <br> <img src="images/Russian-Social-Network-VKontakte-Cracks-Down-on-ISIS-Accounts-and-Pages-458887-2.png" style="float:left; max-width: 200px; margin: 0 30px 0 0;">Павел Дуров <br>запускает ВКонтакте').show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>3900&&s<4200&&(t=e(".scale-line").height()/2-(l+13*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>2007</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Первое выступление на Российском Интернет Форуме</li> <li>Команда GreenPR - 12 человек  </li> <li>28 активных SMM-проектов</li> <li>Начало работы с «Балтикой», «Стокгольмской Школой Экономики», «Миэль»  </li> </ul>').show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>4200&&s<4500&&(t=e(".scale-line").height()/2-(l+14*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e(".header-title").text("").append("<span>2008</span>"),e(" .header-info").text("").append("<span>Первый тренинг по SMM </span><br> <br> Провел первый тренинг «Маркетинг в социальных сетях» <br>Старт работы GreenPR с Pepsi, ISIC, Евросеть  ").show(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active"),e(".header-box").hide(400),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>0&&s<4500&&(t=e(".scale-line").height()/2-(l+15*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e("#one").show(200)),s>4500&&s<4800&&(e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2008</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">37</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">10</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">340</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active")),s>4800&&s<5100&&(t=e(".scale-line").height()/2-(l+16*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2009</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Консультировал стартапы на Harvest, Startup Weekend</li> <li>Начал преподавать в Государственный Университет Управления</li> <li>Первый проект для SonyPictures</li> </ul>').show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"})),s>5100&&s<5400&&(t=e(".scale-line").height()/2-(l+17*i-o),a=e(".scale-line").height()/2+10,e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2009</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">39</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">17</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">670</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(2)").addClass("active")),s>5400&&s<5700&&(t=e(".scale-line").height()/2-(l+18*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2010</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Открытие филиалов GreenPR в Казахстане и Украине  </li> <li>Визит в составе российской делегации в Кремниевую долину (визиты в Google, Facebook, Wikipedia, Yahoo и 12 других ключевых компаний)</li> <li>Переезд офиса из Санкт-Петербурга в Москву  </li> </ul>').show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>5700&&s<6e3&&(t=e(".scale-line").height()/2-(l+19*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2010</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">49</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">21</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1087</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>6e3&&s<6300&&(t=e(".scale-line").height()/2-(l+20*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2011</span>"),e(" .header-info").text("").append("<span>Выход на рынок Америки </span><br> <br> Открытие филиала GreenPR в Лос-Анджелесе <br>Вторая стажировка в Кремниевой долине").show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>6300&s<6600&&(t=e(".scale-line").height()/2-(l+21*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2011</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">71</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">19</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1150</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>6600&&s<6900&&(t=e(".scale-line").height()/2-(l+22*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2012</span>"),e(" .header-info").text("").append('<span>Запуск легендарного курса <br>"SMM для бизнеса" </span>').show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>6900&&s<7200&&(t=e(".scale-line").height()/2-(l+23*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2012</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">76</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">26</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1290</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>7200&&s<7500&&(t=e(".scale-line").height()/2-(l+24*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2013</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Выход книги «Маркетинг в социальных сетях» («Манн, Иванов и Фербер»)</li> <li>Победа в конкурсе SMM-баттл от Одноклассников (проект с Мегафоном <a href="http://www.cossa.ru/ok/" target=_blank>http://www.cossa.ru/ok/</a>)  </li> </ul>').show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>7500&&s<7800&&(t=e(".scale-line").height()/2-(l+25*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2013</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">82</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">26</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1315</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>7800&&s<8100&&(t=e(".scale-line").height()/2-(l+26*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2014</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Развитие агентской активности на Европу</li> <li>Начало преподавательской деятельности в Высшей Школе Экономики</li> <li>Получение премии «Книга года» от Ozon.ru </li> <li>Свадьба с прекрасной Елена Халилова  </li> </ul>').show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>8100&&s<8400&&(t=e(".scale-line").height()/2-(l+27*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2015</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Начало работы с Технопарком Сколково</li>  <li>Консультирование стартапов ФРИИ</li>  <li>Тренинги в России, Турции, Казахстане, Азербайджане, Грузии  </li> </ul>').show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>8400&&s<8700&&(t=e(".scale-line").height()/2-(l+28*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2015</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">98</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">37</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">1990</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>8700&&s<9e3&&(t=e(".scale-line").height()/2-(l+29*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2016</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Организация большого образовательного проекта Everycamp в Барселоне (с Дарией Бикбаевой)</li>  <li>Вошел в топ-50 рейтинга Tagline - персоны Digital-индустрии</li>  <li>Старт ежегодного тренинга #SMM2017</li><li> Выход художественной книги «Ловзар»</li>  <li>Тренинги в России, Израиле, Испании, Греции, Турции, Беларуси, Украине, Узбекистане</li> </ul>').show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>9e3&&s<9300&&(t=e(".scale-line").height()/2-(l+30*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2016</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">109</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">49</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">3125</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>9300&&s<9600&&(t=e(".scale-line").height()/2-(l+31*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#two").hide(200),e("#one").show(200),e(".header-title").text("").append("<span>2017</span>"),e(" .header-info").text("").append('<ul class="head-list"> <li>Запуск курса SMM для бизнеса 3.0</li>  <li>Запуск тренинга "Контент-маркетинг"</li>  <li>Выступление на Олимпийском стадионе в Сочи</li>  <li>Выход книги «Продвижение в Instagram» (ожидается в сентябре)  </li> </ul>').show(400),e(".header-box").hide(400),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active")),s>9600&&s<9900&&(t=e(".scale-line").height()/2-(l+32*i-2*o),a=e(".scale-line").height()/2+66,e(".hide").show(400),e(".registration-btn").hide(),e("#one").hide(200),e("#three").hide(200),e("#two").show(200),e("#two .header-title").text("").append("<span>2017</span>"),e("#two .row").text("").append('<div class="col-4"> <h2 class="two-title">47</h2> <p class="two-info">Активных <br>SMM-проектов</p> </div> <div class="col-4"> <h2 class="two-title">31</h2> <p class="two-info">Проведено <br>тренингов</p> </div> <div class="col-4"> <h2 class="two-title">2112</h2> <p class="two-info">Выпускников <br>тренингов</p> </div>'),e(".scale .scale-line").css({"background-position-y":t+"px",transition:"1s"}),e(".arrow").css({top:a+"px"}),e(".damir").css({opacity:"0.6",transition:"1s"}),e(".label li").removeClass("active"),e(".label li:nth-child(3)").addClass("active"),e("header").removeClass("flex")),s>9900&&(t=e(".scale-line").height()/2-(l+33*i-2*o),a=e(".scale-line").height()/2+66,e(".registration-btn").show(400),e("#three").show(200),e("#two").hide(200),e("#one").hide(200),e(".damir").css({opacity:"1",transition:"1s"}),e(".hide").hide(400),e("header").addClass("flex")),e(window).width()<750&&(s<300&&(a=e(".scale-line").height()/2-28,e(".arrow").css({top:a+"px"}),console.log("iPhone 5 46")),s>300&&s<1500&&(a=e(".scale-line").height()/2-28,e(".arrow").css({top:a+"px"}),console.log("iPhone 5 46")),s>1500&&s<5400&&(a=e(".scale-line").height()/2-7,e(".arrow").css({top:a+"px"}),console.log("iPhone 5 58")),s>5400&&(a=e(".scale-line").height()/2+14,e(".arrow").css({top:a+"px"}),console.log("iPhone 5 71"))),e(window).width()<750&&e(window).width()>568&&e(window).width()>700&&e(".damir").css({"max-width":"640px"}),e(window).width()<1290&&e(window).width()>570&&e(window).width()>700&&e(window).width()>740||e(window).width()>1900}),e(window).keydown(function(s){switch(s.keyCode){case 38:var o=e(document).scrollTop();o>300&&e(document).scrollTop(0),o>600&&e(document).scrollTop(401),o>900&&e(document).scrollTop(701),o>1200&&e(document).scrollTop(1001),o>1500&&e(document).scrollTop(1301),o>1800&&e(document).scrollTop(1601),o>2100&&e(document).scrollTop(1901),o>2400&&e(document).scrollTop(2201),o>2700&&e(document).scrollTop(2501),o>3e3&&e(document).scrollTop(2801),o>3300&&e(document).scrollTop(3101),o>3600&&e(document).scrollTop(3401),o>3900&&e(document).scrollTop(3701),o>4200&&e(document).scrollTop(4001),o>4500&&e(document).scrollTop(4301),o>4800&&e(document).scrollTop(4601),o>5100&&e(document).scrollTop(4901),o>5400&&e(document).scrollTop(5201),o>5700&&e(document).scrollTop(5501),o>6e3&&e(document).scrollTop(5801),o>6300&&e(document).scrollTop(6100),o>6600&&e(document).scrollTop(6400),o>6900&&e(document).scrollTop(6700),o>7200&&e(document).scrollTop(7e3),o>7500&&e(document).scrollTop(7300),o>7800&&e(document).scrollTop(7600),o>8100&&e(document).scrollTop(7900),o>8400&&e(document).scrollTop(8200),o>8700&&e(document).scrollTop(8500),o>9e3&&e(document).scrollTop(8800),o>9300&&e(document).scrollTop(9100),o>9600&&e(document).scrollTop(9400),o>9900&&e(document).scrollTop(9700),o>10200&&e(document).scrollTop(1e4);break;case 40:var o=e(document).scrollTop();o<300&&e(document).scrollTop(301),o>300&&e(document).scrollTop(601),o>600&&e(document).scrollTop(901),o>900&&e(document).scrollTop(1201),o>1200&&e(document).scrollTop(1501),o>1500&&e(document).scrollTop(1801),o>1800&&e(document).scrollTop(2101),o>2100&&e(document).scrollTop(2401),o>2400&&e(document).scrollTop(2701),o>2700&&e(document).scrollTop(3001),o>3e3&&e(document).scrollTop(3301),o>3300&&e(document).scrollTop(3601),o>3600&&e(document).scrollTop(3901),o>3900&&e(document).scrollTop(4201),o>4200&&e(document).scrollTop(4501),o>4500&&e(document).scrollTop(4801),o>4800&&e(document).scrollTop(5101),o>5100&&e(document).scrollTop(5401),o>5400&&e(document).scrollTop(5701),o>5700&&e(document).scrollTop(6001),o>6e3&&e(document).scrollTop(6301),o>6300&&e(document).scrollTop(6601),o>6600&&e(document).scrollTop(6901),o>6900&&e(document).scrollTop(7201),o>7200&&e(document).scrollTop(7501),o>7500&&e(document).scrollTop(7801),o>7800&&e(document).scrollTop(8101),o>8100&&e(document).scrollTop(8401),o>8400&&e(document).scrollTop(8701),o>8700&&e(document).scrollTop(9001),o>9e3&&e(document).scrollTop(9301),o>9300&&e(document).scrollTop(9601),o>9600&&e(document).scrollTop(9901),o>9900&&e(document).scrollTop(10201),o>10200&&e(document).scrollTop(10601)}}),e(".up").click(function(){var s=e(document).scrollTop();s>300&&e(document).scrollTop(0),s>600&&e(document).scrollTop(401),s>900&&e(document).scrollTop(701),s>1200&&e(document).scrollTop(1001),s>1500&&e(document).scrollTop(1301),s>1800&&e(document).scrollTop(1601),s>2100&&e(document).scrollTop(1901),s>2400&&e(document).scrollTop(2201),s>2700&&e(document).scrollTop(2501),s>3e3&&e(document).scrollTop(2801),s>3300&&e(document).scrollTop(3101),s>3600&&e(document).scrollTop(3401),s>3900&&e(document).scrollTop(3701),s>4200&&e(document).scrollTop(4001),s>4500&&e(document).scrollTop(4301),s>4800&&e(document).scrollTop(4601),s>5100&&e(document).scrollTop(4901),s>5400&&e(document).scrollTop(5201),s>5700&&e(document).scrollTop(5501),s>6e3&&e(document).scrollTop(5801),s>6300&&e(document).scrollTop(6100),s>6600&&e(document).scrollTop(6400),s>6900&&e(document).scrollTop(6700),s>7200&&e(document).scrollTop(7e3),s>7500&&e(document).scrollTop(7300),s>7800&&e(document).scrollTop(7600),s>8100&&e(document).scrollTop(7900),s>8400&&e(document).scrollTop(8200),s>8700&&e(document).scrollTop(8500),s>9e3&&e(document).scrollTop(8800),s>9300&&e(document).scrollTop(9100),s>9600&&e(document).scrollTop(9400),s>9900&&e(document).scrollTop(9700),s>10200&&e(document).scrollTop(1e4)}),e(".down").click(function(){var s=e(document).scrollTop();s<300&&e(document).scrollTop(301),s>300&&e(document).scrollTop(601),s>600&&e(document).scrollTop(901),s>900&&e(document).scrollTop(1201),s>1200&&e(document).scrollTop(1501),s>1500&&e(document).scrollTop(1801),s>1800&&e(document).scrollTop(2101),s>2100&&e(document).scrollTop(2401),s>2400&&e(document).scrollTop(2701),s>2700&&e(document).scrollTop(3001),s>3e3&&e(document).scrollTop(3301),s>3300&&e(document).scrollTop(3601),s>3600&&e(document).scrollTop(3901),s>3900&&e(document).scrollTop(4201),s>4200&&e(document).scrollTop(4501),s>4500&&e(document).scrollTop(4801),s>4800&&e(document).scrollTop(5101),s>5100&&e(document).scrollTop(5401),s>5400&&e(document).scrollTop(5701),s>5700&&e(document).scrollTop(6001),s>6e3&&e(document).scrollTop(6301),s>6300&&e(document).scrollTop(6601),s>6600&&e(document).scrollTop(6901),s>6900&&e(document).scrollTop(7201),s>7200&&e(document).scrollTop(7501),s>7500&&e(document).scrollTop(7801),s>7800&&e(document).scrollTop(8101),s>8100&&e(document).scrollTop(8401),s>8400&&e(document).scrollTop(8701),s>8700&&e(document).scrollTop(9001),s>9e3&&e(document).scrollTop(9301),s>9300&&e(document).scrollTop(9601),s>9600&&e(document).scrollTop(9901),s>9900&&e(document).scrollTop(10201),s>10200&&e(document).scrollTop(10601)})});