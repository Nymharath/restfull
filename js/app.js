$(document).ready(function() {

	var endpoint = 'http://www.omdbapi.com/'
	$('#noResultsMessage').hide();

	$('#submit').on('click', function(event){
		event.preventDefault();
		var searchString = $('#title').val();

		
		var url = endpoint + '?s=' + searchString;
		$.ajax({
  			url: url,
  			method: 'GET'
		}).then(function(data) {
  			console.log(data);

  			var resultsTable = '';
  			if (data.Search.lenght == 0) {
  				$('#noResultsMessage').html('Nessun risultato trovato');
  			} else {
  				$('#noResultsMessage').hide();
  				for (var i = 0; i < data.Search.length; i++) {
  					resultsTable +=
  						'<tr>' +
	  						'<div class="row">' +
	  							'<div class="col-md-2">' +
	  								'<img src="' + data.Search[i].Poster +'" alt="' + data.Search.Title + '">' + 
	  							'</div>' +
	  							'<div class="col-md-10">' +
	  								'<td><strong>Titolo: </strong></td>' +  '<td>' + data.Search[i].Title + '</td>' +  						  						
	  								'<td><strong>Anno: </strong></td>' + '<td>' + data.Search[i].Year + '</td>' + 						  						
	  								'<td><strong>Genere: </strong></td>' + '<td>' + data.Search[i].Type + '</td>' +
	  							'</div>' +
	  						'</div>' +
	  					'</tr>';
  				}
  				
  				$('#searchResultsTable').html(resultsTable);
  				



  			}

		});
		
	});
});
