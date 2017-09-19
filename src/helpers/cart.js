const RULE_TYPE_PRICE = 'price';
const RULE_TYPE_REDUCTION = 'reduction';
const RULE_TYPE_FREE = 'free';

/**
 * Update item quantity in order.
 * 
 * @param {Integer} item 
 * @param {Integer} quantity
 * @return {Integer}
 */
export const updateItemQuantity = (current = 0, quantity = 1) => (
	current + quantity
);

/**
 * Calculate discounts based on supplied rules.
 * 
 * @param {Object} rules 
 * @param {Integer} quantity 
 * @param {Object} product
 * @return {Number}
 */
export const updateItemTotal = (rules = {}, quantity, product) => {
	const rule = rules[product.id] || {};

	switch (rule.type) {
		case RULE_TYPE_PRICE:
			return quantity * rule.price;
		case RULE_TYPE_FREE:
			// Saturday afternoon...
			if (quantity >= rule.order) {
				const base = Math.floor(quantity / rule.order);
				const free = base * rule.free;
				const remainder = quantity - (base * rule.order);

				quantity = ((rule.order * base) - free) + remainder;
			}

			return quantity * product.price;
		case RULE_TYPE_REDUCTION:
			return quantity * ((quantity >= rule.order) ? rule.price: product.price);
		default:
			return quantity * product.price;
	}
};

/**
 * Calculate grand total for order.
 * 
 * @param {Array} items
 * @return {Number}
 */
export const calculateTotal = (items) => (
	items.map(({ total }) => total).reduce((accumulator, itemTotal) => (accumulator += itemTotal), 0)
);
