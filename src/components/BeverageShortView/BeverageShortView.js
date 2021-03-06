import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import Context from '../Context';
import Select from '../Select';
import * as constants from '../../constants';

const BeverageShortView = (props) => {
	const {
		item,
		buttonClassName,
	} = props;

	if (!item) {
		return null;
	}

	const {
		imgSrc,
		name,
		type,
		category,
		_id: itemId,
		availablePackaging,
		packingUnit,
		standartPackagingPrice,
	} = item;
	const { amount } = standartPackagingPrice;
	const [selectedPackaging, setSelectedPackaging] = useState(100);
	const [packagePrice, setPackagePrice] = useState(amount);

	const onButtonClick = () => {
		props.onButtonClick({
			...item,
			selectedPackaging,
			packagePrice: {
				...standartPackagingPrice,
				amount: packagePrice,
			},
		});
	};

	return (
		<Context.Consumer>
			{({ intl: { getTranslation } }) => (
				<div className="beverage-short-view">
					<div className="beverage-short-view__main">
						<div className="beverage-short-view__image-container">
							<img
								src={imgSrc}
								alt="beverage"
								className="bsv-image"
							/>
						</div>
						<div className="beverage-short-view__main-info">
							<div className="main-info__type">
								{type.label}
							</div>
							<div className="main-info__name">
								<Link
									to={`/catalog/${itemId}`}
									className="main-info__name-link"
								>
									{name}
								</Link>
							</div>
							<div className="main-info__category">
								{category.label}
							</div>
						</div>
					</div>
					<div className="beverage-short-view__footer">
						<div className="bsv-footer__item bsv-footer__quantity">
							<Select
								options={availablePackaging.map(option => ({ value: `${option}`, label: `${option}` }))}
								selectedValue={{
									value: selectedPackaging,
									label: selectedPackaging,
								}}
								onChange={({ value }) => {
									setPackagePrice((amount * +value) / 100);
									setSelectedPackaging(+value);
								}}
							/>
							<span>
								{`  ${packingUnit.label}  `}
							</span>
						</div>
						<div className="bsv-footer__item bsv-footer__price">
							<span className="bsv-footer__item-header">
								<FormattedMessage
									id={constants.BEVERAGE_SHORT_VIEW_QUANTITY_PRICE}
								/>
							</span>
							{`${packagePrice} ${item.standartPackagingPrice.currency.label}`}
						</div>
						<div className="bsv-footer__item bsv-footer__buttons">
							<FontAwesomeIcon icon="cart-plus" />
							<Button
								caption={(
									<FontAwesomeIcon icon={faCartPlus} />
								)}
								onClick={onButtonClick}
								className={buttonClassName}
							/>
						</div>
					</div>
				</div>
			)}
		</Context.Consumer>
	);
};

BeverageShortView.propTypes = {
	item: PropTypes.object,
	onButtonClick: PropTypes.func,
	buttonCaption: PropTypes.any,
	buttonClassName: PropTypes.string,
};

BeverageShortView.defaultProps = {
	item: null,
	onButtonClick: () => {},
	buttonCaption: 'Add to Cart',
	buttonClassName: '',
};

export default BeverageShortView;
