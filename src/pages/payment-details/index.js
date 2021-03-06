import React from 'react';

import './PaymentDetails.css';

const PaymentDetailsPage = (props) => {
	return (
		<div className="page-component page-component--payment-details">
			<h3>ОПЛАТА</h3>
			<p>
				Мы позаботились о том, чтобы оплата покупки была доступна в той форме, которую предпочитаете лично вы.
				Независимо от выбранной формы оплаты, расчет производится только в белорусских рублях.
			</p>
			<h3>НАЛИЧНЫЙ РАСЧЕТ</h3>
			<p>
				Вы можете оплатить покупку при доставке, рассчитываясь с курьером наличными деньгами.
				Если вы осуществляете самовывоз, оплату необходимо будет совершить через кассу магазина.
			</p>
			<h3>БАНКОВСКИЕ КАРТЫ</h3>
			<h4>Оплата банковской картой через терминал</h4>
			<p>
				Оплата курьеру при доставке. Сообщите выбранный способ оплаты во время заказа, и курьер приедет к вам с терминалом.
				Также возможна оплата через терминалы во всех наших розничных магазинах.
			</p>
			<h4>При доставке товара почтой. </h4>
			<p>
				Оплата производится в почтовом отделении при получении товара. Обратите внимание, что почта взимает комиссию за перевод денежных средств в размере около 3,6% от суммы перевода.
			</p>
			<h3>БЕЗНАЛИЧНЫЙ РАСЧЕТ (ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ И ИНДИВИДУАЛЬНЫХ ПРЕДПРИНИМАТЕЛЕЙ)</h3>
			<p>
				Любой товар нашего интернет-магазина можно приобрести по безналичному расчету. Цены на сайте включают НДС, а наличие на складе всегда актуально.
				Все заказы по безналичному расчету просим оформлять только через корзину сайта (для ускорения выставления счета и исключения ошибок при оформлении). Это даже проще, чем по телефону:
			</p>
			<ul>
				<li>
					1. Положите товар в корзину на сайте, при оформлении заказа выберите любой доступный способ оплаты, а в комментарии укажите "безналичный расчет".
				</li>
				<li>
					2. Обязательно укажите e-mail, на который следует выслать счет (его отправка будет выполнена в течение дня).
				</li>
				<li>
					3. Получив счет на e-mail, оплатите его в течение 3 рабочих дней (по истечении этого срока он станет недействителен).
				</li>
				<li>
					4. После зачисления денег с вами свяжется наш специалист для уточнения условий доставки.
				</li>
				<li>
					5. В назначенное время и место курьер привезет товар вместе с документами на подпись.
				</li>
			</ul>
			<p>
				Если вам нужна консультация по вопросу безналичного расчета, вы можете обратиться к нам на e-mail или по телефону +375 (29) 8888888.
			</p>
		</div>
	);
};

PaymentDetailsPage.propTypes = {};

PaymentDetailsPage.defaultProps = {};

export default PaymentDetailsPage;
