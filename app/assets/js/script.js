
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

				<div class="feature_products--items">

				<div class="feature_products--header">Featured Product </div>

					<div class="feature_products--items-image"><img src="../app/assets/images/our-start-i.jpg" alt="no image"> </div>
				
					<div class="feature_products--items-title">${item.name}</div>
				
					<div class="feature_products--items-brand">Brand: ${item.brand} </div>
				
					<select>
						<option value="" disabled selected>Select Size</option>
						${['small', 'medium', 'large'].map(s => {
							if (itemSizes.indexOf(s) === -1) return '';
							return `<option value="${s}">${s} - ${item.size[s]} In stock</option>`;
						}).join('')}
					</select>

					<div class="feature_products--items-description">Description:<br> ${item.description} </div>

					<div class="feature_products--items-product_code">Product ID: ${item.productid} </div>

					<button class="feature_products--items-buy">Add to basket</button>
					<button class="feature_products--items-save">Save for later</button>

				</div>
			`);
			featuredContainer.appendChild(featuredProduct);

			}; 

			if (item.productid != featuredProductId)  {

				// create a product listing
				const product = document.createRange().createContextualFragment(`

					<div class="products--items">

						<div class="products--items-image"><img src="../app/assets/images/our-start-i.jpg" alt="no image"> </div>
					
						<div class="products--items-title">${item.name}</div>
					
						<div class="products--items-brand">Brand: ${item.brand} </div>
					
						<select>
							<option value="" disabled selected>Select Size</option>
							${['small', 'medium', 'large'].map(s => {
								if (itemSizes.indexOf(s) === -1) return '';
								return `<option value="${s}">${s} - ${item.size[s]} In stock</option>`;
							}).join('')}
						</select>

						<div class="products--items-description">Description:<br> ${item.description} </div>

						<div class="products--items-product_code">Product ID: ${item.productid} </div>

						<button class="products--items-buy">Add to basket</button>
						<button class="products--items-save">Save for later</button>

					</div>
				`);
				container.appendChild(product);
			};
			
		});
	};
};