exports.error = (options) => {
	let parser = new DOMParser();
	let templateString = `<?xml version="1.0" encoding="UTF-8" ?>
		<document>
			<alertTemplate>
				<description>${options.translate.errorRandomErrorAlertText}</description>
				<button>
					<text>${options.translate.utilOk}/text>
				</button>
			</alertTemplate>
		</document>`;
	return parser.parseFromString(templateString, "application/xml");
};