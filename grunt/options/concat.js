//
// Used to concat templates with code
//
module.exports = {
	dist: {
		files: {
			'dist/scripts/swagger-ui.js': [
				'dist/scripts/swagger-ui.js',
				'dist/scripts/swagger-client.js',
				'dist/scripts/swagger-model.js',
				'dist/scripts/swagger-modules.js',
				'dist/scripts/swagger-parser.js',
				'dist/scripts/swagger-i18n.js',
				'dist/scripts/i18n/en.js',
				'dist/scripts/templates.js',
			]
		}
	},
	copyright: {
		files: {
			'dist/css/swagger-ui.min.css': [
				'copyright.txt',
				'dist/css/swagger-ui.min.css'
			],
			'dist/less/swagger-ui.less': [
				'copyright.txt',
				'dist/less/swagger-ui.less'
			],
			'dist/scripts/swagger-ui.min.js': [
				'copyright.txt',
				'dist/scripts/swagger-ui.min.js'
			],
			'dist/scripts/modules/swagger-external-references.min.js': [
				'copyright.txt',
				'dist/scripts/modules/swagger-external-references.min.js'
			],
			'dist/scripts/modules/swagger-xml-formatter.min.js': [
				'copyright.txt',
				'dist/scripts/modules/swagger-xml-formatter.min.js'
			],
			'dist/scripts/modules/swagger1-to-swagger2-converter.min.js': [
				'copyright.txt',
				'dist/scripts/modules/swagger1-to-swagger2-converter.min.js'
			],
			'dist/scripts/modules/swagger-yaml-parser.min.js': [
				'copyright.txt',
				'dist/scripts/modules/swagger-yaml-parser.min.js'
			],
			'dist/scripts/i18n/fr.min.js': [
				'copyright.txt',
				'dist/scripts/i18n/fr.min.js'
			]
		}
	}
}