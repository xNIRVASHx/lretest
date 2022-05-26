//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Thu May 26 12:00:11 2022
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{
	//Uploaded to github
	
	web.setSocketsOption('SSL_VERSION', 'AUTO');

	web.addAutoHeader('Sec-Fetch-Site', 
		'none');

	web.addAutoHeader('Sec-Fetch-Mode', 
		'navigate');

	web.addAutoHeader('Sec-Fetch-Dest', 
		'document');

	web.addHeader('Sec-Fetch-User', 
		'?1');

	web.addHeader('Upgrade-Insecure-Requests', 
		'1');

	web.addAutoHeader('sec-ch-ua', 
		'\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"');

	web.addAutoHeader('sec-ch-ua-mobile', 
		'?0');

	web.addAutoHeader('sec-ch-ua-platform', 
		'\"Windows\"');
	
lr.startTransaction('Launch');

	web.url(
		{
			name : 'advantageonlineshopping.com', 
			url : 'https://advantageonlineshopping.com/', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : '', 
			snapshot : 't8.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '/main.min.js'},
				{url : '/services.properties'},
				{url : '/css/images/closeDark.png'},
				{url : '/css/images/logo.png'},
				{url : '/css/fonts/roboto_light_macroman/Roboto-Light-webfont.woff', referer : 'https://advantageonlineshopping.com/css/main.min.css'},
				{url : '/css/fonts/roboto_medium_macroman/Roboto-Medium-webfont.woff', referer : 'https://advantageonlineshopping.com/css/main.min.css'},
				{url : '/css/fonts/roboto_regular_macroman/Roboto-Regular-webfont.woff', referer : 'https://advantageonlineshopping.com/css/main.min.css'},
				{url : '/css/images/arrow_right.png', referer : 'https://advantageonlineshopping.com/css/main.min.css'},
				{url : '/css/fonts/roboto_bold_macroman/Roboto-Bold-webfont.woff', referer : 'https://advantageonlineshopping.com/css/main.min.css'},
				{url : '/css/fonts/roboto_thin_macroman/Roboto-Thin-webfont.woff', referer : 'https://advantageonlineshopping.com/css/main.min.css'},
				{url : '/catalog/fetchImage?image_id=laptops'},
				{url : '/catalog/fetchImage?image_id=speakers'},
				{url : '/catalog/fetchImage?image_id=tablets'},
				{url : '/catalog/fetchImage?image_id=mice'},
				{url : '/catalog/fetchImage?image_id=headphones'},
				{url : '/css/images/Special-offer.jpg'},
				{url : '/css/images/GoUp.png'},
				{url : '/css/images/facebook.png'},
				{url : '/css/images/twitter.png'},
				{url : '/css/images/linkedin.png'},
				{url : '/css/images/Banner1.jpg'},
				{url : '/css/images/Banner2.jpg'},
				{url : '/css/images/Banner3.jpg'},
				{url : '/css/images/Popular-item3.jpg'},
				{url : '/css/images/Popular-item2.jpg'},
				{url : '/css/images/Popular-item1.jpg'},
				{url : '/css/images/Filter.png'},
				{url : '/catalog/fetchImage?image_id=4200'},
				{url : '/catalog/fetchImage?image_id=4400'},
				{url : '/css/images/category_banner_4.png'},
				{url : '/catalog/fetchImage?image_id=4700'},
				{url : '/catalog/fetchImage?image_id=4600'},
				{url : '/catalog/fetchImage?image_id=4300'},
				{url : '/catalog/fetchImage?image_id=4100'},
				{url : '/catalog/fetchImage?image_id=4500'}
			]
		}
	);
lr.endTransaction('Launch', lr.AUTO);
lr.startTransaction('Second');
	// Possible OAUTH authorization was detected. It is recommended to correlate the authorization parameters.
	web.addAutoHeader('Sec-Fetch-Mode', 
		'cors');

	web.addAutoHeader('Sec-Fetch-Dest', 
		'empty');

	web.addAutoHeader('Sec-Fetch-Site', 
		'same-origin');

	web.url(
		{
			name : 'ALL', 
			url : 'https://advantageonlineshopping.com/catalog/api/v1/DemoAppConfig/parameters/by_tool/ALL', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't9.inf', 
			mode : 'HTML'
		}
	);

	web.addHeader('Origin', 
		'https://advantageonlineshopping.com');

	web.addHeader('SOAPAction', 
		'com.advantage.online.store.accountserviceGetAccountConfigurationRequest');

	web.addHeader('X-Requested-With', 
		'XMLHttpRequest');

	web.customRequest(
		{
			name : 'GetAccountConfigurationRequest', 
			url : 'https://advantageonlineshopping.com/accountservice/ws/GetAccountConfigurationRequest', 
			method : 'POST', 
			resource : 0, 
			recContentType : 'text/xml', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't10.inf', 
			mode : 'HTML', 
			encType : 'text/xml; charset=UTF-8', 
			body : '<?xml version=\"1.0\" encoding=\"UTF-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><soap:Body><GetAccountConfigurationRequest xmlns=\"com.advantage.online.store.accountservice\"></GetAccountConfigurationRequest></soap:Body></soap:Envelope>'
		}
	);

	web.url(
		{
			name : 'categories', 
			url : 'https://advantageonlineshopping.com/catalog/api/v1/categories', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't11.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'search', 
			url : 'https://advantageonlineshopping.com/catalog/api/v1/deals/search?dealOfTheDay=true', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't12.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'popularProducts.json', 
			url : 'https://advantageonlineshopping.com/app/tempFiles/popularProducts.json', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't13.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'home-page.html', 
			url : 'https://advantageonlineshopping.com/app/views/home-page.html', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't14.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'products', 
			url : 'https://advantageonlineshopping.com/catalog/api/v1/categories/4/products', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't15.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'attributes', 
			url : 'https://advantageonlineshopping.com/catalog/api/v1/categories/attributes', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't16.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'category-page.html', 
			url : 'https://advantageonlineshopping.com/app/views/category-page.html', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't17.inf', 
			mode : 'HTML'
		}
	);

	lr.thinkTime(6);
	web.url(
		{
			name : '20', 
			url : 'https://advantageonlineshopping.com/catalog/api/v1/products/20', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't18.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'products_2', 
			url : 'https://advantageonlineshopping.com/catalog/api/v1/categories/4/products', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't19.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'all_data', 
			url : 'https://advantageonlineshopping.com/catalog/api/v1/categories/all_data', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't20.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'product-page.html', 
			url : 'https://advantageonlineshopping.com/app/views/product-page.html', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : 'https://advantageonlineshopping.com/', 
			snapshot : 't21.inf', 
			mode : 'HTML'
		}
	);
lr.endTransaction('Second', lr.AUTO);
	return 0;
}

