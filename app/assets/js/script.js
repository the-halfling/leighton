
var xhr = new XMLHttpRequest(),
    url = 'https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api?TableName=products';
    featuredProductId = '0m8hjmd721' ;
const container = document.querySelector('.products'),
	  featuredContainer = document.querySelector('.featured_product');

xhr.open("GET", url);
xhr.setRequestHeader('x-api-key', 'zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4')
xhr.send();

xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){

    	const data = JSON.parse(this.response);
    	console.log (data);
		data.Items.forEach(item => {
			const itemSizes = [];

			// find available sizes for item
			Object.keys(item.size).forEach(s => {
				if (item.size[s] > 0) {
					itemSizes.push(s);
				}
			});

			if (item.productid == featuredProductId) {
			// create a product listing
			const featuredProduct = document.createRange().createContextualFragment(`

				<div class="featured_product__items">

				<div class="featured_product__header">Featured Product </div>

					<div class="featured_product__items--image"><img src="../app/assets/images/no-image.jpg" alt="no image"> </div>
				
					<div class="featured_product__items--title">${item.name}</div>
				
					<div class="featured_product__items--brand">Brand: ${item.brand} </div>
				
					<select>
						<option value="" disabled selected>Select Size</option>
						${['small', 'medium', 'large'].map(s => {
							if (itemSizes.indexOf(s) === -1) return '';
							return `<option value="${s}">${s} - ${item.size[s]} In stock</option>`;
						}).join('')}
					</select>

					<div class="featured_product__items--description">Description:<br> ${item.description} </div>

					<div class="featured_product__items--product_code">Product ID: ${item.productid} </div>

					<button class="btn btn--red">Add to basket</button>
					<button class="btn btn--white">Save for later</button>

				</div>
			`);
			featuredContainer.appendChild(featuredProduct);

			}; 

			if (item.productid != featuredProductId)  {

				// create a product listing
				const product = document.createRange().createContextualFragment(`

					<div class="products__items">

						<div class="products__items--image"><img src="../app/assets/images/our-start-i.jpg" alt="no image"> </div>
					
						<div class="products__items--title">${item.name}</div>
					
						<div class="products__items--brand">Brand: ${item.brand} </div>
					
						<select>
							<option value="" disabled selected>Select Size</option>
							${['small', 'medium', 'large'].map(s => {
								if (itemSizes.indexOf(s) === -1) return '';
								return `<option value="${s}">${s} - ${item.size[s]} In stock</option>`;
							}).join('')}
						</select>

						<div class="products__items--description">Description:<br> ${item.description} </div>

						<div class="products__items--product_code">Product ID: ${item.productid} </div>

						<button class="btn btn--red">Add to basket</button>
						<button class="btn btn--white">Save for later</button>

					</div>
				`);
				container.appendChild(product);
			};
			
		});
	};
};