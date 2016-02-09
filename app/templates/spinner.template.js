exports.spinner = () => {
	return `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <head>
          	<style>
          		.darkBackgroundColor {
					background-color: #16181a;
				}
          	</style>
          </head>
		  <loadingTemplate theme="dark" class="darkBackgroundColor">
			<activityIndicator>
			</activityIndicator>
		  </loadingTemplate>
		</document>`;
};