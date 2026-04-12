import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	        newConfig.logger = newConfig.logger.child({ module: 'nuxmeg-max' })
    newConfig.logger.info('[ SYSTEM ] INITIALIZING MEG CORE...')

	
	return makeCommunitiesSocket(newConfig)
}

export default makeWASocket
