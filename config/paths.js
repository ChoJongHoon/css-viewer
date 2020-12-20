const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
	appPath: resolveApp('.'),
	appBuild: resolveApp('build'),
	appBuildJS: resolveApp('build/js'),
	appPublic: resolveApp('public'),
	appSrc: resolveApp('src'),
}
