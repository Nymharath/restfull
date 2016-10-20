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
  						'<tr title="' + data.Search[i].Title + '" >' +
	  						'<div class="row">' +
	  							'<div class="col-md-2">' +
	  								'<td>' + '<img src="' + data.Search[i].Poster +'" alt="' + data.Search.Title + '">' + '</td>' + 
	  							'</div>' +
	  							'<div class="col-md-10">' +
	  								'<div class="row">' + '<td><strong>Titolo: </strong></td>' +  '<td>' + data.Search[i].Title + '</td>' + '</div>' + 						  						
	  								'<div class="row">' + '<td><strong>Anno: </strong></td>' +  '<td>' + data.Search[i].Year + '</td>' + '</div>' + 						  						
	  								'<div class="row">' + '<td><strong>Genere: </strong></td>' +  '<td>' + data.Search[i].Type + '</td>' + '</div>' +
	  							'</div>' +
	  						'</div>' +
	  					'</tr>';
  				} /*END FOR*/
  				
  				$('#searchResultsTable').html(resultsTable);
  				
  			} /*END ELSE*/

		}); /*END FIRST THEN*/
		
	}); /*END BUTTON BIND*/

	$('#searchResultsTable').on('click', 'tr', function(event){
		// event.preventDefault();
		
		var title = $(this).attr('title');
		var url = endpoint + '?t=' + title;
		$.ajax ({
			url : url,
			method : 'GET',
		}).then(function(data) {
			console.log(data);
		})

	});
}); /*END DOCUMENT READY*/
