$(document).ready(function() {
	const showData = $('#show-data');
	const urlApi = 'https://www.mercadobitcoin.net/api/BTC/ticker/';

	function updated( elem ) {
		let el = $(elem);

		el.addClass('updated');

		setTimeout(function() {
			el.removeClass('updated');
		}, 500);
	}

	function getData() {
		console.log( 'opa' );
		$.getJSON(urlApi, function(data) {

			// var dados = Object.keys(data.ticker);

			// for ( let i = 0; i < dados.length; i++ ) {
			// 	const item = dados[i];
			// 	const textItem = showData.find('.data-' + item).find('span');
			// 	const valorAnterior = textItem.text();
			// 	const valorNovo = Number( data.ticker[item] ).toFixed(2).replace('.', ',');

			// 	textItem.text( valorNovo );

			// 	if ( valorAnterior < valorNovo || valorAnterior > valorNovo ) {
			// 		updated( textItem );
			// 	}
			// }


			let dados = data.ticker;

			for ( let prop in dados ) {
				if ( dados.hasOwnProperty(prop) ) {
					let item     = dados[prop];
					let textItem = showData.find('.data-' + prop).find('span');
					let prevVal  = textItem.text();
					let newVal   = Number( item ).toFixed(2).replace('.', ',');

					textItem.text( newVal );

					if ( prevVal < newVal || prevVal > newVal ) {
						updated( textItem );
					}
				}
			}
		});
	}
	getData();

	setInterval(getData, 3000);
});