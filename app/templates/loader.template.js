exports.loader = (options) => {
	return `<?xml version="1.0" encoding="UTF-8" ?>
		<document>
		   <head>
			  .centerImg { margin: 0 0 0 625; }
		   </head>
		   <descriptiveAlertTemplate>
			  <title>Hello!</title>
			  <img class="centerImg" src="http://tevp.net/images/collection/funny/catz/proceed%20kitty.jpg" width="500" height="500"/>
			  <row>
				  <button>
					 <text>Yes</text>
				  </button>
				  <button>
					 <text>No</text>
				  </button>
			  </row>
		   </descriptiveAlertTemplate>
		</document>`
};